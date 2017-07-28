'use strict';
var async=require('async'), assert=require('assert'), EventEmitter=require('events'), clone=require('clone');
var alltable=require('../tables.js');
var once=require('once');
var msgDispatcher=new EventEmitter();

var __rule=require('./rule.js'), calcR=__rule.calcR, cardv=__rule.cardv;
var syncfy=require('sync-obj');
const filterObj = require('filter-obj');

var debugout=require('debugout')(require('yargs').argv.debugout);

var TABLE_STATUS={
	WAITING:0,
	STARTING:3,
	SEL_FIRST_HOLDER:12,
	SEL_HOLDER:13,
	BETTING:5,
	FAPAI:6,
	XUANPAI:7,
	BIPAI:8,
	JIESUAN:9,
	SETOVER:10,
	OVER:15
}

function waitUserCmd(userlist, cmd, fn, timeout, callback) {
	if (typeof timeout=='function') {
		callback=timeout;
		timeout=null;
	}
	var asyncF=function(innerCb) {
		async.each(userlist, function(u, cb) {
			if (!u) return cb();
			u.once(cmd, function(pack, comesfrom) {
				if (cb) {
					cb(null, pack);
					fn(null, pack,comesfrom);
					cb=null;
				}
			})
			.once('out', function(u) {
				if (cb) {
					cb(null, 'out');
					fn('out', null, u);
					cb=null;
				}
			});
		},
		innerCb);}
		if (timeout) asyncF=async.timeout(asyncF, timeout);
		asyncF(callback);
}
function waitUserAction(userlist, fn, timeout, callback) {
	if (typeof timeout=='function') {
		callback=timeout;
		timeout=null;
	}
	var asyncF=function(innerCb) {
		async.each(userlist, function(u, cb) {
			if (!u) return cb();
			fn(u, cb);
		},
		innerCb);
	};
	if (timeout) asyncF=async.timeout(asyncF, timeout);
	asyncF(callback);
}
function fixratio(r) {
	return (r==0?1:r);
}
class RandomHolder {
	constructor(code, type, opt, onend) {
		var self=this;
		this.code=code;
		this.type=type;
		this.users={};
		this.opt=opt;
		this.onend=onend;
		var gd=this.gamedata={};
		gd.baseScore=(opt.dizhu==null?100:opt.dizhu);
		gd.holder=null;
		gd.seats=new Array(5);	// 
		gd.status=TABLE_STATUS.WAITING;
		gd.roomid=code;
		gd.dizhu=opt.dizhu||100;
		syncfy(gd, function(v) {
			var o=self.mk_transfer_gamedata(v);
			o.seq=1;
			self.broadcast(o);
		});
	}
	get status() {
		return this.gamedata.status;
	}
	set status(v) {
		this.gamedata.status=v;
	}
	get roomtype() {
		return 'rdm';
	}
	mk_transfer_gamedata(obj) {
		// 简化user对象，只传输id nickname face level score
		//console.log(JSON.stringify(obj));
		if (!obj.seats) return {gamedata:obj};
		obj=clone(obj);
		for (var i in obj.seats) {
			var seat =obj.seats[i];
			if (!seat) continue;
			if (seat.user) {
				var gduser=this.gamedata.seats[i].user;
				if (gduser) {
					var u=this.users[this.gamedata.seats[i].user.id]||{dbuser:{}};
					// var o=filterObj(u, ['id', 'nickname', 'level']);
					// if (seat.user.face!=null) o.face=seat.user.face;
					// if (seat.user.score!=null) o.score=seat.user.score;
					// if (seat.user.delta!=null) o.delta=seat.user.delta;
					seat.user={id:u.id, nickname:u.nickname, face:u.dbuser.face, level:u.level, score:seat.user.score, delta:seat.user.delta, offline:gduser.offline, his:gduser.his};
				}
			}
		}
		return {gamedata:obj};
	}
	run() {
		if (this.running) return;
		var self=this;
		this.running=true;
		var master=this.users[this.gamedata.seats[0].user.id];
		if (master.dbuser.freeExpire<new Date()) {
			if (master.tickets<self.opt.fangka) return this.broadcast({err:'房卡不足'});
			master.tickets-=self.opt.fangka;
		}
		this.broadcast({c:'table.start', opt:self.opt});
		var setnum=0;
		async.until(function() {
			return (setnum>=self.opt.pan || self.allusers().length==0);
		}, function(callback) {
			var steps=[
				self.selectHolder.bind(self),
				self.start.bind(self),
				self.betting.bind(self),
				self.xipai.bind(self),
				self.fapai.bind(self),
				self.xuanpai.bind(self),
				self.bipai.bind(self),
				self.jiesuan.bind(self),
				self.wait_next_set.bind(self)
			];
			if (setnum==(self.opt.pan-1)) {
				steps.pop();
				steps.push(self.endall.bind(self));
			}
			self.gamedata.setnum=setnum;
			async.waterfall(steps, function(err) {
				setnum++;
				for (var u in self.users) {
					self.users[u].exp++;
				}
				callback(err);
			});
		}, function(err) {
			setTimeout(function() {
				self.onend && self.onend(err);
				var seats=self.gamedata.seats;
				for (var i=0; i<seats.length; i++) {
					seats[i] && self.users[seats[i].user.id].prepareLeaveTable();
				}
				alltable.remove(self);
			}, 100);
		});
	}
	allusers() {
		var vu=[], seats=this.gamedata.seats;
		for (var i=0; i<seats.length; i++) {
			if (seats[i] && (!this.users[seats[i].user.id].offline)) {
				debugout('seat', i, seats[i].user);
				vu.push(i);
			}
		}
		return vu;
	}
	broadcast(json, except) {
		var seats=this.gamedata.seats;
		for (var i=0; i<seats.length; i++) {
			if (seats[i] && seats[i].user && seats[i].user!=except) {
				var u=this.users[seats[i].user.id];
				u && u.send(json);
			}
		}
	}
	start(cb) {
		//for debug
		//if (this.gamedata.setnum==0) this.gamedata.holder=0;
		this.gamedata.nextholder=null;
		this.gamedata.status=TABLE_STATUS.STARTING;
		setTimeout(cb, 100);
	}
	selectHolder(cb) {
		var cmd={}, gd=this.gamedata;
		if (gd.holder==null) {
			var vu=this.allusers();
			gd.holder=vu[Math.floor(Math.random()*vu.length)];
			gd.status=TABLE_STATUS.SEL_FIRST_HOLDER;
		}else {
			if (gd.nextholder!=null) {
				gd.holder=gd.nextholder;
				gd.status=TABLE_STATUS.SEL_HOLDER;
			}
		}
		setTimeout(cb, 100);
	}
	betting(callback) {
		var self=this, gd=this.gamedata;
		gd.status=TABLE_STATUS.BETTING;
		waitUserAction(gd.seats, function(seat, cb) {
			var cb=once(cb);
			if (seat==gd.seats[gd.holder]) return cb();
			var u=self.users[seat.user.id];
			if (u.offline) return cb();
			u.once('table.betting', function(msg, comesfrom) {
				seat.bet=seat.lastbet=msg.bet;
				cb();
			})
			.once('out', function() {
				seat.bet=seat.lastbet||1;
				cb();
			});
	}, 30*1000,
		function() {
			for (var i=0; i<gd.seats.length; i++) {
				if (i==gd.holder) continue;
				var seat=gd.seats[i];
				if (!seat) continue;
				var u=self.users[seat.user.id];
				if (!u) continue;
				seat.bet=seat.bet||seat.lastbet||1;
				u.removeAllListeners('table.betting');
				u.removeAllListeners('out');
			}
			callback(null);
		});
	}
	xipai(cb) {
		var cards=[];
		for (var i=0; i<52; i++) {
			cards[i]=cardv(i);
		}
		for (var i=0; i<800; i++) {
			var p1=Math.floor(Math.random()*cards.length), p2=Math.floor(Math.random()*cards.length);
			while(p1==p2) {p2=Math.floor(Math.random()*cards.length)}
			var t=cards[p2];
			cards[p2]=cards[p1];cards[p1]=t;
		}
		// for debug
		// for (var i=0;i<5; i++) cards[i]=cardv(Math.floor(Math.random()*52));
		// for (var i=5;i<10; i++) cards[i]=cardv(i-5);

		cb(null, cards);
	}
	fapai(cards, cb) {
		var gd=this.gamedata;
		for (var i=0; i<gd.seats.length; i++) {
			var seat=gd.seats[i];
			if (!seat) continue;
			var hc=cards.splice(0, 5);
			var o={cards:hc, r:calcR(hc), seat:i};
			o.r.t=this.chkopt(o.r.t);
			seat.stock=o;
		}
		gd.status=TABLE_STATUS.FAPAI;
		setTimeout(cb, 100);
	}
	xuanpai(callback) {
		var gd=this.gamedata;
		gd.status=TABLE_STATUS.XUANPAI;
		var self=this;
		var userR=[];
		waitUserAction(gd.seats, function(seat, cb) {
			cb=once(cb);
			var u=self.users[seat.user.id];
			if (u.offline) return cb();
			u.once('table.niuniu', function(msg, comesfrom) {
				seat.userR=msg;
				cb();
			})
			.once('out', function() {
				seat.userR='out';
				cb();
			})
		}, 30*1000,
		function() {
			for (var i=0; i<gd.seats.length; i++) {
				var seat=gd.seats[i];
				if (!seat) continue;
				var u=self.users[seat.user.id];
				if (!u) continue;
				u.removeAllListeners('table.niuniu');
				u.removeAllListeners('out');
			}
			callback(null);
		});
	}
	chkopt(t) {
		// 检查opt.rule中的值，决定最终的t。如果没有小牛牛之类，那么全部算成牛牛
		if (t>3 && !this.opt.rule[t]) return 3;
		return t;
	}
	bipai(cb) {
		var gd=this.gamedata;
		gd.status=TABLE_STATUS.BIPAI;
		var zhuang=gd.seats[gd.holder].stock, mainr=zhuang.r;
		mainr.ft=fixratio(mainr.t);
		var maxniu={t:0, mc:{v:0}};
		for (var i=0; i<gd.seats.length; i++) {
			if (gd.seats[i]==null) continue;
			var stock=gd.seats[i].stock, cr=stock.r;
			if (i==gd.holder) continue;
			if (cr.t>=3) {
				if (cr.t>maxniu.t || (cr.t==maxniu.t && cr.mc.v>maxniu.mc.v)) {
					maxniu=cr;
					gd.nextholder=i;							
				}
			}
			//庄>闲
			if (mainr.t>cr.t) {
				stock.ratio=-mainr.ft;
				continue;
			}
			//庄<闲
			if (mainr.t<cr.t) {
				stock.ratio=fixratio(cr.t);
				continue;
			}
			if (mainr.t==1 || mainr.t==2) {
				if (mainr.v>cr.v) {
					stock.ratio=-mainr.ft;
					continue;
				}
				if (mainr.v==cr.v) {
					if (mainr.mc.ov>=cr.mc.ov) {
						stock.ratio=-mainr.ft;
						continue;			
					}
				}
				stock.ratio=fixratio(cr.t);
				continue;
			}
			//牛九-牛七，g.牛六-牛一，庄>闲；这规则取消
			// if (mainr.t==1 || mainr.t==2) {
			// 	stock.ratio=-mainr.ft;
			// 	continue;	
			// }
			//炸弹，四张炸弹牌点数大的胜,其他情况，点数大者胜，花色大胜
			//if (mainr.t==7) {
				if (mainr.mc.ov>cr.mc.ov) {
					stock.ratio=-mainr.ft;
					continue;			
				}
				if (mainr.mc.ov==cr.mc.ov) assert('should never see this');
				stock.ratio=fixratio(cr.t);
			//}
		}
		setTimeout(cb, 100);
	}
	jiesuan(cb) {
		var gd=this.gamedata, zhuangprofit=0;
		for (var i=0; i<gd.seats.length; i++) {
			var seat=gd.seats[i];
			if (!seat) continue;
			if (seat.stock.ratio>=3) {
				if (!seat.user.his) seat.user.his={};
				if (seat.user.his[seat.stock.ratio]==null) seat.user.his[seat.stock.ratio]=1;
				else seat.user.his[seat.stock.ratio]++;
			}
			if (i!=gd.holder) {
				var delta=seat.stock.ratio*seat.bet*gd.baseScore;
				seat.user.delta=delta;
				seat.user.score+=delta;
				zhuangprofit-=delta;
			}
		}
		gd.seats[gd.holder].user.score+=zhuangprofit;
		gd.seats[gd.holder].user.delta=zhuangprofit;
		gd.status=TABLE_STATUS.JIESUAN;
		setTimeout(cb,100);
	}
	wait_next_set(callback) {
		var self=this;
		var gd=this.gamedata;
		gd.status=TABLE_STATUS.SETOVER;
		for (var i=0; i<gd.seats.length; i++) {
			var seat=gd.seats[i];
			if (!seat) continue;
			seat.bet=null;
			seat.userR=null;
		}
		waitUserAction(gd.seats, 
		function(seat, cb) {
			cb=once(cb);
			if (!seat) return cb();
			var u=self.users[seat.user.id];
			if (u.offline) return cb();
			u.once('table.next',cb).once('out', cb);
		},
		60*1000,
		function() {
			debugout('table next');
			for (var i=0; i<gd.seats.length; i++) {
				var seat=gd.seats[i];
				if (!seat) continue;
				var u=self.users[seat.user.id];
				if (!u) continue;
				u.removeAllListeners('table.next');
				u.removeAllListeners('out');
			}			
			callback();
		});
	}
	endall(callback) {
		this.gamedata.status=TABLE_STATUS.OVER;
		callback();
	}

