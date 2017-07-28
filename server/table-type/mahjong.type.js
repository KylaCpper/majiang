'use strict';
var async=require('async'), assert=require('assert'), EventEmitter=require('events'), clone=require('clone');
var alltable=require('../tables.js');
var once=require('once');
var syncfy =require('sync-obj');
var debugout=require('debugout')(require('yargs').argv.debugout);
var __rule=require('./mj1Rule.js'), cardv=__rule.cardv, testHu = __rule.testHu, getTingArr = __rule.getTingArr, testPengGang = __rule.testPengGang, testChi = __rule.testChi,testPGang = __rule.testPGang, testGang = __rule.testGang;
var msgDispatcher=new EventEmitter();

var merge=require('merge');
function safeMerge(obj1, obj2) {
	if (obj1==null) return obj2;
	return merge(obj1, obj2);
}

class Mj1 {
	constructor(code, type, opt) {
		var self = this;
		if (typeof opt!='object') opt={type:0,renshu:4};
		this.opt=opt;
		this.users={};
		this.gd=this.gamedata={};
		this.code = code;
		this.postionList = [];
		this.postionList.length = 4;
		debugout('code=' + code);
		// scene={banker:userid, seats:{0:{}, 1:{}, 2:{},3:{}}}
		var scene=this.scene={banker:0,seats:{},roomid:code};
		this.curExecutePos = 0;//当前执行位置
		this.q;
		this.totalCards = 144;
		this.cards=[];
		this.laiZi = 0;//赖子
		this.huaCards = [501,502,503,504,505,506,507,508];
		this.isStart = false;
	}

	get roomtype() {
		return 'mahjong';
	}

	//有操作立刻返回 无操作时间结束返回
	// str {v:[0,1,2,3,4]}
	//v 0打牌 1吃 2碰 3杠 4胡
	askUser(user,str,cb,timeout) {
		var ansHandler;
		var _cb = cb;
		cb=once(function() {
			user.removeListener('table.ans',ansHandler);
			user.removeListener('backOnline', backHandler);

			if (userAns) _cb(null, userAns.pack, userAns.op);
			else _cb(null);
		});
		setTimeout(cb, timeout);
		var sendCmd = {
			c:'table.ask',v:str
		};
		user.send(sendCmd);
		if (timeout&&str.v.length == 1&&str.v[0]==0) {
			this.broadcast({c:'updateTime', time:timeout,pos:this.curExecutePos});
		}
		var userAns, backHandler;
		backHandler=function() {
			if (sendCmd) {
				user.send(sendCmd)
			}
		}
		ansHandler = function(op, user) {
			userAns={op:op, pack:user};
			cb(null, user, op);
		}
		user.once('table.ans', ansHandler);
		user.on('backOnline', backHandler);
	}

	askAll(users, str, opCb, finalCB,timeout) {
		var self = this;
		async.each(users, function(user, cb) {
			self.askUser(user, str, function(err, userObj, pack) {
				opCb(err, userObj, pack);
				cb();
			},timeout)
		}, finalCB);
	}

	msg(pack,user) {
		switch(pack.c) {
			case 'gamestart':
				this.gameStart();
			break;
			case 'roomInfo':
				this.sendRoomInfo(user,this.scene.roomid);
			break;
			default:
			return false;
		}
		return true;
	}

