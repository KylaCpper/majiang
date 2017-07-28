webpackJsonp([2],{

/***/ 27:
/***/ function(module, exports) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function noop() {}

	var Stat = function () {
		function Stat() {
			_classCallCheck(this, Stat);

			this._delayOp = [];
			this._inited = true;
		}

		_createClass(Stat, [{
			key: "init",
			value: function init(key) {
				this._inited = true;
				return;
				var self = this;
				loadScript('http://sdk.talkingdata.com/g/h5/v1/' + key, function (err) {
					self._inited = true;
					for (var i = 0, l = self._delayOp.length; i < l; i++) {
						var op = self._delayOp[i];
						op.f.apply(self, op.p);
					}
				});
			}
		}, {
			key: "_delay",
			value: function _delay(f) {
				if (!this._inited) {
					return this._delayOp.push({ f: f });
				}
				f();
			}
		}, {
			key: "userin",
			value: function userin(me) {
				this._delay(function () {
					var qudao = 0;
					if (!!window.cordova) {
						var o = { "Android": 1, "BlackBerry 10": 2, "browser": 3, "iOS": 4, "WinCE": 5, "Tizen": 6, "Mac OS X": 7 };
						qudao = o[device.platform] || 8;
					} else if (startup_param.pf == 'wechat') qudao = 101;
					TDGA.Account({
						accountId: me.id,
						level: me.level,
						accountName: me.nickname,
						gameServer: '通用',
						accountType: qudao,
						gender: startup_param.sex
					});
				});
			}
		}, {
			key: "userout",
			value: function userout() {
				this._delay(TDGA.onPageLeave.bind(TDGA));
			}
		}, {
			key: "levelup",
			value: function levelup(n) {
				this._delay(TDGA.Account.setLevel.bind(TDGA.Account, n));
			}
		}, {
			key: "reward",
			value: function reward(n, reason) {
				this._delay(TDGA.onReward.bind(TDGA, n, reason));
			}
		}, {
			key: "beginCharge",
			value: function beginCharge(orderid, money, tickets, desc, payment) {
				if (typeof tickets == 'string') {
					payment = desc;
					desc = tickets;
					tickets = Math.floor(money / 3);
				}
				this._delay(function () {
					TDGA.onChargeRequest({
						orderId: orderid,
						iapId: desc,
						currencyAmount: money,
						currencyType: 'CNY',
						virtualCurrencyAmount: tickets,
						paymentType: payment
					});
				});
			}
		}, {
			key: "endCharge",
			value: function endCharge(orderid, payment) {
				this._delay(function () {
					TDGA.onChargeSuccess({
						orderId: orderid,
						paymentType: payment
					});
				});
			}
		}, {
			key: "enterGame",
			value: function enterGame(tableid) {
				this._delay(function () {
					TDGA.onMissionBegin(tableid.toString());
				});
			}
		}, {
			key: "startGame",
			value: function startGame(tableid, name, tickets) {
				this._delay(function () {
					TDGA.onItemPurchase({ item: name, itemNumber: 1, priceInVirtualCurrency: tickets });
				});
			}
		}, {
			key: "endGame",
			value: function endGame(tableid) {
				this._delay(function () {
					TDGA.onMissionCompleted(tableid.toString());
				});
			}
		}, {
			key: "share",
			value: function share() {
				this._delay(function () {
					TDGA.onEvent('share', { user: { id: me.id, nickname: me.nickname } });
				});
			}
		}, {
			key: "invite",
			value: function invite(tableid, tabledesc) {
				this._delay(function () {
					TDGA.onEvent('invite', { user: { id: me.id, nickname: me.nickname }, table: { id: tableid, msg: tabledesc } });
				});
			}
		}, {
			key: "event",
			value: function event(name, data) {
				this._delay(function () {
					TDGA.onEvent(name, (typeof data === "undefined" ? "undefined" : _typeof(data)) == 'object' ? data : { data: data });
				});
			}
		}]);

		return Stat;
	}();

	var tongji = new Stat();
	window.onunload = tongji.userout;

	module.exports = tongji;

/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var tongji = window.tongji = __webpack_require__(27);
	function _noop() {}
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
		if (!window.wechatObj) return;

		var shareObj = {
			type: 'link',
			title: '牛牛大作战，房号:' + v + '(' + opt.pan + '局)',
			link: 'http://a.mlinks.cc/AaIu?room=' + v,
			//link:'http://h5.1357g.com/wnn/res244.jpg',
			imgUrl: location.origin + location.pathname + 'res/logo.png',
			//dataUrl:'http://h5.1357g.com/wnn/res244.jpg',
			desc: '轮庄，' + toRuleString(opt.rule) + ', ' + opt.dizhu + '底！'
		};
		window.wechatObj.shareOnChat(shareObj);
		window.wechatObj.shareOnMoment(shareObj);

		window.invite = function () {
			var tip = '点击' + (Laya.stage.canvasDegree == 0 ? '右' : '左') + '上角分享按钮，邀请好友加入游戏';
			tipon(tip).popup();
			tongji.invite(v, '轮庄，' + toRuleString(opt.rule) + ', ' + opt.dizhu + '底！');
		};
	};
	window.invite = function () {
		var tip = '点击' + (Laya.stage.canvasDegree == 0 ? '右' : '左') + '上角分享按钮，邀请好友加入游戏';
		tipon(tip).popup();
	};
	window.share = function () {
		var tip = '点击' + (Laya.stage.canvasDegree == 0 ? '右' : '左') + '上角分享按钮，分享到朋友圈';
		tipon(tip).popup();
		tongji.share();
	};
	window.preShareResult = function (roomid, setnum, participants, winners, img) {
		var shareObj = {
			type: 'link',
			title: '牛牛大作战，房号:' + roomid + (setnum != null ? ', 第' + setnum + '局' : ''),
			link: img,
			//link:'http://h5.1357g.com/wnn/res244.jpg',
			imgUrl: img,
			//dataUrl:'http://h5.1357g.com/wnn/res244.jpg',
			desc: (participants || []).join(',') + ' 胜利者 ' + (winners || []).join(',')
		};
		window.wechatObj.shareOnChat(shareObj);
		window.wechatObj.shareOnMoment(shareObj);
	};
	window.pay = function (orderid, money, desc, cb) {
		!cb && (cb = _noop);
		tongji.beginCharge(orderid, money, desc, '微信公众号支付');
		accWechatIntf('/weixin/getWechatpayParams', { order: orderid, money: money, openid: startup_param.openid }, function (err, r) {
			if (err || r.err) return tipon(err || r.err).popup();
			r.success = function (res) {
				if (res.errMsg == "chooseWXPay:ok") {
					tongji.endCharge(orderid, '微信公众号支付');
					cb(null, true);
				} else {
					cb(null, false);
				}
			};
			wx.chooseWXPay(r);
		});
	};
	window.startRecord = function () {
		wx.startRecord();
	};
	window.stopRecord = function (cb) {
		wx.stopRecord({
			success: function success(res) {
				cb && window.sendRecord(res.localId, cb);
			}
		});
	};
	window.sendRecord = function (token, cb) {
		wx.uploadVoice({
			localId: token, // 需要上传的音频的本地ID，由stopRecord接口获得
			isShowProgressTips: 0, // 默认为1，显示进度提示
			success: function success(res) {
				var serverId = res.serverId; // 返回音频的服务器端ID
				cb(null, serverId);
			}
		});
	};
	var sndMap = {};
	window.playRecord = function (token, cb) {
		wx.downloadVoice({
			serverId: token, // 需要下载的音频的服务器端ID，由uploadVoice接口获得
			isShowProgressTips: 0, // 默认为1，显示进度提示
			success: function success(res) {
				var localId = res.localId; // 返回音频的本地ID
				wx.playVoice({ localId: localId });
				sndMap[localId] = { cb: cb, t: new Date() };
			}
		});
	};

	function _init() {
		wx.onVoicePlayEnd({
			success: function success(res) {
				var o = sndMap[res.localId];
				console.log(res);
				if (typeof o.cb === 'function') {
					o.cb();
					delete sndMap[res.localId];
				}
			}
		});

		setInterval(function () {
			var now = new Date();
			for (var i in sndMap) {
				var o = sndMap[i];
				if (now - o.t >= 3000) {
					o.cb && o.cb();
					delete sndMap[i];
				}
			}
		}, 3000);
	}

	window.wxInit = function () {
		var shareObj = {
			type: 'link',
			title: '牛牛大作战，大家来斗牛',
			link: location.origin + location.pathname,
			imgUrl: location.origin + location.pathname + 'res/logo.png',
			desc: ''
			//success: function (){},
			//cancel: function (){}		
		};
		try {
			window.wechatObj.shareOnChat(shareObj);
			window.wechatObj.shareOnMoment(shareObj);
		} catch (e) {
			console.log(e);
		}

		wx.startRecord();
		function tryStop() {
			var _t = setInterval(function () {
				wx.stopRecord({
					success: function success(res) {
						clearInterval(_t);
					}
				});
			}, 300);
		}
		tryStop();

		_init();
	};

/***/ }

});