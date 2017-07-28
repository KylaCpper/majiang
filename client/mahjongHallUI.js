'use strict';

var async=require('async'), me=require('./myself.js'), printf=require('printf'), etc=require('./etc.js');
//var windows=require('./windows.js');
var fun=require('./function.js');
var Loader = laya.net.Loader;
var Handler = laya.utils.Handler;
var innerStage;

class HallUI {
	constructor(opt) {
		this.opt=opt;
		this._view
	}
	static create(opt, cb) {
		if (typeof opt==='function') {cb=opt; opt={}}
		Laya.loader.load([
			{ url: require("./res/mahjong@atlas0.png"), type: Loader.IMAGE },
			// { url: require("./res/mahjong@atlas1.png"), type: Loader.IMAGE },
			// { url: require("./res/mahjong@atlas_hy39cl.png"), type: Loader.IMAGE },
			// { url: require("./res/mahjong@atlas_x4wy1a.png"), type: Loader.IMAGE },
			// { url: require("./res/mahjong@atlas_x4wyz.jpg"), type: Loader.IMAGE },
            { url: require("./res/mahjong.fui"), type: Loader.BUFFER }
		], Handler.create(null, function() {
			var hall=new HallUI(opt);
			fairygui.UIPackage.addPackage('mahjong');

			// var _view = fairygui.UIPackage.createObject("wolf", "临时大厅").asCom;
			var _view = fairygui.UIPackage.createObject("mahjong", "大厅").asCom;
			HallUI._view=_view
			hall._view=_view
			hall.setView


			hall.createRoom
			hall.addRoom
			hall.rule
			hall.activity
			hall.help
			hall.welfare
			hall.mail
			hall.shop

			hall.BagWin
			hall.mainWin
			if (hall.createRoom == null) {
				// hall.setView = new windows.SetWin(closeSetViewFunction);
			}
			if (hall.addRoom == null) {
				// hall.createView = new windows.CreateRoomWin();
			}
			if (hall.BagWin == null) {
				// hall.BagWin = new windows.BagWin();
			}
			if (hall.mainWin == null) {
				//hall.mainWin = new windows.MainWin(_view);
			}
			//name
			_view.getChild('n8').text=me.nickname
			me.on('nicknamechgd', function() {
				_view.getChild('n8').text=me.nickname	
			});
			// //tickets
			_view.getChild('n25').text=me.tickets
			me.on('ticketschgd', function() {
				_view.getChild('n25').text=me.tickets	
			});
			// //砖石
			_view.getChild('n26').text=me.diamonds
			me.on('diamondschgd', function() {
				_view.getChild('n26').text=me.diamonds	
			});
			// //头像
			_view.getChild('n1').url=me.face
			me.on('facechgd', function() {
				_view.getChild('n1').url=me.face	
			});

			// if (!!window.cordova) {
			// 	_view.getController('inApp').selectedIndex=1;
			// 	//_view.getChild('dwn').visible=false;
			// }
			
			// var _l=_view;
			// // _l.addChildAt(hall.createView,0);
			// _l.addChildAt(hall.mainWin,1);
			// // _l.addChildAt(hall.BagWin,2);
			
			// process.nextTick(function() {
			// 	//_l.scrollToView(1);
			// 	hall.mainWin.width = _l.width;
			// 	hall.mainWin.height = _l.height;
			// 	hall.createView.width = _l.width;
			// 	hall.createView.height = _l.height;
			// 	hall.BagWin.width = _l.width;
			// 	hall.BagWin.height = _l.height;
			// });

			// _l.on(fairygui.Events.SCROLL, this, function() {
			// 	if (_l.scrollPane.posX >= (parseInt(_l.width)*2)) {
			// 		_view.getController('c1').selectedIndex = 2;
			// 	}else if (_l.scrollPane.posX >= _l.width) {
			// 		_view.getController('c1').selectedIndex = 1;
			// 	} else if (_l.scrollPane.posX <= 0) {
			// 		_view.getController('c1').selectedIndex = 0;
			// 	}
			// });
			//创建房间		
			_view.getChild('n9').onClick(null, function() {
				// _l.scrollToView(0,true);

				if(!hall.createRoom){
					hall.createRoom=_view.addChild(create("创房"))
					hall.createRoom.x=-100
				}
				else{
					hall.createRoom.visible=!hall.createRoom.visible
				}
					//close
					hall.createRoom.getChild('n4').onClick(null,function(){
						hall.createRoom.visible=false
					})
					//create room
					hall.createRoom.getChild('n15').onClick(null,function(){
						hall.createRoom.getChild('n23').selected
						hall.createRoom.getChild('n24').selected
						hall.createRoom.getChild('n25').selected

						hall.createRoom.getChild('n33').selected
						hall.createRoom.getChild('n34').selected

						hall.createRoom.getChild('n31').selected
						hall.createRoom.getChild('n32').selected
							var opt = {
								type:1,
								time:30,
								renshu:1,
								renshuType:1,
								mima:''
							}

						_socket.sendp({c:'entergame',roomtype:'mahjong', opt:opt||{}});
					})

				

				
			});
			//_socket.sendp({c:'leavegame'});

			//加入房间
			_view.getChild('n10').onClick(null, function() {
				// _l.scrollToView(0,true);
				if(!hall.addRoom){
					hall.addRoom=_view.addChild(create("加入房间"))
				}
				else{
					hall.addRoom.visible=!hall.addRoom.visible
				}

					//close
					hall.addRoom.getChild('n3').onClick(null,function(){
						hall.addRoom.visible=false
					})
					//sure
					hall.addRoom.getChild('n4').onClick(null,function(){
						
						if(hall.addRoom.getChild('n21').text){

							_socket.sendp({c:'join',code:hall.addRoom.getChild('n21').text});

						}
						
					})


					//repart
					hall.addRoom.getChild('n19').onClick(null,function(){
						hall.addRoom.getChild('n21').text=""
						
					})
					//delete
					hall.addRoom.getChild('n18').onClick(null,function(){
						var be=hall.addRoom.getChild('n21').text
						be=be.substring(0,be.length-1)
						hall.addRoom.getChild('n21').text=be

					})
					var math=9
					for(var i=0;i<=math;i++){
						hall.addRoom.getChild('n'+(8+i)).onClick(hall.addRoom.getChild('n'+(8+i)),function(){
							hall.addRoom.getChild('n21').text=hall.addRoom.getChild('n21').text+(Number(this.name.slice(1))-8)
						})						
					}


				

			});
			//商城
			_view.getChild('n13').onClick(null, function() {

				if(!hall.shop){
					hall.shop=_view.addChild(create("商城"))
					hall.shop.x=-100
				}
				else{
					hall.shop.visible=!hall.shop.visible
				}
				//close
				hall.shop.getChild('n2').onClick(null,function(){
						hall.shop.visible=false
				})
				//buy 1
				hall.shop.getChild('n22').onClick(null,function(){

				})
				//buy 2
				hall.shop.getChild('n23').onClick(null,function(){
					
				})
				//buy 3
				hall.shop.getChild('n24').onClick(null,function(){
					
				})
				//领取
				hall.shop.getChild('n17').onClick(null,function(){
					//点数满
					if(hall.shop.getChild('n16').text>=100){

					}
				})
			});
			//设置

			_view.getChild('n14').onClick(null, function() {
				if(!hall.set){
					hall.set=_view.addChild(create("设置"))
					hall.set.x=-100
				}
				else{
					hall.set.visible=!hall.set.visible
				}
				//close
				hall.set.getChild('n4').onClick(null,function(){
					//_view.displayObject.on("display",null,hall.option);
					hall.set.visible=false
						// _view.removeChild(hall.option)
						// hall.option=null
				})
				//普通话
				hall.set.getChild('n7').onClick(null,function(){

				})
				//上海话
				hall.set.getChild('n8').onClick(null,function(){

				})
				//音效
				hall.set.getChild('n16').on("mouseup",null,function(){
					var be= hall.set.getChild('n16')._value
							Laya.SoundManager.setMusicVolume(be/100);
		
				})
				//音乐
				hall.set.getChild('n17').on("mouseup",null,function(){
					var be =hall.set.getChild('n17')._value
					Laya.SoundManager.setSoundVolume(be/100);
				})
				//屏蔽语音
				hall.set.getChild('n20').onClick(null,function(){

				})
				//关闭聊天
				hall.set.getChild('n23').onClick(null,function(){

				})

			});
			//邮件
			_view.getChild('n15').onClick(null, function() {
				if(!hall.mail){
					hall.mail=_view.addChild(create("邮件"))
				}
				else{
					hall.mail.visible=!hall.mail.visible
				}
				//close
				hall.mail.getChild('n2').onClick(null,function(){
						hall.mail.visible=false
				})
				//收取
				hall.mail.getChild('n6').onClick(null,function(){

				})
			});
			//活动
			_view.getChild('n16').onClick(null, function() {
				// if(!hall.activity){
				// 	hall.activity=_view.addChild(create("活动"))
				// }
			});
			//福利
			_view.getChild('n17').onClick(null, function() {

			});
			//帮助
			_view.getChild('n18').onClick(null, function() {
				if(!hall.help){
					hall.help=_view.addChild(create("帮助"))
					hall.help.x=-100
				}
				else{
					hall.help.visible=!hall.help.visible
				}
				//close
				hall.help.getChild('n2').onClick(null,function(){
						hall.help.visible=false
				})
			});
			//规则
			_view.getChild('n19').onClick(null, function() {

			});
			//实名
			_view.getChild('n30').onClick(null, function() {

			});

			//创建房间			
			// _view.getChild('n2').onClick(null, function() {
			// 	_l.scrollToView(0,true);
			// });

			//游戏大厅
			// _view.getChild('n3').onClick(null,function() {
			// 	_l.scrollToView(1,true);
			// });

			//背包商城
			// _view.getChild('n4').onClick(null,function(){
			// 	_l.scrollToView(2,true);
			// });

			// if (opt instanceof Object&&opt.hasOwnProperty('hasRoom')&&opt.hasRoom) {
			// 	hall.mainWin.update(opt);
			// }


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
			function create(name){
					return fairygui.UIPackage.createObject("mahjong",name).asCom
			}
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

	msg(pack) {//console.log(pack)
		var self = this;
		switch(pack.c) {
			case 'userin':
				this._view.getChild('log') && (this._view.getChild('log').text+='<br><a href="javascritp:showUser('+pack.userid+')">'+pack.nick+'</a> entered')
			break;
			case 'userout':
				this._view.getChild('log') && (this._view.getChild('log').text+='<br><a href="javascritp:showUser('+pack.userid+')">'+pack.nick+'</a> out')
			break;
			case 'inputMiMa':
				var inputMiMaWin = new windows.InputMiMaWin(pack.code,function() {
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
		Laya.SoundManager.playMusic(require('./res/snd/project.mp3'),0,0);
		Laya.SoundManager.setMusicVolume(0);
		Laya.SoundManager.setSoundVolume(0);
	}
	deactive() {
		//me.removeAllListeners();1
	}
}

var uidefine={
	'wechat_login':function() {
		var args=arguments;
		var loader=require('bundle!./wechat-login.js');
		loader(function(creator) {
			// creator.apply(null, args);
		})
	},
	'hall':HallUI.create,
	'gamemahjong':function() {
		var args=arguments;
		var loader=require('bundle!./mahjong.js');
		loader(function(creator) {
			HallUI._view.visible=false
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