'use strict'
var EventEmitter=require('events');

class WaitableEvent extends EventEmitter {
	constructor(waitEvent, opt) {
		super();
		this.waitEvent=waitEvent;
		if (!opt) this.delayAll=true;
		this._opt=opt;
		this._e=[];
		this._delay=true;
	}
	chkDelay(op) {
		if (!this._delay) return false;
		if (this.delayAll) return true;
		if (this._opt.cmds.indexOf(op)>=0) return true;
		return false;
	}
	emit(op) {
		if (op==this.waitEvent) {
			this._delay=false;
			super.emit.apply(this, arguments);
			if (this._e instanceof Array) {
				for (var i=0; i<this._e.length; i++) {
					super.emit.apply(this, this._e[i]);
				}
				delete this._e;
			}
			return;
		}
		if (this.chkDelay(op)) {
			return this._e.push(arguments);
		}
		super.emit.apply(this, arguments);
	}
}

module.exports=WaitableEvent;

if (module==require.main) {
	var waitE=new WaitableEvent('go');
	waitE.on('userin', console.log)
	.on('userout', console.log)
	.on('go', console.log);

	waitE.emit('userin', 1, 2, 3);
	waitE.emit('userout', 2, 3,4);
	waitE.emit('go', 8);
	waitE.emit('userin', 'in again');
}