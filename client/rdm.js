'use strict';

var Loader = laya.net.Loader;
var Handler = laya.utils.Handler;

var wins=require('./windows.js');
var async=require('async'), merge=require('merge'), EventEmitter=require('events');
var me=require('./myself.js'), ani=require('./embedani.js');
var cardImg=require('./cardImg.js');
var parseR=require('./rule.js').parseR;
var WaitableEvent=require('./waitableEvent.js');

function toTimeString(data)
{
	var _h = data.getHours() >= 10 ? data.getHours() : "0" + data.getHours();
	var _m = data.getMinutes() >= 10 ? data.getMinutes() : "0" + data.getMinutes();

	return _h + ":" + _m;
}
var MenuInst=null;
class Menu extends fairygui.Window {
	constructor() {
		super();
	}
	static get inst() {
		if (MenuInst) return MenuInst;
		MenuInst=new Menu();
		return MenuInst;
	}
	onInit() {
		var cont=this.contentPane=fairygui.UIPackage.createObject('牛牛', 'PopMenu').asCom;
		var self=this;
		cont.getChild('n356').onClick(null, function() {
			self.hide();
			//setTimeout(function() {
				_socket.sendp({c:'leavegame'})
			//}, 1000);
			//fairygui.GRoot.inst.hidePopup();
		});
		cont.getChild('n357').onClick(null, function() {
			self.hide();
			//setTimeout(function() {
				_socket.sendp({c:'dismissgame'})
			//}, 1000);
			//fairygui.GRoot.inst.hidePopup();
		});
	}
}
class Board extends wins.Win {
	constructor(srcname, gd, closeHandler) {
		super(srcname, closeHandler);
		this.gd=gd;
	}
	onInit() {
		super.onInit();
		var self=this, gd=this.gd;
		async.parallel(
			[function(cb){
				$.ajax({
					type: "POST",
					url: "getUpFileName",
					dataType:'JSON',
					timeout:30000,
					success: function (chunk) {
						return cb(null, chunk);
					},
					error: function (e) {
						//if (typeof console == "object") console.log(e);
						cb(e);
					}					
				});
			}
			,function(cb){setTimeout(function(){cb();}, 300)}]
			,function(err, r) {
				if (err) return tipon(err.toString()).popup();
				var msg=r[0];
				if (msg.err) return tipon(msg.err).popup();
				if (me.id==gd.seats[0].user.id) $.ajax({
					type: "POST",
					url: "upload",
					dataType:'JSON',
					data: {
						url:msg.message,
						imgBase64: document.getElementById('layaCanvas').toDataURL('image/jpeg', 0.8)
					}
				});
				if (window.preShareResult) {
					var u=[], w=[];
					for (var i=0; i<gd.seats.length; i++) {
						var s=gd.seats[i];
						if (!s) continue;
						u.push(s.user.nickname);
						if (s.stock.ratio>0) w.push(s.user.nickname);
					}
					window.preShareResult(gd.roomid, u, w, msg.url);
				}
				self.contentPane.getChild('n101').onClick(null, function() {
					window.share && window.share();
				});
			}
		);
	}
}
//var SetBoardInst;
class SetBoard extends Board {
	constructor(gd, closeHandler) {
		super('Component40', gd, closeHandler);
	}
	// static inst(gd, closeHandler) {
	// 	SetBoardInst=SetBoardInst||new SetBoard(gd, closeHandler);
	// 	return SetBoardInst;
	// }
	onInit() {
		super.onInit();
		var self=this, gd=this.gd;
		var _l=this.contentPane.getChild('n3');
		_l.asList.removeChildren();
		var list=[];
		for (var i=0; i<this.gd.seats.length; i++) {
			list.push(this.gd.seats[i]);
		}
		list.sort(function(a, b) {return b.user.delta-a.user.delta});
		for (var i=0; i<list.length; i++) {
			var obj = fairygui.UIPackage.createObject('牛牛', 'Component39');
			var l=list[i], u=l.user;
			obj.getChild('n19').visible=(u.id==self.gd.seats[self.gd.holder].user.id);
			obj.getChild('n1').text=u.nickname;
			obj.getChild('n1').displayObject.overflow='hidden';
			for (var x=0; x<5; x++) {
				obj.getChild('i'+x).url=cardImg[l.stock.cards[x].ov];
			}
			obj.getChild('n11').text=parseR(l.stock.r)._t;
			// list[i].his=list[i].his||{};
			// obj.getChild(bItems.xiaoniuniu).text='*'+list[i].his['10'];
			// obj.getChild(bItems.zhadan).text='*'+list[i].his['7'];
			// obj.getChild(bItems.wuhua).text='*'+list[i].his['5'];
			// obj.getChild(bItems.niuniu).text='*'+list[i].his['3'];
			if (u.delta>0) {
				obj.getChild('n17').text=l.stock.r.t?(l.stock.r.t+'倍'):'';
				obj.getChild('n18').text='+'+u.delta.toString();
			} else {
				obj.getChild('n18').text=u.delta.toString();
			}
			_l.addChild(obj);
		}
		this.contentPane.getChild('n12').text=(gd.setnum+1).toString();
	}
	
}
class FinalBoard extends Board{
	constructor(gd, closeHandler) {
		super('Component14', gd, closeHandler);
	}
		
	onInit() {
		super.onInit();
		var self=this, gd=this.gd;
		var _l=this.contentPane.getChild('n106').asList;
		_l.removeChildren();
		var bItems={icon:'n0', name:'n1', xiaoniuniu:'n2', zhadan:'n3', wuhua:'n4', niuniu:'n5', delta:'n25'};
		var order=['ui://6f69ijyndceogy', 'ui://6f69ijyndceoh0','ui://6f69ijyndceogz','ui://6f69ijyndceoh1', 'ui://6f69ijyndceoh2'];
		var list=[];
		for (var i=0; i<this.gd.seats.length; i++) {
			list.push(this.gd.seats[i].user);
		}
		list.sort(function(a, b) {return b.score-a.score});
		for (var i=0; i<list.length; i++) {
			var obj = fairygui.UIPackage.createObject('牛牛', 'Button16');
			obj.getChild(bItems.icon).url=order[i];
			obj.getChild(bItems.name).text=list[i].nickname;
			obj.getChild('n21').asLoader.url=list[i].face;
			list[i].his=list[i].his||{};
			var str='';
			str+='X'+(list[i].his['10']||0)+'\r\n';
			str+='X'+(list[i].his['7']||0)+'\r\n';
			str+='X'+(list[i].his['5']||0)+'\r\n';
			str+='X'+(list[i].his['4']||0)+'\r\n';
			str+='X'+(list[i].his['3']||0);
			obj.getChild('n27').text=str;
			var score=obj.getChild(bItems.delta);
			if ((list[i].score)>=0) {score.text='+'+list[i].score;}
			else {
				score.font='ui://6f69ijynhkcvyw';
				score.text=(list[i].score).toString();
			}
			_l.addChild(obj);
		}
	}
}
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
function locateMe(seats) {
	for (var i=0; i<seats.length; i++) {
		var s=seats[i];
		if (s && s.user && s.user.id==me.id) return i;
	}
	return -1;
}
var timer=async.queue(function(ms, cb) {
	if (typeof ms=='function') {cb=ms; ms=0}
	setTimeout(cb, ms)
}, 1);

