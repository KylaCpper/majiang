var Loader = laya.net.Loader;
var Handler = laya.utils.Handler;
var me=require('./myself.js');

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

class Win extends fairygui.Window {
	constructor(comName, packageName, closeHandler) {
		super();
		if (typeof packageName=='function') {closeHandler=packageName; packageName=null}
		this.comName=comName;this.packageName=packageName||'mahjong';
		this.closeHandler=closeHandler;
	}
	onInit() {
		this.contentPane = fairygui.UIPackage.createObject(this.packageName, this.comName).asCom;
		this.assignAllBtns();

		this.center();
		
		//弹出窗口的动效已中心为轴心
		this.setPivot(0.5, 0.5);

		var self=this;
		var cls=this.contentPane.getChild('closeButton')||this.contentPane.getChild('close');
		if (cls instanceof fairygui.GButton) cls.asButton.onClick(this, function() {
			this.hide();
			if (typeof self.closeHandler=='function') self.closeHandler();
		})

		var bg=this.contentPane.getChildAt(0);
		if (bg instanceof fairygui.GGraph) {
			bg.onClick(this, function() {
				this.hide();
				if (typeof self.closeHandler=='function') self.closeHandler();
			});
		}
	}
	// doShowAnimation()
	// {
	// 	this.alpha=0.42;
	// 	laya.utils.Tween.to(this, { alpha:1 },300, laya.utils.Ease.quadOut, Handler.create(this, this.onShown));
	// }
	
	doHideAnimation()
	{
		//laya.utils.Tween.to(this, { alpha: 0.2 },180, laya.utils.Ease.quadOut, Handler.create(this, this.hideImmediately));
		this.hideImmediately();
	}
	assignAllBtns() {
		'use strict';
		var cl=this.contentPane._children;
		for (var i=0; i<cl.length; i++) {
			var btn=cl[i].asButton;
			if (btn instanceof fairygui.GButton) {
				let _n=btn.name.split('.');
				let _idx=_n[1]||1;
				_n=_n[0];
				let ctrl=this.contentPane.getController(_n);
				if (ctrl) {
					btn.onClick(this, function() {
						ctrl.selectedIndex=_idx;
					});
					ctrl.setSelectedIndex(0);
				} else {
					let com=fairygui.UIPackage.createObject('mahjong', _n);
					if (com) {
						btn.onClick(this, function() {
							var candiName=capitalizeFirstLetter(_n)+'Win';
							if (wins[candiName]) {
								var win =new wins[candiName];
							}
							else var win=new wins.Win(_n);
							win.show();
						})
					}
				}
			}
		}
	}
}

class FirstCashWin extends Win {
	constructor() {
		super('firstCash');
	}
	
	onInit() {
		super.onInit();

		this.contentPane.getChild('buyFirstCash').asButton.onClick(this, function() {
			getAjax('createOrder', {userid:me.id, packid:'firstCash'}, function(err, r) {
				if (err||r.err) return tipon(err||r.err).popup();
				if (window.pay) return window.pay(r.orderid, r.money, '首充');
				return alert('window.pay not configured');
			})
		})
	}
}
class DwnWin extends Win {
	constructor() {
		super('dwn');
	}
	
	onInit() {
		super.onInit();

		this.contentPane.getChild('n2').asButton.onClick(this, function() {
			window.location.href='http://a.mlinks.cc/AaIu';
		})
	}		
}
class MainWin extends Win{
	constructor(_view) {
		super('大厅','mahjong');
		var self = this;
		this.scroView = _view;
		this.opt;

	}
	onInit() {
		super.onInit();
		var self=this;

		 //监听大厅上面的用户信息变化
		 self.contentPane.getChild('n25').text = me.tickets;
		 console.log(me.tickets)
			me.on('ticketschgd', function() {
				self.contentPane.getChild('n25').text = me.tickets;
			});

			me.on('facechgd', function() {
				self.contentPane.getChild('n1').url =  me.face;
			});

			me.on('diamondschgd', function() {
				self.contentPane.getChild('n26').text = me.diamonds;
			});

			me.on('nicknamechgd', function() {
				self.contentPane.getChild('n8').text = me.nickname;
			});

			me.on('levelchgd', function() {
				self.contentPane.getChild('n11').text = me.level + '';
			});

			me.on('expchgd', function() {
				self.contentPane.getChild('n73').text = '经验数值'+ (me.exp - me.baseexp) + '/' + (me.nextexp - me.baseexp);
				self.contentPane.getChild('n12').getChild('n3').scaleX = (me.exp - me.baseexp) / (me.nextexp - me.baseexp);
			});

			//快速加入 暂定创房
			// if (self.opt&&self.opt.hasOwnProperty('hasRoom')&&self.opt.hasRoom) {
			// 	self.contentPane.getChild('n36').getController('c1').selectedIndex = 2;
			// } else {
			// 	self.contentPane.getChild('n36').getController('c1').selectedIndex = 0;
			// }


			// self.contentPane.getChild('n36').onClick(null,function() {
			// 	if (self.opt instanceof Object&&self.opt.hasOwnProperty('hasRoom')&&self.opt.hasRoom) {
			// 		_socket.sendp({c:'join', code:self.opt.hasRoom});
			// 	} else {
			// 		self.scroView.getChild('n1').scrollToView(0,true);
			// 	}
			// });
			
			// //加入房间
			var roomCodeText = self.contentPane.getChild('n23');
			self.contentPane.getChild('n4').onClick(null, function() {
				if (roomCodeText.text == '') {
					tipon('请输入房间号').popup();
					return;
				}
				_socket.sendp({c:'join', code:roomCodeText.text});
			});

			//购买
			// var buyBtn1 = self.contentPane.getChild('n50').onClick(null,function() {
			// 	self.scroView.getChild('n1').scrollToView(2,true);
			// }); 

			// var buyBtn2 = self.contentPane.getChild('n51').onClick(null,function() {
			// 	self.scroView.getChild('n1').scrollToView(2,true);
			// });

			//点击自己头像
			var infoView = null;
			self.contentPane.getChild('n2').onClick(null,function() {
				if (infoView) {
					self.removeChild(infoView);
					infoView = null;
				} else {
					infoView = new wins.checkInfoWin(function() {
						infoView = null;
					});
					self.addChild(infoView);
					_socket.sendp({c:'checkInfo',userid:me.id});
				}
			});
	}

