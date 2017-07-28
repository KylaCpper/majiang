'use strict';

var Loader = laya.net.Loader;
var Handler = laya.utils.Handler;

var wins=require('./windows.js');
var async=require('async'), merge=require('merge'), EventEmitter=require('events');
var me=require('./myself.js');//, ani=require('./embedani.js');
//var cardImg=require('./cardImg.js');
//var parseR=require('./rule.js').parseR;
//var WaitableEvent=require('./waitableEvent.js');

class Scene extends EventEmitter {
	constructor() {
		super();
		// this.on('newListener', function(event, listener) {
		// 	listener.call(this, this);
		// });
	}
	_update(obj) {
		if (obj.$) {
			if (obj.$.init) {
				for (var k in this) {
					if (typeof this[k]=='function' || k.indexOf('_')==0) continue;
					delete this[k];
				}
				merge.recursive(this, obj);
				this.emit('inited', this);
				for (var k in this) {
					if (typeof this[k]=='function' || k.indexOf('_')==0) continue;
					this.emit(''+k+'chgd', this);
				}
				return;
			} else if (obj.$.delete) {
				var delCmd=obj.$.delete;
				for (var i=0; i<delCmd.length; i++) {
					var p=delCmd[i].split('.');
					this.ensuredelete(p);
					this.emit(p[0]+'chgd', this);
				}
			}else if (obj.$.set) {
				var delCmd=obj.$.set;
				for (var i=0; i<delCmd.length; i++) {
					var p=delCmd[i].split('.');
					this.ensuredelete(p);
				}
			}
		}
		merge.recursive(this, obj);
		for (var ele in obj) {
			this.emit(''+ele+'chgd', this);
		}
	}
	ensuredelete(p) {
		var o=this;
		for (var i=0; i<p.length-1; i++) {
			if (o[p[i]]) o=o[p[i]];
			else return false;
		}
		if (o[p[p.length-1]]) delete o[p[p.length-1]]; 
	}
}

class wolf {
    constructor(opt) {
		this.opt=opt;
        var scene=this.scene=new Scene();
        scene.on('sheriffchgd', function() {
            var chat=this._view.getChild('n35').asList;
            var obj = fairygui.UIPackage.createObject('wolf', 'Component2');
            obj.getChild('n0').value='法官';
            obj.getChild('n3').getChild('n24').text='警长变了'+scene.sheriff;
            chat.addChild(obj);
        });
    }
    speak(speaker, str) {
        
    }
    active() {}
    deactive() {}
    //接受服务端信息
    msg(pack) {
        switch(pack.c) {
            case 'sendMsg':
                this.addMsg(pack.content,pack.nickname,'',pack.userid);
                break;
			case 'table.voice':
				this.addMsg(pack.token,pack.nickname,'voice',pack.userid);
				break;
            case 'roomInfo':
                this.initRoomInfo(pack.roomCode,pack.sceneInfo,pack.isStart,pack.roomName);
                break;
			case 'table.narrate':
				this.addMsg(pack.v,'系统消息:',pack.type);
				break;
			case 'laba':
				this.laba(pack.str);
				break;
			case 'musicOrSound':
				this.musicOrSound(pack.str,pack.v);
				break;
			case 'sysTipWin':
				this.sysTipWin(pack.v,pack.canSelect);
				break;
			case 'table.player_role':
				this.onXuanRenResult(pack.v,'系统消息:');
				break;
			case 'updateRoomInfo':
				this.updateRoomInfo(pack.sceneInfo);
				break;
			case 'initRoleCard':
				this.initRole(pack.rolecard,pack.userid,pack.sceneInfo);
				break;
			case 'gameStart':
				this.gameStart(pack.isStart);
				break;
			case 'canSelect':
				this.setCanSelect(pack.b);
				break;
			case 'whoCanSpeak':
				this.setWhoCanSpeak(pack.userid);
				break;
			case 'updateTime':
				this.initTime(pack.time);
				break;
			case 'checkInfo':
				this.updateCheckInfo();
				break;
			case 'over':
				this.gameover(pack.sceneInfo,pack.v);
				break;
			case 'leave':
				this.leaveRoom(pack.userid);
				break;
			case 'dayornight':
				this.bgChange(pack.v,pack.day);
				break;
			case 'wolfchoose':
				this.wolfchoose(pack.p,pack.userid);
				break;
			case 'sheriffPK':
				this.sheriffPK(pack.beVotes);
				break;
			case 'clearsheriffPK':
				this.clearsheriffPK();
				break;
			case 'readyBtnStatus':
				this.readyBtnUpdate(pack.isStart);
				break;
			case 'updateRole':
				this.updateRole(pack.sceneInfo,pack.prophetCheckInfo);
				break;
			case 'shangjing':
				this.updateShangJing(pack.v,pack.pos);
				break;
			case 'clearShangJing':
				this.clearShangJing(pack.v,pack.userid);
				break;
			case 'clearAllShangJing':
				this.clearAllShangJing(pack.v);
				break;
			case 'updateJingZhang':
				this.updateJingZhang(pack.userid,pack.v);
				break;
			case 'jingzhangGuiPiao':
				this.jingzhangGuiPiao(pack.p,pack.v);
				break;
			case 'updateEndSpeak':
				this.updateEndSpeak();
				break;
			case 'selfDeathTip':
				this.deathTip(pack.user);
				break;
        }
    }

	loadmusic() {

	}

	playBgm(ms,loops) {
		var self = this;
		Laya.SoundManager.playMusic(require('./res/snd/' + ms + '.mp3'),loops);
		Laya.SoundManager.setMusicVolume(0.5);
	}

	stopBgm() {
		Laya.SoundManager.stopMusic();
	}

	jingzhangGuiPiao(p,v) {
		this.itemList[p].getController('归票').selectedIndex = v;
	}

	updateJingZhang(userid,v) {
		var len = this.sceneInfo.seats.length;
		var i = 0;
		for (i;i<len;i++) {
			if (userid == this.sceneInfo.seats[i].userid) {
				this.itemList[this.sceneInfo.seats[i].pos].getController('警徽').selectedIndex = v;
			}
		}
	}

	clearShangJing(v,userid) {
		var len = this.sceneInfo.seats.length;
		var i = 0;
		for (i;i<len;i++) {
			if (userid == this.sceneInfo.seats[i].userid) {
				this.itemList[this.sceneInfo.seats[i].pos].getController('上警').selectedIndex = v;
			}
		}
	}

	clearAllShangJing(v) {
		var len = this.sceneInfo.seats.length;
		var i = 0;
		for (i;i<len;i++) {
			this.itemList[this.sceneInfo.seats[i].pos].getController('上警').selectedIndex = v;
		}
	}

	updateShangJing(v,pos) {
		if (this.itemList.length > 0) {
			var item = this.itemList[pos];
			item.getController('上警').selectedIndex = v;
		}
	}

	wolfchoose(p,userid) {
		var len = this.sceneInfo.seats.length;
		var item;

		for (var i = 0;i<len;i++) {
			item = this.itemList[this.sceneInfo.seats[i].pos];
			if (userid == null&&p==null) {
				item.getController('投票').selectedIndex = 1;
				continue;
			}
			if (userid == this.sceneInfo.seats[i].userid) {
				if (!item) {
					return;
				}
				item.getController('投票').selectedIndex = 0;
				item.getChild('n32').text = p + "";
			}
		}
	}

