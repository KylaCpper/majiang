'use strict';
var async=require('async'), assert=require('assert'), EventEmitter=require('events'), clone=require('clone');
var alltable=require('../tables.js');
var once=require('once');
var syncfy =require('sync-obj');
var debugout=require('debugout')(require('yargs').argv.debugout);
var msgDispatcher=new EventEmitter();

var merge=require('merge');
function safeMerge(obj1, obj2) {
	if (obj1==null) return obj2;
	return merge(obj1, obj2);
}

const CANSAVEHERSELF=true;
const CANNOTSAVEHERSELF=false;

function isGood(rolecard) {
	var enemy=['werewolf'];
	return (enemy.indexOf(rolecard)<0);
}
function isGod(rolecard){
	var a = ['prophet','witch','hunter','defender','idiot'];
	return (a.indexOf(rolecard)>=0);
}
function isVillager(rolecard) {
	var v = ['villager'];
	return (v.indexOf(rolecard)>=0);
}
function isWolf(rolecard) {
	var enemy=['werewolf'];
	return (enemy.indexOf(rolecard)>=0);
}

function roomModule(renshu,type) {
	return ['werewolf','prophet','witch','hunter','idiot','defender'];

	var role = ['werewolf','werewolf','villager','villager','prophet','hunter'];
	switch(renshu) {
			case '6':
				return role;
			break;
			case '9':
				if (type == 2) {
					role = ['werewolf','werewolf','werewolf','villager','villager','villager','prophet','witch','hunter'];
				} else {
					role = ['werewolf','werewolf','werewolf','villager','villager','villager','prophet','witch','idiot'];
				}
				return role;
			break;
			case '12':
				role = ['werewolf','werewolf','werewolf','werewolf','villager','villager','villager','villager','prophet','witch','hunter','defender'];
				return role;
			break;
			case '14':
				role = ['werewolf','werewolf','werewolf','werewolf','werewolf','villager','villager','villager','villager','villager','prophet','witch','hunter','defender'];
				return role;
			break;
			default:
			return role;
		}
}
class Lv1 {
	constructor(code, type, opt) {
		var self = this;
		//opt={time:发言时间30 45 60 type: 0屠神局1屠边局2屠城局renshu:,renshuType:相同人数下的不同类型,mima}
		if (typeof opt!='object') opt={renshu:6, type:0, time:30};
		this.opt=opt; 
		this.users={};
		this.speakSelectTime = opt.time;
		this.rightTime = 20;//行使权利的时间
		this.gd=this.gamedata={};
		this.gameIsStart = false;
		this.postionList = [];
		this.postionList.length = this.opt.renshu;
		this.prophetCheckInfo = {};//{pos:1||0}1好人0坏人  用于断线重连
		this.showedRoleCard = []; //已经亮牌的role
		this.day = 1;//第几天
		this.dayOrNight; //白天还是夜晚
		this.code = code;
		this.winRes = 0;
		this.deathInNight = [];
		//人物角色
		this.role = roomModule(opt.renshu,opt.renshuType);
		// this.gd.seats=new Array(5);
		// this.gd.status=0;
		// this.gd.roomid=code;
		debugout('this.opt.renshu=' + this.opt.renshu);
		debugout('code=' + code);
		// prophet|werewolf|witch|hunter|defender
		// scene={sheriff:userid, seats:[{role:'', killed:true, user:}, {}, {}]}
		var scene=this.scene={sheriff:0,seats:[],roomid:code,peopleNumber:this.opt.renshu,homeowner:0,showIdiot:0};
		this.isContinue = true;//是否继续循环
		this.isFirstDay = 0;//是否是第一天 0:第一天

		//当前某个人的操作权限
		this.curClientRight = {
			canSpeak:0
		};

		// syncfy(scene, function(v) {
		// 	var o=self.mk_transfer_scenedata(v);
		// 	o.seq=1;
		// 	self.broadcast(o);
		// });
	}
	mk_transfer_scenedata(obj) {
		// 简化user对象，只传输id nickname face level score
		//console.log(JSON.stringify(obj));
		if (!obj.seats) return {scene:obj};
		obj=clone(obj);
		for (var i in obj.seats) {
			var seat =obj.seats[i];
			if (!seat) continue;
			var seatuser=this.scene.seats[i].user;
			if (seatuser) {
				var u=seatuser;
				seat.user={id:u.id, nickname:u.nickname, face:u.dbuser.face, level:u.level, offline:seat.offline};
				
			}
		}
		return {scene:obj};
	}

	get roomtype() {
		return 'level1';
	}

	// 让客户端显示str，并且等待客户端返回一个确认，调用callback
	// 注意，有默认的超时，并且支持str是一个obj，{str:'', timeout:20}
	// 用于让客户端发言。
	promptUser(user, str, cb,timeout) {
		var self = this;
		
		function removeEvents() {
			user.removeListener('table.ans', handleAns);
			user.removeListener('out', handleOut);
		}
		if (user.offline) return cb('user is offline');
		var handleAns, handleOut;

		//发送到客户端的提示信息
		if (str instanceof Object && str.s == 1) {
			user.send({c:'table.narrate', v:str.str,type:'speak'});
			var pos = self.findSeat(user.id).pos + 1;
			self.broadcast({c:'laba',str:'现在由【'+ pos +'】进行发言'});
		} else {
			user.send({c:'table.narrate', v:str,type:'speak'});
		}

		function asyncF(__cb) {
			__cb=once(__cb);
			handleAns=function(opcode, pack, user) {
				removeEvents();
				self.setCanSpeak(user,false);
				__cb(null);
			}
			handleOut=function(err) {
				removeEvents();
				__cb(err);
			}
			user.once('table.speak', handleAns)
			.once('out', handleOut);
		}

		if (timeout) {
			self.setCanSpeak(user,true);
			self.broadcast({c:'updateTime', time:timeout});
			asyncF=async.timeout(asyncF, timeout);
			asyncF(function(err) {
				removeEvents();
				self.setCanSpeak(user,false);
				user.send({c:'updateEndSpeak'});
				cb();
			});
		}
		else asyncF(cb);
	}

	// promptUserQueue(user, str, timeout, cb) {
	// 	var self = this;
	// 	if (timeout) {
	// 		var asyncF = function(user,str,innercb) {
	// 			user.send({c:'updateTime', time:timeout});
	// 			self.promptUser(user,str,innercb);
	// 		}
		
	// 		asyncF = async.timeout(asyncF,timeout);
	// 		return asyncF(user,str,cb);
	// 	}
	// 	this.promptUser(user, str, cb);
	// }

	run() {
		this.game={};
		var t;
		var nignt=[
			this.annouce.bind(this, '天黑请闭眼','night')
			,this.prophetGo.bind(this)
			,this.defenderGo.bind(this)
			,this.werewolfGo.bind(this)
			,this.witchGo.bind(this, CANNOTSAVEHERSELF)
		];
		var firstnight=nignt.slice(0, -1).concat(this.witchGo.bind(this, CANSAVEHERSELF));
		var day=[
			this.annouce.bind(this, '天亮了','day')
			//,votePolice.bind(this)
			,this.annouceDeath.bind(this)
			// ,this.deadmanSpeak.bind(this)
			,this.selectFirstSpeaker.bind(this)
			,this.discuss.bind(this)
			,this.vote.bind(this)
			,this.deadmanSpeak.bind(this)
		];
		var firstday=day.slice();
		firstday.splice(1, 0, this.votePolice.bind(this));
		firstday.splice(3, 0, this.deadmanSpeak.bind(this));
		
		var self = this;
		//女巫
		self.witch = {
			poison:1,
			heal:1
		};
		// loop
		async.until(
			function chkcontinue() {
				if (self.isContinue) {
					return false;
				} else {
					return true;
				}
			},
			function mainloop(callback) {
				// var q=async(function(f, cb) {
				// 	assert(typeof f=='function');
				// 	f(cb);
				// });
				// q.push(firstday);
				// sheriffGo
				/*
					if (!xx) {
						q.unshift(secondSheriff);
					}
					cb();

					if (findUser(scene.sheriff).killed) q.unshift(transferSheriff);
				*/ 

				if (self.isFirstDay == 0) {
					async.waterfall(firstnight.concat(firstday),function(err,results) {
						self.isFirstDay += 1;
						callback(err);
					});
				} else {
					async.waterfall(nignt.concat(day),function(err,results) {
						callback(err);
					});
				}
			}
			,function onesetover(err,results) {

				if (err == 'over') {
					self.updateUserExp();
					t = setTimeout(f,5*1000);
				}
			}
		)

		function f() {
			clearTimeout(t);
			t = null;
			self.broadcast({c:'dayornight',v:'day',day:null});
			var v = (self.winRes == 4?1:0);//0狼人赢1好人赢
			self.broadcast({c:'over',sceneInfo:self.getSceneInfo2(true),v:v});
			//声音
			self.broadcast({c:'musicOrSound',str:'游戏结束',v:v});
			self.reSetScene();
		}
	}
	
	updateUserExp() {
		var v = (this.winRes == 4?1:0);
		var s;
		var r;
		var res;
		for (var i=0;i<this.scene.seats.length;i++) {
			var isgood = isGood(this.scene.seats[i].rolecard);
			if (isgood) {
				s = (v == 1?'win':'fail');
				r = this.resCount(this.opt.renshu,this.opt.renshuType,this.opt.type,s);
				res = (s == 'win'?r['good']:r);
			} else {
				s = (v == 1?'fail':'win');
				r = this.resCount(this.opt.renshu,this.opt.renshuType,this.opt.type,s);
				res = (s == 'win'?r['wolf']:r);
			}
			this.scene.seats[i].user.exp = this.scene.seats[i].user.exp + res;
			this.scene.seats[i].user.setUserRoleRes(this.scene.seats[i].rolecard,s);
		}
	}