	update(opt) {
		this.opt = opt;
	}
}
class SetWin extends Win {
	constructor() {
		super('Set','mahjong');
	}
	onInit() {
		super.onInit();

		var self=this;
		this.modal=true;
		var musicScol = this.contentPane.getChild('n18').asSlider;
		var w = musicScol.getChild('bar').initWidth;

		var soundScol = this.contentPane.getChild('n28').asSlider;
		var sw = soundScol.getChild('bar').initWidth;
		var soundCloseBtn = this.contentPane.getChild('n27');
		if (Laya.SoundManager.soundMuted) {
			soundCloseBtn.getController('button').selectedIndex = 1;
			soundScol.getChild('bar').width =sw*0;
			Laya.SoundManager.soundVolume = 0;
		} else {
			soundCloseBtn.getController('button').selectedIndex = 0;
		}
		soundCloseBtn.onClick(null,function(){
			if (Laya.SoundManager.soundMuted) {
				Laya.SoundManager.soundMuted = false;
				Laya.SoundManager.setSoundVolume(0.5);
				soundScol.getChild('bar').width = sw*0.5;
				soundCloseBtn.getController('button').selectedIndex = 0;
			} else {
				Laya.SoundManager.soundMuted = true;
				soundCloseBtn.getController('button').selectedIndex = 1;
				soundScol.getChild('bar').width = sw*0;
			}
		});
		soundScol.getChild('bar').width = sw*Laya.SoundManager.soundVolume;
		soundScol.getChild('grip').on('mousedown',soundScol,function() {
			this.getChild('grip').on('mousemove',soundScol,function() {
				var v = Math.round((this.getChild('bar').actualWidth/this.getChild('bar').initWidth)*10)/10;
				if (v == 0) {
					soundCloseBtn.getController('button').selectedIndex = 1;
				} else {
					soundCloseBtn.getController('button').selectedIndex = 0;
				}
				Laya.SoundManager.setSoundVolume(v);
			});
		});
		soundScol.getChild('grip').displayObject.on('dragmove',soundScol,function() {
			var v = Math.round((this.getChild('bar').actualWidth/this.getChild('bar').initWidth)*10)/10;
			Laya.SoundManager.setSoundVolume(v);
		});


		var musicCloseBtn = this.contentPane.getChild('n26');
		if (Laya.SoundManager.musicMuted) {
			musicCloseBtn.getController('button').selectedIndex = 1;
			musicScol.getChild('bar').width = w*0;
			Laya.SoundManager.musicVolume = 0;
		} else {
			musicCloseBtn.getController('button').selectedIndex = 0;
		}
		musicCloseBtn.onClick(null,function(){
			if (Laya.SoundManager.musicMuted) {
				Laya.SoundManager.musicMuted = false;
				Laya.SoundManager.playMusic(require('./res/snd/bg-lobby.mp3'));
				Laya.SoundManager.setMusicVolume(0.5);
				musicScol.getChild('bar').width = w*0.5;
				musicCloseBtn.getController('button').selectedIndex = 0;
			} else {
				Laya.SoundManager.musicMuted = true;
				musicCloseBtn.getController('button').selectedIndex = 1;
				musicScol.getChild('bar').width = w*0;
			}
		});
		// var orgObj;
		// orgObj.on('moussemove', Handler.create(null, function() {

		// }));
		musicScol.getChild('bar').width = w*Laya.SoundManager.musicVolume;
		musicScol.getChild('grip').on('mousedown',musicScol,function() {
			this.getChild('grip').on('mousemove',musicScol,function() {
				var v = Math.round((this.getChild('bar').actualWidth/this.getChild('bar').initWidth)*10)/10;
				if (v == 0) {
					musicCloseBtn.getController('button').selectedIndex = 1;
				} else {
					musicCloseBtn.getController('button').selectedIndex = 0;
				}
				Laya.SoundManager.setMusicVolume(v);
			});
		});
		musicScol.getChild('grip').displayObject.on('dragmove',musicScol,function() {
			var v = Math.round((this.getChild('bar').actualWidth/this.getChild('bar').initWidth)*10)/10;
			Laya.SoundManager.setMusicVolume(v);
		});
	}
	hide() {
		super.hide();
		this.modal=false;
	}
}
class BagWin extends Win {
	constructor() {
		super('商城','mahjong');
		this.isBuy = false;
	}

