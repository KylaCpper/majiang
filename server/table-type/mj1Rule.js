var cardType = {};
function cardv(index) {
	var mjArr = [
		//wan
		101, 102, 103, 104, 105, 106, 107, 108, 109,
		101, 102, 103, 104, 105, 106, 107, 108, 109,
		101, 102, 103, 104, 105, 106, 107, 108, 109,
		101, 102, 103, 104, 105, 106, 107, 108, 109,
		//bing
		201, 202, 203, 204, 205, 206, 207, 208, 209,
		201, 202, 203, 204, 205, 206, 207, 208, 209,
		201, 202, 203, 204, 205, 206, 207, 208, 209,
		201, 202, 203, 204, 205, 206, 207, 208, 209,
		//tiao
		301, 302, 303, 304, 305, 306, 307, 308, 309,
		301, 302, 303, 304, 305, 306, 307, 308, 309,
		301, 302, 303, 304, 305, 306, 307, 308, 309,
		301, 302, 303, 304, 305, 306, 307, 308, 309,
		//feng
		401, 402, 403, 404, 405, 406, 407,
		401, 402, 403, 404, 405, 406, 407,
		401, 402, 403, 404, 405, 406, 407,
		401, 402, 403, 404, 405, 406, 407,
		//hua
		501,502,503,504,505,506,507,508,
		501,502,503,504,505,506,507,508,
		501,502,503,504,505,506,507,508,
		501,502,503,504,505,506,507,508
	];
	if (index >= mjArr.length) {
		return null;
	}
	return mjArr[index];
}

//判断胡牌
var testHu = function(mj, mjArr, hunMj) {
	var tmpArr = [];
	tmpArr = tmpArr.concat(mjArr);
	if (mj != 0) {
		tmpArr.push(mj);
	}
	var sptArr = seprateArr( tmpArr, hunMj );
	var curHunNum = sptArr[0].length;
	//当前的赖子数目大于3，直接能胡牌????
	if (curHunNum > 3) {
			return true;
	}
	//每个分类需要混的数组
	var ndHunArr = [];
	for (var i=1;i<5;i++) {
		g_NeedHunCount = 4;
		getNeedHunInSub( sptArr[i], 0 );
		//分别对于每个分组放入对应需要的最小赖子数，没有返回则放4个？这个规则下有4个赖子则表示胡牌？？？
		ndHunArr.push(g_NeedHunCount);
	}
	var isHu = false;
	//将在万中  
	//如果需要的混小于等于当前的则计算将在万中需要的混的个数
	var ndHunAll = ndHunArr[1] + ndHunArr[2] + ndHunArr[3];
	if (ndHunAll<=curHunNum) {
		var hasNum = curHunNum - ndHunAll;
		isHu = canHu( hasNum, sptArr[1] )
		if (isHu) {
			return true;
		}
	}
	// 将在饼中
	ndHunAll = ndHunArr[0] + ndHunArr[2] + ndHunArr[3];
	if (ndHunAll <= curHunNum) {
		var hasNum = curHunNum - ndHunAll;
		isHu = canHu( hasNum, sptArr[2] );
		if (isHu) {
			return true;
		}
	}
	//将在条中
	ndHunAll = ndHunArr[0] + ndHunArr[1] + ndHunArr[3];
	if (ndHunAll <= curHunNum) {
		var hasNum = curHunNum - ndHunAll;
		isHu = canHu( hasNum, sptArr[3] );
		if (isHu) {
			return true;
		}
	}
	//将在风中
	ndHunAll = ndHunArr[0] + ndHunArr[1] + ndHunArr[2];
	if (ndHunAll <= curHunNum) {
		var hasNum = curHunNum - ndHunAll;
		isHu = canHu( hasNum, sptArr[4] );
		if (isHu) {
			return true;
		}
	}
	return false;
}

