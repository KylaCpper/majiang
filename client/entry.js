document.title='mahjong';

var $=window.$, jquery=$;
var url=require('url'), path=require('path'), clone=require('clone'), qs=require('querystring'), async=require('async'), merge=require('merge');
var me=require('./myself.js');
//alert(location.href);
// for debug
window.me=me;

function isInWechat() {

	if(navigator.userAgent.toLowerCase().indexOf('micromessenger')>=0) {
		return true;
	}
	return false;
}

var main=window.main=function(startup_param) {
	var url_option=url.parse(location.href, true), startup_param=window.startup_param=startup_param?merge(startup_param, url_option.query):url_option.query;
	var retrytimes=0;
	// 找出服务器。支持一下方式
	// 直接从网站访问 h5.1357g.com/xxx/
	// 或者从参数制定服务器 file://xxx/index.html?server=[http://]h5.1357g.com/wnn/
	startup_param.server=startup_param.server||window.server;
	if (startup_param.server) {
		if (startup_param.server.indexOf('http')==0) var spec=url.parse(startup_param.server);
		else {
			var slot=startup_param.server.split('/');
			var spec={
				protocol:'http:',
				host:slot[0],
				pathname:'/'
			};
			for (var i=1; i<slot.length; i++) {
				spec.pathname=spec.pathname+slot[i]+'/';
			}
		}
		url_option.host=spec.host;
		url_option.pathname=spec.pathname;
		url_option.protocol=spec.protocol;
	}
	var host = url_option.host;
	var regTestIp=/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}(?:$|\:[0-9]{1,5}$)/;
	if (!regTestIp.test(host))
	{
		var hosts=host.split('.');
		hosts[0] = 'ws';
		host = hosts.join('.');
	}
	if (/\.[^\/\\]+$/.test(url_option.pathname)) {
		url_option._p=path.dirname(url_option.pathname);
	}
	else url_option._p=url_option.pathname;
	var serverpath=host+url_option._p;
	if (path.extname(url_option.pathname)=='.app') {
		serverpath+='/'+path.basename(url_option.pathname);
	}
	// console.log(startup_param);

	var accWechatIntf=window.accWechatIntf=(function() {
		window.getAjax=getAjax;
		function getAjax(_url, data, callback) {
			if (typeof data ==='function') {
				callback =data;
				data=null;
			}
			if (!callback) callback=function(){};
			if (_url.indexOf('http')!=0) {
				var api=clone(url_option);
				api.pathname=path.resolve(api.pathname,_url);
				api.query=null;
				api.search='';
				_url=url.format(api);
			}
			$.ajax({
				type: "POST",
				url: _url,
				dataType: "JSON",
				data: data,
				timeout:30000,
				success: function (chunk) {
					return callback(null, chunk);
				},
				error: function (e) {
					//if (typeof console == "object") console.log(e);
					callback(e);
				}
			})
		}
		var wechatApiBase;
		return function accWechatIntf(fn, data, cb) {
			if (wechatApiBase=='failed') return cb('no wechat intf found');
			if (fn.indexOf('/')==0) fn=fn.substr(1);
			if (!wechatApiBase) {
				var weixinapi={protocol:url_option.protocol, host:url_option.host, pathname:'/'};//clone(url_option);
				//weixinapi.pathname='/';//path.join('/',fn);
				wechatApiBase=url.format(weixinapi);
				return getAjax(url.resolve(wechatApiBase,fn), data, function(err, r) {
					if (err) {
						weixinapi={protocol:url_option.protocol, host:url_option.host, pathname:url_option._p+'/'};
						//weixinapi.pathname=url_option._p;
						wechatApiBase=url.format(weixinapi);
						getAjax(url.resolve(wechatApiBase,fn), data, function(err, r) {
							if (err) {
								wechatApiBase='failed';
								return cb(err);
							}
							cb(r.err, r);
						});
						return;
					}
					return cb(r.err, r);
				});
			}
			getAjax(wechatApiBase+fn, data, cb);
		}
	})();
	if (!window.cordova) {
		if (startup_param.pf) {
			var pf=require('bundle?name=[name]!./pf/'+startup_param.pf+'.js')
			//$.getScript('pf/'+startup_param.pf+'.js');
		}else var pf=require('bundle?name=[name]!./pf/default.js');//$.getScript('pf/default.js');
		pf(function(){});
	}
	if (startup_param.login) {startup_param.c='login';startup_param.id=startup_param.login;}
	if (startup_param.reg) {startup_param.c='rol'; startup_param.id=startup_param.reg;}
	if (startup_param.id || !!window.cordova) {
		if (startup_param.c==null) {startup_param.c='rol'} 
		return require(['./libs/laya.core.js', './libs/laya.webgl.js','./libs/laya.html.js','./libs/laya.ani.js','./libs/laya.ui.js','./libs/laya.particle.js','./libs/laya.d3.js','./libs/laya.d3Plugin.js','./libs/CameraMoveScript.js'], function() {
		//return require([], function() {
			require(['imports?this=>window!./libs/rawinflate/rawinflate.min.js', 'imports?this=>window!./libs/fairygui/fairygui.js', 'imports?this=>window!./libs/annieCore.js'], function(l, lh, r, f, annie) {
			
			me.on('inited', function() {tongji.userin(me)});
			me.on('levelchgd', function() {tongji.levelup(me.level)});


			var Loader = laya.net.Loader;
			var Handler = laya.utils.Handler;

			var idealRatio=960/540, realRatio=window.innerHeight/window.innerWidth;
			// Laya.init(window.innerWidth, window.innerHeight, laya.webgl.WebGL);
			if (idealRatio<realRatio) {
				Laya.init(540, 540*realRatio, laya.webgl.WebGL);
			}
			else Laya.init(960/realRatio, 960, laya.webgl.WebGL);
			// console.log('stage w, h', Laya.stage.width, Laya.stage.height);
			Laya.SoundManager.musicMuted=localStorage.getItem('bgm')=='true';
			Laya.SoundManager.soundMuted=localStorage.getItem('snd')=='true';

			//laya.utils.Stat.show(0, 0);
			//设置适配模式
			//Laya.stage.bgColor=null;
			Laya.stage.scaleMode = 'showall';//"showall";
			Laya.stage.alignH = "center";
			Laya.stage.alignV = "center";
			//console.log(Laya.stage.height=500)

			//设置横竖屏
			Laya.stage.screenMode = "vertical";
			//horizontal
			//vertical
			Laya.stage.frameRate='mouse';
			Laya.stage.addChild(fairygui.GRoot.inst.displayObject);
			function MsgDispatcher() {
				MsgDispatcher.super(this);
			}
			Laya.class(MsgDispatcher, 'MsgDis', Laya.EventDispatcher);
			window.netmsg=new MsgDispatcher();

			class MyLoader extends fairygui.GLoader {
				constructor() {
					super();
				}
				loadExternal() {
					fairygui.AssetProxy.inst.load(this._url,Handler.create(this,this.__getResCompleted), null, 'image');
				}
			}
			fairygui.UIObjectFactory.setLoaderExtension(MyLoader);

			class GlobalWaiting extends fairygui.GComponent {
				constructor() {
					super();
					this._obj=null;
				}

				constructFromXML(xml)
				{
					super.constructFromXML(xml);
					this.on(laya.events.Event.DISPLAY,this,this.onAddedToStage);    
				}
				
				onAddedToStage() {
					this.x=0;//(Laya.stage.desginWidth - 540)/2;
					this.y=0;//(Laya.stage.desginHeight - 960)/2;
				}
			}

			var ui=require('./mahjongHallUI');

			// for debug
			window.ui=ui;

			var wins=require('./windows.js');
			var tipon=global.tipon=function(str, opt) {return new wins.TipWin(str, opt);}
			if (startup_param.id==null) {
				function onDeviceReady() {
					if (window.device.platform === 'iOS') {
						cordova.plugins.iosrtc.registerGlobals();
					}
					StatusBar.hide();
					ui.active('wechat_login', null, function(err, view) {
						window.view=view;
						if (err) return; //console.log(err);
						view.active && view.active();
					});
				}
				return document.addEventListener('deviceready', onDeviceReady, false);	
			}
			else Laya.loader.load([
				{ url: require("./res/mahjong@atlas0.png"), type: laya.net.Loader.IMAGE },
				{ url: require("./res/mahjong.fui"), type: laya.net.Loader.BUFFER }
				],
				Handler.create(null, function() {
					if (window['splash']) {
						//Laya.stage.removeChild(splash);
						$('body').css('background-color','#000');
						window['splash'].remove();
						window['splash']=null;
					}
					Laya.stage.bgColor='#000';
					fairygui.UIPackage.addPackage('mahjong');
					//等待画面
					fairygui.UIConfig.globalModalWaiting = fairygui.UIPackage.getItemURL("mahjong","loading");
					fairygui.UIObjectFactory.setPackageItemExtension(fairygui.UIPackage.getItemURL("mahjong","loading"),GlobalWaiting);
					return initnet(startup_param);
				})
			);
		})});
	}

	if (isInWechat()) {
		accWechatIntf('/weixin/verifyurl', {redirect:location.href}, function(err, r) {
			if (err) return tipon(err.toString()).popup();
			// console.log(r);
			location.replace(r.message);
			return;
		});
	}

	function initnet(loginData) {
		var Handler=laya.utils.Handler;
		var i = i;
		retrytimes++;
		if (retrytimes>2) {
			window.location.reload();
			return;
			// return tipon('网络故障，请检查您的上网设置', Handler.create(null, function(logindata) {
			// 	retrytimes=0;
			// 	initnet(logindata);
			// }, [loginData])).popup();
		}
		if (startup_param.pf=='wechat') {
			// accWechatIntf('weixin/sign', {}, function(err, conf) {
			// 	if (err) {
			// 		if (!window._wxErr) window._wxErr=[err];
			// 		else window._wxErr.push(err);
			// 		return; //console.log(err);
			// 	}
			// 	var WechatJSSDK = require('./wechat-jssdk/client.js');
			// 	conf.jsApiList=['onMenuShareTimeline', 'onMenuShareAppMessage','startRecord', 'stopRecord','onVoiceRecordEnd','playVoice','pauseVoice','stopVoice','onVoicePlayEnd','uploadVoice','downloadVoice'];
			// 	conf.success=function() {
			// 		window.wxInit && window.wxInit();
			// 	}
			// 	conf.error=function(err) {
			// 		if (!window._wxErr) window._wxErr=[err];
			// 		else window._wxErr.push(err);
			// 		alert('signerr' + err);
			// 	}
			// 	var wechatObj=window.wechatObj= new WechatJSSDK(conf);
			// });
		}
		// console.log('connect to', serverpath);
		// console.log(serverpath="127.0.0.1:8877")
		console.log("serverpath",serverpath="kyla1.imwork.net")
		var socket = window._socket = new WebSocket('ws://' + serverpath );//new WebSocket('ws://ws.1357g.com:7009/' );
		// alert(' new WebSocket.....');
		socket.sendp=socket.sendjson=function(data) {
			var str=JSON.stringify(data);
			return this.send(str);
		}
		var msgloop=window.msgloop=async.queue(function(pack, cb) {
			socket.msg(pack);
			cb();
		},1);
		socket._spec={c:[], halted:false};
		socket._resync=function() {
			if (!this._spec.halted) return;
			this._spec.halted=false;
			if (this._spec.c.length==0) return;
			for (var i=0, l=this._spec.c.length; i<l; i++) {this.onmessage(this._spec.c[i]);}
			this._spec.c=[];
		}
		socket.onopen=function() {
			// alert(' new WebSocket opend.....' );
			retrytimes=0;
			// console.log('opend', loginData);
			if (!loginData) return tipon('illegal access').popup();
			socket.sendp(loginData);
			// if (loginData.room) {
			// 	var rc=loginData.room;
			// 	delete loginData.room;
			// 	socket.sendp({c:'join', code:rc});
			// }
		};
		// socket.onerror=console.log.bind(console);
		socket.onerror=function(eve) {
			// alert(' socket.onerror' + eve.message);
		}
		socket.onclose=function (eve) {
			// alert(' new WebSocket closed.....' + eve.code+' '+eve.reason);
			this.onmessage({data:JSON.stringify({c:'connectclosed'})});
		}
		socket.onmessage=function(msg) {
			try {
				var pack=JSON.parse(msg.data);
			}catch(e) {return console.log(e, msg.data);}
			console.log('recv', msg);
			if (pack.seq) msgloop.push(pack);
			else this.msg(pack)


		}
		var _firstsetme=true;
		socket.msg=function(pack) {
			//console.log('process', pack);
			if (pack.err) {
				pack.cancelRelogin && (socket.cancelRelogin=true);
				function errmsg(e) {
					if (typeof e=='string') return e;
					if (typeof e=='object') {
						return e.message || e.name||e.toString();
					}
					return e.toString();
				}
				tipon(errmsg(pack.err)).popup();
				return;
			}
			if (pack.user) {
				me._update(pack.user);
			}
			switch(pack.c) {
				case 'lgerr':
				case 'regerr':
				case 'kicked':
					this.cancelRelogin=true;
					tipon((pack.msg||pack.reason)+'，点击屏幕自动重连', {waitHandler:function() {
						setTimeout(function() {
							initnet(loginData);
						}, Math.random()*800+200);
					}}).popup();
				break;
				case 'showview':
					var self=this;
					msgloop.pause();
					fairygui.GRoot.inst.showModalWait();
					ui.active(pack.v, pack.opt, function(err, view) {
						fairygui.GRoot.inst.closeModalWait();
						window.view=view;
						if (err) return console.log(err);
						view.active && view.active(pack);
						msgloop.resume();
					});
				break;
				case 'connectclosed':
					// console.log('conect closed');
					if (this.cancelRelogin) return;
					setTimeout(function() {
						initnet(loginData);
					}, Math.random()*500+1000);
				break;
				case 'errorTip':
					tipon(pack.str).popup();
				break;
				default:
					ui.current && ui.current.msg && ui.current.msg(pack);
					netmsg.event(pack.c, [pack]);
			}
		}
	}
}
main();

