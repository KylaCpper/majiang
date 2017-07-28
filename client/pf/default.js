var tongji=window.tongji=require('../tongji.js');

function _noop() {}
// function getAjax(url, data, callback) {
// 	if (typeof data ==='function') {
// 		callback =data;
// 		data=null;
// 	}
// 	if (!callback) callback=function(){};
// 	$.ajax({
// 		type: "POST",
// 		url: url,
// 		dataType: "JSON",
// 		data: data,
// 		timeout:30000,
// 		success: function (chunk) {
// 			return callback(null, chunk);
// 		},
// 		error: function (e) {
// 			//if (typeof console == "object") console.log(e);
// 			callback(e);
// 		}
// 	})
// }
window.pay=function(orderid, money, desc, cb) {
	!cb && (cb=_noop);
	if (tipon) {
		tongji.beginCharge(orderid, money, desc, '测试通道');
		return getAjax('pf/default/pay', {orderid:orderid, money:money}, function(err, r) {
			if (err) return tipon(err.responseText).popup(cb);
			tipon('测试版，直接为您增加房卡').popup(cb);
			tongji.endCharge(orderid, '测试通道');
		})
	}
	cb();
}
window.share=function() {
	console.log('share');
}
window.preShareResult=function(roomid, setnum, participants, winners, img) {
	console.log('shareContent', arguments);
}