//返回一个数组 这个数组包含了听的牌
var getTingArr = function(mjArr,hunMj) {
	var tmpArr = [];
	tmpArr = tmpArr.concat(mjArr);
	var sptArr = seprateArr(tmpArr,hunMj);
	//每个分类需要赖子数量的数组
	var ndHunArr = [];
	for (var i=1;i<5;i++) {
		g_NeedHunCount = 4;
		getNeedHunInSub(sptArr[i], 0);
		ndHunArr.push(g_NeedHunCount);
	}
	//每个将分类需要混的数组
	var jaNdHunArr = [];
	for (var j=1;j<5;j++) {
		jdNeedHunNum = getJiangNeedHum(sptArr[j]);
		jaNdHunArr.push(jdNeedHunNum);
	}
	//当前赖子数目
	var curHunNum = sptArr[0].length;
	var tingArr = [];
	var paiArr = [[101,110],[201,210],[301,310],[401,408]];

	//是否单调将
	var isAllHu = false;
	var needNum = 0;
	for (var jn=0;jn<4;jn++) {
		needNum += ndHunArr[jn];
	}
	if ((curHunNum - needNum) == 1) {
		isAllHu = true;
	}
	if (isAllHu) {
		for (var pi=0;pi<paiArr.length;pi++) {
			for (var pj=paiArr[pi][0];pj<paiArr[pi][1];pj++) {
				tingArr.push(pj);
			}
		}
		return tingArr;
	}
	for (var w = 0; w < 4; w++) {
		//听牌是将
		needNum = 0;
		for (var k = 0;k<4;k++) {
			if (w != k) {
				needNum = needNum + ndHunArr[k];
			}
		}
		if (needNum <= curHunNum) {
			for (var p = paiArr[w][0];p<paiArr[w][1];p++) {
				var t = [p];
				t = t.concat(sptArr[w+1]);
				sortArr(t);
				if (canHu(curHunNum-needNum,t)) {
					tingArr.push(p);
				}
			}
		}
		//听牌是扑
		for (var m=0;m<4;m++) {
			if (m != w) {
				needNum = 0;
				for (var n=0;n<4;n++) {
					if (n != w) {
						if (n == m) {
							needNum += jaNdHunArr[n];
						} else {
							needNum += ndHunArr[n];
						}
					}
				}
				if (needNum <= curHunNum) {
					for (var mk=paiArr[w][0];mk<paiArr[w][1];mk++) {
						if (tingArr.indexOf(mk) == -1) {
							var t = [mk];
							t = t.concat(sptArr[w+1]);
							g_NeedHunCount = 4;
							sortArr(t);
							getNeedHunInSub(t, 0);
							if (g_NeedHunCount <= (curHunNum - needNum)) {
								tingArr.push(mk);
							}
						}
					}
				}
			}
		}
	}
	if (tingArr.length > 0 && tingArr.indexOf(hunMj) == -1) {
		tingArr.push(hunMj);
	}
	return tingArr;
}

var canHu = function(hunNum, arr) {
	var tmpArr = [];
	tmpArr = tmpArr.concat(arr);
	var arrLen = tmpArr.length;
	if (arrLen <= 0) {
		if (hunNum >= 2) {
			return true;
		}
		return false;
	}
	if (hunNum < getModNeedNum(arrLen,true)) {
		return false;
	}
	for (var i=0;i<arrLen;i++) {
		//如果是最后一张牌
		if (i == (arrLen - 1)) {
			if (hunNum > 0) {
				hunNum = hunNum - 1;
				var transArr = [];
				for (var tindex=0;tindex<arrLen;tindex++) {
					if (tindex != i) {
						transArr.push(tmpArr[tindex]);
					}
				}
				g_NeedHunCount = 4;
				getNeedHunInSub(transArr,0);
				if (g_NeedHunCount <= hunNum) {
						return true;
				}
				hunNum = hunNum +1;
			}
		}
		else {
			if ((i+2) == arrLen || (tmpArr[i]%10) != (tmpArr[i+2]%10)) {
				//判断2个数是不是一样
				if (test2Combine(tmpArr[i],tmpArr[i+1])) {
					var transArr = [];
					for (var tindex=0;tindex<arrLen;tindex++) {
						if (tindex != i&&tindex != (i+1)) {
							transArr.push(tmpArr[tindex]);
						}
					}
					g_NeedHunCount = 4;
					getNeedHunInSub(transArr, 0);
					if (g_NeedHunCount <= hunNum) {
						return true;
					}
				}
			}
			if (hunNum>0&&(tmpArr[i]%10) != (tmpArr[i+1]%10)) {
				hunNum = hunNum -1;
				var transArr2 = [];
				for (var tindex2=0;tindex2<arrLen;tindex2++) {
					if (tindex2 != i) {
						transArr2.push(tmpArr[tindex2]);
					}
				}
				g_NeedHunCount = 4;
				getNeedHunInSub(transArr2, 0);
				if (g_NeedHunCount <= hunNum) {
					return true;
				}
				hunNum = hunNum +1;
			}
		}
	}
	return false;
}

