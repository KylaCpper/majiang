webpackJsonp([5],{

/***/ 75:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var shareUrl = 'http://a.mlinks.cc/AaIu';
	var tongji = window.tongji = __webpack_require__(76);

	var me = __webpack_require__(22);

	var Loader = laya.net.Loader;
	var Handler = laya.utils.Handler;

	var wins = __webpack_require__(77);

	var Wechat,
	    appid = 'wx5408a6af7cd795ad';
	function cordovaVar(name) {
		return window[name] || window[name.substr(0, -1)][name];
	}

	var Page = function () {
		function Page(opt) {
			_classCallCheck(this, Page);

			this.opt = opt;
		}

		_createClass(Page, [{
			key: 'active',
			value: function active() {
				Laya.SoundManager.playMusic(__webpack_require__(78));
				this._view.getChild('n7').visible = true;
			}
		}], [{
			key: 'create',
			value: function create(opt, cb) {
				Wechat = window.Wechat;
				regAppIntf();
				if (typeof opt === 'function') {
					cb = opt;opt = {};
				}
				Laya.loader.load([{ url: __webpack_require__(72), type: Loader.IMAGE },
				// { url: require("./res/hall@atlas1.png"), type: Loader.IMAGE },
				// { url: require("./res/@atlas0.png"), type: Loader.IMAGE },
				{ url: __webpack_require__(73), type: Loader.BUFFER }], Handler.create(null, function () {
					var page = new Page(opt);
					fairygui.UIPackage.addPackage("mahjong");
					var _view = fairygui.UIPackage.createObject("mahjong", "Component6").asCom;
					page._view = _view;
					var codePush = window.codePush = cordovaVar('codePush');
					var InstallMode = window.InstallMode = cordovaVar('InstallMode');
					var SyncStatus = window.SyncStatus = cordovaVar('SyncStatus');
					if (codePush) {
						codePush.notifyApplicationReady();
						_view.getController('c1').selectedIndex = 1;
						_view.getChild('n12').asProgress.value = 0;
						codePush.sync(function (status) {
							switch (status) {
								case SyncStatus.ERROR:
									tipon('更新服务暂时不可用').popup();
								case SyncStatus.UP_TO_DATE:
									enterlogin();
							}
						}, { installMode: InstallMode.IMMEDIATE }, function (total, recv) {
							_view.getChild('n13').text = '发现新版本，正在更新';
							_view.getChild('n12').asProgress.value = total > 0 ? recv / total : 0;
						});
						// codePush.sync(function() {}, { updateDialog: true, installMode: InstallMode.IMMEDIATE });
					}
					function quickLogin() {
						try {
							var localUser = JSON.parse(localStorage.getItem('wechatUser'));
						} catch (e) {
							var localUser = null;
						}
						if (localUser) {
							return accWechatIntf('/weixin/ret', { openid: localUser.openid, tokendata: localUser.token, appid: appid }, function (err, r) {
								if (err) return normalLogin();
								entermain(err, r);
							});
						}
						normalLogin();
					}
					function normalLogin() {
						var scope = "snsapi_userinfo",
						    state = "_" + +new Date();
						Wechat.auth(scope, state, function (response) {
							// you may use response.code to get the access token.
							_view.getChild('n7').visible = false;
							fairygui.GRoot.inst.showModalWait();
							accWechatIntf('/weixin/ret', { code: response.code, appid: appid }, entermain);
						}, function (reason) {
							tipon(reason).popup();
						});
					}
					function entermain(err, r) {
						localStorage.setItem('wechatUser', JSON.stringify(r));
						fairygui.GRoot.inst.closeModalWait();
						if (err) {
							_view.getChild('n7').visible = true;
							return tipon('服务器未启动').popup();
						}

						main(r);
					}
					function enterlogin() {
						_view.getController('c1').selectedIndex = 0;
						_view.getChild('n7').onClick(null, function () {
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
		}]);

		return Page;
	}();

	function regAppIntf() {
		var appleProducts = { '15': 'apple.niuniu.5tickets', '30': 'apple.niuniu.10tickets', '150': 'apple.niuniu.50tickets' };
		var actureMoney = { '15': 18, '30': 30, '150': '148' };
		function inappPurchase(orderid, money, desc, cb) {
			tongji.beginCharge(orderid, actureMoney[money], Math.floor(money / 3), desc, '苹果商店支付');
			inAppPurchase.buy(appleProducts[money]).then(function (data) {
				inAppPurchase.consume(data.productType, data.receipt, data.signature);
				data.orderid = orderid;
				data.actureMoney = actureMoney[money];
				getAjax('/i/niuniu.app/pay/apple', data, function (err) {
					if (err) return tipon(err).popup();else tipon('购买成功').popup();
					tongji.endCharge(orderid, '苹果商店支付');
				});
			}).catch(function (err) {
				console.log(err);tipon('购买失败' + err.errorMessage).popup();
			});
		}
		function wxPay(orderid, money, desc, cb) {
			!cb && (cb = _noop);
			tongji.beginCharge(orderid, money, desc, '微信app支付');
			accWechatIntf('/weixin/getWechatpayParams', { appid: appid, order: orderid, money: money, openid: startup_param.openid }, function (err, r) {
				if (err) return tipon(err.toString()).popup();
				Wechat.sendPaymentRequest(r, function () {
					tipon('支付成功').popup();
					tongji.endCharge(orderid, '微信app支付');
				}, function (reason) {
					tipon("失败: " + reason).popup();
				});
			});
		}
		if (!!window.cordova && device.platform == 'iOS') window.pay = inappPurchase;else window.pay = wxPay;

		function toRuleString(rule) {
			var str = '';
			rule['10'] && (str += '五小牛 ');
			rule['7'] && (str += '四炸牛 ');
			rule['5'] && (str += '五花牛 ');
			rule['4'] && (str += '四花牛 ');
			if (str.length == 0) str = '不带牛牛以上的牌型';else str = '带' + str;
			return str;
		}

		window.preInvite = function (v, opt) {
			//inviteMsg={v:v, opt:opt};
			var shareObj = {
				title: '牛牛大作战，房号:' + v + '(' + opt.pan + '局)',
				description: '轮庄，' + toRuleString(opt.rule) + ', ' + opt.dizhu + '底！',
				thumb: 'www/logo.png',
				mediaTagName: "logo",
				media: {
					type: Wechat.Type.WEBPAGE,
					webpageUrl: shareUrl + '?room=' + v
				}
			};
			window.invite = function () {
				Wechat.share({
					message: shareObj,
					scene: Wechat.Scene.SESSION // share to chatwindow
				}, function () {
					tongji.invite(v, '轮庄，' + toRuleString(opt.rule) + ', ' + opt.dizhu + '底！');
				}, function (reason) {
					//tipon("失败: " + reason).popup();
				});
			};
		};

		window.preShareResult = function (roomid, setnum, participants, winners, img) {
			var shareObj = {
				title: '牛牛大作战，房号:' + v + (setnum != null ? ', 第' + setnum + '局' : ''),
				description: (participants || []).join(',') + ' 胜利者 ' + (winners || []).join(','),
				media: {
					type: Wechat.Type.IMAGE,
					image: img
				}
			};
			window.share = function () {
				Wechat.share({
					message: shareObj,
					scene: Wechat.Scene.SESSION // share to chatwindow
				}, function () {
					tongji.share();
				}, function (reason) {
					//tipon("失败: " + reason).popup();
				});
			};
		};
	}

	module.exports = Page.create;

/***/ },

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Stat = function () {
		function Stat() {
			_classCallCheck(this, Stat);

			TalkingDataGA.onStart('589819C1081F43868F6D16D1C5D9A98C', device.platform);
		}

		_createClass(Stat, [{
			key: 'userin',
			value: function userin(me) {
				var account = TalkingDataGA.getAccount(me.id);
				account.setLevel(me.level);
				acount.setAccountName(me.nickname);
				account.setGameServer('通用');
				account.setGender(TDGAGender.kGenderMale);
			}
		}, {
			key: 'levelup',
			value: function levelup(n) {
				TalkingDataGA.Account.setLevel(n);
			}
		}, {
			key: 'reward',
			value: function reward(n, reason) {
				TDGAVirtualCurrency.onReward(n, reason);
			}
		}, {
			key: 'beginCharge',
			value: function beginCharge(orderid, money, tickets, desc, payment) {
				if (typeof tickets == 'string') {
					payment = desc;
					desc = tickets;
					tickets = Math.floor(money / 3);
				}
				TDGAVirtualCurrency.onChargeRequest(orderid, desc, money, 'CNY', tickets, payment);
			}
		}, {
			key: 'endCharge',
			value: function endCharge(orderid) {
				TDGAVirtualCurrency.onChargeSuccess(orderid);
			}
		}, {
			key: 'startGame',
			value: function startGame(tableid, name, tickets) {
				TDGAItem.onUse(name, tickets);
			}
		}, {
			key: 'enterGame',
			value: function enterGame(tableid) {
				TDGAMission.onBegin(tableid.toString());
			}
		}, {
			key: 'endGame',
			value: function endGame(tableid) {
				TDGAMission.onCompleted(tableid.toString());
			}
		}, {
			key: 'share',
			value: function share() {
				TalkingDataGA.onEvent('share', { user: { id: me.id, nickname: me.nickname } });
			}
		}, {
			key: 'invite',
			value: function invite(tableid, tabledesc) {
				TalkingDataGA.onEvent('invite', { user: { id: me.id, nickname: me.nickname }, table: { id: tableid, msg: tabledesc } });
			}
		}, {
			key: 'event',
			value: function event(name, data) {
				TalkingDataGA.onEvent(name, (typeof data === 'undefined' ? 'undefined' : _typeof(data)) == 'object' ? data : { data: data });
			}
		}]);

		return Stat;
	}();

	module.export = new Stat();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }

});