	resCount(renshu,renshuType,gameType,isWin) {
		//type 1 2
		//gameType 0屠神局1屠边局2屠城局
		//isWin win fail
		var res = {
			'61':{
				0:{win:{wolf:8,good:4},fail:2},
				1:{win:{wolf:6,good:4},fail:2},
				2:{win:{wolf:10,good:4},fail:2}
			},
			'91':{
				0:{win:{wolf:16,good:8},fail:4},
				1:{win:{wolf:12,good:8},fail:4},
				2:{win:{wolf:20,good:8},fail:4}
			},
			'92':{
				0:{win:{wolf:20,good:10},fail:5},
				1:{win:{wolf:15,good:10},fail:5},
				2:{win:{wolf:25,good:10},fail:5}
			},
			'121':{
				0:{win:{wolf:32,good:16},fail:8},
				1:{win:{wolf:24,good:16},fail:8},
				2:{win:{wolf:40,good:16},fail:8}
			},
			'141':{
				0:{win:{wolf:40,good:20},fail:10},
				1:{win:{wolf:30,good:20},fail:10},
				2:{win:{wolf:50,good:20},fail:10}
			}}

			return res[renshu + '' + renshuType][gameType][isWin];
	}

	reSetScene() {
		//系统公告
		this.broadcast({c:'laba',str:'游戏结束'});
		var length = this.scene.seats.length;
		var i = 0;
		this.scene.sheriff = 0;
		this.scene.showIdiot = 0;
		for (i;i<length;i++) {
			this.scene.seats[i].rolecard = null;
			this.scene.seats[i].killed = false;
			this.scene.seats[i].voteto = 0;
			this.scene.seats[i].voteme = false;
			this.scene.seats[i].ready = (this.scene.homeowner==this.scene.seats[i].userid)?true:false;
		}
		this.gameIsStart = false;
		this.prophetCheckInfo = {};
		this.showedRoleCard = [];
		this.day = 1;
		this.winRes = 0;
		this.isFirstDay = 0;
		this.deathInNight = [];
		this.curClientRight.canSpeak = 0;
		this.game.defended = 0;
		this.dayOrNight = null;
	}

	setPostion(userid) {
		var len = this.postionList.length;
		for (var i=0;i<len;i++) {
			if (!this.postionList[i]) {
				this.postionList.splice(i,1,userid);
				return i;
			}
		}
	}

	
	canEnter(user) {
		var length = this.scene.seats.length;
		for (var i =0;i<this.scene.seats.length;i++) {
			if (user.id == this.scene.seats[i].userid) {
				return true;
			}
		}
		if (length >= this.opt.renshu) {
				user.senderr('座位已经坐满了，要早点来哦');
				return false;
		}
		return true;
	}
	//进入房间
	enter(user) {
		debugout(user.id,'entered');
		var self = this;
		//同一个用户进来替换之前的
		var isSamePeople = false;
		for (var i = 0;i<this.scene.seats.length;i++) {
			if (user.id == this.scene.seats[i].userid) {
				this.scene.seats[i].user = user;
				user.offline =false;
				isSamePeople = true;
				break;
			}
		}
		if (!isSamePeople) {
			var length = this.scene.seats.length;
			if (length == 0) {
				this.scene.homeowner = user.id;
			}
			// var postion = length + 1;
			var postion = self.setPostion(user.id);
			if (length >= self.opt.renshu) {
				user.senderr('座位已经坐满了，要早点来');
				return false;
			} else {
				this.scene.seats.push({
					rolecard:null,
					killed:false,
					user:user,
					pos:postion,
					userid:user.id,
					voteto:0,
					voteme:false,
					ready:user.id == this.scene.homeowner?true:false,
					face:user.dbuser.face
				});
			}
			user.offline =false;
		}

		var seat=null, gd=this.gamedata;
		// var emptyseat=0;
		if (this.users[user.id]) {
			this.users[user.id]=user;
			user.on('out', function() {
				self.broadcast({c:'updateRoomInfo',sceneInfo:self.getSceneInfo2(false)});
			});
			// var o=this.mk_transfer_scenedata(this.gamedata);
			//// o.gamedata.$={init:true, kickuser:true};
			// o.seq=1;
			// user.send(o);
		}
		this.users[user.id]=user;
		// for (var i = 0; i < gd.seats.length; i++) {
		// 	if (!gd.seats[i]) {
		// 		emptyseat++;
		// 		(seat==null) && (seat=i);
		// 	} else if (gd.seats[i].user && this.users[gd.seats[i].user.id].nickname==user.nickname) {
		// 		debugout('user data wrong', user.nickname, user.id, this.users[gd.seats[i].user.id].id);
		// 	}
		// }
		// if (seat==null) return user.senderr('座位已经坐满了，要早点来哦');
		// gd.seats[seat]={user:{id:user.id, score:0, seat:seat}};
		////var o=this.mk_transfer_scenedata(this.gamedata);
		// o.gamedata.$={init:true};
		////o.seq=1
		////user.send(o);
		this.broadcast({c:'updateRoomInfo',sceneInfo:self.getSceneInfo2(false)},user);
	}

	//断线或离开房间
	

	//暂时离开房间
	leave(user) {
		user.offline=true;
		this.broadcast({c:'updateRoomInfo',sceneInfo:this.getSceneInfo2(false)});
	}

	//退出房间
	wantdismiss(user) {
		var self = this;
		if (!this.gameIsStart) {
			delete this.users[user.id];
			var len = this.scene.seats.length;
			for (var i = 0;i<len;i++) {
				if (user.id == this.scene.seats[i].userid) {
					if (user.id == self.scene.homeowner && len >= 2) {
						//房主
						self.scene.homeowner = self.scene.seats[1].userid;
						self.scene.seats[1].ready = true;
						self.scene.seats.splice(self.scene.seats.indexOf(this.scene.seats[i]),1);
						user.table = null;
						break;
					} else if (user.id == self.scene.homeowner && len == 1) {
						self.scene.seats.splice(self.scene.seats.indexOf(this.scene.seats[i]),1);
						var tbl=alltable.find(this.scene.roomid);
						alltable.remove(tbl);
						user.table = null;
						break;
					} else {
						user.table = null;
						this.scene.seats.splice(this.scene.seats.indexOf(this.scene.seats[i]),1);
						break;
					}
				}
			}
			this.postionList[this.postionList.indexOf(user.id)] = null;
			this.broadcast({c:'leave',userid:user.id});
			for (var n=0;n<this.scene.seats.length;n++) {
				if (isGood(this.scene.seats[n].rolecard)) {
					this.scene.seats[n].user.send({c:'updateRoomInfo',sceneInfo:self.getSceneInfo(this.scene.seats[n].userid,1)});
				} else {
					this.scene.seats[n].user.send({c:'updateRoomInfo',sceneInfo:self.getSceneInfo(this.scene.seats[n].userid,0)});
				}
				if (self.scene.seats[n].userid == self.scene.homeowner) {
					self.scene.seats[n].user.send({c:'readyBtnStatus',isStart:this.gameIsStart});
				}
			}
			user.send({c:'showview', v:'hall'});
		} else {
			//游戏已开始退出
			user.offline=true;
			this.broadcast({c:'updateRoomInfo',sceneInfo:this.getSceneInfo2(false)});
		}
	}

	msg(pack,user) {
		switch(pack.c) {
			case 'run':
				// this.run();
			break;
			case 'sendMsg':
				// pack.user=user.id;
				this.sendMsg(user,pack.content);
				break;
			case 'table.voice':
				this.sendMsgByVoice(user,pack.token);
			break;
			break;
			case 'roomInfo':
				this.sendRoomInfo(user,this.scene.roomid);
			break;
			case 'gameReady':
				this.gameReady(user);
			break;
			case 'gameStart':
				this.gameStart(user);
			break;
			case 'checkInfo':
				this.checkInfo(user,pack.userid);
			break;
			case 'kickOutRoom':
				this.kickOutRoom(user,pack.userid);
			break;
			default:
			return false;
		}
		return true;
	}

	kickOutRoom(user,userid) {
		//不是房主
		if (user.id != this.scene.homeowner) {
			return;
		}
		if (this.users.hasOwnProperty(userid)) {
			this.users[userid].table = null;
			this.users[userid].send({c:'showview', v:'hall'});
			this.users[userid].send({c:'errorTip',str:'你被踢出了房间'});
			delete this.users[userid];
		}
		for (var i=0;i<this.scene.seats.length;i++) {
			if (this.scene.seats[i].userid == userid) {
				this.scene.seats.splice(i,1)
			}
		}
		this.broadcast({c:'leave',userid:userid});
		this.postionList[this.postionList.indexOf(userid)] = null;
	}

	checkInfo(user,userid) {
		user.send({c:'checkInfo'});
	}


	gameStart(user) {
		var self = this;
		var t;
		var t1;
		var t2;
		if (user.id != this.scene.homeowner) {
			return;
		}
		if (this.scene.seats.length != this.opt.renshu) {
			user.senderr('人数不够');
			return;
		}
		var isAllReady = true;
		for (var i = 0;i<this.scene.seats.length;i++) {
			if (this.scene.seats[i].ready == false) {
				isAllReady = false;
			}
		}
		if (isAllReady) {

			this.scene.seats.sort(function(a,b){
				return a.pos - b.pos;
			});

			this.gameIsStart = true;
			this.isContinue = true;
			var roleArray = clone(this.role);
			for (var i=0;i<this.scene.seats.length;i++) {
				var index = Math.random() * roleArray.length;
				this.scene.seats[i].rolecard = roleArray.splice(index,1)[0];
				this.scene.seats[i].user.send({c:'gameStart',isStart:this.gameIsStart});
				this.scene.seats[i].ready = false;
			}
			for (var n=0;n<this.scene.seats.length;n++) {
				this.scene.seats[n].user.send({
					c:'initRoleCard',
					rolecard:this.scene.seats[n].rolecard,
					userid:this.scene.seats[n].userid,
					sceneInfo:isGood(this.scene.seats[n].rolecard)?self.getSceneInfo(this.scene.seats[n].userid,1):self.getSceneInfo(this.scene.seats[n].userid,0)
				});
			}
			//系统公告
			this.broadcast({c:'laba',str:'游戏开始'});
			//声音
			this.broadcast({c:'musicOrSound',str:'游戏开始'});
			t1 = setTimeout(ms,1500);
		} else {
			user.senderr('有玩家未准备');
		}

		function ms() {
			//声音
			self.broadcast({c:'musicOrSound',str:'查看身份'});
			clearTimeout(t1);
			t1 = null;
			t2 = setTimeout(sf,1500);
		}

		function sf() {
			clearTimeout(t2);
			t2 = null;
			t = setTimeout(start,3500);
		}

		function start() {
			self.run.bind(self)();
			clearTimeout(t);
			t = null;
		}
	}

