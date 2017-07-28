'use strict';
var onlineUsers=require('./online.js'), ss=require('./ss.js'), EventEmitter=require('events')
var tables=require('./tables.js'), onlineUsers=require('./online.js');
var filterObj=require('filter-object'), async=require('async');
var getDB=require('./db.js');
var clone =require('clone');

var conf={room:{}};

var default_user={
	coin:20000, diamonds:0, level:1, face:'ui://6f69ijynsmakpw', tickets:3, friends:[], sdr:{day:0, last:0}, historycash:0, outlay_exp:0,timelygift_taken_time:0,
};

function getDbuser(userid, proj, cb) {
	User.fromID(userid, proj, function(err, u) {
		if (err) return cb(err);
		cb(null, u.dbuser);
	})
}

var pack_define={
	'1Tickets':{want:{tickets:1, outlay_exp:1}, rmb:0.3},
	'5Tickets':{want:{tickets:5, outlay_exp:8}, rmb:1.5},
	'10Tickets':{want:{tickets:10, outlay_exp:15}, rmb:2.9},
	'1TicketsByDiamonds':{want:{tickets:1, outlay_exp:20,diamonds:-3}, rmb:0},
	'seniorRoomFor9':{want:{tickets:1, outlay_exp:3}, rmb:6},
	'topLvRoomFor12':{want:{tickets:1, outlay_exp:6}, rmb:9},
	'diamondsRoomFor14':{want:{tickets:1, outlay_exp:18}, rmb:18},
	'60Diamonds':{want:{diamonds:60, outlay_exp:6}, rmb:6},
	'300Diamonds':{want:{diamonds:330, outlay_exp:30}, rmb:30},
	'500Diamonds':{want:{diamonds:558, outlay_exp:50}, rmb:50},
	'980Diamonds':{want:{diamonds:1100, outlay_exp:98}, rmb:98},
	'1980Diamonds':{want:{diamonds:2260, outlay_exp:198}, rmb:198},
	'2980Diamonds':{want:{diamonds:3468, outlay_exp:298}, rmb:298},
	'6480Diamonds':{want:{diamonds:7768, outlay_exp:648}, rmb:648},
};
function toProj(arr) {
	var p={};
	for (var i=0; i<arr.length; i++) {
		var key=arr[i];
		if (key[0]=='!') p[key.slice(1)]=0;
		else p[key]=1;
	}
	return p;
}
var lvdef=[0, 25, 75, 125, 175, 225, 275, 325, 375, 425, 475, 525, 575, 625, 675];
class User extends EventEmitter {
	constructor(ws, dbuser) {
		super();
		this.dbuser=dbuser;
		this.table=null;
		this.ws=ws;
		dbuser.loginTime=dbuser.timelygift_taken_time=new Date();
		this.exp=this.exp;

		ss('userin', {userid:this.dbuser._id, nick:this.dbuser.nickname});
	};

	static get pack_define() {return pack_define;}
	static get default_user() {return default_user;}
	
	static fromID(userid, proj, cb) {
		if (typeof proj==='function') {
			cb=proj;
			proj=null;
		}
		if (typeof userid=='string') {
			var user=onlineUsers.get(userid);
			if (user) return cb(null, user);
		}
		getDB(function(err, db, easym) {
			easym.createDbJson(db, {col:db.users, key:userid, default:default_user,projection:proj}, function(err, dbu) {
				if (err) return cb(err);
				cb(null, new User({sendp:function(){}}, dbu));
			});
		})
	}

	fixlevel() {
		var n=this.exp;
		for (var i=lvdef.length-1;i>=0; i--) {
			if (n>=lvdef[i]) {
				this.level=i+1;
				return;
			}
		}
		this.level=1;
	}
	pack() {
		var o=clone(this.dbuser);
		delete o.pwd; delete o.password;
		o.id=o._id;
		o.offline=this.offline||false;
		return o;
	}
	send(msg) {
		return this.ws && this.ws.sendp(msg);
	}
	senderr(e) {return this.send({err:e})}
	// close(msg) {
	// 	if (!msg) msg={c:'kick', reason:'账号在其他地方登录了'};
	// 	this.send(msg);
	// 	this.ws.close();
	// }
	quit() {
		if (this.table && this.table.leave) this.table.leave(this);
		this.offline=true;
		this.emit('out', this);
	}
	copyfrom(u) {
		this.table=u.table;
		this.dbuser=u.dbuser;

		// if (this.table) {
		// 	this.send({c:'showview', v:'game'+this.table.type, id:this.table.type, opt:this.table.opt});
		// 	this.table.enter(this);
		// }
	}
	backOnline() {
		this.offline=false;
		this.emit('backOnline', this);
	}

