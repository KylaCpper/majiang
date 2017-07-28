require('./libs/peer.js');
var EventEmitter=require('events');
class SafePeer extends EventEmitter {
	constructor(id, opt) {
		super();
		this._id=id;
		this._opt=opt;
		this._delayOp=[];
		this._start();
	}
	_start() {
		console.log('peer started');
		var self=this;
		this._peer=new Peer(this._id, this._opt)
		.on('open', function() {
			if (self._delayOp.length) {
				for (var i=0, l=self._delayOp.length; i<l; i++) {
					self.call.apply(null, self._delayOp[i]);
				}
				self._delayOp=[];
			}
			self.emit('open');
		})
		.on('call', function(call) {
			console.log('called from', call.metadata);
			self.emit('call', call);
		})
		.on('error', function(err) {
			console.log(err.message, err.type);
			if (err.type=='network') {
				self._peer.destory && self._peer.destory();
				self._peer=null;
				return self.retry();
			}
			self.emit('low-level-error', err);
		});
	}
	retry() {
		setTimeout(this._start.bind(this), 1000);
	}
	call(id, stream, opt, cb) {
		if (!this._peer || this._peer.disconnected) return this._delayOp.push(arguments);
		return cb(null, this._peer.call(id, stream, opt));
	}
	close() {
		this._peer && this._peer.close();
	}
}

module.exports=SafePeer;