function createHTMLDiv(o) {
	var pos={x:o.x, y:o.y, w:o.width, h:o.height};
	var ele=$('#layaCanvas');
	var rX=Laya.stage.clientScaleX, rY=Laya.stage.clientScaleY;
	pos.x=pos.x*rX;pos.y=pos.y*rY;pos.w=pos.w*rX;pos.h=pos.h*rY;
	var div=$('<div class="card" style="position:absolute;left:'+pos.x+'px; top:'+pos.y+'px; width:'+pos.w+'px; height:'+pos.h+'px"/>');
	div.css('transform', ele.css('transform'));
	div.css('transform-origin', ''+(-pos.x)+'px '+(-pos.y)+'px');
	$('#layaContainer').append(div);
	return div;
}
function flipCard(back, front, cb) {
	var scaleX=100,scaleDirection=-1, scaleDelta=8, end=false;
	var obj=back, view=back.parent, baseOrder=view.getChildIndex(back);
	back.internalVisible=5;front.visible=1;
	obj.pivotX=0.5;
	front.pivotX=0.5;
	var loop=setInterval(function() {
		if(scaleX>=0){
			back.scaleX=scaleX/100;front.scaleX=scaleX/100;
		}else{
			//obj.flip=-1;
			back.scaleX=scaleX/100;front.scaleX=scaleX/100;
			if (obj!=front) {
				view.swapChildren(front, back);
				obj=front;
			}
		}
		if (end) {
			if (cb) cb();
			back.internalVisible=0;
			return clearInterval(loop);
		}
		scaleX+=scaleDirection*scaleDelta;
		if (scaleX>=100) {
			scaleX=100;
			end=true;
			scaleDirection=-1;
		}
		if (scaleX<=0) {
			scaleDirection=1;
		}
	}, 30);
	return front;
}
function createCard(back, cardv) {
	var view=back.parent;
	var l=new fairygui.GLoader();
	l.x=back.x;l.y=back.y;l.width=back.width; l.height=back.height;
	l.fill=3;
	l.url=cardImg[cardv.ov];
	view.addChildAt(l, view.getChildIndex(back)-1);
	return l;
}
function flip(back, cardv, cb) {
	return flipCard(back, createCard(back, cardv), cb);
}
function readablemod(n1, n2) {
	if (!n1) return 0;
	var m=n1%n2;
	if (m==0) return n2;
	return m;
}
function revealStock(backs, revealedcards, cb) {
	for (let i=0; i<revealedcards.length-1; i++) timer.push(220, function() {
		revealedcards[i].img=flip(backs[i], revealedcards[i]);
	});
	timer.push(220, function() {
		revealedcards[revealedcards.length-1].img=flip(backs[revealedcards.length-1], revealedcards[revealedcards.length-1], cb);
	});		
}
var NIU_DEF=[,'ui://6f69ijynka9x94','ui://6f69ijynmeuvla','ui://6f69ijynmeuvl6','ui://6f69ijynmeuvl5','ui://6f69ijynmeuvl4','ui://6f69ijynmeuvl8','ui://6f69ijynmeuvl7','ui://6f69ijynmeuvl3','ui://6f69ijynmeuvl9'];
var niuXsnd=[];
for (var i=1; i<=9; i++) {
	niuXsnd[i]=require('./res/snd/bull'+i+'.mp3');
}

var peerjs=null;
var phonertc=null;//window.cordova?window.cordova.plugins.phonertc:null;