	// mk_transfer_seats() {
	// 	var seats=[];
	// 	for (var i=0; i<this.seats.length; i++) {
	// 		var s=this.seats[i];
	// 		if (s) {
	// 			seats[i]={id:s.id, nickname:s.nickname, level:s.level, face:s.dbuser.face, score:s.score}
	// 		}
	// 	}
	// 	return seats;
	// }
	msg(pack, comesfrom) {
		if (msgDispatcher.emit(pack.c, pack, comesfrom)) return true;
		switch(pack.c) {
			case 'run':
				this.run();
			break;
			case 'table.voice':
				pack.comesfrom=comesfrom.id;
				this.broadcast(pack);
			break;
			default:
			return false;
		}
		return true;
	}
	enter(user) {
		debugout(user.id, 'entered');
		if (this.quitTimer) clearTimeout(this.quitTimer);
		var seat=null, gd=this.gamedata;
		if (this.users[user.id]) {
			this.users[user.id]=user;
			var o=this.mk_transfer_gamedata(this.gamedata);
			o.gamedata.$={init:true, kickuser:true};
			o.seq=1;
			//console.log('kick & init');
			user.send(o);
			this.broadcast({c:'table.userin', id:user.id, nickname:user.nickname, level:user.level, face:user.dbuser.face, seat:seat});
			for (var i in this.users) {
				if (i==user.id) continue;
				var user=this.users[i];
				user.send({c:'table.userin', id:i, nickname:user.nickname, level:user.level, face:user.dbuser.face, seat:user.seat});
			}
			return;
		}
		this.users[user.id]=user;
		var emptyseat=0;
		for (var i=0; i<gd.seats.length; i++) {
			if (!gd.seats[i]) {
				emptyseat++;
				(seat==null) && (seat=i);
			}
			else if (gd.seats[i].user && this.users[gd.seats[i].user.id].nickname==user.nickname) {
				debugout('user data wrong', user.nickname, user.id, this.users[gd.seats[i].user.id].id);
			}
		}
		if (seat==null) return user.senderr('座位已经坐满了，要早点来哦');
		gd.seats[seat]={user:{id:user.id, score:0, seat:seat}};
		var o=this.mk_transfer_gamedata(this.gamedata);
		o.gamedata.$={init:true};
		o.seq=1
		user.send(o);
		this.broadcast({c:'table.userin', id:user.id, nickname:user.nickname, level:user.level, face:user.dbuser.face, seat:seat});
		for (var i in this.users) {
			if (i==user.id) continue;
			var user=this.users[i];
			user.send({c:'table.userin', id:i, nickname:user.nickname, level:user.level, face:user.dbuser.face, seat:user.seat});
		}
		if (emptyseat==1) this.run();
	}
	leave(user) {
		var gd=this.gamedata;
		//this.broadcast(this.mk_transfer_gamedata(gd));
		// for (var i=0; i<gd.seats.length; i++) {
		// 	if (gd.seats[i].user.id==user.id) {
		// 		gd.seats[i].user.offline=true;
		// 		break;
		// 	}
		// }
		debugout('out', user);
		if (this.gamedata.seats[0].user.id!=user.id) {
			user.table=null;
		}
		user.offline=true;
		this.broadcast({c:'table.userout', id:user.id});
		// if (gd.seats[0] && gd.seats[0].user && gd.seats[0].user.id==user.id) {
		// 	// is master

		// }
		debugout('test auto dismiss', this.running, this.allusers());
		if (!this.running && this.allusers().length==0) {
			// all leave, dismiss table;
			var self=this;
			this.quitTimer=setTimeout(function() {
				debugout('chking dismiss..., left player ', self.allusers().length);
				if (self.allusers().length==0) {
					alltable.remove(self);
					for (var u in self.users) {
						self.users[u].table=null;
					}
				}
			}, 15*60*1000);
		}
	}
	dismiss() {
		var gd=this.gamedata;
		this.broadcast({c:'showview', v:'hall'})
		for (var i=0; i<gd.seats.length;i++) {
			var seat=gd.seats[i];
			if (!seat) continue;
			this.users[seat.user.id].table=null;
		}
		return alltable.remove(this);
	}
	wantdismiss(user) {
		var gd=this.gamedata;
		var isMaster=(gd.seats[0] && gd.seats[0].user && gd.seats[0].user.id==user.id);
		if (!this.running && isMaster) return this.dismiss();
		var agreed={};
		var self=this;
		waitUserAction(gd.seats, function(seat, cb) {
			var cb=once(cb);
			if (seat.user.id==user.id) {
				console.log('me agree');
				agreed[user.id]=true;
				self.broadcast({c:'table.ackdismiss', id:user.id, v:'解散吧'});
				return cb();
			}
			var u=self.users[seat.user.id];
			if (u.offline) {
				console.log(u.id,'offline, agree');
				agreed[u.id]=true;
				self.broadcast({c:'table.ackdismiss', id:u.id, v:'没意见'});
				return cb();
			}
			u.send({c:'table.agreedismiss', from:user.nickname});
			u.once('table.agreedismiss', function(msg, comesfrom) {
				console.log(u.id, 'agree', msg.agree);
				self.broadcast({c:'table.ackdismiss', id:comesfrom.id, v:msg.agree?'同意':'不同意'});
				if (msg.agree) agreed[u.id]=true;
				cb();
			})
			.once('out', function() {
				console.log(u.id, 'quit agree');
				self.broadcast({c:'table.ackdismiss', id:u.id, v:'没意见'});
				agreed[u.id]=true;
				cb();
			});
		}, 15*1000, function() {
			console.log('agreed', agreed, self.allusers().length);
			if (Object.keys(agreed).length>=(self.allusers().length*2/3)) self.dismiss();
		});
	}
};

module.exports=RandomHolder;