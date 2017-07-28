webpackJsonp([1],{

/***/ 26:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var tongji = window.tongji = __webpack_require__(27);

	function _noop() {}
	// function getAjax(url, data, callback) {
	// 	if (typeof data ==='function') {
	// 		callback =data;
	// 		data=null;
	// 	}
	// 	if (!callback) callback=function(){};
	// 	$.ajax({
	// 		type: "POST",
	// 		url: url,
	// 		dataType: "JSON",
	// 		data: data,
	// 		timeout:30000,
	// 		success: function (chunk) {
	// 			return callback(null, chunk);
	// 		},
	// 		error: function (e) {
	// 			//if (typeof console == "object") console.log(e);
	// 			callback(e);
	// 		}
	// 	})
	// }
	window.pay = function (orderid, money, desc, cb) {
		!cb && (cb = _noop);
		if (tipon) {
			tongji.beginCharge(orderid, money, desc, '测试通道');
			return getAjax('pf/default/pay', { orderid: orderid, money: money }, function (err, r) {
				if (err) return tipon(err.responseText).popup(cb);
				tipon('测试版，直接为您增加房卡').popup(cb);
				tongji.endCharge(orderid, '测试通道');
			});
		}
		cb();
	};
	window.share = function () {
		console.log('share');
	};
	window.preShareResult = function (roomid, setnum, participants, winners, img) {
		console.log('shareContent', arguments);
	};

/***/ },

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

/***/ }

});