	onInit() {
		super.onInit();
		var self=this;
		
		function chgexp() {
			var v=(me.outlay_exp||0)-(me.used_outlay_exp||0);
			if (!v) v=0;
			// self.contentPane.getChild('n118').asProgress.value=v;
		}

		me.on('ticketschgd', function() {
				self.contentPane.getChild('n6').getChildAt(0).getChild('n1').getChild('n13').text = '数量:' + me.tickets;
		});
		// me.on('outlay_expchgd', chgexp);
		// me.on('used_outlay_expchgd', chgexp);
		
		var packs=['1Tickets','5Tickets','10Tickets','seniorRoomFor9','topLvRoomFor12','diamondsRoomFor14','1TicketsByDiamonds'];
		var itemList = self.contentPane.getChild('n4');
		var len = packs.length;
		for (let i=0;i<len;i++) {
			itemList.getChildAt(0).getChild('x'+i).onClick(null,function() {
				if (self.isBuy) {
					return;
				}
				self.isBuy=true;
				getAjax('createOrder', {userid:me.id, packid:packs[i]}, function(err, r) {
					if (err||r.err) {
						self.isBuy=false;
						return tipon(err||r.err).popup();
					}
					if (r.pack.rmb==0) {
						return function() {
							self.isBuy=false;
							// if (confirm(parseMoney(pack)+'购买'+parseCargo(pack))) {
							if (confirm('用钻石购买')) {
								getAjax('confirmOrder', {orderid:r.orderid, money:0}, function(err, r) {
									if (err||r.err) return tipon(err||r.err).popup();
									tipon('购买成功').popup(); 
								})
							}
						}();
					}
					else if (window.pay) {
						return window.pay(r.orderid, r.money, packs[i],null,function() {
							self.isBuy=false;
						});
					}
					self.isBuy=false;
					return alert('window.pay not configured');
				})
			});
		}
		var diamondsPacks = ['60Diamonds','300Diamonds','500Diamonds','980Diamonds','1980Diamonds','2980Diamonds','6480Diamonds'];
		var diamondsList = self.contentPane.getChild('n5');
		var diamondsPacksLen = diamondsPacks.length;
		for (let di=0;di<diamondsPacksLen;di++) {
			diamondsList.getChildAt(0).getChild('d'+di).onClick(null,function() {
				if (self.isBuy) {
					return;
				}
				self.isBuy=true;
				getAjax('createOrder', {userid:me.id, packid:diamondsPacks[di]}, function(err, r) {
					if (err||r.err) {
						self.isBuy=false;
						return tipon(err||r.err).popup();
					}
					if (window.pay) {
						return window.pay(r.orderid, r.money, diamondsPacks[di],null,function() {
							self.isBuy=false;
						});
					}
					self.isBuy=false;
					return alert('window.pay not configured');
				})
			});
		}
	}
}
class AnnouncementWin extends Win {
	constructor(closeFunction) {
		super('Announcement','mahjong');
	}
	onInit() {
		super.onInit();

		var self=this;
		this.modal=true;
		var closeBtn = this.contentPane.getChild('n4');
		closeBtn.onClick(this,function() {
			self.hide();
		});
		var escBtn = this.contentPane.getChild('n9');
		escBtn.onClick(this,function() {
			self.hide();
		});
	}
	hide() {
		super.hide();
		this.modal=false;
	}
}
class TecherWin extends Win {
	constructor(closeFunction) {
		super('Techer','mahjong');
	}
	onInit() {
		super.onInit();

		var self=this;
		this.modal=true;
		var closeBtn = this.contentPane.getChild('n16');
		closeBtn.onClick(this,function() {
			self.hide();
		});
	}
	hide() {
		super.hide();
		this.modal=false;
	}
}

