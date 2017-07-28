var cardv=require('./rule.js').cardv;
var cardType={'黑桃':3, '红桃':2, '梅花':1, '方块':0, 'heitao':3, 'hongtao':2, 'meihua':1, 'fangkuai':0};
var def={
	'黑桃':{
		'A':'ui://6f69ijynohzxpq',
		'2':'ui://6f69ijynohzxps',
		'3':'ui://6f69ijynohzxpt',
		'4':'ui://6f69ijynohzxpu',
		'5':'ui://6f69ijynohzxpv',
		'6':'ui://6f69ijynohzxpi',
		'7':'ui://6f69ijynohzxpj',
		'8':'ui://6f69ijynohzxpk',
		'9':'ui://6f69ijynohzxpl',
		'10':'ui://6f69ijynohzxpm',
		'J':'ui://6f69ijynohzxpn',
		'Q':'ui://6f69ijynohzxpo',
		'K':'ui://6f69ijynohzxpp'
	},
	'红桃':{
		'A':'ui://6f69ijynohzxpa',
		'2':'ui://6f69ijynohzxpc',
		'3':'ui://6f69ijynohzxpd',
		'4':'ui://6f69ijynohzxpe',
		'5':'ui://6f69ijynohzxpf',
		'6':'ui://6f69ijynohzxp2',
		'7':'ui://6f69ijynohzxp3',
		'8':'ui://6f69ijynohzxp4',
		'9':'ui://6f69ijynohzxp5',
		'10':'ui://6f69ijynohzxp6',
		'J':'ui://6f69ijynohzxp7',
		'Q':'ui://6f69ijynohzxp8',
		'K':'ui://6f69ijynohzxp9'
	},
	'梅花':{
		'A':'ui://6f69ijynohzxov',
		'2':'ui://6f69ijynohzxox',
		'3':'ui://6f69ijynohzxoy',
		'4':'ui://6f69ijynohzxoz',
		'5':'ui://6f69ijynohzxp0',
		'6':'ui://6f69ijynohzxon',
		'7':'ui://6f69ijynohzxoo',
		'8':'ui://6f69ijynohzxop',
		'9':'ui://6f69ijynohzxoq',
		'10':'ui://6f69ijynohzxor',
		'J':'ui://6f69ijynohzxos',
		'Q':'ui://6f69ijynohzxot',
		'K':'ui://6f69ijynohzxou'
	},
	'方块':{
		'A':'ui://6f69ijynohzxoc',
		'2':'ui://6f69ijynohzxoe',
		'3':'ui://6f69ijynohzxof',
		'4':'ui://6f69ijynohzxog',
		'5':'ui://6f69ijynohzxoh',
		'6':'ui://6f69ijynohzxoi',
		'7':'ui://6f69ijynohzxoj',
		'8':'ui://6f69ijynohzxok',
		'9':'ui://6f69ijynohzxol',
		'10':'ui://6f69ijynohzxo8',
		'J':'ui://6f69ijynohzxo9',
		'Q':'ui://6f69ijynohzxoa',
		'K':'ui://6f69ijynohzxob'
	},
};

(function mkall() {
	var map=def['map']=[];
	for (var hua in def) {
		for (var pai in def[hua]) {
			var cv=cardv(hua+pai);
			if (cv)	map[cv.ov]=def[hua][pai];
		}
	}
})();

module.exports=def.map;