	sheriffPK(beVotes) {
		var len = this.sceneInfo.seats.length;
		var item;

		for (var i = 0;i<len;i++) {
			item = this.itemList[this.sceneInfo.seats[i].pos];
			for (var j=0;j<beVotes.length;j++) {
				if (beVotes[j] == this.sceneInfo.seats[i].userid) {
					item.getController('投票').selectedIndex = 0;
					item.getChild('n32').text = "PK";
				}
			}
		}
	}
	clearsheriffPK() {
		var len = this.sceneInfo.seats.length;
		var item;

		for (var i = 0;i<len;i++) {
			item = this.itemList[this.sceneInfo.seats[i].pos];
			item.getController('投票').selectedIndex = 1;
		}
	}

	bgChange(v,day) {
		if (v == 'day') {
			this._view.getChild('n52').getController('c1').selectedIndex = 0;
			if (day == null) {
				this._view.getChild('n38').getController('c1').selectedIndex = 0;
			} else {
				this._view.getChild('n38').getController('c1').selectedIndex = 1;
				this._view.getChild('n38').getChild('n40').text = '第'+ day +'个白天';
			}
		} else if (v == 'night') {
			this._view.getChild('n52').getController('c1').selectedIndex = 1;
			if (day == null) {
				this._view.getChild('n38').getController('c1').selectedIndex = 0;
			} else {
				this._view.getChild('n38').getController('c1').selectedIndex = 1;
				this._view.getChild('n38').getChild('n40').text = '第'+ day +'个夜晚';
			}
		} else {
			this._view.getChild('n38').getController('c1').selectedIndex = 0;
		}
	}

	leaveRoom(userid) {
		var len = this.sceneInfo.seats.length;
		var item;
		for (var i = 0;i<len;i++) {
			if (userid == this.sceneInfo.seats[i].userid) {
				item = this.itemList[this.sceneInfo.seats[i].pos];
				if (!item) {
					return;
				}
				item.getController('房主').selectedIndex = 1;//0房主
				item.getController('死亡').selectedIndex = 1;//0死亡1未死亡
				item.getController('语音').selectedIndex = 1;//0正在说话1没有说话
				item.getController('警徽').selectedIndex = 1;//0有警徽1没有警徽
				item.getController('游戏准备').selectedIndex = 1;//0已准备
				item.getController('刀人').selectedIndex = 1;//0刀人
				item.getController('座位').selectedIndex = 1;//座位状态 0上锁1空位2有人
				item.getController('身份牌').selectedIndex = 1;//0有身份牌1无身份牌
				item.getController('投票').selectedIndex = 1;//投票状态 0弃权1未弃权
				item.getController('上警').selectedIndex = 1;//0上警
				item.getController('离线').selectedIndex = 0;//离线
				item.getChild('n37').text = '';
				return;
			}
		}
	}

	laba(str) {
		if (str) {
			this._view.getChild('n37').text = str;
			return;
		}
		this._view.getChild('n37').text = '';
	}

	musicOrSound(str,v) {
		if (str == '投票阶段') {
			this.stopBgm();
			this.playBgm('wolf_Vote',1);
		} else if (str == '竞选警长') {
			this.stopBgm();
			this.playBgm('wolf_JingXuanJingZhang',1);
		} else if (str == '夜晚操作') {
			this.stopBgm();
			this.playBgm('wolf_InNight',1);
		} else if (str == '准备阶段') {
			this.stopBgm();
			this.playBgm('wolf_HallWait',0);
		} else if (str == '天亮了') {
			this.stopBgm();
			this.playBgm('wolf_Day',1);
		} else if (str == '游戏开始') {
			this.stopBgm();
			this.playBgm('wolf_gameStart',1);
		} else if (str == '游戏结束') {
			if (v == 0) {
				this.stopBgm();
				this.playBgm('wolf_wolfWin',1);
			} else if (v == 1) {
				this.stopBgm();
				this.playBgm('wolf_goodWin',1);
			}
		} else if (str == '查看身份') {
			this.stopBgm();
			this.playBgm('wolf_sendRoleCard',1);
		} else if (str == '没有警长') {
			this.stopBgm();
			this.playBgm('wolf_noSheriff',1);
		}else {
			this.stopBgm();
		}
	}

	gameover(sceneInfo,v) {
		var self = this;
		// var timeNum = 5;
		this._view.getChild('n29').removeChildren();
		this._view.getChild('n32').removeChildren();

		this.remainTime = 0;
		self.seatEventList = {};
		self.canSelect = false;
		self.started = false;
		this.updateTime();

		this.initInfo(sceneInfo);

		if (sceneInfo.homeowner == me.id) {
			this._view.getChild('n66').getController('c1').selectedIndex = 1;
		} else {
			this._view.getChild('n66').getChild('n65').getController('c1').selectedIndex = 0;
			this._view.getChild('n66').getController('c1').selectedIndex = 2;
		}

		var i = 0;
		var len = sceneInfo.seats.length;
		var isG = 0;
		var goodList = [];
		var wolfList = [];
		for (i;i<len;i++) {
			var item = fairygui.UIPackage.createObject('wolf','Component28').asCom;
			if (sceneInfo.seats[i].userid == me.id) {
				if (isGood(sceneInfo.seats[i].rolecard)) {
					isG = 1;
				} else {
					isG = 0;
				}
			}
			if (isGood(sceneInfo.seats[i].rolecard)) {
				item.getChild('n10').text = sceneInfo.seats[i].nickname;
				item.getChild('n8').url = this.getSelfRole(sceneInfo.seats[i].rolecard);
				item.getChild('n9').url = this.getSeatNumber(sceneInfo.seats[i].pos);
				item.getChild('n13').getChild('n5').url = sceneInfo.seats[i].face;
				goodList.push(item);
			} else {
				item.getChild('n10').text = sceneInfo.seats[i].nickname;
				item.getChild('n8').url = this.getSelfRole(sceneInfo.seats[i].rolecard);
				item.getChild('n9').url = this.getSeatNumber(sceneInfo.seats[i].pos);
				item.getChild('n13').getChild('n5').url = sceneInfo.seats[i].face;
				wolfList.push(item);
			}
		}

		var resView = fairygui.UIPackage.createObject('wolf','结算面板').asCom;
		var index = v==isG?0:1
		resView.getController('c1').selectedIndex = index;
		resView.getChild('n5').getController('阵营').selectedIndex = v==1?0:1;
		resView.getChild('n6').getController('阵营').selectedIndex = v==1?1:0;
		this._view.addChild(resView);
		resView.setXY((Laya.stage.desginWidth - resView.width)/2,(Laya.stage.desginHeight - resView.height)/2);
		// var t = setInterval(updateOver,1000);

		for (var gi=0;gi<goodList.length;gi++) {
			if (v == 1) {
				resView.getChild('n5').getChild('n11').addChild(goodList[gi]);
			} else {
				resView.getChild('n6').getChild('n11').addChild(goodList[gi]);
			}
		}
		for (var wi=0;wi<wolfList.length;wi++) {
			if (v == 1) {
				resView.getChild('n6').getChild('n11').addChild(wolfList[wi]);
			} else {
				resView.getChild('n5').getChild('n11').addChild(wolfList[wi]);
			}
		}

		function isGood(rolecard) {
			var enemy=['werewolf'];
			if (enemy.indexOf(rolecard)<0) {
				return true;
			} else {
				return false;
			}
		}

		// function updateOver() {
		// 	if (timeNum <= 1) {
		// 		clear();
		// 		return;
		// 	}
		// 	timeNum -= 1;
		// 	resView.getChild('n10').text = timeNum + '秒后自动关闭';
		// }

		// function clear () {
		// 	self._view.removeChild(resView);
		// 	resView = null;
		// 	clearInterval(t);
		// 	t = null;
		// }

		resView.getChild('n7').onClick(null,function() {
			self._view.removeChild(resView)
			resView = null;
		});
	}