var sysdiv=document.getElementById('layaContainer'), sysCanvas=document.getElementById('layaCanvas');
function createHTMLVideo(obj) {
	var ho=document.createElement('video');
	var _s=ho.style;
	var r=sysCanvas.width/(640*devicePixelRatio);
	var rotate=Number(sysCanvas.style.transform.split(',')[2])==-1;
	_s.left=(rotate?(-obj.y):obj.x)*r+'px';_s.top=(rotate?obj.x:obj.y)*r+'px';_s.width=obj.width*r+'px';_s.height=obj.height*r+'px';
	_s.transform=sysCanvas.style.transform;_s.transformOrigin=sysCanvas.style.transformOrigin;
	_s.position='absolute';
	_s['z-index']=9999999;
	sysdiv.appendChild(ho);
	return ho;
}
class Rdm {
	// initVideo() {
	// 	// open my stream
	// 	step1();
	// 	// check users i should call
	// 	var seats=gd.seats;
	// 	if (!seats) return;
	// 	console.log('peer use', seats);
	// 	for (var i=0; i<seats.length; i++) {
	// 		var otherid=seats[i].user.id;
	// 		if (otherid==me.id) continue;
	// 		if (otherid>me.id) {
	// 			console.log('call', otherid);
	// 			var call = peer.call(otherid, window.localStream, {metadata:me.id});
	// 			self._calls[otherid]=call;
	// 			step3(otherid, call);
	// 		}
	// 	}
	// }
	constructor(opt) {
		var self=this;
		this.opt=opt;
		this._spec={c:[], halted:false};
		var self=this;
		this.msgloop=window.msgloop;
		//this.msgloop.pause();
		var gd=new GameData();
		this.gamedata=gd;
		gd.on('statuschgd', function() {
			self.updStatus(self.gamedata.status);
		})
		.on('seatschgd', function() {
			self.waitE.emit('seatschgd');
			if (gd.seats.length>=2 && gd.seats[0].user.id==me.id && gd.status==0) self.mainCtrl.selectedIndex=1; 
			for (var i=0; i<self.SEAT_DEF.length; i++) {
				var seat=gd.seats[i], locseat=self.SEAT_DEF[self.serverSeatToLocal(i)];
				if (!seat) {
					locseat.chair.visible=false;locseat.icon.url=null;locseat.nick.text='';locseat.level.text='';locseat.score.text='';//locseat.bet.visible=false;locseat.complete.visible=false;
					// clear av session
				} else {
					locseat.chair.visible=true;
					seat.user.face && (locseat.icon.url=seat.user.face);
					locseat.level.text='LV.'+seat.user.level;
					locseat.nick.text=seat.user.nickname;
					locseat.score.text=seat.user.score;
					if (gd.status<9 && seat.bet) {
						locseat.bet.visible=true;
						locseat.bet.text='*'+seat.bet;
					}else locseat.bet.visible=false;
					locseat.complete.visible=(gd.status<8) && (seat.userR!=null);			
				}
			}
		})
		.on('setnumchgd', function() {
			self._view.getChild('n353').asTextField.text=(gd.setnum>0?'第'+(gd.setnum+1)+'盘,':'')+'共'+opt.pan+'盘';
		})
		.on('inited', function() {
			if (gd.status>=6 && gd.status<9) {
				gd.waitnextset=true;
			}
			if (gd.holder!=null) {
				self._view.getTransition('t.holder.'+self.serverSeatToLocal(gd.holder)).play();
			}
			self._view.getChild('n351').text=gd.roomid.toString();
		})
	}
	updStatus(v) {
		var gd=this.gamedata, self=this;
		if (gd.waitnextset) {
			if ([3,10,12,13, 15].indexOf(gd.status)<0) {
				this.mainCtrl.selectedIndex=11;
				return;
			} else {
				gd.waitnextset=undefined;
			}
		}
		if (v==0) {
			if (gd.seats[0].user.id!=me.id) v=2;
			if (gd.seats.length>=2 && gd.seats[0].user.id==me.id) v=1;
		}
		console.log('into', v);
		this.mainCtrl.selectedIndex=v;
		// if (v==0) {
		// 	this.mainCtrl.selectedIndex=8;
		// 	this._view.getTransition('t.deal.4').play(Handler.create(this, function() {
		// 		revealStock(this.backs[4], [{ov:1},{ov:1},{ov:1},{ov:1},{ov:1}]);
		// 	}));
		// }
		switch (v) {
			case 3:
				this.pausemsg(function(cb) {
					Laya.SoundManager.playSound(require('./res/snd/start.mp3'));
					ani.playStarting(function() {
						Laya.SoundManager.stopSound(require('./res/snd/start.mp3'));
						cb();
					});	
				});
			break;
			case 6:
				if (!gd.seats) {
					console.log('this.seats not defined');
					break;
				}
				for (var i=0; i<this.backs.length; i++) {
					var lane=this.backs[i];
					for (var j=0; j<lane.length; j++) {
						var c=lane[j], back=c._backup;
						c.x=back.x;c.y=back.y;c.scaleX=back.scaleX;c.scaleY=back.scaleY;c.internalVisible=1;
					}
				}
				this.pausemsg(function(cb) {
					for (let i=0; i<gd.seats.length; i++) {
						var s =gd.seats[i];
						if (!s) continue;
						timer.push(/*940*/300, function() {
							var localSeat=self.serverSeatToLocal(i);
							if (localSeat==1) {
								var ele=self._view.getChild('n258');
								ele.visible=true;
								ele.alpha=100;
							}
							self._view.getTransition('t.deal.'+localSeat).play((i==(gd.seats.length-1))?Handler.create(null, function() {
								timer.push(300);
								var revealedcards=gd.seats[self.mySeat].stock.cards;
								var backs=self.backs[0];
								var view=self._view;
								for (let i=0; i<revealedcards.length-1; i++) timer.push(350, function() {
										revealedcards[i].img=flip(backs[i], revealedcards[i]);
									});
								timer.push(350, function() {
									revealedcards[revealedcards.length-1].img=flip(backs[revealedcards.length-1], revealedcards[revealedcards.length-1], cb);
								});									
							}):null);
						});
					}
				});
			break;
			case 7:
				self.niuniutip.text='算不出来不要急，点我帮你算';
				var countdown=self._view.getChild('n327').asCom.getChild('n1').asTextField;
				self.cd=20;
				countdown.text=self.cd.toString();
				self.cdTimer=setInterval(function() {
					if (self.cd<=5) {
						Laya.SoundManager.playSound(require('./res/snd/clock.mp3'));
					}
					if (self.cd==0) {
						clearInterval(self.cdTimer);
						self.cdTimer=null;
						self._view.getChild('n327').internalVisible=0;
						_socket.sendp({c:'table.niuniu'});
						self._view.getChild('n209').internalVisible=0;
						self._view.getChild('n99').internalVisible=0;
					}
					countdown.text=self.cd.toString();
					self.cd--;
				}, 1000);
				var revealedcards=self.gamedata.seats[self.mySeat].stock.cards;
				var selectedCards=[];
				var shown_values=[self._view.getChild('n205'),self._view.getChild('n206'),self._view.getChild('n207')], shown_result=self._view.getChild('n208');
				for (var x=0; x<shown_values.length; x++) {shown_values[x].text=''};
				shown_result.text='';
				selectedCards.chgd=function() {
					var c=0, n=0;
					for (var i=0; i<selectedCards.length; i++) {
						var card=selectedCards[i];
						if (!card) continue;
						n+=card.fv;
						shown_values[c].text=card.fv.toString();
						c++;
						if (c>=3) break;
					}
					for (; c<3; c++) shown_values[c].text='';
					shown_result.text=n.toString();
				}
				for (let i=0; i<revealedcards.length; i++) {
					revealedcards[i].img.onClick(null, function() {
						var c=revealedcards[i];
						if (c.orgY==null) c.orgY=c.img.y;
						if (c.img.y!=c.orgY) {
							selectedCards[i]=null;
							selectedCards.chgd();
							c.img.y=c.orgY;
						}
						else {
							selectedCards[i]=c;
							selectedCards.chgd();
							c.img.y-=10;
						}
					});
				}
			break;
			case 12:
				var gd=this.gamedata, self=this;
				if (!gd.seats) {
					console.log('err this.seats not defined');
					break;
				}
				this.pausemsg(function(cb) {
					// play random ani
					var ctrl=self._view.getController('选庄');
					var validUserIdx=[];
					for (var i=0; i<gd.seats.length; i++) {
						var s=gd.seats[i];
						if (s) validUserIdx.push(self.serverSeatToLocal(i));
					}
					//vu=[0, 1,2], beats_base_len=6, pos=0, final_pos=0, beats_len=4
					// [0,1,0,1]
					var beats_base_len=Math.floor((validUserIdx.length+1)*1.5), pos=(beats_base_len-1)%validUserIdx.length, final_pos=validUserIdx.indexOf(self.serverSeatToLocal(gd.holder));
					var beats_len=beats_base_len+(validUserIdx.length+final_pos-pos)%validUserIdx.length;
					var temp=[0.23, 0.18, 0.15, 0.12], beats=new Array(beats_len);
					for (var i=0; i<4; i++) {beats[i]=temp[i]}
					for (var i=4; i<beats_len-5; i++) {beats[i]=0.12}
					var s=(beats_len-5);
					if (s<0) s=0;
					for (var i=s; i<beats_len; i++) {beats[i]=0.12+0.05*(i-s)}
					for (let j=0; j<beats.length; j++) {
						timer.push(beats[j]*1000, function() {
							ctrl.selectedIndex=validUserIdx[j%validUserIdx.length];
						});
					}
					timer.push(10, function() {
						self.mainCtrl.selectedIndex=3;
					});
					timer.push(300, function() {
						self._view.getTransition('t.holder.'+ctrl.selectedIndex).play(
							Handler.create(null, function() {setTimeout(cb, 400);})
						)
					})
				})
			break;
			case 13:
				var gd=this.gamedata, self=this;
				this.pausemsg(function(cb) {
					var lHolder=self.serverSeatToLocal(gd.holder);
					self._view.getTransition('t.holder.'+lHolder).play(Handler.create(null, function() {
						self._view.getController('选庄').selectedIndex=lHolder;
						cb();
					}));
				});
			break;
			case 5:
				var gd=this.gamedata;
				if (gd.seats[gd.holder].user.id==me.id) {
					this.mainCtrl.selectedIndex=14;
				} else {
					Laya.SoundManager.playSound(require('./res/snd/pleasebet.mp3'));
					var _t='请下注:';
					var countdown=5;
					var tip=this._view.getChild('n283').asTextField;
					tip.text=_t+countdown;
					self.tr=setInterval(function() {
						if (countdown==0) {
							clearInterval(self.tr);
							_socket.sendp({c:'table.betting', bet:gd.seats[locateMe(gd.seats)].lastbet||1});
							return;
						}
						countdown--;
						tip.text=_t+countdown;
					}, 1000);
				}
			break;
			case 8:
				if (!gd.seats) {
					console.log('err this.seats not defined');
					break;
				}
				this.pausemsg(function(cb) {
					var delay=1800;
					function playRevealAni(serverseat) {
						let seat=gd.seats[serverseat];
						if (!seat) return;
						let locseat=self.serverSeatToLocal(serverseat), s=self.SEAT_DEF[locseat];
						//s.complete.visible=false;
						if (locseat==0) {
							// it is me
							timer.push(0, function() {
								self.showResult(s, seat.stock.r);
							});
							timer.push(750);
							return;
						}
						
						revealStock(self.backs[locseat], seat.stock.cards, function() {
							self.showResult(s, seat.stock.r);
						});
						timer.push(delay);
					}
					timer.push(100);
					for (var i=0; i<gd.seats.length; i++) {
						if (i==gd.holder) continue;	// 庄最后播
						playRevealAni(i);
					}
					playRevealAni(gd.holder);
					timer.push(self.serverSeatToLocal(gd.holder)==0?750:delay, cb);
				})
			break;
			case 9:
			this.pausemsg(function(callback) {
				for (var i=0; i<self.SEAT_DEF.length; i++) {
					self.SEAT_DEF[i].delta.visible=false;
				}
				var holder_s=self.SEAT_DEF[self.serverSeatToLocal(gd.holder)];
				var holder_center={x:holder_s.icon.x, y:holder_s.icon.y, width:holder_s.icon.width, height:holder_s.icon.height};
				var temp=[];
				var holder_win=0;
				// draw all lose money to holder
				for (var i=0;i<gd.seats.length; i++) {
					var loc_s=self.SEAT_DEF[self.serverSeatToLocal(i)];
					var seat=gd.seats[i];
					if (!seat) continue;
					var r=seat.stock.ratio;
					if (r<0) {
						holder_win-=seat.user.delta;
						loc_s.delta.visible=true;
						loc_s.bet.visible=false;
						var deltaCom=loc_s.delta.asCom;
						deltaCom.getController('c1').selectedIndex=1;
						deltaCom.getChild('n1').asTextField.font='ui://6f69ijynqbojs2';
						//seat.stock.ratio*seat.bet*gd.baseScore
						deltaCom.getChild('n1').text=(-seat.bet*gd.baseScore).toString();
						if (r<-1) {
							deltaCom.getChild('n2').font='ui://6f69ijyny2dlt6';
							deltaCom.getChild('n2').text='*'+(-r);
						}
						else deltaCom.getChild('n2').text='';
						temp=temp.concat(self.loseAni({x:loc_s.icon.x+loc_s.icon.width/2, y:loc_s.icon.y+loc_s.icon.height/2}, holder_center));
					}
				}

				if (holder_win>0) {
					timer.push(20*20+1300, function() {
						holder_s.bet.visible=false;
						holder_s.delta.visible=true;
						var seat=gd.seats[gd.holder];
						var deltaCom=holder_s.delta.asCom;
						// if (holder_win<0) {
						// 	deltaCom.getController('c1').selectedIndex=1;
						// 	deltaCom.getChild('n1').asTextField.font='ui://6f69ijynqbojs2';
						// 	deltaCom.getChild('n1').text=seat.user.delta.toString();
						// } else {
							deltaCom.getController('c1').selectedIndex=0;
							deltaCom.getChild('n1').asTextField.font='ui://6f69ijynqbojrq';
							deltaCom.getChild('n1').text='+'+holder_win;//seat.user.delta.toString();						
						// }
						deltaCom.getChild('n2').text='';
						
						for (var i=0; i<temp.length; i++) {
							self._view.removeChild(temp[i]);
						}
						temp=[];
					});
					timer.push(300, function() {
						//deltaCom.visible=false;
						holder_s.delta.visible
					});
				}
				var holder_lose=gd.seats[gd.holder].user.delta-holder_win;
				if (holder_lose<0) {
					timer.push(300, function() {
						holder_s.bet.visible=false;
						holder_s.delta.visible=true;
						var seat=gd.seats[gd.holder];
						var deltaCom=holder_s.delta.asCom;
						deltaCom.getController('c1').selectedIndex=1;
						deltaCom.getChild('n1').asTextField.font='ui://6f69ijynqbojs2';
						deltaCom.getChild('n1').text=holder_lose.toString();
						deltaCom.getChild('n2').text='';
					});

					timer.push(200, function() {
						holder_s.bet.visible=false;
						for (var i=0; i<gd.seats.length; i++) {
							var seat=gd.seats[i];
							if (!seat) continue;
							var r=seat.stock.ratio;
							if (r>0) {
								var loc_s=self.SEAT_DEF[self.serverSeatToLocal(i)];
								temp=temp.concat(self.loseAni(holder_center, {x:loc_s.icon.x, width:loc_s.icon.width, y:loc_s.icon.y, height:loc_s.icon.height}));
							}
						}
						setTimeout(function(seat) {
							for (var i=0; i<gd.seats.length; i++) {
								if (i==gd.holder) continue;
								var seat=gd.seats[i];
								if (!seat) continue;
								var r=seat.stock.ratio;
								if (r<0) continue;
								var loc_s=self.SEAT_DEF[self.serverSeatToLocal(i)];
								loc_s.bet.visible=false;
								loc_s.delta.visible=true;
								var deltaCom=loc_s.delta.asCom;
								deltaCom.getController('c1').selectedIndex=0;
								deltaCom.getChild('n1').asTextField.font='ui://6f69ijynqbojrq';
								deltaCom.getChild('n1').text='+'+(seat.bet*gd.baseScore);
								if (r>1) {
									deltaCom.getChild('n2').visible=true;
									deltaCom.getChild('n2').asTextField.font='ui://6f69ijynqbojse';
									deltaCom.getChild('n2').text='*'+r;
								}else {
									deltaCom.getChild('n2').visible=false;
								}
							}
						}, 20*20+1300);
					});
					timer.push(20*20+1300, function() {
						for (var i=0; i<temp.length; i++) {
							self._view.removeChild(temp[i]);
						}					
					});
				}

				timer.push(800, function() {
					// play win or lose ani
					var my_s=gd.seats[self.mySeat];
					if (my_s.user.delta>0) {
						Laya.SoundManager.playSound(require('./res/snd/win.mp3'));
						ani.playWin(function() {
							Laya.SoundManager.stopSound(require('./res/snd/win.mp3'));
							self.clearSet();
							callback();
						});
					} else {
						Laya.SoundManager.playSound(require('./res/snd/lose.mp3'));
						var lose=fairygui.UIPackage.createObject('牛牛', 'Component28');
						self._view.addChild(lose);
						setTimeout(function() {
							Laya.SoundManager.stopSound(require('./res/snd/lose.mp3'));
							self._view.removeChild(lose);
							self.clearSet();
							callback();
						}, 2300);
					}
				});
			});
			break;
			case 10:
				this.pausemsg(function(callback) {
					new SetBoard(gd, function() {
						_socket.sendp({c:'table.next'});
						return callback();
					}).show();
				})
			break;
			case 15:
				tongji.endGame(gd.roomid);
				this.pausemsg(function(callback) {
					self.finalboard(function() {
						setTimeout(callback, 500);
					})
				})
			break;
		}
	}
	clearSet() {
		for (var i=0; i<this.SEAT_DEF.length; i++) {
			var s=this.SEAT_DEF[i];
			this._view.removeChild(s.result);
			s.result=null;			
		}
		for (var i=0; i<this.gamedata.seats.length; i++) {
			var cards=this.gamedata.seats[i].stock.cards;
			for (var j=0; j<cards.length; j++) {
				if (cards[j].img) {
					this._view.removeChild(cards[j].img);
					cards[j].img=null;
				}
			}
		}

	}
	finalboard(cb) {
		var board=new FinalBoard(this.gamedata, cb);
		board.show();
	}
	showResult(seatdef, r) {
		var sign;
		seatdef.complete.visible=false;
		switch (r.t) {
			case 10:
			// xiaoniuniu
				sign=fairygui.UIPackage.createObject("牛牛", "ComponentBigNiu").asCom;
				Laya.SoundManager.playSound(require('./res/snd/bull13.mp3'));
			break;
			case 7:
			//zhadan
				sign=fairygui.UIPackage.createObject("牛牛", "ComponentBigNiu").asCom;
				sign.getChild('n7').asLoader.url='ui://6f69ijynn9sttm';
				Laya.SoundManager.playSound(require('./res/snd/bull11.mp3'));
			break;
			case 5:
			// 五花		
				sign=fairygui.UIPackage.createObject("牛牛", "ComponentBigNiu").asCom;
				sign.getChild('n7').asLoader.url='ui://6f69ijynn9sttn';
				Laya.SoundManager.playSound(require('./res/snd/bull12.mp3'));
			break;
			case 4:
			// sihua
				sign=fairygui.UIPackage.createObject("牛牛", "ComponentBigNiu").asCom;
				sign.getChild('n7').asLoader.url='ui://6f69ijyntvp9w3';
				Laya.SoundManager.playSound(require('./res/snd/bigCard.mp3'));
			break;
			case 3:
			// niuniu
				sign=fairygui.UIPackage.createObject("牛牛", "Component25").asCom;
				Laya.SoundManager.playSound(require('./res/snd/bull10.mp3'));
			break;
			case 2:
			// niu 7~9
			case 1:
			// niu 1_6
				sign=fairygui.UIPackage.createObject("牛牛", "Component24").asCom;
				sign.getChild('n3').asLoader.url=NIU_DEF[r.v];
				Laya.SoundManager.playSound(niuXsnd[r.v]);
			break;
			case 0:
				sign=fairygui.UIPackage.createObject("牛牛", "Component23").asCom;
				Laya.SoundManager.playSound(require('./res/snd/bull0.mp3'));
			break;
		}
		if (sign) {
			sign.pivotX=0.5; sign.pivotY=0.5;sign._pivotAsAnchor=true;sign.x=seatdef.complete.x;sign.y=seatdef.complete.y;
			this._view.addChild(sign);
			seatdef.result=sign;
		}
	}
	loseAni(start_pt, end_rect) {
		var temp=[];
		// draw all lose money to holder
		for (var j=0; j<20; j++) {
			var c=new fairygui.GLoader();
			c.url='ui://6f69ijynx600qy';
			c.pivotX=0.5;c.pivotY=0.5;c._pivotAsAnchor=true;
			var xfactor=Math.random()*2, x_delta=xfactor*xfactor;
			var yfactor=Math.random()*2, y_delta=yfactor*yfactor;
			c.x=start_pt.x+end_rect.width/3*xfactor;c.y=start_pt.y+end_rect.height/3*yfactor;
			c.alpha=0.3;
			this._view.addChild(c);
			temp.push(c);
			xfactor=Math.random()*2; x_delta=xfactor*xfactor;
			yfactor=Math.random()*2; y_delta=yfactor*yfactor;
			var dst={x:end_rect.x+end_rect.width/2*xfactor, y:end_rect.y+end_rect.height/2*yfactor, alpha:1};
			Laya.Tween.to(c.displayObject, dst, 1300, Laya.Ease.quartInOut, null, 20*j)//.setStartTime(j*80);
			Laya.SoundManager.playSound(require('./res/snd/chipMoveMuch.mp3'));
		}
		return temp;
	}
	static create(opt, cb) {
		if (typeof opt==='function') {cb=opt; opt={}}
		async.parallel([
			function(cb) {
				Laya.loader.load([
					//{ url: require("./res/hall@h29yzf.mp3"), type: Loader.SOUND },
					{ url: require("./res/hall@atlas_uyrl82.jpg"), type: Loader.IMAGE },
					{ url: require("./res/hall@atlas10.png"), type: Loader.IMAGE },
					{ url: require("./res/hall@atlas0.png"), type: Loader.IMAGE },
					{ url: require("./res/hall.fui"), type: Loader.BUFFER }
				], Handler.create(null, function() {cb();}))
			},
			function(cb) {Flash2x.loadScene("f2x",function(){}, function(){
				Flash2x.loadScene("win",function(){}, function(){cb()});
			})}
		],function(err) {
			var room=new Rdm(opt);
			fairygui.UIPackage.addPackage('hall');
			var _view =room._view= fairygui.UIPackage.createObject("牛牛", "Component13").asCom;
			window.roomview=_view;

			var SEAT_DEF=room.SEAT_DEF=[
				{chair:_view.getChild('n171'), icon:_view.getChild('n153').asLoader, level:_view.getChild('n289').asTextField, nick:_view.getChild('n160').asTextField, score:_view.getChild('n161').asTextField, bet:_view.getChild('bet0').asTextField, complete:_view.getChild('n265'), delta:_view.getChild('n328'), sndSign:_view.getChild('spk0')},
				{chair:_view.getChild('n123'), icon:_view.getChild('n113').asLoader, level:_view.getChild('n291').asTextField, nick:_view.getChild('n121').asTextField, score:_view.getChild('n122').asTextField, bet:_view.getChild('bet1').asTextField, complete:_view.getChild('n264'), delta:_view.getChild('n329'), sndSign:_view.getChild('spk1')},
				{chair:_view.getChild('n201'), icon:_view.getChild('n194').asLoader, level:_view.getChild('n294').asTextField, nick:_view.getChild('n199').asTextField, score:_view.getChild('n200').asTextField, bet:_view.getChild('bet2').asTextField, complete:_view.getChild('n261'), delta:_view.getChild('n330'), sndSign:_view.getChild('spk2')},
				{chair:_view.getChild('n181'), icon:_view.getChild('n174').asLoader, level:_view.getChild('n297').asTextField, nick:_view.getChild('n179').asTextField, score:_view.getChild('n180').asTextField, bet:_view.getChild('bet3').asTextField, complete:_view.getChild('n262'), delta:_view.getChild('n331'), sndSign:_view.getChild('spk3')},
				{chair:_view.getChild('n133'), icon:_view.getChild('n125').asLoader, level:_view.getChild('n300').asTextField, nick:_view.getChild('n131').asTextField, score:_view.getChild('n132').asTextField, bet:_view.getChild('bet4').asTextField, complete:_view.getChild('n263'), delta:_view.getChild('n332'), sndSign:_view.getChild('spk4')}
			];
			var backs=[
				['n216', 'n217', 'n218', 'n219', 'n225'],
				['n253', 'n254', 'n255', 'n256', 'n257'],
				['n247', 'n248', 'n249', 'n250', 'n251'],
				['n239', 'n240', 'n241', 'n242', 'n243'],
				['n227', 'n231', 'n230', 'n229', 'n228']
			];
			for (var i=0; i<backs.length; i++) {
				var lane=backs[i];
				for (var j=0; j<lane.length; j++) {
					lane[j]=_view.getChild(lane[j]);
					lane[j]._backup={x:lane[j].x, y:lane[j].y, scaleX:lane[j].scaleX, scaleY:lane[j].scaleY};
					lane[j].internalVisible=0;
				}
			}
			room.backs=backs;

			var ticket=_view.getChild('n304').asTextField;
			ticket.text='';
			me.removeAllListeners('ticketschgd').on('ticketschgd', function() {
				ticket.text=me.tickets;
			});

			var mainCtrl=_view.getController('c1');
			room.mainCtrl=mainCtrl;
			mainCtrl.selectedIndex=11;

			_view.getController('选庄').setSelectedIndex(5);
			_view.getController('胜利后头框闪烁').setSelectedIndex(5);

			// 退出按钮
			var cont=_view.getChild('n363');
			cont.getChild('n356').onClick(null, function() {
				_socket.sendp({c:'leavegame'})
			});
			cont.getChild('n357').onClick(null, function() {
				_socket.sendp({c:'dismissgame'})
			});
			// var kkk=null;

			// _view.getChild('n93').asButton.onClick(room, function() {
			// 	if (!kkk) {
			// 		kkk=new Menu();
			// 		fairygui.GRoot.inst.showPopup(new Menu(),_view.getChild('n93'), true);
			// 	} else kkk.show();
			// });

			// 邀请按钮
			_view.getChild('n266').asButton.onClick(room, function() {
				// _socket.sendp({c:'createInviteCode'});
				// netmsg.once('inviteCode', null, function(msg) {
				if (room.inviteCode) {
					if (window.invite) window.invite(room.inviteCode);
					else prompt('code', room.inviteCode);
				}
				// });
			});
			// 开始按钮
			_view.getChild('n238').asButton.onClick(room, function() {
				_socket.sendp({c:'run'});
			});
			// 下注按钮
			var bid=_view.getChild('n105').asCom;
			bid.onClick(null, function() {
				_socket.sendp({c:'table.betting', bet:bid.getController('c1').selectedPage});
				bid.internalVisible=0;	
				clearInterval(room.tr);
			});
			// bid.getChild('n4').asButton.onClick(null, function() {
			// 	_socket.sendp({c:'table.betting', bet:1});
			// 	bid.internalVisible=0;	
			// 	clearInterval(room.tr);
			// });
			// bid.getChild('n1').asButton.onClick(null, function() {
			// 	_socket.sendp({c:'table.betting', bet:2});
			// 	bid.internalVisible=0;
			// 	clearInterval(room.tr);
			// });
			_view.getChild('n352').asTextField.text=opt.dizhu.toString();
			_view.getChild('n353').asTextField.text='共'+opt.pan+'盘';

			var niuniutip=_view.getChild('n22').asCom.getChild('n2').asTextField;
			room.niuniutip=niuniutip;
			_view.getChild('n22').asCom.onClick(null, function() {
				var mystock=room.gamedata.seats[room.mySeat].stock;
				var t=parseR(mystock.r)._t;
				var revealedcards=mystock.cards;
				if (t=='没牛') niuniutip.text='[color=#5A6056]你的牌没有牛,马上为你开牌[/color]';
				else niuniutip.text='[color=#5A6056]你的牌是[color=#9311DC]'+t+'[/color],马上为你开牌[/color]';
				if (mystock.r.f) {
					var count=0, selCards=[]
					for (var i=0; i<revealedcards.length; i++) {
						var c=revealedcards[i];
						if (mystock.r.f.indexOf(c.ov)>=0) {
							if (c.orgY==null) c.orgY=c.img.y;
							c.img.y=c.orgY-10;
							selCards.push(c);
							count++;
							if (count>=3) break;
						}
					}
					var shown_values=[_view.getChild('n205'),_view.getChild('n206'),_view.getChild('n207')], shown_result=_view.getChild('n208');
					var n=0;
					for (var i=0;i<3; i++) {
						selCards[i] && (n+=selCards[i].fv);
						shown_values[i].text=selCards[i].fv.toString();
					}
					shown_result.text=n.toString();
				}
				else {
					for (var i=0; i<revealedcards.length; i++) {
						var c=revealedcards[i];
						if (c.orgY!=null) c.img.y=c.orgY;
					}
				}
				room.cd=2;
			});
			// 牛牛按钮
			_view.getChild('n56').asButton.onClick(null, function() {
				var mystock=room.gamedata.seats[room.mySeat].stock;
				if (mystock.r.t<1) return niuniutip.text='你的牌是没有牛的';
				_socket.sendp({c:'table.niuniu'});
				if (room.cdTimer) {
					clearInterval(room.cdTimer);
					room.cdTimer=null;
				}
				_view.getChild('n209').internalVisible=0;
				_view.getChild('n99').internalVisible=0;
				_view.getChild('n327').internalVisible=0;
			});
			_view.getChild('n57').asButton.onClick(null, function() {
				var mystock=room.gamedata.seats[room.mySeat].stock;
				if (mystock.r.t>=1) return niuniutip.text='你的牌是有牛的';
				_socket.sendp({c:'table.niuniu'});
				if (room.cdTimer) {
					clearInterval(room.cdTimer);
					room.cdTimer=null;
				}
				_view.getChild('n209').internalVisible=0;
				_view.getChild('n99').internalVisible=0;
				_view.getChild('n327').internalVisible=0;	
			})
			//room.msgloop.resume();
			var voicebtn=_view.getChild('n335');
			if (phonertc) voicebtn.visible=false;
			var _rec=null, _recCanceled=false;
			voicebtn.on('mousedown', null, function() {
				if (window.startRecord) {
					_recCanceled=false;
					setTimeout(function() {
						if (!_recCanceled) {
							window.startRecord();
							Laya.SoundManager.musicVolume=0.2;
							_rec=wins.RecWin.inst;
							_rec.show();
						}
					}, 200);
				}
			});
			voicebtn.on('mouseup', null, function() {
				if (_rec) { 
					setTimeout(function() {
						window.stopRecord && window.stopRecord(function(err, token){
							Laya.SoundManager.musicVolume=1;
							if (err) return console.log(err);
							_socket.sendp({c:'table.voice', token:token});
						});
					}, 300);
					_rec.hide();_rec=null;
				} else cancelRec();			
			});
			function cancelRec() {
				_recCanceled=true;
				console.log('rec canceled');
				window.stopRecord && window.stopRecord();
				if (_rec) {_rec.hide();_rec=null;}
				Laya.SoundManager.musicVolume=1;
			}
			voicebtn.on('mouseout', null, cancelRec);
			// 时间
			var _timer=_view.getChild('n360');
			_timer.text=toTimeString(new Date());
			setInterval(function() {
				_timer.text=toTimeString(new Date());
			},1000);
			//test
			// voicebtn.on('click', null, function() {
			// 	$.ajax({
			// 		type: "POST",
			// 		url: "upload",
			// 		dataType:'JSON',
			// 		data: { 
			// 			imgBase64: document.getElementById('layaCanvas').toDataURL('image/jpeg', 0.8)
			// 		}
			// 		}).done(function(o) {
			// 			console.log('saved', o);
			// 	});
			// });			
			cb(null, room);
		});
	}
	active() {
		var self=this;
		_socket.sendp({c:'createInviteCode'});
		netmsg.once('inviteCode', null, function(msg) {
			self.inviteCode=msg.v;
			window.preInvite && window.preInvite(msg.v, self.opt);
		});
		Laya.SoundManager.playMusic(require('./res/snd/bgm2.mp3'));
		this.mySeat=null;
		for (var i=0; i<this.SEAT_DEF.length; i++) {
			var s=this.SEAT_DEF[i];
			s.icon.url='';
			s.level.text='';
			s.nick.text='';
			s.score.text='';
			s.bet.visible=false;
			s.complete.visible=false;
			s.sndSign.visible=false;
		}
		this.activeVideo();
		/*var holder=1, holder_icon=this.SEAT_DEF[holder].icon;
		var dst={x:holder_icon.x, y:holder_icon.y, width:holder_icon.width, height:holder_icon.height};
		var temp=[];
		for (var i=0; i<5; i++) {
			if (i==holder) continue;
			var start={x:this.SEAT_DEF[i].icon.x+this.SEAT_DEF[i].icon.width/2, y:this.SEAT_DEF[i].icon.y+this.SEAT_DEF[i].icon.height/2};
			temp=temp.concat(this.loseAni(start, dst));
		}
		var self=this;
		setTimeout(function() {
			for (var i=0; i<temp.length; i++) {
				self._view.removeChild(temp[i]);
			}
		}, 20*20+1300);*/
	}
	deactive() {
		//me.removeAllListeners();
		this.gamedata.removeAllListeners();
		if (window.localStream) {
			delete window.localStream;
		}
		if (window.localVideo) {
			sysdiv.removeChild(window.localVideo);
			delete window.localVideo;
		}
		for (var i in this._calls) {
			var _call=this._calls[i];
			if (_call) {
				_call.call && _call.call.close();
				_call.video && sysdiv.removeChild(_call.video);
			}
		}
		this._calls={};
	}
	serverSeatToLocal(seat) {
		if (this.mySeat==null) this.mySeat=locateMe(this.gamedata.seats);
		return (this.SEAT_DEF.length+seat-this.mySeat)%this.SEAT_DEF.length;
	}
	pausemsg(f) {
		var self=this;
		this.msgloop.pause();
		f(function() {
			self.msgloop.resume();
		})
	}
	findUserLocalSeat(userid) {
		var gd=this.gamedata;
		for (var i=0; i<gd.seats.length; i++) {
			var seat=gd.seats[i];
			if (seat && seat.user.id==userid) return this.serverSeatToLocal(i);
		}
		return null;
	}
	msg(pack) {
		var self=this;
		if (pack.gamedata) {
			this.gamedata._update(pack.gamedata);
		}
		switch(pack.c) {
			case 'table.start':
				tongji.enterGame(self.gamedata.roomid);
				if (self.gamedata.seats[0].user.id==me.id) tongji.startGame(self.gamedata.roomid, pack.opt.pan+'盘', pack.opt.fangka);
			break;
			case 'table.voice':
				if (window.playRecord) {
					var s=this.findUserLocalSeat(pack.comesfrom);
					this.SEAT_DEF[s].sndSign.visible=true;
					this.SEAT_DEF[s].sndSign.getController('snd').setSelectedIndex(0);
					Laya.SoundManager.musicVolume=0.2;
					window.playRecord(pack.token, function() {
						Laya.SoundManager.musicVolume=1;
						self.SEAT_DEF[s].sndSign.visible=false;
					});
				}
			break;
			case 'table.agreedismiss':
				_socket.sendp({c:'table.agreedismiss', agree:confirm(pack.from+'要求解散游戏，同意吗？')});
			break;
			case 'table.ackdismiss':
				var s=self.findUserLocalSeat(pack.id);
				if (s==null) break;
				var seat=this.SEAT_DEF[s];
				seat.sndSign.visible=true;
				seat.sndSign.getController('snd').setSelectedIndex(1);
				seat.sndSign.getChild('n1').text=pack.v;
				setTimeout(function() {
					seat.sndSign.visible=false;
				}, 5000);
			break;
			case 'table.userin':
				self.waitE.emit('table.userin', pack);
			break;
			case 'table.userout':
				self.waitE.emit('table.userout', pack);			
			break;
			case 'trans':
				self.waitE.emit('trans', pack);
			break;
		}
		return true;
	}
	activeVideo() {
		var self=this;
		var usevideo=false, usertc=false;
		var gd=this.gamedata;
		this.waitE=new WaitableEvent('open');
		if (!!window.cordova || location.search.indexOf('usepeer')>=0) {
			if (!!window.Connection) {
				if (navigator.connection.type!=Connection.WIFI && navigator.connection.type!=Connection.ETHERNET) {
					if (!confirm('在手机网络下使用视频可能产生高额流量费用，是否关闭视频？')) {
						usevideo=true;
					}
				}else usevideo=true;
				usertc=true;
			}
			else usevideo=true;
			if (!usevideo) tipon('实时语音已经启动，说句话试试吧').popup();
			var SafePeer=require('./safePeer.js');
			this._calls={};
			navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

			self.waitE.on('trans', function(pack) {
				if (pack.subc!='peerready') return;
				console.log('table.peerready, chk need call', pack);
				if (pack.id>me.id) {
					console.log('call', pack.id);
					self.peer.call(pack.id, window.localStream, {metadata:me.id}, function(err, stream) {
						step3(pack.id, stream);
					});
				}
			})
			.on('table.userout', function(pack) {
				console.log(self._calls);
				var _call=self._calls[pack.id];
				if (_call) {
					console.log('call off', pack.id);
					_call.call && _call.call.close();
					_call.video && sysdiv.removeChild(_call.video);
					delete self._calls[pack.id];
				}
			})
			//.on('seatschgd', refresh);
			function callUser(id) {
				console.log('call', id);
				self.peer.call(id, window.localStream, {metadata:me.id}, function(err, stream) {
					stream.on('error', function() {
						callUser(id);
					});
					step3(id, stream);
				});
			}
			function refresh() {
				if (gd.seats) {
					for (var i=0; i<gd.seats.length; i++) {
						var s=gd.seats[i];
						if (!s) continue;
						if (s.user.id>me.id && (!s.user.offline) && self._calls[s.user.id]==null) {
							callUser(s.user.id);
						}
						if (s.user.id<me.id) {
							_socket.sendp({c:'trans', to:s.user.id, subc:'peerready', id:me.id});
						}
					}
				}
			};
			function step1 () {
				// Get audio/video stream
				if (window.localStream) return;
				navigator.getUserMedia({audio: true, video: usevideo?{width:100, height:100}:false}, function(stream){
					// Set your video displays
					console.log('locale stream opened');
					window.localVideo=createHTMLVideo(self.SEAT_DEF[0].icon);
					window.localVideo.src= URL.createObjectURL(stream);
					window.localStream = stream;
					startPeer();
				}, console.log.bind(console));
			}

			function step2 () {
				self.waitE.emit('open');
				refresh();
			}

			function step3 (id, call) {
				//Hang up on an existing call if present
				if (self._calls[id]) {
					self._calls[id].call && self._calls[id].call.close();
					self._calls[id].video && sysdiv.removeChild(self._calls[id].video);
				}
				self._calls[id]={};
				// Wait for stream on the call, then set peer video display
				call.on('stream', function(stream){
					var ho=self._calls[id].video=createHTMLVideo(self.SEAT_DEF[self.findUserLocalSeat(id)].icon);
					ho.src=URL.createObjectURL(stream);
				});

				// UI stuff
				self._calls[id].call=call;
				// window.existingCall = call;
				// $('#their-id').text(call.peer);
				call.on('close', step2);
				// $('#step1, #step2').hide();
				// $('#step3').show();
			}
			// PeerJS object
			function startPeer() {
				var peer=self.peer = new SafePeer(me.id, { key: 'Ghjy178_992_huj', debug: 1, host: 'ws.1357g.com', port: 80, path: '/peer'});
				peer.on('open', function() {
					console.log('peer server connected');
					step2();
				});
				// Receiving a call
				peer.on('call', function(call){
					// Answer the call automatically (instead of prompting user) for demo purposes
					console.log('called from', call.metadata);
					call.answer(window.localStream);
					step3(call.metadata, call);
				});

				return peer;
			}
			step1();
		}
	}
}

module.exports=Rdm.create;
