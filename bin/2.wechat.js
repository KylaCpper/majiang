webpackJsonp([2],{

/***/ 27:
/***/ function(module, exports) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function noop() {}
	var TDGA = TDGA;
	if (!TDGA) {
		TDGA = {
			Account: noop, onPageLeave: noop, onReward: noop, onChargeRequest: noop, onChargeSuccess: noop, onMissionBegin: noop, onItemPurchase: noop, onMissionCompleted: noop, onEvent: noop
		};
		TDGA.Account.setLevel = noop;
	}

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
			title: '萌狼杀，房间号:' + v,
			//link: 'http://a.mlinks.cc/AaIu?room='+v,
			link: 'http://h5.1357g.com/h/wolf.app?room=' + v,
			imgUrl: location.origin + location.pathname + 'res/logo.png'
		};
		window.wechatObj.shareOnChat(shareObj);
		window.wechatObj.shareOnMoment(shareObj);

		window.invite = function () {
			var tip = '点击' + (Laya.stage.canvasDegree == 0 ? '右' : '左') + '上角分享按钮，邀请好友加入游戏';
			tipon(tip).popup();
			// tongji.invite(v, '轮庄，'+toRuleString(opt.rule)+', '+opt.dizhu+'底！');
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
			title: '萌狼杀，房号:' + roomid + (setnum != null ? ', 第' + setnum + '局' : ''),
			link: 'http://h5.1357g.com/h/wolf.app?room=' + roomid,
			//link:'http://h5.1357g.com/wnn/res244.jpg',
			imgUrl: img
		};
		window.wechatObj.shareOnChat(shareObj);
		window.wechatObj.shareOnMoment(shareObj);
	};
	window.pay = function (orderid, money, desc, cb, callback) {
		!cb && (cb = _noop);
		tongji.beginCharge(orderid, money, desc, '微信公众号支付');
		accWechatIntf('/weixin/getWechatpayParams', { order: orderid, money: money, openid: startup_param.openid }, function (err, r) {
			if (err || r.err) {
				callback();
				return tipon(err || r.err).popup();
			}
			r.success = function (res) {
				if (res.errMsg == "chooseWXPay:ok") {
					tongji.endCharge(orderid, '微信公众号支付');
					cb(null, true);
				} else {
					cb(null, false);
				}
			};
			r.complete = function () {
				callback();
			};
			wx.chooseWXPay(r);
		});
	};
	var async = __webpack_require__(18);
	var wxq = async.queue(function (task, cb) {
		if (typeof task == 'function') return task(cb);
		cb();
	});
	var wxr = { starting: false, stopping: false };
	function wxst(cb) {
		// window.log && window.log('stoping rec');
		function tryStop(_cb) {
			wx.stopRecord({
				success: function success(res) {
					// window.log && window.log('rec stopped');
					_cb(null, res);
				},
				fail: function fail(err) {
					// window.log && window.log('rec stop failed');
					_cb(err);
				}
			});
		}
		var timeoutVer = async.timeout(tryStop, 800);
		timeoutVer(cb);
	}
	window.startRecord = function (cb) {
		if (wxr.starting) return cb(wxr.starting);
		wxr.starting = true;
		wxq.push([
		// 先停下来
		// wxst, 
		// 再开始
		function (_cb) {
			// window.log && window.log('starting rec');
			wx.startRecord({
				fail: function fail(err) {
					// window.log&&  window.log('rec start failed');
					cb(err);
					cb = null;
				},
				sucess: function sucess() {
					// window.log && window.log('rec started');
				}
			});
			_cb();
		},
		// 保证500ms之后才能调用其它的
		function (_cb) {
			setTimeout(_cb, 500);
		}, function (_cb) {
			wxr.starting = false;
			cb && cb(wxr.starting);
			_cb();
		}]);
	};
	window.stopRecord = function (cb) {
		if (wxr.stopping) return cb('already stopping');
		wxr.stopping = true;
		wxq.push(wxst, function (err, res) {
			wxr.stopping = false;
			if (!cb) return;
			if (err) return cb(err);
			window.sendRecord(res.localId, cb);
		});
		// wx.stopRecord({
		// 	success: function (res) {
		// 		cb && window.sendRecord(res.localId, cb);
		// 	}
		// });
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
				// console.log(res);
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
			title: '萌狼杀',
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
		wx.stopRecord();

		// window.startRecord(function() {

		// });
		// window.stopRecord(function() {

		// });

		_init();
	};

	accWechatIntf('weixin/sign', {}, function (err, conf) {
		if (err) {
			if (!window._wxErr) window._wxErr = [err];else window._wxErr.push(err);
			return; //console.log(err);
		}
		var WechatJSSDK = __webpack_require__(30);
		conf.jsApiList = ['onMenuShareTimeline', 'onMenuShareAppMessage', 'startRecord', 'stopRecord', 'onVoiceRecordEnd', 'playVoice', 'pauseVoice', 'stopVoice', 'onVoicePlayEnd', 'uploadVoice', 'downloadVoice'];
		conf.success = function () {
			window.wxInit && window.wxInit();
		};
		conf.error = function (err) {
			if (!window._wxErr) window._wxErr = [err];else window._wxErr.push(err);
			alert('signerr' + err);
		};
		var wechatObj = window.wechatObj = new WechatJSSDK(conf);
	});

/***/ },