	showSelfRole(rolecard) {
		var self = this;
		var timeNum = 5;
		var selfRoleView = fairygui.UIPackage.createObject('wolf','身份面板').asCom;
		// selfRoleView.getController('c1').selectedIndex = 1;
		selfRoleView.getChild('n10').url = self.getSelfRole(rolecard);
		selfRoleView.getChild('n14').text = self.getRoleDesc(rolecard);
		selfRoleView.getChild('n16').text = timeNum + 'S后自动关闭';
		this._view.addChild(selfRoleView);
		selfRoleView.setXY((Laya.stage.desginWidth - 292)/2,350);
		selfRoleView.getChild('n15').onClick(null,function() {
			self._view.removeChild(selfRoleView);
		});

		var t = setInterval(update,1000);
		function update() {
			if (timeNum <= 1) {
				clear();
				return;
			}
			timeNum -=1;
			selfRoleView.getChild('n16').text = timeNum +'S后自动关闭';
		}
		function clear() {
			self._view.removeChild(selfRoleView);
			clearInterval(t);
			t = null;
		}
	}

	checkInfo(userid) {
		var self = this;
		if (this.infoView) {
			this._view.removeChild(this.infoView);
			this.infoView = null;
		} else {
			this.infoView = new wins.checkInfoWin(function() {
				self._view.removeChild(self.infoView);
				self.infoView = null;
			});
			this._view.addChild(this.infoView);
			_socket.sendp({c:'checkInfo',userid:userid});
		}
	}

	updateCheckInfo() {

	}

	setWhoCanSpeak(userid) {
		var len = this.sceneInfo.seats.length;
		var i = 0;
		for (i;i<len;i++) {
			var pos = this.sceneInfo.seats[i].pos;
			this.itemList[pos].getController('语音').selectedIndex = (this.sceneInfo.seats[i].userid == userid?0:1);
		}
	}

	setCanSelect(b) {
		// this.canSelect = b;
		this.updateChooseTouXiang();
	}
 
	gameStart(isStart) {
		//清除聊天框
		this._view.getChild('n51').removeChildren();
		this.started = isStart;
		this.deathList = [];
		this._view.getChild('n66').getController('c1').selectedIndex = 0;
		var len = this.sceneInfo.seats.length;
		var i = 0;
		for (i;i<len;i++) {
			var pos = this.sceneInfo.seats[i].pos;
			this.itemList[pos].getController('游戏准备').selectedIndex = 1;
		}
		// this.seatEventList = {};
		// this.addEvent();
	}

	//显示时间
	initTime(time) {
		var self = this;
		self.remainTime = time/1000;
		self.remainTimeText.text = self.remainTime + 'S';
		if (self.cdTimer == null) {
			self.cdTimer=setInterval(self.updateTime.bind(this),1000);
		}
	}

	updateTime() {
		var self = this;
		if (self.remainTime <= 0) {
			this.stopBgm();
			self.updateEndSpeak();
			self.remainTimeText.text = '0S';
			this.clock.getController('c1').selectedIndex = 0;
			this.clock.getTransition('t0').stop();
			clearInterval(self.cdTimer);
			self.cdTimer = null;
			return;
		}
		if (self.remainTime==4) {
			this.stopBgm();
			this.playBgm('wolf_daojishi',1);
		}
		if (self.remainTime<=4) {
			this.clock.getController('c1').selectedIndex = 1;
			this.clock.getTransition('t0').play();
		}
		self.remainTime -= 1;
		self.remainTimeText.text = self.remainTime + 'S';
	}

	//显示role
	initRole(rolecard,userid,sceneInfo) {
		this.showSelfRole(rolecard);
		this.sceneInfo = sceneInfo;
		var len = this.sceneInfo.seats.length;
		var i = 0;
		for (i;i<len;i++) {
			var pos = this.sceneInfo.seats[i].pos;
			this.itemList[pos].getController('身份牌').selectedIndex = 0;
			if (this.sceneInfo.seats[i].userid == userid) {
				this.itemList[pos].getChild('n18').url = this.getRoleCard(rolecard);
			} else {
				this.itemList[pos].getChild('n18').url = this.getRoleCard(this.sceneInfo.seats[i].rolecard);
			}
		}
	}

	updateRole(sceneInfo,prophetCheckInfo) {
		this.sceneInfo = sceneInfo;
		var len = this.sceneInfo.seats.length;
		var i = 0;
		for (i;i<len;i++) {
			var pos = this.sceneInfo.seats[i].pos;
			if (prophetCheckInfo&&prophetCheckInfo.hasOwnProperty(pos)) {
				var isGood = prophetCheckInfo[pos]==0?'werewolf':'good';
				this.itemList[pos].getController('身份牌').selectedIndex = 0;
				this.itemList[pos].getChild('n18').url = this.getRoleCard(isGood);
			} else {
				this.itemList[pos].getController('身份牌').selectedIndex = 0;
				this.itemList[pos].getChild('n18').url = this.getRoleCard(this.sceneInfo.seats[i].rolecard);
			}
		}
	}

	getRoleCard(rolecard) {
		// var _map={prophet:'ui://w1cp0686x4wy79',}
		// return _map[rolecard];
		var str;
		switch(rolecard) {
			case 'prophet':
				str = 'ui://w1cp0686x4wy79';
			break;
			case 'werewolf':
				str = 'ui://w1cp0686x4wy4l';
			break;
			case 'witch':
				str = 'ui://w1cp0686x4wy4j';
			break;
			case 'hunter':
				str = 'ui://w1cp0686x4wy4k';
			break;
			case 'defender':
				str = 'ui://w1cp0686x4wy7a';
			break;
			case 'villager':
				str = 'ui://w1cp0686x4wy7b';
			break;
			case 'good':
				str = 'ui://w1cp0686gnvdmj';
			break;
			case 'idiot':
				str = 'ui://w1cp0686x4wy4n';
				break;
			default:
				str = 'ui://w1cp0686x4wy4m';
			break;
		}
		return str;
	}

	getSelfRole(str) {
		var map = {
			prophet:'ui://w1cp0686x4wy2y',
			werewolf:'ui://w1cp0686x4wy33',
			witch:'ui://w1cp0686x4wy31',
			hunter:'ui://w1cp0686x4wy32',
			defender:'ui://w1cp0686x4wy2z',
			villager:'ui://w1cp0686x4wy30',
			idiot:'ui://w1cp0686x4wy2x'
		};
		return map[str];
	}

