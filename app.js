var server = require('http').createServer()
	, url = require('url')
	, path = require('path')
	, request = require('request')
	, WebSocketServer = require('ws').Server
	, wss = new WebSocketServer({ server: server })
	, express = require('express')
	, app = express()
	, compression = require('compression')
	, bodyParser = require('body-parser')
	, qs = require('querystring')
	, merge = require('merge')
	, printf = require('printf')
	, fs = require('fs')
	, subdirs = require('subdirs')
	, del = require('delete')
	, argv = require('yargs')
		.default('port', 80)
		.boolean('debugout')
		.boolean('dev')
		.describe('ss', '--ss=ip[:port]')
		.demand('mongo')
		.describe('mongo', '--mongo=[mongodb://][usr:pwd@]ip[:port][,[usr:pwd@]ip[:port]]/db, 参考https://docs.mongodb.com/manual/reference/connection-string/')
		.argv;

if (argv.dev) {
	var chcp = require('cordova-hot-code-push-cli');
	chcp.run();
}
//var easym=require('easy-mongo');
var getDB = require('./server/db.js'), ObjectID = require('mongodb').ObjectID;;
var db = null;
var confirmOrder = function () {
	var cb = arguments[arguments.length - 1];
	cb('db is not inited');
}
var crypto=require('crypto');
var md5 = function (str, length) {
	var buf = new Buffer(str.length * 2 + 1);
	var len = buf.write(str, 0);
	str = buf.toString('binary', 0, len);
	var md5sum = crypto.createHash('md5');
	md5sum.update(str);
	str = md5sum.digest('hex');
	if (length == 16) {
		str = str.substr(8, 16);
	}
	return str;
}
var conf = require('./conf.js');
var jrpc = new (require('jrpc-client'))()
	.connect(argv.ss)
	.on('connect', function regServer() {
		var PLATFORM_ID = conf.name, SERVER_ID = 0, ip = require('localIP'), port = argv.port;
		jrpc.call('serverinfo', {
			productName: 'hgame', $: {
				upsert: {
					c: { platformID: PLATFORM_ID, serverID: SERVER_ID }, set: {
						clusterID: PLATFORM_ID + '_' + SERVER_ID, data: {
							ip: ip,
							port: port,
							gm: '/gm',
							key:conf.gmkey,
						}, time: new Date()
					}
				}
			}
		});
	});

var httpf = require('httpf'), debugout = require('debugout')(argv.debugout);
var User = require('./server/User.js');

var external_pf = {};
var tt = require('module-loader')(path.join(__dirname, 'server/pf/*.pf.js'), function () {
	var keys = Object.keys(tt);
	for (var i = 0; i < keys.length; i++) {
		external_pf[path.basename(keys[i], '.pf.js')] = tt[keys[i]];
	}
});

if (argv.debugout) {
	app.use(function (req, res, next) {
		debugout('access', req.url);
		next();
	});
}
/*app.use(function(req, res, next) {
	var p=/^\/wnn[^\/]*(\/.*)$/.exec(req.url);
	req.url=(p?p[1]:req.url)||'/';
	next();
});*/
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true, limit: '500kb' }));
app.use(express.static(path.join(__dirname, 'bin'), { index: 'index.html' }));
app.all('/apple/underReview', httpf(function () {
	return { underReview: true };
}));
app.param('interface', function (req, res, next, intf) {
	req.pf = intf;
	next();
});
app.use('/pf/:interface', function (req, res, next) {
	debugout('pf', req.pf);
	if (external_pf[req.pf]) return external_pf[req.pf].call(null, req, res, function () { res.status(404).end('no such function ' + req.url); });
	res.end('pf ' + req.pf + ' not defined');
});
function dateString(d) {
	return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
}
var mkdirp = require('mkdirp');
var filenameSalt = 0;
app.all('/getUpFileName', httpf({ callback: true }, function (callback) {
	var req = this.req;
	var t = new Date();
	var f = '' + t.getTime() + '.' + filenameSalt + '.jpg';
	var p = path.posix.join('up', dateString(t));
	var fp = path.join(__dirname, 'bin', p);
	filenameSalt++;
	mkdirp(fp, function (err) {
		if (err) return callback(err);
		callback(null, url.resolve(req.originalUrl, path.join('..', p, f)));
	})
}));
app.all('/upload', httpf({ url: 'string', imgBase64: 'string', callback: 'true' }, function (saveTo, imgBase64, callback) {
	var self = this;
	var p = url.parse(saveTo).pathname;
	var fn = path.join(__dirname, 'bin', p);
	var base64Data = imgBase64.replace(/^data:image\/jpeg;base64,/, "");
	fs.writeFile(fn, base64Data, 'base64', function (err) {
		if (err) return callback(err);
		callback(null, { url: url.resolve(self.req.originalUrl, '../' + p) });
	});
}));