	gameReady(user) {
		var self = this;
		for (var i = 0;i<this.scene.seats.length;i++) {
			if (user.id == this.scene.seats[i].userid) {
				this.scene.seats[i].ready = !this.scene.seats[i].ready;
				break;
			}
		}
		self.broadcast({c:'updateRoomInfo',sceneInfo:self.getSceneInfo2(false)});
		user.send({c:'readyBtnStatus',isStart:this.gameIsStart});
		if (!this.gameIsStart) {
			//系统公告
			user.send({c:'laba',str:'准备阶段'});
			//声音
			user.send({c:'musicOrSound',str:'准备阶段'});
		}
	}

	//发送语音信息
	sendMsgByVoice(user,token) {
		if ((user.id != this.curClientRight.canSpeak) && this.gameIsStart) {
				user.send({c:'table.narrate', v:'未轮到你发言'});
				return;
		}
		for (var key in this.users) {
			this.users[key].send({c:'table.voice',token:token,nickname:user.nickname,userid:user.id});
		}
	}

	sendMsg(user,content) {
		if (content == '') {
			return;
		}
		if ((user.id != this.curClientRight.canSpeak) && this.gameIsStart) {
				user.send({c:'table.narrate', v:'未轮到你发言'});
				return;
			}
		for (var key in this.users) {
			this.users[key].send({c:'sendMsg',content:content,nickname:user.nickname,userid:user.id});
		}
	}

	getNickName(userid) {
		if (this.users.hasOwnProperty(userid)) {
			return this.users[userid].nickname;
		}
		return null;
	}

	sendRoomInfo(user,roomID) {
		var self = this;
		var sceneInfo = this.getSceneInfo2(false);
		user.send({c:'roomInfo',roomCode:roomID,sceneInfo:sceneInfo,isStart:this.gameIsStart,roomName:this.getNickName(this.scene.homeowner)});

		if (!this.gameIsStart) {
			//系统公告
			user.send({c:'laba',str:'准备阶段'});
			//声音
			user.send({c:'musicOrSound',str:'准备阶段'});
		}

		if (this.gameIsStart) {
			user.send({c:'gameStart',isStart:this.gameIsStart});
			user.send({c:'dayornight',v:this.dayOrNight,day:this.day});
			for (var n=0;n<this.scene.seats.length;n++) {
				if (user.id == this.scene.seats[n].userid) {
					if (isGood(this.scene.seats[n].rolecard)) {
						if (self.scene.seats[n].rolecard == 'prophet') {
							user.send({c:'updateRole',sceneInfo:self.getSceneInfo(user.id,1),prophetCheckInfo:self.prophetCheckInfo});
						} else {
							user.send({c:'updateRole',sceneInfo:self.getSceneInfo(user.id,1)});
						}
					} else {
						user.send({c:'updateRole',sceneInfo:self.getSceneInfo(user.id,0)});
					}
					return;
				}
			}
		}
	}

	//0狼1人
	getSceneInfo(userid,type) {
		var sceneInfo = {};
		var seats = [];
		var i = 0;
		var len = this.scene.seats.length;
		for (i;i<len;i++) {
			seats.push({
				rolecard:type==0?(this.scene.seats[i].rolecard=='werewolf'?'werewolf':null):this.scene.seats[i].userid == userid?this.scene.seats[i].rolecard:(this.showedRoleCard.indexOf(this.scene.seats[i].rolecard)>=0?this.scene.seats[i].rolecard:null),
				killed:this.scene.seats[i].killed,
				pos:this.scene.seats[i].pos,
				userid:this.scene.seats[i].userid,
				voteto:this.scene.seats[i].voteto,
				voteme:this.scene.seats[i].voteme,
				ready:this.scene.seats[i].ready,
				nickname:this.scene.seats[i].user.nickname,
				face:this.scene.seats[i].face,
				offline:this.scene.seats[i].user.offline
			});
		}
		sceneInfo['sheriff'] = this.scene.sheriff;
		sceneInfo['seats'] = seats;
		sceneInfo['roomid'] = this.scene.roomid;
		sceneInfo['peopleNumber'] = this.scene.peopleNumber;
		sceneInfo['homeowner'] = this.scene.homeowner;
		return sceneInfo;
	}

	getSceneInfo2(showRole) {
		// showRole true 显示身份牌 false不显示身份牌
		var sceneInfo = {};
		var seats = [];
		var i = 0;
		var len = this.scene.seats.length;
		for (i;i<len;i++) {
			seats.push({
				rolecard:showRole == true?this.scene.seats[i].rolecard:null,
				killed:this.scene.seats[i].killed,
				pos:this.scene.seats[i].pos,
				userid:this.scene.seats[i].userid,
				voteto:this.scene.seats[i].voteto,
				voteme:this.scene.seats[i].voteme,
				ready:this.scene.seats[i].ready,
				nickname:this.scene.seats[i].user.nickname,
				face:this.scene.seats[i].face,
				offline:this.scene.seats[i].user.offline
			});
		}
		sceneInfo['sheriff'] = this.scene.sheriff;
		sceneInfo['seats'] = seats;
		sceneInfo['roomid'] = this.scene.roomid;
		sceneInfo['peopleNumber'] = this.scene.peopleNumber;
		sceneInfo['homeowner'] = this.scene.homeowner;
		sceneInfo['renshuType'] = this.opt.renshuType;
		sceneInfo['gameType'] = this.opt.type
		return sceneInfo;
	}

	//显示某个身份的牌子如猎人 白痴
	getSceneInfo3(userid,type,str) {
		//str 要显示的某个身份牌
		//type 0狼1人
		var sceneInfo = {};
		var seats = [];
		var i = 0;
		var len = this.scene.seats.length;
		for (i;i<len;i++) {
			seats.push({
				rolecard:this.scene.seats[i].rolecard==str?str:(type==0?(this.scene.seats[i].rolecard=='werewolf'?'werewolf':null):this.scene.seats[i].userid == userid?this.scene.seats[i].rolecard:(this.showedRoleCard.indexOf(this.scene.seats[i].rolecard)>=0?this.scene.seats[i].rolecard:null)),
				killed:this.scene.seats[i].killed,
				pos:this.scene.seats[i].pos,
				userid:this.scene.seats[i].userid,
				voteto:this.scene.seats[i].voteto,
				voteme:this.scene.seats[i].voteme,
				ready:this.scene.seats[i].ready,
				nickname:this.scene.seats[i].user.nickname,
				face:this.scene.seats[i].face,
				offline:this.scene.seats[i].user.offline
			});
		}
		sceneInfo['sheriff'] = this.scene.sheriff;
		sceneInfo['seats'] = seats;
		sceneInfo['roomid'] = this.scene.roomid;
		sceneInfo['peopleNumber'] = this.scene.peopleNumber;
		sceneInfo['homeowner'] = this.scene.homeowner;
		return sceneInfo;
	}

