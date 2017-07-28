function noop(){}
var TDGA=TDGA;
if (!TDGA) {
	TDGA={
		Account:noop,onPageLeave:noop,onReward:noop, onChargeRequest:noop, onChargeSuccess:noop, onMissionBegin:noop, onItemPurchase:noop, onMissionCompleted:noop, onEvent:noop
	}
	TDGA.Account.setLevel=noop;
}
class Stat {
	constructor() {
		this._delayOp=[];
		this._inited=true;
	}
	init(key) {
		this._inited=true;
		return;
		var self=this;
		loadScript('http://sdk.talkingdata.com/g/h5/v1/'+key, function(err) {
			self._inited=true;
			for (var i=0, l=self._delayOp.length; i<l; i++) {
				var op=self._delayOp[i];
				op.f.apply(self, op.p);
			}
		});
	}
	_delay(f) {
		if (!this._inited) {
			return this._delayOp.push({f:f});
		}
		f();
	}
	userin(me) {
		this._delay(function() {
			var qudao=0;
			if (!!window.cordova) {
				var o={"Android":1, "BlackBerry 10":2, "browser":3, "iOS":4,  "WinCE":5, "Tizen":6, "Mac OS X":7};
				qudao=o[device.platform]||8;
			}
			else if (startup_param.pf=='wechat') qudao=101;
			TDGA.Account({
				accountId : me.id,
				level : me.level,
				accountName:me.nickname,
				gameServer : '通用',
				accountType : qudao,
				gender : startup_param.sex
			});
		});
	}
	userout() {
		this._delay(TDGA.onPageLeave.bind(TDGA));
	}
	levelup(n) {
		this._delay(TDGA.Account.setLevel.bind(TDGA.Account,n));
	}
	reward(n, reason) {
		this._delay(TDGA.onReward.bind(TDGA, n, reason));
	}
	beginCharge(orderid, money, tickets, desc, payment) {
		if (typeof tickets=='string') {
			payment=desc;
			desc=tickets;
			tickets=Math.floor(money/3);
		}
		this._delay(function() {
			TDGA.onChargeRequest({
				orderId : orderid
				,iapId : desc
				,currencyAmount : money
				,currencyType : 'CNY'
				,virtualCurrencyAmount : tickets
				,paymentType:payment
			});
		});
	}
	endCharge(orderid, payment) {
		this._delay(function() {
			TDGA.onChargeSuccess({
				orderId : orderid,
				paymentType:payment
			});
		});
	}
	enterGame(tableid) {
		this._delay(function() {
			TDGA.onMissionBegin(tableid.toString());
		});
	}
	startGame(tableid, name, tickets) {
		this._delay(function() {
			TDGA.onItemPurchase({item:name, itemNumber:1, priceInVirtualCurrency:tickets});
		});
	}
	endGame(tableid) {
		this._delay(function() {
			TDGA.onMissionCompleted(tableid.toString());
		});		
	}
	share() {
		this._delay(function() {
			TDGA.onEvent('share', {user:{id:me.id, nickname:me.nickname}});
		});
	}
	invite(tableid,tabledesc) {
		this._delay(function() {
			TDGA.onEvent('invite', {user:{id:me.id, nickname:me.nickname}, table:{id:tableid, msg:tabledesc}});
		});
	}
	event(name, data) {
		this._delay(function() {
			TDGA.onEvent(name, (typeof data=='object'?data:{data:data}));
		});
    }
}

var tongji=new Stat();
window.onunload=tongji.userout;

module.exports=tongji;