	get id() {
		return this.dbuser._id;
	}
	get nickname() {
		return this.dbuser.nickname||this.dbuser._id;
	}
	set nickname(str) {
		this.dbuser.nickname=str;
		this.send({user:{nickname:str}});
	}
	get exp() {
		return this.dbuser.exp||0;
	}
	set exp(n) {
		this.dbuser.exp= n;
		this.send({user:{exp:n}});
		this.fixlevel();
	}
	get level() {
		return this.dbuser.level;
	}
	set level(n) {
		var oldlv=this.dbuser.level||1;
		this.dbuser.level=n;
		//if (oldlv==n) return;
		this.send({user:{level:n, baseexp:lvdef[n-1], nextexp:lvdef[n]}});
		if (oldlv<n) {
			this.tickets+=(n-oldlv);
			this.storeMail('升级奖励', {tickets:1});
			this.send({notice:'升级赠送'+(n-oldlv)+'张房卡'});
		}
	}
	
	//玩家财富
	set userWealth(w) {
		this.dbuser.userWealth=w;
		this.send({user:{userWealth:w}});
	}

	get userWealth() {
		return this.dbuser.userWealth;
	}

	//玩家身份榜 isWin:win||fail
	setUserRoleRes(roleType,isWin) {
		if (this.dbuser.hasOwnProperty(roleType)) {
			this.dbuser[roleType][isWin] = this.dbuser[roleType][isWin] + 1;
		} else {
			this.dbuser[roleType] = {
				'win':0,
				'fail':0
			};
			this.dbuser[roleType][isWin] = 1;
		}
	}

	getUserRoleRes(roleType) {
		return this.dbuser.userRoleRes[roleType];
	}

	get diamonds() {
		return this.dbuser.diamonds;
	}
	set diamonds(n) {
		this.dbuser.diamonds=n;
		this.send({user:{diamonds:n}});
	}
	get tickets() {
		return this.dbuser.tickets;
	}
	set tickets(n) {
		this.dbuser.tickets=n;
		this.send({user:{tickets:n}});
	}
	get table() {
		return this._table;
	}
	set table(tbl) {
		this._table=tbl;
		if (tbl==null) return this.send({user:{table:0}});
		this.send({user:{table:tbl.code}});
	}
	get showId() {
		return this._showId;
	}
	set showId(n) {
		this._showId=n;
		this.send({user:{showId:n}});
	}
	get mailCount() {
		if (this._mailCount==null) this._mailCount=0;
		return this._mailCount;
	}
	set mailCount(n) {
		this._mailCount=n;
		this.send({user:{mailCount:n}});
	}
	get offline() {
		return this._offline;
	}
	set offline(b) {
		this._offline=b;
		this.send({user:{offline:b}});
	}
	storeMail(from, content, cb) {
		g_db.p.mails.insert({to:this.id, from:from, content:content, time:new Date(), used:false}, {w:1}, function() {cb && cb.apply(null, arguments)});
	}
	addPackage(packname) {
		var pack=typeof packname=='string'?pack_define[packname]:packname;
		if (!pack) return false;
		var obj=this.dbuser, upd={};
		for (var k in pack.want) {
			var delta=pack.want[k];
			console.log('chk', k, 'have', obj[k], 'delta', delta);
			if (isNaN(obj[k])) return k+'不足';
			if (delta<0 && (obj[k]+delta)<0) return k+'不足';
		}
		for (var k in pack.want) {
			switch (k) {
				case 'freeExpire':
					obj.freeExpire=new Date(new Date().getTime()+pack.want.freeExpire);
				break;
				default:
					var delta=pack.want[k];
					if (isNaN(obj[k])) obj[k]=delta;
					else obj[k]+=delta;
			}
			upd[k]=obj[k];
		}
		this.send({user:upd});
		return true;
	}
	join(code,mima) {
		var tbl=tables.find(code);
		if (!tbl) {
			this.table=null;
			return this.senderr('没有这个桌子号');
		}
		if (this.table && this.table!=tbl) return this.senderr('已经在另外的桌子上');
		if (!tbl.users.hasOwnProperty(this.id)) {
			//输入密码
			if (tbl.opt.hasOwnProperty('mima')&&tbl.opt.mima != ''){
				if (!mima||mima == '') {
					//输入密码
					return this.send({c:'inputMiMa',code:code});
				} else {
					//密码错误
					if (mima != tbl.opt.mima) return this.send({c:'errorMiMa'});;
				}
			}
		}
		this.table=tbl;
		this.send({c:'showview', v:'game'+tbl.roomtype, id:tbl.roomtype, opt:tbl.opt, seq:1});
		tbl.enter(this);
	}
	prepareLeaveTable() {
		var tbl=this.table;
		if (tbl==null) return false;
		this.table=null;
		this.ws.sendp({c:'showview', v:'hall', seq:1});
		if (this.offline) onlineUsers.remove(this);
		return tbl;
	}

