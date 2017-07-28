var shareUrl='http://a.mlinks.cc/AaIu';
var tongji=window.tongji=require('./inappTongji.js');

var me=require('./myself.js');

var Loader = laya.net.Loader;
var Handler = laya.utils.Handler;

var wins=require('./windows.js');

var Wechat,appid='wx5408a6af7cd795ad';
function cordovaVar(name) {
	return window[name]||window[name.substr(0, -1)][name];
}
class Page {
	constructor(opt) {
		this.opt=opt;
	}
	static create(opt, cb) {
		Wechat=window.Wechat;
		regAppIntf();
		if (typeof opt==='function') {cb=opt; opt={}}
		Laya.loader.load([
			{ url: require("./res/mahjong@atlas0.png"), type: Loader.IMAGE },
			// { url: require("./res/hall@atlas1.png"), type: Loader.IMAGE },
			// { url: require("./res/@atlas0.png"), type: Loader.IMAGE },
			{ url: require("./res/mahjong.fui"), type: Loader.BUFFER }
		], Handler.create(null, function() {
			var page=new Page(opt);
			fairygui.UIPackage.addPackage("mahjong");
			var _view = fairygui.UIPackage.createObject("mahjong", "Component6").asCom;
			page._view=_view;
			var codePush=window.codePush=cordovaVar('codePush');
			var InstallMode=window.InstallMode=cordovaVar('InstallMode');
			var SyncStatus=window.SyncStatus=cordovaVar('SyncStatus');
			if (codePush) {
				codePush.notifyApplicationReady();
				_view.getController('c1').selectedIndex=1;
				_view.getChild('n12').asProgress.value=0;
				codePush.sync(function(status) {
					switch (status) {
					case SyncStatus.ERROR:
						tipon('更新服务暂时不可用').popup();
					case SyncStatus.UP_TO_DATE:
						enterlogin();
					}
				}
				,{installMode: InstallMode.IMMEDIATE}
				,function(total, recv) {
					_view.getChild('n13').text='发现新版本，正在更新';
					_view.getChild('n12').asProgress.value=total>0?recv/total:0;
				});
				// codePush.sync(function() {}, { updateDialog: true, installMode: InstallMode.IMMEDIATE });
			}
			function quickLogin() {
				try {
					var localUser=JSON.parse(localStorage.getItem('wechatUser'));
				} catch (e) {
					var localUser=null;
				}
				if (localUser) {
					return accWechatIntf('/weixin/ret', {openid:localUser.openid, tokendata:localUser.token, appid:appid}, function(err, r) {
						if (err) return normalLogin();
						entermain(err, r);
					});
				}
				normalLogin();
			}
			function normalLogin() {
				var scope = "snsapi_userinfo",
				state = "_" + (+new Date());
				Wechat.auth(scope, state, function (response) {
					// you may use response.code to get the access token.
					_view.getChild('n7').visible=false;
					fairygui.GRoot.inst.showModalWait();
					accWechatIntf('/weixin/ret', {code:response.code, appid:appid}, entermain);
				}, function (reason) {
					tipon(reason).popup();
				});
			}
			function entermain(err, r) {
				localStorage.setItem('wechatUser', JSON.stringify(r));
				fairygui.GRoot.inst.closeModalWait();
				if (err) {
					_view.getChild('n7').visible=true;
					return tipon('服务器未启动').popup();
				}
				
				main(r);
			}
			function enterlogin() {
				_view.getController('c1').selectedIndex=0;
				_view.getChild('n7').onClick(null, function() {
					if (!Wechat) return tipon('wechat plugin not installed').popup();
					Wechat.isInstalled(function (installed) {
						if (!installed) return tipon('微信未安装').popup();
						quickLogin();
					}, function (reason) {
						tipon(reason).popup();
					});
				});				
			}
			//if (localStorage.getItem('wechatUser')) main(localStorage.getItem('wechatUser'));
			cb(null, page);
		}));
	}

	active() {
		Laya.SoundManager.playMusic(require('./res/snd/bg-lobby.mp3'));
		this._view.getChild('n7').visible=true;
	}
}

function regAppIntf() {
	var appleProducts={'15':'apple.niuniu.5tickets', '30':'apple.niuniu.10tickets', '150':'apple.niuniu.50tickets'};
	var actureMoney={'15':18, '30':30, '150':'148'};
	function inappPurchase(orderid, money, desc, cb) {
		tongji.beginCharge(orderid, actureMoney[money], Math.floor(money/3), desc, '苹果商店支付');
		inAppPurchase.buy(appleProducts[money]).then(function(data) {
			inAppPurchase.consume(data.productType, data.receipt, data.signature);
			data.orderid=orderid;
			data.actureMoney=actureMoney[money];
			getAjax('/i/niuniu.app/pay/apple', data, function(err) {
				if (err) return tipon(err).popup();
				else tipon('购买成功').popup();
				tongji.endCharge(orderid, '苹果商店支付');
			})
		})
		.catch(function(err) {console.log(err); tipon('购买失败'+err.errorMessage).popup()});
	}
	function wxPay(orderid, money, desc, cb) {
		!cb && (cb=_noop);
		tongji.beginCharge(orderid, money, desc, '微信app支付');
		accWechatIntf('/weixin/getWechatpayParams', {appid:appid, order:orderid, money:money, openid:startup_param.openid},
		function(err, r) {
			if (err) return tipon(err.toString()).popup();
			Wechat.sendPaymentRequest(r, function () {
				tipon('支付成功').popup();
				tongji.endCharge(orderid, '微信app支付');
			}, function (reason) {
				tipon("失败: " + reason).popup();
			});
		});
	}
	if (!!window.cordova && device.platform=='iOS') window.pay=inappPurchase;
	else window.pay=wxPay;

	function toRuleString(rule) {
		var str='';
		rule['10']&& (str+='五小牛 ');
		rule['7']&& (str+='四炸牛 ');
		rule['5']&& (str+='五花牛 ');
		rule['4']&& (str+='四花牛 ');
		if (str.length==0) str='不带牛牛以上的牌型';
		else str='带'+str;
		return str;
	}
	
	window.preInvite=function(v, opt) {
		//inviteMsg={v:v, opt:opt};
		var shareObj={
			title: '牛牛大作战，房号:'+v+'('+opt.pan+'局)',
			description: '轮庄，'+toRuleString(opt.rule)+', '+opt.dizhu+'底！',
			thumb: 'www/logo.png',
			mediaTagName: "logo",
			media: {
				type: Wechat.Type.WEBPAGE,
				webpageUrl: shareUrl+'?room='+v,
			}
		};
		window.invite=function() {
			Wechat.share({
				message:shareObj,
				scene: Wechat.Scene.SESSION   // share to chatwindow
			}, function () {
				tongji.invite(v, '轮庄，'+toRuleString(opt.rule)+', '+opt.dizhu+'底！');
			}, function (reason) {
				//tipon("失败: " + reason).popup();
			});
		}
	}

	window.preShareResult=function(roomid, setnum, participants, winners, img) {
		var shareObj={
			title: '牛牛大作战，房号:'+v+(setnum!=null?(', 第'+setnum+'局'):''),
			description: (participants||[]).join(',')+' 胜利者 '+(winners||[]).join(','),
			media:{
				type:Wechat.Type.IMAGE,
				image:img
			}
		};
		window.share=function() {
			Wechat.share({
				message:shareObj,
				scene: Wechat.Scene.SESSION   // share to chatwindow
			}, function () {
				tongji.share();
			}, function (reason) {
				//tipon("失败: " + reason).popup();
			});		
		}	
	}
}

module.exports=Page.create;