var OAuth = require('wechat-oauth');
var wxApp = (function () {
	var ret = {};
	var wechatTokens = {};
	function getT(openid, callback) { callback(null, wechatTokens[openid]) }
	function saveT(openid, t, callback) { wechatTokens[openid] = t; callback(); }
	var apps = [
		{ appId: 'wx06a885d249615565', appSecret: 'a84701bbed690e30ae5d83bee71c8fd9', type: 'JSAPI', partnerKey: 'zxcvbnmasdfghjklqwertyuiop123456', mchId: "1303446201", "wechatRedirectUrl": "", "wechatToken": "JsbOsSLoPxBJKcn8" },
		{ appId: 'wx5408a6af7cd795ad', appSecret: '20ac948cfa13e528f0251b7eb2b6a5cb', type: 'APP', partnerKey: '85NxPgQJX9aFcdf56Hjk9887QsEEwrty', mchId: "1434161602", "wechatRedirectUrl": "", "wechatToken": "JsbOsSLoPxBJKcn8" }
	];
	var Payment = require('wechat-pay').Payment, WeChat = require('wechat-jssdk');
	for (var i = 0; i < apps.length; i++) {
		if (apps[i] == null) continue;
		var o = ret[apps[i].appId] = apps[i];
		var client = new OAuth(o.appId, o.appSecret, getT, saveT);
		var payment = new Payment(o);
		var jssdk = new WeChat.JSSDK(o);
		var wxPaymentMiddleware = require('wechat-pay').middleware;
		o.client = client; o.payment = payment; o.jssdk = jssdk
		app.all('/weixin/' + o.appId + '/pay', wxPaymentMiddleware(o).getNotify().done(function (message, req, res, next) {
			// var self=this;
			// var openid = message.openid;
			confirmOrder(message.out_trade_no, message.total_fee / 100, req.ip, { openid: message.openid }, function (err, status) {
				if (err) return res.reply(new Error(err));
				return res.reply('success');
			});
			// var order_id = message.out_trade_no;
			// var key={_id:ObjectID(orderid)};
			// if (!db) return res.reply(new Error('db is not inited'));
			// db.bills.find(key).limit(1).next(function(err, order) {
			// 	if (err) return res.reply(new Error(err));
			// 	if (order==null) return res.reply(new Error('无此订单'+orderid));
			// 	if (order.pack.rmb!=money) return res.replay(new Error('订单支付金额无效'));
			// 	if (order.used) return res.reply(new Error('订单已使用@'+order.used));
			// 	db.bills.update(key, {$set:{used:{time:new Date(), ip:self.req.ip}}});
			// 	User.fromID(order.user, function(err, user) {
			// 		if (err) return callback(err);
			// 		user.addPackage(order.pack);
			// 		res.reply('success');
			// 	});
			// })
		}));
	}

	ret.get = function (appid) {
		if (appid == null) return ret[apps[0].appId];
		return ret[appid] || ret[apps[0].appId];
	}
	return ret;
})();