	askUser(user, str, cb, timeout) {
		//str.v: 1等待时间结束返回 2有客户端响应就返回 3有客户端响应有结果返回时间结束返回 4
		var ansHandler;
		var _cb = cb;
		cb=once(function() {
			user.removeListener('table.ans',ansHandler);
			user.removeListener('backOnline', backHandler);

			if (userAns) _cb(null, userAns.pack, userAns.op);
			else _cb('timeout');
		});
		setTimeout(cb, timeout);
		var sendCmd;
		if (!str.killed) {
			sendCmd={c:'sysTipWin', v:str, 
				canSelect:(['campaignsheriff', 'hunterDead','sheriffSelectFirst'].indexOf(str.str)<0),seq:1};
			if (!str.v==1 && !str.v==2 && !str.v==3 && !str.v==4) {sendCmd.c='table.narrate'; sendCmd.v=str.str}
			user.send(sendCmd);
		}
		if (timeout) {
			this.broadcast({c:'updateTime', time:timeout});
		}
		var userAns, backHandler;
		backHandler=function() {
			if (sendCmd) {
				user.send(sendCmd)
			}
		}
		ansHandler =function(op, pack) {
			userAns={op:op, pack:pack};
			if (str.v==3&&str.str == 'wolfkill') {
				user.emit('wolfchoose',userAns);
			}
			if (str.v==3&&str.str == 'defenderGo') {
				user.emit('defenderchoose',userAns);
			}
			//警长归票个票死的白痴
			if (str.v==4&&str.str == 'votefirst') {
				user.emit('sheriffvotefirst',userAns,function() {
					cb(null, pack, op);
				});
			}
			//警长退水
			if (str.v==4&&str.str == 'campaignsheriff') {
				user.emit('clearShangJing',userAns,function() {
					cb(null, pack, op);
				});
			}
			if (str.v==3&&str.str == 'vote') {
				user.emit('otherVote',userAns);
			}
			if (str.v==1||str.v==3||str.v==4) return;
			cb(null, pack, op);
		}
		if (str.v==1||str.v == 3||str.v==4) user.on('table.ans', ansHandler);
		else user.once('table.ans', ansHandler);
		user.on('backOnline', backHandler);
	}
	//	向用户提问，等待用户的问答
	// str也可能有两种，{str:'', timeout:4}
	_askUser(user, str, cb, timeout) {
		var self = this;
		var vPack;
		var vOpcode;
		function removeEvents() {
			user.removeListener('table.ans', handleAns);
			user.removeListener('out', handleOut);
			user.removeListener('table.ans', handleAns2);
		}
		if (user.offline) return cb('user is offline');
		var handleAns, handleOut,handleAns2;
		if (str.str == 'campaignsheriff'||str.str == 'hunterDead'||str.str == 'sheriffSelectFirst') {
			self.setCanSelect(user,false);
		} else if (str.str == 'prophetGo'&&str.killed == true) {
			self.setCanSelect(user,false);
		} else if (str.str == 'witchGoHeal'&&str.killed == true) {
			self.setCanSelect(user,false);
		}
		else {
			self.setCanSelect(user,true);
		}
		//2是直接返回1是时间结束返回
		if (str.v == 1) {
			//神牌死了就不会再弹提示框
			if (!((str.str == 'prophetGo'&&str.killed == true)||(str.str == 'witchGoHeal'&&str.killed == true))) {
				user.send({c:'sysTipWin', v:str});
			}
		}else if(str.v == 2) {
			user.send({c:'sysTipWin', v:str});
		}else {
			user.send({c:'table.narrate', v:str.str});
		}

		function asyncF(__cb) {
			__cb=once(__cb);
			handleAns=function(opcode, pack) {
				removeEvents();
				user.send({c:'sysTipWin', v:{str:'clear'}});
				__cb(null, pack, opcode);
			}
			handleAns2=function(opcode, pack){
				vPack = pack;
				vOpcode = opcode;
				if (str.str=='prophetGo'&&str.killed == false) {
					user.send({c:'sysTipWin', v:{str:'clear'}});
					var p = parseInt(vOpcode.selectInfo);
					if (vOpcode.selectInfo) {
						user.send({c:'table.player_role', v:isGood(self.scene.seats[p].rolecard)});
						self.prophetCheckInfo[self.scene.seats[p].pos] = isGood(self.scene.seats[p].rolecard);
						user.send({c:'updateRole',sceneInfo:self.getSceneInfo(user.id,1),prophetCheckInfo:self.prophetCheckInfo});
						user.send({c:'prophetCheckInfo',info:self.prophetCheckInfo});
					}
					self.setCanSelect(user,false);
				}
				if (str.str=='wolfkill') {
					// self.setCanSelect(self.users[vOpcode.selfid],false);
					var p = self.findSeat(vOpcode.userid).pos + 1;
					for (var w=0;w<self.scene.seats.length;w++) {
						if (self.scene.seats[w].rolecard == 'werewolf') {
							self.scene.seats[w].user.send({c:'wolfchoose',p:p,userid:vOpcode.selfid});
						}
					}
				}
				if (str.str == 'campaignsheriff') {
					//isGiveUp 0上警1退水
					//上警
					if (opcode.isGiveUp == 0) {
						self.broadcast({c:'shangjing',v:0,pos:self.findSeat(opcode.userid).pos});
					} else {
						//退水
						self.broadcast({c:'clearShangJing',v:1,userid:user.id});
					}
				}
			}
			handleOut=function(err) {
				removeEvents();
				__cb(err);
			}
			if (str.v == 1) {
				user.on('table.ans', handleAns2).once('out', handleOut);
			} else {
				user.once('table.ans', handleAns)
				.once('out', handleOut);
			}
		}
		if (timeout) {
			self.broadcast({c:'updateTime', time:timeout});
			asyncF=async.timeout(asyncF, timeout);
			asyncF(function(err,pack,opcode) {
				removeEvents();
				user.send({c:'sysTipWin', v:{str:'clear'}});
				if (str.v == 1) {
					cb(null, vPack, vOpcode);
				} else {
					cb(null, pack, opcode);
				}
			});
		}
		else asyncF(cb);
	}

	//向一定的人群询问
	askAll(users, str, opCb, finalCB,timeout) {
		var self = this;
		var s;
		if (str instanceof Object) {
			s = str.str;
		} else {
			s = str;
		}
		async.each(users, function(user, cb) {
			self.askUser(user, s, function(err, userObj, pack) {
				opCb(err, userObj, pack);
				cb();
			},timeout)
		}, finalCB);
	}

	broadcast(json, except,cb) {
		var seats=this.scene.seats;
		for (var i=0; i<seats.length; i++) {
			if (seats[i] && seats[i].user && seats[i].user!=except) {
				var u=this.users[seats[i].user.id];
				u && u.send(json);
			}
		}
		if (cb) {
			cb();
		}
	}
	//找对应位置
	findSeat(userid) {
		for (var j=0;j<this.scene.seats.length;j++) {
			if (userid == this.scene.seats[j].userid) {
				return this.scene.seats[j];
			}
		}
		return {};
	}

	//根据位置找userid type0left1right
	findUserIdByPos(pos,type) {
		for (var j=0;j<this.scene.seats.length;j++) {
			if (pos == this.scene.seats[j].pos) {
				if (type == 0) {
					if (j==0) {
						return this.scene.seats[this.scene.seats.length-1].userid;
					} else {
						return this.scene.seats[j - 1].userid;
					}
				} else if (type == 1) {
					if (j == (this.scene.seats.length-1)) {
						return this.scene.seats[0].userid;
					} else {
						return this.scene.seats[j + 1].userid;
					}
				}
			}
		}
		return null;
	}
	//找上下位置的userid type 0left 1right
	findUseridByUserId(userid,type){

		for (var j=0;j<this.scene.seats.length;j++) {
			if (userid == this.scene.seats[j].userid) {
				if (type == 0) {
					if (j == 0) {
						return this.scene.seats[this.scene.seats.length -1].userid;
					} else {
						return this.scene.seats[j - 1].userid;
					}
				} else if (type == 1)  {
					if (j == (this.scene.seats.length -1)) {
						return this.scene.seats[0].userid;
					} else {
						return this.scene.seats[j + 1].userid;
					}
				}
			}
		}
		return null;
	}
	allusers() {
		var users=[];
		for (var i=0; i<this.scene.seats.length; i++) {
			var user=this.scene.seats[i].user;
			if (user) users.push(user);
		}
		return users;
	}

	sendRoleCard() {

	}

	annouce(str,type,cb) {
		this.dayOrNight = type;
		if (type == 'day') {
			if (this.day > 1||this.opt.renshu == 6) {
				//声音
				this.broadcast({c:'musicOrSound',str:'天亮了'});
			}
			this.broadcast({c:'laba',str:'天亮了'});
		}
		this.broadcast({c:'dayornight',v:type,day:this.day});
		this.broadcast({c:'table.narrate', v:str,},null,cb);
	}
	createID(cb) {
		var role=[];
		var cards=this.opt.cards;
		for (var i=0; i<cards.length; i++) {
			for (var j=0; j<cards[i]; j++) role.push(i);
		}
		for (var i=role.length; i<this.opt.renshu; i++) {
			role.push('farmer');
		}
		cb(null, role);
	}
	shuffle(role, cb) {
		var cards=role;
		for (var i=0; i<800; i++) {
			var p1=Math.floor(Math.random()*cards.length), p2=Math.floor(Math.random()*cards.length);
			while(p1==p2) {p2=Math.floor(Math.random()*cards.length)}
			var t=cards[p2];
			cards[p2]=cards[p1];cards[p1]=t;
		}

		for (var i=0; i<this.opt.renshu; i++) {
			this.scene.seats[i]=safeMerge(this.scene.seats[i], {rolecard:cards[i]});
		}
		cb(null);
	}

	setCanSelect(user,b) {
		// if (!user) {
		// 	return;
		// }
		// user.send({c:'canSelect',b:b});
		// if (b) {
		// 	this.curClientRight.canChoose.push(user.id);
		// } else {
		// 	var index = this.curClientRight.canChoose.indexOf(user.id);
		// 	if (index >= 0){
		// 		this.curClientRight.canChoose.splice(index,1);
		// 	}
		// }
	}

	setCanSpeak(user,b) {
		if (!user) {
			return;
		}
		if(b) {
			this.curClientRight.canSpeak = user.id
			this.broadcast({c:'whoCanSpeak',userid:user.id});
		} else {
			this.curClientRight.canSpeak = 0;
			this.broadcast({c:'whoCanSpeak',userid:0});
		}
	}

	prophetGo(cb) {
		var self=this;
		//声音
		this.broadcast({c:'musicOrSound',str:'夜晚操作'});
		//系统公告
		this.broadcast({c:'laba',str:'预言家睁眼并查验'});
		for (var i=0; i<this.scene.seats.length; i++) {
			if (this.scene.seats[i].rolecard=='prophet') {
				var user=this.scene.seats[i].user;
				self.askUser(user, {str:'prophetGo',v:2,killed:this.scene.seats[i].killed}, function(err, pack, opcode) {
					user.send({c:'sysTipWin', v:{str:'clear'}});
					if (err) {
						return
					}

					var p = parseInt(opcode.selectInfo);
					if (opcode.selectInfo) {
						user.send({c:'table.player_role', v:isGood(self.scene.seats[p].rolecard)});
						self.prophetCheckInfo[self.scene.seats[p].pos] = isGood(self.scene.seats[p].rolecard);
						user.send({c:'updateRole',sceneInfo:self.getSceneInfo(user.id,1),prophetCheckInfo:self.prophetCheckInfo});
					}
				},self.rightTime*1000);
				setTimeout(function() {
					user.send({c:'sysTipWin', v:{str:'clear'}});
					cb();
				}, self.rightTime*1000);
				return;
			}
		}
		return cb();
		assert(0);
	}
	defenderGo(cb) {
		var self=this;
		this.broadcast({c:'laba',str:'守卫睁眼并守护'});
		// self.game.defended = 0;
		var user;
		var seat;

		var defenderchooseHandle = function (userAns) {
			//返回选人结果
			if (self.game.defended==userAns.op.userid) {
				return user.senderr('不能连续守卫一个人');
			}
		}

		var removeDefenderChooseEvents = function() {
			user.removeListener('defenderchoose',defenderchooseHandle);
		}

		for (var w=0;w<self.scene.seats.length;w++) {
			if (self.scene.seats[w].rolecard=='defender') {
				seat = this.scene.seats[w];
				user = this.scene.seats[w].user;
				user.on('defenderchoose',defenderchooseHandle);
			}
		}

		if (user) {
			self.askUser(user, {str:'defenderGo',v:3,killed:seat.killed}, function(err, pack, opcode) {
				user.send({c:'sysTipWin', v:{str:'clear'}});
				removeDefenderChooseEvents();
				if (err) {
					self.game.defended = 0;
					return cb();
				}
				//没选人
				if (!opcode||!opcode.userid) {
					self.game.defended = 0;
					return cb();
				}
				if (self.game.defended==opcode.userid) {
					self.game.defended = 0;
					return cb();
				}
				self.game.defended=opcode.userid;
				return cb();
			},self.rightTime*1000);
			return;
		}
		return cb(null);
		assert(0);
	}
	getVoteKillResult(rolls) {
		//rolls {beVoteUserid:[voteUserid]}
		var keys=Object.keys(rolls);
		// 没有
		if (keys.length==0) return null;
		// 只有一个人
		if (keys.length==1) return keys[0];
		var sorted=keys.sort(function(a,b){return rolls[b].length-rolls[a].length});
		// 第一个人票多
		if (rolls[sorted[0]].length!=rolls[sorted[1]].length){
			return sorted[0];
		} else {
			for (var k in rolls) {
				var len = rolls[k].length;
				for (var i = 0;i<len;i++) {
					if (this.scene.sheriff == rolls[k][i]) {
						return k;
					}
				}
			}
		}
		return null;
	}

