var printf=require('printf'), clone=require('clone'), async=require('async'), assert=require('assert'), path=require('path');
var ss=require('./ss.js');
var args=require('yargs')
	.boolean('debugout')
	.argv;
var debugout=require('debugout')(args.debugout);
var onlineUsers=require('./online.js'), alltables=require('./tables.js');
var User=require('./User.js');

function send(data) {
	var payload=JSON.stringify(data);
	function _h(err) {
		err && debugout(err, '@ sending', data);
	}
	if (payload.length>100) return (this.send(payload, {compress:true}, _h) || true);
	this.send(payload, _h);
	return true;
}

function broadcast(data, excludeUser) {
	var all=onlineUsers.all;
	if (typeof excludeUser=='object') {
		for (var i=0; i<all.length; i++) {
			if (excludeUser.id==all[i]) continue;
			onlineUsers.get(all[i]).send(data);
		}
	}else {
		for (var i=0; i<all.length; i++) {
			onlineUsers.get(all[i]).send(data);
		}		
	}
}
var default_user=User.default_user;

function chkpwd(userid, pwd, cb) {
	g_db.p.users.find({_id:userid, pwd:pwd}).toArray(function(err, r) {
		if (err) return cb(err);
		if (r.length==0) return cb('用户名密码不匹配');
		cb(null);
	});
}