/***/ 30:
/***/ function(module, exports) {

	/*!
	 * @license MIT
	 * Client side js to use wechat-jssdk, also works with other server side service.
	 * https://github.com/JasonBoy/wechat-jssdk
	 */

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var document = window.document;
	var location = window.location;

	//default wechat script url
	var defaultScriptUrl = location.protocol + '//res.wx.qq.com/open/js/jweixin-1.0.0.js';

	//default apis with share-on-moment and share-on-chat
	var defaultApiList = ['onMenuShareTimeline', 'onMenuShareAppMessage'];

	var WechatJSSDK = function () {
	  /**
	   * Initialize the WechatJSSDK instance
	   * @constructor
	   * @param {object} wechatConfig, should contain like:
	   *   {
	   *      appId: 'xxxx',
	   *      timestamp: '',
	   *      nonceStr: '',
	   *      signature: '',
	   *      jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', ...],
	   *      success: function(){}, //sign success callback
	   *      error: function(){}, //sign error callback
	   *      customUrl: 'http://res.wx.qq.com/open/js/jweixin-1.0.0.js' // set custom weixin script url
	   *   }
	   * @returns {WechatJSSDK}
	   */
	  function WechatJSSDK(wechatConfig) {
	    _classCallCheck(this, WechatJSSDK);

	    //using new WechatJSSDK(config);
	    if (this instanceof WechatJSSDK) {
	      this.config = wechatConfig || {};
	      if (this.config.customUrl) {
	        defaultScriptUrl = this.config.customUrl;
	        delete this.config.customUrl;
	      }
	      var apiList = this.config.jsApiList;
	      //add more apis if passed in
	      if (!apiList || apiList.length <= 0) {
	        this.config.jsApiList = defaultApiList;
	      } else {
	        var i = 0;
	        var length = defaultApiList.length;
	        for (; i < length; i++) {
	          var defaultItem = defaultApiList[i];
	          if (apiList.indexOf(defaultItem) < 0) {
	            apiList.push(defaultItem);
	          }
	        }
	      }
	      this.debug = !!this.config.debug;
	      this.loadScript();
	      return this;
	    }
	    return new WechatJSSDK(wechatConfig);
	  }

	  /**
	   * Sign the signature now
	   * @param {object} [newSignConfig], debug mode, appId, jsApiList cannot be changed!!!
	   *        , should only provide new signature specific config
	   * @returns {WechatJSSDK} sdk instance
	   */


	  _createClass(WechatJSSDK, [{
	    key: 'signSignature',
	    value: function signSignature(newSignConfig) {
	      var _this = this;

	      var selfConfig = this.config;
	      var config = newSignConfig || selfConfig;
	      var signConfig = {
	        debug: this.debug,
	        appId: selfConfig.appId,
	        timestamp: config.timestamp || selfConfig.timestamp,
	        nonceStr: config.nonceStr || selfConfig.nonceStr,
	        signature: config.signature || selfConfig.signature,
	        jsApiList: selfConfig.jsApiList.slice(0, selfConfig.jsApiList.length)
	      };
	      var debug = this.debug;
	      if (!window.wx) {
	        console.warn('wechat js not defined');
	        return this;
	      }
	      var wx = window.wx;
	      wx.config(signConfig);
	      wx.ready(function () {
	        console.log('sign signature finished...');
	        debug && alert('sign signature finished...');
	        config.success && config.success.call(_this);
	      });

	      wx.error(function (err) {
	        debug && alert('sign error: ' + JSON.stringify(err));
	        config.error && config.error.call(_this, err);
	      });

	      //export original wx object
	      this.wx || (this.wx = wx);
	      return this;
	    }
	  }, {
	    key: 'loadScript',


	    /**
	     * Load wechat js script and sign the signature
	     * @returns {WechatJSSDK}
	     */
	    value: function loadScript() {
	      var _this2 = this;

	      var ele = document.createElement('script');
	      ele.type = 'text\/javascript';
	      ele.async = true;
	      ele.onload = function () {
	        console.log('Wechat script loaded successfully!');
	        //init the wechat config
	        _this2.signSignature();
	      };
	      ele.onerror = function (err) {
	        console.error('Failed to load wechat script!');
	        console.error(err);
	        _this2.debug && alert('Cannot load wechat script!');
	      };
	      var linkEle = document.getElementsByTagName('script')[0];
	      linkEle.parentNode.insertBefore(ele, linkEle);
	      ele.src = defaultScriptUrl;
	      return this;
	    }
	  }, {
	    key: 'shareOnMoment',


	    /**
	     * Quick way to set custom moment share configs
	     * @param {object} info
	     * @returns {WechatJSSDK}
	     */
	    value: function shareOnMoment(info) {
	      if (!info) return this;
	      return this.callWechatApi('onMenuShareTimeline', info);
	    }
	  }, {
	    key: 'shareOnChat',


	    /**
	     * Quick way to set custom chat share configs
	     * @param {object} info
	     * @returns {WechatJSSDK}
	     */
	    value: function shareOnChat(info) {
	      if (!info) return this;
	      return this.callWechatApi('onMenuShareAppMessage', info);
	    }
	  }, {
	    key: 'callWechatApi',


	    /**
	     * Call any wechat api
	     * @param {string} apiName
	     * @param {object} config specific api config
	     * @returns {WechatJSSDK}
	     */
	    value: function callWechatApi(apiName, config) {
	      if (!apiName) return this;
	      var debug = this.debug;
	      if (this.config.jsApiList.indexOf(apiName) < 0) {
	        debug && alert('the wechat api [' + apiName + '] you call was not registered, \npls add the api into your [jsApiList] config');
	        return this;
	      }
	      var customAPI = this.wx[apiName];
	      if (!customAPI || 'function' !== typeof customAPI) {
	        debug && alert('no such api [' + apiName + '] found!');
	        return this;
	      }
	      customAPI(config);
	      return this;
	    }
	  }]);

	  return WechatJSSDK;
	}();

	module.exports = WechatJSSDK;

/***/ }

});