var seprateArr = function(mjArr, hunMj) {
	//分成5组 万饼条风赖子 0；和赖子相同的 1万 2饼 3条 4风
	var reArr = [[],[],[],[],[]];
	var ht = Math.floor(hunMj / 100);
	var hv = hunMj % 10;
	for (var i=0;i<mjArr.length;i++) {
		var t = Math.floor(mjArr[i]/100);
		var v = mjArr[i]%10;
		if (ht == t && hv == v) {
			t = 0;
		}
		reArr[t].push(mjArr[i]);
		sortArr(reArr[t]);
	}
	return reArr;
}

var sortArr = function(arr) {
	if (arr.length == 0||arr.length == 1) {
		return;
	}
	arr.sort();
}

//每个分组里面 将 需要的赖子数目
var getJiangNeedHum = function(arr) {
	var minNeedNum = 4;
	var tmpArr = [];
	tmpArr = tmpArr.concat(arr);
	var arrLen = tmpArr.length;
	if (arrLen <= 0) {
		return 2;
	}
	for (var i=0;i<arrLen;i++) {
		//如果是最后一张牌
		if (i == (arrLen - 1)) {
			var tmp = tmpArr[i];
			tmpArr.splice(i,1);
			g_NeedHunCount = 4;
			getNeedHunInSub(tmpArr,0);
			minNeedNum = Math.min(minNeedNum,g_NeedHunCount+1);
			tmpArr.push(tmp);
			sortArr(tmpArr);
		} else {
			//当i时最后还有2个数或者当i时和下下个不同
			if (( i+2 ) == arrLen && ((tmpArr[i]%10) != (tmpArr[i+2]%10))) {
				//判断2个数是不是一样
				if (test2Combine(tmpArr[i], tmpArr[i+1])) {
					var transArr = [];
					for (var tindex=0;tindex<arrLen;tindex++) {
						if (tindex!=i&&tindex!=(i+1)) {
							transArr.push(tmpArr[tindex]);
						}
					}
					g_NeedHunCount = 4;
					getNeedHunInSub(transArr, 0);

					minNeedNum = Math.min(minNeedNum,g_NeedHunCount);
				}
			}
			if ((tmpArr[i]%10) != (tmpArr[i+1]%10)) {
				var transArr2 =[];
				for (var tindex2=0;tindex2<arrLen;tindex2++) {
					if (tindex2!=i) {
						transArr2.push(tmpArr[tindex2]);
					}
				}
				g_NeedHunCount = 4;
				getNeedHunInSub(transArr2, 0);

				minNeedNum = Math.min(minNeedNum,g_NeedHunCount+1);
			}
		}
	}
	return minNeedNum;
}

