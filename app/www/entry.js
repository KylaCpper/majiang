/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({"1":"default","2":"wechat"}[chunkId]||chunkId) + ".js?" + {"1":"21c9ecdc430d42daed26","2":"452e50bf59171795c0f9","3":"7665c45963c42962955d","4":"7e6ef0598c546fca0157","5":"3f94f2cef50ffdce0e77","6":"3b51c5c96c39ea6cb6fa"}[chunkId] + "";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	document.title = '麻将';

	var $ = window.$,
	    jquery = $;
	var url = __webpack_require__(1),
	    path = __webpack_require__(8),
	    clone = __webpack_require__(10),
	    qs = __webpack_require__(15),
	    async = __webpack_require__(18),
	    merge = __webpack_require__(21);
	var me = __webpack_require__(22);
	//alert(location.href);
	// for debug
	window.me = me;

	function isInWechat() {

		if (navigator.userAgent.toLowerCase().indexOf('micromessenger') >= 0) {
			return true;
		}
		return false;
	}

	var main = window.main = function (startup_param) {
		var url_option = url.parse(location.href, true),
		    startup_param = window.startup_param = startup_param ? merge(startup_param, url_option.query) : url_option.query;
		var retrytimes = 0;
		// 找出服务器。支持一下方式
		// 直接从网站访问 h5.1357g.com/xxx/
		// 或者从参数制定服务器 file://xxx/index.html?server=[http://]h5.1357g.com/wnn/
		startup_param.server = startup_param.server || window.server;
		if (startup_param.server) {
			if (startup_param.server.indexOf('http') == 0) var spec = url.parse(startup_param.server);else {
				var slot = startup_param.server.split('/');
				var spec = {
					protocol: 'http:',
					host: slot[0],
					pathname: '/'
				};
				for (var i = 1; i < slot.length; i++) {
					spec.pathname = spec.pathname + slot[i] + '/';
				}
			}
			url_option.host = spec.host;
			url_option.pathname = spec.pathname;
			url_option.protocol = spec.protocol;
		}
		var host = url_option.host;
		var regTestIp = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}(?:$|\:[0-9]{1,5}$)/;
		if (!regTestIp.test(host)) {
			var hosts = host.split('.');
			hosts[0] = 'ws';
			host = hosts.join('.');
		}
		if (/\.[^\/\\]+$/.test(url_option.pathname)) {
			url_option._p = path.dirname(url_option.pathname);
		} else url_option._p = url_option.pathname;
		var serverpath = host + url_option._p;
		if (path.extname(url_option.pathname) == '.app') {
			serverpath += '/' + path.basename(url_option.pathname);
		}
		console.log(startup_param);

		var accWechatIntf = window.accWechatIntf = function () {
			window.getAjax = getAjax;
			function getAjax(_url, data, callback) {
				if (typeof data === 'function') {
					callback = data;
					data = null;
				}
				if (!callback) callback = function callback() {};
				if (_url.indexOf('http') != 0) {
					var api = clone(url_option);
					api.pathname = path.resolve(api.pathname, _url);
					api.query = null;
					api.search = '';
					_url = url.format(api);
				}
				$.ajax({
					type: "POST",
					url: _url,
					dataType: "JSON",
					data: data,
					timeout: 30000,
					success: function success(chunk) {
						return callback(null, chunk);
					},
					error: function error(e) {
						//if (typeof console == "object") console.log(e);
						callback(e);
					}
				});
			}
			var wechatApiBase;
			return function accWechatIntf(fn, data, cb) {
				if (wechatApiBase == 'failed') return cb('no wechat intf found');
				if (fn.indexOf('/') == 0) fn = fn.substr(1);
				if (!wechatApiBase) {
					var weixinapi = { protocol: url_option.protocol, host: url_option.host, pathname: '/' }; //clone(url_option);
					//weixinapi.pathname='/';//path.join('/',fn);
					wechatApiBase = url.format(weixinapi);
					return getAjax(url.resolve(wechatApiBase, fn), data, function (err, r) {
						if (err) {
							weixinapi = { protocol: url_option.protocol, host: url_option.host, pathname: url_option._p + '/' };
							//weixinapi.pathname=url_option._p;
							wechatApiBase = url.format(weixinapi);
							getAjax(url.resolve(wechatApiBase, fn), data, function (err, r) {
								if (err) {
									wechatApiBase = 'failed';
									return cb(err);
								}
								cb(r.err, r);
							});
							return;
						}
						return cb(r.err, r);
					});
				}
				getAjax(wechatApiBase + fn, data, cb);
			};
		}();
		if (!window.cordova) {
			if (startup_param.pf) {
				var pf = __webpack_require__(24)("./" + startup_param.pf + '.js');
				//$.getScript('pf/'+startup_param.pf+'.js');
			} else var pf = __webpack_require__(25); //$.getScript('pf/default.js');
			pf(function () {});
		}
		if (startup_param.login) {
			startup_param.c = 'login';startup_param.id = startup_param.login;
		}
		if (startup_param.reg) {
			startup_param.c = 'rol';startup_param.id = startup_param.reg;
		}
		if (startup_param.id || !!window.cordova) {
			if (startup_param.c == null) {
				startup_param.c = 'rol';
			}
			return __webpack_require__.e/* require */(3, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(31), __webpack_require__(32), __webpack_require__(33)]; (function () {
				__webpack_require__.e/* require */(4, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(34), __webpack_require__(35), __webpack_require__(36)]; (function (l, lh, r, f, annie) {

					me.on('inited', function () {
						tongji.userin(me);
					});
					me.on('levelchgd', function () {
						tongji.levelup(me.level);
					});

					var Loader = laya.net.Loader;
					var Handler = laya.utils.Handler;

					var idealRatio = 960 / 540,
					    realRatio = window.innerHeight / window.innerWidth;
					if (idealRatio < realRatio) {
						Laya.init(540, 540 * realRatio, laya.webgl.WebGL);
					} else Laya.init(960 / realRatio, 960, laya.webgl.WebGL);
					Laya.SoundManager.musicMuted = localStorage.getItem('bgm') == 'true';
					Laya.SoundManager.soundMuted = localStorage.getItem('snd') == 'true';

					//laya.utils.Stat.show(0, 0);
					//设置适配模式
					Laya.stage.bgColor = null;
					Laya.stage.scaleMode = "showall";
					Laya.stage.alignH = "center";
					Laya.stage.alignV = "center";
					//设置横竖屏
					Laya.stage.screenMode = "vertical";
					Laya.stage.frameRate = 'mouse';
					Laya.stage.addChild(fairygui.GRoot.inst.displayObject);
					function MsgDispatcher() {
						MsgDispatcher.super(this);
					}
					Laya.class(MsgDispatcher, 'MsgDis', Laya.EventDispatcher);
					window.netmsg = new MsgDispatcher();

					var MyLoader = function (_fairygui$GLoader) {
						_inherits(MyLoader, _fairygui$GLoader);

						function MyLoader() {
							_classCallCheck(this, MyLoader);

							return _possibleConstructorReturn(this, (MyLoader.__proto__ || Object.getPrototypeOf(MyLoader)).call(this));
						}

						_createClass(MyLoader, [{
							key: 'loadExternal',
							value: function loadExternal() {
								fairygui.AssetProxy.inst.load(this._url, Handler.create(this, this.__getResCompleted), null, 'image');
							}
						}]);

						return MyLoader;
					}(fairygui.GLoader);

					fairygui.UIObjectFactory.setLoaderExtension(MyLoader);

					var GlobalWaiting = function (_fairygui$GComponent) {
						_inherits(GlobalWaiting, _fairygui$GComponent);

						function GlobalWaiting() {
							_classCallCheck(this, GlobalWaiting);

							var _this2 = _possibleConstructorReturn(this, (GlobalWaiting.__proto__ || Object.getPrototypeOf(GlobalWaiting)).call(this));

							_this2._obj = null;
							return _this2;
						}

						_createClass(GlobalWaiting, [{
							key: 'constructFromXML',
							value: function constructFromXML(xml) {
								_get(GlobalWaiting.prototype.__proto__ || Object.getPrototypeOf(GlobalWaiting.prototype), 'constructFromXML', this).call(this, xml);
								this.on(laya.events.Event.DISPLAY, this, this.onAddedToStage);
							}
						}, {
							key: 'onAddedToStage',
							value: function onAddedToStage() {
								this.x = (960 - this.initWidth) / 2;
								this.y = (540 - this.initHeight) / 2;
							}
						}]);

						return GlobalWaiting;
					}(fairygui.GComponent);

					var ui = __webpack_require__(37);

					// for debug
					window.ui = ui;

					var wins = __webpack_require__(64);
					var tipon = global.tipon = function (str, opt) {
						return new wins.TipWin(str, opt);
					};
					if (startup_param.id == null) {
						var onDeviceReady = function onDeviceReady() {
							if (window.device.platform === 'iOS') {
								cordova.plugins.iosrtc.registerGlobals();
							}
							StatusBar.hide();
							ui.active('wechat_login', null, function (err, view) {
								window.view = view;
								if (err) return console.log(err);
								view.active && view.active();
							});
						};

						return document.addEventListener('deviceready', onDeviceReady, false);
					} else Laya.loader.load([{ url: __webpack_require__(67), type: laya.net.Loader.BUFFER }], Handler.create(null, function () {
						if (window['splash']) {
							//Laya.stage.removeChild(splash);
							$('body').css('background-color', '#000');
							window['splash'].remove();
							window['splash'] = null;
						}
						Laya.stage.bgColor = '#000';
						fairygui.UIPackage.addPackage('majiang');
						fairygui.UIConfig.globalModalWaiting = fairygui.UIPackage.getItemURL("majiang", "Component2");
						fairygui.UIObjectFactory.setPackageItemExtension(fairygui.UIPackage.getItemURL("majiang", "Component2"), GlobalWaiting);
					}));
					return initnet(startup_param);
				}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
			}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
		}

		if (isInWechat()) {
			accWechatIntf('/weixin/verifyurl', { redirect: location.href }, function (err, r) {
				if (err) return tipon(err.toString()).popup();
				console.log(r);
				location.replace(r.message);
				return;
			});
		}

		function initnet(loginData) {
			var Handler = laya.utils.Handler;
			retrytimes++;
			if (retrytimes > 5) {
				return tipon('网络故障，请检查您的上网设置', Handler.create(null, function (logindata) {
					retrytimes = 0;
					initnet(logindata);
				}, [loginData])).popup();
			}
			if (startup_param.pf == 'wechat') {
				accWechatIntf('weixin/sign', {}, function (err, conf) {
					if (err) return console.log(err);
					var WechatJSSDK = __webpack_require__(30);
					conf.jsApiList = ['onMenuShareTimeline', 'onMenuShareAppMessage', 'startRecord', 'stopRecord', 'onVoiceRecordEnd', 'playVoice', 'pauseVoice', 'stopVoice', 'onVoicePlayEnd', 'uploadVoice', 'downloadVoice'];
					conf.success = function () {
						window.wxInit && window.wxInit();
					};
					var wechatObj = window.wechatObj = new WechatJSSDK(conf);
				});
			}
			console.log('connect to', serverpath);
			var socket = window._socket = new WebSocket('ws://' + serverpath);
			socket.sendp = socket.sendjson = function (data) {
				var str = JSON.stringify(data);
				return this.send(str);
			};
			var msgloop = window.msgloop = async.queue(function (pack, cb) {
				socket.msg(pack);
				cb();
			}, 1);
			socket._spec = { c: [], halted: false };
			socket._resync = function () {
				if (!this._spec.halted) return;
				this._spec.halted = false;
				if (this._spec.c.length == 0) return;
				for (var i = 0, l = this._spec.c.length; i < l; i++) {
					this.onmessage(this._spec.c[i]);
				}
				this._spec.c = [];
			};
			socket.onopen = function () {
				retrytimes = 0;
				console.log('opend', loginData);
				if (!loginData) return tipon('illegal access').popup();
				socket.sendp(loginData);
				// if (loginData.room) {
				// 	var rc=loginData.room;
				// 	delete loginData.room;
				// 	socket.sendp({c:'join', code:rc});
				// }
			};
			socket.onerror = console.log.bind(console);
			socket.onclose = function () {
				this.onmessage({ data: JSON.stringify({ c: 'connectclosed' }) });
			};
			socket.onmessage = function (msg) {
				try {
					var pack = JSON.parse(msg.data);
				} catch (e) {
					return console.log(e, msg.data);
				}
				//console.log('recv', msg);
				if (pack.seq) msgloop.push(pack);else this.msg(pack);
			};
			var _firstsetme = true;
			socket.msg = function (pack) {
				console.log('process', pack);
				if (pack.err) {
					var errmsg = function errmsg(e) {
						if (typeof e == 'string') return e;
						if ((typeof e === 'undefined' ? 'undefined' : _typeof(e)) == 'object') {
							return e.message || e.name || e.toString();
						}
						return e.toString();
					};

					pack.cancelRelogin && (socket.cancelRelogin = true);

					tipon(errmsg(pack.err)).popup();
					return;
				}
				if (pack.user) {
					me._update(pack.user);
				}
				switch (pack.c) {
					case 'lgerr':
					case 'regerr':
					case 'kicked':
						this.cancelRelogin = true;
						tipon((pack.msg || pack.reason) + '，点击屏幕自动重连', { waitHandler: function waitHandler() {
								setTimeout(function () {
									initnet(loginData);
								}, Math.random() * 800 + 200);
							} }).popup();
						break;
					case 'showview':
						var self = this;
						msgloop.pause();
						fairygui.GRoot.inst.showModalWait();
						ui.active(pack.v, pack.opt, function (err, view) {
							fairygui.GRoot.inst.closeModalWait();
							window.view = view;
							if (err) return console.log(err);
							view.active && view.active(pack);
							msgloop.resume();
						});
						break;
					case 'connectclosed':
						console.log('conect closed');
						if (this.cancelRelogin) return;
						setTimeout(function () {
							initnet(loginData);
						}, Math.random() * 800 + 200);
						break;
					default:
						ui.current && ui.current.msg && ui.current.msg(pack);
						netmsg.event(pack.c, [pack]);
				}
			};
		}
	};
	main();
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var punycode = __webpack_require__(2);
	var util = __webpack_require__(4);

	exports.parse = urlParse;
	exports.resolve = urlResolve;
	exports.resolveObject = urlResolveObject;
	exports.format = urlFormat;

	exports.Url = Url;

	function Url() {
	  this.protocol = null;
	  this.slashes = null;
	  this.auth = null;
	  this.host = null;
	  this.port = null;
	  this.hostname = null;
	  this.hash = null;
	  this.search = null;
	  this.query = null;
	  this.pathname = null;
	  this.path = null;
	  this.href = null;
	}

	// Reference: RFC 3986, RFC 1808, RFC 2396

	// define these here so at least they only have to be
	// compiled once on the first module load.
	var protocolPattern = /^([a-z0-9.+-]+:)/i,
	    portPattern = /:[0-9]*$/,

	    // Special case for a simple path URL
	    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

	    // RFC 2396: characters reserved for delimiting URLs.
	    // We actually just auto-escape these.
	    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

	    // RFC 2396: characters not allowed for various reasons.
	    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

	    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
	    autoEscape = ['\''].concat(unwise),
	    // Characters that are never ever allowed in a hostname.
	    // Note that any invalid chars are also handled, but these
	    // are the ones that are *expected* to be seen, so we fast-path
	    // them.
	    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
	    hostEndingChars = ['/', '?', '#'],
	    hostnameMaxLen = 255,
	    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
	    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
	    // protocols that can allow "unsafe" and "unwise" chars.
	    unsafeProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that never have a hostname.
	    hostlessProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that always contain a // bit.
	    slashedProtocol = {
	      'http': true,
	      'https': true,
	      'ftp': true,
	      'gopher': true,
	      'file': true,
	      'http:': true,
	      'https:': true,
	      'ftp:': true,
	      'gopher:': true,
	      'file:': true
	    },
	    querystring = __webpack_require__(5);

	function urlParse(url, parseQueryString, slashesDenoteHost) {
	  if (url && util.isObject(url) && url instanceof Url) return url;

	  var u = new Url;
	  u.parse(url, parseQueryString, slashesDenoteHost);
	  return u;
	}

	Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
	  if (!util.isString(url)) {
	    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
	  }

	  // Copy chrome, IE, opera backslash-handling behavior.
	  // Back slashes before the query string get converted to forward slashes
	  // See: https://code.google.com/p/chromium/issues/detail?id=25916
	  var queryIndex = url.indexOf('?'),
	      splitter =
	          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
	      uSplit = url.split(splitter),
	      slashRegex = /\\/g;
	  uSplit[0] = uSplit[0].replace(slashRegex, '/');
	  url = uSplit.join(splitter);

	  var rest = url;

	  // trim before proceeding.
	  // This is to support parse stuff like "  http://foo.com  \n"
	  rest = rest.trim();

	  if (!slashesDenoteHost && url.split('#').length === 1) {
	    // Try fast path regexp
	    var simplePath = simplePathPattern.exec(rest);
	    if (simplePath) {
	      this.path = rest;
	      this.href = rest;
	      this.pathname = simplePath[1];
	      if (simplePath[2]) {
	        this.search = simplePath[2];
	        if (parseQueryString) {
	          this.query = querystring.parse(this.search.substr(1));
	        } else {
	          this.query = this.search.substr(1);
	        }
	      } else if (parseQueryString) {
	        this.search = '';
	        this.query = {};
	      }
	      return this;
	    }
	  }

	  var proto = protocolPattern.exec(rest);
	  if (proto) {
	    proto = proto[0];
	    var lowerProto = proto.toLowerCase();
	    this.protocol = lowerProto;
	    rest = rest.substr(proto.length);
	  }

	  // figure out if it's got a host
	  // user@server is *always* interpreted as a hostname, and url
	  // resolution will treat //foo/bar as host=foo,path=bar because that's
	  // how the browser resolves relative URLs.
	  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
	    var slashes = rest.substr(0, 2) === '//';
	    if (slashes && !(proto && hostlessProtocol[proto])) {
	      rest = rest.substr(2);
	      this.slashes = true;
	    }
	  }

	  if (!hostlessProtocol[proto] &&
	      (slashes || (proto && !slashedProtocol[proto]))) {

	    // there's a hostname.
	    // the first instance of /, ?, ;, or # ends the host.
	    //
	    // If there is an @ in the hostname, then non-host chars *are* allowed
	    // to the left of the last @ sign, unless some host-ending character
	    // comes *before* the @-sign.
	    // URLs are obnoxious.
	    //
	    // ex:
	    // http://a@b@c/ => user:a@b host:c
	    // http://a@b?@c => user:a host:c path:/?@c

	    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
	    // Review our test case against browsers more comprehensively.

	    // find the first instance of any hostEndingChars
	    var hostEnd = -1;
	    for (var i = 0; i < hostEndingChars.length; i++) {
	      var hec = rest.indexOf(hostEndingChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }

	    // at this point, either we have an explicit point where the
	    // auth portion cannot go past, or the last @ char is the decider.
	    var auth, atSign;
	    if (hostEnd === -1) {
	      // atSign can be anywhere.
	      atSign = rest.lastIndexOf('@');
	    } else {
	      // atSign must be in auth portion.
	      // http://a@b/c@d => host:b auth:a path:/c@d
	      atSign = rest.lastIndexOf('@', hostEnd);
	    }

	    // Now we have a portion which is definitely the auth.
	    // Pull that off.
	    if (atSign !== -1) {
	      auth = rest.slice(0, atSign);
	      rest = rest.slice(atSign + 1);
	      this.auth = decodeURIComponent(auth);
	    }

	    // the host is the remaining to the left of the first non-host char
	    hostEnd = -1;
	    for (var i = 0; i < nonHostChars.length; i++) {
	      var hec = rest.indexOf(nonHostChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }
	    // if we still have not hit it, then the entire thing is a host.
	    if (hostEnd === -1)
	      hostEnd = rest.length;

	    this.host = rest.slice(0, hostEnd);
	    rest = rest.slice(hostEnd);

	    // pull out port.
	    this.parseHost();

	    // we've indicated that there is a hostname,
	    // so even if it's empty, it has to be present.
	    this.hostname = this.hostname || '';

	    // if hostname begins with [ and ends with ]
	    // assume that it's an IPv6 address.
	    var ipv6Hostname = this.hostname[0] === '[' &&
	        this.hostname[this.hostname.length - 1] === ']';

	    // validate a little.
	    if (!ipv6Hostname) {
	      var hostparts = this.hostname.split(/\./);
	      for (var i = 0, l = hostparts.length; i < l; i++) {
	        var part = hostparts[i];
	        if (!part) continue;
	        if (!part.match(hostnamePartPattern)) {
	          var newpart = '';
	          for (var j = 0, k = part.length; j < k; j++) {
	            if (part.charCodeAt(j) > 127) {
	              // we replace non-ASCII char with a temporary placeholder
	              // we need this to make sure size of hostname is not
	              // broken by replacing non-ASCII by nothing
	              newpart += 'x';
	            } else {
	              newpart += part[j];
	            }
	          }
	          // we test again with ASCII char only
	          if (!newpart.match(hostnamePartPattern)) {
	            var validParts = hostparts.slice(0, i);
	            var notHost = hostparts.slice(i + 1);
	            var bit = part.match(hostnamePartStart);
	            if (bit) {
	              validParts.push(bit[1]);
	              notHost.unshift(bit[2]);
	            }
	            if (notHost.length) {
	              rest = '/' + notHost.join('.') + rest;
	            }
	            this.hostname = validParts.join('.');
	            break;
	          }
	        }
	      }
	    }

	    if (this.hostname.length > hostnameMaxLen) {
	      this.hostname = '';
	    } else {
	      // hostnames are always lower case.
	      this.hostname = this.hostname.toLowerCase();
	    }

	    if (!ipv6Hostname) {
	      // IDNA Support: Returns a punycoded representation of "domain".
	      // It only converts parts of the domain name that
	      // have non-ASCII characters, i.e. it doesn't matter if
	      // you call it with a domain that already is ASCII-only.
	      this.hostname = punycode.toASCII(this.hostname);
	    }

	    var p = this.port ? ':' + this.port : '';
	    var h = this.hostname || '';
	    this.host = h + p;
	    this.href += this.host;

	    // strip [ and ] from the hostname
	    // the host field still retains them, though
	    if (ipv6Hostname) {
	      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
	      if (rest[0] !== '/') {
	        rest = '/' + rest;
	      }
	    }
	  }

	  // now rest is set to the post-host stuff.
	  // chop off any delim chars.
	  if (!unsafeProtocol[lowerProto]) {

	    // First, make 100% sure that any "autoEscape" chars get
	    // escaped, even if encodeURIComponent doesn't think they
	    // need to be.
	    for (var i = 0, l = autoEscape.length; i < l; i++) {
	      var ae = autoEscape[i];
	      if (rest.indexOf(ae) === -1)
	        continue;
	      var esc = encodeURIComponent(ae);
	      if (esc === ae) {
	        esc = escape(ae);
	      }
	      rest = rest.split(ae).join(esc);
	    }
	  }


	  // chop off from the tail first.
	  var hash = rest.indexOf('#');
	  if (hash !== -1) {
	    // got a fragment string.
	    this.hash = rest.substr(hash);
	    rest = rest.slice(0, hash);
	  }
	  var qm = rest.indexOf('?');
	  if (qm !== -1) {
	    this.search = rest.substr(qm);
	    this.query = rest.substr(qm + 1);
	    if (parseQueryString) {
	      this.query = querystring.parse(this.query);
	    }
	    rest = rest.slice(0, qm);
	  } else if (parseQueryString) {
	    // no query string, but parseQueryString still requested
	    this.search = '';
	    this.query = {};
	  }
	  if (rest) this.pathname = rest;
	  if (slashedProtocol[lowerProto] &&
	      this.hostname && !this.pathname) {
	    this.pathname = '/';
	  }

	  //to support http.request
	  if (this.pathname || this.search) {
	    var p = this.pathname || '';
	    var s = this.search || '';
	    this.path = p + s;
	  }

	  // finally, reconstruct the href based on what has been validated.
	  this.href = this.format();
	  return this;
	};

	// format a parsed object into a url string
	function urlFormat(obj) {
	  // ensure it's an object, and not a string url.
	  // If it's an obj, this is a no-op.
	  // this way, you can call url_format() on strings
	  // to clean up potentially wonky urls.
	  if (util.isString(obj)) obj = urlParse(obj);
	  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
	  return obj.format();
	}

	Url.prototype.format = function() {
	  var auth = this.auth || '';
	  if (auth) {
	    auth = encodeURIComponent(auth);
	    auth = auth.replace(/%3A/i, ':');
	    auth += '@';
	  }

	  var protocol = this.protocol || '',
	      pathname = this.pathname || '',
	      hash = this.hash || '',
	      host = false,
	      query = '';

	  if (this.host) {
	    host = auth + this.host;
	  } else if (this.hostname) {
	    host = auth + (this.hostname.indexOf(':') === -1 ?
	        this.hostname :
	        '[' + this.hostname + ']');
	    if (this.port) {
	      host += ':' + this.port;
	    }
	  }

	  if (this.query &&
	      util.isObject(this.query) &&
	      Object.keys(this.query).length) {
	    query = querystring.stringify(this.query);
	  }

	  var search = this.search || (query && ('?' + query)) || '';

	  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

	  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
	  // unless they had them to begin with.
	  if (this.slashes ||
	      (!protocol || slashedProtocol[protocol]) && host !== false) {
	    host = '//' + (host || '');
	    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
	  } else if (!host) {
	    host = '';
	  }

	  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
	  if (search && search.charAt(0) !== '?') search = '?' + search;

	  pathname = pathname.replace(/[?#]/g, function(match) {
	    return encodeURIComponent(match);
	  });
	  search = search.replace('#', '%23');

	  return protocol + host + pathname + search + hash;
	};

	function urlResolve(source, relative) {
	  return urlParse(source, false, true).resolve(relative);
	}

	Url.prototype.resolve = function(relative) {
	  return this.resolveObject(urlParse(relative, false, true)).format();
	};

	function urlResolveObject(source, relative) {
	  if (!source) return relative;
	  return urlParse(source, false, true).resolveObject(relative);
	}

	Url.prototype.resolveObject = function(relative) {
	  if (util.isString(relative)) {
	    var rel = new Url();
	    rel.parse(relative, false, true);
	    relative = rel;
	  }

	  var result = new Url();
	  var tkeys = Object.keys(this);
	  for (var tk = 0; tk < tkeys.length; tk++) {
	    var tkey = tkeys[tk];
	    result[tkey] = this[tkey];
	  }

	  // hash is always overridden, no matter what.
	  // even href="" will remove it.
	  result.hash = relative.hash;

	  // if the relative url is empty, then there's nothing left to do here.
	  if (relative.href === '') {
	    result.href = result.format();
	    return result;
	  }

	  // hrefs like //foo/bar always cut to the protocol.
	  if (relative.slashes && !relative.protocol) {
	    // take everything except the protocol from relative
	    var rkeys = Object.keys(relative);
	    for (var rk = 0; rk < rkeys.length; rk++) {
	      var rkey = rkeys[rk];
	      if (rkey !== 'protocol')
	        result[rkey] = relative[rkey];
	    }

	    //urlParse appends trailing / to urls like http://www.example.com
	    if (slashedProtocol[result.protocol] &&
	        result.hostname && !result.pathname) {
	      result.path = result.pathname = '/';
	    }

	    result.href = result.format();
	    return result;
	  }

	  if (relative.protocol && relative.protocol !== result.protocol) {
	    // if it's a known url protocol, then changing
	    // the protocol does weird things
	    // first, if it's not file:, then we MUST have a host,
	    // and if there was a path
	    // to begin with, then we MUST have a path.
	    // if it is file:, then the host is dropped,
	    // because that's known to be hostless.
	    // anything else is assumed to be absolute.
	    if (!slashedProtocol[relative.protocol]) {
	      var keys = Object.keys(relative);
	      for (var v = 0; v < keys.length; v++) {
	        var k = keys[v];
	        result[k] = relative[k];
	      }
	      result.href = result.format();
	      return result;
	    }

	    result.protocol = relative.protocol;
	    if (!relative.host && !hostlessProtocol[relative.protocol]) {
	      var relPath = (relative.pathname || '').split('/');
	      while (relPath.length && !(relative.host = relPath.shift()));
	      if (!relative.host) relative.host = '';
	      if (!relative.hostname) relative.hostname = '';
	      if (relPath[0] !== '') relPath.unshift('');
	      if (relPath.length < 2) relPath.unshift('');
	      result.pathname = relPath.join('/');
	    } else {
	      result.pathname = relative.pathname;
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    result.host = relative.host || '';
	    result.auth = relative.auth;
	    result.hostname = relative.hostname || relative.host;
	    result.port = relative.port;
	    // to support http.request
	    if (result.pathname || result.search) {
	      var p = result.pathname || '';
	      var s = result.search || '';
	      result.path = p + s;
	    }
	    result.slashes = result.slashes || relative.slashes;
	    result.href = result.format();
	    return result;
	  }

	  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
	      isRelAbs = (
	          relative.host ||
	          relative.pathname && relative.pathname.charAt(0) === '/'
	      ),
	      mustEndAbs = (isRelAbs || isSourceAbs ||
	                    (result.host && relative.pathname)),
	      removeAllDots = mustEndAbs,
	      srcPath = result.pathname && result.pathname.split('/') || [],
	      relPath = relative.pathname && relative.pathname.split('/') || [],
	      psychotic = result.protocol && !slashedProtocol[result.protocol];

	  // if the url is a non-slashed url, then relative
	  // links like ../.. should be able
	  // to crawl up to the hostname, as well.  This is strange.
	  // result.protocol has already been set by now.
	  // Later on, put the first path part into the host field.
	  if (psychotic) {
	    result.hostname = '';
	    result.port = null;
	    if (result.host) {
	      if (srcPath[0] === '') srcPath[0] = result.host;
	      else srcPath.unshift(result.host);
	    }
	    result.host = '';
	    if (relative.protocol) {
	      relative.hostname = null;
	      relative.port = null;
	      if (relative.host) {
	        if (relPath[0] === '') relPath[0] = relative.host;
	        else relPath.unshift(relative.host);
	      }
	      relative.host = null;
	    }
	    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
	  }

	  if (isRelAbs) {
	    // it's absolute.
	    result.host = (relative.host || relative.host === '') ?
	                  relative.host : result.host;
	    result.hostname = (relative.hostname || relative.hostname === '') ?
	                      relative.hostname : result.hostname;
	    result.search = relative.search;
	    result.query = relative.query;
	    srcPath = relPath;
	    // fall through to the dot-handling below.
	  } else if (relPath.length) {
	    // it's relative
	    // throw away the existing file, and take the new path instead.
	    if (!srcPath) srcPath = [];
	    srcPath.pop();
	    srcPath = srcPath.concat(relPath);
	    result.search = relative.search;
	    result.query = relative.query;
	  } else if (!util.isNullOrUndefined(relative.search)) {
	    // just pull out the search.
	    // like href='?foo'.
	    // Put this after the other two cases because it simplifies the booleans
	    if (psychotic) {
	      result.hostname = result.host = srcPath.shift();
	      //occationaly the auth can get stuck only in host
	      //this especially happens in cases like
	      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	      var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                       result.host.split('@') : false;
	      if (authInHost) {
	        result.auth = authInHost.shift();
	        result.host = result.hostname = authInHost.shift();
	      }
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    //to support http.request
	    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
	      result.path = (result.pathname ? result.pathname : '') +
	                    (result.search ? result.search : '');
	    }
	    result.href = result.format();
	    return result;
	  }

	  if (!srcPath.length) {
	    // no path at all.  easy.
	    // we've already handled the other stuff above.
	    result.pathname = null;
	    //to support http.request
	    if (result.search) {
	      result.path = '/' + result.search;
	    } else {
	      result.path = null;
	    }
	    result.href = result.format();
	    return result;
	  }

	  // if a url ENDs in . or .., then it must get a trailing slash.
	  // however, if it ends in anything else non-slashy,
	  // then it must NOT get a trailing slash.
	  var last = srcPath.slice(-1)[0];
	  var hasTrailingSlash = (
	      (result.host || relative.host || srcPath.length > 1) &&
	      (last === '.' || last === '..') || last === '');

	  // strip single dots, resolve double dots to parent dir
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = srcPath.length; i >= 0; i--) {
	    last = srcPath[i];
	    if (last === '.') {
	      srcPath.splice(i, 1);
	    } else if (last === '..') {
	      srcPath.splice(i, 1);
	      up++;
	    } else if (up) {
	      srcPath.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (!mustEndAbs && !removeAllDots) {
	    for (; up--; up) {
	      srcPath.unshift('..');
	    }
	  }

	  if (mustEndAbs && srcPath[0] !== '' &&
	      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
	    srcPath.unshift('');
	  }

	  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
	    srcPath.push('');
	  }

	  var isAbsolute = srcPath[0] === '' ||
	      (srcPath[0] && srcPath[0].charAt(0) === '/');

	  // put the host back
	  if (psychotic) {
	    result.hostname = result.host = isAbsolute ? '' :
	                                    srcPath.length ? srcPath.shift() : '';
	    //occationaly the auth can get stuck only in host
	    //this especially happens in cases like
	    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	    var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                     result.host.split('@') : false;
	    if (authInHost) {
	      result.auth = authInHost.shift();
	      result.host = result.hostname = authInHost.shift();
	    }
	  }

	  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

	  if (mustEndAbs && !isAbsolute) {
	    srcPath.unshift('');
	  }

	  if (!srcPath.length) {
	    result.pathname = null;
	    result.path = null;
	  } else {
	    result.pathname = srcPath.join('/');
	  }

	  //to support request.http
	  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
	    result.path = (result.pathname ? result.pathname : '') +
	                  (result.search ? result.search : '');
	  }
	  result.auth = relative.auth || result.auth;
	  result.slashes = result.slashes || relative.slashes;
	  result.href = result.format();
	  return result;
	};

	Url.prototype.parseHost = function() {
	  var host = this.host;
	  var port = portPattern.exec(host);
	  if (port) {
	    port = port[0];
	    if (port !== ':') {
	      this.port = port.substr(1);
	    }
	    host = host.substr(0, host.length - port.length);
	  }
	  if (host) this.hostname = host;
	};


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/punycode v1.3.2 by @mathias */
	;(function(root) {

		/** Detect free variables */
		var freeExports = typeof exports == 'object' && exports &&
			!exports.nodeType && exports;
		var freeModule = typeof module == 'object' && module &&
			!module.nodeType && module;
		var freeGlobal = typeof global == 'object' && global;
		if (
			freeGlobal.global === freeGlobal ||
			freeGlobal.window === freeGlobal ||
			freeGlobal.self === freeGlobal
		) {
			root = freeGlobal;
		}

		/**
		 * The `punycode` object.
		 * @name punycode
		 * @type Object
		 */
		var punycode,

		/** Highest positive signed 32-bit float value */
		maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

		/** Bootstring parameters */
		base = 36,
		tMin = 1,
		tMax = 26,
		skew = 38,
		damp = 700,
		initialBias = 72,
		initialN = 128, // 0x80
		delimiter = '-', // '\x2D'

		/** Regular expressions */
		regexPunycode = /^xn--/,
		regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
		regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

		/** Error messages */
		errors = {
			'overflow': 'Overflow: input needs wider integers to process',
			'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
			'invalid-input': 'Invalid input'
		},

		/** Convenience shortcuts */
		baseMinusTMin = base - tMin,
		floor = Math.floor,
		stringFromCharCode = String.fromCharCode,

		/** Temporary variable */
		key;

		/*--------------------------------------------------------------------------*/

		/**
		 * A generic error utility function.
		 * @private
		 * @param {String} type The error type.
		 * @returns {Error} Throws a `RangeError` with the applicable error message.
		 */
		function error(type) {
			throw RangeError(errors[type]);
		}

		/**
		 * A generic `Array#map` utility function.
		 * @private
		 * @param {Array} array The array to iterate over.
		 * @param {Function} callback The function that gets called for every array
		 * item.
		 * @returns {Array} A new array of values returned by the callback function.
		 */
		function map(array, fn) {
			var length = array.length;
			var result = [];
			while (length--) {
				result[length] = fn(array[length]);
			}
			return result;
		}

		/**
		 * A simple `Array#map`-like wrapper to work with domain name strings or email
		 * addresses.
		 * @private
		 * @param {String} domain The domain name or email address.
		 * @param {Function} callback The function that gets called for every
		 * character.
		 * @returns {Array} A new string of characters returned by the callback
		 * function.
		 */
		function mapDomain(string, fn) {
			var parts = string.split('@');
			var result = '';
			if (parts.length > 1) {
				// In email addresses, only the domain name should be punycoded. Leave
				// the local part (i.e. everything up to `@`) intact.
				result = parts[0] + '@';
				string = parts[1];
			}
			// Avoid `split(regex)` for IE8 compatibility. See #17.
			string = string.replace(regexSeparators, '\x2E');
			var labels = string.split('.');
			var encoded = map(labels, fn).join('.');
			return result + encoded;
		}

		/**
		 * Creates an array containing the numeric code points of each Unicode
		 * character in the string. While JavaScript uses UCS-2 internally,
		 * this function will convert a pair of surrogate halves (each of which
		 * UCS-2 exposes as separate characters) into a single code point,
		 * matching UTF-16.
		 * @see `punycode.ucs2.encode`
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode.ucs2
		 * @name decode
		 * @param {String} string The Unicode input string (UCS-2).
		 * @returns {Array} The new array of code points.
		 */
		function ucs2decode(string) {
			var output = [],
			    counter = 0,
			    length = string.length,
			    value,
			    extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}

		/**
		 * Creates a string based on an array of numeric code points.
		 * @see `punycode.ucs2.decode`
		 * @memberOf punycode.ucs2
		 * @name encode
		 * @param {Array} codePoints The array of numeric code points.
		 * @returns {String} The new Unicode string (UCS-2).
		 */
		function ucs2encode(array) {
			return map(array, function(value) {
				var output = '';
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
				return output;
			}).join('');
		}

		/**
		 * Converts a basic code point into a digit/integer.
		 * @see `digitToBasic()`
		 * @private
		 * @param {Number} codePoint The basic numeric code point value.
		 * @returns {Number} The numeric value of a basic code point (for use in
		 * representing integers) in the range `0` to `base - 1`, or `base` if
		 * the code point does not represent a value.
		 */
		function basicToDigit(codePoint) {
			if (codePoint - 48 < 10) {
				return codePoint - 22;
			}
			if (codePoint - 65 < 26) {
				return codePoint - 65;
			}
			if (codePoint - 97 < 26) {
				return codePoint - 97;
			}
			return base;
		}

		/**
		 * Converts a digit/integer into a basic code point.
		 * @see `basicToDigit()`
		 * @private
		 * @param {Number} digit The numeric value of a basic code point.
		 * @returns {Number} The basic code point whose value (when used for
		 * representing integers) is `digit`, which needs to be in the range
		 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
		 * used; else, the lowercase form is used. The behavior is undefined
		 * if `flag` is non-zero and `digit` has no uppercase form.
		 */
		function digitToBasic(digit, flag) {
			//  0..25 map to ASCII a..z or A..Z
			// 26..35 map to ASCII 0..9
			return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
		}

		/**
		 * Bias adaptation function as per section 3.4 of RFC 3492.
		 * http://tools.ietf.org/html/rfc3492#section-3.4
		 * @private
		 */
		function adapt(delta, numPoints, firstTime) {
			var k = 0;
			delta = firstTime ? floor(delta / damp) : delta >> 1;
			delta += floor(delta / numPoints);
			for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
				delta = floor(delta / baseMinusTMin);
			}
			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
		}

		/**
		 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
		 * symbols.
		 * @memberOf punycode
		 * @param {String} input The Punycode string of ASCII-only symbols.
		 * @returns {String} The resulting string of Unicode symbols.
		 */
		function decode(input) {
			// Don't use UCS-2
			var output = [],
			    inputLength = input.length,
			    out,
			    i = 0,
			    n = initialN,
			    bias = initialBias,
			    basic,
			    j,
			    index,
			    oldi,
			    w,
			    k,
			    digit,
			    t,
			    /** Cached calculation results */
			    baseMinusT;

			// Handle the basic code points: let `basic` be the number of input code
			// points before the last delimiter, or `0` if there is none, then copy
			// the first basic code points to the output.

			basic = input.lastIndexOf(delimiter);
			if (basic < 0) {
				basic = 0;
			}

			for (j = 0; j < basic; ++j) {
				// if it's not a basic code point
				if (input.charCodeAt(j) >= 0x80) {
					error('not-basic');
				}
				output.push(input.charCodeAt(j));
			}

			// Main decoding loop: start just after the last delimiter if any basic code
			// points were copied; start at the beginning otherwise.

			for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

				// `index` is the index of the next character to be consumed.
				// Decode a generalized variable-length integer into `delta`,
				// which gets added to `i`. The overflow checking is easier
				// if we increase `i` as we go, then subtract off its starting
				// value at the end to obtain `delta`.
				for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

					if (index >= inputLength) {
						error('invalid-input');
					}

					digit = basicToDigit(input.charCodeAt(index++));

					if (digit >= base || digit > floor((maxInt - i) / w)) {
						error('overflow');
					}

					i += digit * w;
					t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

					if (digit < t) {
						break;
					}

					baseMinusT = base - t;
					if (w > floor(maxInt / baseMinusT)) {
						error('overflow');
					}

					w *= baseMinusT;

				}

				out = output.length + 1;
				bias = adapt(i - oldi, out, oldi == 0);

				// `i` was supposed to wrap around from `out` to `0`,
				// incrementing `n` each time, so we'll fix that now:
				if (floor(i / out) > maxInt - n) {
					error('overflow');
				}

				n += floor(i / out);
				i %= out;

				// Insert `n` at position `i` of the output
				output.splice(i++, 0, n);

			}

			return ucs2encode(output);
		}

		/**
		 * Converts a string of Unicode symbols (e.g. a domain name label) to a
		 * Punycode string of ASCII-only symbols.
		 * @memberOf punycode
		 * @param {String} input The string of Unicode symbols.
		 * @returns {String} The resulting Punycode string of ASCII-only symbols.
		 */
		function encode(input) {
			var n,
			    delta,
			    handledCPCount,
			    basicLength,
			    bias,
			    j,
			    m,
			    q,
			    k,
			    t,
			    currentValue,
			    output = [],
			    /** `inputLength` will hold the number of code points in `input`. */
			    inputLength,
			    /** Cached calculation results */
			    handledCPCountPlusOne,
			    baseMinusT,
			    qMinusT;

			// Convert the input in UCS-2 to Unicode
			input = ucs2decode(input);

			// Cache the length
			inputLength = input.length;

			// Initialize the state
			n = initialN;
			delta = 0;
			bias = initialBias;

			// Handle the basic code points
			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue < 0x80) {
					output.push(stringFromCharCode(currentValue));
				}
			}

			handledCPCount = basicLength = output.length;

			// `handledCPCount` is the number of code points that have been handled;
			// `basicLength` is the number of basic code points.

			// Finish the basic string - if it is not empty - with a delimiter
			if (basicLength) {
				output.push(delimiter);
			}

			// Main encoding loop:
			while (handledCPCount < inputLength) {

				// All non-basic code points < n have been handled already. Find the next
				// larger one:
				for (m = maxInt, j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue >= n && currentValue < m) {
						m = currentValue;
					}
				}

				// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
				// but guard against overflow
				handledCPCountPlusOne = handledCPCount + 1;
				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
					error('overflow');
				}

				delta += (m - n) * handledCPCountPlusOne;
				n = m;

				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];

					if (currentValue < n && ++delta > maxInt) {
						error('overflow');
					}

					if (currentValue == n) {
						// Represent delta as a generalized variable-length integer
						for (q = delta, k = base; /* no condition */; k += base) {
							t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
							if (q < t) {
								break;
							}
							qMinusT = q - t;
							baseMinusT = base - t;
							output.push(
								stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
							);
							q = floor(qMinusT / baseMinusT);
						}

						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}

				++delta;
				++n;

			}
			return output.join('');
		}

		/**
		 * Converts a Punycode string representing a domain name or an email address
		 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
		 * it doesn't matter if you call it on a string that has already been
		 * converted to Unicode.
		 * @memberOf punycode
		 * @param {String} input The Punycoded domain name or email address to
		 * convert to Unicode.
		 * @returns {String} The Unicode representation of the given Punycode
		 * string.
		 */
		function toUnicode(input) {
			return mapDomain(input, function(string) {
				return regexPunycode.test(string)
					? decode(string.slice(4).toLowerCase())
					: string;
			});
		}

		/**
		 * Converts a Unicode string representing a domain name or an email address to
		 * Punycode. Only the non-ASCII parts of the domain name will be converted,
		 * i.e. it doesn't matter if you call it with a domain that's already in
		 * ASCII.
		 * @memberOf punycode
		 * @param {String} input The domain name or email address to convert, as a
		 * Unicode string.
		 * @returns {String} The Punycode representation of the given domain name or
		 * email address.
		 */
		function toASCII(input) {
			return mapDomain(input, function(string) {
				return regexNonASCII.test(string)
					? 'xn--' + encode(string)
					: string;
			});
		}

		/*--------------------------------------------------------------------------*/

		/** Define the public API */
		punycode = {
			/**
			 * A string representing the current Punycode.js version number.
			 * @memberOf punycode
			 * @type String
			 */
			'version': '1.3.2',
			/**
			 * An object of methods to convert from JavaScript's internal character
			 * representation (UCS-2) to Unicode code points, and back.
			 * @see <https://mathiasbynens.be/notes/javascript-encoding>
			 * @memberOf punycode
			 * @type Object
			 */
			'ucs2': {
				'decode': ucs2decode,
				'encode': ucs2encode
			},
			'decode': decode,
			'encode': encode,
			'toASCII': toASCII,
			'toUnicode': toUnicode
		};

		/** Expose `punycode` */
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return punycode;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (freeExports && freeModule) {
			if (module.exports == freeExports) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = punycode;
			} else { // in Narwhal or RingoJS v0.7.0-
				for (key in punycode) {
					punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.punycode = punycode;
		}

	}(this));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module), (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  isString: function(arg) {
	    return typeof(arg) === 'string';
	  },
	  isObject: function(arg) {
	    return typeof(arg) === 'object' && arg !== null;
	  },
	  isNull: function(arg) {
	    return arg === null;
	  },
	  isNullOrUndefined: function(arg) {
	    return arg == null;
	  }
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.decode = exports.parse = __webpack_require__(6);
	exports.encode = exports.stringify = __webpack_require__(7);


/***/ },
/* 6 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};

	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }

	  var regexp = /\+/g;
	  qs = qs.split(sep);

	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }

	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }

	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;

	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }

	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);

	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }

	  return obj;
	};


/***/ },
/* 7 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;

	    case 'boolean':
	      return v ? 'true' : 'false';

	    case 'number':
	      return isFinite(v) ? v : '';

	    default:
	      return '';
	  }
	};

	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }

	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);

	  }

	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// resolves . and .. elements in a path array with directory names there
	// must be no slashes, empty elements, or device names (c:\) in the array
	// (so also no leading and trailing slashes - it does not distinguish
	// relative and absolute paths)
	function normalizeArray(parts, allowAboveRoot) {
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = parts.length - 1; i >= 0; i--) {
	    var last = parts[i];
	    if (last === '.') {
	      parts.splice(i, 1);
	    } else if (last === '..') {
	      parts.splice(i, 1);
	      up++;
	    } else if (up) {
	      parts.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (allowAboveRoot) {
	    for (; up--; up) {
	      parts.unshift('..');
	    }
	  }

	  return parts;
	}

	// Split a filename into [root, dir, basename, ext], unix version
	// 'root' is just a slash, or nothing.
	var splitPathRe =
	    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
	var splitPath = function(filename) {
	  return splitPathRe.exec(filename).slice(1);
	};

	// path.resolve([from ...], to)
	// posix version
	exports.resolve = function() {
	  var resolvedPath = '',
	      resolvedAbsolute = false;

	  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
	    var path = (i >= 0) ? arguments[i] : process.cwd();

	    // Skip empty and invalid entries
	    if (typeof path !== 'string') {
	      throw new TypeError('Arguments to path.resolve must be strings');
	    } else if (!path) {
	      continue;
	    }

	    resolvedPath = path + '/' + resolvedPath;
	    resolvedAbsolute = path.charAt(0) === '/';
	  }

	  // At this point the path should be resolved to a full absolute path, but
	  // handle relative paths to be safe (might happen when process.cwd() fails)

	  // Normalize the path
	  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
	    return !!p;
	  }), !resolvedAbsolute).join('/');

	  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
	};

	// path.normalize(path)
	// posix version
	exports.normalize = function(path) {
	  var isAbsolute = exports.isAbsolute(path),
	      trailingSlash = substr(path, -1) === '/';

	  // Normalize the path
	  path = normalizeArray(filter(path.split('/'), function(p) {
	    return !!p;
	  }), !isAbsolute).join('/');

	  if (!path && !isAbsolute) {
	    path = '.';
	  }
	  if (path && trailingSlash) {
	    path += '/';
	  }

	  return (isAbsolute ? '/' : '') + path;
	};

	// posix version
	exports.isAbsolute = function(path) {
	  return path.charAt(0) === '/';
	};

	// posix version
	exports.join = function() {
	  var paths = Array.prototype.slice.call(arguments, 0);
	  return exports.normalize(filter(paths, function(p, index) {
	    if (typeof p !== 'string') {
	      throw new TypeError('Arguments to path.join must be strings');
	    }
	    return p;
	  }).join('/'));
	};


	// path.relative(from, to)
	// posix version
	exports.relative = function(from, to) {
	  from = exports.resolve(from).substr(1);
	  to = exports.resolve(to).substr(1);

	  function trim(arr) {
	    var start = 0;
	    for (; start < arr.length; start++) {
	      if (arr[start] !== '') break;
	    }

	    var end = arr.length - 1;
	    for (; end >= 0; end--) {
	      if (arr[end] !== '') break;
	    }

	    if (start > end) return [];
	    return arr.slice(start, end - start + 1);
	  }

	  var fromParts = trim(from.split('/'));
	  var toParts = trim(to.split('/'));

	  var length = Math.min(fromParts.length, toParts.length);
	  var samePartsLength = length;
	  for (var i = 0; i < length; i++) {
	    if (fromParts[i] !== toParts[i]) {
	      samePartsLength = i;
	      break;
	    }
	  }

	  var outputParts = [];
	  for (var i = samePartsLength; i < fromParts.length; i++) {
	    outputParts.push('..');
	  }

	  outputParts = outputParts.concat(toParts.slice(samePartsLength));

	  return outputParts.join('/');
	};

	exports.sep = '/';
	exports.delimiter = ':';

	exports.dirname = function(path) {
	  var result = splitPath(path),
	      root = result[0],
	      dir = result[1];

	  if (!root && !dir) {
	    // No dirname whatsoever
	    return '.';
	  }

	  if (dir) {
	    // It has a dirname, strip trailing slash
	    dir = dir.substr(0, dir.length - 1);
	  }

	  return root + dir;
	};


	exports.basename = function(path, ext) {
	  var f = splitPath(path)[2];
	  // TODO: make this comparison case-insensitive on windows?
	  if (ext && f.substr(-1 * ext.length) === ext) {
	    f = f.substr(0, f.length - ext.length);
	  }
	  return f;
	};


	exports.extname = function(path) {
	  return splitPath(path)[3];
	};

	function filter (xs, f) {
	    if (xs.filter) return xs.filter(f);
	    var res = [];
	    for (var i = 0; i < xs.length; i++) {
	        if (f(xs[i], i, xs)) res.push(xs[i]);
	    }
	    return res;
	}

	// String.prototype.substr - negative index don't work in IE8
	var substr = 'ab'.substr(-1) === 'b'
	    ? function (str, start, len) { return str.substr(start, len) }
	    : function (str, start, len) {
	        if (start < 0) start = str.length + start;
	        return str.substr(start, len);
	    }
	;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 9 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var clone = (function() {
	'use strict';

	var nativeMap;
	try {
	  nativeMap = Map;
	} catch(_) {
	  // maybe a reference error because no `Map`. Give it a dummy value that no
	  // value will ever be an instanceof.
	  nativeMap = function() {};
	}

	var nativeSet;
	try {
	  nativeSet = Set;
	} catch(_) {
	  nativeSet = function() {};
	}

	var nativePromise;
	try {
	  nativePromise = Promise;
	} catch(_) {
	  nativePromise = function() {};
	}

	/**
	 * Clones (copies) an Object using deep copying.
	 *
	 * This function supports circular references by default, but if you are certain
	 * there are no circular references in your object, you can save some CPU time
	 * by calling clone(obj, false).
	 *
	 * Caution: if `circular` is false and `parent` contains circular references,
	 * your program may enter an infinite loop and crash.
	 *
	 * @param `parent` - the object to be cloned
	 * @param `circular` - set to true if the object to be cloned may contain
	 *    circular references. (optional - true by default)
	 * @param `depth` - set to a number if the object is only to be cloned to
	 *    a particular depth. (optional - defaults to Infinity)
	 * @param `prototype` - sets the prototype to be used when cloning an object.
	 *    (optional - defaults to parent prototype).
	*/
	function clone(parent, circular, depth, prototype) {
	  var filter;
	  if (typeof circular === 'object') {
	    depth = circular.depth;
	    prototype = circular.prototype;
	    filter = circular.filter;
	    circular = circular.circular;
	  }
	  // maintain two arrays for circular references, where corresponding parents
	  // and children have the same index
	  var allParents = [];
	  var allChildren = [];

	  var useBuffer = typeof Buffer != 'undefined';

	  if (typeof circular == 'undefined')
	    circular = true;

	  if (typeof depth == 'undefined')
	    depth = Infinity;

	  // recurse this function so we don't reset allParents and allChildren
	  function _clone(parent, depth) {
	    // cloning null always returns null
	    if (parent === null)
	      return null;

	    if (depth === 0)
	      return parent;

	    var child;
	    var proto;
	    if (typeof parent != 'object') {
	      return parent;
	    }

	    if (parent instanceof nativeMap) {
	      child = new nativeMap();
	    } else if (parent instanceof nativeSet) {
	      child = new nativeSet();
	    } else if (parent instanceof nativePromise) {
	      child = new nativePromise(function (resolve, reject) {
	        parent.then(function(value) {
	          resolve(_clone(value, depth - 1));
	        }, function(err) {
	          reject(_clone(err, depth - 1));
	        });
	      });
	    } else if (clone.__isArray(parent)) {
	      child = [];
	    } else if (clone.__isRegExp(parent)) {
	      child = new RegExp(parent.source, __getRegExpFlags(parent));
	      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
	    } else if (clone.__isDate(parent)) {
	      child = new Date(parent.getTime());
	    } else if (useBuffer && Buffer.isBuffer(parent)) {
	      child = new Buffer(parent.length);
	      parent.copy(child);
	      return child;
	    } else {
	      if (typeof prototype == 'undefined') {
	        proto = Object.getPrototypeOf(parent);
	        child = Object.create(proto);
	      }
	      else {
	        child = Object.create(prototype);
	        proto = prototype;
	      }
	    }

	    if (circular) {
	      var index = allParents.indexOf(parent);

	      if (index != -1) {
	        return allChildren[index];
	      }
	      allParents.push(parent);
	      allChildren.push(child);
	    }

	    if (parent instanceof nativeMap) {
	      var keyIterator = parent.keys();
	      while(true) {
	        var next = keyIterator.next();
	        if (next.done) {
	          break;
	        }
	        var keyChild = _clone(next.value, depth - 1);
	        var valueChild = _clone(parent.get(next.value), depth - 1);
	        child.set(keyChild, valueChild);
	      }
	    }
	    if (parent instanceof nativeSet) {
	      var iterator = parent.keys();
	      while(true) {
	        var next = iterator.next();
	        if (next.done) {
	          break;
	        }
	        var entryChild = _clone(next.value, depth - 1);
	        child.add(entryChild);
	      }
	    }

	    for (var i in parent) {
	      var attrs;
	      if (proto) {
	        attrs = Object.getOwnPropertyDescriptor(proto, i);
	      }

	      if (attrs && attrs.set == null) {
	        continue;
	      }
	      child[i] = _clone(parent[i], depth - 1);
	    }

	    if (Object.getOwnPropertySymbols) {
	      var symbols = Object.getOwnPropertySymbols(parent);
	      for (var i = 0; i < symbols.length; i++) {
	        // Don't need to worry about cloning a symbol because it is a primitive,
	        // like a number or string.
	        var symbol = symbols[i];
	        child[symbol] = _clone(parent[symbol], depth - 1);
	      }
	    }

	    return child;
	  }

	  return _clone(parent, depth);
	}

	/**
	 * Simple flat clone using prototype, accepts only objects, usefull for property
	 * override on FLAT configuration object (no nested props).
	 *
	 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
	 * works.
	 */
	clone.clonePrototype = function clonePrototype(parent) {
	  if (parent === null)
	    return null;

	  var c = function () {};
	  c.prototype = parent;
	  return new c();
	};

	// private utility functions

	function __objToStr(o) {
	  return Object.prototype.toString.call(o);
	}
	clone.__objToStr = __objToStr;

	function __isDate(o) {
	  return typeof o === 'object' && __objToStr(o) === '[object Date]';
	}
	clone.__isDate = __isDate;

	function __isArray(o) {
	  return typeof o === 'object' && __objToStr(o) === '[object Array]';
	}
	clone.__isArray = __isArray;

	function __isRegExp(o) {
	  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
	}
	clone.__isRegExp = __isRegExp;

	function __getRegExpFlags(re) {
	  var flags = '';
	  if (re.global) flags += 'g';
	  if (re.ignoreCase) flags += 'i';
	  if (re.multiline) flags += 'm';
	  return flags;
	}
	clone.__getRegExpFlags = __getRegExpFlags;

	return clone;
	})();

	if (typeof module === 'object' && module.exports) {
	  module.exports = clone;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11).Buffer))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */

	'use strict'

	var base64 = __webpack_require__(12)
	var ieee754 = __webpack_require__(13)
	var isArray = __webpack_require__(14)

	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()

	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength()

	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}

	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length)
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length)
	    }
	    that.length = length
	  }

	  return that
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}

	Buffer.poolSize = 8192 // not used by this implementation

	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype
	  return arr
	}

	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }

	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }

	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }

	  return fromObject(that, value)
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	}

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    })
	  }
	}

	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}

	function alloc (that, size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	}

	function allocUnsafe (that, size) {
	  assertSize(size)
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0
	    }
	  }
	  return that
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	}

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }

	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }

	  var length = byteLength(string, encoding) | 0
	  that = createBuffer(that, length)

	  var actual = that.write(string, encoding)

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual)
	  }

	  return that
	}

	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  that = createBuffer(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer

	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }

	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array)
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset)
	  } else {
	    array = new Uint8Array(array, byteOffset, length)
	  }

	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array)
	  }
	  return that
	}

	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    that = createBuffer(that, len)

	    if (that.length === 0) {
	      return that
	    }

	    obj.copy(that, 0, 0, len)
	    return that
	  }

	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }

	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}

	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length
	  var y = b.length

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}

	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }

	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }

	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }

	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}

	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }

	  var len = string.length
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength

	function slowToString (encoding, start, end) {
	  var loweredCase = false

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length
	  }

	  if (end <= 0) {
	    return ''
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0

	  if (end <= start) {
	    return ''
	  }

	  if (!encoding) encoding = 'utf8'

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true

	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}

	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}

	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}

	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}

	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}

	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}

	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}

	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }

	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }

	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0

	  if (this === target) return 0

	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)

	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }

	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }

	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }

	  return -1
	}

	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}

	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}

	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }

	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8'

	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []

	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }

	    res.push(codePoint)
	    i += bytesPerSequence
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}

	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length

	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len

	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end

	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }

	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }

	  if (end < start) end = start

	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end)
	    newBuf.__proto__ = Buffer.prototype
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start]
	    }
	  }

	  return newBuf
	}

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }

	  return val
	}

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }

	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }

	  return val
	}

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }

	  var len = end - start
	  var i

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }

	  return len
	}

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }

	  if (end <= start) {
	    return this
	  }

	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0

	  if (!val) val = 0

	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString())
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }

	  return this
	}

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []

	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }

	    leadSurrogate = null

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }

	  return byteArray
	}

	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}

	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict'

	exports.byteLength = byteLength
	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray

	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i]
	  revLookup[code.charCodeAt(i)] = i
	}

	revLookup['-'.charCodeAt(0)] = 62
	revLookup['_'.charCodeAt(0)] = 63

	function placeHoldersCount (b64) {
	  var len = b64.length
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }

	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
	}

	function byteLength (b64) {
	  // base64 is 4/3 + up to two characters of the original data
	  return b64.length * 3 / 4 - placeHoldersCount(b64)
	}

	function toByteArray (b64) {
	  var i, j, l, tmp, placeHolders, arr
	  var len = b64.length
	  placeHolders = placeHoldersCount(b64)

	  arr = new Arr(len * 3 / 4 - placeHolders)

	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len

	  var L = 0

	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
	    arr[L++] = (tmp >> 16) & 0xFF
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }

	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[L++] = tmp & 0xFF
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }

	  return arr
	}

	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}

	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}

	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var output = ''
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    output += lookup[tmp >> 2]
	    output += lookup[(tmp << 4) & 0x3F]
	    output += '=='
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
	    output += lookup[tmp >> 10]
	    output += lookup[(tmp >> 4) & 0x3F]
	    output += lookup[(tmp << 2) & 0x3F]
	    output += '='
	  }

	  parts.push(output)

	  return parts.join('')
	}