	getVoteResult(rolls, randomAnticipate) {
		// rolls是这样的 {userid:票数}
		var keys=Object.keys(rolls);
		// 没有
		if (keys.length==0) return null;
		// 只有一个人
		if (keys.length==1) return keys[0];
		var sorted=keys.sort(function(a,b){return rolls[b]-rolls[a]});
		// 第一个人票多
		if (rolls[sorted[0]]!=rolls[sorted[1]]) return sorted[0];
		if (randomAnticipate) {
			// 随机选一个
			for (var i=1; i<sorted.length; i++) {
				if (rolls[sorted[i]]!=rolls[sorted[0]]) break;
			}
			return sorted[Math.floor(Math.random()*i)];
		}
		return null;
	}
	//返回userid
	getMaxSameVoteResult(rolls) {
		// rolls是这样的 {userid:票数}
		var keys=Object.keys(rolls);
		// 没有
		if (keys.length==0) return [];
		// 只有一个人
		if (keys.length==1) return keys[0];
		var sorted=keys.sort(function(a,b){return rolls[b]-rolls[a]});
		// 第一个人票多
		if (rolls[sorted[0]]!=rolls[sorted[1]]) return sorted[0];
		//多个同票的
		var sameUseid = [];
		for (var i =0;i<sorted.length;i++) {
			sameUseid.push(sorted[i]);
			if (i<sorted.length -1) {
				if (rolls[sorted[i]]!=rolls[sorted[i+1]]) {
					return sameUseid;
				}
			} else {
				return keys;
			}
			
		}
		
		return keys;
	}
	werewolfGo(cb) {
		this.broadcast({c:'laba',str:'狼人请睁眼并杀人'});
		var self=this;
		var wolfs=[];
		self.game.wolfKilled = null;
		for (var i=0; i<this.opt.renshu; i++) {
			if (this.scene.seats[i].rolecard=='werewolf'&&this.scene.seats[i].killed==false) {
				wolfs.push(this.scene.seats[i].user);
			}
		}

		var wolfchooseHandle = function (userAns) {
			//返回选人结果
			var p = self.findSeat(userAns.op.userid).pos + 1;
			for (var w=0;w<wolfs.length;w++) {
				wolfs[w].send({c:'wolfchoose',p:p,userid:userAns.op.selfid});
			}
		}

		for (var w=0;w<wolfs.length;w++) {
			wolfs[w].on('wolfchoose',wolfchooseHandle);
		}

		var removeWolfChooseEvents = function() {
			for (var r=0;r<wolfs.length;r++) {
				wolfs[r].removeListener('wolfchoose',wolfchooseHandle);
			}
		}
		
		return self.askAll(wolfs, {str:{str:'wolfkill',v:3}}
		, function(err, user, pack) {
			if (err) {
				return;
			}

			//未杀人
			if (!pack||!pack.userid) {
				return;
			}
			
			self.findSeat(user.id).att=pack.userid;
		}
		, function(err) {
			removeWolfChooseEvents();
			// 统计狼人投票
			var rolls={};
			for (var i=0; i<wolfs.length; i++) {
				wolfs[i].send({c:'sysTipWin', v:{str:'clear'}});
				wolfs[i].send({c:'wolfchoose',p:null,userid:null});
				var att=self.findSeat(wolfs[i].id).att;
				self.findSeat(wolfs[i].id).att = null;
				if (!att) continue;
				if (rolls.hasOwnProperty(att)) {
					rolls[att]++;
				} else {
					rolls[att] = 1;
				}
			}

			self.game.wolfKilled = self.getVoteResult(rolls,true)
			cb(null);
		},self.rightTime*1000);
	}
	getWolfKilledUserPos() {
		var seat = this.findSeat(this.game.wolfKilled);
		if (seat) return seat.pos;
		return null;
	}
	witchGo(prey,cb) {
		this.broadcast({c:'laba',str:'女巫睁眼并用药'});
		var self=this;
		self.game.poisoned = null;
		self.game.healed = null;
		//prey true 能自救
		self.game.prey=prey;
		for (var i=0; i<this.opt.renshu; i++) {
			if (this.scene.seats[i].rolecard=='witch') {
				var user=this.scene.seats[i].user;
				var info = self.getWolfKilledUserPos() + 1;
				var type = 0;//(-1为死人0死的不是自己1可自救2不可自救)
				//死的是自己
				if (this.scene.seats[i].pos == self.getWolfKilledUserPos()) {
					//首夜可自救
					if (prey) {
						type = 1;
					}
					//非首夜不可自救
					if (!prey) {
						type = 2;
					}
				}
				if (!self.game.wolfKilled) {
					type = -1;
				}
				return self.askUser(user, {str:'witchGoHeal',v:1,info:info,killed:self.scene.seats[i].killed,type:type}, function(err, pack, opcode) {
					var healed=null;
					function poison() {
						self.askUser(user, {str:'witchGoPoison',v:1,killed:self.scene.seats[i].killed}, function(err, pack, opcode) {
							user.send({c:'sysTipWin', v:{str:'clear'}});
							if (err) {
								return cb(null);
							}
							//未毒人
							if (!opcode||!opcode.userid) {
								return cb(null);
							}
							//没次数
							if (self.witch.poison <= 0) {
								user.send({
									c:'table.narrate', v:'毒药已用完'
								});
								return cb(null);
							}
							self.witch.poison = 0;
							self.game.poisoned=opcode.userid;
							return cb(null);
						},10*1000);
					}
					user.send({c:'sysTipWin', v:{str:'clear'}});
					//没有救人次数
					if (self.witch.heal <= 0) {
						user.send({
							c:'table.narrate', v:'解药已用完'
						});
						return poison();
					}
					//非首夜不能就自己
					if (type == 2&&opcode&&opcode.userid==user.id) {
						return poison();
					}
					//未救人是否毒人
					if (!opcode||!opcode.userid) {
						return poison();
					}
					if (err) {
						return cb();
					}
					self.witch.heal = 0;
					self.game.healed=opcode.userid;
					return cb(null);
				},10*1000);
			}
		}
		return cb(null);
		assert(0);
	}
	directKillPerson(userid) {
		var self = this;
		if (!userid) {
			return this.calDeath();
		}
		var seat=this.findSeat(userid);
		if (!seat.hasOwnProperty('user')) {
			return this.calDeath();
		}
		seat.user.send({c:'table.narrate', v:'你死了'});
		seat.killed=true;
		for (var n=0;n<self.scene.seats.length;n++) {
			if (userid == self.scene.seats[n].userid) {
				self.scene.seats[n].user.send({c:'selfDeathTip',user:{
					pos:self.scene.seats[n].pos,
					nickname:self.scene.seats[n].user.nickname,
					face:self.scene.seats[n].face
				}});
			}
			if (isGood(self.scene.seats[n].rolecard)) {
				self.scene.seats[n].user.send({c:'updateRoomInfo',sceneInfo:self.getSceneInfo(self.scene.seats[n].userid,1)});
			} else {
				self.scene.seats[n].user.send({c:'updateRoomInfo',sceneInfo:self.getSceneInfo(self.scene.seats[n].userid,0)});
			}
		}
		
		if (userid == self.game.wolfKilled) {
			self.game.wolfKilled = null;
		}
		if (userid == self.game.poisoned) {
			self.game.poisoned = null;
		}
		return this.calDeath();
	}

	calDeath() {
		//type: 0屠神局1屠边局2屠城局
		var godArray = [];
		var goodArray = [];
		var wolfArray = [];
		for (var j=0;j<this.scene.seats.length;j++) {
			if (isGod(this.scene.seats[j].rolecard)) {
				if (!this.scene.seats[j].killed) {
					godArray.push(this.scene.seats[j].userid);
				}
				continue;
			}
			if (isVillager(this.scene.seats[j].rolecard)) {
				if (!this.scene.seats[j].killed) {
					goodArray.push(this.scene.seats[j].userid);
				}
				continue;
			}
			if (isWolf(this.scene.seats[j].rolecard)) {
				if (!this.scene.seats[j].killed) {
					wolfArray.push(this.scene.seats[j].userid);
				}
				continue;
			}
		}

		if (godArray.length == 0 && this.opt.type == 0) {
			//神全死了
			return 1;
		}
		if ((goodArray.length == 0||godArray.length == 0)&&this.opt.type == 1) {
			//村民全死了||神全死了
			return 2;
		}
		if (goodArray.length == 0&&godArray.length ==0&&this.opt.type == 2) {

			return 3;
		}
		if (wolfArray.length == 0) {
			//狼人全死了
			return 4;
		}
		return 0;
	}