class RankWin extends Win {
	constructor(closeFunction) {
		super('Rank','mahjong');
	}
	onInit() {
		super.onInit();

		var self=this;
		this.modal=true;
		var closeBtn = this.contentPane.getChild('n5');
		closeBtn.onClick(this,function() {
			self.hide();
		});
		var escBtn = this.contentPane.getChild('n7');
		escBtn.onClick(this,function() {
			self.hide();
		});

		//显示对应的排行榜
		self.contentPane.getChild('n17').onClick(null,function() {
			sendMsg();
		});

		self.contentPane.getChild('n18').onClick(null,function() {
			sendMsg();
		});

		self.contentPane.getChild('n19').onClick(null,function() {
			sendMsg();
		});

		var sendMsg = function() {
			if (self.contentPane.getController('榜单选择').selectedIndex == 2) {
				//财富榜
				_socket.sendp({c:'rankInfo',rankType:2});
			} else if (self.contentPane.getController('榜单选择').selectedIndex == 1) {
				//身份榜
				_socket.sendp({c:'rankInfo',rankType:1,roleType:0});
			} else {
				//等级榜
				_socket.sendp({c:'rankInfo',rankType:0});
			}
		}

		self.contentPane.getChild('n41').getChild('n39').text = '平民身份榜';

		this.contentPane.getChild('n41').getChild('n37').getChildAt(0).onClick(null,function() {
			var index = self.contentPane.getChild('n41').getChild('n37').getChildAt(0).getController('c1').selectedIndex;
			self.contentPane.getChild('n41').getChild('n39').text = getDesc(index);
			_socket.sendp({c:'rankInfo',rankType:1,roleType:index});
		});

		var getDesc = function(index) {
			var str = '平民身份榜';
			switch(index) {
            case 0:
				str = '平民身份榜';
                break;
			case 1:
				str = '狼人身份榜';
				break;
			case 2:
				str = '预言家身份榜';
                break;
			case 3:
				str = '女巫身份榜';
                break;
			case 4:
				str = '猎人身份榜';
                break;
			case 5:
				str = '守卫身份榜';
                break;
			case 6:
				str = '白痴身份榜';
                break;
			}
			return str;
		}
	}
	hide() {
		this.contentPane.getChild('n42').getChild('n23').removeChildren();
		this.contentPane.getChild('n43').getChild('n23').removeChildren();
		this.contentPane.getChild('n41').getChild('n23').removeChildren();
		super.hide();
		this.modal=false;
	}
	updateLevel(ret) {
		this.contentPane.getController('榜单选择').selectedIndex = 0
		if (this.contentPane.getChild('n42').getChild('n23').numChildren > 0) {
			return;
		}
		var len = ret.length;
		ret.sort(function(a,b) {
			return a['rankId'] - b['rankId'];
		});
		for (var i=0;i<len;i++) {
			var item = fairygui.UIPackage.createObject('mahjong','等级排行榜单').asCom;
			item.getController('名次对应颜色').selectedIndex = (i > 3 ? 3:i);
			if (i == 0) {
				item.getChild('n31').text = ret[i]['rankId'];
				item.getChild('n28').text = ret[i]['nickname'];
				// item.getChild('n32').text = ret[i].level;
			} else if (i == 1) {
				item.getChild('n311').text = ret[i]['rankId'];
				item.getChild('n281').text = ret[i]['nickname'];
				// item.getChild('n321').text = ret[i].level;
			} else if (i == 2) {
				item.getChild('n312').text = ret[i]['rankId'];
				item.getChild('n282').text = ret[i]['nickname'];
				// item.getChild('n322').text = ret[i].level;
			} else {
				item.getChild('n313').text = ret[i]['rankId'];
				item.getChild('n283').text = ret[i]['nickname'];
				// item.getChild('n323').text = ret[i].level;
			}
			this.contentPane.getChild('n42').getChild('n23').addChild(item);
		}
	}

	updateRole(ret) {
		this.contentPane.getController('榜单选择').selectedIndex = 1;
		if (this.contentPane.getChild('n41').getChild('n23').numChildren > 0) {
			return;
		}

		var len = ret.length;
		for (var i=0;i<len;i++) {
			var item = fairygui.UIPackage.createObject('mahjong','身份排行榜单').asCom;
			item.getController('名次对应颜色').selectedIndex = (i > 3 ? 3:i);
			if (i == 0) {
				item.getChild('n31').text = ret[i]['rankId'];
				item.getChild('n28').text = ret[i]['nickname'];
				item.getChild('n32').text = '胜';
				item.getChild('n33').text = '负';
			} else if (i == 1) {
				item.getChild('n36').text = ret[i]['rankId'];
				item.getChild('n35').text = ret[i]['nickname'];
				item.getChild('n37').text = '胜';
				item.getChild('n38').text = '负';
			} else if (i == 2) {
				item.getChild('n41').text = ret[i]['rankId'];
				item.getChild('n40').text = ret[i]['nickname'];
				item.getChild('n42').text = '胜';
				item.getChild('n43').text = '负';
			} else {
				item.getChild('n46').text = ret[i]['rankId'];
				item.getChild('n45').text = ret[i]['nickname'];
				item.getChild('n47').text = '胜';
				item.getChild('n48').text = '负';
			}
			this.contentPane.getChild('n41').getChild('n23').addChild(item);
		}
	}

