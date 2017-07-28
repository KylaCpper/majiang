var tongji=window.tongji=require('../tongji.js');
function _noop() {}
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
	if (!window.wechatObj) return;

	var shareObj={
		type: 'link',
		title: '萌狼杀，房间号:'+v,
		//link: 'http://a.mlinks.cc/AaIu?room='+v,
		link:'http://h5.1357g.com/h/wolf.app?room='+v,
		imgUrl: location.origin+location.pathname+'res/logo.png',
		//dataUrl:'http://h5.1357g.com/wnn/res244.jpg',
		// desc: '轮庄，'+toRuleString(opt.rule)+', '+opt.dizhu+'底！',
		//success: function (){},
		//cancel: function (){}
	};
	window.wechatObj.shareOnChat(shareObj);
	window.wechatObj.shareOnMoment(shareObj);

	window.invite=function() {
		var tip='点击'+(Laya.stage.canvasDegree==0?'右':'左')+'上角分享按钮，邀请好友加入游戏';
		tipon(tip).popup();
		// tongji.invite(v, '轮庄，'+toRuleString(opt.rule)+', '+opt.dizhu+'底！');
	}
}
window.invite=function() {
	var tip='点击'+(Laya.stage.canvasDegree==0?'右':'左')+'上角分享按钮，邀请好友加入游戏';
	tipon(tip).popup();
}
window.share=function() {
	var tip='点击'+(Laya.stage.canvasDegree==0?'右':'左')+'上角分享按钮，分享到朋友圈';
	tipon(tip).popup();
	tongji.share();
}
window.preShareResult=function(roomid, setnum, participants, winners, img) {
	var shareObj={
		type: 'link',
		title: '萌狼杀，房号:'+roomid+(setnum!=null?(', 第'+setnum+'局'):''),
		link: 'http://h5.1357g.com/h/wolf.app?room='+roomid,
		//link:'http://h5.1357g.com/wnn/res244.jpg',
		imgUrl: img,
		//dataUrl:'http://h5.1357g.com/wnn/res244.jpg',
		// desc: (participants||[]).join(',')+' 胜利者 '+(winners||[]).join(','),
		//success: function (){},
		//cancel: function (){}		
	}
	window.wechatObj.shareOnChat(shareObj);
	window.wechatObj.shareOnMoment(shareObj);
}
window.pay=function(orderid, money, desc, cb,callback) {
	!cb && (cb=_noop);
	tongji.beginCharge(orderid, money, desc, '微信公众号支付');
	accWechatIntf('/weixin/getWechatpayParams',{order:orderid, money:money, openid:startup_param.openid}, function(err, r) {
		if (err || r.err) {
			callback();
			return tipon(err||r.err).popup();
		}
		r.success=function(res) {
			if(res.errMsg == "chooseWXPay:ok"){
				tongji.endCharge(orderid, '微信公众号支付');
				cb(null, true);
			}else{
				cb(null, false);
			}
		}
		r.complete=function(){
			callback();
		}
		wx.chooseWXPay(r);
	})
}
var async=require('async');
var wxq=async.queue(function(task, cb) {
	if (typeof task=='function') return task(cb);
	cb();
});
var wxr={starting:false, stopping:false};
function wxst(cb) {
	// window.log && window.log('stoping rec');
	function tryStop(_cb) {
		wx.stopRecord({
			success:function(res) {
				// window.log && window.log('rec stopped');
				_cb(null, res);
			},
			fail:function(err) {
				// window.log && window.log('rec stop failed');
				_cb(err);
			}
		});
	}
	var timeoutVer=async.timeout(tryStop, 800);
	timeoutVer(cb);
}
window.startRecord=function(cb) {
	if (wxr.starting) return cb(wxr.starting);
	wxr.starting=true;
	wxq.push([
		// 先停下来
		// wxst, 
		// 再开始
		function(_cb) {
			// window.log && window.log('starting rec');
			wx.startRecord({
				fail:function(err) {
					// window.log&&  window.log('rec start failed');
					cb(err);
					cb=null;
				},
				sucess:function() {
					// window.log && window.log('rec started');
				}
			});
			_cb();
		},
		// 保证500ms之后才能调用其它的
		function(_cb) {
			setTimeout(_cb, 500);
		},
		function(_cb) {
			wxr.starting=false;
			cb && cb(wxr.starting);
			_cb();
		}
	]);
}
window.stopRecord=function(cb) {
	if (wxr.stopping) return cb('already stopping');
	wxr.stopping=true;
	wxq.push(wxst, function(err, res) {
		wxr.stopping=false;
		if (!cb) return;
		if (err) return cb(err);
		window.sendRecord(res.localId, cb);
	});
	// wx.stopRecord({
	// 	success: function (res) {
	// 		cb && window.sendRecord(res.localId, cb);
	// 	}
	// });
}

window.sendRecord=function(token, cb) {
	wx.uploadVoice({
		localId: token, // 需要上传的音频的本地ID，由stopRecord接口获得
		isShowProgressTips: 0, // 默认为1，显示进度提示
		success: function (res) {
			var serverId = res.serverId; // 返回音频的服务器端ID
			cb(null, serverId);
		}
	});
}
var sndMap={};
window.playRecord=function(token, cb) {
	wx.downloadVoice({
		serverId: token, // 需要下载的音频的服务器端ID，由uploadVoice接口获得
		isShowProgressTips: 0, // 默认为1，显示进度提示
		success: function (res) {
			var localId = res.localId; // 返回音频的本地ID
			wx.playVoice({localId:localId});
			sndMap[localId]={cb:cb, t:new Date()};
		}
	});
}

function _init() {
	wx.onVoicePlayEnd({
		success: function (res) {
			var o=sndMap[res.localId];
			// console.log(res);
			if (typeof o.cb==='function') {
				o.cb();
				delete sndMap[res.localId];
			}
		}
	});

	setInterval(function() {
		var now=new Date();
		for (var i in sndMap) {
			var o=sndMap[i];
			if (now-o.t>=3000) {
				o.cb && o.cb();
				delete sndMap[i];
			}
		}
	}, 3000);
}

window.wxInit=function() {
	var shareObj={
			type: 'link',
			title: '萌狼杀',
			link: location.origin+location.pathname,
			imgUrl: location.origin+location.pathname+'res/logo.png',
			desc: ''
			//success: function (){},
			//cancel: function (){}		
		};
	try {
		window.wechatObj.shareOnChat(shareObj);
		window.wechatObj.shareOnMoment(shareObj);
	} catch(e) {
		console.log(e);
	}

	wx.startRecord();
	wx.stopRecord();

	// window.startRecord(function() {

	// });
	// window.stopRecord(function() {

	// });

	_init();
}

accWechatIntf('weixin/sign', {}, function(err, conf) {
	if (err) {
		if (!window._wxErr) window._wxErr=[err];
		else window._wxErr.push(err);
		return; //console.log(err);
	}
	var WechatJSSDK = require('../wechat-jssdk/client.js');
	conf.jsApiList=['onMenuShareTimeline', 'onMenuShareAppMessage','startRecord', 'stopRecord','onVoiceRecordEnd','playVoice','pauseVoice','stopVoice','onVoicePlayEnd','uploadVoice','downloadVoice'];
	conf.success=function() {
		window.wxInit && window.wxInit();
	}
	conf.error=function(err) {
		if (!window._wxErr) window._wxErr=[err];
		else window._wxErr.push(err);
		alert('signerr' + err);
	}
	var wechatObj=window.wechatObj= new WechatJSSDK(conf);
});
