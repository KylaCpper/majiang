'use strict'
var merge=require('merge'), EventEmitter=require('events');
class GameData extends EventEmitter {
	constructor() {
		super();
		// this.on('newListener', function(event, listener) {
		// 	listener.call(this, this);
		// });
	}
	_update(obj) {
		if (obj.$) {
			if (obj.$.init) {
				for (var k in this) {
					if (typeof this[k]=='function' || k.indexOf('_')==0) continue;
					delete this[k];
				}
				merge.recursive(this, obj);
				this.emit('inited', this);
				for (var k in this) {
					if (typeof this[k]=='function' || k.indexOf('_')==0) continue;
					this.emit(''+k+'chgd', this);
				}
				return;
			} else if (obj.$.delete) {
				var delCmd=obj.$.delete;
				for (var i=0; i<delCmd.length; i++) {
					var p=delCmd[i].split('.');
					this.ensuredelete(p);
					this.emit(p[0]+'chgd', this);
				}
			}else if (obj.$.set) {
				var delCmd=obj.$.set;
				for (var i=0; i<delCmd.length; i++) {
					var p=delCmd[i].split('.');
					this.ensuredelete(p);
				}
			}
			delete obj.$;
		}
		merge.recursive(this, obj);
		for (var ele in obj) {
			this.emit(''+ele+'chgd', this);
		}
	}
	ensuredelete(p) {
		var o=this;
		for (var i=0; i<p.length-1; i++) {
			if (o[p[i]]) o=o[p[i]];
			else return false;
		}
		if (o[p[p.length-1]]) delete o[p[p.length-1]]; 
	}
}

if (module==require.main) {
	var gd=new GameData();

	gd._update({ a: [ 1, 2, 5 ], c: { b: 1 } });
	console.log(gd);
	gd._update({ '$': { set: [ 'c' ] }, c: { x: 6 }, a: { '3': 9 } });
  console.log(gd);
  	gd._update({ '$': { delete: [ 'c' ] } });
  console.log(gd);
}