	updateWealth(ret) {
		this.contentPane.getController('榜单选择').selectedIndex = 2;
		if (this.contentPane.getChild('n43').getChild('n23').numChildren > 0) {
			return;
		}


		var len = ret.length;
		for (var i=0;i<len;i++) {
			var item = fairygui.UIPackage.createObject('mahjong','富豪榜单').asCom;
			item.getController('名次对应颜色').selectedIndex = (i > 3 ? 3:i);
			if (i == 0) {
				item.getChild('n31').text = ret[i]['rankId'];
				item.getChild('n28').text = ret[i]['nickname'];
				// item.getChild('n32').text = ret[i].userLevel;
			} else if (i == 1) {
				item.getChild('n36').text = ret[i]['rankId'];
				item.getChild('n35').text = ret[i]['nickname'];
				// item.getChild('n37').text = ret[i].userLevel;
			} else if (i == 2) {
				item.getChild('n41').text = ret[i]['rankId'];
				item.getChild('n40').text = ret[i]['nickname'];
				// item.getChild('n43').text = ret[i].userLevel;
			} else {
				item.getChild('n46').text = ret[i]['rankId'];
				item.getChild('n45').text = ret[i]['nickname'];
				// item.getChild('n48').text = ret[i].userLevel;
			}
			this.contentPane.getChild('n43').getChild('n23').addChild(item);
		}

	}
} 
class RecordWin extends Win {
	constructor(closeFunction) {
		super('Record','mahjong');
	}
	onInit() {
		super.onInit();

		var self=this;
		this.modal=true;
		var closeBtn = this.contentPane.getChild('n19');
		closeBtn.onClick(this,function() {
			self.hide();
		});
		var escBtn = this.contentPane.getChild('n22');
		escBtn.onClick(this,function() {
			self.hide();
		});
	}
	hide() {
		super.hide();
		this.modal=false;
	}
}
class checkInfoWin extends Win {
	constructor(closeFunction) {
		super('人物信息面','mahjong');
		this.cb = closeFunction;
	}
	onInit() {
		super.onInit();

		var self=this;
		self.modal = true;
		self.show();0
		var closeBtn = this.contentPane.getChild('n28');
		closeBtn.onClick(this,function() {
			// if (self.parent) {
			// 	self.parent.removeChild(self);
			// }
			self.hide();
			if (self.cb) self.cb();
		});
	}

	hide() {
		super.hide();
		this.modal = false;
	}
}
class BuyMonthlyWin extends Win {
	constructor() {
		super('buyMonthly');
	}
	
	onInit() {
		super.onInit();

		this.contentPane.getChild('monthlyPay').asButton.onClick(this, function() {
			getAjax('createOrder', {userid:me.id, packid:'monthlyTickets'}, function(err, r) {
				if (err||r.err) return tipon(err||r.err).popup();
				if (window.pay) return window.pay(r.orderid, r.money, '月卡');
				return alert('window.pay not configured');
			})
		})
	}	
}

class BuyTicketsWin extends Win {
	constructor() {
		super('buyTickets');
	}
	onInit() {
		super.onInit();
		var self=this;
		function chgexp() {
			var v=(me.outlay_exp||0)-(me.used_outlay_exp||0);
			if (!v) v=0;
			self.contentPane.getChild('n118').asProgress.value=v;
		}
		me.on('outlay_expchgd', chgexp);
		me.on('used_outlay_expchgd', chgexp);

		if (!!window.cordova && device.platform=='iOS') {
			// use in-app purchase instead wechat pay
			self.contentPane.getChild('n166').text='18元';
			self.contentPane.getChild('n168').text='148元';
		}
		self.contentPane.getChild('n139').asButton.onClick(self, function() {
			if ((me.outlay_exp||0)-(me.used_outlay_exp||0)>=100) {
				self.contentPane.getController('c1').selectedIndex=1;
				self.contentPane.getChild('c1.0').displayObject.once('click', null, function() {
					_socket.sendp({c:'gift@100rmb'});
					tongji.event('免费开房', 'gift@100rmb');
				});
			}else {
				self.contentPane.getController('c1').selectedIndex=2;
			}
		});
		var packs=['1Tickets','5Tickets','10Tickets','1TicketsByDiamonds','seniorRoomFor9','topLvRoomFor12','diamondsRoomFor14'];
		for (let i=0; i<3; i++) {
			self.contentPane.getChild('x'+i).asImage.onClick(null, function() {
				getAjax('createOrder', {userid:me.id, packid:packs[i]}, function(err, r) {
					if (err||r.err) return tipon(err||r.err).popup();
					if (window.pay) return window.pay(r.orderid, r.money, packs[i]);
					return alert('window.pay not configured');
				})
			});
		}
	}
}
class TipWin extends Win {
	constructor(str, opt) {
		super('过场板','mahjong');
		// super('TIP');
		// if (typeof str=='string') this._tip=str;
		// else if (str instanceof Error) this._tip=str.message;
		// if (opt) {
		// 	if (opt instanceof Handler) {
		// 		this._opt={waitHandler:opt};
		// 	} else this._opt=opt;
		// }else this._opt={};
	}
	onInit() {
		super.onInit();
		this._inited=true;
		// this.contentPane.getChild('n3').getChild('n1').text=(this._tip||'something wrong').toString();
		// this.contentPane.getTransition('t0').play();
		// this.contentPane.getChild('n76').text=(this._tip||'something wrong').toString();
		// if (this._pop) {
		// 	var cb=this._pop.cb;
		// 	this.contentPane.getTransition('t0').play(cb?Handler.create(null, cb):null);
		// }

	}
	popup(cb) {
		var self=this;
		this.modal=true;
		this.show();
		// setTimeout(function() {
			// self.hide();
		// },2000);


		// var trans_show=self.contentPane.getTransition('t0');//trans_hide=self.contentPane.getTransition('t1');
		// // this.setXY((Laya.stage.desginWidth - this.contentPane.getChild('n76').textWidth)/2 -30,500);
		// if (self._opt.waitHandler) {
		// 	trans_show.play(Handler.create(null, function() {
		// 		cb &&cb();
		// 		fairygui.GRoot.inst.getChildAt(1).onClick(null, function() {
		// 			self.hide();
		// 			if (typeof self._opt.waitHandler==='function') self._opt.waitHandler();
		// 			else if (self._opt.waitHandler instanceof Handler) self._opt.waitHandler.run();
		// 		});			
		// 	}));
		// }else {
		// 	trans_show.play(Handler.create(null, function() {
		// 		cb &&cb();
		// 		fairygui.GRoot.inst.getChildAt(1).onClick(null,function() {
		// 			self.hide();
		// 		});
		// 		setTimeout(function() {
		// 			self.hide();
		// 		},1500);
		// 	}));
		// 	// trans_hide.play(Handler.create(null, function() {
		// 	// 	self.hide();
		// 	// 	cb &&cb();
		// 	// }));
		// }
	}
	hide() {
		super.hide();
		this.modal=false;
	}
}