	getRoleDesc(str) {
		var map = {
			prophet:'预言家,夜晚可以查验一个玩家的身份',
			werewolf:'狼人,夜晚可以杀死任意一个玩家',
			witch:'女巫,拥有两瓶药：解药可救人，毒药可杀人',
			hunter:'猎人,死前可开枪杀死任意一名玩家',
			defender:'守卫,夜晚可以守护一个玩家',
			villager:'平民,无特殊技能',
			idiot:'白痴,无法被投票处决'
		};
		return map[str];
	}

	getSeatNumber(i) {
		var map = {
			0:'ui://w1cp0686x4wy5y',
			1:'ui://w1cp0686x4wy5x',
			2:'ui://w1cp0686x4wy5w',
			3:'ui://w1cp0686x4wy5v',
			4:'ui://w1cp0686x4wy5u',
			5:'ui://w1cp0686x4wy5t',
			6:'ui://w1cp0686x4wy5s',
			7:'ui://w1cp0686x4wy5r',
			8:'ui://w1cp0686x4wy5q',
			9:'ui://w1cp0686x4wy5p',
			10:'ui://w1cp0686x4wy5o',
			11:'ui://w1cp0686x4wy5n',
			12:'ui://w1cp0686x4wy5m',
			13:'ui://w1cp0686x4wy5l',
			14:'ui://w1cp0686x4wy5k',
			15:'ui://w1cp0686x4wy5j'
		}
		return map[i];
	}

	getDes(num,type,gameType){
		var s = num + '' + type;
		var _map = {
			61:'2狼人,2平民,1预言家,1猎人',
			91:'3狼人,3平民,1预言家,1女巫,1白痴',
			92:'3狼人,3平民,1预言家,1女巫,1猎人',
			121:'4狼人,4平民,1预言家,1女巫,1猎人,1守卫'
		}
		var _gameType = {
			0:'[屠神局]',
			1:'[屠边局]',
			2:'[屠城局]'
		}

		return _gameType[gameType] + '   ' + _map[s]
	}

	//预言家选人结果
	onXuanRenResult(pack,str) {
		var self = this;
		self.sysTipWin({str:'prophetRes',v:pack});
		self.updateChooseTouXiang();
	}

	//发送选人 userid:选择的警长id
	xuanRen(pos,userid,selfid) {
		_socket.sendp({c:'table.ans',selectInfo:pos+'',userid:userid,selfid:selfid});
	}

	endSpeak() {
		this._view.getChild('n66').getController('c1').selectedIndex = 3;
		this._view.getChild('n66').getChild('n66').onClick(this._view,function() {
			this.getChild('n66').getController('c1').selectedIndex = 0;
			_socket.sendp({c:'table.speak'});
		});
	}

	updateEndSpeak() {
		this._view.getChild('n66').getController('c1').selectedIndex = 0;
	}

    initRoomInfo(code,sceneInfo,isStart,roomName) {
		this.code = code;
        var roomCode = this._view.getChild('n8');
        roomCode.text = '房间号：' + code;
		if (roomName) {
			var Name = this._view.getChild('n7');
			Name.text = roomName +  '的房间';
		}
		
		this.initInfo(sceneInfo,isStart);
    }

	initInfo(sceneInfo,isStart) {
		var length = sceneInfo.peopleNumber;
		var type = sceneInfo.renshuType;
		var gameType = sceneInfo.gameType;
		this._view.getChild('n50').getChild('n50').text = this.getDes(length,type,gameType);
		var i = 0;
		this.itemList = [];
		for (i;i<16;i++) {
			var item;
			if (i < 8) {
				var item = fairygui.UIPackage.createObject("wolf", "人物头像左");
				this._view.getChild('n29').addChild(item);
			} else {
				var item = fairygui.UIPackage.createObject("wolf", "人物头像右");
				this._view.getChild('n32').addChild(item);
			}
			item.getController('房主').selectedIndex = 1;//0房主
			item.getController('死亡').selectedIndex = 1;//0死亡1未死亡
			item.getController('语音').selectedIndex = 1;//0正在说话1没有说话
			item.getController('警徽').selectedIndex = 1;//0有警徽1没有警徽
			item.getController('游戏准备').selectedIndex = 1;//0已准备
			item.getController('刀人').selectedIndex = 1;//0刀人
			item.getController('座位').selectedIndex = 1;//座位状态 0上锁1空位2有人
			item.getController('身份牌').selectedIndex = 1;//0有身份牌1无身份牌
			item.getController('投票').selectedIndex = 1;//投票状态 0弃权1未弃权
			item.getController('上警').selectedIndex = 1;//0上警
			item.getChild('n13').url = this.getSeatNumber(i);
			item.getChild('n37').text = '';
			if (i >= length) {
				item.getController('座位').selectedIndex = 0;//座位状态 0上锁1空位2有人
			}

			this.itemList.push(item);
		}
		this.updateRoomInfo(sceneInfo);
		this.readyBtnUpdate(isStart);

		this._view.getChild('n52').getController('c1').selectedIndex = 2; //背景
	}

	readyBtnUpdate(isStart) {
		//准备 邀请 开始
		if (isStart) {
			this._view.getChild('n66').getController('c1').selectedIndex = 0;
			return;
		}
		if (this.sceneInfo.homeowner == me.id) {
			this._view.getChild('n66').getController('c1').selectedIndex = 1;
			return;
		}
		for (var r=0;r<this.sceneInfo.seats.length;r++) {
			if (this.sceneInfo.seats[r].userid == me.id) {
				this._view.getChild('n66').getController('c1').selectedIndex = 2;
				this._view.getChild('n66').getChild('n65').getController('c1').selectedIndex = (this.sceneInfo.seats[r].ready==false?0:1);
				return;
			}
		} 
	}

	addEvent() {
		var self = this;
		var len = this.sceneInfo.seats.length;
		var i = 0;
		for (i;i<len;i++) {
			var pos = this.sceneInfo.seats[i].pos;
			if (this.seatEventList.hasOwnProperty(pos)) {
				continue;
			} else {
				this.seatEventList[pos] = 1;
				self.itemList[pos].onClick(this.sceneInfo.seats[i],function() {
				//游戏开始
				if (self.canSelect) {
					self.updateChooseTouXiang(this.pos)
					self.xuanRen(this.pos,this.userid,me.id);
				} else {
					if (self.started) {
						return;
					}
					if (this.userid == me.id) {
						return;
					}
					//查看信息面板
					if (self.checkOtherInfo == null) {
						if (me.id == self.sceneInfo.homeowner) {
							self.checkOtherInfo = new wins.CheckOtherInfoWin(this,0,function(type,userid) {
								self._view.removeChild(self.checkOtherInfo);
								self.checkOtherInfo = null;
								if (type == 1) {
									// //查看信息
									self.checkInfo(userid);
								} else if (type == 2) {
									//请出房间
									_socket.sendp({c:'kickOutRoom',userid:userid});
								}	
							});
						} else {
							self.checkOtherInfo = new wins.CheckOtherInfoWin(this,1,function(type,userid) {
								self._view.removeChild(self.checkOtherInfo);
								self.checkOtherInfo = null;
								if (type == 1) {
									// //查看信息
									self.checkInfo(userid);
								}
							});
						}
						fairygui.GRoot.inst.showPopup(self.checkOtherInfo);
						if (this.pos >= 8) {
							self.checkOtherInfo.setXY(Laya.stage.desginWidth/2 + 30,self.checkOtherInfo.y);
						}
					}
				}
				});
			}
		}
	}

