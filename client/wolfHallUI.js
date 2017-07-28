'use strict';

var async=require('async'), me=require('./myself.js'), printf=require('printf'), etc=require('./etc.js');
var wins=require('./windows.js');

var Loader = laya.net.Loader;
var Handler = laya.utils.Handler;
var innerStage;

class HallUI {
	constructor(opt) {
		this.opt=opt;
	}
	static create(opt, cb) {
		if (typeof opt==='function') {cb=opt; opt={}}
		Laya.loader.load([
			{ url: require("./res/wolf@atlas3.png"), type: Loader.IMAGE },
			{ url: require("./res/wolf@atlas1.png"), type: Loader.IMAGE },
			{ url: require("./res/wolf@atlas_hy39cl.png"), type: Loader.IMAGE },
			{ url: require("./res/wolf@atlas_x4wy1a.png"), type: Loader.IMAGE },
			{ url: require("./res/wolf@atlas_x4wyz.jpg"), type: Loader.IMAGE },
            { url: require("./res/wolf.fui"), type: Loader.BUFFER }
		], Handler.create(null, function() {
			var hall=new HallUI(opt);
			fairygui.UIPackage.addPackage('wolf');

			// var _view = fairygui.UIPackage.createObject("wolf", "临时大厅").asCom;
			var _view = fairygui.UIPackage.createObject("wolf", "通用主界面").asCom;

			hall._view=_view;
			hall.setView;
			hall.createView;
			hall.BagWin;
			hall.mainWin;
			if (hall.setView == null) {
				hall.setView = new wins.SetWin(closeSetViewFunction);
			}
			if (hall.createView == null) {
				hall.createView = new wins.CreateRoomWin();
			}
			if (hall.BagWin == null) {
				hall.BagWin = new wins.BagWin();
			}
			if (hall.mainWin == null) {
				hall.mainWin = new wins.MainWin(_view);
			}

			if (!!window.cordova) {
				_view.getController('inApp').selectedIndex=1;
				//_view.getChild('dwn').visible=false;
			}
			
			var _l=_view.getChild('n1');
			_l.addChildAt(hall.createView,0);
			_l.addChildAt(hall.mainWin,1);
			_l.addChildAt(hall.BagWin,2);
			
			process.nextTick(function() {
				_l.scrollToView(1);
				hall.mainWin.width = _l.width;
				hall.mainWin.height = _l.height;
				hall.createView.width = _l.width;
				hall.createView.height = _l.height;
				hall.BagWin.width = _l.width;
				hall.BagWin.height = _l.height;
			});

			_l.on(fairygui.Events.SCROLL, this, function() {
				if (_l.scrollPane.posX >= (parseInt(_l.width)*2)) {
					_view.getController('c1').selectedIndex = 2;
				}else if (_l.scrollPane.posX >= _l.width) {
					_view.getController('c1').selectedIndex = 1;
				} else if (_l.scrollPane.posX <= 0) {
					_view.getController('c1').selectedIndex = 0;
				}
			});

			//创建房间
			_view.getChild('n2').onClick(null, function() {
				_l.scrollToView(0,true);
			});

			//游戏大厅
			_view.getChild('n3').onClick(null,function() {
				_l.scrollToView(1,true);
			});

			//背包商城
			_view.getChild('n4').onClick(null,function(){
				_l.scrollToView(2,true);
			});

			if (opt instanceof Object&&opt.hasOwnProperty('hasRoom')&&opt.hasRoom) {
				hall.mainWin.update(opt);
			}


			//temp
			// //创建房间
			// _view.getChild('n19').onClick(null,function() {
			// 	var opt = {
			// 		type:0,
			// 		time:30,
			// 		renshu:0,
			// 		renshuType:1,
			// 		mima:''
			// 	};
			// 	_socket.sendp({c:'entergame',roomtype:'level1', opt:opt||{}});
			// });
			
			// //加入房间
			// var roomCodeText = _view.getChild('n13');
			// _view.getChild('n18').onClick(null, function() {
			// 	// alert("roomCode =" + roomCodeText.text);
			// 	_socket.sendp({c:'join', code:roomCodeText.text});
			// });

			function closeSetViewFunction () {
				_view.removeChild(setView);
			};

			cb(null, hall);
		}));
	}

	updateRankInfo(type,ret) {
		if (fairygui.GRoot.inst.getChildAt(2)&&fairygui.GRoot.inst.getChildAt(2).comName == 'Rank') {
			if (type == 0) {
				fairygui.GRoot.inst.getChildAt(2).updateLevel(ret);
			} else if (type == 1) {
				fairygui.GRoot.inst.getChildAt(2).updateRole(ret);
			} else if (type == 2) {
				fairygui.GRoot.inst.getChildAt(2).updateWealth(ret);
			}
		}
	}

	msg(pack) {
		var self = this;
		switch(pack.c) {
			case 'userin':
				this._view.getChild('log') && (this._view.getChild('log').text+='<br><a href="javascritp:showUser('+pack.userid+')">'+pack.nick+'</a> entered')
			break;
			case 'userout':
				this._view.getChild('log') && (this._view.getChild('log').text+='<br><a href="javascritp:showUser('+pack.userid+')">'+pack.nick+'</a> out')
			break;
			case 'inputMiMa':
				var inputMiMaWin = new wins.InputMiMaWin(pack.code,function() {
					self._view.removeChild(inputMiMaWin);
					inputMiMaWin = null;
				});
				this._view.addChild(inputMiMaWin);
				break;
			case 'errorMiMa':
				tipon('密码错误').popup();
				break;
			case 'rankInfo':
				this.updateRankInfo(pack.type,pack.v);
				break;
			default:
				return false;
		}
		return true;
	}
	active() {
		Laya.SoundManager.playMusic(require('./res/snd/bg-lobby.mp3'));
		Laya.SoundManager.setMusicVolume(0.5);
		Laya.SoundManager.setSoundVolume(0.5);
	}
	deactive() {
		//me.removeAllListeners();
	}
}

var uidefine={
	'wechat_login':function() {
		var args=arguments;
		var loader=require('bundle!./wechat-login.js');
		loader(function(creator) {
			creator.apply(null, args);
		})
	},
	'hall':HallUI.create,
	'gamelevel1':function() {
		var args=arguments;
		var loader=require('bundle!./wolf.js');
		loader(function(creator) {
			creator.apply(null, args);
		})
	},
};
var uiCreator=function(name, opt, cb) {
	if (uidefine[name]) {
		return uidefine[name](opt, cb);
	}
	cb('no such view');
}
var ui={
	views:{},
	current:null,
	get:function(viewname, opt, cb) {
		var self=this;
		//if (this.views[viewname]) return cb(null, this.views[viewname]);
		uiCreator(viewname, opt, function(err, view) {
			console.log(viewname, 'created');
			if (err) return cb(err);
			//self.views[viewname]=view;
			cb(null, view);
		});
	},
	active:function(viewname, opt, cb) {
		var self=this;
		this.get(viewname, opt, function(err, view){
			if (err) return (cb && cb(err));
			console.log('enter', viewname);
			if (view==self.current) return (cb && cb(null, view));
			if (self.current) {
				self.current.deactive && self.current.deactive();
				// fairygui.GRoot.inst.removeChild(self.current._view);
				fairygui.GRoot.inst.removeChildren();
			}
			Laya.SoundManager.stopAll();
			view._view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
			view._view.addRelation(fairygui.GRoot.inst, fairygui.RelationType.Size);
			fairygui.GRoot.inst.addChild(view._view);
			self.current=view;
			cb && cb(null, view);
		});
	}
};

module.exports=ui;