var RecWinInst;
class RecWin extends fairygui.Window {
	constructor() {
		super();
		this.comName='语音提示';this.packageName='mahjong';
	}
	static get inst() {
		//if (RecWinInst) return RecWinInst;
		RecWinInst=RecWinInst || new RecWin();
		return RecWinInst;
	}
	onInit() {
		this.contentPane = fairygui.UIPackage.createObject(this.packageName, this.comName).asCom;
		this.center();
		var self=this;
		setTimeout(function() {
			self.hide()
		}, 60*1000);
	}
}

class BackWin extends fairygui.Window {
	constructor(_view,cb) {
		super();
		this.comName='返回下拉面板';this.packageName='mahjong';
		this._cb = cb;
	}

	onInit() {
		this.contentPane = fairygui.UIPackage.createObject(this.packageName, this.comName).asCom;
		var self = this;
		this.contentPane.getChild('n55').onClick(null,function() {
			if (self._cb) self._cb(1);
		});
		this.contentPane.getChild('n54').onClick(null,function() {
			if (self._cb) self._cb(2);
		});

	}

	hide() {
		super.hide();
		if (this._cb) this._cb();
	};
}

class CheckOtherInfoWin extends fairygui.Window {
	constructor(user,type,cb) {
		super();
		this.comName='查看信息面板';this.packageName='mahjong';
		this._cb = cb;
		this._type = type;
		this._nickname = user.nickname;
		this.userid = user.userid;
	}

	onInit() {
		var self = this;
		this.contentPane = fairygui.UIPackage.createObject(this.packageName, this.comName).asCom;
		this.contentPane.getController('c1').selectedIndex = this._type;
		if (this._type == 0) {
			this.contentPane.getChild('n46').getChild('n48').text = this._nickname;
			this.contentPane.getChild('n46').getChild('n51').onClick(null,function() {
				self.hide(1);
			});
			this.contentPane.getChild('n46').getChild('n50').onClick(null,function() {
				self.hide(2);
			});
		} else if (this._type == 1) {
			this.contentPane.getChild('n53').getChild('n48').text = this._nickname;
			this.contentPane.getChild('n53').getChild('n51').onClick(null,function() {
				self.hide(1);
			});
		}

	}

	hide(type) {
		super.hide();
		if (this._cb) this._cb(type,this.userid);
	};
}