/***/ },
/* 13 */
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]

	  i += d

	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

	  value = Math.abs(value)

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }

	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128
	}


/***/ },
/* 14 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.decode = exports.parse = __webpack_require__(16);
	exports.encode = exports.stringify = __webpack_require__(17);


/***/ },
/* 16 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};

	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }

	  var regexp = /\+/g;
	  qs = qs.split(sep);

	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }

	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }

	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;

	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }

	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);

	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }

	  return obj;
	};

	var isArray = Array.isArray || function (xs) {
	  return Object.prototype.toString.call(xs) === '[object Array]';
	};


/***/ },
/* 17 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;

	    case 'boolean':
	      return v ? 'true' : 'false';

	    case 'number':
	      return isFinite(v) ? v : '';

	    default:
	      return '';
	  }
	};

	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }

	  if (typeof obj === 'object') {
	    return map(objectKeys(obj), function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (isArray(obj[k])) {
	        return map(obj[k], function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);

	  }

	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};

	var isArray = Array.isArray || function (xs) {
	  return Object.prototype.toString.call(xs) === '[object Array]';
	};

	function map (xs, f) {
	  if (xs.map) return xs.map(f);
	  var res = [];
	  for (var i = 0; i < xs.length; i++) {
	    res.push(f(xs[i], i));
	  }
	  return res;
	}

	var objectKeys = Object.keys || function (obj) {
	  var res = [];
	  for (var key in obj) {
	    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
	  }
	  return res;
	};


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module, setImmediate, process) {(function (global, factory) {
	     true ? factory(exports) :
	    typeof define === 'function' && define.amd ? define(['exports'], factory) :
	    (factory((global.async = global.async || {})));
	}(this, (function (exports) { 'use strict';

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	/** `Object#toString` result references. */
	var funcTag = '[object Function]';
	var genTag = '[object GeneratorFunction]';
	var proxyTag = '[object Proxy]';

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto$1.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag || tag == proxyTag;
	}

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	/** Used for built-in method references. */
	var funcProto$1 = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$1 = funcProto$1.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString$1.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype;
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 500;
	var HOT_SPAN = 16;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest$1(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}

	var initialParams = function (fn) {
	    return baseRest$1(function (args /*..., callback*/) {
	        var callback = args.pop();
	        fn.call(this, args, callback);
	    });
	};

	function applyEach$1(eachfn) {
	    return baseRest$1(function (fns, args) {
	        var go = initialParams(function (args, callback) {
	            var that = this;
	            return eachfn(fns, function (fn, cb) {
	                fn.apply(that, args.concat([cb]));
	            }, callback);
	        });
	        if (args.length) {
	            return go.apply(this, args);
	        } else {
	            return go;
	        }
	    });
	}

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	/**
	 * This method returns `undefined`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Util
	 * @example
	 *
	 * _.times(2, _.noop);
	 * // => [undefined, undefined]
	 */
	function noop() {
	  // No operation performed.
	}

	function once(fn) {
	    return function () {
	        if (fn === null) return;
	        var callFn = fn;
	        fn = null;
	        callFn.apply(this, arguments);
	    };
	}

	var iteratorSymbol = typeof Symbol === 'function' && Symbol.iterator;

	var getIterator = function (coll) {
	    return iteratorSymbol && coll[iteratorSymbol] && coll[iteratorSymbol]();
	};

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/** Used for built-in method references. */
	var objectProto$4 = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString$1 = objectProto$4.toString;

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && objectToString$1.call(value) == argsTag;
	}

	/** Used for built-in method references. */
	var objectProto$3 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty$2.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER$1 = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER$1 : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	/** `Object#toString` result references. */
	var argsTag$1 = '[object Arguments]';
	var arrayTag = '[object Array]';
	var boolTag = '[object Boolean]';
	var dateTag = '[object Date]';
	var errorTag = '[object Error]';
	var funcTag$1 = '[object Function]';
	var mapTag = '[object Map]';
	var numberTag = '[object Number]';
	var objectTag = '[object Object]';
	var regexpTag = '[object RegExp]';
	var setTag = '[object Set]';
	var stringTag = '[object String]';
	var weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]';
	var dataViewTag = '[object DataView]';
	var float32Tag = '[object Float32Array]';
	var float64Tag = '[object Float64Array]';
	var int8Tag = '[object Int8Array]';
	var int16Tag = '[object Int16Array]';
	var int32Tag = '[object Int32Array]';
	var uint8Tag = '[object Uint8Array]';
	var uint8ClampedTag = '[object Uint8ClampedArray]';
	var uint16Tag = '[object Uint16Array]';
	var uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/** Used for built-in method references. */
	var objectProto$5 = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString$2 = objectProto$5.toString;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString$2.call(value)];
	}

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	/** Detect free variable `exports`. */
	var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports$1 && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding('util');
	  } catch (e) {}
	}());

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	/** Used for built-in method references. */
	var objectProto$2 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty$1.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/** Used for built-in method references. */
	var objectProto$7 = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$7;

	  return value === proto;
	}

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);

	/** Used for built-in method references. */
	var objectProto$6 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$3 = objectProto$6.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty$3.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	function createArrayIterator(coll) {
	    var i = -1;
	    var len = coll.length;
	    return function next() {
	        return ++i < len ? { value: coll[i], key: i } : null;
	    };
	}

	function createES2015Iterator(iterator) {
	    var i = -1;
	    return function next() {
	        var item = iterator.next();
	        if (item.done) return null;
	        i++;
	        return { value: item.value, key: i };
	    };
	}

	function createObjectIterator(obj) {
	    var okeys = keys(obj);
	    var i = -1;
	    var len = okeys.length;
	    return function next() {
	        var key = okeys[++i];
	        return i < len ? { value: obj[key], key: key } : null;
	    };
	}

	function iterator(coll) {
	    if (isArrayLike(coll)) {
	        return createArrayIterator(coll);
	    }

	    var iterator = getIterator(coll);
	    return iterator ? createES2015Iterator(iterator) : createObjectIterator(coll);
	}

	function onlyOnce(fn) {
	    return function () {
	        if (fn === null) throw new Error("Callback was already called.");
	        var callFn = fn;
	        fn = null;
	        callFn.apply(this, arguments);
	    };
	}

	// A temporary value used to identify if the loop should be broken.
	// See #1064, #1293
	var breakLoop = {};

	function _eachOfLimit(limit) {
	    return function (obj, iteratee, callback) {
	        callback = once(callback || noop);
	        if (limit <= 0 || !obj) {
	            return callback(null);
	        }
	        var nextElem = iterator(obj);
	        var done = false;
	        var running = 0;

	        function iterateeCallback(err, value) {
	            running -= 1;
	            if (err) {
	                done = true;
	                callback(err);
	            } else if (value === breakLoop || done && running <= 0) {
	                done = true;
	                return callback(null);
	            } else {
	                replenish();
	            }
	        }

	        function replenish() {
	            while (running < limit && !done) {
	                var elem = nextElem();
	                if (elem === null) {
	                    done = true;
	                    if (running <= 0) {
	                        callback(null);
	                    }
	                    return;
	                }
	                running += 1;
	                iteratee(elem.value, elem.key, onlyOnce(iterateeCallback));
	            }
	        }

	        replenish();
	    };
	}

	/**
	 * The same as [`eachOf`]{@link module:Collections.eachOf} but runs a maximum of `limit` async operations at a
	 * time.
	 *
	 * @name eachOfLimit
	 * @static
	 * @memberOf module:Collections
	 * @method
	 * @see [async.eachOf]{@link module:Collections.eachOf}
	 * @alias forEachOfLimit
	 * @category Collection
	 * @param {Array|Iterable|Object} coll - A collection to iterate over.
	 * @param {number} limit - The maximum number of async operations at a time.
	 * @param {Function} iteratee - A function to apply to each
	 * item in `coll`. The `key` is the item's key, or index in the case of an
	 * array. The iteratee is passed a `callback(err)` which must be called once it
	 * has completed. If no error has occurred, the callback should be run without
	 * arguments or with an explicit `null` argument. Invoked with
	 * (item, key, callback).
	 * @param {Function} [callback] - A callback which is called when all
	 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
	 */
	function eachOfLimit(coll, limit, iteratee, callback) {
	  _eachOfLimit(limit)(coll, iteratee, callback);
	}

	function doLimit(fn, limit) {
	    return function (iterable, iteratee, callback) {
	        return fn(iterable, limit, iteratee, callback);
	    };
	}

	// eachOf implementation optimized for array-likes
	function eachOfArrayLike(coll, iteratee, callback) {
	    callback = once(callback || noop);
	    var index = 0,
	        completed = 0,
	        length = coll.length;
	    if (length === 0) {
	        callback(null);
	    }

	    function iteratorCallback(err) {
	        if (err) {
	            callback(err);
	        } else if (++completed === length) {
	            callback(null);
	        }
	    }

	    for (; index < length; index++) {
	        iteratee(coll[index], index, onlyOnce(iteratorCallback));
	    }
	}

	// a generic version of eachOf which can handle array, object, and iterator cases.
	var eachOfGeneric = doLimit(eachOfLimit, Infinity);

	/**
	 * Like [`each`]{@link module:Collections.each}, except that it passes the key (or index) as the second argument
	 * to the iteratee.
	 *
	 * @name eachOf
	 * @static
	 * @memberOf module:Collections
	 * @method
	 * @alias forEachOf
	 * @category Collection
	 * @see [async.each]{@link module:Collections.each}
	 * @param {Array|Iterable|Object} coll - A collection to iterate over.
	 * @param {Function} iteratee - A function to apply to each
	 * item in `coll`. The `key` is the item's key, or index in the case of an
	 * array. The iteratee is passed a `callback(err)` which must be called once it
	 * has completed. If no error has occurred, the callback should be run without
	 * arguments or with an explicit `null` argument. Invoked with
	 * (item, key, callback).
	 * @param {Function} [callback] - A callback which is called when all
	 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
	 * @example
	 *
	 * var obj = {dev: "/dev.json", test: "/test.json", prod: "/prod.json"};
	 * var configs = {};
	 *
	 * async.forEachOf(obj, function (value, key, callback) {
	 *     fs.readFile(__dirname + value, "utf8", function (err, data) {
	 *         if (err) return callback(err);
	 *         try {
	 *             configs[key] = JSON.parse(data);
	 *         } catch (e) {
	 *             return callback(e);
	 *         }
	 *         callback();
	 *     });
	 * }, function (err) {
	 *     if (err) console.error(err.message);
	 *     // configs is now a map of JSON data
	 *     doSomethingWith(configs);
	 * });
	 */
	var eachOf = function (coll, iteratee, callback) {
	    var eachOfImplementation = isArrayLike(coll) ? eachOfArrayLike : eachOfGeneric;
	    eachOfImplementation(coll, iteratee, callback);
	};

	function doParallel(fn) {
	    return function (obj, iteratee, callback) {
	        return fn(eachOf, obj, iteratee, callback);
	    };
	}

	function _asyncMap(eachfn, arr, iteratee, callback) {
	    callback = once(callback || noop);
	    arr = arr || [];
	    var results = [];
	    var counter = 0;

	    eachfn(arr, function (value, _, callback) {
	        var index = counter++;
	        iteratee(value, function (err, v) {
	            results[index] = v;
	            callback(err);
	        });
	    }, function (err) {
	        callback(err, results);
	    });
	}

	/**
	 * Produces a new collection of values by mapping each value in `coll` through
	 * the `iteratee` function. The `iteratee` is called with an item from `coll`
	 * and a callback for when it has finished processing. Each of these callback
	 * takes 2 arguments: an `error`, and the transformed item from `coll`. If
	 * `iteratee` passes an error to its callback, the main `callback` (for the
	 * `map` function) is immediately called with the error.
	 *
	 * Note, that since this function applies the `iteratee` to each item in
	 * parallel, there is no guarantee that the `iteratee` functions will complete
	 * in order. However, the results array will be in the same order as the
	 * original `coll`.
	 *
	 * If `map` is passed an Object, the results will be an Array.  The results
	 * will roughly be in the order of the original Objects' keys (but this can
	 * vary across JavaScript engines)
	 *
	 * @name map
	 * @static
	 * @memberOf module:Collections
	 * @method
	 * @category Collection
	 * @param {Array|Iterable|Object} coll - A collection to iterate over.
	 * @param {Function} iteratee - A function to apply to each item in `coll`.
	 * The iteratee is passed a `callback(err, transformed)` which must be called
	 * once it has completed with an error (which can be `null`) and a
	 * transformed item. Invoked with (item, callback).
	 * @param {Function} [callback] - A callback which is called when all `iteratee`
	 * functions have finished, or an error occurs. Results is an Array of the
	 * transformed items from the `coll`. Invoked with (err, results).
	 * @example
	 *
	 * async.map(['file1','file2','file3'], fs.stat, function(err, results) {
	 *     // results is now an array of stats for each file
	 * });
	 */
	var map = doParallel(_asyncMap);

	/**
	 * Applies the provided arguments to each function in the array, calling
	 * `callback` after all functions have completed. If you only provide the first
	 * argument, `fns`, then it will return a function which lets you pass in the
	 * arguments as if it were a single function call. If more arguments are
	 * provided, `callback` is required while `args` is still optional.
	 *
	 * @name applyEach
	 * @static
	 * @memberOf module:ControlFlow
	 * @method
	 * @category Control Flow
	 * @param {Array|Iterable|Object} fns - A collection of asynchronous functions
	 * to all call with the same arguments
	 * @param {...*} [args] - any number of separate arguments to pass to the
	 * function.
	 * @param {Function} [callback] - the final argument should be the callback,
	 * called when all functions have completed processing.
	 * @returns {Function} - If only the first argument, `fns`, is provided, it will
	 * return a function which lets you pass in the arguments as if it were a single
	 * function call. The signature is `(..args, callback)`. If invoked with any
	 * arguments, `callback` is required.
	 * @example
	 *
	 * async.applyEach([enableSearch, updateSchema], 'bucket', callback);
	 *
	 * // partial application example:
	 * async.each(
	 *     buckets,
	 *     async.applyEach([enableSearch, updateSchema]),
	 *     callback
	 * );
	 */
	var applyEach = applyEach$1(map);

	function doParallelLimit(fn) {
	    return function (obj, limit, iteratee, callback) {
	        return fn(_eachOfLimit(limit), obj, iteratee, callback);
	    };
	}

	/**
	 * The same as [`map`]{@link module:Collections.map} but runs a maximum of `limit` async operations at a time.
	 *
	 * @name mapLimit
	 * @static
	 * @memberOf module:Collections
	 * @method
	 * @see [async.map]{@link module:Collections.map}
	 * @category Collection
	 * @param {Array|Iterable|Object} coll - A collection to iterate over.
	 * @param {number} limit - The maximum number of async operations at a time.
	 * @param {Function} iteratee - A function to apply to each item in `coll`.
	 * The iteratee is passed a `callback(err, transformed)` which must be called
	 * once it has completed with an error (which can be `null`) and a transformed
	 * item. Invoked with (item, callback).
	 * @param {Function} [callback] - A callback which is called when all `iteratee`
	 * functions have finished, or an error occurs. Results is an array of the
	 * transformed items from the `coll`. Invoked with (err, results).
	 */
	var mapLimit = doParallelLimit(_asyncMap);

	/**
	 * The same as [`map`]{@link module:Collections.map} but runs only a single async operation at a time.
	 *
	 * @name mapSeries
	 * @static
	 * @memberOf module:Collections
	 * @method
	 * @see [async.map]{@link module:Collections.map}
	 * @category Collection
	 * @param {Array|Iterable|Object} coll - A collection to iterate over.
	 * @param {Function} iteratee - A function to apply to each item in `coll`.
	 * The iteratee is passed a `callback(err, transformed)` which must be called
	 * once it has completed with an error (which can be `null`) and a
	 * transformed item. Invoked with (item, callback).
	 * @param {Function} [callback] - A callback which is called when all `iteratee`
	 * functions have finished, or an error occurs. Results is an array of the
	 * transformed items from the `coll`. Invoked with (err, results).
	 */
	var mapSeries = doLimit(mapLimit, 1);

	/**
	 * The same as [`applyEach`]{@link module:ControlFlow.applyEach} but runs only a single async operation at a time.
	 *
	 * @name applyEachSeries
	 * @static
	 * @memberOf module:ControlFlow
	 * @method
	 * @see [async.applyEach]{@link module:ControlFlow.applyEach}
	 * @category Control Flow
	 * @param {Array|Iterable|Object} fns - A collection of asynchronous functions to all
	 * call with the same arguments
	 * @param {...*} [args] - any number of separate arguments to pass to the
	 * function.
	 * @param {Function} [callback] - the final argument should be the callback,
	 * called when all functions have completed processing.
	 * @returns {Function} - If only the first argument is provided, it will return
	 * a function which lets you pass in the arguments as if it were a single
	 * function call.
	 */
	var applyEachSeries = applyEach$1(mapSeries);

	/**
	 * Creates a continuation function with some arguments already applied.
	 *
	 * Useful as a shorthand when combined with other control flow functions. Any
	 * arguments passed to the returned function are added to the arguments
	 * originally passed to apply.
	 *
	 * @name apply
	 * @static
	 * @memberOf module:Utils
	 * @method
	 * @category Util
	 * @param {Function} function - The function you want to eventually apply all
	 * arguments to. Invokes with (arguments...).
	 * @param {...*} arguments... - Any number of arguments to automatically apply
	 * when the continuation is called.
	 * @example
	 *
	 * // using apply
	 * async.parallel([
	 *     async.apply(fs.writeFile, 'testfile1', 'test1'),
	 *     async.apply(fs.writeFile, 'testfile2', 'test2')
	 * ]);
	 *
	 *
	 * // the same process without using apply
	 * async.parallel([
	 *     function(callback) {
	 *         fs.writeFile('testfile1', 'test1', callback);
	 *     },
	 *     function(callback) {
	 *         fs.writeFile('testfile2', 'test2', callback);
	 *     }
	 * ]);
	 *
	 * // It's possible to pass any number of additional arguments when calling the
	 * // continuation:
	 *
	 * node> var fn = async.apply(sys.puts, 'one');
	 * node> fn('two', 'three');
	 * one
	 * two
	 * three
	 */
	var apply$2 = baseRest$1(function (fn, args) {
	    return baseRest$1(function (callArgs) {
	        return fn.apply(null, args.concat(callArgs));
	    });
	});

	/**
	 * Take a sync function and make it async, passing its return value to a
	 * callback. This is useful for plugging sync functions into a waterfall,
	 * series, or other async functions. Any arguments passed to the generated
	 * function will be passed to the wrapped function (except for the final
	 * callback argument). Errors thrown will be passed to the callback.
	 *
	 * If the function passed to `asyncify` returns a Promise, that promises's
	 * resolved/rejected state will be used to call the callback, rather than simply
	 * the synchronous return value.
	 *
	 * This also means you can asyncify ES2016 `async` functions.
	 *
	 * @name asyncify
	 * @static
	 * @memberOf module:Utils
	 * @method
	 * @alias wrapSync
	 * @category Util
	 * @param {Function} func - The synchronous function to convert to an
	 * asynchronous function.
	 * @returns {Function} An asynchronous wrapper of the `func`. To be invoked with
	 * (callback).
	 * @example
	 *
	 * // passing a regular synchronous function
	 * async.waterfall([
	 *     async.apply(fs.readFile, filename, "utf8"),
	 *     async.asyncify(JSON.parse),
	 *     function (data, next) {
	 *         // data is the result of parsing the text.
	 *         // If there was a parsing error, it would have been caught.
	 *     }
	 * ], callback);
	 *
	 * // passing a function returning a promise
	 * async.waterfall([
	 *     async.apply(fs.readFile, filename, "utf8"),
	 *     async.asyncify(function (contents) {
	 *         return db.model.create(contents);
	 *     }),
	 *     function (model, next) {
	 *         // `model` is the instantiated model object.
	 *         // If there was an error, this function would be skipped.
	 *     }
	 * ], callback);
	 *
	 * // es6 example
	 * var q = async.queue(async.asyncify(async function(file) {
	 *     var intermediateStep = await processFile(file);
	 *     return await somePromise(intermediateStep)
	 * }));
	 *
	 * q.push(files);
	 */
	function asyncify(func) {
	    return initialParams(function (args, callback) {
	        var result;
	        try {
	            result = func.apply(this, args);
	        } catch (e) {
	            return callback(e);
	        }
	        // if result is Promise object
	        if (isObject(result) && typeof result.then === 'function') {
	            result.then(function (value) {
	                callback(null, value);
	            }, function (err) {
	                callback(err.message ? err : new Error(err));
	            });
	        } else {
	            callback(null, result);
	        }
	    });
	}

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */
	function baseIsNaN(value) {
	  return value !== value;
	}

	/**
	 * A specialized version of `_.indexOf` which performs strict equality
	 * comparisons of values, i.e. `===`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function strictIndexOf(array, value, fromIndex) {
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  return value === value
	    ? strictIndexOf(array, value, fromIndex)
	    : baseFindIndex(array, baseIsNaN, fromIndex);
	}

	/**
	 * Determines the best order for running the functions in `tasks`, based on
	 * their requirements. Each function can optionally depend on other functions
	 * being completed first, and each function is run as soon as its requirements
	 * are satisfied.
	 *
	 * If any of the functions pass an error to their callback, the `auto` sequence
	 * will stop. Further tasks will not execute (so any other functions depending
	 * on it will not run), and the main `callback` is immediately called with the
	 * error.
	 *
	 * Functions also receive an object containing the results of functions which
	 * have completed so far as the first argument, if they have dependencies. If a
	 * task function has no dependencies, it will only be passed a callback.
	 *
	 * @name auto
	 * @static
	 * @memberOf module:ControlFlow
	 * @method
	 * @category Control Flow
	 * @param {Object} tasks - An object. Each of its properties is either a
	 * function or an array of requirements, with the function itself the last item
	 * in the array. The object's key of a property serves as the name of the task
	 * defined by that property, i.e. can be used when specifying requirements for
	 * other tasks. The function receives one or two arguments:
	 * * a `results` object, containing the results of the previously executed
	 *   functions, only passed if the task has any dependencies,
	 * * a `callback(err, result)` function, which must be called when finished,
	 *   passing an `error` (which can be `null`) and the result of the function's
	 *   execution.
	 * @param {number} [concurrency=Infinity] - An optional `integer` for
	 * determining the maximum number of tasks that can be run in parallel. By
	 * default, as many as possible.
	 * @param {Function} [callback] - An optional callback which is called when all
	 * the tasks have been completed. It receives the `err` argument if any `tasks`
	 * pass an error to their callback. Results are always returned; however, if an
	 * error occurs, no further `tasks` will be performed, and the results object
	 * will only contain partial results. Invoked with (err, results).
	 * @returns undefined
	 * @example
	 *
	 * async.auto({
	 *     // this function will just be passed a callback
	 *     readData: async.apply(fs.readFile, 'data.txt', 'utf-8'),
	 *     showData: ['readData', function(results, cb) {
	 *         // results.readData is the file's contents
	 *         // ...
	 *     }]
	 * }, callback);
	 *
	 * async.auto({
	 *     get_data: function(callback) {
	 *         console.log('in get_data');
	 *         // async code to get some data
	 *         callback(null, 'data', 'converted to array');
	 *     },
	 *     make_folder: function(callback) {
	 *         console.log('in make_folder');
	 *         // async code to create a directory to store a file in
	 *         // this is run at the same time as getting the data
	 *         callback(null, 'folder');
	 *     },
	 *     write_file: ['get_data', 'make_folder', function(results, callback) {
	 *         console.log('in write_file', JSON.stringify(results));
	 *         // once there is some data and the directory exists,
	 *         // write the data to a file in the directory
	 *         callback(null, 'filename');
	 *     }],
	 *     email_link: ['write_file', function(results, callback) {
	 *         console.log('in email_link', JSON.stringify(results));
	 *         // once the file is written let's email a link to it...
	 *         // results.write_file contains the filename returned by write_file.
	 *         callback(null, {'file':results.write_file, 'email':'user@example.com'});
	 *     }]
	 * }, function(err, results) {
	 *     console.log('err = ', err);
	 *     console.log('results = ', results);
	 * });
	 */
	var auto = function (tasks, concurrency, callback) {
	    if (typeof concurrency === 'function') {
	        // concurrency is optional, shift the args.
	        callback = concurrency;
	        concurrency = null;
	    }
	    callback = once(callback || noop);
	    var keys$$1 = keys(tasks);
	    var numTasks = keys$$1.length;
	    if (!numTasks) {
	        return callback(null);
	    }
	    if (!concurrency) {
	        concurrency = numTasks;
	    }

	    var results = {};
	    var runningTasks = 0;
	    var hasError = false;

	    var listeners = {};

	    var readyTasks = [];

	    // for cycle detection:
	    var readyToCheck = []; // tasks that have been identified as reachable
	    // without the possibility of returning to an ancestor task
	    var uncheckedDependencies = {};

	    baseForOwn(tasks, function (task, key) {
	        if (!isArray(task)) {
	            // no dependencies
	            enqueueTask(key, [task]);
	            readyToCheck.push(key);
	            return;
	        }

	        var dependencies = task.slice(0, task.length - 1);
	        var remainingDependencies = dependencies.length;
	        if (remainingDependencies === 0) {
	            enqueueTask(key, task);
	            readyToCheck.push(key);
	            return;
	        }
	        uncheckedDependencies[key] = remainingDependencies;

	        arrayEach(dependencies, function (dependencyName) {
	            if (!tasks[dependencyName]) {
	                throw new Error('async.auto task `' + key + '` has a non-existent dependency in ' + dependencies.join(', '));
	            }
	            addListener(dependencyName, function () {
	                remainingDependencies--;
	                if (remainingDependencies === 0) {
	                    enqueueTask(key, task);
	                }
	            });
	        });
	    });

	    checkForDeadlocks();
	    processQueue();

	    function enqueueTask(key, task) {
	        readyTasks.push(function () {
	            runTask(key, task);
	        });
	    }

	    function processQueue() {
	        if (readyTasks.length === 0 && runningTasks === 0) {
	            return callback(null, results);
	        }
	        while (readyTasks.length && runningTasks < concurrency) {
	            var run = readyTasks.shift();
	            run();
	        }
	    }

	    function addListener(taskName, fn) {
	        var taskListeners = listeners[taskName];
	        if (!taskListeners) {
	            taskListeners = listeners[taskName] = [];
	        }

	        taskListeners.push(fn);
	    }

	    function taskComplete(taskName) {
	        var taskListeners = listeners[taskName] || [];
	        arrayEach(taskListeners, function (fn) {
	            fn();
	        });
	        processQueue();
	    }

	    function runTask(key, task) {
	        if (hasError) return;

	        var taskCallback = onlyOnce(baseRest$1(function (err, args) {
	            runningTasks--;
	            if (args.length <= 1) {
	                args = args[0];
	            }
	            if (err) {
	                var safeResults = {};
	                baseForOwn(results, function (val, rkey) {
	                    safeResults[rkey] = val;
	                });
	                safeResults[key] = args;
	                hasError = true;
	                listeners = [];

	                callback(err, safeResults);
	            } else {
	                results[key] = args;
	                taskComplete(key);
	            }
	        }));

	        runningTasks++;
	        var taskFn = task[task.length - 1];
	        if (task.length > 1) {
	            taskFn(results, taskCallback);
	        } else {
	            taskFn(taskCallback);
	        }
	    }

	    function checkForDeadlocks() {
	        // Kahn's algorithm
	        // https://en.wikipedia.org/wiki/Topological_sorting#Kahn.27s_algorithm
	        // http://connalle.blogspot.com/2013/10/topological-sortingkahn-algorithm.html
	        var currentTask;
	        var counter = 0;
	        while (readyToCheck.length) {
	            currentTask = readyToCheck.pop();
	            counter++;
	            arrayEach(getDependents(currentTask), function (dependent) {
	                if (--uncheckedDependencies[dependent] === 0) {
	                    readyToCheck.push(dependent);
	                }
	            });
	        }

	        if (counter !== numTasks) {
	            throw new Error('async.auto cannot execute tasks due to a recursive dependency');
	        }
	    }

	    function getDependents(taskName) {
	        var result = [];
	        baseForOwn(tasks, function (task, key) {
	            if (isArray(task) && baseIndexOf(task, taskName, 0) >= 0) {
	                result.push(key);
	            }
	        });
	        return result;
	    }
	};

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	/** Built-in value references. */
	var Symbol$1 = root.Symbol;

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used for built-in method references. */
	var objectProto$8 = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString$3 = objectProto$8.toString;

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString$3.call(value) == symbolTag);
	}

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined;
	var symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;

	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = end > length ? length : end;
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;

	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}

	/**
	 * Casts `array` to a slice if it's needed.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {number} start The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the cast slice.
	 */
	function castSlice(array, start, end) {
	  var length = array.length;
	  end = end === undefined ? length : end;
	  return (!start && end >= length) ? array : baseSlice(array, start, end);
	}

	/**
	 * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
	 * that is not found in the character symbols.
	 *
	 * @private
	 * @param {Array} strSymbols The string symbols to inspect.
	 * @param {Array} chrSymbols The character symbols to find.
	 * @returns {number} Returns the index of the last unmatched string symbol.
	 */
	function charsEndIndex(strSymbols, chrSymbols) {
	  var index = strSymbols.length;

	  while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
	  return index;
	}

	/**
	 * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
	 * that is not found in the character symbols.
	 *
	 * @private
	 * @param {Array} strSymbols The string symbols to inspect.
	 * @param {Array} chrSymbols The character symbols to find.
	 * @returns {number} Returns the index of the first unmatched string symbol.
	 */
	function charsStartIndex(strSymbols, chrSymbols) {
	  var index = -1,
	      length = strSymbols.length;

	  while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
	  return index;
	}

	/**
	 * Converts an ASCII `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function asciiToArray(string) {
	  return string.split('');
	}

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff';
	var rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23';
	var rsComboSymbolsRange = '\\u20d0-\\u20f0';
	var rsVarRange = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsZWJ = '\\u200d';

	/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
	var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');

	/**
	 * Checks if `string` contains Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
	 */
	function hasUnicode(string) {
	  return reHasUnicode.test(string);
	}

	/** Used to compose unicode character classes. */
	var rsAstralRange$1 = '\\ud800-\\udfff';
	var rsComboMarksRange$1 = '\\u0300-\\u036f\\ufe20-\\ufe23';
	var rsComboSymbolsRange$1 = '\\u20d0-\\u20f0';
	var rsVarRange$1 = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsAstral = '[' + rsAstralRange$1 + ']';
	var rsCombo = '[' + rsComboMarksRange$1 + rsComboSymbolsRange$1 + ']';
	var rsFitz = '\\ud83c[\\udffb-\\udfff]';
	var rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')';
	var rsNonAstral = '[^' + rsAstralRange$1 + ']';
	var rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}';
	var rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]';
	var rsZWJ$1 = '\\u200d';

	/** Used to compose unicode regexes. */
	var reOptMod = rsModifier + '?';
	var rsOptVar = '[' + rsVarRange$1 + ']?';
	var rsOptJoin = '(?:' + rsZWJ$1 + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*';
	var rsSeq = rsOptVar + reOptMod + rsOptJoin;
	var rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

	/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

	/**
	 * Converts a Unicode `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function unicodeToArray(string) {
	  return string.match(reUnicode) || [];
	}

	/**
	 * Converts `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function stringToArray(string) {
	  return hasUnicode(string)
	    ? unicodeToArray(string)
	    : asciiToArray(string);
	}

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/**
	 * Removes leading and trailing whitespace or specified characters from `string`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to trim.
	 * @param {string} [chars=whitespace] The characters to trim.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {string} Returns the trimmed string.
	 * @example
	 *
	 * _.trim('  abc  ');
	 * // => 'abc'
	 *
	 * _.trim('-_-abc-_-', '_-');
	 * // => 'abc'
	 *
	 * _.map(['  foo  ', '  bar  '], _.trim);
	 * // => ['foo', 'bar']
	 */
	function trim(string, chars, guard) {
	  string = toString(string);
	  if (string && (guard || chars === undefined)) {
	    return string.replace(reTrim, '');
	  }
	  if (!string || !(chars = baseToString(chars))) {
	    return string;
	  }
	  var strSymbols = stringToArray(string),
	      chrSymbols = stringToArray(chars),
	      start = charsStartIndex(strSymbols, chrSymbols),
	      end = charsEndIndex(strSymbols, chrSymbols) + 1;

	  return castSlice(strSymbols, start, end).join('');
	}

	var FN_ARGS = /^(function)?\s*[^\(]*\(\s*([^\)]*)\)/m;
	var FN_ARG_SPLIT = /,/;
	var FN_ARG = /(=.+)?(\s*)$/;
	var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;

	function parseParams(func) {
	    func = func.toString().replace(STRIP_COMMENTS, '');
	    func = func.match(FN_ARGS)[2].replace(' ', '');
	    func = func ? func.split(FN_ARG_SPLIT) : [];
	    func = func.map(function (arg) {
	        return trim(arg.replace(FN_ARG, ''));
	    });
	    return func;
	}

	/**
	 * A dependency-injected version of the [async.auto]{@link module:ControlFlow.auto} function. Dependent
	 * tasks are specified as parameters to the function, after the usual callback
	 * parameter, with the parameter names matching the names of the tasks it
	 * depends on. This can provide even more readable task graphs which can be
	 * easier to maintain.
	 *
	 * If a final callback is specified, the task results are similarly injected,
	 * specified as named parameters after the initial error parameter.
	 *
	 * The autoInject function is purely syntactic sugar and its semantics are
	 * otherwise equivalent to [async.auto]{@link module:ControlFlow.auto}.
	 *
	 * @name autoInject
	 * @static
	 * @memberOf module:ControlFlow
	 * @method
	 * @see [async.auto]{@link module:ControlFlow.auto}
	 * @category Control Flow
	 * @param {Object} tasks - An object, each of whose properties is a function of
	 * the form 'func([dependencies...], callback). The object's key of a property
	 * serves as the name of the task defined by that property, i.e. can be used
	 * when specifying requirements for other tasks.
	 * * The `callback` parameter is a `callback(err, result)` which must be called
	 *   when finished, passing an `error` (which can be `null`) and the result of
	 *   the function's execution. The remaining parameters name other tasks on
	 *   which the task is dependent, and the results from those tasks are the
	 *   arguments of those parameters.
	 * @param {Function} [callback] - An optional callback which is called when all
	 * the tasks have been completed. It receives the `err` argument if any `tasks`
	 * pass an error to their callback, and a `results` object with any completed
	 * task results, similar to `auto`.
	 * @example
	 *
	 * //  The example from `auto` can be rewritten as follows:
	 * async.autoInject({
	 *     get_data: function(callback) {
	 *         // async code to get some data
	 *         callback(null, 'data', 'converted to array');
	 *     },
	 *     make_folder: function(callback) {
	 *         // async code to create a directory to store a file in
	 *         // this is run at the same time as getting the data
	 *         callback(null, 'folder');
	 *     },
	 *     write_file: function(get_data, make_folder, callback) {
	 *         // once there is some data and the directory exists,
	 *         // write the data to a file in the directory
	 *         callback(null, 'filename');
	 *     },
	 *     email_link: function(write_file, callback) {
	 *         // once the file is written let's email a link to it...
	 *         // write_file contains the filename returned by write_file.
	 *         callback(null, {'file':write_file, 'email':'user@example.com'});
	 *     }
	 * }, function(err, results) {
	 *     console.log('err = ', err);
	 *     console.log('email_link = ', results.email_link);
	 * });
	 *
	 * // If you are using a JS minifier that mangles parameter names, `autoInject`
	 * // will not work with plain functions, since the parameter names will be
	 * // collapsed to a single letter identifier.  To work around this, you can
	 * // explicitly specify the names of the parameters your task function needs
	 * // in an array, similar to Angular.js dependency injection.
	 *
	 * // This still has an advantage over plain `auto`, since the results a task
	 * // depends on are still spread into arguments.
	 * async.autoInject({
	 *     //...
	 *     write_file: ['get_data', 'make_folder', function(get_data, make_folder, callback) {
	 *         callback(null, 'filename');
	 *     }],
	 *     email_link: ['write_file', function(write_file, callback) {
	 *         callback(null, {'file':write_file, 'email':'user@example.com'});
	 *     }]
	 *     //...
	 * }, function(err, results) {
	 *     console.log('err = ', err);
	 *     console.log('email_link = ', results.email_link);
	 * });
	 */
	function autoInject(tasks, callback) {
	    var newTasks = {};

	    baseForOwn(tasks, function (taskFn, key) {
	        var params;

	        if (isArray(taskFn)) {
	            params = copyArray(taskFn);
	            taskFn = params.pop();

	            newTasks[key] = params.concat(params.length > 0 ? newTask : taskFn);
	        } else if (taskFn.length === 1) {
	            // no dependencies, use the function as-is
	            newTasks[key] = taskFn;
	        } else {
	            params = parseParams(taskFn);
	            if (taskFn.length === 0 && params.length === 0) {
	                throw new Error("autoInject task functions require explicit parameters.");
	            }

	            params.pop();

	            newTasks[key] = params.concat(newTask);
	        }

	        function newTask(results, taskCb) {
	            var newArgs = arrayMap(params, function (name) {
	                return results[name];
	            });
	            newArgs.push(taskCb);
	            taskFn.apply(null, newArgs);
	        }
	    });

	    auto(newTasks, callback);
	}

	var hasSetImmediate = typeof setImmediate === 'function' && setImmediate;
	var hasNextTick = typeof process === 'object' && typeof process.nextTick === 'function';

	function fallback(fn) {
	    setTimeout(fn, 0);
	}

	function wrap(defer) {
	    return baseRest$1(function (fn, args) {
	        defer(function () {
	            fn.apply(null, args);
	        });
	    });
	}

	var _defer;

	if (hasSetImmediate) {
	    _defer = setImmediate;
	} else if (hasNextTick) {
	    _defer = process.nextTick;
	} else {
	    _defer = fallback;
	}

	var setImmediate$1 = wrap(_defer);

	// Simple doubly linked list (https://en.wikipedia.org/wiki/Doubly_linked_list) implementation
	// used for queues. This implementation assumes that the node provided by the user can be modified
	// to adjust the next and last properties. We implement only the minimal functionality
	// for queue support.
	function DLL() {
	    this.head = this.tail = null;
	    this.length = 0;
	}

	function setInitial(dll, node) {
	    dll.length = 1;
	    dll.head = dll.tail = node;
	}

	DLL.prototype.removeLink = function (node) {
	    if (node.prev) node.prev.next = node.next;else this.head = node.next;
	    if (node.next) node.next.prev = node.prev;else this.tail = node.prev;

	    node.prev = node.next = null;
	    this.length -= 1;
	    return node;
	};

	DLL.prototype.empty = DLL;

	DLL.prototype.insertAfter = function (node, newNode) {
	    newNode.prev = node;
	    newNode.next = node.next;
	    if (node.next) node.next.prev = newNode;else this.tail = newNode;
	    node.next = newNode;
	    this.length += 1;
	};

	DLL.prototype.insertBefore = function (node, newNode) {
	    newNode.prev = node.prev;
	    newNode.next = node;
	    if (node.prev) node.prev.next = newNode;else this.head = newNode;
	    node.prev = newNode;
	    this.length += 1;
	};

	DLL.prototype.unshift = function (node) {
	    if (this.head) this.insertBefore(this.head, node);else setInitial(this, node);
	};

	DLL.prototype.push = function (node) {
	    if (this.tail) this.insertAfter(this.tail, node);else setInitial(this, node);
	};

	DLL.prototype.shift = function () {
	    return this.head && this.removeLink(this.head);
	};

	DLL.prototype.pop = function () {
	    return this.tail && this.removeLink(this.tail);
	};

	function queue(worker, concurrency, payload) {
	    if (concurrency == null) {
	        concurrency = 1;
	    } else if (concurrency === 0) {
	        throw new Error('Concurrency must not be zero');
	    }

	    function _insert(data, insertAtFront, callback) {
	        if (callback != null && typeof callback !== 'function') {
	            throw new Error('task callback must be a function');
	        }
	        q.started = true;
	        if (!isArray(data)) {
	            data = [data];
	        }
	        if (data.length === 0 && q.idle()) {
	            // call drain immediately if there are no tasks
	            return setImmediate$1(function () {
	                q.drain();
	            });
	        }

	        for (var i = 0, l = data.length; i < l; i++) {
	            var item = {
	                data: data[i],
	                callback: callback || noop
	            };

	            if (insertAtFront) {
	                q._tasks.unshift(item);
	            } else {
	                q._tasks.push(item);
	            }
	        }
	        setImmediate$1(q.process);
	    }

	    function _next(tasks) {
	        return baseRest$1(function (args) {
	            workers -= 1;

	            for (var i = 0, l = tasks.length; i < l; i++) {
	                var task = tasks[i];
	                var index = baseIndexOf(workersList, task, 0);
	                if (index >= 0) {
	                    workersList.splice(index);
	                }

	                task.callback.apply(task, args);

	                if (args[0] != null) {
	                    q.error(args[0], task.data);
	                }
	            }

	            if (workers <= q.concurrency - q.buffer) {
	                q.unsaturated();
	            }

	            if (q.idle()) {
	                q.drain();
	            }
	            q.process();
	        });
	    }

	    var workers = 0;
	    var workersList = [];
	    var q = {
	        _tasks: new DLL(),
	        concurrency: concurrency,
	        payload: payload,
	        saturated: noop,
	        unsaturated: noop,
	        buffer: concurrency / 4,
	        empty: noop,
	        drain: noop,
	        error: noop,
	        started: false,
	        paused: false,
	        push: function (data, callback) {
	            _insert(data, false, callback);
	        },
	        kill: function () {
	            q.drain = noop;
	            q._tasks.empty();
	        },
	        unshift: function (data, callback) {
	            _insert(data, true, callback);
	        },
	        process: function () {
	            while (!q.paused && workers < q.concurrency && q._tasks.length) {
	                var tasks = [],
	                    data = [];
	                var l = q._tasks.length;
	                if (q.payload) l = Math.min(l, q.payload);
	                for (var i = 0; i < l; i++) {
	                    var node = q._tasks.shift();
	                    tasks.push(node);
	                    data.push(node.data);
	                }

	                if (q._tasks.length === 0) {
	                    q.empty();
	                }
	                workers += 1;
	                workersList.push(tasks[0]);

	                if (workers === q.concurrency) {
	                    q.saturated();
	                }

	                var cb = onlyOnce(_next(tasks));
	                worker(data, cb);
	            }
	        },
	        length: function () {
	            return q._tasks.length;
	        },
	        running: function () {
	            return workers;
	        },
	        workersList: function () {
	            return workersList;
	        },
	        idle: function () {
	            return q._tasks.length + workers === 0;
	        },
	        pause: function () {
	            q.paused = true;
	        },
	        resume: function () {
	            if (q.paused === false) {
	                return;
	            }
	            q.paused = false;
	            var resumeCount = Math.min(q.concurrency, q._tasks.length);
	            // Need to call q.process once per concurrent
	            // worker to preserve full concurrency after pause
	            for (var w = 1; w <= resumeCount; w++) {
	                setImmediate$1(q.process);
	            }
	        }
	    };
	    return q;
	}

	/**
	 * A cargo of tasks for the worker function to complete. Cargo inherits all of
	 * the same methods and event callbacks as [`queue`]{@link module:ControlFlow.queue}.
	 * @typedef {Object} CargoObject
	 * @memberOf module:ControlFlow
	 * @property {Function} length - A function returning the number of items
	 * waiting to be processed. Invoke like `cargo.length()`.
	 * @property {number} payload - An `integer` for determining how many tasks
	 * should be process per round. This property can be changed after a `cargo` is
	 * created to alter the payload on-the-fly.
	 * @property {Function} push - Adds `task` to the `queue`. The callback is
	 * called once the `worker` has finished processing the task. Instead of a
	 * single task, an array of `tasks` can be submitted. The respective callback is
	 * used for every task in the list. Invoke like `cargo.push(task, [callback])`.
	 * @property {Function} saturated - A callback that is called when the
	 * `queue.length()` hits the concurrency and further tasks will be queued.
	 * @property {Function} empty - A callback that is called when the last item
	 * from the `queue` is given to a `worker`.
	 * @property {Function} drain - A callback that is called when the last item
	 * from the `queue` has returned from the `worker`.
	 * @property {Function} idle - a function returning false if there are items
	 * waiting or being processed, or true if not. Invoke like `cargo.idle()`.
	 * @property {Function} pause - a function that pauses the processing of tasks
	 * until `resume()` is called. Invoke like `cargo.pause()`.
	 * @property {Function} resume - a function that resumes the processing of
	 * queued tasks when the queue is paused. Invoke like `cargo.resume()`.
	 * @property {Function} kill - a function that removes the `drain` callback and
	 * empties remaining tasks from the queue forcing it to go idle. Invoke like `cargo.kill()`.
	 */

	/**
	 * Creates a `cargo` object with the specified payload. Tasks added to the
	 * cargo will be processed altogether (up to the `payload` limit). If the
	 * `worker` is in progress, the task is queued until it becomes available. Once
	 * the `worker` has completed some tasks, each callback of those tasks is
	 * called. Check out [these](https://camo.githubusercontent.com/6bbd36f4cf5b35a0f11a96dcd2e97711ffc2fb37/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130382f62626330636662302d356632392d313165322d393734662d3333393763363464633835382e676966) [animations](https://camo.githubusercontent.com/f4810e00e1c5f5f8addbe3e9f49064fd5d102699/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130312f38346339323036362d356632392d313165322d383134662d3964336430323431336266642e676966)
	 * for how `cargo` and `queue` work.
	 *
	 * While [`queue`]{@link module:ControlFlow.queue} passes only one task to one of a group of workers
	 * at a time, cargo passes an array of tasks to a single worker, repeating
	 * when the worker is finished.
	 *
	 * @name cargo
	 * @static
	 * @memberOf module:ControlFlow
	 * @method
	 * @see [async.queue]{@link module:ControlFlow.queue}
	 * @category Control Flow
	 * @param {Function} worker - An asynchronous function for processing an array
	 * of queued tasks, which must call its `callback(err)` argument when finished,
	 * with an optional `err` argument. Invoked with `(tasks, callback)`.
	 * @param {number} [payload=Infinity] - An optional `integer` for determining
	 * how many tasks should be processed per round; if omitted, the default is
	 * unlimited.
	 * @returns {module:ControlFlow.CargoObject} A cargo object to manage the tasks. Callbacks can
	 * attached as certain properties to listen for specific events during the
	 * lifecycle of the cargo and inner queue.
	 * @example
	 *
	 * // create a cargo object with payload 2
	 * var cargo = async.cargo(function(tasks, callback) {
	 *     for (var i=0; i<tasks.length; i++) {
	 *         console.log('hello ' + tasks[i].name);
	 *     }
	 *     callback();
	 * }, 2);
	 *
	 * // add some items
	 * cargo.push({name: 'foo'}, function(err) {
	 *     console.log('finished processing foo');
	 * });
	 * cargo.push({name: 'bar'}, function(err) {
	 *     console.log('finished processing bar');
	 * });
	 * cargo.push({name: 'baz'}, function(err) {
	 *     console.log('finished processing baz');
	 * });
	 */
	function cargo(worker, payload) {
	  return queue(worker, 1, payload);
	}

	/**
	 * The same as [`eachOf`]{@link module:Collections.eachOf} but runs only a single async operation at a time.
	 *
	 * @name eachOfSeries
	 * @static
	 * @memberOf module:Collections
	 * @method
	 * @see [async.eachOf]{@link module:Collections.eachOf}
	 * @alias forEachOfSeries
	 * @category Collection
	 * @param {Array|Iterable|Object} coll - A collection to iterate over.
	 * @param {Function} iteratee - A function to apply to each item in `coll`. The
	 * `key` is the item's key, or index in the case of an array. The iteratee is
	 * passed a `callback(err)` which must be called once it has completed. If no
	 * error has occurred, the callback should be run without arguments or with an
	 * explicit `null` argument. Invoked with (item, key, callback).
	 * @param {Function} [callback] - A callback which is called when all `iteratee`
	 * functions have finished, or an error occurs. Invoked with (err).
	 */
	var eachOfSeries = doLimit(eachOfLimit, 1);

	/**
	 * Reduces `coll` into a single value using an async `iteratee` to return each
	 * successive step. `memo` is the initial state of the reduction. This function
	 * only operates in series.
	 *
	 * For performance reasons, it may make sense to split a call to this function
	 * into a parallel map, and then use the normal `Array.prototype.reduce` on the
	 * results. This function is for situations where each step in the reduction
	 * needs to be async; if you can get the data before reducing it, then it's
	 * probably a good idea to do so.
	 *
	 * @name reduce
	 * @static
	 * @memberOf module:Collections
	 * @method
	 * @alias inject
	 * @alias foldl
	 * @category Collection
	 * @param {Array|Iterable|Object} coll - A collection to iterate over.
	 * @param {*} memo - The initial state of the reduction.
	 * @param {Function} iteratee - A function applied to each item in the
	 * array to produce the next step in the reduction. The `iteratee` is passed a
	 * `callback(err, reduction)` which accepts an optional error as its first
	 * argument, and the state of the reduction as the second. If an error is
	 * passed to the callback, the reduction is stopped and the main `callback` is
	 * immediately called with the error. Invoked with (memo, item, callback).
	 * @param {Function} [callback] - A callback which is called after all the
	 * `iteratee` functions have finished. Result is the reduced value. Invoked with
	 * (err, result).
	 * @example
	 *
	 * async.reduce([1,2,3], 0, function(memo, item, callback) {
	 *     // pointless async:
	 *     process.nextTick(function() {
	 *         callback(null, memo + item)
	 *     });
	 * }, function(err, result) {
	 *     // result is now equal to the last value of memo, which is 6
	 * });
	 */
	function reduce(coll, memo, iteratee, callback) {
	    callback = once(callback || noop);
	    eachOfSeries(coll, function (x, i, callback) {
	        iteratee(memo, x, function (err, v) {
	            memo = v;
	            callback(err);
	        });
	    }, function (err) {
	        callback(err, memo);
	    });
	}

	/**
	 * Version of the compose function that is more natural to read. Each function
	 * consumes the return value of the previous function. It is the equivalent of
	 * [compose]{@link module:ControlFlow.compose} with the arguments reversed.
	 *
	 * Each function is executed with the `this` binding of the composed function.
	 *
	 * @name seq
	 * @static
	 * @memberOf module:ControlFlow
	 * @method
	 * @see [async.compose]{@link module:ControlFlow.compose}
	 * @category Control Flow
	 * @param {...Function} functions - the asynchronous functions to compose
	 * @returns {Function} a function that composes the `functions` in order
	 * @example
	 *
	 * // Requires lodash (or underscore), express3 and dresende's orm2.
	 * // Part of an app, that fetches cats of the logged user.
	 * // This example uses `seq` function to avoid overnesting and error
	 * // handling clutter.
	 * app.get('/cats', function(request, response) {
	 *     var User = request.models.User;
	 *     async.seq(
	 *         _.bind(User.get, User),  // 'User.get' has signature (id, callback(err, data))
	 *         function(user, fn) {
	 *             user.getCats(fn);      // 'getCats' has signature (callback(err, data))
	 *         }
	 *     )(req.session.user_id, function (err, cats) {
	 *         if (err) {
	 *             console.error(err);
	 *             response.json({ status: 'error', message: err.message });
	 *         } else {
	 *             response.json({ status: 'ok', message: 'Cats found', data: cats });
	 *         }
	 *     });
	 * });
	 */
	var seq$1 = baseRest$1(function seq(functions) {
	    return baseRest$1(function (args) {
	        var that = this;

	        var cb = args[args.length - 1];
	        if (typeof cb == 'function') {
	            args.pop();
	        } else {
	            cb = noop;
	        }

	        reduce(functions, args, function (newargs, fn, cb) {
	            fn.apply(that, newargs.concat([baseRest$1(function (err, nextargs) {
	                cb(err, nextargs);
	            })]));
	        }, function (err, results) {
	            cb.apply(that, [err].concat(results));
	        });
	    });
	});

	/**
	 * Creates a function which is a composition of the passed asynchronous
	 * functions. Each function consumes the return value of the function that
	 * follows. Composing functions `f()`, `g()`, and `h()` would produce the result
	 * of `f(g(h()))`, only this version uses callbacks to obtain the return values.
	 *
	 * Each function is executed with the `this` binding of the composed function.
	 *
	 * @name compose
	 * @static
	 * @memberOf module:ControlFlow
	 * @method
	 * @category Control Flow
	 * @param {...Function} functions - the asynchronous functions to compose
	 * @returns {Function} an asynchronous function that is the composed
	 * asynchronous `functions`
	 * @example
	 *
	 * function add1(n, callback) {
	 *     setTimeout(function () {
	 *         callback(null, n + 1);
	 *     }, 10);
	 * }
	 *
	 * function mul3(n, callback) {
	 *     setTimeout(function () {
	 *         callback(null, n * 3);
	 *     }, 10);
	 * }
	 *
	 * var add1mul3 = async.compose(mul3, add1);
	 * add1mul3(4, function (err, result) {
	 *     // result now equals 15
	 * });
	 */
	var compose = baseRest$1(function (args) {
	  return seq$1.apply(null, args.reverse());
	});

	function concat$1(eachfn, arr, fn, callback) {
	    var result = [];
	    eachfn(arr, function (x, index, cb) {
	        fn(x, function (err, y) {
	            result = result.concat(y || []);
	            cb(err);
	        });
	    }, function (err) {
	        callback(err, result);
	    });
	}

	/**
	 * Applies `iteratee` to each item in `coll`, concatenating the results. Returns
	 * the concatenated list. The `iteratee`s are called in parallel, and the
	 * results are concatenated as they return. There is no guarantee that the
	 * results array will be returned in the original order of `coll` passed to the
	 * `iteratee` function.
	 *
	 * @name concat
	 * @static
	 * @memberOf module:Collections
	 * @method
	 * @category Collection
	 * @param {Array|Iterable|Object} coll - A collection to iterate over.
	 * @param {Function} iteratee - A function to apply to each item in `coll`.
	 * The iteratee is passed a `callback(err, results)` which must be called once
	 * it has completed with an error (which can be `null`) and an array of results.
	 * Invoked with (item, callback).
	 * @param {Function} [callback(err)] - A callback which is called after all the
	 * `iteratee` functions have finished, or an error occurs. Results is an array
	 * containing the concatenated results of the `iteratee` function. Invoked with
	 * (err, results).
	 * @example
	 *
	 * async.concat(['dir1','dir2','dir3'], fs.readdir, function(err, files) {
	 *     // files is now a list of filenames that exist in the 3 directories
	 * });
	 */
	var concat = doParallel(concat$1);

	function doSeries(fn) {
	    return function (obj, iteratee, callback) {
	        return fn(eachOfSeries, obj, iteratee, callback);
	    };
	}

	/**
	 * The same as [`concat`]{@link module:Collections.concat} but runs only a single async operation at a time.
	 *
	 * @name concatSeries
	 * @static
	 * @memberOf module:Collections
	 * @method
	 * @see [async.concat]{@link module:Collections.concat}
	 * @category Collection
	 * @param {Array|Iterable|Object} coll - A collection to iterate over.
	 * @param {Function} iteratee - A function to apply to each item in `coll`.
	 * The iteratee is passed a `callback(err, results)` which must be called once
	 * it has completed with an error (which can be `null`) and an array of results.
	 * Invoked with (item, callback).
	 * @param {Function} [callback(err)] - A callback which is called after all the
	 * `iteratee` functions have finished, or an error occurs. Results is an array
	 * containing the concatenated results of the `iteratee` function. Invoked with
	 * (err, results).
	 */
	var concatSeries = doSeries(concat$1);

	/**
	 * Returns a function that when called, calls-back with the values provided.
	 * Useful as the first function in a [`waterfall`]{@link module:ControlFlow.waterfall}, or for plugging values in to
	 * [`auto`]{@link module:ControlFlow.auto}.
	 *
	 * @name constant
	 * @static
	 * @memberOf module:Utils
	 * @method
	 * @category Util
	 * @param {...*} arguments... - Any number of arguments to automatically invoke
	 * callback with.
	 * @returns {Function} Returns a function that when invoked, automatically
	 * invokes the callback with the previous given arguments.
	 * @example
	 *
	 * async.waterfall([
	 *     async.constant(42),
	 *     function (value, next) {
	 *         // value === 42
	 *     },
	 *     //...
	 * ], callback);
	 *
	 * async.waterfall([
	 *     async.constant(filename, "utf8"),
	 *     fs.readFile,
	 *     function (fileData, next) {
	 *         //...
	 *     }
	 *     //...
	 * ], callback);
	 *
	 * async.auto({
	 *     hostname: async.constant("https://server.net/"),
	 *     port: findFreePort,
	 *     launchServer: ["hostname", "port", function (options, cb) {
	 *         startServer(options, cb);
	 *     }],
	 *     //...
	 * }, callback);
	 */
	var constant$2 = baseRest$1(function (values) {
	    var args = [null].concat(values);
	    return initialParams(function (ignoredArgs, callback) {
	        return callback.apply(this, args);
	    });
	});

	function _createTester(eachfn, check, getResult) {
	    return function (arr, limit, iteratee, cb) {
	        function done() {
	            if (cb) {
	                cb(null, getResult(false));
	            }
	        }
	        function wrappedIteratee(x, _, callback) {
	            if (!cb) return callback();
	            iteratee(x, function (err, v) {
	                // Check cb as another iteratee may have resolved with a
	                // value or error since we started this iteratee
	                if (cb && (err || check(v))) {
	                    if (err) cb(err);else cb(err, getResult(true, x));
	                    cb = iteratee = false;
	                    callback(err, breakLoop);
	                } else {
	                    callback();
	                }
	            });
	        }
	        if (arguments.length > 3) {
	            cb = cb || noop;
	            eachfn(arr, limit, wrappedIteratee, done);
	        } else {
	            cb = iteratee;
	            cb = cb || noop;
	            iteratee = limit;
	            eachfn(arr, wrappedIteratee, done);
	        }
	    };
	}

	function _findGetResult(v, x) {
	    return x;
	}

	/**
	 * Returns the first value in `coll` that passes an async truth test. The
	 * `iteratee` is applied in parallel, meaning the first iteratee to return
	 * `true` will fire the detect `callback` with that result. That means the
	 * result might not be the first item in the original `coll` (in terms of order)
	 * that passes the test.

	 * If order within the original `coll` is important, then look at
	 * [`detectSeries`]{@link module:Collections.detectSeries}.
	 *
	 * @name detect
	 * @static
	 * @memberOf module:Collections
	 * @method
	 * @alias find
	 * @category Collections
	 * @param {Array|Iterable|Object} coll - A collection to iterate over.
	 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
	 * The iteratee is passed a `callback(err, truthValue)` which must be called
	 * with a boolean argument once it has completed. Invoked with (item, callback).
	 * @param {Function} [callback] - A callback which is called as soon as any
	 * iteratee returns `true`, or after all the `iteratee` functions have finished.
	 * Result will be the first item in the array that passes the truth test
	 * (iteratee) or the value `undefined` if none passed. Invoked with
	 * (err, result).
	 * @example
	 *
	 * async.detect(['file1','file2','file3'], function(filePath, callback) {
	 *     fs.access(filePath, function(err) {
	 *         callback(null, !err)
	 *     });
	 * }, function(err, result) {
	 *     // result now equals the first file in the list that exists
	 * });
	 */
	var detect = _createTester(eachOf, identity, _findGetResult);

	/**
	 * The same as [`detect`]{@link module:Collections.detect} but runs a maximum of `limit` async operations at a
	 * time.
	 *
	 * @name detectLimit
	 * @static
	 * @memberOf module:Collections
	 * @method
	 * @see [async.detect]{@link module:Collections.detect}
	 * @alias findLimit
	 * @category Collections
	 * @param {Array|Iterable|Object} coll - A collection to iterate over.
	 * @param {number} limit - The maximum number of async operations at a time.
	 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
	 * The iteratee is passed a `callback(err, truthValue)` which must be called
	 * with a boolean argument once it has completed. Invoked with (item, callback).
	 * @param {Function} [callback] - A callback which is called as soon as any
	 * iteratee returns `true`, or after all the `iteratee` functions have finished.
	 * Result will be the first item in the array that passes the truth test
	 * (iteratee) or the value `undefined` if none passed. Invoked with
	 * (err, result).
	 */
	var detectLimit = _createTester(eachOfLimit, identity, _findGetResult);

	/**
	 * The same as [`detect`]{@link module:Collections.detect} but runs only a single async operation at a time.
	 *
	 * @name detectSeries
	 * @static
	 * @memberOf module:Collections
	 * @method
	 * @see [async.detect]{@link module:Collections.detect}
	 * @alias findSeries
	 * @category Collections
	 * @param {Array|Iterable|Object} coll - A collection to iterate over.
	 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
	 * The iteratee is passed a `callback(err, truthValue)` which must be called
	 * with a boolean argument once it has completed. Invoked with (item, callback).
	 * @param {Function} [callback] - A callback which is called as soon as any
	 * iteratee returns `true`, or after all the `iteratee` functions have finished.
	 * Result will be the first item in the array that passes the truth test
	 * (iteratee) or the value `undefined` if none passed. Invoked with
	 * (err, result).
	 */
	var detectSeries = _createTester(eachOfSeries, identity, _findGetResult);

	function consoleFunc(name) {
	    return baseRest$1(function (fn, args) {
	        fn.apply(null, args.concat([baseRest$1(function (err, args) {
	            if (typeof console === 'object') {
	                if (err) {
	                    if (console.error) {
	                        console.error(err);
	                    }
	                } else if (console[name]) {
	                    arrayEach(args, function (x) {
	                        console[name](x);
	                    });
	                }
	            }
	        })]));
	    });
	}

	/**
	 * Logs the result of an `async` function to the `console` using `console.dir`
	 * to display the properties of the resulting object. Only works in Node.js or
	 * in browsers that support `console.dir` and `console.error` (such as FF and
	 * Chrome). If multiple arguments are returned from the async function,
	 * `console.dir` is called on each argument in order.
	 *
	 * @name dir
	 * @static
	 * @memberOf module:Utils
	 * @method
	 * @category Util
	 * @param {Function} function - The function you want to eventually apply all
	 * arguments to.
	 * @param {...*} arguments... - Any number of arguments to apply to the function.
	 * @example
	 *
	 * // in a module
	 * var hello = function(name, callback) {
	 *     setTimeout(function() {
	 *         callback(null, {hello: name});
	 *     }, 1000);
	 * };
	 *
	 * // in the node repl
	 * node> async.dir(hello, 'world');
	 * {hello: 'world'}
	 */
	var dir = consoleFunc('dir');

	/**
	 * The post-check version of [`during`]{@link module:ControlFlow.during}. To reflect the difference in
	 * the order of operations, the arguments `test` and `fn` are switched.
	 *
	 * Also a version of [`doWhilst`]{@link module:ControlFlow.doWhilst} with asynchronous `test` function.
	 * @name doDuring
	 * @static
	 * @memberOf module:ControlFlow
	 * @method
	 * @see [async.during]{@link module:ControlFlow.during}
	 * @category Control Flow
	 * @param {Function} fn - A function which is called each time `test` passes.
	 * The function is passed a `callback(err)`, which must be called once it has
	 * completed with an optional `err` argument. Invoked with (callback).
	 * @param {Function} test - asynchronous truth test to perform before each
	 * execution of `fn`. Invoked with (...args, callback), where `...args` are the
	 * non-error args from the previous callback of `fn`.
	 * @param {Function} [callback] - A callback which is called after the test
	 * function has failed and repeated execution of `fn` has stopped. `callback`
	 * will be passed an error if one occured, otherwise `null`.
	 */
	function doDuring(fn, test, callback) {
	    callback = onlyOnce(callback || noop);

	    var next = baseRest$1(function (err, args) {
	        if (err) return callback(err);
	        args.push(check);
	        test.apply(this, args);
	    });

	    function check(err, truth) {
	        if (err) return callback(err);
	        if (!truth) return callback(null);
	        fn(next);
	    }

	    check(null, true);
	}

	/**
	 * The post-check version of [`whilst`]{@link module:ControlFlow.whilst}. To reflect the difference in
	 * the order of operations, the arguments `test` and `iteratee` are switched.
	 *
	 * `doWhilst` is to `whilst` as `do while` is to `while` in plain JavaScript.
	 *
	 * @name doWhilst
	 * @static
	 * @memberOf module:ControlFlow
	 * @method
	 * @see [async.whilst]{@link module:ControlFlow.whilst}
	 * @category Control Flow
	 * @param {Function} iteratee - A function which is called each time `test`
	 * passes. The function is passed a `callback(err)`, which must be called once
	 * it has completed with an optional `err` argument. Invoked with (callback).
	 * @param {Function} test - synchronous truth test to perform after each
	 * execution of `iteratee`. Invoked with the non-error callback results of 
	 * `iteratee`.
	 * @param {Function} [callback] - A callback which is called after the test
	 * function has failed and repeated execution of `iteratee` has stopped.
	 * `callback` will be passed an error and any arguments passed to the final
	 * `iteratee`'s callback. Invoked with (err, [results]);
	 */
	function doWhilst(iteratee, test, callback) {
	    callback = onlyOnce(callback || noop);
	    var next = baseRest$1(function (err, args) {
	        if (err) return callback(err);
	        if (test.apply(this, args)) return iteratee(next);
	        callback.apply(null, [null].concat(args));
	    });
	    iteratee(next);
	}

	/**
	 * Like ['doWhilst']{@link module:ControlFlow.doWhilst}, except the `test` is inverted. Note the
	 * argument ordering differs from `until`.
	 *
	 * @name doUntil
	 * @static
	 * @memberOf module:ControlFlow
	 * @method
	 * @see [async.doWhilst]{@link module:ControlFlow.doWhilst}
	 * @category Control Flow
	 * @param {Function} fn - A function which is called each time `test` fails.
	 * The function is passed a `callback(err)`, which must be called once it has
	 * completed with an optional `err` argument. Invoked with (callback).
	 * @param {Function} test - synchronous truth test to perform after each
	 * execution of `fn`. Invoked with the non-error callback results of `fn`.
	 * @param {Function} [callback] - A callback which is called after the test
	 * function has passed and repeated execution of `fn` has stopped. `callback`
	 * will be passed an error and any arguments passed to the final `fn`'s
	 * callback. Invoked with (err, [results]);
	 */
	function doUntil(fn, test, callback) {
	    doWhilst(fn, function () {
	        return !test.apply(this, arguments);
	    }, callback);
	}

	/**
	 * Like [`whilst`]{@link module:ControlFlow.whilst}, except the `test` is an asynchronous function that
	 * is passed a callback in the form of `function (err, truth)`. If error is
	 * passed to `test` or `fn`, the main callback is immediately called with the
	 * value of the error.
	 *
	 * @name during
	 * @static
	 * @memberOf module:ControlFlow
	 * @method
	 * @see [async.whilst]{@link module:ControlFlow.whilst}
	 * @category Control Flow
	 * @param {Function} test - asynchronous truth test to perform before each
	 * execution of `fn`. Invoked with (callback).
	 * @param {Function} fn - A function which is called each time `test` passes.
	 * The function is passed a `callback(err)`, which must be called once it has
	 * completed with an optional `err` argument. Invoked with (callback).
	 * @param {Function} [callback] - A callback which is called after the test
	 * function has failed and repeated execution of `fn` has stopped. `callback`
	 * will be passed an error, if one occured, otherwise `null`.
	 * @example
	 *
	 * var count = 0;
	 *
	 * async.during(
	 *     function (callback) {
	 *         return callback(null, count < 5);
	 *     },
	 *     function (callback) {
	 *         count++;
	 *         setTimeout(callback, 1000);
	 *     },
	 *     function (err) {
	 *         // 5 seconds have passed
	 *     }
	 * );
	 */
	function during(test, fn, callback) {
	    callback = onlyOnce(callback || noop);

	    function next(err) {
	        if (err) return callback(err);
	        test(check);
	    }

	    function check(err, truth) {
	        if (err) return callback(err);
	        if (!truth) return callback(null);
	        fn(next);
	    }

	    test(check);
	}

	function _withoutIndex(iteratee) {
	    return function (value, index, callback) {
	        return iteratee(value, callback);
	    };
	}

	/**
	 * Applies the function `iteratee` to each item in `coll`, in parallel.
	 * The `iteratee` is called with an item from the list, and a callback for when
	 * it has finished. If the `iteratee` passes an error to its `callback`, the
	 * main `callback` (for the `each` function) is immediately called with the
	 * error.
	 *
	 * Note, that since this function applies `iteratee` to each item in parallel,
	 * there is no guarantee that the iteratee functions will complete in order.
	 *
	 * @name each
	 * @static
	 * @memberOf module:Collections
	 * @method
	 * @alias forEach
	 * @category Collection
	 * @param {Array|Iterable|Object} coll - A collection to iterate over.
	 * @param {Function} iteratee - A function to apply to each item
	 * in `coll`. The iteratee is passed a `callback(err)` which must be called once
	 * it has completed. If no error has occurred, the `callback` should be run
	 * without arguments or with an explicit `null` argument. The array index is not
	 * passed to the iteratee. Invoked with (item, callback). If you need the index,
	 * use `eachOf`.
	 * @param {Function} [callback] - A callback which is called when all
	 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
	 * @example
	 *
	 * // assuming openFiles is an array of file names and saveFile is a function
	 * // to save the modified contents of that file:
	 *
	 * async.each(openFiles, saveFile, function(err){
	 *   // if any of the saves produced an error, err would equal that error
	 * });
	 *
	 * // assuming openFiles is an array of file names
	 * async.each(openFiles, function(file, callback) {
	 *
	 *     // Perform operation on file here.
	 *     console.log('Processing file ' + file);
	 *
	 *     if( file.length > 32 ) {
	 *       console.log('This file name is too long');
	 *       callback('File name too long');
	 *     } else {
	 *       // Do work to process file here
	 *       console.log('File processed');
	 *       callback();
	 *     }
	 * }, function(err) {
	 *     // if any of the file processing produced an error, err would equal that error
	 *     if( err ) {
	 *       // One of the iterations produced an error.
	 *       // All processing will now stop.
	 *       console.log('A file failed to process');
	 *     } else {
	 *       console.log('All files have been processed successfully');
	 *     }
	 * });
	 */
	function eachLimit(coll, iteratee, callback) {
	  eachOf(coll, _withoutIndex(iteratee), callback);
	}

	/**
	 * The same as [`each`]{@link module:Collections.each} but runs a maximum of `limit` async operations at a time.
	 *
	 * @name eachLimit
	 * @static
	 * @memberOf module:Collections
	 * @method
	 * @see [async.each]{@link module:Collections.each}
	 * @alias forEachLimit
	 * @category Collection
	 * @param {Array|Iterable|Object} coll - A collection to iterate over.
	 * @param {number} limit - The maximum number of async operations at a time.
	 * @param {Function} iteratee - A function to apply to each item in `coll`. The
	 * iteratee is passed a `callback(err)` which must be called once it has
	 * completed. If no error has occurred, the `callback` should be run without
	 * arguments or with an explicit `null` argument. The array index is not passed
	 * to the iteratee. Invoked with (item, callback). If you need the index, use
	 * `eachOfLimit`.
	 * @param {Function} [callback] - A callback which is called when all
	 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
	 */
	function eachLimit$1(coll, limit, iteratee, callback) {
	  _eachOfLimit(limit)(coll, _withoutIndex(iteratee), callback);
	}

	/**
	 * The same as [`each`]{@link module:Collections.each} but runs only a single async operation at a time.
	 *
	 * @name eachSeries
	 * @static
	 * @memberOf module:Collections
	 * @method
	 * @see [async.each]{@link module:Collections.each}
	 * @alias forEachSeries
	 * @category Collection
	 * @param {Array|Iterable|Object} coll - A collection to iterate over.
	 * @param {Function} iteratee - A function to apply to each
	 * item in `coll`. The iteratee is passed a `callback(err)` which must be called
	 * once it has completed. If no error has occurred, the `callback` should be run
	 * without arguments or with an explicit `null` argument. The array index is
	 * not passed to the iteratee. Invoked with (item, callback). If you need the
	 * index, use `eachOfSeries`.
	 * @param {Function} [callback] - A callback which is called when all
	 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
	 */
	var eachSeries = doLimit(eachLimit$1, 1);

	/**
	 * Wrap an async function and ensure it calls its callback on a later tick of
	 * the event loop.  If the function already calls its callback on a next tick,
	 * no extra deferral is added. This is useful for preventing stack overflows
	 * (`RangeError: Maximum call stack size exceeded`) and generally keeping
	 * [Zalgo](http://blog.izs.me/post/59142742143/designing-apis-for-asynchrony)
	 * contained.
	 *
	 * @name ensureAsync
	 * @static
	 * @memberOf module:Utils
	 * @method
	 * @category Util
	 * @param {Function} fn - an async function, one that expects a node-style
	 * callback as its last argument.
	 * @returns {Function} Returns a wrapped function with the exact same call
	 * signature as the function passed in.
	 * @example
	 *
	 * function sometimesAsync(arg, callback) {
	 *     if (cache[arg]) {
	 *         return callback(null, cache[arg]); // this would be synchronous!!
	 *     } else {
	 *         doSomeIO(arg, callback); // this IO would be asynchronous
	 *     }
	 * }
	 *
	 * // this has a risk of stack overflows if many results are cached in a row
	 * async.mapSeries(args, sometimesAsync, done);
	 *
	 * // this will defer sometimesAsync's callback if necessary,
	 * // preventing stack overflows
	 * async.mapSeries(args, async.ensureAsync(sometimesAsync), done);
	 */
	function ensureAsync(fn) {
	    return initialParams(function (args, callback) {
	        var sync = true;
	        args.push(function () {
	            var innerArgs = arguments;
	            if (sync) {
	                setImmediate$1(function () {
	                    callback.apply(null, innerArgs);
	                });
	            } else {
	                callback.apply(null, innerArgs);
	            }
	        });
	        fn.apply(this, args);
	        sync = false;
	    });
	}

	function notId(v) {
	    return !v;
	}

	/**
	 * Returns `true` if every element in `coll` satisfies an async test. If any
	 * iteratee call returns `false`, the main `callback` is immediately called.
	 *
	 * @name every
	 * @static
	 * @memberOf module:Collections
	 * @method
	 * @alias all
	 * @category Collection
	 * @param {Array|Iterable|Object} coll - A collection to iterate over.
	 * @param {Function} iteratee - A truth test to apply to each item in the
	 * collection in parallel. The iteratee is passed a `callback(err, truthValue)`
	 * which must be called with a  boolean argument once it has completed. Invoked
	 * with (item, callback).
	 * @param {Function} [callback] - A callback which is called after all the
	 * `iteratee` functions have finished. Result will be either `true` or `false`
	 * depending on the values of the async tests. Invoked with (err, result).
	 * @example
	 *
	 * async.every(['file1','file2','file3'], function(filePath, callback) {
	 *     fs.access(filePath, function(err) {
	 *         callback(null, !err)
	 *     });
	 * }, function(err, result) {
	 *     // if result is true then every file exists
	 * });
	 */
	var every = _createTester(eachOf, notId, notId);

	/**
	 * The same as [`every`]{@link module:Collections.every} but runs a maximum of `limit` async operations at a time.
	 *
	 * @name everyLimit
	 * @static
	 * @memberOf module:Collections
	 * @method
	 * @see [async.every]{@link module:Collections.every}
	 * @alias allLimit
	 * @category Collection
	 * @param {Array|Iterable|Object} coll - A collection to iterate over.
	 * @param {number} limit - The maximum number of async operations at a time.
	 * @param {Function} iteratee - A truth test to apply to each item in the
	 * collection in parallel. The iteratee is passed a `callback(err, truthValue)`
	 * which must be called with a  boolean argument once it has completed. Invoked
	 * with (item, callback).
	 * @param {Function} [callback] - A callback which is called after all the
	 * `iteratee` functions have finished. Result will be either `true` or `false`
	 * depending on the values of the async tests. Invoked with (err, result).
	 */
	var everyLimit = _createTester(eachOfLimit, notId, notId);

	/**
	 * The same as [`every`]{@link module:Collections.every} but runs only a single async operation at a time.
	 *
	 * @name everySeries
	 * @static
	 * @memberOf module:Collections
	 * @method
	 * @see [async.every]{@link module:Collections.every}
	 * @alias allSeries
	 * @category Collection
	 * @param {Array|Iterable|Object} coll - A collection to iterate over.
	 * @param {Function} iteratee - A truth test to apply to each item in the
	 * collection in parallel. The iteratee is passed a `callback(err, truthValue)`
	 * which must be called with a  boolean argument once it has completed. Invoked
	 * with (item, callback).
	 * @param {Function} [callback] - A callback which is called after all the
	 * `iteratee` functions have finished. Result will be either `true` or `false`
	 * depending on the values of the async tests. Invoked with (err, result).
	 */
	var everySeries = doLimit(everyLimit, 1);

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	function _filter(eachfn, arr, iteratee, callback) {
	    callback = once(callback || noop);
	    var results = [];
	    eachfn(arr, function (x, index, callback) {
	        iteratee(x, function (err, v) {
	            if (err) {
	                callback(err);
	            } else {
	                if (v) {
	                    results.push({ index: index, value: x });
	                }
	                callback();
	            }
	        });
	    }, function (err) {
	        if (err) {
	            callback(err);
	        } else {
	            callback(null, arrayMap(results.sort(function (a, b) {
	                return a.index - b.index;
	            }), baseProperty('value')));
	        }
	    });
	}

	/**
	 * Returns a new array of all the values in `coll` which pass an async truth
	 * test. This operation is performed in parallel, but the results array will be
	 * in the same order as the original.
	 *
	 * @name filter
	 * @static
	 * @memberOf module:Collections
	 * @method
	 * @alias select
	 * @category Collection
	 * @param {Array|Iterable|Object} coll - A collection to iterate over.
	 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
	 * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
	 * with a boolean argument once it has completed. Invoked with (item, callback).
	 * @param {Function} [callback] - A callback which is called after all the
	 * `iteratee` functions have finished. Invoked with (err, results).
	 * @example
	 *
	 * async.filter(['file1','file2','file3'], function(filePath, callback) {
	 *     fs.access(filePath, function(err) {
	 *         callback(null, !err)
	 *     });
	 * }, function(err, results) {
	 *     // results now equals an array of the existing files
	 * });
	 */
	var filter = doParallel(_filter);

	/**
	 * The same as [`filter`]{@link module:Collections.filter} but runs a maximum of `limit` async operations at a
	 * time.
	 *
	 * @name filterLimit
	 * @static
	 * @memberOf module:Collections
	 * @method
	 * @see [async.filter]{@link module:Collections.filter}
	 * @alias selectLimit
	 * @category Collection
	 * @param {Array|Iterable|Object} coll - A collection to iterate over.
	 * @param {number} limit - The maximum number of async operations at a time.
	 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
	 * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
	 * with a boolean argument once it has completed. Invoked with (item, callback).
	 * @param {Function} [callback] - A callback which is called after all the
	 * `iteratee` functions have finished. Invoked with (err, results).
	 */
	var filterLimit = doParallelLimit(_filter);

	/**
	 * The same as [`filter`]{@link module:Collections.filter} but runs only a single async operation at a time.
	 *
	 * @name filterSeries
	 * @static
	 * @memberOf module:Collections
	 * @method
	 * @see [async.filter]{@link module:Collections.filter}
	 * @alias selectSeries
	 * @category Collection
	 * @param {Array|Iterable|Object} coll - A collection to iterate over.
	 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
	 * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
	 * with a boolean argument once it has completed. Invoked with (item, callback).
	 * @param {Function} [callback] - A callback which is called after all the
	 * `iteratee` functions have finished. Invoked with (err, results)
	 */
	var filterSeries = doLimit(filterLimit, 1);

	/**
	 * Calls the asynchronous function `fn` with a callback parameter that allows it
	 * to call itself again, in series, indefinitely.

	 * If an error is passed to the
	 * callback then `errback` is called with the error, and execution stops,
	 * otherwise it will never be called.
	 *
	 * @name forever
	 * @static
	 * @memberOf module:ControlFlow
	 * @method
	 * @category Control Flow
	 * @param {Function} fn - a function to call repeatedly. Invoked with (next).
	 * @param {Function} [errback] - when `fn` passes an error to it's callback,
	 * this function will be called, and execution stops. Invoked with (err).
	 * @example
	 *
	 * async.forever(
	 *     function(next) {
	 *         // next is suitable for passing to things that need a callback(err [, whatever]);
	 *         // it will result in this function being called again.
	 *     },
	 *     function(err) {
	 *         // if next is called with a value in its first parameter, it will appear
	 *         // in here as 'err', and execution will stop.
	 *     }
	 * );
	 */
	function forever(fn, errback) {
	    var done = onlyOnce(errback || noop);
	    var task = ensureAsync(fn);

	    function next(err) {
	        if (err) return done(err);
	        task(next);
	    }
	    next();
	}

	/**
	 * Logs the result of an `async` function to the `console`. Only works in
	 * Node.js or in browsers that support `console.log` and `console.error` (such
	 * as FF and Chrome). If multiple arguments are returned from the async
	 * function, `console.log` is called on each argument in order.
	 *
	 * @name log
	 * @static
	 * @memberOf module:Utils
	 * @method
	 * @category Util
	 * @param {Function} function - The function you want to eventually apply all
	 * arguments to.
	 * @param {...*} arguments... - Any number of arguments to apply to the function.
	 * @example
	 *
	 * // in a module
	 * var hello = function(name, callback) {
	 *     setTimeout(function() {
	 *         callback(null, 'hello ' + name);
	 *     }, 1000);
	 * };
	 *
	 * // in the node repl
	 * node> async.log(hello, 'world');
	 * 'hello world'
	 */
	var log = consoleFunc('log');

	/**
	 * The same as [`mapValues`]{@link module:Collections.mapValues} but runs a maximum of `limit` async operations at a
	 * time.
	 *
	 * @name mapValuesLimit
	 * @static
	 * @memberOf module:Collections
	 * @method
	 * @see [async.mapValues]{@link module:Collections.mapValues}
	 * @category Collection
	 * @param {Object} obj - A collection to iterate over.
	 * @param {number} limit - The maximum number of async operations at a time.
	 * @param {Function} iteratee - A function to apply to each value in `obj`.
	 * The iteratee is passed a `callback(err, transformed)` which must be called
	 * once it has completed with an error (which can be `null`) and a
	 * transformed value. Invoked with (value, key, callback).
	 * @param {Function} [callback] - A callback which is called when all `iteratee`
	 * functions have finished, or an error occurs. `result` is a new object consisting
	 * of each key from `obj`, with each transformed value on the right-hand side.
	 * Invoked with (err, result).
	 */
	function mapValuesLimit(obj, limit, iteratee, callback) {
	    callback = once(callback || noop);
	    var newObj = {};
	    eachOfLimit(obj, limit, function (val, key, next) {
	        iteratee(val, key, function (err, result) {
	            if (err) return next(err);
	            newObj[key] = result;
	            next();
	        });
	    }, function (err) {
	        callback(err, newObj);
	    });
	}

	/**
	 * A relative of [`map`]{@link module:Collections.map}, designed for use with objects.
	 *
	 * Produces a new Object by mapping each value of `obj` through the `iteratee`
	 * function. The `iteratee` is called each `value` and `key` from `obj` and a
	 * callback for when it has finished processing. Each of these callbacks takes
	 * two arguments: an `error`, and the transformed item from `obj`. If `iteratee`
	 * passes an error to its callback, the main `callback` (for the `mapValues`
	 * function) is immediately called with the error.
	 *
	 * Note, the order of the keys in the result is not guaranteed.  The keys will
	 * be roughly in the order they complete, (but this is very engine-specific)
	 *
	 * @name mapValues
	 * @static
	 * @memberOf module:Collections
	 * @method
	 * @category Collection
	 * @param {Object} obj - A collection to iterate over.
	 * @param {Function} iteratee - A function to apply to each value and key in
	 * `coll`. The iteratee is passed a `callback(err, transformed)` which must be
	 * called once it has completed with an error (which can be `null`) and a
	 * transformed value. Invoked with (value, key, callback).
	 * @param {Function} [callback] - A callback which is called when all `iteratee`
	 * functions have finished, or an error occurs. `result` is a new object consisting
	 * of each key from `obj`, with each transformed value on the right-hand side.
	 * Invoked with (err, result).
	 * @example
	 *
	 * async.mapValues({
	 *     f1: 'file1',
	 *     f2: 'file2',
	 *     f3: 'file3'
	 * }, function (file, key, callback) {
	 *   fs.stat(file, callback);
	 * }, function(err, result) {
	 *     // result is now a map of stats for each file, e.g.
	 *     // {
	 *     //     f1: [stats for file1],
	 *     //     f2: [stats for file2],
	 *     //     f3: [stats for file3]
	 *     // }
	 * });
	 */

	var mapValues = doLimit(mapValuesLimit, Infinity);

	/**
	 * The same as [`mapValues`]{@link module:Collections.mapValues} but runs only a single async operation at a time.
	 *
	 * @name mapValuesSeries
	 * @static
	 * @memberOf module:Collections
	 * @method
	 * @see [async.mapValues]{@link module:Collections.mapValues}
	 * @category Collection
	 * @param {Object} obj - A collection to iterate over.
	 * @param {Function} iteratee - A function to apply to each value in `obj`.
	 * The iteratee is passed a `callback(err, transformed)` which must be called
	 * once it has completed with an error (which can be `null`) and a
	 * transformed value. Invoked with (value, key, callback).
	 * @param {Function} [callback] - A callback which is called when all `iteratee`
	 * functions have finished, or an error occurs. `result` is a new object consisting
	 * of each key from `obj`, with each transformed value on the right-hand side.
	 * Invoked with (err, result).
	 */
	var mapValuesSeries = doLimit(mapValuesLimit, 1);

	function has(obj, key) {
	    return key in obj;
	}

	/**
	 * Caches the results of an `async` function. When creating a hash to store
	 * function results against, the callback is omitted from the hash and an
	 * optional hash function can be used.
	 *
	 * If no hash function is specified, the first argument is used as a hash key,
	 * which may work reasonably if it is a string or a data type that converts to a
	 * distinct string. Note that objects and arrays will not behave reasonably.
	 * Neither will cases where the other arguments are significant. In such cases,
	 * specify your own hash function.
	 *
	 * The cache of results is exposed as the `memo` property of the function
	 * returned by `memoize`.
	 *
	 * @name memoize
	 * @static
	 * @memberOf module:Utils
	 * @method
	 * @category Util
	 * @param {Function} fn - The function to proxy and cache results from.
	 * @param {Function} hasher - An optional function for generating a custom hash
	 * for storing results. It has all the arguments applied to it apart from the
	 * callback, and must be synchronous.
	 * @returns {Function} a memoized version of `fn`
	 * @example
	 *
	 * var slow_fn = function(name, callback) {
	 *     // do something
	 *     callback(null, result);
	 * };
	 * var fn = async.memoize(slow_fn);
	 *
	 * // fn can now be used as if it were slow_fn
	 * fn('some name', function() {
	 *     // callback
	 * });
	 */
	function memoize(fn, hasher) {
	    var memo = Object.create(null);
	    var queues = Object.create(null);
	    hasher = hasher || identity;
	    var memoized = initialParams(function memoized(args, callback) {
	        var key = hasher.apply(null, args);
	        if (has(memo, key)) {
	            setImmediate$1(function () {
	                callback.apply(null, memo[key]);
	            });
	        } else if (has(queues, key)) {
	            queues[key].push(callback);
	        } else {
	            queues[key] = [callback];
	            fn.apply(null, args.concat([baseRest$1(function (args) {
	                memo[key] = args;
	                var q = queues[key];
	                delete queues[key];
	                for (var i = 0, l = q.length; i < l; i++) {
	                    q[i].apply(null, args);
	                }
	            })]));
	        }
	    });
	    memoized.memo = memo;
	    memoized.unmemoized = fn;
	    return memoized;
	}

	/**
	 * Calls `callback` on a later loop around the event loop. In Node.js this just
	 * calls `setImmediate`.  In the browser it will use `setImmediate` if
	 * available, otherwise `setTimeout(callback, 0)`, which means other higher
	 * priority events may precede the execution of `callback`.
	 *
	 * This is used internally for browser-compatibility purposes.
	 *
	 * @name nextTick
	 * @static
	 * @memberOf module:Utils
	 * @method
	 * @alias setImmediate
	 * @category Util
	 * @param {Function} callback - The function to call on a later loop around
	 * the event loop. Invoked with (args...).
	 * @param {...*} args... - any number of additional arguments to pass to the
	 * callback on the next tick.
	 * @example
	 *
	 * var call_order = [];
	 * async.nextTick(function() {
	 *     call_order.push('two');
	 *     // call_order now equals ['one','two']
	 * });
	 * call_order.push('one');
	 *
	 * async.setImmediate(function (a, b, c) {
	 *     // a, b, and c equal 1, 2, and 3
	 * }, 1, 2, 3);
	 */
	var _defer$1;

	if (hasNextTick) {
	    _defer$1 = process.nextTick;
	} else if (hasSetImmediate) {
	    _defer$1 = setImmediate;
	} else {
	    _defer$1 = fallback;
	}

	var nextTick = wrap(_defer$1);

	function _parallel(eachfn, tasks, callback) {
	    callback = callback || noop;
	    var results = isArrayLike(tasks) ? [] : {};

	    eachfn(tasks, function (task, key, callback) {
	        task(baseRest$1(function (err, args) {
	            if (args.length <= 1) {
	                args = args[0];
	            }
	            results[key] = args;
	            callback(err);
	        }));
	    }, function (err) {
	        callback(err, results);
	    });
	}

	/**
	 * Run the `tasks` collection of functions in parallel, without waiting until
	 * the previous function has completed. If any of the functions pass an error to
	 * its callback, the main `callback` is immediately called with the value of the
	 * error. Once the `tasks` have completed, the results are passed to the final
	 * `callback` as an array.
	 *
	 * **Note:** `parallel` is about kicking-off I/O tasks in parallel, not about
	 * parallel execution of code.  If your tasks do not use any timers or perform
	 * any I/O, they will actually be executed in series.  Any synchronous setup
	 * sections for each task will happen one after the other.  JavaScript remains
	 * single-threaded.
	 *
	 * It is also possible to use an object instead of an array. Each property will
	 * be run as a function and the results will be passed to the final `callback`
	 * as an object instead of an array. This can be a more readable way of handling
	 * results from {@link async.parallel}.
	 *
	 * @name parallel
	 * @static
	 * @memberOf module:ControlFlow
	 * @method
	 * @category Control Flow
	 * @param {Array|Iterable|Object} tasks - A collection containing functions to run.
	 * Each function is passed a `callback(err, result)` which it must call on
	 * completion with an error `err` (which can be `null`) and an optional `result`
	 * value.
	 * @param {Function} [callback] - An optional callback to run once all the
	 * functions have completed successfully. This function gets a results array
	 * (or object) containing all the result arguments passed to the task callbacks.
	 * Invoked with (err, results).
	 * @example
	 * async.parallel([
	 *     function(callback) {
	 *         setTimeout(function() {
	 *             callback(null, 'one');
	 *         }, 200);
	 *     },
	 *     function(callback) {
	 *         setTimeout(function() {
	 *             callback(null, 'two');
	 *         }, 100);
	 *     }
	 * ],
	 * // optional callback
	 * function(err, results) {
	 *     // the results array will equal ['one','two'] even though
	 *     // the second function had a shorter timeout.
	 * });
	 *
	 * // an example using an object instead of an array
	 * async.parallel({
	 *     one: function(callback) {
	 *         setTimeout(function() {
	 *             callback(null, 1);
	 *         }, 200);
	 *     },
	 *     two: function(callback) {
	 *         setTimeout(function() {
	 *             callback(null, 2);
	 *         }, 100);
	 *     }
	 * }, function(err, results) {
	 *     // results is now equals to: {one: 1, two: 2}
	 * });
	 */
	function parallelLimit(tasks, callback) {
	  _parallel(eachOf, tasks, callback);
	}

	/**
	 * The same as [`parallel`]{@link module:ControlFlow.parallel} but runs a maximum of `limit` async operations at a
	 * time.
	 *
	 * @name parallelLimit
	 * @static
	 * @memberOf module:ControlFlow
	 * @method
	 * @see [async.parallel]{@link module:ControlFlow.parallel}
	 * @category Control Flow
	 * @param {Array|Collection} tasks - A collection containing functions to run.
	 * Each function is passed a `callback(err, result)` which it must call on
	 * completion with an error `err` (which can be `null`) and an optional `result`
	 * value.
	 * @param {number} limit - The maximum number of async operations at a time.
	 * @param {Function} [callback] - An optional callback to run once all the
	 * functions have completed successfully. This function gets a results array
	 * (or object) containing all the result arguments passed to the task callbacks.
	 * Invoked with (err, results).
	 */
	function parallelLimit$1(tasks, limit, callback) {
	  _parallel(_eachOfLimit(limit), tasks, callback);
	}

	/**
	 * A queue of tasks for the worker function to complete.
	 * @typedef {Object} QueueObject
	 * @memberOf module:ControlFlow
	 * @property {Function} length - a function returning the number of items
	 * waiting to be processed. Invoke with `queue.length()`.
	 * @property {boolean} started - a boolean indicating whether or not any
	 * items have been pushed and processed by the queue.
	 * @property {Function} running - a function returning the number of items
	 * currently being processed. Invoke with `queue.running()`.
	 * @property {Function} workersList - a function returning the array of items
	 * currently being processed. Invoke with `queue.workersList()`.
	 * @property {Function} idle - a function returning false if there are items
	 * waiting or being processed, or true if not. Invoke with `queue.idle()`.
	 * @property {number} concurrency - an integer for determining how many `worker`
	 * functions should be run in parallel. This property can be changed after a
	 * `queue` is created to alter the concurrency on-the-fly.
	 * @property {Function} push - add a new task to the `queue`. Calls `callback`
	 * once the `worker` has finished processing the task. Instead of a single task,
	 * a `tasks` array can be submitted. The respective callback is used for every
	 * task in the list. Invoke with `queue.push(task, [callback])`,
	 * @property {Function} unshift - add a new task to the front of the `queue`.
	 * Invoke with `queue.unshift(task, [callback])`.
	 * @property {Function} saturated - a callback that is called when the number of
	 * running workers hits the `concurrency` limit, and further tasks will be
	 * queued.
	 * @property {Function} unsaturated - a callback that is called when the number
	 * of running workers is less than the `concurrency` & `buffer` limits, and
	 * further tasks will not be queued.
	 * @property {number} buffer - A minimum threshold buffer in order to say that
	 * the `queue` is `unsaturated`.
	 * @property {Function} empty - a callback that is called when the last item
	 * from the `queue` is given to a `worker`.
	 * @property {Function} drain - a callback that is called when the last item
	 * from the `queue` has returned from the `worker`.
	 * @property {Function} error - a callback that is called when a task errors.
	 * Has the signature `function(error, task)`.
	 * @property {boolean} paused - a boolean for determining whether the queue is
	 * in a paused state.
	 * @property {Function} pause - a function that pauses the processing of tasks
	 * until `resume()` is called. Invoke with `queue.pause()`.
	 * @property {Function} resume - a function that resumes the processing of
	 * queued tasks when the queue is paused. Invoke with `queue.resume()`.
	 * @property {Function} kill - a function that removes the `drain` callback and
	 * empties remaining tasks from the queue forcing it to go idle. Invoke with `queue.kill()`.
	 */

	/**
	 * Creates a `queue` object with the specified `concurrency`. Tasks added to the
	 * `queue` are processed in parallel (up to the `concurrency` limit). If all
	 * `worker`s are in progress, the task is queued until one becomes available.
	 * Once a `worker` completes a `task`, that `task`'s callback is called.
	 *
	 * @name queue
	 * @static
	 * @memberOf module:ControlFlow
	 * @method
	 * @category Control Flow
	 * @param {Function} worker - An asynchronous function for processing a queued
	 * task, which must call its `callback(err)` argument when finished, with an
	 * optional `error` as an argument.  If you want to handle errors from an
	 * individual task, pass a callback to `q.push()`. Invoked with
	 * (task, callback).
	 * @param {number} [concurrency=1] - An `integer` for determining how many
	 * `worker` functions should be run in parallel.  If omitted, the concurrency
	 * defaults to `1`.  If the concurrency is `0`, an error is thrown.
	 * @returns {module:ControlFlow.QueueObject} A queue object to manage the tasks. Callbacks can
	 * attached as certain properties to listen for specific events during the
	 * lifecycle of the queue.
	 * @example
	 *
	 * // create a queue object with concurrency 2
	 * var q = async.queue(function(task, callback) {
	 *     console.log('hello ' + task.name);
	 *     callback();
	 * }, 2);
	 *
	 * // assign a callback
	 * q.drain = function() {
	 *     console.log('all items have been processed');
	 * };
	 *
	 * // add some items to the queue
	 * q.push({name: 'foo'}, function(err) {
	 *     console.log('finished processing foo');
	 * });
	 * q.push({name: 'bar'}, function (err) {
	 *     console.log('finished processing bar');
	 * });
	 *
	 * // add some items to the queue (batch-wise)
	 * q.push([{name: 'baz'},{name: 'bay'},{name: 'bax'}], function(err) {
	 *     console.log('finished processing item');
	 * });
	 *
	 * // add some items to the front of the queue
	 * q.unshift({name: 'bar'}, function (err) {
	 *     console.log('finished processing bar');
	 * });
	 */
	var queue$1 = function (worker, concurrency) {
	  return queue(function (items, cb) {
	    worker(items[0], cb);
	  }, concurrency, 1);
	};

	/**
	 * The same as [async.queue]{@link module:ControlFlow.queue} only tasks are assigned a priority and
	 * completed in ascending priority order.
	 *
	 * @name priorityQueue
	 * @static
	 * @memberOf module:ControlFlow
	 * @method
	 * @see [async.queue]{@link module:ControlFlow.queue}
	 * @category Control Flow
	 * @param {Function} worker - An asynchronous function for processing a queued
	 * task, which must call its `callback(err)` argument when finished, with an
	 * optional `error` as an argument.  If you want to handle errors from an
	 * individual task, pass a callback to `q.push()`. Invoked with
	 * (task, callback).
	 * @param {number} concurrency - An `integer` for determining how many `worker`
	 * functions should be run in parallel.  If omitted, the concurrency defaults to
	 * `1`.  If the concurrency is `0`, an error is thrown.
	 * @returns {module:ControlFlow.QueueObject} A priorityQueue object to manage the tasks. There are two
	 * differences between `queue` and `priorityQueue` objects:
	 * * `push(task, priority, [callback])` - `priority` should be a number. If an
	 *   array of `tasks` is given, all tasks will be assigned the same priority.
	 * * The `unshift` method was removed.
	 */
	var priorityQueue = function (worker, concurrency) {
	    // Start with a normal queue
	    var q = queue$1(worker, concurrency);

	    // Override push to accept second parameter representing priority
	    q.push = function (data, priority, callback) {
	        if (callback == null) callback = noop;
	        if (typeof callback !== 'function') {
	            throw new Error('task callback must be a function');
	        }
	        q.started = true;
	        if (!isArray(data)) {
	            data = [data];
	        }
	        if (data.length === 0) {
	            // call drain immediately if there are no tasks
	            return setImmediate$1(function () {
	                q.drain();
	            });
	        }

	        priority = priority || 0;
	        var nextNode = q._tasks.head;
	        while (nextNode && priority >= nextNode.priority) {
	            nextNode = nextNode.next;
	        }

	        for (var i = 0, l = data.length; i < l; i++) {
	            var item = {
	                data: data[i],
	                priority: priority,
	                callback: callback
	            };

	            if (nextNode) {
	                q._tasks.insertBefore(nextNode, item);
	            } else {
	                q._tasks.push(item);
	            }
	        }
	        setImmediate$1(q.process);
	    };

	    // Remove unshift function
	    delete q.unshift;

	    return q;
	};

	/**
	 * Runs the `tasks` array of functions in parallel, without waiting until the
	 * previous function has completed. Once any of the `tasks` complete or pass an
	 * error to its callback, the main `callback` is immediately called. It's
	 * equivalent to `Promise.race()`.
	 *
	 * @name race
	 * @static
	 * @memberOf module:ControlFlow
	 * @method
	 * @category Control Flow
	 * @param {Array} tasks - An array containing functions to run. Each function
	 * is passed a `callback(err, result)` which it must call on completion with an
	 * error `err` (which can be `null`) and an optional `result` value.
	 * @param {Function} callback - A callback to run once any of the functions have
	 * completed. This function gets an error or result from the first function that
	 * completed. Invoked with (err, result).
	 * @returns undefined
	 * @example
	 *
	 * async.race([
	 *     function(callback) {
	 *         setTimeout(function() {
	 *             callback(null, 'one');
	 *         }, 200);
	 *     },
	 *     function(callback) {
	 *         setTimeout(function() {
	 *             callback(null, 'two');
	 *         }, 100);
	 *     }
	 * ],
	 * // main callback
	 * function(err, result) {
	 *     // the result will be equal to 'two' as it finishes earlier
	 * });
	 */
	function race(tasks, callback) {
	    callback = once(callback || noop);
	    if (!isArray(tasks)) return callback(new TypeError('First argument to race must be an array of functions'));
	    if (!tasks.length) return callback();
	    for (var i = 0, l = tasks.length; i < l; i++) {
	        tasks[i](callback);
	    }
	}

	var slice = Array.prototype.slice;

	/**
	 * Same as [`reduce`]{@link module:Collections.reduce}, only operates on `array` in reverse order.
	 *
	 * @name reduceRight
	 * @static
	 * @memberOf module:Collections
	 * @method
	 * @see [async.reduce]{@link module:Collections.reduce}
	 * @alias foldr
	 * @category Collection
	 * @param {Array} array - A collection to iterate over.
	 * @param {*} memo - The initial state of the reduction.
	 * @param {Function} iteratee - A function applied to each item in the
	 * array to produce the next step in the reduction. The `iteratee` is passed a
	 * `callback(err, reduction)` which accepts an optional error as its first
	 * argument, and the state of the reduction as the second. If an error is
	 * passed to the callback, the reduction is stopped and the main `callback` is
	 * immediately called with the error. Invoked with (memo, item, callback).
	 * @param {Function} [callback] - A callback which is called after all the
	 * `iteratee` functions have finished. Result is the reduced value. Invoked with
	 * (err, result).
	 */
	function reduceRight(array, memo, iteratee, callback) {
	  var reversed = slice.call(array).reverse();
	  reduce(reversed, memo, iteratee, callback);
	}

	/**
	 * Wraps the function in another function that always returns data even when it
	 * errors.
	 *
	 * The object returned has either the property `error` or `value`.
	 *
	 * @name reflect
	 * @static
	 * @memberOf module:Utils
	 * @method
	 * @category Util
	 * @param {Function} fn - The function you want to wrap
	 * @returns {Function} - A function that always passes null to it's callback as
	 * the error. The second argument to the callback will be an `object` with
	 * either an `error` or a `value` property.
	 * @example
	 *
	 * async.parallel([
	 *     async.reflect(function(callback) {
	 *         // do some stuff ...
	 *         callback(null, 'one');
	 *     }),
	 *     async.reflect(function(callback) {
	 *         // do some more stuff but error ...
	 *         callback('bad stuff happened');
	 *     }),
	 *     async.reflect(function(callback) {
	 *         // do some more stuff ...
	 *         callback(null, 'two');
	 *     })
	 * ],
	 * // optional callback
	 * function(err, results) {
	 *     // values
	 *     // results[0].value = 'one'
	 *     // results[1].error = 'bad stuff happened'
	 *     // results[2].value = 'two'
	 * });
	 */
	function reflect(fn) {
	    return initialParams(function reflectOn(args, reflectCallback) {
	        args.push(baseRest$1(function callback(err, cbArgs) {
	            if (err) {
	                reflectCallback(null, {
	                    error: err
	                });
	            } else {
	                var value = null;
	                if (cbArgs.length === 1) {
	                    value = cbArgs[0];
	                } else if (cbArgs.length > 1) {
	                    value = cbArgs;
	                }
	                reflectCallback(null, {
	                    value: value
	                });
	            }
	        }));

	        return fn.apply(this, args);
	    });
	}

	function reject$1(eachfn, arr, iteratee, callback) {
	    _filter(eachfn, arr, function (value, cb) {
	        iteratee(value, function (err, v) {
	            if (err) {
	                cb(err);
	            } else {
	                cb(null, !v);
	            }
	        });
	    }, callback);
	}

	/**
	 * The opposite of [`filter`]{@link module:Collections.filter}. Removes values that pass an `async` truth test.
	 *
	 * @name reject
	 * @static
	 * @memberOf module:Collections
	 * @method
	 * @see [async.filter]{@link module:Collections.filter}
	 * @category Collection
	 * @param {Array|Iterable|Object} coll - A collection to iterate over.
	 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
	 * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
	 * with a boolean argument once it has completed. Invoked with (item, callback).
	 * @param {Function} [callback] - A callback which is called after all the
	 * `iteratee` functions have finished. Invoked with (err, results).
	 * @example
	 *
	 * async.reject(['file1','file2','file3'], function(filePath, callback) {
	 *     fs.access(filePath, function(err) {
	 *         callback(null, !err)
	 *     });
	 * }, function(err, results) {
	 *     // results now equals an array of missing files
	 *     createFiles(results);
	 * });
	 */
	var reject = doParallel(reject$1);

	/**
	 * A helper function that wraps an array or an object of functions with reflect.
	 *
	 * @name reflectAll
	 * @static
	 * @memberOf module:Utils
	 * @method
	 * @see [async.reflect]{@link module:Utils.reflect}
	 * @category Util
	 * @param {Array} tasks - The array of functions to wrap in `async.reflect`.
	 * @returns {Array} Returns an array of functions, each function wrapped in
	 * `async.reflect`
	 * @example
	 *
	 * let tasks = [
	 *     function(callback) {
	 *         setTimeout(function() {
	 *             callback(null, 'one');
	 *         }, 200);
	 *     },
	 *     function(callback) {
	 *         // do some more stuff but error ...
	 *         callback(new Error('bad stuff happened'));
	 *     },
	 *     function(callback) {
	 *         setTimeout(function() {
	 *             callback(null, 'two');
	 *         }, 100);
	 *     }
	 * ];
	 *
	 * async.parallel(async.reflectAll(tasks),
	 * // optional callback
	 * function(err, results) {
	 *     // values
	 *     // results[0].value = 'one'
	 *     // results[1].error = Error('bad stuff happened')
	 *     // results[2].value = 'two'
	 * });
	 *
	 * // an example using an object instead of an array
	 * let tasks = {
	 *     one: function(callback) {
	 *         setTimeout(function() {
	 *             callback(null, 'one');
	 *         }, 200);
	 *     },
	 *     two: function(callback) {
	 *         callback('two');
	 *     },
	 *     three: function(callback) {
	 *         setTimeout(function() {
	 *             callback(null, 'three');
	 *         }, 100);
	 *     }
	 * };
	 *
	 * async.parallel(async.reflectAll(tasks),
	 * // optional callback
	 * function(err, results) {
	 *     // values
	 *     // results.one.value = 'one'
	 *     // results.two.error = 'two'
	 *     // results.three.value = 'three'
	 * });
	 */
	function reflectAll(tasks) {
	    var results;
	    if (isArray(tasks)) {
	        results = arrayMap(tasks, reflect);
	    } else {
	        results = {};
	        baseForOwn(tasks, function (task, key) {
	            results[key] = reflect.call(this, task);
	        });
	    }
	    return results;
	}

	/**
	 * The same as [`reject`]{@link module:Collections.reject} but runs a maximum of `limit` async operations at a
	 * time.
	 *
	 * @name rejectLimit
	 * @static
	 * @memberOf module:Collections
	 * @method
	 * @see [async.reject]{@link module:Collections.reject}
	 * @category Collection
	 * @param {Array|Iterable|Object} coll - A collection to iterate over.
	 * @param {number} limit - The maximum number of async operations at a time.
	 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
	 * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
	 * with a boolean argument once it has completed. Invoked with (item, callback).
	 * @param {Function} [callback] - A callback which is called after all the
	 * `iteratee` functions have finished. Invoked with (err, results).
	 */
	var rejectLimit = doParallelLimit(reject$1);

	/**
	 * The same as [`reject`]{@link module:Collections.reject} but runs only a single async operation at a time.
	 *
	 * @name rejectSeries
	 * @static
	 * @memberOf module:Collections
	 * @method
	 * @see [async.reject]{@link module:Collections.reject}
	 * @category Collection
	 * @param {Array|Iterable|Object} coll - A collection to iterate over.
	 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
	 * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
	 * with a boolean argument once it has completed. Invoked with (item, callback).
	 * @param {Function} [callback] - A callback which is called after all the
	 * `iteratee` functions have finished. Invoked with (err, results).
	 */
	var rejectSeries = doLimit(rejectLimit, 1);

	/**
	 * Attempts to get a successful response from `task` no more than `times` times
	 * before returning an error. If the task is successful, the `callback` will be
	 * passed the result of the successful task. If all attempts fail, the callback
	 * will be passed the error and result (if any) of the final attempt.
	 *
	 * @name retry
	 * @static
	 * @memberOf module:ControlFlow
	 * @method
	 * @category Control Flow
	 * @param {Object|number} [opts = {times: 5, interval: 0}| 5] - Can be either an
	 * object with `times` and `interval` or a number.
	 * * `times` - The number of attempts to make before giving up.  The default
	 *   is `5`.
	 * * `interval` - The time to wait between retries, in milliseconds.  The
	 *   default is `0`. The interval may also be specified as a function of the
	 *   retry count (see example).
	 * * `errorFilter` - An optional synchronous function that is invoked on
	 *   erroneous result. If it returns `true` the retry attempts will continue;
	 *   if the function returns `false` the retry flow is aborted with the current
	 *   attempt's error and result being returned to the final callback.
	 *   Invoked with (err).
	 * * If `opts` is a number, the number specifies the number of times to retry,
	 *   with the default interval of `0`.
	 * @param {Function} task - A function which receives two arguments: (1) a
	 * `callback(err, result)` which must be called when finished, passing `err`
	 * (which can be `null`) and the `result` of the function's execution, and (2)
	 * a `results` object, containing the results of the previously executed
	 * functions (if nested inside another control flow). Invoked with
	 * (callback, results).
	 * @param {Function} [callback] - An optional callback which is called when the
	 * task has succeeded, or after the final failed attempt. It receives the `err`
	 * and `result` arguments of the last attempt at completing the `task`. Invoked
	 * with (err, results).
	 * @example
	 *
	 * // The `retry` function can be used as a stand-alone control flow by passing
	 * // a callback, as shown below:
	 *
	 * // try calling apiMethod 3 times
	 * async.retry(3, apiMethod, function(err, result) {
	 *     // do something with the result
	 * });
	 *
	 * // try calling apiMethod 3 times, waiting 200 ms between each retry
	 * async.retry({times: 3, interval: 200}, apiMethod, function(err, result) {
	 *     // do something with the result
	 * });
	 *
	 * // try calling apiMethod 10 times with exponential backoff
	 * // (i.e. intervals of 100, 200, 400, 800, 1600, ... milliseconds)
	 * async.retry({
	 *   times: 10,
	 *   interval: function(retryCount) {
	 *     return 50 * Math.pow(2, retryCount);
	 *   }
	 * }, apiMethod, function(err, result) {
	 *     // do something with the result
	 * });
	 *
	 * // try calling apiMethod the default 5 times no delay between each retry
	 * async.retry(apiMethod, function(err, result) {
	 *     // do something with the result
	 * });
	 *
	 * // try calling apiMethod only when error condition satisfies, all other
	 * // errors will abort the retry control flow and return to final callback
	 * async.retry({
	 *   errorFilter: function(err) {
	 *     return err.message === 'Temporary error'; // only retry on a specific error
	 *   }
	 * }, apiMethod, function(err, result) {
	 *     // do something with the result
	 * });
	 *
	 * // It can also be embedded within other control flow functions to retry
	 * // individual methods that are not as reliable, like this:
	 * async.auto({
	 *     users: api.getUsers.bind(api),
	 *     payments: async.retry(3, api.getPayments.bind(api))
	 * }, function(err, results) {
	 *     // do something with the results
	 * });
	 *
	 */
	function retry(opts, task, callback) {
	    var DEFAULT_TIMES = 5;
	    var DEFAULT_INTERVAL = 0;

	    var options = {
	        times: DEFAULT_TIMES,
	        intervalFunc: constant(DEFAULT_INTERVAL)
	    };

	    function parseTimes(acc, t) {
	        if (typeof t === 'object') {
	            acc.times = +t.times || DEFAULT_TIMES;

	            acc.intervalFunc = typeof t.interval === 'function' ? t.interval : constant(+t.interval || DEFAULT_INTERVAL);

	            acc.errorFilter = t.errorFilter;
	        } else if (typeof t === 'number' || typeof t === 'string') {
	            acc.times = +t || DEFAULT_TIMES;
	        } else {
	            throw new Error("Invalid arguments for async.retry");
	        }
	    }

	    if (arguments.length < 3 && typeof opts === 'function') {
	        callback = task || noop;
	        task = opts;
	    } else {
	        parseTimes(options, opts);
	        callback = callback || noop;
	    }

	    if (typeof task !== 'function') {
	        throw new Error("Invalid arguments for async.retry");
	    }

	    var attempt = 1;
	    function retryAttempt() {
	        task(function (err) {
	            if (err && attempt++ < options.times && (typeof options.errorFilter != 'function' || options.errorFilter(err))) {
	                setTimeout(retryAttempt, options.intervalFunc(attempt));
	            } else {
	                callback.apply(null, arguments);
	            }
	        });
	    }

	    retryAttempt();
	}

	/**
	 * A close relative of [`retry`]{@link module:ControlFlow.retry}.  This method wraps a task and makes it
	 * retryable, rather than immediately calling it with retries.
	 *
	 * @name retryable
	 * @static
	 * @memberOf module:ControlFlow
	 * @method
	 * @see [async.retry]{@link module:ControlFlow.retry}
	 * @category Control Flow
	 * @param {Object|number} [opts = {times: 5, interval: 0}| 5] - optional
	 * options, exactly the same as from `retry`
	 * @param {Function} task - the asynchronous function to wrap
	 * @returns {Functions} The wrapped function, which when invoked, will retry on
	 * an error, based on the parameters specified in `opts`.
	 * @example
	 *
	 * async.auto({
	 *     dep1: async.retryable(3, getFromFlakyService),
	 *     process: ["dep1", async.retryable(3, function (results, cb) {
	 *         maybeProcessData(results.dep1, cb);
	 *     })]
	 * }, callback);
	 */
	var retryable = function (opts, task) {
	    if (!task) {
	        task = opts;
	        opts = null;
	    }
	    return initialParams(function (args, callback) {
	        function taskFn(cb) {
	            task.apply(null, args.concat([cb]));
	        }

	        if (opts) retry(opts, taskFn, callback);else retry(taskFn, callback);
	    });
	};

	/**
	 * Run the functions in the `tasks` collection in series, each one running once
	 * the previous function has completed. If any functions in the series pass an
	 * error to its callback, no more functions are run, and `callback` is
	 * immediately called with the value of the error. Otherwise, `callback`
	 * receives an array of results when `tasks` have completed.
	 *
	 * It is also possible to use an object instead of an array. Each property will
	 * be run as a function, and the results will be passed to the final `callback`
	 * as an object instead of an array. This can be a more readable way of handling
	 *  results from {@link async.series}.
	 *
	 * **Note** that while many implementations preserve the order of object
	 * properties, the [ECMAScript Language Specification](http://www.ecma-international.org/ecma-262/5.1/#sec-8.6)
	 * explicitly states that
	 *
	 * > The mechanics and order of enumerating the properties is not specified.
	 *
	 * So if you rely on the order in which your series of functions are executed,
	 * and want this to work on all platforms, consider using an array.
	 *
	 * @name series
	 * @static
	 * @memberOf module:ControlFlow
	 * @method
	 * @category Control Flow
	 * @param {Array|Iterable|Object} tasks - A collection containing functions to run, each
	 * function is passed a `callback(err, result)` it must call on completion with
	 * an error `err` (which can be `null`) and an optional `result` value.
	 * @param {Function} [callback] - An optional callback to run once all the
	 * functions have completed. This function gets a results array (or object)
	 * containing all the result arguments passed to the `task` callbacks. Invoked
	 * with (err, result).
	 * @example
	 * async.series([
	 *     function(callback) {
	 *         // do some stuff ...
	 *         callback(null, 'one');
	 *     },
	 *     function(callback) {
	 *         // do some more stuff ...
	 *         callback(null, 'two');
	 *     }
	 * ],
	 * // optional callback
	 * function(err, results) {
	 *     // results is now equal to ['one', 'two']
	 * });
	 *
	 * async.series({
	 *     one: function(callback) {
	 *         setTimeout(function() {
	 *             callback(null, 1);
	 *         }, 200);
	 *     },
	 *     two: function(callback){
	 *         setTimeout(function() {
	 *             callback(null, 2);
	 *         }, 100);
	 *     }
	 * }, function(err, results) {
	 *     // results is now equal to: {one: 1, two: 2}
	 * });
	 */
	function series(tasks, callback) {
	  _parallel(eachOfSeries, tasks, callback);
	}

	/**
	 * Returns `true` if at least one element in the `coll` satisfies an async test.
	 * If any iteratee call returns `true`, the main `callback` is immediately
	 * called.
	 *
	 * @name some
	 * @static
	 * @memberOf module:Collections
	 * @method
	 * @alias any
	 * @category Collection
	 * @param {Array|Iterable|Object} coll - A collection to iterate over.
	 * @param {Function} iteratee - A truth test to apply to each item in the array
	 * in parallel. The iteratee is passed a `callback(err, truthValue)` which must
	 * be called with a boolean argument once it has completed. Invoked with
	 * (item, callback).
	 * @param {Function} [callback] - A callback which is called as soon as any
	 * iteratee returns `true`, or after all the iteratee functions have finished.
	 * Result will be either `true` or `false` depending on the values of the async
	 * tests. Invoked with (err, result).
	 * @example
	 *
	 * async.some(['file1','file2','file3'], function(filePath, callback) {
	 *     fs.access(filePath, function(err) {
	 *         callback(null, !err)
	 *     });
	 * }, function(err, result) {
	 *     // if result is true then at least one of the files exists
	 * });
	 */
	var some = _createTester(eachOf, Boolean, identity);

	/**
	 * The same as [`some`]{@link module:Collections.some} but runs a maximum of `limit` async operations at a time.
	 *
	 * @name someLimit
	 * @static
	 * @memberOf module:Collections
	 * @method
	 * @see [async.some]{@link module:Collections.some}
	 * @alias anyLimit
	 * @category Collection
	 * @param {Array|Iterable|Object} coll - A collection to iterate over.
	 * @param {number} limit - The maximum number of async operations at a time.
	 * @param {Function} iteratee - A truth test to apply to each item in the array
	 * in parallel. The iteratee is passed a `callback(err, truthValue)` which must
	 * be called with a boolean argument once it has completed. Invoked with
	 * (item, callback).
	 * @param {Function} [callback] - A callback which is called as soon as any
	 * iteratee returns `true`, or after all the iteratee functions have finished.
	 * Result will be either `true` or `false` depending on the values of the async
	 * tests. Invoked with (err, result).
	 */
	var someLimit = _createTester(eachOfLimit, Boolean, identity);

	/**
	 * The same as [`some`]{@link module:Collections.some} but runs only a single async operation at a time.
	 *
	 * @name someSeries
	 * @static
	 * @memberOf module:Collections
	 * @method
	 * @see [async.some]{@link module:Collections.some}
	 * @alias anySeries
	 * @category Collection
	 * @param {Array|Iterable|Object} coll - A collection to iterate over.
	 * @param {Function} iteratee - A truth test to apply to each item in the array
	 * in parallel. The iteratee is passed a `callback(err, truthValue)` which must
	 * be called with a boolean argument once it has completed. Invoked with
	 * (item, callback).
	 * @param {Function} [callback] - A callback which is called as soon as any
	 * iteratee returns `true`, or after all the iteratee functions have finished.
	 * Result will be either `true` or `false` depending on the values of the async
	 * tests. Invoked with (err, result).
	 */
	var someSeries = doLimit(someLimit, 1);

	/**
	 * Sorts a list by the results of running each `coll` value through an async
	 * `iteratee`.
	 *
	 * @name sortBy
	 * @static
	 * @memberOf module:Collections
	 * @method
	 * @category Collection
	 * @param {Array|Iterable|Object} coll - A collection to iterate over.
	 * @param {Function} iteratee - A function to apply to each item in `coll`.
	 * The iteratee is passed a `callback(err, sortValue)` which must be called once
	 * it has completed with an error (which can be `null`) and a value to use as
	 * the sort criteria. Invoked with (item, callback).
	 * @param {Function} callback - A callback which is called after all the
	 * `iteratee` functions have finished, or an error occurs. Results is the items
	 * from the original `coll` sorted by the values returned by the `iteratee`
	 * calls. Invoked with (err, results).
	 * @example
	 *
	 * async.sortBy(['file1','file2','file3'], function(file, callback) {
	 *     fs.stat(file, function(err, stats) {
	 *         callback(err, stats.mtime);
	 *     });
	 * }, function(err, results) {
	 *     // results is now the original array of files sorted by
	 *     // modified date
	 * });
	 *
	 * // By modifying the callback parameter the
	 * // sorting order can be influenced:
	 *
	 * // ascending order
	 * async.sortBy([1,9,3,5], function(x, callback) {
	 *     callback(null, x);
	 * }, function(err,result) {
	 *     // result callback
	 * });
	 *
	 * // descending order
	 * async.sortBy([1,9,3,5], function(x, callback) {
	 *     callback(null, x*-1);    //<- x*-1 instead of x, turns the order around
	 * }, function(err,result) {
	 *     // result callback
	 * });
	 */
	function sortBy(coll, iteratee, callback) {
	    map(coll, function (x, callback) {
	        iteratee(x, function (err, criteria) {
	            if (err) return callback(err);
	            callback(null, { value: x, criteria: criteria });
	        });
	    }, function (err, results) {
	        if (err) return callback(err);
	        callback(null, arrayMap(results.sort(comparator), baseProperty('value')));
	    });

	    function comparator(left, right) {
	        var a = left.criteria,
	            b = right.criteria;
	        return a < b ? -1 : a > b ? 1 : 0;
	    }
	}

	/**
	 * Sets a time limit on an asynchronous function. If the function does not call
	 * its callback within the specified milliseconds, it will be called with a
	 * timeout error. The code property for the error object will be `'ETIMEDOUT'`.
	 *
	 * @name timeout
	 * @static
	 * @memberOf module:Utils
	 * @method
	 * @category Util
	 * @param {Function} asyncFn - The asynchronous function you want to set the
	 * time limit.
	 * @param {number} milliseconds - The specified time limit.
	 * @param {*} [info] - Any variable you want attached (`string`, `object`, etc)
	 * to timeout Error for more information..
	 * @returns {Function} Returns a wrapped function that can be used with any of
	 * the control flow functions. Invoke this function with the same
	 * parameters as you would `asyncFunc`.
	 * @example
	 *
	 * function myFunction(foo, callback) {
	 *     doAsyncTask(foo, function(err, data) {
	 *         // handle errors
	 *         if (err) return callback(err);
	 *
	 *         // do some stuff ...
	 *
	 *         // return processed data
	 *         return callback(null, data);
	 *     });
	 * }
	 *
	 * var wrapped = async.timeout(myFunction, 1000);
	 *
	 * // call `wrapped` as you would `myFunction`
	 * wrapped({ bar: 'bar' }, function(err, data) {
	 *     // if `myFunction` takes < 1000 ms to execute, `err`
	 *     // and `data` will have their expected values
	 *
	 *     // else `err` will be an Error with the code 'ETIMEDOUT'
	 * });
	 */
	function timeout(asyncFn, milliseconds, info) {
	    var originalCallback, timer;
	    var timedOut = false;

	    function injectedCallback() {
	        if (!timedOut) {
	            originalCallback.apply(null, arguments);
	            clearTimeout(timer);
	        }
	    }

	    function timeoutCallback() {
	        var name = asyncFn.name || 'anonymous';
	        var error = new Error('Callback function "' + name + '" timed out.');
	        error.code = 'ETIMEDOUT';
	        if (info) {
	            error.info = info;
	        }
	        timedOut = true;
	        originalCallback(error);
	    }

	    return initialParams(function (args, origCallback) {
	        originalCallback = origCallback;
	        // setup timer and call original function
	        timer = setTimeout(timeoutCallback, milliseconds);
	        asyncFn.apply(null, args.concat(injectedCallback));
	    });
	}

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeCeil = Math.ceil;
	var nativeMax$1 = Math.max;

	/**
	 * The base implementation of `_.range` and `_.rangeRight` which doesn't
	 * coerce arguments.
	 *
	 * @private
	 * @param {number} start The start of the range.
	 * @param {number} end The end of the range.
	 * @param {number} step The value to increment or decrement by.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Array} Returns the range of numbers.
	 */
	function baseRange(start, end, step, fromRight) {
	  var index = -1,
	      length = nativeMax$1(nativeCeil((end - start) / (step || 1)), 0),
	      result = Array(length);

	  while (length--) {
	    result[fromRight ? length : ++index] = start;
	    start += step;
	  }
	  return result;
	}

	/**
	 * The same as [times]{@link module:ControlFlow.times} but runs a maximum of `limit` async operations at a
	 * time.
	 *
	 * @name timesLimit
	 * @static
	 * @memberOf module:ControlFlow
	 * @method
	 * @see [async.times]{@link module:ControlFlow.times}
	 * @category Control Flow
	 * @param {number} count - The number of times to run the function.
	 * @param {number} limit - The maximum number of async operations at a time.
	 * @param {Function} iteratee - The function to call `n` times. Invoked with the
	 * iteration index and a callback (n, next).
	 * @param {Function} callback - see [async.map]{@link module:Collections.map}.
	 */
	function timeLimit(count, limit, iteratee, callback) {
	  mapLimit(baseRange(0, count, 1), limit, iteratee, callback);
	}

	/**
	 * Calls the `iteratee` function `n` times, and accumulates results in the same
	 * manner you would use with [map]{@link module:Collections.map}.
	 *
	 * @name times
	 * @static
	 * @memberOf module:ControlFlow
	 * @method
	 * @see [async.map]{@link module:Collections.map}
	 * @category Control Flow
	 * @param {number} n - The number of times to run the function.
	 * @param {Function} iteratee - The function to call `n` times. Invoked with the
	 * iteration index and a callback (n, next).
	 * @param {Function} callback - see {@link module:Collections.map}.
	 * @example
	 *
	 * // Pretend this is some complicated async factory
	 * var createUser = function(id, callback) {
	 *     callback(null, {
	 *         id: 'user' + id
	 *     });
	 * };
	 *
	 * // generate 5 users
	 * async.times(5, function(n, next) {
	 *     createUser(n, function(err, user) {
	 *         next(err, user);
	 *     });
	 * }, function(err, users) {
	 *     // we should now have 5 users
	 * });
	 */
	var times = doLimit(timeLimit, Infinity);

	/**
	 * The same as [times]{@link module:ControlFlow.times} but runs only a single async operation at a time.
	 *
	 * @name timesSeries
	 * @static
	 * @memberOf module:ControlFlow
	 * @method
	 * @see [async.times]{@link module:ControlFlow.times}
	 * @category Control Flow
	 * @param {number} n - The number of times to run the function.
	 * @param {Function} iteratee - The function to call `n` times. Invoked with the
	 * iteration index and a callback (n, next).
	 * @param {Function} callback - see {@link module:Collections.map}.
	 */
	var timesSeries = doLimit(timeLimit, 1);

	/**
	 * A relative of `reduce`.  Takes an Object or Array, and iterates over each
	 * element in series, each step potentially mutating an `accumulator` value.
	 * The type of the accumulator defaults to the type of collection passed in.
	 *
	 * @name transform
	 * @static
	 * @memberOf module:Collections
	 * @method
	 * @category Collection
	 * @param {Array|Iterable|Object} coll - A collection to iterate over.
	 * @param {*} [accumulator] - The initial state of the transform.  If omitted,
	 * it will default to an empty Object or Array, depending on the type of `coll`
	 * @param {Function} iteratee - A function applied to each item in the
	 * collection that potentially modifies the accumulator. The `iteratee` is
	 * passed a `callback(err)` which accepts an optional error as its first
	 * argument. If an error is passed to the callback, the transform is stopped
	 * and the main `callback` is immediately called with the error.
	 * Invoked with (accumulator, item, key, callback).
	 * @param {Function} [callback] - A callback which is called after all the
	 * `iteratee` functions have finished. Result is the transformed accumulator.
	 * Invoked with (err, result).
	 * @example
	 *
	 * async.transform([1,2,3], function(acc, item, index, callback) {
	 *     // pointless async:
	 *     process.nextTick(function() {
	 *         acc.push(item * 2)
	 *         callback(null)
	 *     });
	 * }, function(err, result) {
	 *     // result is now equal to [2, 4, 6]
	 * });
	 *
	 * @example
	 *
	 * async.transform({a: 1, b: 2, c: 3}, function (obj, val, key, callback) {
	 *     setImmediate(function () {
	 *         obj[key] = val * 2;
	 *         callback();
	 *     })
	 * }, function (err, result) {
	 *     // result is equal to {a: 2, b: 4, c: 6}
	 * })
	 */
	function transform(coll, accumulator, iteratee, callback) {
	    if (arguments.length === 3) {
	        callback = iteratee;
	        iteratee = accumulator;
	        accumulator = isArray(coll) ? [] : {};
	    }
	    callback = once(callback || noop);

	    eachOf(coll, function (v, k, cb) {
	        iteratee(accumulator, v, k, cb);
	    }, function (err) {
	        callback(err, accumulator);
	    });
	}

	/**
	 * Undoes a [memoize]{@link module:Utils.memoize}d function, reverting it to the original,
	 * unmemoized form. Handy for testing.
	 *
	 * @name unmemoize
	 * @static
	 * @memberOf module:Utils
	 * @method
	 * @see [async.memoize]{@link module:Utils.memoize}
	 * @category Util
	 * @param {Function} fn - the memoized function
	 * @returns {Function} a function that calls the original unmemoized function
	 */
	function unmemoize(fn) {
	    return function () {
	        return (fn.unmemoized || fn).apply(null, arguments);
	    };
	}

	/**
	 * Repeatedly call `iteratee`, while `test` returns `true`. Calls `callback` when
	 * stopped, or an error occurs.
	 *
	 * @name whilst
	 * @static
	 * @memberOf module:ControlFlow
	 * @method
	 * @category Control Flow
	 * @param {Function} test - synchronous truth test to perform before each
	 * execution of `iteratee`. Invoked with ().
	 * @param {Function} iteratee - A function which is called each time `test` passes.
	 * The function is passed a `callback(err)`, which must be called once it has
	 * completed with an optional `err` argument. Invoked with (callback).
	 * @param {Function} [callback] - A callback which is called after the test
	 * function has failed and repeated execution of `iteratee` has stopped. `callback`
	 * will be passed an error and any arguments passed to the final `iteratee`'s
	 * callback. Invoked with (err, [results]);
	 * @returns undefined
	 * @example
	 *
	 * var count = 0;
	 * async.whilst(
	 *     function() { return count < 5; },
	 *     function(callback) {
	 *         count++;
	 *         setTimeout(function() {
	 *             callback(null, count);
	 *         }, 1000);
	 *     },
	 *     function (err, n) {
	 *         // 5 seconds have passed, n = 5
	 *     }
	 * );
	 */
	function whilst(test, iteratee, callback) {
	    callback = onlyOnce(callback || noop);
	    if (!test()) return callback(null);
	    var next = baseRest$1(function (err, args) {
	        if (err) return callback(err);
	        if (test()) return iteratee(next);
	        callback.apply(null, [null].concat(args));
	    });
	    iteratee(next);
	}

	/**
	 * Repeatedly call `fn` until `test` returns `true`. Calls `callback` when
	 * stopped, or an error occurs. `callback` will be passed an error and any
	 * arguments passed to the final `fn`'s callback.
	 *
	 * The inverse of [whilst]{@link module:ControlFlow.whilst}.
	 *
	 * @name until
	 * @static
	 * @memberOf module:ControlFlow
	 * @method
	 * @see [async.whilst]{@link module:ControlFlow.whilst}
	 * @category Control Flow
	 * @param {Function} test - synchronous truth test to perform before each
	 * execution of `fn`. Invoked with ().
	 * @param {Function} fn - A function which is called each time `test` fails.
	 * The function is passed a `callback(err)`, which must be called once it has
	 * completed with an optional `err` argument. Invoked with (callback).
	 * @param {Function} [callback] - A callback which is called after the test
	 * function has passed and repeated execution of `fn` has stopped. `callback`
	 * will be passed an error and any arguments passed to the final `fn`'s
	 * callback. Invoked with (err, [results]);
	 */
	function until(test, fn, callback) {
	    whilst(function () {
	        return !test.apply(this, arguments);
	    }, fn, callback);
	}

	/**
	 * Runs the `tasks` array of functions in series, each passing their results to
	 * the next in the array. However, if any of the `tasks` pass an error to their
	 * own callback, the next function is not executed, and the main `callback` is
	 * immediately called with the error.
	 *
	 * @name waterfall
	 * @static
	 * @memberOf module:ControlFlow
	 * @method
	 * @category Control Flow
	 * @param {Array} tasks - An array of functions to run, each function is passed
	 * a `callback(err, result1, result2, ...)` it must call on completion. The
	 * first argument is an error (which can be `null`) and any further arguments
	 * will be passed as arguments in order to the next task.
	 * @param {Function} [callback] - An optional callback to run once all the
	 * functions have completed. This will be passed the results of the last task's
	 * callback. Invoked with (err, [results]).
	 * @returns undefined
	 * @example
	 *
	 * async.waterfall([
	 *     function(callback) {
	 *         callback(null, 'one', 'two');
	 *     },
	 *     function(arg1, arg2, callback) {
	 *         // arg1 now equals 'one' and arg2 now equals 'two'
	 *         callback(null, 'three');
	 *     },
	 *     function(arg1, callback) {
	 *         // arg1 now equals 'three'
	 *         callback(null, 'done');
	 *     }
	 * ], function (err, result) {
	 *     // result now equals 'done'
	 * });
	 *
	 * // Or, with named functions:
	 * async.waterfall([
	 *     myFirstFunction,
	 *     mySecondFunction,
	 *     myLastFunction,
	 * ], function (err, result) {
	 *     // result now equals 'done'
	 * });
	 * function myFirstFunction(callback) {
	 *     callback(null, 'one', 'two');
	 * }
	 * function mySecondFunction(arg1, arg2, callback) {
	 *     // arg1 now equals 'one' and arg2 now equals 'two'
	 *     callback(null, 'three');
	 * }
	 * function myLastFunction(arg1, callback) {
	 *     // arg1 now equals 'three'
	 *     callback(null, 'done');
	 * }
	 */
	var waterfall = function (tasks, callback) {
	    callback = once(callback || noop);
	    if (!isArray(tasks)) return callback(new Error('First argument to waterfall must be an array of functions'));
	    if (!tasks.length) return callback();
	    var taskIndex = 0;

	    function nextTask(args) {
	        if (taskIndex === tasks.length) {
	            return callback.apply(null, [null].concat(args));
	        }

	        var taskCallback = onlyOnce(baseRest$1(function (err, args) {
	            if (err) {
	                return callback.apply(null, [err].concat(args));
	            }
	            nextTask(args);
	        }));

	        args.push(taskCallback);

	        var task = tasks[taskIndex++];
	        task.apply(null, args);
	    }

	    nextTask([]);
	};

	/**
	 * Async is a utility module which provides straight-forward, powerful functions
	 * for working with asynchronous JavaScript. Although originally designed for
	 * use with [Node.js](http://nodejs.org) and installable via
	 * `npm install --save async`, it can also be used directly in the browser.
	 * @module async
	 */

	/**
	 * A collection of `async` functions for manipulating collections, such as
	 * arrays and objects.
	 * @module Collections
	 */

	/**
	 * A collection of `async` functions for controlling the flow through a script.
	 * @module ControlFlow
	 */

	/**
	 * A collection of `async` utility functions.
	 * @module Utils
	 */
	var index = {
	  applyEach: applyEach,
	  applyEachSeries: applyEachSeries,
	  apply: apply$2,
	  asyncify: asyncify,
	  auto: auto,
	  autoInject: autoInject,
	  cargo: cargo,
	  compose: compose,
	  concat: concat,
	  concatSeries: concatSeries,
	  constant: constant$2,
	  detect: detect,
	  detectLimit: detectLimit,
	  detectSeries: detectSeries,
	  dir: dir,
	  doDuring: doDuring,
	  doUntil: doUntil,
	  doWhilst: doWhilst,
	  during: during,
	  each: eachLimit,
	  eachLimit: eachLimit$1,
	  eachOf: eachOf,
	  eachOfLimit: eachOfLimit,
	  eachOfSeries: eachOfSeries,
	  eachSeries: eachSeries,
	  ensureAsync: ensureAsync,
	  every: every,
	  everyLimit: everyLimit,
	  everySeries: everySeries,
	  filter: filter,
	  filterLimit: filterLimit,
	  filterSeries: filterSeries,
	  forever: forever,
	  log: log,
	  map: map,
	  mapLimit: mapLimit,
	  mapSeries: mapSeries,
	  mapValues: mapValues,
	  mapValuesLimit: mapValuesLimit,
	  mapValuesSeries: mapValuesSeries,
	  memoize: memoize,
	  nextTick: nextTick,
	  parallel: parallelLimit,
	  parallelLimit: parallelLimit$1,
	  priorityQueue: priorityQueue,
	  queue: queue$1,
	  race: race,
	  reduce: reduce,
	  reduceRight: reduceRight,
	  reflect: reflect,
	  reflectAll: reflectAll,
	  reject: reject,
	  rejectLimit: rejectLimit,
	  rejectSeries: rejectSeries,
	  retry: retry,
	  retryable: retryable,
	  seq: seq$1,
	  series: series,
	  setImmediate: setImmediate$1,
	  some: some,
	  someLimit: someLimit,
	  someSeries: someSeries,
	  sortBy: sortBy,
	  timeout: timeout,
	  times: times,
	  timesLimit: timeLimit,
	  timesSeries: timesSeries,
	  transform: transform,
	  unmemoize: unmemoize,
	  until: until,
	  waterfall: waterfall,
	  whilst: whilst,

	  // aliases
	  all: every,
	  any: some,
	  forEach: eachLimit,
	  forEachSeries: eachSeries,
	  forEachLimit: eachLimit$1,
	  forEachOf: eachOf,
	  forEachOfSeries: eachOfSeries,
	  forEachOfLimit: eachOfLimit,
	  inject: reduce,
	  foldl: reduce,
	  foldr: reduceRight,
	  select: filter,
	  selectLimit: filterLimit,
	  selectSeries: filterSeries,
	  wrapSync: asyncify
	};

	exports['default'] = index;
	exports.applyEach = applyEach;
	exports.applyEachSeries = applyEachSeries;
	exports.apply = apply$2;
	exports.asyncify = asyncify;
	exports.auto = auto;
	exports.autoInject = autoInject;
	exports.cargo = cargo;
	exports.compose = compose;
	exports.concat = concat;
	exports.concatSeries = concatSeries;
	exports.constant = constant$2;
	exports.detect = detect;
	exports.detectLimit = detectLimit;
	exports.detectSeries = detectSeries;
	exports.dir = dir;
	exports.doDuring = doDuring;
	exports.doUntil = doUntil;
	exports.doWhilst = doWhilst;
	exports.during = during;
	exports.each = eachLimit;
	exports.eachLimit = eachLimit$1;
	exports.eachOf = eachOf;
	exports.eachOfLimit = eachOfLimit;
	exports.eachOfSeries = eachOfSeries;
	exports.eachSeries = eachSeries;
	exports.ensureAsync = ensureAsync;
	exports.every = every;
	exports.everyLimit = everyLimit;
	exports.everySeries = everySeries;
	exports.filter = filter;
	exports.filterLimit = filterLimit;
	exports.filterSeries = filterSeries;
	exports.forever = forever;
	exports.log = log;
	exports.map = map;
	exports.mapLimit = mapLimit;
	exports.mapSeries = mapSeries;
	exports.mapValues = mapValues;
	exports.mapValuesLimit = mapValuesLimit;
	exports.mapValuesSeries = mapValuesSeries;
	exports.memoize = memoize;
	exports.nextTick = nextTick;
	exports.parallel = parallelLimit;
	exports.parallelLimit = parallelLimit$1;
	exports.priorityQueue = priorityQueue;
	exports.queue = queue$1;
	exports.race = race;
	exports.reduce = reduce;
	exports.reduceRight = reduceRight;
	exports.reflect = reflect;
	exports.reflectAll = reflectAll;
	exports.reject = reject;
	exports.rejectLimit = rejectLimit;
	exports.rejectSeries = rejectSeries;
	exports.retry = retry;
	exports.retryable = retryable;
	exports.seq = seq$1;
	exports.series = series;
	exports.setImmediate = setImmediate$1;
	exports.some = some;
	exports.someLimit = someLimit;
	exports.someSeries = someSeries;
	exports.sortBy = sortBy;
	exports.timeout = timeout;
	exports.times = times;
	exports.timesLimit = timeLimit;
	exports.timesSeries = timesSeries;
	exports.transform = transform;
	exports.unmemoize = unmemoize;
	exports.until = until;
	exports.waterfall = waterfall;
	exports.whilst = whilst;
	exports.all = every;
	exports.allLimit = everyLimit;
	exports.allSeries = everySeries;
	exports.any = some;
	exports.anyLimit = someLimit;
	exports.anySeries = someSeries;
	exports.find = detect;
	exports.findLimit = detectLimit;
	exports.findSeries = detectSeries;
	exports.forEach = eachLimit;
	exports.forEachSeries = eachSeries;
	exports.forEachLimit = eachLimit$1;
	exports.forEachOf = eachOf;
	exports.forEachOfSeries = eachOfSeries;
	exports.forEachOfLimit = eachOfLimit;
	exports.inject = reduce;
	exports.foldl = reduce;
	exports.foldr = reduceRight;
	exports.select = filter;
	exports.selectLimit = filterLimit;
	exports.selectSeries = filterSeries;
	exports.wrapSync = asyncify;

	Object.defineProperty(exports, '__esModule', { value: true });

	})));

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(3)(module), __webpack_require__(19).setImmediate, __webpack_require__(9)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var apply = Function.prototype.apply;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) {
	  if (timeout) {
	    timeout.close();
	  }
	};

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// setimmediate attaches itself to the global object
	__webpack_require__(20);
	exports.setImmediate = setImmediate;
	exports.clearImmediate = clearImmediate;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
	    "use strict";

	    if (global.setImmediate) {
	        return;
	    }

	    var nextHandle = 1; // Spec says greater than zero
	    var tasksByHandle = {};
	    var currentlyRunningATask = false;
	    var doc = global.document;
	    var registerImmediate;

	    function setImmediate(callback) {
	      // Callback can either be a function or a string
	      if (typeof callback !== "function") {
	        callback = new Function("" + callback);
	      }
	      // Copy function arguments
	      var args = new Array(arguments.length - 1);
	      for (var i = 0; i < args.length; i++) {
	          args[i] = arguments[i + 1];
	      }
	      // Store and register the task
	      var task = { callback: callback, args: args };
	      tasksByHandle[nextHandle] = task;
	      registerImmediate(nextHandle);
	      return nextHandle++;
	    }

	    function clearImmediate(handle) {
	        delete tasksByHandle[handle];
	    }

	    function run(task) {
	        var callback = task.callback;
	        var args = task.args;
	        switch (args.length) {
	        case 0:
	            callback();
	            break;
	        case 1:
	            callback(args[0]);
	            break;
	        case 2:
	            callback(args[0], args[1]);
	            break;
	        case 3:
	            callback(args[0], args[1], args[2]);
	            break;
	        default:
	            callback.apply(undefined, args);
	            break;
	        }
	    }

	    function runIfPresent(handle) {
	        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // "too much recursion" error.
	            setTimeout(runIfPresent, 0, handle);
	        } else {
	            var task = tasksByHandle[handle];
	            if (task) {
	                currentlyRunningATask = true;
	                try {
	                    run(task);
	                } finally {
	                    clearImmediate(handle);
	                    currentlyRunningATask = false;
	                }
	            }
	        }
	    }

	    function installNextTickImplementation() {
	        registerImmediate = function(handle) {
	            process.nextTick(function () { runIfPresent(handle); });
	        };
	    }

	    function canUsePostMessage() {
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `global.postMessage` means something completely different and can't be used for this purpose.
	        if (global.postMessage && !global.importScripts) {
	            var postMessageIsAsynchronous = true;
	            var oldOnMessage = global.onmessage;
	            global.onmessage = function() {
	                postMessageIsAsynchronous = false;
	            };
	            global.postMessage("", "*");
	            global.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous;
	        }
	    }

	    function installPostMessageImplementation() {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

	        var messagePrefix = "setImmediate$" + Math.random() + "$";
	        var onGlobalMessage = function(event) {
	            if (event.source === global &&
	                typeof event.data === "string" &&
	                event.data.indexOf(messagePrefix) === 0) {
	                runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };

	        if (global.addEventListener) {
	            global.addEventListener("message", onGlobalMessage, false);
	        } else {
	            global.attachEvent("onmessage", onGlobalMessage);
	        }

	        registerImmediate = function(handle) {
	            global.postMessage(messagePrefix + handle, "*");
	        };
	    }

	    function installMessageChannelImplementation() {
	        var channel = new MessageChannel();
	        channel.port1.onmessage = function(event) {
	            var handle = event.data;
	            runIfPresent(handle);
	        };

	        registerImmediate = function(handle) {
	            channel.port2.postMessage(handle);
	        };
	    }

	    function installReadyStateChangeImplementation() {
	        var html = doc.documentElement;
	        registerImmediate = function(handle) {
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement("script");
	            script.onreadystatechange = function () {
	                runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	        };
	    }

	    function installSetTimeoutImplementation() {
	        registerImmediate = function(handle) {
	            setTimeout(runIfPresent, 0, handle);
	        };
	    }

	    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
	    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
	    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

	    // Don't get fooled by e.g. browserify environments.
	    if ({}.toString.call(global.process) === "[object process]") {
	        // For Node.js before 0.9
	        installNextTickImplementation();

	    } else if (canUsePostMessage()) {
	        // For non-IE10 modern browsers
	        installPostMessageImplementation();

	    } else if (global.MessageChannel) {
	        // For web workers, where supported
	        installMessageChannelImplementation();

	    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
	        // For IE 6–8
	        installReadyStateChangeImplementation();

	    } else {
	        // For older browsers
	        installSetTimeoutImplementation();
	    }

	    attachTo.setImmediate = setImmediate;
	    attachTo.clearImmediate = clearImmediate;
	}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(9)))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/*!
	 * @name JavaScript/NodeJS Merge v1.2.0
	 * @author yeikos
	 * @repository https://github.com/yeikos/js.merge

	 * Copyright 2014 yeikos - MIT license
	 * https://raw.github.com/yeikos/js.merge/master/LICENSE
	 */

	;(function(isNode) {

		/**
		 * Merge one or more objects 
		 * @param bool? clone
		 * @param mixed,... arguments
		 * @return object
		 */

		var Public = function(clone) {

			return merge(clone === true, false, arguments);

		}, publicName = 'merge';

		/**
		 * Merge two or more objects recursively 
		 * @param bool? clone
		 * @param mixed,... arguments
		 * @return object
		 */

		Public.recursive = function(clone) {

			return merge(clone === true, true, arguments);

		};

		/**
		 * Clone the input removing any reference
		 * @param mixed input
		 * @return mixed
		 */

		Public.clone = function(input) {

			var output = input,
				type = typeOf(input),
				index, size;

			if (type === 'array') {

				output = [];
				size = input.length;

				for (index=0;index<size;++index)

					output[index] = Public.clone(input[index]);

			} else if (type === 'object') {

				output = {};

				for (index in input)

					output[index] = Public.clone(input[index]);

			}

			return output;

		};

		/**
		 * Merge two objects recursively
		 * @param mixed input
		 * @param mixed extend
		 * @return mixed
		 */

		function merge_recursive(base, extend) {

			if (typeof base !== 'object' || base==null)

				return extend;

			for (var key in extend) {

				if (typeof base[key] === 'object' && base[key]!=null && typeof extend[key] === 'object' && extend[key]!=null) {

					base[key] = merge_recursive(base[key], extend[key]);

				} else {

					base[key] = extend[key];

				}

			}

			return base;

		}

		/**
		 * Merge two or more objects
		 * @param bool clone
		 * @param bool recursive
		 * @param array argv
		 * @return object
		 */

		function merge(clone, recursive, argv) {

			var result = argv[0],
				size = argv.length;
			if (clone || result==null || typeof result !== 'object') 

				if (Array.isArray(result)) result = [];
				else result=[];

			for (var index=1;index<size;++index) {

				var item = argv[index],

					type = typeof item;

				if (type==null) continue;
				if (type !== 'object') continue;

				for (var key in item) {

					var sitem = clone ? Public.clone(item[key]) : item[key];

					if (recursive) {

						result[key] = merge_recursive(result[key], sitem);

					} else {

						result[key] = sitem;

					}

				}

			}

			return result;

		}

		/**
		 * Get type of variable
		 * @param mixed input
		 * @return string
		 *
		 * @see http://jsperf.com/typeofvar
		 */

		function typeOf(input) {

			return ({}).toString.call(input).slice(8, -1).toLowerCase();

		}

		if (isNode) {

			module.exports = Public;

		} else {

			window[publicName] = Public;

		}

	})(typeof module === 'object' && module && typeof module.exports === 'object' && module.exports);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var merge = __webpack_require__(21),
	    EventEmitter = __webpack_require__(23);
	var _isdate = /.*-.*-.*:.*:.*/;
	function correctDateString(s) {
		if (s && (typeof s === 'undefined' ? 'undefined' : _typeof(s)) === 'object') {
			for (var key in s) {
				s[key] = correctDateString(s[key]);
			}
			return s;
		}
		if (typeof s === 'string' && _isdate.test(s)) {
			var d = new Date(s);
			if (d != null) return d;
		}
		return s;
	}

	var Me = function (_EventEmitter) {
		_inherits(Me, _EventEmitter);

		function Me(initCompleteCondition) {
			_classCallCheck(this, Me);

			var _this = _possibleConstructorReturn(this, (Me.__proto__ || Object.getPrototypeOf(Me)).call(this));

			_this.coin = _this.diamond = _this.vip = 0;
			_this.face = 'ui://6f69ijynsmakpw';
			var self = _this;
			_this.on('newListener', function (event, listener) {
				if (self._initEventFired) listener.call(this, this);
			});
			_this._initEventFired = false;
			_this._initCC = initCompleteCondition || ['id', 'level', 'nickname'];
			return _this;
		}

		_createClass(Me, [{
			key: '_update',
			value: function _update(obj) {
				obj = correctDateString(obj);
				merge(this, obj);
				this.id = this._id;
				this.nickname = this.nickname || this._id;

				for (var ele in obj) {
					this.emit('' + ele + 'chgd', this);
				}

				if (!this._initEventFired) {
					for (var i = 0; i < this._initCC.length; i++) {
						if (this[this._initCC[i]] == null) break;
					}
					if (i >= this._initCC.length) {
						this._initEventFired = true;
						this.emit('inited', this);
					}
				}
			}
		}]);

		return Me;
	}(EventEmitter);

	module.exports = new Me();

/***/ },
/* 23 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./default.js": 25,
		"./wechat.js": 28
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 24;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var cbs = [], 
		data;
	module.exports = function(cb) {
		if(cbs) cbs.push(cb);
		else cb(data);
	}
	__webpack_require__.e/* nsure */(1, function(require) {
		data = __webpack_require__(26);
		var callbacks = cbs;
		cbs = null;
		for(var i = 0, l = callbacks.length; i < l; i++) {
			callbacks[i](data);
		}
	});

/***/ },
/* 26 */,
/* 27 */,
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var cbs = [], 
		data;
	module.exports = function(cb) {
		if(cbs) cbs.push(cb);
		else cb(data);
	}
	__webpack_require__.e/* nsure */(2, function(require) {
		data = __webpack_require__(29);
		var callbacks = cbs;
		cbs = null;
		for(var i = 0, l = callbacks.length; i < l; i++) {
			callbacks[i](data);
		}
	});

/***/ },
/* 29 */,
/* 30 */
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
/******/ ]);