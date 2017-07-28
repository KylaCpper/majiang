function permutator(inputArr) {
  var results = [];

	function permute(arr, memo) {
		var cur, memo = memo || [];

		for (var i = 0; i < arr.length; i++) {
			cur = arr.splice(i, 1);
			if (arr.length === 0) {
			results.push(memo.concat(cur));
			}
			permute(arr.slice(), memo.concat(cur));
			arr.splice(i, 0, cur[0]);
		}

		return results;
	}

	return permute(inputArr);
}

var cardType={'黑桃':3, '红桃':2, '梅花':1, '方块':0, 'heitao':3, 'hongtao':2, 'meihua':1, 'fangkuai':0};
function cardv(c) {
	if (typeof c=='number') return {t:Math.floor(c%4), v:Math.floor(c/4), ov:c};
	if (typeof c=='string') {
		for (var k in cardType) {
			if (c.indexOf(k)==0) {
				var t=cardType[k];
				var v=c.slice(k.length);
				switch (v.toLowerCase()) {
					case 'a':
					v=0;
					break;
					case 'j':
					v=10;
					break;
					case 'q':
					v=11;
					break;
					case 'k':
					v=12;
					break;
					default:
					v=Number(v)-1;
				}
				return {t:t, v:v, ov:v*4+t};
			}
		}
	}
}
var reverseCardType=['方块', '梅花','红桃', '黑桃'];
var reverseCardValue=['A', 2, 3, 4, 5, 6, 7, 8, 9,10, 'J', 'Q', 'K'];
var niuValue=[,'一','二','三','四','五','六','七','八','九'];
function parseR(r) {
	switch (r.t) {
		case 0:
		r._t='没牛';
		break;
		case 1:
		r._t='牛'+niuValue[r.v];
		break;
		case 2:
		r._t='牛'+niuValue[r.v];
		break;
		case 3:
		r._t='牛牛';
		break;
		case 4:
		r._t='四花';
		break;
		case 5:
		r._t='五花';
		break;
		case 7:
		r._t='炸弹';
		break;
		case 10:
		r._t='小牛牛';
		break;
		default:
		r._t='err t';
	}
	r.mc.str=reverseCardType[r.mc.t]+reverseCardValue[r.mc.v];
	return r;
}
function fixv(v) {
	if (v>=10) return 10;
	return v+1;
}
function isXiaoniuniu(arr) {
	var total=0;
	for (var i=0; i<arr.length; i++) {
		if (arr[i].v>=5) return false;
		total+=arr[i].v;
	}
	if (total>10) return false;
	return true;
}
// tao xin mei fang
// {t:倍数，小牛牛10，牛1 1， v:点数， mc：最大的牌}
function calcR(arr) {
	for (var i=0; i<arr.length; i++) arr[i].fv=fixv(arr[i].v);
	for (var i=0; i<arr.length; i++) {
		for (var j=i+1; j<arr.length; j++) {
			if (arr[i].ov>arr[j].ov) {
				var t=arr[j];
				arr[j]=arr[i]; arr[i]=t;
			}
		}
	}
	//小牛牛×10：五张牌皆小于等于5，总和小于等于10
	var mc=arr[arr.length-1];
	if (isXiaoniuniu(arr)) return {t:10, mc:mc};

	// is bomb 炸弹×7：四张同数字牌。第5张随意
	if (arr[0].v==arr[3].v || arr[1].v==arr[4].v) {
		return {t:7, mc:arr[1]};
	}
	// is 5 flower 五花×5：五张牌皆为J，Q，K中任意。
	var c=0, o=null;
	for (var i=0 ;i<arr.length; i++) {
		if (arr[i].v>=10) c++;
		else o=arr[i].v;
	}
	if (c==5) return {t:5, mc:mc};
	//四花×4：四张牌皆为J，Q，K中任意。第5张为10。
	if (c==4 && o==9) return {t:4, mc:mc};

	// 牛牛×3：三张牌数字总和为10的倍数，另两张数字总和也为10的倍数。
	var allp=permutator(arr);
	var maxr={t:0, v:0, f:null};
	for (var i=0; i<allp.length; i++) {
		var op=allp[i];
		//console.log(op);
		if ((op[0].fv+op[1].fv+op[2].fv)%10==0) {
			var v=(op[3].fv+op[4].fv)%10;
			var t=1;
			if (v==0) {
				v=10;t=3;
			}
			else if (v>=7) {t=2;}
			if ((maxr.t<t) || (maxr.t==t && maxr.v<v)) {
				maxr.v=v;maxr.t=t;maxr.f=[op[0].ov, op[1].ov, op[2].ov];
			}
		}
	}
	return {t:maxr.t, mc:mc, v:maxr.v, f:maxr.f}; //t, 1~10, 10xiaoniuniu, zhandan..., mc, max card, v:niu(x),0~13, fv:1~10
}

module.exports={
	calcR:calcR,
	parseR:parseR,
	cardv:cardv,
	fixv:fixv
}