class InputMiMaWin extends Win {
	constructor(code,cb) {
		super();
		this.comName='输入密码';this.packageName='mahjong';
		this.code = code;
		this._cb = cb
	}
	onInit() {
		super.onInit();
		var self = this;
		self.modal = true;
		self.show();
		this.contentPane = fairygui.UIPackage.createObject(this.packageName, this.comName).asCom;
		self.setXY((Laya.stage.desginWidth - this.width)/2,(Laya.stage.desginHeight - this.height)/2);
		//取消
		this.contentPane.getChild('n2').onClick(null,function() {
			self.hide();
			if (self._cb) self._cb();
		});
		//确定
		this.contentPane.getChild('n3').onClick(null,function() {
			if (self.contentPane.getChild('n6').text == '') {
				tipon('请输入密码').popup();
				return;
			}
			self.hide();
			_socket.sendp({c:'join', code:self.code,mima:self.contentPane.getChild('n6').text});
			if (self._cb) self._cb();
		});

		//苹果
		var ua = navigator.userAgent.toLowerCase();
		if (ua.match(/iPhone/i)=="iphone") {
			this.contentPane.getChild('n6').displayObject.on('blur',null,function() {
				document.getElementById('layaCanvas').scrollIntoView();
			});
			this.contentPane.getChild('n6').displayObject.on('enter',null,function() {
				document.getElementById('layaCanvas').scrollIntoView();
			});
		}
	}
	hide() {
		super.hide();
		this.modal=false;
	}
}

class CreateRoomWin extends Win {
	constructor() {
		super('创房','mahjong');
	}
	onInit() {
		super.onInit();
		var self=this;
		
		var opt = {
			type:0,
			time:30,
			renshu:0,
			renshuType:1,
			mima:''
		};
		var Info = '6_1';
		var createBtn = this.contentPane.getChild('n30');
		var typeController = this.contentPane.getController('模式');
		var type1 = this.contentPane.getChild('n33').onClick(null,function() {
			typeController.selectedIndex = 0;
			opt.type = 0;
		});
		var type2 = this.contentPane.getChild('n35').onClick(null,function() {
			typeController.selectedIndex = 1;
			opt.type = 1;
		});
		var type3 = this.contentPane.getChild('n25').onClick(null,function() {
			typeController.selectedIndex = 2;
			opt.type =2;
		});
		var speakTimeType = this.contentPane.getController('发言时间');
		this.contentPane.getChild('n42').onClick(null,function() {
			speakTimeType.selectedIndex = 0;
			opt.time = 30;
		});
		this.contentPane.getChild('n41').onClick(null,function() {
			speakTimeType.selectedIndex = 1;
			opt.time = 45;
		});
		this.contentPane.getChild('n43').onClick(null,function() {
			speakTimeType.selectedIndex = 2;
			opt.time = 60;
		});
		var rs = self.contentPane.getChild('n84');
		var c = self.contentPane.getChild('n44').getChildAt(0).getController('c1');
		var dropList = rs.dropdown.getChildAt(1);
		dropList.onClick(null,function() {
			if (dropList.selectedIndex == 0) {
				Info = dropList.getChildAt(0).name
				c.selectedIndex = 0;
			} else if(dropList.selectedIndex == 1) {
				Info = dropList.getChildAt(1).name
				c.selectedIndex = 1;
			} else if (dropList.selectedIndex == 2) {
				Info = dropList.getChildAt(2).name
				c.selectedIndex = 2;
			} else if (dropList.selectedIndex == 3) {
				Info = dropList.getChildAt(3).name
				c.selectedIndex = 3;
			} else if (dropList.selectedIndex == 4) {
				Info = dropList.getChildAt(4).name
				c.selectedIndex = 4;
			}
		});

		//设置输入密码框
		self.contentPane.getChild('n36').displayObject.restrict = "0-9";

		createBtn.onClick(null,function() {
			if (self.contentPane.getChild('n36').text.length > 6) {
				tipon('密码长度限制').popup();
				return;
			}
			opt.renshu = Info.split('_')[0];
			opt.renshuType = Info.split('_')[1];
			opt.mima = self.contentPane.getChild('n36').text;
			_socket.sendp({c:'entergame',roomtype:'mahjong', opt:opt||{}});
			self.hide();
		});
	}
}
var JoinRoomWinInst=null;
class JoinRoomWin extends Win {
	constructor() {
		super('joinRoom');
	}
	static arrToNum(arr) {
		var x=0;
		for (var i=0; i<arr.length; i++) {
			x=x*10+arr[i];
		}
		return x;
	}
	static get inst() {
		if (JoinRoomWinInst) return JoinRoomWinInst;
		JoinRoomWinInst=new JoinRoomWin();
		return JoinRoomWinInst;
	}
	onInit() {
		super.onInit();
		var cont=this.contentPane;
		var roomcode=[];
		this.drawNum(roomcode);
		for (var i=0; i<10; i++) {
			cont.getChild('btn'+i).onClick(this, function(num) {
				if (roomcode.length<5) {
					roomcode.push(num);
					this.drawNum(roomcode);
					if (roomcode.length==5) {
						_socket.sendp({c:'join', code:JoinRoomWin.arrToNum(roomcode)});
						this.hide();
					}
				}
			}, [i]);
		}
		cont.getChild('btnBck').onClick(this, function() {
			roomcode.pop();
			this.drawNum(roomcode);
		});
		cont.getChild('btnClr').onClick(this, function() {
			roomcode=[];
			this.drawNum(roomcode);
		});
	}
	drawNum(arr) {
		var cont=this.contentPane;
		for (var i=0; i<arr.length; i++) {
			cont.getChild('num'+i).text=arr[i].toString();
		}
		for (;i<5; i++) {
			cont.getChild('num'+i).text=' ';
		}
	}
}
var toItemString=(function () {
	var map={tickets:'房卡', outlay_exp:'经验', freeExpire:'限免'};
	return function(obj) {
		var str='';
		for (var key in obj) {
			if (key=='freeExpire') {
				str+=map[key]+'至'+toDateString(obj[key]);
			} else str+=map[key]+'+'+obj[key];
		}
		return str;
	}
})();