//按照赖子万饼条风五个分组 分别得到各自组需要的赖子数目 只做铺
var getNeedHunInSub = function(subArr,hNum) {
	if (g_NeedHunCount == 0) {
		return;
	}
	//每个分组的长度
	var lArr = subArr.length;
	//getModNeedNum 得到一铺或一对所需要的赖子数 false不管一对只管铺
	if ((hNum + getModNeedNum(lArr,false)) >= g_NeedHunCount) {
		return;
	}
	if (lArr == 0) {
		g_NeedHunCount = Math.min(hNum,g_NeedHunCount);
		return;
	} else if (lArr == 1) {
		g_NeedHunCount = Math.min(hNum+2,g_NeedHunCount);
		return;
	} else if (lArr == 2) {
		var t = Math.floor(subArr[0] / 100);
		var v0 = subArr[0] % 10;
		var v1 = subArr[1] % 10;
		//东南西北中发白（无顺）
		if (t==4) {
			if (v0 == v1) {
				//只有2个并且是风 相同
				g_NeedHunCount = Math.min( hNum+1, g_NeedHunCount )
				return;
			}
		} else if ((v1-v0) < 3) {
			//012 有且只有2个是相同相连或隔一个
			g_NeedHunCount = Math.min( hNum+1, g_NeedHunCount )
		}
		return;
	} else if (lArr >= 3) {
		//大于三张牌 
		var t = Math.floor(subArr[0] / 100);
		var v0 = subArr[0] % 10;
		var v2 = subArr[2] % 10;
		//先检查前三个是不是一铺再检查前2个是不是一铺
		//第一个和另外两个一铺
		var arrLen = subArr.length;
		for (var i=1;i<arrLen;i++) {
			//getModNeedNum 得到一铺或一对所需要的赖子数 false不管一对只管铺
			if ((hNum + getModNeedNum(lArr-3,false) >= g_NeedHunCount)) {
				break;
			}
			var v1 = subArr[i] % 10;
			//13444 134不可能连一起
			if ((v1 - v0) > 1) {
				break;
			}
			//从第i个开始至少还有3个
			if ((i+2)<arrLen) {
				//从第i个开始 三个相同
				if ((subArr[i+2]%10) == v1) {
					continue;
				}
			}
			//从第i个开始至少还有2个
			if ((i+1) < arrLen) {
				var tmp1 = subArr[0];
				var tmp2 = subArr[i];
				var tmp3 = subArr[i+1];
				//test3Combine 如果是顺子或者刻子
				if (test3Combine( tmp1, tmp2, tmp3 )) {
					var transArr = [];
					for (var tindex=0;tindex<arrLen;tindex++) {
						if (tindex!=0&&tindex!=i&&tindex!=(i+1)) {
							transArr.push(subArr[tindex]);
						}
					}
					getNeedHunInSub(transArr,hNum);
				}
			}
		}
		//第一个和第二个当作一铺加一个赖子
		var v1 = subArr[1] % 10;
		if ((hNum + getModNeedNum(lArr-2,false) +1) < g_NeedHunCount) {
			//东南西北中发白（无顺)
			if (t == 4) {
				if (v0 == v1) {
					var transArr2 = [];
					for (var tindex2=0;tindex2<arrLen;tindex2++) {
						if (tindex2!=0&&tindex2!=1) {
							transArr2.push(subArr[tindex2]);
						}
					}
					getNeedHunInSub(transArr2, hNum+1);
				}
			} else {
				var arrLen = subArr.length;
				for (var i=1;i<arrLen;i++) {
					if ((hNum + getModNeedNum(lArr-2,false) +1)>= g_NeedHunCount) {
						break;
					}
					var v1 = subArr[i] % 10;
					//如果当前的value不等于下一个value则和下一个结合避免重复
					if ((i+1)!=arrLen) {
						var v2 = subArr[i+1]%10;
						if (v1 == v2) {
							continue;
						}
					}
					mius = v1 - v0;
					if (mius < 3) {
						var transArr3 =[];
						for (var tindex3=0;tindex3<arrLen;tindex3++) {
							if (tindex3!=0&&tindex3!=i) {
								transArr3.push(subArr[tindex3]);
							}
						}
						getNeedHunInSub(transArr3, hNum+1);
						if (mius >= 1) {
							break;
						}
					} else {
						break;
					}
				}
			}
		}
		//第一个自己一铺
		if ((hNum + getModNeedNum(lArr-1,false)+2) < g_NeedHunCount) {
			var transArr4 = [];
			for (var tindex4=0;tindex4<arrLen;tindex4++) {
				if (tindex4!=0) {
					transArr4.push(subArr[tindex4]);
				} 
			}
			getNeedHunInSub(transArr4, hNum+2);
		}
	} else {
		return;
	}
}

//判断2个数是不是一样
var test2Combine =function(mj1, mj2) {
	var t1 = Math.floor(mj1 / 100);
	var t2 = Math.floor(mj2 / 100);
	var v1 = mj1 % 10;
	var v2 = mj2 % 10;
	if (t1 == t2&&v1 == v2) {
		return true;
	}
	return false;
}

//3张牌是否能组成一个铺
var test3Combine = function (mj1, mj2, mj3) {
	var t1 = Math.floor(mj1/100);
	var t2 = Math.floor(mj2/100);
	var t3 = Math.floor(mj3/100);
	//牌型不同不能组合
	if (t1 != t2 || t1 != t3) {
		return false;
	}
	var v1 = mj1%10;
	var v2 = mj2%10;
	var v3 = mj3%10;
	//重牌(刻子)
	if (v1 == v2 && v1 == v3) {
		return true;
	}
	//当是东南西北中发白时
	if (t3 == 4) {
		return false;
	}
	//顺子
	if ((v1+1) == v2 && (v1+2) == v3) {
		return true;
	}
	return false;
}