	updateRoomInfo(sceneInfo) {
		var self = this;
		this.sceneInfo = sceneInfo;
		var len = sceneInfo.seats.length;
		var i = 0;
		for (i;i<len;i++) {
			var pos = sceneInfo.seats[i].pos;
			if (sceneInfo.seats[i]&&sceneInfo.seats[i].hasOwnProperty('nickname')) {
				self.itemList[pos].getChild('n37').text = sceneInfo.seats[i].nickname;
			}
			self.itemList[pos].getController('房主').selectedIndex = sceneInfo.homeowner == sceneInfo.seats[i].userid?0:1;
			self.itemList[pos].getController('座位').selectedIndex = 2;
			self.itemList[pos].getController('游戏准备').selectedIndex = sceneInfo.seats[i].ready == false?1:0;
			self.itemList[pos].getController('离线').selectedIndex = sceneInfo.seats[i].offline == false?0:1;
			if (sceneInfo.homeowner == sceneInfo.seats[i].userid) {
				self.itemList[pos].getController('游戏准备').selectedIndex = 1;
			}
			self.itemList[pos].getController('死亡').selectedIndex = sceneInfo.seats[i].killed == false?1:0;
			if (sceneInfo.seats[i].killed == true&&sceneInfo.seats[i].userid==me.id&&sceneInfo.seats[i].rolecard!='hunter'&&(self.deathList.indexOf(sceneInfo.seats[i].userid) == -1)) {
				self.deathList.push(sceneInfo.seats[i].userid);
				// self.deathTip(sceneInfo.seats[i]);
			}
			self.itemList[pos].getController('警徽').selectedIndex = sceneInfo.sheriff == sceneInfo.seats[i].userid?0:1;
			
			self.itemList[pos].getChild('n14').getChild('n14').url = sceneInfo.seats[i].face;
		}
		this.addEvent();
	}

	updateChooseTouXiang(pos) {
		if (this.chooseTouXiang) {
			this.chooseTouXiang.getController('选中').selectedIndex = 0;
		}
		if (pos >= 0 && this.canSelect) {
		// if (pos >= 0) {
			this.chooseTouXiang = this.itemList[pos];
			this.itemList[pos].getController('选中').selectedIndex = 1;
		}
	}

	//你已死亡面板
	deathTip(user) {
		var self = this;
		var deathView = fairygui.UIPackage.createObject('wolf','死亡面板').asCom;
		deathView.getChild('n6').url = self.getSeatNumber(user.pos);
		deathView.getChild('n7').text = user.nickname;
		deathView.getChild('n4').getChild('n2').url = user.face;
		self._view.addChild(deathView);
		deathView.setXY((Laya.stage.desginWidth - 227)/2,350);
		deathView.onClick(null,function(){
				self._view.removeChild(deathView);
		});

		var t = setTimeout(clear,5*1000);
		function clear() {
			self._view.removeChild(deathView);
			clearTimeout(t);
		}
	}