class ShowMailWin extends Win {
	constructor() {
		super('showMail');
	}
	onInit() {
		super.onInit();
		var _l=this.contentPane.getChild('n86').asList;
		_l.removeChildren();
		_socket.sendp({c:'mails', start:0});
		netmsg.on('mails', function(pack) {
			for (var i=0; i<pack.v.length; i++) {
				var item=pack.v[i];
				var mail=fairygui.UIPackage.createObject('牛牛', 'Button162');
				mail.getChild('n7').text=(item.from?(item.from+'赠送的'):'')+toItemString(item.content);
				mail.getChild('n8').onClick(null, function(_item){
					if (item.content.tickets) tongji.reward(item.content.tickets, item.from);
					_socket.sendp({c:'rcvmail', id:item.id});
				}, [item]);
			}
		});
	}
}
class SettingWnd extends Win {
	constructor(onclose) {
		super('Setting', onclose);
	}
	onInit() {
		super.onInit();
		var bgm=this.contentPane.getChild('n11').asButton;
		bgm.selected=localStorage.getItem('bgm')!='true';
		bgm.onClick(null, function() {
			Laya.SoundManager.musicMuted=!bgm.selected;
			localStorage.setItem('bgm', Laya.SoundManager.musicMuted);
		});
		var snd=this.contentPane.getChild('n12').asButton;
		snd.selected=localStorage.getItem('snd')!='true';
		snd.onClick(null, function() {
			Laya.SoundManager.soundMuted=!snd.selected;
			localStorage.setItem('snd', Laya.SoundManager.soundMuted);
		});
		this.contentPane.getChild('n26').text='ver <{version}>';
		this.contentPane.getChild('n27').onClick(null, function() {
			localStorage.setItem('wechatUser', '');
			require('./mahjongHallUI').active('wechat_login');
		});
	}
}
class InfoWin extends fairygui.Window {
	constructor(str) {
		super();
		this.str=str;
		this.arrowPt={x:Laya.stage.mouseX, y:Laya.stage.mouseY};
	}
	onInit() {
		this.contentPane = fairygui.UIPackage.createObject('牛牛', 'tooltip').asCom;
		this.contentPane.getChild('n2').text=this.str.toString();
		var arrow=this.contentPane.getChild('n4');
		this.y=this.arrowPt.y+5;
		this.x=this.arrowPt.x-(arrow.x+arrow.width/2);

		var self=this;
		this.contentPane.onClick(null, function() {
			self.hide();
		});
	}
}
class ComUserWin extends Win {
	constructor() {
		super('ComUser');
	}
	onInit() {
		super.onInit();

		this.contentPane.getChild('usernick').text=me.nickname;
		this.contentPane.getChild('userShowId').text='ID:'+me.showId;
		this.contentPane.getChild('tickets').text='房卡:'+me.tickets;
		this.contentPane.getChild('usericon').url=me.face;
	}
}
class backHallWin extends Win {
	constructor() {
		super('身份死亡信息面板','mahjong');
	}
	onInit() {
		super.onInit();
		this.contentPane.getController('c1').selectedIndex = 6;
		var backHallBtn = this.contentPane.getChild('n56').getChild('n55').onClick(null,function() {
			_socket.sendp({c:'backhall',code:room.code});
		});
		var backRoomBtn = this.contentPane.getChild('n56').getChild('n54').onClick(null,function() {
			_socket.sendp({c:'leavegame'});
		});
	}
}
var wins={
	Win:Win,
	FirstCashWin:FirstCashWin,
	BuyMonthlyWin:BuyMonthlyWin,
	BuyTicketsWin:BuyTicketsWin,
	TipWin:TipWin,
	RecWin:RecWin,
	CreateRoomWin:CreateRoomWin,
	JoinRoomWin:JoinRoomWin,
	ShowMailWin:ShowMailWin,
	SettingWin:SettingWnd,
	InfoWin:InfoWin,
	ComUserWin:ComUserWin, 
	DwnWin:DwnWin,
	SetWin:SetWin,
	BagWin:BagWin,
	AnnouncementWin:AnnouncementWin,
	TecherWin:TecherWin,
	RankWin:RankWin,
	RecordWin:RecordWin,
	checkInfoWin:checkInfoWin,
	backHallWin:backHallWin,
	MainWin:MainWin,
	BackWin:BackWin,
	CheckOtherInfoWin:CheckOtherInfoWin,
	InputMiMaWin:InputMiMaWin
};
module.exports=wins;