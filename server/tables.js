'use strict';

var path=require('path'), randomstring=require('randomstring');

var tt_def={};
var tt=require('module-loader')(path.join(__dirname, 'table-type/*.type.js'), function() {
	var keys=Object.keys(tt);
	for (var i=0; i<keys.length; i++) {
		tt_def[path.basename(keys[i], '.type.js')]=tt[keys[i]];
	}	
});

function createTable(type, code, opt) {
	var TT=tt_def[type];
	if (typeof TT !=='function') {
		console.log('err table type', type, tt_def, TT);
		return null;
	}
	return new TT(code, type, opt);
}

var _tables={};
function availble(type, opt) {
	var tlist=_tables[type];
	if (tlist==null) {
		if (!tt_def[type]) return null;
		_tables[type]=tlist=[];
	}
	var code;
	do {
		code=randomstring.generate({length:5, charset:'123456789'});
	} while (tlist[code]);
	tlist[code]=createTable(type, code, opt);
	_tables[type][code] = tlist[code];
	// console.log('type =' + type);
	// console.log('code = ' + code);
	// console.log('_tables = ' + _tables);
	//console.log(tlist[code]);
	return tlist[code];
}

function find(code) {
	for (var t in _tables) {
		// console.log("t=" + t);
		// console.log("_tables[t][code]=" + _tables[t][code]);
		if (_tables[t][code]) return _tables[t][code];
	}
	return null;
}
function remove(tbl) {
	for (var t in _tables) {
		if (_tables[t][tbl.code]==tbl) {
			delete _tables[t][tbl.code];
			return;
		}
	}
}
module.exports={
	availble:availble,
	find:find,
	remove:remove
}