	sysTipWin(str,canSelect) {
		var self = this;
		self.canSelect = canSelect;
		var yBtn;
		var nBtn;
		var w  = (Laya.stage.desginWidth - 380)/2;//晃动框宽
		var h  = 350;//晃动框高
		if (str.str == 'clear')  {
			clear();
		}
		//竞选警长
		if (str.str == 'campaignsheriff') {
			self.tipView = fairygui.UIPackage.createObject('wolf','竞选面板').asCom;
			self._view.addChild(self.tipView);
			self.tipView.setXY(w,h);
			self.tipView.getChild('n20').onClick(null,function() {
				_socket.sendp({c:'table.ans',v:true,userid:me.id,isGiveUp:0});
				self._view.removeChild(self.tipView);
				//警长退选
				self.tipView = fairygui.UIPackage.createObject('wolf','退水').asCom;
				self._view.addChild(self.tipView);
				self.tipView.setXY(w,h);
				self.tipView.getChild('n2').onClick(null,function() {
					self._view.removeChild(self.tipView);
					self.tipView = null;
					_socket.sendp({c:'table.ans',v:true,userid:me.id,isGiveUp:1});
				});
			});
			self.tipView.getChild('n21').onClick(null,function() {
				_socket.sendp({c:'table.ans',v:false});
				self._view.removeChild(self.tipView);
				self.tipView = null;
			});
		}
		//投票
		if (str.str == 'vote') {
			self.tipView = fairygui.UIPackage.createObject('wolf','投票').asCom;
			self._view.addChild(self.tipView);
			self.tipView.setXY(w,h);
		}

		//狼人杀人
		if (str.str == 'wolfkill') {
			self.tipView = fairygui.UIPackage.createObject('wolf','刀人').asCom;
			self._view.addChild(self.tipView);
			self.tipView.setXY(w,h);
		}

		//投票选警长
		if (str.str == 'choosesheriff') {
			self.tipView = fairygui.UIPackage.createObject('wolf','投警').asCom;
			self._view.addChild(self.tipView);
			self.tipView.setXY(w,h);
		}

		//预言家查人
		if (str.str == 'prophetGo') {
			self.tipView = fairygui.UIPackage.createObject('wolf','查验').asCom;
			self._view.addChild(self.tipView);
			self.tipView.setXY(w,h);
		}

		//守卫选人
		if (str.str == 'defenderGo') {
			self.tipView = fairygui.UIPackage.createObject('wolf','守护').asCom;
			self._view.addChild(self.tipView);
			self.tipView.setXY(w,h);
		}

		//猎人
		if (str.str == 'hunterDead') {
			// view.getController('c1').selectedIndex = 12;
			self.tipView = fairygui.UIPackage.createObject('wolf','猎杀').asCom;
			self._view.addChild(self.tipView);
			self.tipView.setXY(w,h);
			yBtn = self.tipView.getChild('n28').onClick(null,function() {
				self._view.removeChild(self.tipView);
				self.tipView = null;
				_socket.sendp({c:'table.ans',hunterKillInfo:1});
				// hunterkill();
			});
			nBtn = self.tipView.getChild('n29').onClick(null,function() {
				self._view.removeChild(self.tipView);
				self.tipView = null;
				_socket.sendp({c:'table.ans',hunterKillInfo:0});
			});
			self.tipView.onClick(null,function(){
				self._view.removeChild(self.tipView);
				self.tipView = null;
			});
		}

		//猎人开枪选人
		if (str.str == 'hunterChoose') {
			self.tipView = fairygui.UIPackage.createObject('wolf','猎杀').asCom;
			self.tipView.getController('c1').selectedIndex = 1;
			self._view.addChild(self.tipView);
			self.tipView.setXY(w,h);
		}

		//女巫用药
		if (str.str == 'witchGoHeal') {
			self.tipView = fairygui.UIPackage.createObject('wolf','救人毒人').asCom;
			//平安夜
			if (str.type==-1) {
				self.tipView.getChild('n32').getController('c1').selectedIndex = 1;
			}
			//首夜自己死亡
			else if (str.type==1) {
				self.tipView.getController('c1').selectedIndex = 3;
				yBtn = self.tipView.getChild('n28').onClick(null,function() {
					self._view.removeChild(self.tipView);
					self.tipView = null;
					var userid = self.getUserId(str.info-1);
					self.xuanRen(str.info,userid,me.id);
				});
				nBtn = self.tipView.getChild('n29').onClick(null,function() {
					self._view.removeChild(self.tipView);
					self.tipView = null;
					self.xuanRen(null,null,me.id);
				});
			}
			//非首夜自己死亡
			else if (str.type==2) {
				self.tipView.getController('c1').selectedIndex = 4;
				// yBtn = self.tipView.getChild('n28').onClick(null,function() {
				// 	self._view.removeChild(self.tipView);
				// 	self.tipView = null;
				// });
				// nBtn = self.tipView.getChild('n29').onClick(null,function() {
				// 	self._view.removeChild(self.tipView);
				// 	self.xuanRen(null,null,me.id);
				// });
			}
			//其他人死亡
			else {
				self.tipView.getController('c1').selectedIndex = 0;
				self.tipView.getChild('n32').getChild('n40').text = str.info + '';
				yBtn = self.tipView.getChild('n32').getChild('n33').onClick(null,function() {
					self._view.removeChild(self.tipView);
					self.tipView = null;
					var userid = self.getUserId(str.info-1);
					self.xuanRen(str.info,userid,me.id);
				});
				nBtn = self.tipView.getChild('n32').getChild('n34').onClick(null,function() {
					self._view.removeChild(self.tipView);
					self.tipView = null;
					self.xuanRen(null,null,me.id);
				});
			}

			self._view.addChild(self.tipView);
			self.tipView.setXY(w,h);
		}
		//女巫用毒
		if (str.str == 'witchGoPoison') {
			self.tipView = fairygui.UIPackage.createObject('wolf','救人毒人').asCom;
			self.tipView.getController('c1').selectedIndex = 1;
			self._view.addChild(self.tipView);
			self.tipView.setXY(w,h);
			yBtn = self.tipView.getChild('n28').onClick(null,function() {
				self.tipView.getController('c1').selectedIndex = 2;
				self.tipView.onClick(null,function(){
					self._view.removeChild(self.tipView);
					self.tipView = null;
				});
			});
			nBtn = self.tipView.getChild('n29').onClick(null,function() {
				self._view.removeChild(self.tipView);
				self.tipView = null;
				self.xuanRen(null,null,me.id);
			});
		}
		//公布昨晚死亡情况
		if (str.str == 'deathInfo') {
			self.tipView = fairygui.UIPackage.createObject('wolf','公布死亡').asCom;
			var len = str.list.length;
			if (len == 0) {
				self.tipView.getController('c1').selectedIndex =1;
			} else {
				self.tipView.getController('c1').selectedIndex =0;
			}
			var y = 160;
			for (var i=0;i<len;i++) {
					var item = fairygui.UIPackage.createObject('wolf','Component65').asCom;
					item.getChild('n30').text ='【' + str.list[i] +'】';
					self.tipView.addChild(item);
					item.setXY(80,y + 70*i);
			}
			self._view.addChild(self.tipView);
			self.tipView.setXY(w,h);
		}
		//预言家查询结果
		if (str.str == 'prophetRes') {
			self.tipView = fairygui.UIPackage.createObject('wolf','身份验证结果').asCom;
			if (str.v) {
				self.tipView.getController('c1').selectedIndex = 0;
			} else {
				self.tipView.getController('c1').selectedIndex = 1;
			}
			self._view.addChild(self.tipView);
			self.tipView.setXY(w,h);
			self.tipView.onClick(null,function(){
				self._view.removeChild(self.tipView);
				self.tipView = null;
			});
		}
		//广播投票结果
		if (str.str == 'voteRes') {
			self.addMsg('投票结果','系统消息:');
			var timeNum = 5;
			if (str.hasOwnProperty('time')) {
				timeNum = parseInt(str.time);
			}
			self.tipView = fairygui.UIPackage.createObject('wolf','投票结果面板').asCom;
			var voteList = self.tipView.getChild('n31');
			self.tipView.getChild('n32').text = timeNum + '秒后自动关闭';
			for (var key in str.voteRes) {
				var res = fairygui.UIPackage.createObject('wolf','voteItem').asCom;
				var beVoteItem = fairygui.UIPackage.createObject('wolf','Component54').asCom;
				var arrow  = fairygui.UIPackage.createObject('wolf','投票显示箭头').asCom;

				var listRes = fairygui.UIPackage.createObject('wolf','voteItem').asCom;
				var listBeVoteItem = fairygui.UIPackage.createObject('wolf','Component54').asCom;
				var listArrow = fairygui.UIPackage.createObject('wolf','投票显示箭头').asCom;

				if (key == 0&&str.voteRes[0].length > 0) {
					beVoteItem.getController('c1').selectedIndex = 1;
					listBeVoteItem.getController('c1').selectedIndex = 1;
				} else {
					listBeVoteItem.getChild('n35').url = this.getSeatNumber(key-1);
					listBeVoteItem.getChild('n34').getChild('n32').url = this.getFaceByPos(key-1);

					beVoteItem.getChild('n35').url = this.getSeatNumber(key-1);
					beVoteItem.getChild('n34').getChild('n32').url = this.getFaceByPos(key-1);
				}
				res.addChild(beVoteItem);
				res.addChild(arrow);

				listRes.addChild(listBeVoteItem);
				listRes.addChild(listArrow);

				arrow.setXY(53,0);
				listArrow.setXY(53,0);

				voteList.addChild(res);
				self._view.getChild('n51').addChild(listRes);
				listRes.setXY(30,listRes.y);

				var h = 0;
				var votelen = str.voteRes[key].length;
				for (var votei=0;votei<votelen;votei++) {
					if ((votei%3) == 0&&votei>=3) {

						var res2 = fairygui.UIPackage.createObject('wolf','voteItem').asCom;
						var voteItem = fairygui.UIPackage.createObject('wolf','Component54').asCom;
						voteItem.getChild('n35').url = this.getSeatNumber(str.voteRes[key][votei] -1);
						voteItem.getChild('n34').getChild('n32').url = this.getFaceByPos(str.voteRes[key][votei] -1);
						res2.addChild(voteItem);
						voteItem.setXY((votei%3)*voteItem.initWidth + 85,Math.floor(votei/3)*(voteItem.initHeight-48));
						voteList.addChild(res2);

						var listRes2 = fairygui.UIPackage.createObject('wolf','voteItem').asCom;
						var listBeVoteItem2 = fairygui.UIPackage.createObject('wolf','Component54').asCom;
						listBeVoteItem2.getChild('n35').url = this.getSeatNumber(str.voteRes[key][votei] -1);
						listBeVoteItem2.getChild('n34').getChild('n32').url = this.getFaceByPos(str.voteRes[key][votei] -1);
						listRes2.addChild(listBeVoteItem2);
						listBeVoteItem2.setXY((votei%3)*listBeVoteItem2.initWidth + 85,Math.floor(votei/3)*(listBeVoteItem2.initHeight-48));
						self._view.getChild('n51').addChild(listRes2);
						listRes2.setXY(30,listRes2.y);

					} else {
						var voteItem = fairygui.UIPackage.createObject('wolf','Component54').asCom;
						voteItem.getChild('n35').url = this.getSeatNumber(str.voteRes[key][votei] -1);
						voteItem.getChild('n34').getChild('n32').url = this.getFaceByPos(str.voteRes[key][votei] -1);
						res.addChild(voteItem);
						voteItem.setXY((votei%3)*voteItem.initWidth + 85,Math.floor(votei/3)*voteItem.initHeight);

						var listBeVoteItem2 = fairygui.UIPackage.createObject('wolf','Component54').asCom;
						listBeVoteItem2.getChild('n35').url = this.getSeatNumber(str.voteRes[key][votei] -1);
						listBeVoteItem2.getChild('n34').getChild('n32').url = this.getFaceByPos(str.voteRes[key][votei] -1);
						listRes.addChild(listBeVoteItem2);
						listBeVoteItem2.setXY((votei%3)*listBeVoteItem2.initWidth + 85,Math.floor(votei/3)*listBeVoteItem2.initHeight);
					}
					h++;
				}
			}

			self._view.addChild(self.tipView);
			self.tipView.setXY((Laya.stage.desginWidth - 304)/2,350);
			var resT = setInterval(updateRes,1000);
			function updateRes() {
				if (timeNum <= 1) {
					c();
					return;
				}
				timeNum -= 1;
				if (self.tipView&&self.tipView.getChild('n32')) {
					self.tipView.getChild('n32').text = timeNum + '秒后自动关闭';
				}
			}
			function c() {
				clearInterval(resT);
				resT = null;
			}
		}
		//公布新警长
		if (str.str == 'newsheriff') {
			self.tipView = fairygui.UIPackage.createObject('wolf','新警长').asCom;
			self.tipView.getController('c1').selectedIndex = 0;
			self.tipView.getChild('n4').text = '【'+ str.p+'】';

			self._view.addChild(self.tipView);
			self.tipView.setXY(w,h);
		}
		//警长死了是否转移警徽
		if (str.str == 'sheriffDead') {
			self.tipView = fairygui.UIPackage.createObject('wolf','移交警徽').asCom;

			yBtn = self.tipView.getChild('n2').onClick(null,function() {
				self._view.removeChild(self.tipView);
				self.tipView = fairygui.UIPackage.createObject('wolf','移交警徽2').asCom;
				self._view.addChild(self.tipView);
				self.tipView.setXY(w,h);
			});
			nBtn = self.tipView.getChild('n3').onClick(null,function() {
				self._view.removeChild(self.tipView);
				self.tipView = null;
			});

			self._view.addChild(self.tipView);
			self.tipView.setXY(w,h);
		}
		//警徽丢失
		if (str.str == 'misssheriff') {
			self.tipView = fairygui.UIPackage.createObject('wolf','新警长').asCom;
			self.tipView.getController('c1').selectedIndex = 1;
			self._view.addChild(self.tipView);
			self.tipView.setXY(w,h);
		}
		if (str.str == 'sheriffSelectFirst') {
			if (str.type == 0) {
				//静坐经由
				self.tipView = fairygui.UIPackage.createObject('wolf','发言顺序').asCom;
				yBtn = self.tipView.getChild('n2').onClick(null,function() {
					self._view.removeChild(self.tipView);
					self.tipView = null;
					_socket.sendp({c:'table.ans',v:0});
				});
				nBtn = self.tipView.getChild('n3').onClick(null,function() {
					self._view.removeChild(self.tipView);
					self.tipView = null;
					_socket.sendp({c:'table.ans',v:1});
				});
			} else if (str.type == 1) {
				//死左死右
				self.tipView = fairygui.UIPackage.createObject('wolf','发言顺序2').asCom;
				yBtn = self.tipView.getChild('n3').onClick(null,function() {
					self._view.removeChild(self.tipView);
					self.tipView = null;
					_socket.sendp({c:'table.ans',v:0});
				});
				nBtn = self.tipView.getChild('n2').onClick(null,function() {
					self._view.removeChild(self.tipView);
					self.tipView = null;
					_socket.sendp({c:'table.ans',v:1});
				});
			}
			
			self._view.addChild(self.tipView);
			self.tipView.setXY(w,h);
		}
		//警长归票
		if (str.str == 'votefirst') {
			self.tipView = fairygui.UIPackage.createObject('wolf','警长归票').asCom;
			self._view.addChild(self.tipView);
			self.tipView.setXY(w,h);
		}
		function clear () {
			self.updateChooseTouXiang();
			if (self.tipView ==null) {
				return;
			}
			self._view.removeChild(self.tipView);
			yBtn = null;
		    nBtn = null;
			self.tipView = null;
		}
	}