//凑成一铺或一对将所需要的数目
var getModNeedNum = function(arrLem,isJiang) {
	if (arrLem <=0) {
		return 0;
	}
	var modNum = arrLem % 3;
	var needNumArr = [0,2,1];
	if (isJiang) {
		needNumArr = [2,1,0];
	}
	return needNumArr[modNum];
}

//也要提示碰也要提示杠
var testPengGang = function(mj, mjArr, hunMj) {
	//return []无结果 [2]碰 [3]杠 [2,3]可碰可杠
	var t  = Math.floor(mj / 100);
	var v = mj % 10;
	var c = 0;
	var tmpArr = [];
	tmpArr = tmpArr.concat(mjArr);
	var sptArr = seprateArr( tmpArr, hunMj );
	var len = sptArr[t].length;
	if (len < 2) {
		return [];
	} else {
		for (var i=0;i<len;i++) {
			if (sptArr[t][i]%10 == v) {
				c = c+1;
			}
		}
		if (c == 2) {
			return [2];
		}
		if (c == 3) {
			return [2,3];
		}
	}
	return [];
}

var testChi = function(mj, mjArr, hunMj) {
	var t  = Math.floor(mj / 100);
	var res = [];
	//风牌直接return
	if (t == 4) {
		return res;
	}
	var v = mj % 10;
	var tmpArr = [];
	tmpArr = tmpArr.concat(mjArr);
	var sptArr = seprateArr( tmpArr, hunMj );
	var len = sptArr[t].length;
	if (len < 2) {
		return res;
	} else {
		var l = [];
		var r = [];
		var m = [];
		for (var i = 0;i<len;i++) {
			var iv = sptArr[t][i]%10;
			//当前的比目标小
			if (iv + 1 == v) {
				if ((i - 1) >= 0&&((sptArr[t][i - 1]%10 + 2) == v)) {
					l.push(sptArr[t][i - 1]);
					l.push(sptArr[t][i]);
					l.push(mj);
				}
				if ((i + 1)<=(len - 1)&&((sptArr[t][i+1]%10 - 1) == v)) {
					m.push(sptArr[t][i]);
					m.push(mj);
					m.push(sptArr[t][i+1]);
				}
			}
			//当前的比目标大
			if (iv - 1 == v) {
				if ((i + 1) <= (len - 1) && ((sptArr[t][i+1]%10 - 2) == v)) {
					r.push(mj);
					r.push(sptArr[t][i]);
					r.push(sptArr[t][i+1]);
				}
			}
		}
		if (l.length > 0) {
			res.push(l);
		}
		if (r.length > 0) {
			res.push(r);
		}
		if (m.length > 0) {
			res.push(m);
		}
		return res;
	}
	return res;
}

//已经碰了的牌能不能杠
var testPGang = function(mj, mjArr, hunMj) {
	var t =  Math.floor(mj / 100);
	var v = mj % 10;
	var tmpArr = [];
	tmpArr = tmpArr.concat(mjArr);
	var sptArr = seprateArr( tmpArr, hunMj );
	var len = sptArr[t].length;
	if (len <= 0) {
		return [];
	}
	var n = 0;
	for (var i=0;i<len;i++) {
		var iv = sptArr[t][i]%10;
		if (iv == v) {
			n+=1;
		}
		if (n >= 3) {
			return [5];
		}
	}
	return [];
}

//暗杠
var testGang = function(mj, mjArr, hunMj) {
	var t  = Math.floor(mj / 100);
	var v = mj % 10;
	var c = 0;
	var tmpArr = [];
	tmpArr = tmpArr.concat(mjArr);
	var sptArr = seprateArr( tmpArr, hunMj );
	var len = sptArr[t].length;
	if (len < 2) {
		return false;
	} else {
		for (var i=0;i<len;i++) {
			if (sptArr[t][i]%10 == v) {
				c = c+1;
			}
		}
		if (c == 3) {
			return true;
		}
	}
}

module.exports={
	cardv:cardv,
	testHu:testHu,
	getTingArr:getTingArr,
	testPengGang:testPengGang,
	testChi:testChi,
	testPGang:testPGang,
	testGang:testGang
}