	sheriffDead(cb) {
		this.broadcast({c:'laba',str:'移交警徽'});
		var self=this, scene=this.scene;
		var t;
		var seat=self.findSeat(scene.sheriff);
		if (!seat.hasOwnProperty('user')) {
			return cb(null);
		}
		self.askUser(seat.user, {str:'sheriffDead',v:1}, function(err, ans, opcode) {
			seat.user.send({c:'sysTipWin', v:{str:'clear'}});
			if (err) {
				self.broadcast({c:'table.narrate', v:'警长死了，他没有指定继任者'});
				scene.sheriff = 0;
				self.broadcast({c:'updateJingZhang',userid:seat.userid,v:1});
				return cb(null);
			}
			//未指定
			if (!opcode||!opcode.userid) {
				self.broadcast({c:'table.narrate', v:'警长死了，他没有指定继任者'});
				scene.sheriff = 0;
				self.broadcast({c:'updateJingZhang',userid:seat.userid,v:1});
				self.broadcast({c:'sysTipWin',v:{str:'misssheriff'}});
				t = setTimeout(c,5*1000);
				// return cb(null);
				return;
			}
			scene.sheriff=opcode.userid;
			self.broadcast({c:'updateJingZhang',userid:opcode.userid,v:0});
			var p = self.findSeat(opcode.userid);
			self.broadcast({c:'sysTipWin',v:{str:'newsheriff',p:p.pos+1}});
			self.broadcast({c:'table.narrate', v:'警长死了，他指定的继任者是' + self.findSeat(opcode.userid).user.nickname});
			t = setTimeout(c,5*1000);
		},self.rightTime*1000)	

		function c() {
			self.broadcast({c:'sysTipWin', v:{str:'clear'}});
			clearTimeout(t);
			t = null;
			if (scene.sheriff > 0) {
				cb(null, scene.sheriff);
			} else {
				cb(null);
			}
		}
	}
	hunterDead(userid, cb) {
		var self=this, scene=this.scene;
		var seat=self.findSeat(userid);	
		self.askUser(seat.user, {str:'hunterDead',v:2}, function(err, ans, opcode) {
			seat.user.send({c:'sysTipWin', v:{str:'clear'}});
			if (err) {
				return cb();
			}
			//猎人选择不带走人
			if (!opcode||opcode.hunterKillInfo == 0) {
				return cb();
			}
			if (opcode&&opcode.hunterKillInfo == 1) {
				self.showedRoleCard.push('hunter');
				//猎人亮出身份牌
				for (var n=0;n<self.scene.seats.length;n++) {
					if (isGood(self.scene.seats[n].rolecard)) {
						if (self.scene.seats[n].rolecard == 'prophet') {
							self.scene.seats[n].user.send({c:'updateRole',sceneInfo:self.getSceneInfo3(self.scene.seats[n].userid,1,'hunter'),prophetCheckInfo:self.prophetCheckInfo});
						} else {
							self.scene.seats[n].user.send({c:'updateRole',sceneInfo:self.getSceneInfo3(self.scene.seats[n].userid,1,'hunter')});
						}
					} else {
						self.scene.seats[n].user.send({c:'updateRole',sceneInfo:self.getSceneInfo3(self.scene.seats[n].userid,0,'hunter')});
					}
				}
				self.askUser(seat.user,{str:'hunterChoose',v:2},function(err, ans, opcode) {
					seat.user.send({c:'sysTipWin', v:{str:'clear'}});
					if (err) {
						return cb();
					}
					//未带走人
					if (!opcode||!opcode.userid) {
						return cb();
					}

					self.gunshotKill(opcode.userid, cb);
				},self.rightTime*1000);
			}
		},self.rightTime*1000)		
	}
	gunshotKill(userid, cb) {
		var scene=this.scene;
		var self = this;
		var r = this.directKillPerson(userid);
		if (r > 0) {
			self.isContinue = false;
			var str = r==1?'狼人获胜':(r==2?'狼人获胜':(r==3?'狼人获胜':'好人获胜'));
			self.winRes = r;
			self.broadcast({c:'table.narrate', v:str});
			return cb('over');
		}
		if (scene.sheriff==userid) {
			setTimeout(self.sheriffDead(function() {
				cb(null, [userid])
			}), 5000);
			return;
		}
		// return self.sheriffDead(function() {
		// 	cb(null, [userid])
		// });
		cb(null, [userid]);
	}
	poisonKill(userid, cb) {
		this.gunshotKill(userid, cb);
	}
	voteKill(userid,type,cb) {
		//type true:是投票 false：不是投票
		var self = this;
		var scene=this.scene;
		var t;
		var seat=this.findSeat(userid);
		
		if (!(seat.rolecard == 'idiot'&&type)) {
			var r = self.directKillPerson(userid);
			if (r > 0) {
				self.isContinue = false;
				var str = r==1?'狼人获胜':(r==2?'狼人获胜':(r==3?'狼人获胜':'好人获胜'));
				self.winRes = r;
				self.broadcast({c:'table.narrate', v:str});
				return cb('over');
			}
		} else {
			//白痴强行翻牌
			self.showedRoleCard.push('idiot');
			for (var n=0;n<self.scene.seats.length;n++) {
				if (isGood(self.scene.seats[n].rolecard)) {
					if (self.scene.seats[n].rolecard == 'prophet') {
						self.scene.seats[n].user.send({c:'updateRole',sceneInfo:self.getSceneInfo3(self.scene.seats[n].userid,1,'idiot'),prophetCheckInfo:self.prophetCheckInfo});
					} else {
						self.scene.seats[n].user.send({c:'updateRole',sceneInfo:self.getSceneInfo3(self.scene.seats[n].userid,1,'idiot')});
					}
				} else {
					self.scene.seats[n].user.send({c:'updateRole',sceneInfo:self.getSceneInfo3(self.scene.seats[n].userid,0,'idiot')});
				}
			}
		}
		//白痴死
		if (seat.rolecard == 'idiot') {
			if (type) {
				//设置白痴假死状态(scene里面有showIdiot)
				scene.showIdiot = userid;
				//被投票死的
				if (scene.sheriff==userid) {
					scene.sheriff = 0;
					self.broadcast({c:'sysTipWin',v:{str:'misssheriff'}});
					self.broadcast({c:'updateJingZhang',userid:seat.userid,v:1});
					t = setTimeout(c,5*1000);
					return;
				} else {
					return cb(null,userid);
				}
			} else {
				if (scene.sheriff==userid) {
					setTimeout(self.sheriffDead(function() {
						cb(null,userid);
					}), 5000);
					return;
					// return self.sheriffDead(function() {
					// 	cb(null,userid);
					// });
				} else {
					return cb(null,userid);
				}
			}
		}
		if (seat.rolecard=='hunter') return self.hunterDead(userid, function(err, bodies) {
			if (err) {
				return cb(err);
			}
			if (scene.sheriff==userid) {
				if (type) {
					scene.sheriff = 0;
					self.broadcast({c:'updateJingZhang',userid:seat.userid,v:1});
					self.broadcast({c:'sysTipWin',v:{str:'misssheriff'}});
					t = setTimeout(c,5*1000);
					return;
				} else {
					setTimeout(self.sheriffDead(function() {
						cb(null,userid);
					}), 5000);
					return;

					// return self.sheriffDead(function() {
					// 	// cb(null, merge(bodies, [userid]));
					// 	cb(null,userid);
					// });
				}
			}
			cb(null,userid);
		});
		if (scene.sheriff==userid) {
			if (type) {
				scene.sheriff = 0;
				self.broadcast({c:'updateJingZhang',userid:seat.userid,v:1});
				self.broadcast({c:'sysTipWin',v:{str:'misssheriff'}});
				t = setTimeout(c,5*1000);
				return;
			} else {
				setTimeout(self.sheriffDead(function() {
						cb(null,userid);
					}), 5000);
				return;


				// return self.sheriffDead(function() {
				// 	cb(null,userid);
				// });
			}
		}
		cb(null,userid);

		function c() {
			self.broadcast({c:'sysTipWin', v:{str:'clear'}});
			clearTimeout(t);
			t = null;
			cb(null,userid);
		}
	}
	wolfKill(userid, cb) {
		this.voteKill(userid,false,cb);
	}
	