function afterUserIn(err, pack, ws, dbuser) {
	if (err) return ws.sendp({err:err});
	if (dbuser) {
		if (!dbuser.__created) {
			if (dbuser.pwd && dbuser.pwd!=pack.pwd) return ws.sendp({err:'账号密码错'});
			ws.sendp({user:{showId:dbuser.showId}});
		}
		else {
			dbuser.pwd=pack.pwd;
			g_db.p.users.find({_id:'showId'}).limit(1).toArray(function(err, result) {
				if (err) return;
				if (result.length==0) dbuser.showId=1;
				else dbuser.showId=(result[0].v||0)+1;
				g_db.p.users.update({_id:'showId'}, {$set:{v:dbuser.showId}}, {upsert:true});
				ws.sendp({user:{showId:dbuser.showId}});
				delete dbuser.__created;
			});
		}
	}
	// var oldUser=onlineUsers.get(dbuser._id);
	// if (!oldUser) {
	// 	ws.user=new User(ws, dbuser);
	// 	onlineUsers.add(ws.user);
	// }
	// else {
	// 	ws.user=oldUser;
	// 	oldUser.ws=ws;
	// }
	// dbuser.nickname=pack.nickname||pack.id;
	// pack.face && (dbuser.face=pack.face);
	// ws.sendp({c:'showview', v:'hall', user:dbuser, seq:1});
	// broadcast({c:'userin', userid:pack.id, nick:ws.user.nickname}, ws.user);
	// ws.sendp({user:ws.user.pack()});
	// var tbl;
	// if (pack.room) {
	// 	tbl=alltables.find(pack.room);
	// }
	// if (!tbl && ws.user.table) tbl=ws.user.table;
	// if (tbl) {
	// 	ws.user.table=tbl;
	// 	if (false==tbl.enter(ws.user)) {
	// 		ws.user.table=null;
	// 	} else ws.sendp({c:'showview', v:'game'+tbl.roomtype, id:tbl.roomtype, opt:tbl.opt, seq:1});
	// 	return;
	// 	//ws.user.join(pack.room);
	// }
	// if (pack.room) return ws.sendp({err:'没有这个桌子号',seq:1});

	///////////////////////////////////////////////////////////////
	var oldUser=onlineUsers.get(dbuser._id);
	if (!oldUser) {
		ws.user=new User(ws, dbuser);
		onlineUsers.add(ws.user);
		dbuser.nickname=pack.nickname||pack.id;
		pack.face && (dbuser.face=pack.face);
		if (pack.inApp && dbuser.__created) {
			ws.user.storeMail('下载客户端奖励', {tickets:3});
		}
	}
	else {
		ws.user=oldUser;
		oldUser.send({c:'kicked', reason:'账号在其他地方登录了'});
		oldUser.ws.close();
		oldUser.ws=ws;
	}
	ws.sendp({c:'showview', v:'hall', user:dbuser, seq:1});	
	broadcast({c:'userin', userid:pack.id, nick:ws.user.nickname}, ws.user);
	g_db.p.mails.count({to:dbuser._id, used:false}).then(function(c) {
		ws.user.mailCount=c;
	});
	var tbl;
	if (pack.room) {
		tbl=alltables.find(pack.room);
	}
	if (!tbl && ws.user.table) tbl=ws.user.table;
	if (tbl) {
		ws.user.table=tbl;
		if (false==tbl.canEnter(ws.user)) {
			ws.user.table=null;
		} else {
			ws.sendp({c:'showview', v:'game'+tbl.roomtype, id:tbl.roomtype, opt:tbl.opt, seq:1});
			tbl.enter(ws.user);
			if (oldUser) oldUser.backOnline();
		}
		return;
		//ws.user.join(pack.room);
	}
	if (pack.room) return ws.sendp({err:'没有这个桌子号',seq:1});
}
module.exports=function msgHandler(db, createDbJson, wss) {
	g_db={p:db, createDbJson:createDbJson};

	wss.on('connection', function connection(ws) {
		ws.sendp=ws.sendjson=send;
		debugout('someone in');

		ws.on('message', function(data) {
			try {
				var pack=JSON.parse(data);
			} catch(e) {
				return ws.sendp({err:e});
			}
			debugout('recv', pack);
			if (ws.user) {return ws.user.msg(pack);}
			switch (pack.c) {
				case 'login':
					chkpwd(pack.id, pack.pwd, function(err) {
						if (err) return ws.sendp({err:err, cancelRelogin:true});
						createDbJson(db, {col:db.users, key:pack.id, default:default_user, proj:{pwd:0}}, function(err, dbuser) {
							if (err) return ws.sendp({err:'用户不存在'});
							ws.user=new User(ws, dbuser);
							ws.sendp({c:'showview', v:'hall', user:dbuser, seq:1});
							onlineUsers.add(ws.user);
							if (pack.room) ws.user.join(pack.room);
						});
						broadcast({c:'userin', userid:pack.id, nick:ws.user.nickname}, ws.user);
					})
				break;
				case 'reg':
					createDbJson(db, {col:db.users, key:pack.id, alwayscreate:true, default:default_user}, function(err, dbuser) {
						if (err) return ws.sendp({err:err});
						if (!dbuser.__created) return ws.sendp({err:'用户已存在'});
						dbuser.pwd=pack.pwd;
						ws.user=new User(ws, dbuser);
						dbuser.nickname=pack.nickname||pack.id;
						pack.face && (dbuser.face=pack.face);
						ws.sendp({c:'showview', v:'hall', user:dbuser, seq:1});
						onlineUsers.add(ws.user);
						//ws.sendp({user:{id:ws.user.id, nickname:ws.user.nickname, exp:ws.user.exp, }})
						if (pack.room) ws.user.join(pack.room);
						broadcast({c:'userin', userid:pack.id, nick:ws.user.nickname}, ws.user);
					});
				break;
				case 'rol':
					if (onlineUsers.get(pack.id)) {
						debugout('already online, kick old');
						afterUserIn(null, pack, ws, onlineUsers.get(pack.id).dbuser);
					} 
					else createDbJson(db, {col:db.users, key:pack.id, alwayscreate:true, default:default_user}, function(err, dbuser) {
						debugout('new one');
						afterUserIn(err, pack, ws, dbuser);
					});
				break;
				case 'alluser':
					ws.sendp({c:'alluser', u:onlineUsers.all});
				break;
				default:
					ws.sendp({err:'unknown cmd', pack:pack});
			}
		})
		.on('error', console.log)
		.on('close', function() {
			if (ws.user) {
				onlineUsers.remove(ws.user);
				ss('userout', {userid:ws.user.id});
				broadcast({c:'userout', userid:ws.user.id, nick:ws.user.nickname});
			}
		})
	});
};

// ss
setInterval(function() {
	ss('onineCount', {count:onlineUsers.length});
}, 60*1000);