	//查询排行榜信息 0等级榜 1身份榜 2财富榜
	findRankInfo(rankType,roleType) {
		var self = this;
		var ret=[];
		var type = 'level';
		if (rankType == 2) {
			type = 'userWealth';
		} else if (rankType == 1) {
			type = this.getRoleType(roleType);
		} else if (rankType == 0) {
			type = 'level';
		}
		g_db.p.users.find({}).sort({type:-1}).limit(10).toArray(function(err,result){
			for (var i=0;i<result.length;i++) {
				var item = result[i];
				ret.push({
					rankId:i+1,
					nickname:item.nickname,
					level:item.level,
					userWealth:item.userWealth,
					userRoleRes:item[type]
				});
			}
			self.send({c:'rankInfo',type:rankType,v:ret});
		});
	}

	getRoleType(i) {
		//0 平民 1狼人 2预言家 3 女巫 4猎人 5守卫 6白痴
		var roleObj = {
			0:'villager',1:'werewolf',2:'prophet',3:'witch',4:'hunter',5:'defender',6:'idiot'
		}
		return roleObj[i]
	}

	msg(pack) {
		var self=this;
		switch(pack.c) {
			case 'backhall':
				this.ws.sendp({c:'showview', v:'hall',opt:{hasRoom:pack.code}});
			break;
			case 'entergame':
				//密码大于6位
				if (pack.hasOwnProperty('opt')&&pack.opt.hasOwnProperty('mima')&&pack.opt.mima.length > 6) {
					this.send({c:'errorTip', str:'密码长度超限制'});
					return;
				}
				//之前有桌子则移除
				// if (this.table) {
				// 	this.table.wantdismiss(this);
				// }
				//之前有桌子则不能再创建
				if (this.table) {
					// this.send({c:'showview', v:'game'+pack.roomtype, id:pack.roomtype, opt:pack.opt, seq:1});
					 return this.send({err:'已经在其他桌子上了'});
				}
				var tbl=tables.availble(pack.roomtype, pack.opt);
				if (!tbl) return this.senderr('没有可用的桌子了');
				this.table=tbl;
				// console.log(tbl);
				this.send({c:'showview', v:'game'+pack.roomtype, id:pack.roomtype, opt:pack.opt, seq:1});
				tbl.enter(this);
			break;
			case 'leavegame':
				var tbl=self.table;//self.prepareLeaveTable();
				if (!tbl) return this.send({err:'不在任何桌子上'});
				tbl.leave(this);
				this.ws.sendp({c:'showview', v:'hall'});
			break;
			case 'dismissgame':
				var tbl=self.table;//self.prepareLeaveTable();
				if (!tbl) return this.send({err:'不在任何桌子上'});
				tbl.wantdismiss(this);
			break;
			case 'getuserinfo':
				var userid=Array.isArray(pack.userid)?pack.userid:[pack.userid];
				var attr=Array.isArray(pack.attr)?pack.attr:[pack.attr];
				attr.unshift('!pwd');
				var o={c:'userinfo', u:[]};
				var t=[];
				var proj=toProj(attr);
				for (let i=0; i<userid.length; i++) {
					t.push(function(cb) {
						getDbuser(userid[i], proj, function(err, dbuser) {
							o.u[userid[i]]=filterObj(dbuser, attr);
							cb(err);
						});
					});
				}
				async.parallel(t,function(err) {
					o.err=err;
					self.send(o);
				});
			break;
			case 'sdr':
			break;
			case 'buyCoin':
			break;
			case 'buyDiamond':
				if (pack.useVipChanel) {
					if (!this.dbuser.vipChanel) return self.ws.sendp({c:'buyDiamond', err:'你不能使用特别VIP购买通道'});
					g_db.createDbJson(g_db.p, {col:g_db.p.bills, alwaycreate:true}, function(err, bill) {
						bill._id=createBill(pack);
						self.ws.sendp({c:'pay', tag:bill._id, title:'钻石', desc:printf('%d个钻石', pack.amount)});
					})
				}
			break;
			case 'buyPack':
			break;
			case 'gift@100rmb':
				var obj=this.dbuser;
				if (obj.used_outlay_exp==null) obj.used_outlay_exp=0;
				if (obj.outlay_exp-obj.used_outlay_exp>100) {
					obj.used_outlay_exp+=100;
					obj.freeExpire=new Date(new Date().getTime()+2*60*60*1000);
					this.send({user:{freeExpire:obj.freeExpire, used_outlay_exp:obj.used_outlay_exp}});
				}
			break;
			case 'firstMoney':
				var obj=this.dbuser;
				obj.freeExpire=new Date(new Date().getTime()+24*60*60*1000);
				this.send({user:{freeExpire:obj.freeExpire}});
			break;
			case 'timelyGift':
				var obj=this.dbuser;
				var now=new Date();
				if (now-obj.timelygift_taken_time<5*60*1000) return this.senderr('还没到时间呢，不能领奖');
				obj.timelygift_taken_time=now;
				obj.outlay_exp+=1;
				this.send({user:{outlay_exp:obj.outlay_exp, timelygift_taken_time:obj.timelygift_taken_time}});
			break;
			case 'mkmail':
				self.storeMail(pack.from, pack.content);
				self.mailCount++;
			break;
			case 'rcvmail':
				g_db.p.mails.find({_id:pack.mailid, used:false}).limit(1).toArray(function(err, mails) {
					if (err) return self.send({err:err});
					var mail=mails[0];
					if (!mail) return self.send({err:printf('no such mail %d', pack.mailid)});
					g_db.p.mails.update({_id:pack.mailid}, {$set:{used:true}});
					self.addPackage({want:mail.content});
					self.mailCount--;
					//self.update('gifts');
					//self.send({user:{gifts:self.dbuser.gifts}});
				});
			break;
			// case 'mail':
			// case 'mails':
			// 	g_db.p.mails.find({used:false, to:this.id}).sort({_t:-1}).limit(20).toArray(function(err, mails) {
			// 		if (err) return self.send({err:err});
			// 		self.send({c:'mails', mails:mails});
			// 	});
			// break;
			case 'gift':
				pack.giftnum=pack.giftnum||1;
				var need=pack.giftnum*conf.gifts[pack.giftname].coin;
				if (need>this.dbuser.coin) return this.send({err:printf('not enough money, need %d', need)});
				this.dbuser.coin-=need;
				this.send({user:{coin:this.dbuser.coin}});
				getDbuser({nickname:pack.to}, function(err, dbuser) {
					if (err) return self.send({err:err});
					var mail={content:{gifts:{}}, _t:new Date(), from:self.dbuser.nickname||self.id, used:false};
					mail.content.gifts[pack.giftname]=pack.giftnum||1;
					addMail(dbuser, mail);
				});
			break;
			case 'sellgift':
				var gifts=this.dbuser.gifts;
				if (!gifts) return this.send({err:'no gifts'});
				var gift=gifts[pack.giftid];
				if (!gift) return this.send({err:printf('no such gift %s', pack.giftid)});
				if (gift<pack.count) return this.send({err:printf('not enough gift number %d', pack.count)});
				var left=gifts[pack.giftid]-pack.count;
				if (left) gifts[pack.giftid]=left;
				else delete gifts[pack.giftid];
				this.dbuser.coin+=conf.gifts[pack.giftid].coin*pack.count;
				this.update('gifts', 'coin');
			break;
			case 'board':
				var type=listboard[pack.type];
				if (!type) return this.send({err:printf('no such board %s', pack.type)});
				var now=new Date();
				if (now-type.time<=(10*60*1000)) return this.send({c:'board', type:pack.type, board:type.b});
				var proj={nickname:1, vip:1, face:1};
				proj[pack.type]=1;
				g_db.p.users.find({}, proj, {limit:20, sort:[[pack.type, 'desc']]}).toArray(function (err, r) {
					if (err) return;
					type.time=now;
					type.b=r;
					self.send({c:'board', type:pack.type, board:r});
				});
			break;
			case 'createInviteCode':
				if (this.table) this.send({c:'inviteCode', v:this.table.scene.roomid});
				else this.senderr('no table');
			break;
			case 'join':
				this.join(pack.code,pack.mima);
			break;
				//this.send({c:'table.status', id:2});
			case 'mails':
				var ret=[];
				var cur=g_db.p.mails.find({to:this.id, used:false}).sort({time:-1}).limit(30).toArray(function(err, result) {
					for (var i=0; i<result.length; i++) {
						var item=result[i];
						ret.push({id:item._id, from:item.fromName, to:self.nickname, time:item.time, used:item.used, content:item.content});
					}
				});
				this.send({c:'mails', v:ret});
			break;
			case 'trans':
				var dest=onlineUsers.get(pack.to);
				if (dest) {
					dest.send(pack);
				}
				break;
			case 'rankInfo':
				this.findRankInfo(pack.rankType,pack.roleType);
				break;
			default:
				var isprocessed=this.emit(pack.c, pack, this);
				this.table && this.table.msg(pack, this);
				//if ((!this.table || !this.table.msg(pack, this)) && !isprocessed) this.ws.sendp({err:'unknown cmd', pack:pack});
				
			break;
		}
	}
};
var listboard={coin:{b:[], time:0}, diamond:{b:[], time:0}, win:{b:[], time:0}};

module.exports=User;