	annouceDeath(cb) {
		// console.log(arguments);
		var self=this;
		var death={};
		var t;
		var deathList = [];
		var deathUserIds=[];
		if (self.game.healed!=null&&self.game.defended!=null&&self.game.healed==self.game.defended) {
			death[self.game.healed]='poison';
		}
		if (self.game.poisoned) {
			death[self.game.poisoned]='poison';
		}
		if (self.game.prey!=self.game.poisoned && self.game.prey!=self.game.defended && self.game.prey!=self.game.healed) {
			// death[self.game.wolfKilled]='wolf';
			// death[self.game.prey]=null;
		}
		if (!(self.game.wolfKilled==self.game.defended||self.game.wolfKilled==self.game.healed)) {
			death[self.game.wolfKilled]='wolf';
		}

		for (var k in death) {
			var p = self.findSeat(k).pos + 1;
			deathList.push(p);
			deathUserIds.push(k);
		}
		if (deathUserIds.length == 0) {
			self.broadcast({
						c:'sysTipWin',v:{str:'deathInfo',list:deathList}
					});
		} else {
			for (var i=0;i<self.scene.seats.length;i++) {
				if (deathUserIds.indexOf(self.scene.seats[i].userid) < 0) {
					self.scene.seats[i].user.send({
							c:'sysTipWin',v:{str:'deathInfo',list:deathList}
						});
				}
			}
		}
		t = setTimeout(c,5*1000);
		// async.forEachOf(death, function(deathMode, userid, _cb) {
		// 	var method=deathMode+'Kill';
		// 	self[method](userid, _cb);
		// }
		// , function(err, results) {
		// 	if (err == 'over') {
		// 		// t = setTimeout(c,3*1000);
		// 		return cb('over');
		// 	}
		// 	self.deathInNight = Object.keys(death);
		// 	cb(null, Object.keys(death));
		// });

		function c () {
			clearTimeout(t);
			t = null;
			self.broadcast({c:'sysTipWin', v:{str:'clear'}});
			async.forEachOf(death, function(deathMode, userid, _cb) {
				var method=deathMode+'Kill';
					self[method](userid, _cb);
				}
				, function(err, results) {
					if (err == 'over') {
						// t = setTimeout(c,3*1000);
						return cb('over');
					}
					self.deathInNight = Object.keys(death);
					cb(null, Object.keys(death));
				});
			}
	}
	//bodies传了个userid 有可能传一个数组[userids]要做判断
	deadmanSpeak(bodies, cb) {
		// console.log(arguments);
		if (typeof bodies=='function') return bodies();
		if (!bodies) return cb();
		// if (!Array.isArray(bodies)) return cb();
		//当前发言的死亡玩家
		var curBody = [];
		var user = [];
		if (Array.isArray(bodies)) {
			if (bodies.length == 0) {
				return cb();
			} else if (bodies.length == 1) {
				curBody.push(bodies[0]);
			} else {
				//当多个死亡玩家时 
				curBody = bodies;
			}
		} else {
			curBody.push(bodies);
		}
		var self = this;
		// if (bodies.length==0) return cb();
		var i=0;
		for (i;i<curBody.length;i++) {
			if (self.users.hasOwnProperty(curBody[i])) {
				user.push(self.users[curBody[i]]);
			}
		}
		if (user.length > 0) {
			//系统公告
			this.broadcast({c:'laba',str:'发表遗言'});
			this.speak(user,'你死了，请发言',cb,self.speakSelectTime*1000);
		} else {
			this.broadcast({c:'laba',str:''});
		}
	}
	//发言 users=[]
	speak(users, str, cb,timeout) {
		var self = this;
		if (typeof str=='function') {
			cb=str;
			str='请发言';
		}
		//顺序说话
		async.eachSeries(users,function(user,_cb) {
			self.promptUser(user,str,function(err) {
				_cb();
			},timeout);
		},function(err) {
			cb();
		});
	}
	votePolice(cb) {
		// if (this.opt.renshu == 6) {
		// 	return cb(null);
		// }
		var self=this;
		var tuiShuiUser = [];
		var t;
		//系统公告
		self.broadcast({c:'laba',str:'竞选警长'});
		//声音
		self.broadcast({c:'musicOrSound',str:'竞选警长'});

		var clearShangJingHandle = function (userAns,callback) {

			//未竞选
			if (!userAns.op||!userAns.op.v) {
				callback();
				return;
			}

			//isGiveUp 0上警1退水
			//上警
			if (userAns.op.isGiveUp == 0) {
				self.broadcast({c:'shangjing',v:0,pos:self.findSeat(userAns.op.userid).pos});
			} else {
				//退水
				self.broadcast({c:'clearShangJing',v:1,userid:userAns.op.userid});
				callback();
			}
		}

		var userList = this.allusers();
		for (var w=0;w<userList.length;w++) {
			userList[w].on('clearShangJing',clearShangJingHandle);
		}

		var removeclearShangJingEvents = function() {
			for (var r=0;r<userList.length;r++) {
				userList[r].removeListener('clearShangJing',clearShangJingHandle);
			}
		}

		self.askAll(this.allusers(), {str:{str:'campaignsheriff',v:4}}
		, function(err, user, pack) {
			if (err) {
				return;
			}
			//未竞选
			if (!pack||!pack.v) {
				return;
			}
			// //isGiveUp 0上警1退水
			// //上警
			// if (pack.isGiveUp == 0) {
			// 	self.broadcast({c:'shangjing',v:0,pos:self.findSeat(pack.userid).pos});
			// } else {
			// 	//退水
			// 	self.broadcast({c:'clearShangJing',v:1,userid:pack.userid});
			// }

			//退水
			if (pack&&pack.isGiveUp == 1) {
				tuiShuiUser.push(pack.userid);
				return;
			}
			self.findSeat(pack.userid).voteme=pack.v;
		}
		, function() {
			removeclearShangJingEvents();
			self.broadcast({c:'sysTipWin', v:{str:'clear'}});
			//crew 未竞选的玩家;
			var roll=[], crew=[];var rollUserId=[];
			var voteRes = {}; 
			var rollresult={};
			for (var i=0; i<self.opt.renshu; i++) {
				var seat=self.scene.seats[i], user=seat.user;
				if (!user) continue;
				if (seat.voteme) {
					roll.push(user);
					rollUserId.push(user.id);
				}else {
					if (tuiShuiUser.indexOf(seat.userid)<0) {
						crew.push(user);
					}
				}
				seat.voteme = false;
			}
			function campaign(_campaign_cb) {
				//没人竞选
					if (roll.length == 0) {
						_campaign_cb(null,null);
						return;
					}
					//只有一个人竞选
					if (rollUserId.length == 1) {
						_campaign_cb(null,rollUserId[0]);
						return;
					}
				self.speak(roll,'竞选宣言',function() {
					self.askAll(crew, {str:{str:'choosesheriff',v:1}, roll:(function() {
						var userids=[];
						for (var i=0; i<roll.length; i++) {
							userids.push(roll.id);
						}
						return userids;
					})()}
					,function(err, user, pack) {
						if (err) {
							return;
						}
						//未投票
						if (!pack||!pack.userid) {
							return;
						}
						//投票的是未竞选的人
						if (rollUserId.indexOf(pack.userid)<0) {
							return;
						}
						self.findSeat(user.id).voteto=pack.userid;
					}
					,function() {
						self.broadcast({c:'sysTipWin', v:{str:'clear'}});
						voteRes[0] = [];
						for (var i=0; i<crew.length; i++) {
							var voteto=self.findSeat(crew[i].id).voteto;
							self.findSeat(crew[i].id).voteto = 0;
							if (!voteto) {
								voteRes[0].push(self.findSeat(crew[i].id).pos + 1);
								continue;
							}
							if (!rollresult[voteto]) rollresult[voteto]=1;
							else rollresult[voteto]++;


							if (voteRes.hasOwnProperty(self.findSeat(voteto).pos + 1)) {
								voteRes[self.findSeat(voteto).pos + 1].push(self.findSeat(crew[i].id).pos + 1);
							} else {
								voteRes[self.findSeat(voteto).pos + 1] = [self.findSeat(crew[i].id).pos + 1];
							}
						}

						if (voteRes[0].length == 0) {
							delete voteRes[0];
						}

						self.broadcast({c:'sysTipWin',v:{str:'voteRes',voteRes:voteRes,time:5}});
						t = setTimeout(c,5*1000);

						function c() {
							self.broadcast({c:'sysTipWin', v:{str:'clear'}});
							clearTimeout(t);
							t = null;
							_campaign_cb(null,self.getVoteResult(rollresult, false));
						}
					},self.rightTime*1000)
				},self.speakSelectTime*1000);
			}
			function campaignPK(_campaignPK_cb) {
					//没人竞选
					if (roll.length == 0) {
						_campaignPK_cb(null,null);
						return;
					}
					//最高同票的pk
					var sameVoteUserIds = self.getMaxSameVoteResult(rollresult);
					var sameVoteUses = [];
					for (var sameVotei=0;sameVotei<sameVoteUserIds.length;sameVotei++) {
						sameVoteUses.push(self.users[sameVoteUserIds[sameVotei]]);
					}
					if (sameVoteUserIds.length > 0) {
						self.broadcast({c:'sheriffPK',beVotes:sameVoteUserIds});
					}
				self.speak(sameVoteUses,'竞选宣言',function() {
					
					self.askAll(crew, {str:{str:'choosesheriff',v:1}}
					,function(err, user, pack) {
						if (err) {
							return;
						}
						//未投票
						if (!pack||!pack.userid) {
							return;
						}
						//投票的是未竞选的人
						if (rollUserId.indexOf(pack.userid)<0) {
							return;
						}
						self.findSeat(user.id).voteto=pack.userid;
					}
					,function() {
						self.broadcast({c:'sysTipWin', v:{str:'clear'}});
						rollresult={};
						voteRes = {};
						voteRes[0] = [];
						for (var i=0; i<crew.length; i++) {
							var voteto=self.findSeat(crew[i].id).voteto;
							self.findSeat(crew[i].id).voteto = 0;
							if (!voteto) {
								voteRes[0].push(self.findSeat(crew[i].id).pos + 1);
								continue;
							}
							if (!rollresult[voteto]) rollresult[voteto]=1;
							else rollresult[voteto]++;


							if (voteRes.hasOwnProperty(self.findSeat(voteto).pos + 1)) {
								voteRes[self.findSeat(voteto).pos + 1].push(self.findSeat(crew[i].id).pos + 1);
							} else {
								voteRes[self.findSeat(voteto).pos + 1] = [self.findSeat(crew[i].id).pos + 1];
							}
						}

						if (voteRes[0].length == 0) {
							delete voteRes[0];
						}

						self.broadcast({c:'sysTipWin',v:{str:'voteRes',voteRes:voteRes,time:5}});

						t = setTimeout(cl,5*1000);
						function cl() {
							self.broadcast({c:'sysTipWin', v:{str:'clear'}});
							clearTimeout(t);
							t = null;
							_campaignPK_cb(null,self.getVoteResult(rollresult, false));
						}
					},self.rightTime*1000)
				},self.speakSelectTime*1000);
			}
			//2次投票
			campaign(function(err, userid) {
				self.broadcast({c:'clearAllShangJing',v:1});
				if (!userid) return campaignPK(function(err, userid) {
					self.broadcast({c:'clearsheriffPK'});
					if(!userid) {
						self.broadcast({c:'sysTipWin',v:{str:'misssheriff'}});
						self.scene.sheriff=null;
						//声音
						self.broadcast({c:'musicOrSound',str:'没有警长'});

						t = setTimeout(func,5*1000);

						function func() {
							self.broadcast({c:'sysTipWin', v:{str:'clear'}});
							clearTimeout(t);
							t = null;
							cb(null);
						}
						return;
					}
					self.scene.sheriff=userid;
					self.broadcast({c:'updateJingZhang',userid:userid,v:0});
					var p = self.findSeat(userid);
					self.broadcast({c:'sysTipWin',v:{str:'newsheriff',p:p.pos+1}});
					// cb(null);
					t = setTimeout(fun,5*1000);
					
					function fun() {
						self.broadcast({c:'sysTipWin', v:{str:'clear'}});
						clearTimeout(t);
						t = null;
						cb(null);
					}
				});
				self.scene.sheriff=userid;
				self.broadcast({c:'updateJingZhang',userid:userid,v:0});
				var p = self.findSeat(userid);
				self.broadcast({c:'sysTipWin',v:{str:'newsheriff',p:p.pos+1}});
				t = setTimeout(f,5*1000);
				// cb(null);
			});
			function f() {
				self.broadcast({c:'sysTipWin', v:{str:'clear'}});
				clearTimeout(t);
				t = null;
				cb(null);
			}
		},self.rightTime*1000);
	}
	selectFirstSpeaker(cb) {
		if (Array.isArray(cb)) {
			cb = arguments[1];
		}
		var scene=this.scene;
		var self = this;
		var d = 1;
		if (!scene.sheriff&&self.deathInNight.length == 0) return cb(null, scene.seats[0].user.id,d);
		if (!scene.sheriff&&self.deathInNight.length == 1) {
			return cb(null, self.deathInNight[0],d);
		}
		if (!scene.sheriff&&self.deathInNight.length > 1) {
			if (self.findSeat(self.deathInNight[0]).pos > self.findSeat(self.deathInNight[1]).pos) {
				return cb(null, self.deathInNight[0],d);
			}
			return cb(null, self.deathInNight[1],d);
		}
		var i = 0;
		var sheriffUser;
		var sheriffUserPos;
		for (i;i<scene.seats.length;i++) {
			if (scene.sheriff == scene.seats[i].userid) {
				sheriffUser = scene.seats[i].user;
				sheriffUserPos = scene.seats[i].pos
				break;
			}
		}
		//type 0 警左警右  1死左死右
		var type = 0;
		if (self.deathInNight.length == 1) {
			type = 1;
		}
		if (sheriffUser) {
			self.broadcast({c:'laba',str:'警长选择发言顺序'});
		}
		self.askUser(sheriffUser, {str:'sheriffSelectFirst',v:2,type:type}, function(err, ans, opcode) {
			sheriffUser.send({c:'sysTipWin', v:{str:'clear'}});
			if (err) {
				return cb(null, scene.seats[0].user.id,d);
			}
			//未选择
			if (!opcode||!opcode.hasOwnProperty('v')) {
				if (self.deathInNight.length == 0) return cb(null, scene.seats[0].user.id, d);
				if (self.deathInNight.length == 1) {
					return cb(null, self.deathInNight[0],d);
				}
				if (self.deathInNight.length > 1) {
					if (self.findSeat(self.deathInNight[0]).pos > self.findSeat(self.deathInNight[1]).pos) {
						return cb(null, self.deathInNight[0],d);
					}
					return cb(null, self.deathInNight[1],d);
				}
			}
			//0left 1right
			var speakerUserId;
			if (self.deathInNight.length == 0||self.deathInNight.length>1) {
				if (opcode.v == 0) {
					speakerUserId = self.findUserIdByPos(sheriffUserPos,0);
					d = opcode.v;
				} else {
					speakerUserId = self.findUserIdByPos(sheriffUserPos,1);
				}
			}
			if (self.deathInNight.length == 1) {
				if (opcode.v == 0) {
					speakerUserId = self.findUseridByUserId(self.deathInNight[0],0);
					d = opcode.v;
				} else {
					speakerUserId = self.findUseridByUserId(self.deathInNight[0],1);
				}
			}
			return cb(null, speakerUserId,d);
		},self.rightTime*1000);
	}