	//根据位置得到userid
	getUserId(pos) {
		var len = this.sceneInfo.seats.length;
		for (var i=0;i<len;i++) {
			if (pos == this.sceneInfo.seats[i].pos) {
				return this.sceneInfo.seats[i].userid;
			}
		}
		return null;
	}

    addMsg(content,nickname,type,userid) {
		var speakItem;
		if (nickname == '系统消息:') {
			if (type == 'speak') {
				this.endSpeak();
			}
			//系统说话
			speakItem = fairygui.UIPackage.createObject("wolf", "法官说话");
        	speakItem.getChild('n7').text = content;
			if (speakItem.getChild('n7').textWidth > 240) {
				speakItem.getChild('n7').width = 240;
				speakItem.getChild('n7').autoSize = 2;
			}
			speakItem.getChild('n7').text = content;
			speakItem.getChild('n5').y = speakItem.getChild('n7').height + 23;
			speakItem.getChild('n1').y =  speakItem.getChild('n7').height - 20;
		} else {
			if (type == 'voice') {
				//玩家说话(语音)
				// speakItem.getController('玩家说话方式').selectedIndex = 0;
				speakItem = fairygui.UIPackage.createObject("wolf", "玩家说话语音").asCom;
				speakItem.getChild('n4').text = nickname;
				this._view.getChild('n51').addChild(speakItem);
				var index = this._view.getChild('n51').numItems-1;
				this._view.getChild('n51').scrollToView(index);
				speakItem.getChild('n1').getChild('n0').url = this.getFace(userid)
				window.playRecord(content);
				speakItem.getChild('n6').onClick(null,function() {
					window.playRecord(content);
				});
				return;
			}
			speakItem = fairygui.UIPackage.createObject("wolf", "玩家说话").asCom;
			// speakItem.getController('玩家说话方式').selectedIndex = 1;
			speakItem.getChild('n7').text = content;
			if (speakItem.getChild('n7').textWidth > 240) {
				speakItem.getChild('n7').width = 240;
				speakItem.getChild('n7').autoSize = 2;
			}
			speakItem.getChild('n7').text = content;
			speakItem.getChild('n4').text = nickname;
			speakItem.getChild('n4').y = speakItem.getChild('n7').height + 23;
			speakItem.getChild('n1').getChild('n0').url = this.getFace(userid);
			speakItem.getChild('n1').y =  speakItem.getChild('n7').height - 20;
		}
        this._view.getChild('n51').addChild(speakItem);
		var index = this._view.getChild('n51').numItems-1;
		this._view.getChild('n51').scrollToView(index);
    }

