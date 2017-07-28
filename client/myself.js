'use strict'
var merge=require('merge'), EventEmitter=require('events');
var _isdate=/.*-.*-.*:.*:.*/;
function correctDateString(s) {
	if (s && typeof s ==='object') {
		for (var key in s) {
			s[key]=correctDateString(s[key]);
		}
		return s;
	}
	if (typeof s ==='string' && _isdate.test(s)) {
		var d=new Date(s);
		if (d!=null) return d; 
	}
	return s;
}
class Me extends EventEmitter {
	constructor(initCompleteCondition) {
		super();
		this.coin=this.diamond=this.vip=0;
        this.face='ui://6f69ijynsmakpw';
		var self=this;
		this.on('newListener', function(event, listener) {
			if (self._initEventFired) listener.call(this, this);
		});
		this._initEventFired=false;
		this._initCC=initCompleteCondition||['id', 'Mahjong', 'nickname']
	}
	_update(obj) {
		obj=correctDateString(obj);
		merge(this, obj);
		this.id=this._id;
		this.nickname=this.nickname||this._id;

		for (var ele in obj) {
			this.emit(''+ele+'chgd', this);
		}

		if (!this._initEventFired) {
			for (var i=0; i<this._initCC.length; i++) {
				if (this[this._initCC[i]]==null) break;
			}
			if (i>=this._initCC.length) {
				this._initEventFired=true;
				this.emit('inited', this);
			}
		}
	}
}

module.exports=new Me();