	//type 1正向 0逆向 默认为1
	discuss(firstUserId, type, cb) {
		var self = this;
		var firstSeat=this.findSeat(firstUserId);
		var firstSpeakerPos;
		if (firstSeat) {
			firstSpeakerPos = firstSeat.pos;
		} else {
			firstSpeakerPos = 1;
		}
		var users=[];
		var sheriffuser;
		var seat;
		for (var i=0; i<this.opt.renshu; i++) {
			if (type == 0) {
				var p = parseInt(firstSpeakerPos)-i;
				if (p < 0) {
					seat = this.scene.seats[parseInt(this.opt.renshu) + parseInt(p)];
				} else {
					seat=this.scene.seats[(firstSpeakerPos-i)%this.opt.renshu];
				}
			} else {
				seat=this.scene.seats[(firstSpeakerPos+i)%this.opt.renshu];
			}
			if (seat && seat.killed) continue;
			if (seat&&seat.userid == this.scene.sheriff) {
				sheriffuser = seat.user;
				continue;
			}
			if (seat) {
				users.push(seat.user);
			}
		}
		if (sheriffuser) {
			users.push(sheriffuser);
		}
		this.speak(users, {str:'现在轮到你发言',s:1}, function() {
			cb(null, users);
		},self.speakSelectTime*1000);
	}
	vote(users, cb) {
		this.day +=1;
		var t;
		var self=this, scene=self.scene, seats=scene.seats;
		var rolls={};//{beVoteUserid:[voteUserid]}
		var voteRes = {};
		var jingzhangChooseUid = null;

		//如果有警长 警长先投
		var jzUser = null;
		var otherUsers = [];
		for (var ji = 0;ji<users.length;ji++) {
			if (users[ji].id == scene.sheriff) {
				jzUser = users[ji];
			} else {
				//被票死的白痴不能投票
				if (scene.showIdiot == users[ji].id) {
					continue;
				}
				otherUsers.push(users[ji]);
			}
		}
		

		if (jzUser) {
			//监听事件
			var sheriffvotefirstHandle = function (userAns,callback) {
				//投了被票死的白痴
				if (userAns.op.userid == scene.showIdiot) {
					jzUser.senderr('白痴神无法被投票');
					return;
				} else {
					callback();
				}
			}

			var removeSheriffVoteFirstEvents = function() {
				jzUser.removeListener('sheriffvotefirst',sheriffvotefirstHandle);
			}

			jzUser.on('sheriffvotefirst',sheriffvotefirstHandle);

			//系统公告
			self.broadcast({c:'laba',str:'警长归票'});
			self.broadcast({c:'sysTipWin',v:{str:'votefirst'}},jzUser);
			self.askUser(jzUser,{str:'votefirst',v:4},function(err, user, pack) {
				removeSheriffVoteFirstEvents();
				self.broadcast({c:'sysTipWin', v:{str:'clear'}});
				if (err) {
					return f();
				}
				//未投票
				if (!pack||!pack.userid) {
					f();
					return;
				}

				//投了被票死的白痴
				if (pack.userid == scene.showIdiot) {
					f();
					return;
				}

				self.findSeat(user.id).voteto=pack.userid;
				//警长归票特效加到对应头像
				jingzhangChooseUid = pack.userid;
				self.broadcast({c:'jingzhangGuiPiao',p:self.findSeat(jingzhangChooseUid).pos,v:1});
				f();
				return;
			},10*1000);
		} else {
			f();
		}

		var otherVoteHandle = function (userAns) {
			//投了被票死的白痴
			if (userAns.op.userid == scene.showIdiot) {
				if (self.users[userAns.op.selfid]) {
					self.users[userAns.op.selfid].senderr('白痴神无法被投票');
				}
				return;
			}
		}

		for (var w=0;w<otherUsers.length;w++) {
			otherUsers[w].on('otherVote',otherVoteHandle);
		}

		var removeOtherVoteEvents = function() {
			for (var r=0;r<otherUsers.length;r++) {
				otherUsers[r].removeListener('otherVote',otherVoteHandle);
			}
		}


		function f() {
			//系统公告
			self.broadcast({c:'laba',str:'投票阶段'});
			//声音
			self.broadcast({c:'musicOrSound',str:'投票阶段'});
			//其他人投票
			self.askAll(otherUsers, {str:{str:'vote',v:3}}, function(err, user, pack) {
				self.broadcast({c:'sysTipWin', v:{str:'clear'}});
				if (err) {
					return;
				}
				//未投票
				if (!pack||!pack.userid) {
					return;
				}
				//投了被票死的白痴
				if (pack.userid == scene.showIdiot) {
					return;
				}
				self.findSeat(user.id).voteto=pack.userid;
				return;
			}
			,function() {
				removeOtherVoteEvents();
				voteRes[0] = [];
				for (var i=0; i<users.length; i++) {
					var voteto=self.findSeat(users[i].id).voteto;
					if (voteto) {
						if (rolls.hasOwnProperty(voteto)) {
							rolls[voteto].push(users[i].id);
						} else {
							rolls[voteto] = [users[i].id];
						}
						if (voteRes.hasOwnProperty(self.findSeat(voteto).pos + 1)) {
							voteRes[self.findSeat(voteto).pos + 1].push(self.findSeat(users[i].id).pos + 1);
						} else {
							voteRes[self.findSeat(voteto).pos + 1] = [self.findSeat(users[i].id).pos + 1];
						}
						self.findSeat(users[i].id).voteto = 0;
					} else {
						voteRes[0].push(self.findSeat(users[i].id).pos + 1);
					}
				}

				if (voteRes[0].length == 0) {
					delete voteRes[0];
				}

				//广播投票结果
				// var str = "";
				// for (var key in voteRes) {
				// 	var len = voteRes[key].length;
				// 	for (var i=0;i<len;i++) {
				// 		if (i == (len-1)){
				// 			str = str.concat(voteRes[key][i] +"");
				// 		} else {
				// 			str = str.concat(voteRes[key][i] + ",");
				// 		}
				// 	}
				// 	str = str.concat("投票给" + key + "。");
				// }
				// if (str!='') {
					// self.broadcast({c:'table.narrate',v:str});
					self.broadcast({c:'sysTipWin',v:{str:'voteRes',voteRes:voteRes,time:10}});
				// }
				//投票结果出来后清除警长的归票
				if (jingzhangChooseUid) {
					self.broadcast({c:'jingzhangGuiPiao',p:self.findSeat(jingzhangChooseUid).pos,v:0});
				}
				t = setTimeout(c,10*1000);
			},self.rightTime*1000);
		}

		function c() {
			self.broadcast({c:'sysTipWin', v:{str:'clear'}});
			clearTimeout(t);
			t = null;
			var userid=self.getVoteKillResult(rolls);
			if (userid) {
				return self.voteKill(userid,true,cb);
			} else {
				cb(null);
			}
		}
	}

}

module.exports=Lv1;