	getFace(userid) {
		var i = 0;
		var len = this.sceneInfo.seats.length;
		for (i;i<len;i++) {
			if (userid == this.sceneInfo.seats[i].userid) {
				return this.sceneInfo.seats[i].face;
			}
		}
	}
	getFaceByPos(pos) {
		var i = 0;
		var len = this.sceneInfo.seats.length;
		for (i;i<len;i++) {
			if (pos == this.sceneInfo.seats[i].pos) {

				return this.sceneInfo.seats[i].face;
			}
		}
	}

    static create(opt, cb) {
		if (typeof opt==='function') {cb=opt; opt={}}
        Laya.loader.load([
            //{ url: require("./res/hall@h29yzf.mp3"), type: Loader.SOUND },
            { url: require("./res/wolf@atlas_x4wy6l.jpg"), type: Loader.IMAGE },
			{ url: require("./res/wolf@atlas_x4wy6m.jpg"), type: Loader.IMAGE },
			{ url: require("./res/wolf@atlas0.png"), type: Loader.IMAGE }
        ], Handler.create(null, function(err) {
			var room=new wolf(opt);
			fairygui.UIPackage.addPackage('wolf');
			var _view =room._view= fairygui.UIPackage.createObject("wolf", "游戏界面").asCom;
			room.itemList = [];
			room.sceneInfo;
			room.started = false;
			room.canSelect = false;
			room.chooseTouXiang = null;
			room.code;
			room.deathList = [];
			room.tipView;
			room.backPopup = null;
			room.infoView;
			room.seatEventList = {};
			room.checkOtherInfo = null;
			// for debug
			// window.log=function(msg) {
			// 	room.addMsg(msg,'系统消息:');
			// }
			var container = _view.getChild('n46');
			var txt = container.getChild('n51');
            container.getChild('n52').onClick(room, function() {
                _socket.sendp({c:'sendMsg',content:txt.text});
                txt.text = '';
				document.getElementById('layaCanvas').scrollIntoView();
            });
			// container.getChild('n51').displayObject.on('focus',null,function() {
			// 	console.log('blur');
			// 	var h = setInterval(function() {
			// 		document.getElementById('layaCanvas').scrollIntoView();
			// 	},100);
			// 	container.getChild('n51').displayObject.on('blur',null,function() {
			// 		clearInterval(h);
			// 	})
			// });
			var originalHeight=document.body.clientHeight;
			//安卓
			window.onresize = function() {
				if (document.body.clientHeight<originalHeight) return;
				document.getElementById('layaCanvas').scrollIntoView();
			}
			//苹果
			var ua = navigator.userAgent.toLowerCase();
			if (ua.match(/iPhone/i)=="iphone") {
				container.getChild('n51').displayObject.on('blur',null,function() {
					document.getElementById('layaCanvas').scrollIntoView();
				});
				container.getChild('n51').displayObject.on('enter',null,function() {
					document.getElementById('layaCanvas').scrollIntoView();
				});
			}
			container.getChild('n50').onClick(null,function() {
				container.getController('聊天切换').selectedIndex = 1;
			});
			container.getChild('n49').onClick(null,function() {
				container.getController('聊天切换').selectedIndex = 0;
			});
			var _rec=null, _recCanceled=false;
			var time = 0;
			container.getChild('n46').on('mousedown',null,function() {
				if ((new Date().getTime() - time)<500&&time) {
					return;
				}
				if (window.startRecord) {
					_recCanceled=false;
					setTimeout(function() {
						if (!_recCanceled) {
							window.startRecord(function(s) {
								if (!s) {
									Laya.SoundManager.musicVolume=0.2;
									if (!_rec) {
										_rec=wins.RecWin.inst;
										_rec.show();
									}
								}
							});
						}
					}, 200);
				}
			});
			container.getChild('n46').on('mouseup',null,function() {
				time = new Date().getTime();
				if (_rec) { 
					setTimeout(function() {
						window.stopRecord && window.stopRecord(function(err, token){
							Laya.SoundManager.musicVolume=1;
							if (err) {
								if (_rec) {_rec.hide();_rec=null;}
								return console.log(err);
							}
							_socket.sendp({c:'table.voice', token:token});
						});
					}, 300);
					_rec.hide();_rec=null;
				} else cancelRec();		
			});
			function cancelRec() {
				// time = new Date().getTime();
				_recCanceled=true;
				console.log('rec canceled');
				window.stopRecord && window.stopRecord(function() {
					if (_rec) {_rec.hide();_rec=null;}
				});
				if (_rec) {_rec.hide();_rec=null;}
				Laya.SoundManager.musicVolume=1;
			}
			container.getChild('n46').on('mouseout', null, cancelRec);
            _socket.sendp({c:'roomInfo'});

			//开始按钮
			var startBtn = _view.getChild('n66').getChild('n62').onClick(null,function() {
				_socket.sendp({c:'gameStart'});
			});
			//准备按钮
			_view.getChild('n66').getChild('n65').getController('c1').selectedIndex = 0;
			var readyBtn = _view.getChild('n66').getChild('n65').onClick(null,function() {
				_socket.sendp({c:'gameReady'});
			});
			//邀请按钮
			var inviteBtn = _view.getChild('n66').getChild('n64').onClick(room,function() {
				
				if (room.inviteCode) {
					if (window.invite) window.invite(room.inviteCode);
					else prompt('code', room.inviteCode);
				}
			});
			//退出按钮
			var backBtn = _view.getChild('n74').onClick(null,function() {
				if (room.backPopup == null) {
					_view.getChild('n74').getController('button').selectedIndex = 1;
					room.backPopup = new wins.BackWin(_view,function(type) {
						_view.removeChild(room.backPopup);
						room.backPopup = null;
						if (type == 1) {
							_socket.sendp({c:'backhall',code:room.code});
						} else if (type == 2) {
							_socket.sendp({c:'dismissgame'});
						} else {
							_view.getChild('n74').getController('button').selectedIndex = 0;
						}
					});
					fairygui.GRoot.inst.showPopup(room.backPopup);
				} else {
					_view.getChild('n74').getController('button').selectedIndex = 0;
					_view.removeChild(room.backPopup);
					room.backPopup = null;
					return;
				}
			});
			//时间框
			room.remainTime = 0;
			room.remainTimeText = _view.getChild('n36');
			
			// if (window._wxErr&&window._wxErr.length > 0) {
			// 	for (var key in window._wxErr[0]) {
			// 		room.addMsg( key,'系统消息:');
			// 		room.addMsg(window._wxErr[0][key],'系统消息:');
			// 	}
			// }
			// if(window._wxErr2) {
			// 	room.addMsg( window._wxErr2,'系统消息:');
			// }
			
			//闹钟
			room.clock = _view.getChild('n71');
			room.clock.getController('c1').selectedIndex = 2;

            cb(null, room);
        }));

    }
	active() {
		var self=this;
		_socket.sendp({c:'createInviteCode'});
		netmsg.once('inviteCode', null, function(msg) {
			self.inviteCode=msg.v;
			window.preInvite && window.preInvite(msg.v, self.opt);
		});
	}
}
module.exports=wolf.create;