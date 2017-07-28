'use strict';

var async=require('async'), me=require('./myself.js'), printf=require('printf'), etc=require('./etc.js');
var wins=require('./windows.js');

var Loader = laya.net.Loader;
var Handler = laya.utils.Handler;
var innerStage;

function toMinuteStr(num) {
	return printf('%02d:%02d', Math.floor(num/60), (num%60));
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var uidefine={
	'wechat_login':function() {
		var args=arguments;
		var loader=require('bundle!./wechat-login.js');
		loader(function(creator) {
			creator.apply(null, args);
		})
	},
	'a':'bbb',
	'hall':HallUI.create,
	'gamelevel1':function() {
		var args=arguments;
		var loader=require('bundle!./wolf.js');
		loader(function(creator) {
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
				fairygui.GRoot.inst.removeChild(self.current._view);
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