	broadcast(json, except,cb) {
		var seats=this.scene.seats;
		for (var key in seats) {
			if (seats.hasOwnProperty(key)&&seats[key].hasOwnProperty('user')&&seats[key]['user']!=except) {
				var u = this.users[seats[key]['userid']];
				u && u.send(json);
			}
		}
		if (cb) {
			cb();
		}
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

	sendRoomInfo(user,roomId) {
		var self = this;
		//temp
		for (var key in this.scene.seats) {
			if (user.id == this.scene.seats[key].userid) {
				user.send({c:'roomInfo',pos:this.scene.seats[key].pos});
			}
		}
	}

	//游戏开始时候重置
	reSetScene() {
		this.laiZi = 0;
		for (var key in this.scene.seats) {
			this.scene.seats[key].curCard = 0;
			this.scene.seats[key].huaCard = [];
			this.scene.seats[key].handCards = [];

		}
	}

	canEnter(user) {
		for (var key in this.scene.seats) {
			if (user.id == this.scene.seats[key].userid) {
				return true;
			}
		}
		var keys=Object.keys(this.scene.seats);
		var length = keys.length;
		if (length >= 4) {
				user.senderr('座位已经坐满了，要早点来哦');
				return false;
		}
		return true;
	}

	leave(){

	}

	enter(user) {
		debugout(user.id,'entered');
		var self = this;

		//同一个用户进来替换之前的
		var isSamePeople = false;
		for (var key in this.scene.seats) {
			if (user.id == this.scene.seats[key].userid) {
				this.scene.seats[key].user = user;
				user.offline =false;
				isSamePeople = true;
				break;
			}
		}

		if (!isSamePeople) {
			var keys=Object.keys(this.scene.seats);
			var length = keys.length;
			var postion = self.setPostion(user.id);
			if (length >= 4) {
				user.senderr('座位已经坐满了，要早点来');
				return false;
			} else {
				this.scene.seats[postion] = {
					user:user,
					pos:postion,
					userid:user.id,
					ready:false,
					face:user.dbuser.face,
					//打出去的牌
					throwCards:[],
					//手上的牌
					handCards:[],
					//碰或者杠牌
					showCards:[],
					//暗杠
					showAnGangCards:[],
					//花
					huaCard:[],
					//刚抽到的一张牌
					curCard:0
				};
			}
			user.offline =false;
		}

		if (this.users[user.id]) {
			this.users[user.id]=user;
			user.on('out', function() {
				// self.broadcast({c:'updateRoomInfo',sceneInfo:self.getSceneInfo2(false)});
			});
		} else {
			this.users[user.id]=user;
		}
	}

	gameStart() {
		//如果游戏已经开了
		if (this.isStart) {
			return;
		}
		//人数不足
		var keys=Object.keys(this.scene.seats);
		if (keys.length < 4) {
			return;
		}
		this.reSetScene();
		this.run();
		this.isStart = true;
	}

	run() {
		this.game={};
		var self = this;
		// loop
		this.q = async.queue(function(task, cb) {
			if (typeof task=='function') return task(cb);
			if (task.hasOwnProperty('func')&&task.hasOwnProperty('args')) {
				return task['func'](cb,task['args']);
			}
			cb();
		});

		this.q.push([
			this.selectBanker.bind(this),
			this.shuffleCards.bind(this),
			this.sendCard.bind(this),
			this.sendReplaceHuaCard.bind(this),
			this.bankerFirst.bind(this)
		],function(err) {

		});
	}

	selectBanker(cb) {
		//选出庄家
		this.scene.banker = this.scene.seats[0].userid;
		cb();
	}

	//洗牌
	shuffleCards(cb) {
		for (var i=0;i<this.totalCards;i++) {
			this.cards[i]=cardv(i);
		}
		for (var i=0; i<800; i++) {
			var p1=Math.floor(Math.random()*this.cards.length), p2=Math.floor(Math.random()*this.cards.length);
			while(p1==p2) {p2=Math.floor(Math.random()*this.cards.length)}
			var t=this.cards[p2];
			this.cards[p2]=this.cards[p1];
			this.cards[p1]=t;
		}
		cb();
	}

	sendCard(cb) {
		var self = this;
		//发牌
		for (var key in this.scene.seats) {
			if (this.scene.banker == this.scene.seats[key]['userid']) {
				this.scene.seats[key].handCards = this.scene.seats[key].handCards.concat(self.findEachCards(14));
			} else {
				this.scene.seats[key].handCards = this.scene.seats[key].handCards.concat(self.findEachCards(13));
			}
			console.log('sendCard ....' + key);
			this.scene.seats[key].user.send({c:'cardInfo',handCards:this.scene.seats[key].handCards});
		}
		cb();
	}

	sendReplaceHuaCard(cb) {
		var self = this;
		for (var key in self.scene.seats) {
			var len = self.scene.seats[key].handCards.length;
			var reCards = [];
			for (var i = (len - 1);i>=0;i--) {
				var card = self.scene.seats[key].handCards[i];
				if (self.huaCards.indexOf(card) >= 0) {
					//删除
					self.scene.seats[key].handCards.splice(i,1);
					//
					self.scene.seats[key].huaCard.push(card);
					//凑够8张花牌
					if (self.scene.seats[key].huaCard.length == 8) {
						//win....
					}
					var reCard = self.findUntilNoHuaCards(key);
					if (!reCard) {
						self.q.unshift(self.over.bind(self),function(err) {
							console.log('游戏结束！！！！1');
						});
						return cb();
					}
					reCards.push(reCard);
				}
			}
			//send替换花牌的牌
			if (reCards.length > 0) {
				self.scene.seats[key].handCards = self.scene.seats[key].handCards.concat(reCards);
				console.log('sendReplaceHuaCard ....' + key);
				self.scene.seats[key].user.send({c:'cardInfo',handCards:this.scene.seats[key].handCards});
				//广播花牌
				self.broadcast({c:'huaCard',huaCard:this.scene.seats[key].huaCard,pos:key});
			}
		}
		cb();
	}

	findUntilNoHuaCards(key) {
		var cCard;
		while(!cCard || Math.floor(cCard/100) == 5) {
			//没牌了 结束
			if (this.cards.length <= 0) {
				return null;
			}
			var p1=Math.floor(Math.random()*this.cards.length);
			cCard = this.cards[p1];
			this.cards.splice(p1,1);
			if (Math.floor(cCard/100) == 5) {
				this.scene.seats[key].huaCard.push(cCard);
			} else {
				return cCard;
			}

		}
		return cCard;
	}

	findEachCards(num) {
		var mCards = [];
		for (var i=0;i<num;i++) {
			var p1=Math.floor(Math.random()*this.cards.length);
			mCards.push(this.cards[p1]);
			this.cards.splice(p1,1);
		}
		return mCards;
	}

	bankerFirst(cb) {
		var self = this;
		for (var key in this.scene.seats) {
			if (this.scene.banker == this.scene.seats[key]['userid']) {
				this.curExecutePos = key;
				this.q.unshift(this.playCard.bind(this),function(err) {

				});
				return cb();
			}
		}
	}

	over(cb) {
		this.broadcast({c:'over'});
		this.isStart = false;
		if (cb) cb();
	}

	//先检查一轮看有人胡牌
	checkUsersCardCanHu(cb,arg) {
		var self = this;
		var cardInfo = arg['cardInfo'];
		var userPos = arg['userPos'];
		if (self.curExecutePos == 3) {
			self.curExecutePos = 0;
		} else {
			self.curExecutePos = parseInt(self.curExecutePos) + 1;
			self.curExecutePos = self.curExecutePos + '';
		}
		if (self.curExecutePos == userPos) {
			if (self.curExecutePos == 3) {
				self.curExecutePos = 0;
			} else {
				self.curExecutePos = parseInt(self.curExecutePos) + 1;
				self.curExecutePos = self.curExecutePos + '';
			}
			self.q.unshift({
				func:self.checkUsersCard.bind(self),
				args:{cardInfo:cardInfo,userPos:userPos}
			},function(err) {

			});
			return cb();
		}

		//检查当前位置的玩家是否胡这张牌
		console.log("---------------" + self.curExecutePos);
		console.log(self.scene.seats);
		var checkInfo = self.checkHu(self.scene.seats[self.curExecutePos]['handCards'],cardInfo);
		if (checkInfo.hasOwnProperty('v')&&checkInfo['v'].length>0) {
			var isNeed = checkInfo['isNeed'];
			var v = checkInfo['v'];
			this.askUser(self.scene.seats[self.curExecutePos]['user'],{v:v},function(err,pack,opcode) {
				if (err) {
					return cb();
				}
				//无操作
				if (!opcode||!opcode.ans) {
					return self.checkUsersCardCanHu(cb,arg);
				}
				//有操作 胡 
				if (opcode.ans == 4) {
					var ishu = testHu(cardInfo,self.scene.seats[self.curExecutePos]['handCards'],self.laiZi);
					if (ishu) {
						self.q.unshift(self.over.bind(self),function(err) {
							console.log('游戏结束！！！！2');
						});
						return cb();
					}
				}
				return self.checkUsersCardCanHu(cb,arg);
			},1000*10);
			return;
		} else {
			self.checkUsersCardCanHu(cb,arg);
		}
	}

	setCurExecutePos() {
		var self = this;
		if (self.curExecutePos == 3) {
			//打出牌的玩家是第三的位置，则将当前位置置为0轮到第0个位置的玩家
			self.curExecutePos = 0;
		} else {
			self.curExecutePos = parseInt(self.curExecutePos) + 1;
			self.curExecutePos = self.curExecutePos + '';
		}
	}

	//当有人打出一张牌的时候检查 检查吃碰杠胡
	//ask所有人记录每个位置的信息，等待结束处理 {pos:[1,2,3,4],pos:[1],pos:[],pos:[]}
	//cardInfo当前这一张牌的信息
	checkUsersCard(cb,arg) {
		var self = this;
		var cardInfo = arg['cardInfo'];
		var userPos = arg['userPos'];
		//检查除去自己以外的玩家需要这张牌
		//不需要改变位置
		self.setCurExecutePos();
		
		// self.
		if (self.curExecutePos == userPos) {
			self.setCurExecutePos();
			this.q.unshift(self.chouCard.bind(this),function(err) {

			});
			return cb();
		}

		//.............


		//检查当前位置的玩家是否需要这张牌
		console.log('检查。。。' + self.curExecutePos);
		var isl = self.isLastUser(userPos,self.curExecutePos);
		var checkInfo = self.check(self.scene.seats[self.curExecutePos]['handCards'],cardInfo,isl,self.scene.seats[self.curExecutePos]['showCards']);
		if (checkInfo.hasOwnProperty('v')&&checkInfo['v'].length>0) {
			var isNeed = checkInfo['isNeed'];
			var v = checkInfo['v'];
			var chiChoose = checkInfo['chiChoose'];
			this.askUser(self.scene.seats[self.curExecutePos]['user'],{v:v,chiChoose:chiChoose},function(err,pack,opcode) {
				if (err) {
					return cb();
				}
				//无操作
				if (!opcode||!opcode.ans) {
					return self.checkUsersCard(cb,arg);
				}
				//有操作 吃碰杠胡 
				if (opcode.ans == 1) {
					//吃的时候判断一下
					var lastPos = (userPos == 3?-1:userPos);
					if (self.curExecutePos != (parseInt(lastPos) + 1)) {
						return self.checkUsersCard(cb,arg);
					}
				}
				if (opcode.ans == 1&&opcode.hasOwnProperty('choose')) {
					self.chiPengGang(opcode.ans,self.scene.seats[self.curExecutePos],cardInfo,opcode.choose,chiChoose);
				} else {
					self.chiPengGang(opcode.ans,self.scene.seats[self.curExecutePos],cardInfo);
				}
				console.log('checkUsersCard ....' + self.curExecutePos);
				self.scene.seats[self.curExecutePos].user.send({c:'cardInfo',handCards:self.scene.seats[self.curExecutePos].handCards});
				self.broadcast({c:'updateShowCards',showCards:self.scene.seats[self.curExecutePos].showCards,pos:self.curExecutePos});
				//删除碰掉的那个人桌面上的牌
				self.scene.seats[userPos]['throwCards'].splice(self.scene.seats[userPos]['throwCards'].indexOf(cardInfo),1);
				self.broadcast({c:'updateThrowCards',throwCards:self.scene.seats[self.curExecutePos].throwCards,pos:userPos,curCard:cardInfo});
				//出牌
				self.q.unshift(self.playCard.bind(self),function(err) {
					
				});
				return cb();
			},1000*10);
			return;
		} else {
			this.checkUsersCard(cb,arg);
		}
	}

	isEmptyObj(o) {
		var t;
		for (t in o) {
			return !1;
		}
		return !0;
	}

	//是否是上家
	isLastUser(userPos,curExecutePos) {
		//userPos打牌的玩家  curExecutePos当前操作的玩家
		if ((curExecutePos-1) == userPos) {
			return true;
		}
		if (curExecutePos==0&&userPos==3) {
			return true;
		}
		return false;
	}

	//吃碰杠结果
	chiPengGang(v,seat,cardInfo,chooseRes,chiChoose) {
		//v 1吃 2碰 3杠 5
		var self = this;
		var len = seat.handCards.length;
		var t  = Math.floor(cardInfo / 100);
		var c = cardInfo % 10;
		if (v == 1) {
			var c = [];
			if (chiChoose.hasOwnProperty(chooseRes)) {
				c = chiChoose[chooseRes];
				for (var ci=0;ci<c.length;ci++) {
					if (c[ci] == cardInfo) {
						continue;
					}
					seat.handCards.splice(seat.handCards.indexOf(c[ci]),1);
				}
			}
			seat.showCards = seat.showCards.concat(c);
		} else if (v == 2) {
			var p = [];
			for (var i= (len -1);i>=0;i--) {
				var ct = Math.floor(seat.handCards[i] / 100);
				var cc = seat.handCards[i] % 10;
				if (ct == t && cc == c) {
					p.push(seat.handCards[i]);
					seat.handCards.splice(i,1);
				}
			}
			p.push(cardInfo);
			seat.showCards = seat.showCards.concat(p);
		} else if (v == 3) {
			//明杠有2种 手牌中的
			var g = [];
			for (var j = (len -1);j>=0;j--) {
				var gt = Math.floor(seat.handCards[j] / 100);
				var gc = seat.handCards[j] % 10;
				if (gt == t && gc == c) {
					g.push(seat.handCards[j]);
					seat.handCards.splice(j,1);
				}
			}
			g.push(cardInfo);
			seat.showCards = seat.showCards.concat(g);
		} else if (v == 5) {
			//明杠有2种 碰牌中的
			for (var mgi = 0;mgi <seat.showCards.length;mgi++) {
				var mgt = Math.floor(seat.handCards[mgi] / 100);
				var mgc = seat.handCards[mgi] % 10;
				if (mgt == t && mgc == c) {
					seat.showCards.splice(mgi,1,cardInfo);
				}
			}
		}
	}

	//暗杠结果
	anGang(seat,cardInfo) {
		var self = this;
		var len = seat.handCards.length;
		var t  = Math.floor(cardInfo / 100);
		var c = cardInfo % 10;
		var ag = [];
		for (var agi = (len - 1);agi>=0;agi--) {
			var agt = Math.floor(seat.handCards[agi] / 100);
			var agc = seat.handCards[agi] % 10;
			if (agt == t && agc == c) {
				ag.push(seat.handCards[agi]);
				seat.handCards.splice(agi,1);
			}
		}
		ag.push(cardInfo);
		seat.showAnGangCards = seat.showAnGangCards.concat(ag);
	}

	//检查是否能胡
	checkHu(mjArr,cardInfo) {
		//4胡
		var v = [];
		var isNeed = false;
		var ishu = testHu(cardInfo,mjArr,this.laiZi);
		if (ishu) {
			v.push(4);
		}
		if (ishu) {
			isNeed = true;
		}
		return {
			isNeed:isNeed,
			v:v
		}
	}

	//检查吃碰杠胡
	check(mjArr,cardInfo,islast,showCards) {
		console.log('check.arg....cardInfo = ' + cardInfo);
		console.log('islast............' + islast);
		//明杠有2种 手牌中的 碰牌中的
		//v 1吃 2碰 3杠 4胡 5碰的牌里面能杠
		var v = [];
		var isNeed = false;
		//检查能不能胡
		var ishu = testHu(cardInfo,mjArr,this.laiZi);
		if (ishu) {
			v.push(4);
		}
		//手牌中能不能碰或者杠
		var isPengGang = testPengGang(cardInfo,mjArr,this.laiZi);
		if (isPengGang.length > 0) {
			v = v.concat(isPengGang);
		}
		//已经碰了的牌中能不能杠
		var isPGang = testPGang(cardInfo,showCards,this.laiZi); 
		if (isPGang.length > 0) {
			v = v.concat(isPGang);
		}
		var chiChoose = {};
		var chiArr = [];
		if (islast) {
			//return []
			chiArr = testChi(cardInfo,mjArr,this.laiZi);
			if (chiArr.length > 0) {
				v.push(1);
				for (var i = 0;i<chiArr.length;i++) {
					chiChoose[i] = chiArr[i];
				}
			}
		}

		if (isPengGang.length > 0||chiArr.length > 0||ishu) {
			isNeed = true;
		}
		return {
			isNeed:isNeed,
			v:v,
			chiChoose:chiChoose
		}
	}

	//抽牌
	chouCard(cb) {
		var self = this;
		console.log('self.curExecutePos ===== ' + self.curExecutePos);
		var curCard = self.findUntilNoHuaCards(self.curExecutePos);
		//广播花牌
		self.broadcast({c:'huaCard',huaCard:this.scene.seats[self.key].huaCard,pos:self.curExecutePos});
		var isOp = false;
		if (!curCard) {
			self.q.unshift(self.over.bind(self),function(err) {
				console.log('游戏结束！！！！4');
			});
			return cb();
		}
		//自摸
		var ishu = testHu(curCard,self.scene.seats[self.curExecutePos]['handCards'],self.laiZi);
		if (ishu) {
			self.q.unshift(self.over.bind(self),function(err) {
				console.log('游戏结束！！！！5');
			});
			return cb();
		}
		//暗杠
		var isAnGang = testGang(curCard,self.scene.seats[self.curExecutePos]['handCards'],self.laiZi);
		if (isAnGang) {
			self.askUser(self.scene.seats[self.curExecutePos]['user'],{v:[3]},function(err,pack,opcode) {
				//无操作
				if (!opcode||!opcode.ans) {
					return;
				}
				if (opcode.ans == 3) {
					isOp = true;
					anGang(self.scene.seats[self.curExecutePos],curCard);
					//发送自己的暗杠
					self.scene.seats[self.curExecutePos].user.send({c:'anGang',cardInfo:curCard});
					//给别人广播自己的暗杠

				}
			},1000*10);
		}
		//明杠
		var isMGang =  testGang(curCard,self.scene.seats[self.curExecutePos]['showCards'],self.laiZi);
		if (isMGang) {
			self.askUser(self.scene.seats[self.curExecutePos]['user'],{v:[3]},function(err,pack,opcode) {
				//无操作
				if (!opcode||!opcode.ans) {
					return;
				}
				if (opcode.ans == 3) {
					isOp = true;
					chiPengGang(5,self.scene.seats[self.curExecutePos],curCard);
					//广播明杠
					self.broadcast({c:'updateShowCards',showCards:self.scene.seats[self.curExecutePos].showCards,pos:self.curExecutePos});
				}
			},1000*10);
		}
		self.scene.seats[self.curExecutePos]['curCard'] = curCard;
		if (!isOp) {
			self.scene.seats[self.curExecutePos]['handCards'].push(curCard);
		}
		console.log('chouCard ....' + self.curExecutePos);
		self.scene.seats[self.curExecutePos].user.send({c:'cardInfo',handCards:self.scene.seats[self.curExecutePos].handCards,curCard:curCard});

		self.q.unshift(self.playCard.bind(self),function(err) {

		});

		cb(null);
	}

	//出牌
	playCard(cb) {
		var self = this;
		self.askUser(this.scene.seats[this.curExecutePos]['user'],{v:[0]},function(err,pack,opcode) {
			if (err) {
				return cb();
			}
			//有操作立刻返回 无操作时间结束返回
			var cardInfo;
			var userPos = self.curExecutePos;
			//有操作
			if (opcode) {
				cardInfo = opcode.cardInfo;
			} else {
				//有刚抽到的牌
				if (self.scene.seats[self.curExecutePos].curCard > 0) {
					cardInfo = self.scene.seats[self.curExecutePos].curCard;
				} else {
					//没有刚抽到的牌
					cardInfo = self.scene.seats[self.curExecutePos]['handCards'][0];
				}
			}
			self.scene.seats[self.curExecutePos]['handCards'].splice(self.scene.seats[self.curExecutePos]['handCards'].indexOf(cardInfo),1);
			console.log('playCard ....' + self.curExecutePos);
			self.scene.seats[self.curExecutePos].user.send({c:'cardInfo',handCards:self.scene.seats[self.curExecutePos].handCards});

			self.scene.seats[self.curExecutePos]['throwCards'].push(cardInfo);
			self.broadcast({c:'updateThrowCards',throwCards:self.scene.seats[self.curExecutePos]['throwCards'],curCard:cardInfo,pos:self.curExecutePos});

			self.q.unshift({
				func:self.checkUsersCardCanHu.bind(self),
				args:{cardInfo:cardInfo,userPos:userPos}
			},function(err) {

			});
			return cb(null);
		},1000*10);
	}
}

module.exports=Mj1;