app.all('/weixin/verifyurl', httpf({ appid: 'any', redirect: 'string' }, function (appid, redirectUrl) {
	var wxRedirect = url.resolve(this.req.originalUrl, 'ret');
	if (this.req.headers['X-Real-uri']) {

	}
	return wxApp.get(appid).client.getAuthorizeURL(url.format({ protocol: this.req.protocol, hostname: this.req.hostname, pathname: wxRedirect }), redirectUrl, 'snsapi_userinfo');
}));
function isIPv4(str) {
	var reg = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
	return reg.test(str);
}
var Address6 = require('ip-address').Address6;
app.all('/weixin/getWechatpayParams', httpf({ appid: 'any', order: 'string', money: 'number', openid: 'string', host: 'any', callback: true }, function (appid, orderid, money, openid, host, callback) {
	var ip = this.req.headers['x-real-ip'] || this.req.ip;
	if (!isIPv4(ip)) {
		ip = new Address6(ip).to4().address;
	}
	if (typeof host !== 'string') host = null;
	if (host) host = path.join(host, 'weixin/');
	var wxp = wxApp.get(appid);
	debugout('host', host, 'oriUrl', this.req.originalUrl);
	var notify = { protocol: this.req.protocol, hostname: this.req.hostname, pathname: url.resolve(this.req.originalUrl, '' + wxp.appId + '/pay') }
	var order = {
		body: printf('支付%.2f元', money),
		out_trade_no: orderid,
		total_fee: money * 100,
		spbill_create_ip: ip,
		openid: openid,
		trade_type: wxp.type,
		notify_url: url.format(notify)
	};
	debugout('wechat pay params', order);

	wxApp.get(appid).payment.getBrandWCPayRequestParams(order, function (err, r) {
		if (err) return callback(err);
		callback(null, r);
	});
}));
app.all('/weixin/app/pay', httpf({ appid: 'any', order: 'string', callback: true }, function (appid, order, callback) {
	var self = this;
	var wxp = wxApp.get(appid);
	wxp.payment.orderQuery({ out_trade_no: order }, function (err, r) {
		if (err) return callback(err);
		confirmOrder(order, r.total_fee / 100, self.req.ip, callback);
	})
}));
function refreshAndGet(client, openid, token, callback) {
	debugout('refresh token');
	client.refreshAccessToken(token.data.refresh_token, function (err, token) {
		if (err) {
			return callback(err);
		}
		client._getUser({ openid: openid }, token.data.access_token, callback);
	});
}
function ensureGetUser(client, code, openid, tokendata, callback) {
	var that = client;
	if (openid == null) {
		if (code) {
			debugout('get by code');
			return that.getUserByCode(code, callback);
		}
		return callback('openid or code must be set.');
	}
	if (tokendata == null) return callback('tokendata not found');
	that.getToken(openid, function (err, data) {
		if (err) {
			debugout('get token failed, try code');
			return that.getUserByCode(code, callback);
		}
		// 没有token数据
		if (!data) data = tokendata;

		var token = new OAuth.AccessToken(data);
		if (data && token.isValid()) {
			that._getUser({ openid: openid }, token.data.access_token, function (err, userdata) {
				if (err) {
					debugout('getuser failed', err);
					return refreshAndGet(client, openid, token, callback);
				}
				return that.saveToken(openid, data, function () {
					callback(err, userdata);
				});
			});
		} else {
			debugout('token is invaild', token);
			refreshAndGet(client, openid, tokendata, callback);
		}
	});
}
function getWechatUser(code, openid, tokendata, appid, cb) {
	var client = wxApp.get(appid).client;
	debugout('ensureGetUser begin');
	ensureGetUser(client, code, openid, tokendata, function (err, result) {
		debugout('ensureGetUser out', err, result);
		if (err) return cb(err);
		client.getToken(result.openid, function (err, data) {
			if (err) return cb(err);
			debugout('token', data);
			result.token = data;
			cb(null, result);
		})
	});
}

app.all('/weixin/sign', function (req, res) {
	var baseUrl = req.headers.referer || req.query.url;
	if (!baseUrl) return res.send({ err: 'headers.referer or query.url are not defined' });
	var app = wxApp.get(req.appid);
	app.jssdk.getSignature(baseUrl).then(function (signatureDate) {
		signatureDate.appId = app.appId;
		res.json(signatureDate);
	}, function () {
		res.json({ err: 'something wrong' });
	})
		.catch((reason) => { debugout(reason) });
});
app.all('/weixin/ret', httpf({ code: 'any', openid: 'any', tokendata: 'any', appid: 'any', state: 'any', no_return: true }, function (code, openid, tokendata, appid, returnurl) {
	debugout(this.req.body);
	var self = this;
	getWechatUser(code, openid, tokendata, appid, function (err, r) {
		if (err) return self.res.send({ err: err });

		r.id = r.unionid || r.openid;
		var headurl = { hostname: self.req.hostname, protocol: self.req.protocol, pathname: url.resolve(self.req.originalUrl, '../CORS'), query: { u: r.headimgurl } };
		r.face = url.format(headurl);
		r.nla = 1;

		if (returnurl == null) {
			delete r.pf;
			return self.res.send(r);
		}
		r.pf = 'wechat';
		var _url = url.parse(returnurl, true);
		_url.query = merge(_url.query, r);
		delete _url.search;
		delete _url.path;
		delete _url.href;
		self.res.redirect(url.format(_url));
	});
}));
//app.all('/weixin/getuser', httpf({code:'string', callback:true}, getWechatUser));
app.all('/CORS', function (req, res) {
	if (!req.query.u) {
		console.log('CORS error', req.query);
		return res.send({ err: 'query not contain u' });
	}
	request(req.query.u).on('reponse', function (res) {
		res.headers['Access-Control-Allow-Origin'] = '*';
	}).on('error', function (err) { res.send(err) }).pipe(res);
});
app.get('/weixin/verifySite', function (req, res) {
	if (wxApp.get().jssdk.verifySignature(req.query)) {
		res.send(req.query.echostr);
		return;
	}
	res.send("error");
});

