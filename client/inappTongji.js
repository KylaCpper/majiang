class Stat {
    constructor() {
        TalkingDataGA.onStart('589819C1081F43868F6D16D1C5D9A98C', device.platform);
    }
    userin(me) {
        var account=TalkingDataGA.getAccount(me.id);
        account.setLevel(me.level);
        acount.setAccountName(me.nickname);
        account.setGameServer('通用');
        account.setGender(TDGAGender.kGenderMale);
	}
	levelup(n) {
		TalkingDataGA.Account.setLevel(n);
	}
    reward(n, reason) {
        TDGAVirtualCurrency.onReward(n, reason);
    }
	beginCharge(orderid, money, tickets, desc, payment) {
		if (typeof tickets=='string') {
            payment=desc;
			desc=tickets;
			tickets=Math.floor(money/3);
		}
        TDGAVirtualCurrency.onChargeRequest(orderid,desc, money, 'CNY', tickets,payment);
	}
	endCharge(orderid) {
		TDGAVirtualCurrency.onChargeSuccess(orderid);
	}
    startGame(tableid, name, tickets) {
        TDGAItem.onUse(name, tickets);
    }
	enterGame(tableid) {
		TDGAMission.onBegin(tableid.toString());
	}
	endGame(tableid) {
    	TDGAMission.onCompleted(tableid.toString());
	}
	share() {
		TalkingDataGA.onEvent('share', {user:{id:me.id, nickname:me.nickname}});
	}
	invite(tableid,tabledesc) {
		TalkingDataGA.onEvent('invite', {user:{id:me.id, nickname:me.nickname}, table:{id:tableid, msg:tabledesc}});
	}
    event(name, data) {
        TalkingDataGA.onEvent(name, (typeof data=='object'?data:{data:data}));
    }
}

module.export=new Stat();