getDB(function (err, db, easym) {
	if (err) return console.log(err);
	require('./server')(db, easym.createDbJson, wss);
	server.on('request', app);
	server.listen(argv.port, function () { console.log('Listening on ' + server.address().port) });

	// 购买支持
	app.all('/createOrder', httpf({ userid: 'string', packid: 'string', callback: true }, function (userid, packid, callback) {
		var pack = User.pack_define[packid];
		if (!pack) return callback('no such pack ' + packid);
		db.bills.insertOne({ pack: pack, time: new Date(), user: userid }, function (err, r) {
			if (err) return callback(err);
			callback(null, { orderid: r.insertedId, money: pack.rmb,pack:pack });
		});
	}));
	app.all('/confirmOrder', httpf({orderid:'string', money:'number', callback:true}, function(orderid, money, callback){
		if (money!=0) return callback('订单金额必须为0');
		confirmOrder(orderid, money, this.req.ip, callback);
	}));
	confirmOrder = function (orderid, money, userip, extra, callback) {
		if (typeof extra == 'function') {
			callback = extra;
			extra = null;
		}
		var self = this;
		var key = { _id: ObjectID(orderid) };
		db.bills.find(key).limit(1).next(function (err, order) {
			if (err) return callback(err);
			if (order == null) return callback('无此订单' + orderid);
			if (order.used) return callback('订单已使用@' + order.used);
			if (money != null && order.pack.rmb != money) return callback('充值金额不对');
			var reciept = merge(extra, { time: new Date(), ip: userip });
			db.bills.update(key, { $set: { used: reciept } });
			User.fromID(order.user, function (err, user) {
				if (err) return callback(err);
				var err=user.addPackage(order.pack);
				if (err==true) return callback(null, 'success');
				if (typeof err=='string') return callback(err);
				callback('购买失败');
			});
		})
	}
	app.all('/pay/apple', httpf({ orderid: 'string', productType: 'string', receipt: 'string', actureMoney: 'number', callback: true }, function (orderid, pt, receipt, act_m, callback) {
		// var self=this;
		// var key={_id:ObjectID(orderid)};
		// if (!db) return callback('db is not inited');
		// db.bills.find(key).limit(1).next(function(err, order) {
		// 	if (err) return callback(err);
		// 	if (order==null) return callback('无此订单'+orderid);
		// 	if (order.used) return callback('订单已使用@'+order.used);
		// 	db.bills.update(key, {$set:{used:{time:new Date(), ip:self.req.ip, receipt:receipt, actureMoney:act_m}}});
		// 	User.fromID(order.user, function(err, user) {
		// 		if (err) return callback(err);
		// 		user.addPackage(order.pack);
		// 		callback(null, 'success');
		// 	});
		// })
		confirmOrder(orderid, null, this.req.ip, { receipt: receipt, actureMoney: act_m }, callback);
	}));
	app.all('/gm/addTickets', httpf({ id: 'number', tickets: 'number', sign: 'string', callback:true}, function (id, tickets, sign, callback) {
		if (err) return callback(err);
		var str = '' + id + tickets + conf.gmkey, mysign = md5(str);
		if (sign != mysign) return callback({ err: 'sign err', str: str, wanted: mysign, recv: sign });
		User.fromShowID(id, function (err, user) {
			if (err) return callback(err);
			user.addPackage({ tickets: tickets });
			callback(null, 'success');
		});
	}));
	app.all('/gm/mail', httpf({id:'number', content:'string', sign:'string', callback:true}, function(id, content, sign) {
		if (err) return callback(err);
		var str = '' + content + id +conf.gmkey, mysign = md5(str);
		if (sign != mysign) return callback({ err: 'sign err', str: str, wanted: mysign, recv: sign });
		try {
			content=JSON.parse(content);
		}catch(e) {
			return callback(e);
		}
		User.fromShowID(id, function (err, user) {
			if (err) return callback(err);
			user.storeMail('系统', content);
			callback(null, 'success');
		});		
	}));
	app.all('/gm/user', httpf({id:'number', sign:'string',callback:true}, function(id, sign, callback) {
		if (err) return callback(err);
		var str = '' + id +conf.gmkey, mysign = md5(str);
		if (sign != mysign) {
			debugout({err:'sign err', str: str, wanted: mysign, recv: sign });
			return callback('sign err', {str: str, wanted: mysign, recv: sign });
		}
		User.fromShowID(id, function (err, user) {
			if (err) {
				debugout(err);
				return callback(err);
			}
			callback(null, {id:user.dbuser.showId, nick:user.nickname, tickets:user.tickets, province:user.dbuser.province, city:user.dbuser.city});
		});		

	}));
})

setInterval(function () {
	subdirs(path.join(__dirname, 'bin/up'), 1, function (err, dirs) {
		if (err) return;
		var today = new Date();
		for (var i = 0; i < dirs.length; i++) {
			var dir = path.basename(dirs[i]);
			if (today - new Date(dir) > 7 * 24 * 60 * 1000) {
				del(dirs[i]);
			}
		}
	})
}, 30 * 60 * 1000);