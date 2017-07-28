webpackJsonp([4],Array(34).concat([
/* 34 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	(function() {

	/** @license zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */(function() {'use strict';var l=this;function p(b,e){var a=b.split("."),c=l;!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&void 0!==e?c[d]=e:c=c[d]?c[d]:c[d]={}};var q="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Uint32Array&&"undefined"!==typeof DataView;function t(b){var e=b.length,a=0,c=Number.POSITIVE_INFINITY,d,f,g,h,k,m,r,n,s,J;for(n=0;n<e;++n)b[n]>a&&(a=b[n]),b[n]<c&&(c=b[n]);d=1<<a;f=new (q?Uint32Array:Array)(d);g=1;h=0;for(k=2;g<=a;){for(n=0;n<e;++n)if(b[n]===g){m=0;r=h;for(s=0;s<g;++s)m=m<<1|r&1,r>>=1;J=g<<16|n;for(s=m;s<d;s+=k)f[s]=J;++h}++g;h<<=1;k<<=1}return[f,a,c]};function u(b,e){this.g=[];this.h=32768;this.c=this.f=this.d=this.k=0;this.input=q?new Uint8Array(b):b;this.l=!1;this.i=v;this.q=!1;if(e||!(e={}))e.index&&(this.d=e.index),e.bufferSize&&(this.h=e.bufferSize),e.bufferType&&(this.i=e.bufferType),e.resize&&(this.q=e.resize);switch(this.i){case w:this.a=32768;this.b=new (q?Uint8Array:Array)(32768+this.h+258);break;case v:this.a=0;this.b=new (q?Uint8Array:Array)(this.h);this.e=this.v;this.m=this.s;this.j=this.t;break;default:throw Error("invalid inflate mode");
	}}var w=0,v=1;
	u.prototype.u=function(){for(;!this.l;){var b=x(this,3);b&1&&(this.l=!0);b>>>=1;switch(b){case 0:var e=this.input,a=this.d,c=this.b,d=this.a,f=e.length,g=void 0,h=void 0,k=c.length,m=void 0;this.c=this.f=0;if(a+1>=f)throw Error("invalid uncompressed block header: LEN");g=e[a++]|e[a++]<<8;if(a+1>=f)throw Error("invalid uncompressed block header: NLEN");h=e[a++]|e[a++]<<8;if(g===~h)throw Error("invalid uncompressed block header: length verify");if(a+g>e.length)throw Error("input buffer is broken");switch(this.i){case w:for(;d+
	g>c.length;){m=k-d;g-=m;if(q)c.set(e.subarray(a,a+m),d),d+=m,a+=m;else for(;m--;)c[d++]=e[a++];this.a=d;c=this.e();d=this.a}break;case v:for(;d+g>c.length;)c=this.e({o:2});break;default:throw Error("invalid inflate mode");}if(q)c.set(e.subarray(a,a+g),d),d+=g,a+=g;else for(;g--;)c[d++]=e[a++];this.d=a;this.a=d;this.b=c;break;case 1:this.j(y,z);break;case 2:A(this);break;default:throw Error("unknown BTYPE: "+b);}}return this.m()};
	var B=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],C=q?new Uint16Array(B):B,D=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,258,258],E=q?new Uint16Array(D):D,F=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0],G=q?new Uint8Array(F):F,H=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],I=q?new Uint16Array(H):H,K=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,
	13],L=q?new Uint8Array(K):K,M=new (q?Uint8Array:Array)(288),N,O;N=0;for(O=M.length;N<O;++N)M[N]=143>=N?8:255>=N?9:279>=N?7:8;var y=t(M),P=new (q?Uint8Array:Array)(30),Q,R;Q=0;for(R=P.length;Q<R;++Q)P[Q]=5;var z=t(P);function x(b,e){for(var a=b.f,c=b.c,d=b.input,f=b.d,g=d.length,h;c<e;){if(f>=g)throw Error("input buffer is broken");a|=d[f++]<<c;c+=8}h=a&(1<<e)-1;b.f=a>>>e;b.c=c-e;b.d=f;return h}
	function S(b,e){for(var a=b.f,c=b.c,d=b.input,f=b.d,g=d.length,h=e[0],k=e[1],m,r;c<k&&!(f>=g);)a|=d[f++]<<c,c+=8;m=h[a&(1<<k)-1];r=m>>>16;b.f=a>>r;b.c=c-r;b.d=f;return m&65535}
	function A(b){function e(a,b,c){var e,d=this.p,f,g;for(g=0;g<a;)switch(e=S(this,b),e){case 16:for(f=3+x(this,2);f--;)c[g++]=d;break;case 17:for(f=3+x(this,3);f--;)c[g++]=0;d=0;break;case 18:for(f=11+x(this,7);f--;)c[g++]=0;d=0;break;default:d=c[g++]=e}this.p=d;return c}var a=x(b,5)+257,c=x(b,5)+1,d=x(b,4)+4,f=new (q?Uint8Array:Array)(C.length),g,h,k,m;for(m=0;m<d;++m)f[C[m]]=x(b,3);if(!q){m=d;for(d=f.length;m<d;++m)f[C[m]]=0}g=t(f);h=new (q?Uint8Array:Array)(a);k=new (q?Uint8Array:Array)(c);b.p=0;
	b.j(t(e.call(b,a,g,h)),t(e.call(b,c,g,k)))}u.prototype.j=function(b,e){var a=this.b,c=this.a;this.n=b;for(var d=a.length-258,f,g,h,k;256!==(f=S(this,b));)if(256>f)c>=d&&(this.a=c,a=this.e(),c=this.a),a[c++]=f;else{g=f-257;k=E[g];0<G[g]&&(k+=x(this,G[g]));f=S(this,e);h=I[f];0<L[f]&&(h+=x(this,L[f]));c>=d&&(this.a=c,a=this.e(),c=this.a);for(;k--;)a[c]=a[c++-h]}for(;8<=this.c;)this.c-=8,this.d--;this.a=c};
	u.prototype.t=function(b,e){var a=this.b,c=this.a;this.n=b;for(var d=a.length,f,g,h,k;256!==(f=S(this,b));)if(256>f)c>=d&&(a=this.e(),d=a.length),a[c++]=f;else{g=f-257;k=E[g];0<G[g]&&(k+=x(this,G[g]));f=S(this,e);h=I[f];0<L[f]&&(h+=x(this,L[f]));c+k>d&&(a=this.e(),d=a.length);for(;k--;)a[c]=a[c++-h]}for(;8<=this.c;)this.c-=8,this.d--;this.a=c};
	u.prototype.e=function(){var b=new (q?Uint8Array:Array)(this.a-32768),e=this.a-32768,a,c,d=this.b;if(q)b.set(d.subarray(32768,b.length));else{a=0;for(c=b.length;a<c;++a)b[a]=d[a+32768]}this.g.push(b);this.k+=b.length;if(q)d.set(d.subarray(e,e+32768));else for(a=0;32768>a;++a)d[a]=d[e+a];this.a=32768;return d};
	u.prototype.v=function(b){var e,a=this.input.length/this.d+1|0,c,d,f,g=this.input,h=this.b;b&&("number"===typeof b.o&&(a=b.o),"number"===typeof b.r&&(a+=b.r));2>a?(c=(g.length-this.d)/this.n[2],f=258*(c/2)|0,d=f<h.length?h.length+f:h.length<<1):d=h.length*a;q?(e=new Uint8Array(d),e.set(h)):e=h;return this.b=e};
	u.prototype.m=function(){var b=0,e=this.b,a=this.g,c,d=new (q?Uint8Array:Array)(this.k+(this.a-32768)),f,g,h,k;if(0===a.length)return q?this.b.subarray(32768,this.a):this.b.slice(32768,this.a);f=0;for(g=a.length;f<g;++f){c=a[f];h=0;for(k=c.length;h<k;++h)d[b++]=c[h]}f=32768;for(g=this.a;f<g;++f)d[b++]=e[f];this.g=[];return this.buffer=d};
	u.prototype.s=function(){var b,e=this.a;q?this.q?(b=new Uint8Array(e),b.set(this.b.subarray(0,e))):b=this.b.subarray(0,e):(this.b.length>e&&(this.b.length=e),b=this.b);return this.buffer=b};p("Zlib.RawInflate",u);p("Zlib.RawInflate.prototype.decompress",u.prototype.u);var T={ADAPTIVE:v,BLOCK:w},U,V,W,X;if(Object.keys)U=Object.keys(T);else for(V in U=[],W=0,T)U[W++]=V;W=0;for(X=U.length;W<X;++W)V=U[W],p("Zlib.RawInflate.BufferType."+V,T[V]);}).call(this); //@ sourceMappingURL=rawinflate.min.js.map

	}.call(window));

/***/ },
/* 35 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	(function() {


	(function(window,document,Laya){
		var __un=Laya.un,__uns=Laya.uns,__static=Laya.static,__class=Laya.class,__getset=Laya.getset,__newvec=Laya.__newvec;

		var Browser=laya.utils.Browser,Byte=laya.utils.Byte,ColorFilter=laya.filters.ColorFilter,Ease=laya.utils.Ease;
		var Event=laya.events.Event,EventDispatcher=laya.events.EventDispatcher,Graphics=laya.display.Graphics,HTMLDivElement=laya.html.dom.HTMLDivElement;
		var Handler=laya.utils.Handler,HitArea=laya.utils.HitArea,Input=laya.display.Input,Log=laya.utils.Log,Node=laya.display.Node;
		var Point=laya.maths.Point,Rectangle=laya.maths.Rectangle,Render=laya.renders.Render,Sound=laya.media.Sound;
		var SoundManager=laya.media.SoundManager,Sprite=laya.display.Sprite,Stage=laya.display.Stage,Text=laya.display.Text;
		var Texture=laya.resource.Texture,Tween=laya.utils.Tween,Utils=laya.utils.Utils;
		Laya.interface('fairygui.IUISource');
		Laya.interface('fairygui.IColorGear');
		Laya.interface('fairygui.IAnimationGear');
		//class fairygui.AssetProxy
		var AssetProxy=(function(){
			function AssetProxy(){
				this._asset=null;
				this._asset=Laya.loader;
			}

			__class(AssetProxy,'fairygui.AssetProxy');
			var __proto=AssetProxy.prototype;
			__proto.getRes=function(url){
				return this._asset.getRes(url);
			}

			__proto.load=function(url,complete,progress,type,priority,cache){
				(priority===void 0)&& (priority=1);
				(cache===void 0)&& (cache=true);
				this._asset.load(url,complete,progress,type,priority,cache);
			}

			__proto.setAsset=function(asset){
				this._asset=asset;
			}

			__getset(1,AssetProxy,'inst',function(){
				if(fairygui.AssetProxy._inst==null)
					AssetProxy._inst=new AssetProxy();
				return fairygui.AssetProxy._inst;
			});

			AssetProxy._inst=null
			return AssetProxy;
		})()


		//class fairygui.AsyncOperation
		var AsyncOperation=(function(){
			function AsyncOperation(){
				this.callback=null;
				this._itemList=null;
				this._objectPool=null;
				this._index=0;
				this._itemList=[];
				this._objectPool=[];
			}

			__class(AsyncOperation,'fairygui.AsyncOperation');
			var __proto=AsyncOperation.prototype;
			__proto.createObject=function(pkgName,resName){
				var pkg=UIPackage.getByName(pkgName);
				if(pkg){
					var pi=pkg.getItemByName(resName);
					if(!pi)
						throw new Error("resource not found: "+resName);
					this.internalCreateObject(pi);
				}
				else
				throw new Error("package not found: "+pkgName);
			}

			__proto.createObjectFromURL=function(url){
				var pi=UIPackage.getItemByURL(url);
				if(pi)
					this.internalCreateObject(pi);
				else
				throw new Error("resource not found: "+url);
			}

			__proto.cancel=function(){
				Laya.timer.clear(this,this.run);
				this._itemList.length=0;
				if(this._objectPool.length>0){
					var obj;
					for(var $each_obj in this._objectPool){
						obj=this._objectPool[$each_obj];
						obj.dispose();
					}
					this._objectPool.length=0;
				}
			}

			__proto.internalCreateObject=function(item){
				this._itemList.length=0;
				this._objectPool.length=0;
				this.collectComponentChildren(item);
				this._itemList.push(new DisplayListItem(item,null));
				this._index=0;
				Laya.timer.frameLoop(1,this,this.run);
			}

			__proto.collectComponentChildren=function(item){
				item.owner.getItemAsset(item);
				var cnt=item.displayList.length;
				for (var i=0;i < cnt;i++){
					var di=item.displayList[i];
					if (di.packageItem !=null && di.packageItem.type==4)
						this.collectComponentChildren(di.packageItem);
					else if (di.type=="list"){
						var defaultItem=null;
						di.listItemCount=0;
						var col=di.desc.childNodes;
						var length=col.length;
						for (var j=0;j < length;j++){
							var cxml=col[j];
							if(cxml.nodeName !="item")
								continue ;
							var url=cxml.getAttribute("url");
							if (!url){
								if (defaultItem==null)
									defaultItem=di.desc.getAttribute("defaultItem");
								url=defaultItem;
								if (!url)
									continue ;
							};
							var pi=UIPackage.getItemByURL(url);
							if (pi){
								if (pi.type==4)
									this.collectComponentChildren(pi);
								this._itemList.push(new DisplayListItem(pi,null));
								di.listItemCount++;
							}
						}
					}
					this._itemList.push(di);
				}
			}

			__proto.run=function(){
				var obj;
				var di;
				var poolStart=0;
				var k=0;
				var t=Browser.now();
				var frameTime=UIConfig1.frameTimeForAsyncUIConstruction;
				var totalItems=this._itemList.length;
				while(this._index<totalItems){
					di=this._itemList[this._index];
					if (di.packageItem !=null){
						obj=UIObjectFactory.newObject(di.packageItem);
						obj.packageItem=di.packageItem;
						this._objectPool.push(obj);
						UIPackage._constructing++;
						if (di.packageItem.type==4){
							poolStart=this._objectPool.length-di.packageItem.displayList.length-1;
							(obj).constructFromResource2(this._objectPool,poolStart);
							this._objectPool.splice(poolStart,di.packageItem.displayList.length);
						}
						else{
							obj.constructFromResource();
						}
						UIPackage._constructing--;
					}
					else{
						obj=UIObjectFactory.newObject2(di.type);
						this._objectPool.push(obj);
						if (di.type=="list" && di.listItemCount > 0){
							poolStart=this._objectPool.length-di.listItemCount-1;
							for (k=0;k < di.listItemCount;k++)
							(obj).itemPool.returnObject(this._objectPool[k+poolStart]);
							this._objectPool.splice(poolStart,di.listItemCount);
						}
					}
					this._index++;
					if ((this._index % 5==0)&& Browser.now()-t >=frameTime)
						return;
				}
				Laya.timer.clear(this,this.run);
				var result=this._objectPool[0];
				this._itemList.length=0;
				this._objectPool.length=0;
				if(this.callback!=null)
					this.callback.runWith(result);
			}

			return AsyncOperation;
		})()


		//class fairygui.AutoSizeType
		var AutoSizeType=(function(){
			function AutoSizeType(){}
			__class(AutoSizeType,'fairygui.AutoSizeType');
			AutoSizeType.parse=function(value){
				switch (value){
					case "none":
						return 0;
					case "both":
						return 1;
					case "height":
						return 2;
					default :
						return 0;
					}
			}

			AutoSizeType.None=0;
			AutoSizeType.Both=1;
			AutoSizeType.Height=2;
			return AutoSizeType;
		})()


		//class fairygui.ButtonMode
		var ButtonMode=(function(){
			function ButtonMode(){}
			__class(ButtonMode,'fairygui.ButtonMode');
			ButtonMode.parse=function(value){
				switch (value){
					case "Common":
						return 0;
					case "Check":
						return 1;
					case "Radio":
						return 2;
					default :
						return 0;
					}
			}

			ButtonMode.Common=0;
			ButtonMode.Check=1;
			ButtonMode.Radio=2;
			return ButtonMode;
		})()


		//class fairygui.display.BitmapFont
		var BitmapFont1=(function(){
			function BitmapFont(){
				this.id=null;
				this.size=0;
				this.ttf=false;
				this.glyphs=null;
				this.resizable=false;
				this.glyphs={};
			}

			__class(BitmapFont,'fairygui.display.BitmapFont',null,'BitmapFont1');
			return BitmapFont;
		})()


		//class fairygui.display.BMGlyph
		var BMGlyph=(function(){
			function BMGlyph(){
				this.x=0;
				this.y=0;
				this.offsetX=0;
				this.offsetY=0;
				this.width=0;
				this.height=0;
				this.advance=0;
				this.lineHeight=0;
				this.channel=0;
				this.texture=null;
			}

			__class(BMGlyph,'fairygui.display.BMGlyph');
			return BMGlyph;
		})()


		//class fairygui.display.Frame
		var Frame=(function(){
			function Frame(){
				this.rect=null;
				this.addDelay=0;
				this.texture=null;
				this.rect=new Rectangle();
			}

			__class(Frame,'fairygui.display.Frame');
			return Frame;
		})()


		//class fairygui.display.PlayState
		var PlayState=(function(){
			function PlayState(){
				this.reachEnding=false;
				this.reversed=false;
				this.repeatedCount=0;
				this._curFrame=0;
				this._lastTime=0;
				this._curFrameDelay=0;
			}

			__class(PlayState,'fairygui.display.PlayState');
			var __proto=PlayState.prototype;
			__proto.update=function(mc){
				var t=Laya.timer.currTimer;
				var elapsed=t-this._lastTime;
				this._lastTime=t;
				this.reachEnding=false;
				this._curFrameDelay+=elapsed;
				var interval=mc.interval+mc.frames[this._curFrame].addDelay+((this._curFrame==0 && this.repeatedCount > 0)? mc.repeatDelay :0);
				if (this._curFrameDelay < interval)
					return;
				this._curFrameDelay-=interval;
				if(this._curFrameDelay>mc.interval)
					this._curFrameDelay=mc.interval;
				if (mc.swing){
					if(this.reversed){
						this._curFrame--;
						if(this._curFrame<0){
							this._curFrame=Math.min(1,mc.frameCount-1);
							this.repeatedCount++;
							this.reversed=!this.reversed;
						}
					}
					else{
						this._curFrame++;
						if (this._curFrame > mc.frameCount-1){
							this._curFrame=Math.max(0,mc.frameCount-2);
							this.repeatedCount++;
							this.reachEnding=true;
							this.reversed=!this.reversed;
						}
					}
				}
				else{
					this._curFrame++;
					if (this._curFrame > mc.frameCount-1){
						this._curFrame=0;
						this.repeatedCount++;
						this.reachEnding=true;
					}
				}
			}

			__proto.rewind=function(){
				this._curFrame=0;
				this._curFrameDelay=0;
				this.reversed=false;
				this.reachEnding=false;
			}

			__proto.reset=function(){
				this._curFrame=0;
				this._curFrameDelay=0;
				this.repeatedCount=0;
				this.reachEnding=false;
				this.reversed=false;
			}

			__proto.copy=function(src){
				this._curFrame=src._curFrame;
				this._curFrameDelay=src._curFrameDelay;
				this.repeatedCount=src.repeatedCount;
				this.reachEnding=src.reachEnding;
				this.reversed=src.reversed;
			}

			__getset(0,__proto,'currentFrame',function(){
				return this._curFrame;
				},function(value){
				this._curFrame=value;
				this._curFrameDelay=0;
			});

			return PlayState;
		})()


		//class fairygui.DisplayListItem
		var DisplayListItem=(function(){
			function DisplayListItem(packageItem,type){
				this.packageItem=null;
				this.type=null;
				this.desc=null;
				this.listItemCount=0;
				this.packageItem=packageItem;
				this.type=type;
			}

			__class(DisplayListItem,'fairygui.DisplayListItem');
			return DisplayListItem;
		})()


		//class fairygui.DragDropManager
		var DragDropManager=(function(){
			function DragDropManager(){
				this._agent=null;
				this._sourceData=null;
				this._agent=new GLoader();
				this._agent.draggable=true;
				this._agent.touchable=false;
				this._agent.setSize(100,100);
				this._agent.setPivot(0.5,0.5,true);
				this._agent.align="center";
				this._agent.verticalAlign="middle";
				this._agent.sortingOrder=1000000;
				this._agent.on("fui_drag_end",this,this.__dragEnd);
			}

			__class(DragDropManager,'fairygui.DragDropManager');
			var __proto=DragDropManager.prototype;
			__proto.startDrag=function(source,icon,sourceData,touchPointID){
				(touchPointID===void 0)&& (touchPointID=-1);
				if(this._agent.parent !=null)
					return;
				this._sourceData=sourceData;
				this._agent.url=icon;
				GRoot.inst.addChild(this._agent);
				var pt=GRoot.inst.globalToLocal(Laya.stage.mouseX,Laya.stage.mouseY);
				this._agent.setXY(pt.x,pt.y);
				this._agent.startDrag(touchPointID);
			}

			__proto.cancel=function(){
				if(this._agent.parent !=null){
					this._agent.stopDrag();
					GRoot.inst.removeChild(this._agent);
					this._sourceData=null;
				}
			}

			__proto.__dragEnd=function(evt){
				if(this._agent.parent==null)
					return;
				GRoot.inst.removeChild(this._agent);
				var sourceData=this._sourceData;
				this._sourceData=null;
				var obj=GObject.cast(evt.target);
				while(obj !=null){
					if(obj.displayObject.hasListener("fui_drop")){
						obj.requestFocus();
						obj.displayObject.event("fui_drop",[sourceData,Events.createEvent("fui_drop",obj.displayObject,evt)]);
						return;
					}
					obj=obj.parent;
				}
			}

			__getset(0,__proto,'dragAgent',function(){
				return this._agent;
			});

			__getset(0,__proto,'dragging',function(){
				return this._agent.parent !=null;
			});

			__getset(1,DragDropManager,'inst',function(){
				if(fairygui.DragDropManager._inst==null)
					fairygui.DragDropManager._inst=new DragDropManager();
				return fairygui.DragDropManager._inst;
			});

			DragDropManager._inst=null
			return DragDropManager;
		})()


		//class fairygui.Events
		var Events=(function(){
			function Events(){};
			__class(Events,'fairygui.Events');
			Events.createEvent=function(type,target,source){
				fairygui.Events.$event.setTo(type,target,source?source.target:target);
				if(source)
					fairygui.Events.$event.touchId=source.touchId;
				fairygui.Events.$event._stoped=false;
				return fairygui.Events.$event;
			}

			Events.dispatch=function(type,target,source){
				target.event(type,fairygui.Events.createEvent(type,target,source));
			}

			Events.STATE_CHANGED="fui_state_changed";
			Events.XY_CHANGED="fui_xy_changed";
			Events.SIZE_CHANGED="fui_size_changed";
			Events.SIZE_DELAY_CHANGE="fui_size_delay_change";
			Events.CLICK_ITEM="fui_click_item";
			Events.SCROLL="fui_scroll";
			Events.SCROLL_END="fui_scroll_end";
			Events.DROP="fui_drop";
			Events.FOCUS_CHANGED="fui_focus_changed";
			Events.DRAG_START="fui_drag_start";
			Events.DRAG_MOVE="fui_drag_move";
			Events.DRAG_END="fui_drag_end";
			Events.PULL_DOWN_RELEASE="fui_pull_down_release";
			Events.PULL_UP_RELEASE="fui_pull_up_release";
			Events.GEAR_STOP="fui_gear_stop";
			__static(Events,
			['$event',function(){return this.$event=new Event();}
			]);
			return Events;
		})()


		//class fairygui.FlipType
		var FlipType=(function(){
			function FlipType(){}
			__class(FlipType,'fairygui.FlipType');
			FlipType.parse=function(value){
				switch (value){
					case "hz":
						return 1;
					case "vt":
						return 2;
					case "both":
						return 3;
					default :
						return 0;
					}
			}

			FlipType.None=0;
			FlipType.Horizontal=1;
			FlipType.Vertical=2;
			FlipType.Both=3;
			return FlipType;
		})()


		//class fairygui.GObject
		var GObject=(function(){
			function GObject(){
				this.data=null;
				this.packageItem=null;
				this._x=0;
				this._y=0;
				this._width=0;
				this._height=0;
				this._alpha=1;
				this._rotation=0;
				this._visible=true;
				this._touchable=true;
				this._grayed=false;
				this._draggable=false;
				this._scaleX=1;
				this._scaleY=1;
				this._skewX=0;
				this._skewY=0;
				this._pivotX=0;
				this._pivotY=0;
				this._pivotAsAnchor=false;
				this._pivotOffsetX=0;
				this._pivotOffsetY=0;
				this._sortingOrder=0;
				this._internalVisible=1;
				this._focusable=false;
				this._tooltips=null;
				this._pixelSnapping=false;
				this._relations=null;
				this._group=null;
				this._gears=null;
				this._dragBounds=null;
				this._displayObject=null;
				this._yOffset=0;
				this._sizeImplType=0;
				this._parent=null;
				this._rawWidth=0;
				this._rawHeight=0;
				this._sourceWidth=0;
				this._sourceHeight=0;
				this._initWidth=0;
				this._initHeight=0;
				this._id=null;
				this._name=null;
				this._underConstruct=false;
				this._gearLocked=false;
				this._touchDownPoint=null;
				;
				this._id=""+fairygui.GObject._gInstanceCounter++;
				this._name="";
				this.createDisplayObject();
				this._relations=new Relations(this);
				this._gears=__newvec(8,null);
			}

			__class(GObject,'fairygui.GObject');
			var __proto=GObject.prototype;
			__proto.setXY=function(xv,yv){
				if(this._x !=xv || this._y !=yv){
					var dx=xv-this._x;
					var dy=yv-this._y;
					this._x=xv;
					this._y=yv;
					this.handleXYChanged();
					if((this instanceof fairygui.GGroup ))
						(this).moveChildren(dx,dy);
					this.updateGear(1);
					if(this._parent && !((this._parent instanceof fairygui.GList ))){
						this._parent.setBoundsChangedFlag();
						this.displayObject.event("fui_xy_changed");
					}
					if (GObject.draggingObject==this && !GObject.sUpdateInDragging)
						this.localToGlobalRect(0,0,this.width,this.height,GObject.sGlobalRect);
				}
			}

			__proto.center=function(restraint){
				(restraint===void 0)&& (restraint=false);
				var r;
				if(this._parent !=null)
					r=this.parent;
				else
				r=this.root;
				this.setXY((r.width-this.width)/ 2,(r.height-this.height)/ 2);
				if(restraint){
					this.addRelation(r,3);
					this.addRelation(r,10);
				}
			}

			__proto.setSize=function(wv,hv,ignorePivot){
				(ignorePivot===void 0)&& (ignorePivot=false);
				if(this._rawWidth !=wv || this._rawHeight !=hv){
					this._rawWidth=wv;
					this._rawHeight=hv;
					if(wv < 0)
						wv=0;
					if(hv < 0)
						hv=0;
					var dWidth=wv-this._width;
					var dHeight=hv-this._height;
					this._width=wv;
					this._height=hv;
					this.handleSizeChanged();
					if(this._pivotX !=0 || this._pivotY !=0){
						if(!this._pivotAsAnchor){
							if(!ignorePivot)
								this.setXY(this.x-this._pivotX *dWidth,this.y-this._pivotY *dHeight);
							this.updatePivotOffset();
						}
						else
						this.applyPivot();
					}
					this.updateGear(2);
					if(this._parent){
						this._relations.onOwnerSizeChanged(dWidth,dHeight);
						this._parent.setBoundsChangedFlag();
					}
					this.displayObject.event("fui_size_changed");
				}
			}

			__proto.ensureSizeCorrect=function(){}
			__proto.setScale=function(sx,sy){
				if(this._scaleX !=sx || this._scaleY !=sy){
					this._scaleX=sx;
					this._scaleY=sy;
					this.handleScaleChanged();
					this.applyPivot();
					this.updateGear(2);
				}
			}

			__proto.setSkew=function(sx,sy){
				if(this._skewX !=sx || this._skewY !=sy){
					this._skewX=sx;
					this._skewY=sy;
					if(this._displayObject!=null){
						this._displayObject.skew(-sx,sy);
						this.applyPivot();
					}
				}
			}

			__proto.setPivot=function(xv,yv,asAnchor){
				(yv===void 0)&& (yv=0);
				(asAnchor===void 0)&& (asAnchor=false);
				if(this._pivotX !=xv || this._pivotY !=yv || this._pivotAsAnchor!=asAnchor){
					this._pivotX=xv;
					this._pivotY=yv;
					this._pivotAsAnchor=asAnchor;
					this.updatePivotOffset();
					this.handleXYChanged();
				}
			}

			__proto.internalSetPivot=function(xv,yv,asAnchor){
				this._pivotX=xv;
				this._pivotY=yv;
				this._pivotAsAnchor=asAnchor;
				if(this._pivotAsAnchor)
					this.handleXYChanged();
			}

			__proto.updatePivotOffset=function(){
				if(this._displayObject!=null){
					if(this._displayObject.transform && (this._pivotX!=0 || this._pivotY!=0)){
						if(this._sizeImplType==0){
							fairygui.GObject.sHelperPoint.x=this._pivotX*this._width;
							fairygui.GObject.sHelperPoint.y=this._pivotY*this._height;
						}
						else {
							fairygui.GObject.sHelperPoint.x=this._pivotX*this._sourceWidth;
							fairygui.GObject.sHelperPoint.y=this._pivotY*this._sourceHeight;
						};
						var pt=this._displayObject.transform.transformPoint(fairygui.GObject.sHelperPoint);
						this._pivotOffsetX=this._pivotX*this._width-pt.x;
						this._pivotOffsetY=this._pivotY*this._height-pt.y;
					}
					else{
						this._pivotOffsetX=0;
						this._pivotOffsetY=0;
					}
				}
			}

			__proto.applyPivot=function(){
				if(this._pivotX !=0 || this._pivotY !=0){
					this.updatePivotOffset();
					this.handleXYChanged();
				}
			}

			__proto.updateAlpha=function(){
				if(this._displayObject)
					this._displayObject.alpha=this._alpha;
				this.updateGear(3);
			}

			__proto.requestFocus=function(){
				var p=this;
				while (p && !p._focusable)
				p=p.parent;
				if (p !=null)
					this.root.focus=p;
			}

			__proto.getGear=function(index){
				var gear=this._gears[index];
				if (gear==null){
					switch (index){
						case 0:
							gear=new GearDisplay(this);
							break ;
						case 1:
							gear=new GearXY(this);
							break ;
						case 2:
							gear=new GearSize(this);
							break ;
						case 3:
							gear=new GearLook(this);
							break ;
						case 4:
							gear=new GearColor(this);
							break ;
						case 5:
							gear=new GearAnimation(this);
							break ;
						case 6:
							gear=new GearText(this);
							break ;
						case 7:
							gear=new GearIcon(this);
							break ;
						default :
							throw new Error("FairyGUI: invalid gear index!");
						}
					this._gears[index]=gear;
				}
				return gear;
			}

			__proto.updateGear=function(index){
				if (this._gears[index] !=null)
					this._gears[index].updateState();
			}

			__proto.updateGearFromRelations=function(index,dx,dy){
				if (this._gears[index] !=null)
					this._gears[index].updateFromRelations(dx,dy);
			}

			__proto.addRelation=function(target,relationType,usePercent){
				(usePercent===void 0)&& (usePercent=false);
				this._relations.add(target,relationType,usePercent);
			}

			__proto.removeRelation=function(target,relationType){
				(relationType===void 0)&& (relationType=0);
				this._relations.remove(target,relationType);
			}

			__proto.removeFromParent=function(){
				if (this._parent)
					this._parent.removeChild(this);
			}

			__proto.dispose=function(){
				this.removeFromParent();
				this._relations.dispose();
				this._displayObject.destroy();
			}

			__proto.onClick=function(thisObj,listener,args){
				this.on("click",thisObj,listener,args);
			}

			__proto.offClick=function(thisObj,listener){
				this.off("click",thisObj,listener);
			}

			__proto.hasClickListener=function(){
				return this._displayObject.hasListener("click");
			}

			__proto.on=function(type,thisObject,listener,args){
				this._displayObject.on(type,thisObject,listener,args);
			}

			__proto.off=function(type,thisObject,listener){
				this._displayObject.off(type,thisObject,listener);
			}

			__proto.startDrag=function(touchPointID){
				(touchPointID===void 0)&& (touchPointID=-1);
				if (this._displayObject.stage==null)
					return;
				this.dragBegin();
			}

			__proto.stopDrag=function(){
				this.dragEnd();
			}

			__proto.localToGlobal=function(ax,ay,resultPoint){
				(ax===void 0)&& (ax=0);
				(ay===void 0)&& (ay=0);
				if(this._pivotAsAnchor){
					ax+=this._pivotX*this._width;
					ay+=this._pivotY*this._height;
				}
				if(!resultPoint){
					resultPoint=fairygui.GObject.sHelperPoint;
					resultPoint.x=ax;
					resultPoint.y=ay;
					return this._displayObject.localToGlobal(resultPoint,true);
				}
				else{
					resultPoint.x=ax;
					resultPoint.y=ay;
					return this._displayObject.localToGlobal(resultPoint,false);
				}
			}

			__proto.globalToLocal=function(ax,ay,resultPoint){
				(ax===void 0)&& (ax=0);
				(ay===void 0)&& (ay=0);
				if(!resultPoint){
					resultPoint=fairygui.GObject.sHelperPoint;
					resultPoint.x=ax;
					resultPoint.y=ay;
					resultPoint=this._displayObject.globalToLocal(resultPoint,true);
				}
				else{
					resultPoint.x=ax;
					resultPoint.y=ay;
					this._displayObject.globalToLocal(resultPoint,false);
				}
				if(this._pivotAsAnchor){
					resultPoint.x-=this._pivotX*this._width;
					resultPoint.y-=this._pivotY*this._height;
				}
				return resultPoint;
			}

			__proto.localToGlobalRect=function(ax,ay,aWidth,aHeight,resultRect){
				(ax===void 0)&& (ax=0);
				(ay===void 0)&& (ay=0);
				(aWidth===void 0)&& (aWidth=0);
				(aHeight===void 0)&& (aHeight=0);
				if(resultRect==null)
					resultRect=new Rectangle();
				var pt=this.localToGlobal(ax,ay);
				resultRect.x=pt.x;
				resultRect.y=pt.y;
				pt=this.localToGlobal(ax+aWidth,ay+aHeight);
				resultRect.width=pt.x-resultRect.x;
				resultRect.height=pt.y-resultRect.y;
				return resultRect;
			}

			__proto.globalToLocalRect=function(ax,ay,aWidth,aHeight,resultRect){
				(ax===void 0)&& (ax=0);
				(ay===void 0)&& (ay=0);
				(aWidth===void 0)&& (aWidth=0);
				(aHeight===void 0)&& (aHeight=0);
				if(resultRect==null)
					resultRect=new Rectangle();
				var pt=this.globalToLocal(ax,ay);
				resultRect.x=pt.x;
				resultRect.y=pt.y;
				pt=this.globalToLocal(ax+aWidth,ay+aHeight);
				resultRect.width=pt.x-resultRect.x;
				resultRect.height=pt.y-resultRect.y;
				return resultRect;
			}

			__proto.handleControllerChanged=function(c){
				for (var i=0;i < 8;i++){
					var gear=this._gears[i];
					if (gear !=null && gear.controller==c)
						gear.apply();
				}
			}

			__proto.createDisplayObject=function(){
				this._displayObject=new Sprite();
				this._displayObject["$owner"]=this;
			}

			__proto.handleXYChanged=function(){
				var xv=this._x;
				var yv=this._y+this._yOffset;
				if(this._pivotAsAnchor){
					xv-=this._pivotX*this._width;
					yv-=this._pivotY*this._height;
				}
				if(this._pixelSnapping){
					xv=Math.round(xv);
					yv=Math.round(yv);
				}
				this._displayObject.pos(xv+this._pivotOffsetX,yv+this._pivotOffsetY);
			}

			__proto.handleSizeChanged=function(){
				if(this._displayObject!=null){
					if(this._sizeImplType==0 || this._sourceWidth==0 || this._sourceHeight==0)
						this._displayObject.size(this._width,this._height);
					else
					this._displayObject.scale(this._width/this._sourceWidth*this._scaleX,
					this._height/this._sourceHeight*this._scaleY);
				}
			}

			__proto.handleScaleChanged=function(){
				if(this._displayObject!=null){
					if(this._sizeImplType==0 || this._sourceWidth==0 || this._sourceHeight==0)
						this._displayObject.scale(this._scaleX,this._scaleY);
					else
					this._displayObject.scale(this._width/this._sourceWidth*this._scaleX,
					this._height/this._sourceHeight*this._scaleY);
				}
			}

			__proto.handleGrayedChanged=function(){
				if(this._displayObject){
					if(this._grayed)
						this._displayObject.filters=[ColorFilter.GRAY];
					else
					this._displayObject.filters=null;
				}
			}

			__proto.constructFromResource=function(){}
			__proto.setup_beforeAdd=function(xml){
				var str;
				var arr;
				this._id=xml.getAttribute("id");
				this._name=xml.getAttribute("name");
				str=xml.getAttribute("xy");
				arr=str.split(",");
				this.setXY(parseInt(arr[0]),parseInt(arr[1]));
				str=xml.getAttribute("size");
				if (str){
					arr=str.split(",");
					this._initWidth=parseInt(arr[0]);
					this._initHeight=parseInt(arr[1]);
					this.setSize(this._initWidth,this._initHeight,true);
				}
				str=xml.getAttribute("scale");
				if(str){
					arr=str.split(",");
					this.setScale(parseFloat(arr[0]),parseFloat(arr[1]));
				}
				str=xml.getAttribute("skew");
				if(str){
					arr=str.split(",");
					this.setSkew(parseFloat(arr[0]),parseFloat(arr[1]));
				}
				str=xml.getAttribute("rotation");
				if (str)
					this.rotation=parseInt(str);
				str=xml.getAttribute("pivot");
				if (str){
					arr=str.split(",");
					str=xml.getAttribute("anchor");
					this.setPivot(parseFloat(arr[0]),parseFloat(arr[1]),str=="true");
				}
				else
				this.setPivot(0,0,false);
				str=xml.getAttribute("alpha");
				if (str)
					this.alpha=parseFloat(str);
				if(xml.getAttribute("touchable")=="false")
					this.touchable=false;
				if(xml.getAttribute("visible")=="false")
					this.visible=false;
				if(xml.getAttribute("grayed")=="true")
					this.grayed=true;
				this.tooltips=xml.getAttribute("tooltips");
				str=xml.getAttribute("blend");
				if (str)
					this.blendMode=str;
				str=xml.getAttribute('filter');
				if (str){
					switch (str){
						case "color":
							str=xml.getAttribute('filterData');
							arr=str.split(",");
							var cm=new ColorMatrix();
							cm.adjustBrightness(parseFloat(arr[0]));
							cm.adjustContrast(parseFloat(arr[1]));
							cm.adjustSaturation(parseFloat(arr[2]));
							cm.adjustHue(parseFloat(arr[3]));
							var cf=new ColorFilter(cm);
							this.filters=[cf];
							break ;
						}
				}
			}

			__proto.setup_afterAdd=function(xml){
				var str=xml.getAttribute("group");
				if (str)
					this._group=this._parent.getChildById(str);
				var col=xml.childNodes;
				var length1=col.length;
				for (var i1=0;i1 < length1;i1++){
					var cxml=col[i1];
					if(cxml.nodeType!=1)
						continue ;
					var index=fairygui.GObject.GearXMLKeys[cxml.nodeName];
					if(index!=undefined)
						this.getGear(index).setup(cxml);
				}
			}

			__proto.initDrag=function(){
				if (this._draggable)
					this.on("mousedown",this,this.__begin);
				else
				this.off("mousedown",this,this.__begin);
			}

			__proto.dragBegin=function(){
				if (fairygui.GObject.draggingObject !=null)
					fairygui.GObject.draggingObject.stopDrag();
				fairygui.GObject.sGlobalDragStart.x=Laya.stage.mouseX;
				fairygui.GObject.sGlobalDragStart.y=Laya.stage.mouseY;
				this.localToGlobalRect(0,0,this.width,this.height,fairygui.GObject.sGlobalRect);
				fairygui.GObject.draggingObject=this;
				Laya.stage.on("mousemove",this,this.__moving2);
				Laya.stage.on("mouseup",this,this.__end2);
			}

			__proto.dragEnd=function(){
				if (fairygui.GObject.draggingObject==this){
					Laya.stage.off("mousemove",this,this.__moving2);
					Laya.stage.off("mouseup",this,this.__end2);
					fairygui.GObject.draggingObject=null;
				}
				fairygui.GObject.sDraggingQuery=false;
			}

			__proto.reset=function(){
				Laya.stage.off("mousemove",this,this.__moving);
				Laya.stage.off("mouseup",this,this.__end);
			}

			__proto.__begin=function(){
				if(this._touchDownPoint==null)
					this._touchDownPoint=new Point();
				this._touchDownPoint.x=Laya.stage.mouseX;
				this._touchDownPoint.y=Laya.stage.mouseY;
				Laya.stage.on("mousemove",this,this.__moving);
				Laya.stage.on("mouseup",this,this.__end);
			}

			__proto.__end=function(){
				this.reset();
			}

			__proto.__moving=function(evt){
				var sensitivity=UIConfig1.touchDragSensitivity;
				if(this._touchDownPoint !=null
					&& Math.abs(this._touchDownPoint.x-Laya.stage.mouseX)< sensitivity
				&& Math.abs(this._touchDownPoint.y-Laya.stage.mouseY)< sensitivity)
				return;
				this.reset();
				fairygui.GObject.sDraggingQuery=true;
				Events.dispatch("fui_drag_start",this._displayObject,evt);
				if (fairygui.GObject.sDraggingQuery)
					this.dragBegin();
			}

			__proto.__moving2=function(evt){
				var xx=Laya.stage.mouseX-fairygui.GObject.sGlobalDragStart.x+fairygui.GObject.sGlobalRect.x;
				var yy=Laya.stage.mouseY-fairygui.GObject.sGlobalDragStart.y+fairygui.GObject.sGlobalRect.y;
				if(this._dragBounds !=null){
					var rect=GRoot.inst.localToGlobalRect(this._dragBounds.x,this._dragBounds.y,
					this._dragBounds.width,this._dragBounds.height,fairygui.GObject.sDragHelperRect);
					if(xx < rect.x)
						xx=rect.x;
					else if(xx+fairygui.GObject.sGlobalRect.width > rect.right){
						xx=rect.right-fairygui.GObject.sGlobalRect.width;
						if(xx < rect.x)
							xx=rect.x;
					}
					if(yy < rect.y)
						yy=rect.y;
					else if(yy+fairygui.GObject.sGlobalRect.height > rect.bottom){
						yy=rect.bottom-fairygui.GObject.sGlobalRect.height;
						if(yy < rect.y)
							yy=rect.y;
					}
				}
				GObject.sUpdateInDragging=true;
				var pt=this.parent.globalToLocal(xx,yy,fairygui.GObject.sHelperPoint);
				this.setXY(Math.round(pt.x),Math.round(pt.y));
				GObject.sUpdateInDragging=false;
				Events.dispatch("fui_drag_move",this._displayObject,evt);
			}

			__proto.__end2=function(evt){
				if (fairygui.GObject.draggingObject==this){
					this.stopDrag();
					Events.dispatch("fui_drag_end",this._displayObject,evt);
				}
			}

			__getset(0,__proto,'id',function(){
				return this._id;
			});

			__getset(0,__proto,'name',function(){
				return this._name;
				},function(value){
				this._name=value;
			});

			__getset(0,__proto,'rotation',function(){
				return this._rotation;
				},function(value){
				if(this._rotation !=value){
					this._rotation=value;
					if(this._displayObject!=null){
						this._displayObject.rotation=this.normalizeRotation;
						this.applyPivot();
					}
					this.updateGear(3);
				}
			});

			__getset(0,__proto,'width',function(){
				this.ensureSizeCorrect();
				if(this._relations.sizeDirty)
					this._relations.ensureRelationsSizeCorrect();
				return this._width;
				},function(value){
				this.setSize(value,this._rawHeight);
			});

			__getset(0,__proto,'x',function(){
				return this._x;
				},function(value){
				this.setXY(value,this._y);
			});

			__getset(0,__proto,'draggable',function(){
				return this._draggable;
				},function(value){
				if (this._draggable !=value){
					this._draggable=value;
					this.initDrag();
				}
			});

			__getset(0,__proto,'y',function(){
				return this._y;
				},function(value){
				this.setXY(this._x,value);
			});

			__getset(0,__proto,'sourceWidth',function(){
				return this._sourceWidth;
			});

			__getset(0,__proto,'sourceHeight',function(){
				return this._sourceHeight;
			});

			__getset(0,__proto,'pixelSnapping',function(){
				return this._pixelSnapping;
				},function(value){
				if(this._pixelSnapping!=value){
					this._pixelSnapping=value;
					this.handleXYChanged();
				}
			});

			__getset(0,__proto,'height',function(){
				this.ensureSizeCorrect();
				if(this._relations.sizeDirty)
					this._relations.ensureRelationsSizeCorrect();
				return this._height;
				},function(value){
				this.setSize(this._rawWidth,value);
			});

			__getset(0,__proto,'initHeight',function(){
				return this._initHeight;
			});

			__getset(0,__proto,'initWidth',function(){
				return this._initWidth;
			});

			__getset(0,__proto,'asButton',function(){
				return this;
			});

			__getset(0,__proto,'actualWidth',function(){
				return this.width *Math.abs(this._scaleX);
			});

			__getset(0,__proto,'actualHeight',function(){
				return this.height *Math.abs(this._scaleY);
			});

			__getset(0,__proto,'blendMode',function(){
				return this._displayObject.blendMode;
				},function(value){
				this._displayObject.blendMode=value;
			});

			__getset(0,__proto,'scaleX',function(){
				return this._scaleX;
				},function(value){
				this.setScale(value,this._scaleY);
			});

			__getset(0,__proto,'scaleY',function(){
				return this._scaleY;
				},function(value){
				this.setScale(this._scaleX,value);
			});

			__getset(0,__proto,'skewX',function(){
				return this._skewX;
				},function(value){
				this.setScale(value,this._skewY);
			});

			__getset(0,__proto,'skewY',function(){
				return this._skewY;
				},function(value){
				this.setSkew(this._skewX,value);
			});

			__getset(0,__proto,'pivotX',function(){
				return this._pivotX;
				},function(value){
				this.setPivot(value,this._pivotY);
			});

			__getset(0,__proto,'asTextInput',function(){
				return this;
			});

			__getset(0,__proto,'asLoader',function(){
				return this;
			});

			__getset(0,__proto,'pivotY',function(){
				return this._pivotY;
				},function(value){
				this.setPivot(this._pivotX,value);
			});

			__getset(0,__proto,'displayObject',function(){
				return this._displayObject;
			});

			__getset(0,__proto,'normalizeRotation',function(){
				var rot=this._rotation % 360;
				if(rot > 180)
					rot=rot-360;
				else if(rot <-180)
				rot=360+rot;
				return rot;
			});

			__getset(0,__proto,'touchable',function(){
				return this._touchable;
				},function(value){
				this._touchable=value;
				if(((this instanceof fairygui.GImage ))|| ((this instanceof fairygui.GMovieClip ))
					|| ((this instanceof fairygui.GTextField ))&& !((this instanceof fairygui.GTextInput ))&& !((this instanceof fairygui.GRichTextField )))
				return;
				if(this._displayObject !=null)
					this._displayObject.mouseEnabled=this._touchable;
			});

			__getset(0,__proto,'alpha',function(){
				return this._alpha;
				},function(value){
				if(this._alpha!=value){
					this._alpha=value;
					this.updateAlpha();
				}
			});

			__getset(0,__proto,'grayed',function(){
				return this._grayed;
				},function(value){
				if(this._grayed !=value){
					this._grayed=value;
					this.handleGrayedChanged();
					this.updateGear(3);
				}
			});

			__getset(0,__proto,'dragBounds',function(){
				return this._dragBounds;
				},function(value){
				this._dragBounds=value;
			});

			__getset(0,__proto,'asProgress',function(){
				return this;
			});

			__getset(0,__proto,'enabled',function(){
				return !this._grayed && this._touchable;
				},function(value){
				this.grayed=!value;
				this.touchable=value;
			});

			__getset(0,__proto,'sortingOrder',function(){
				return this._sortingOrder;
				},function(value){
				if (value < 0)
					value=0;
				if (this._sortingOrder !=value){
					var old=this._sortingOrder;
					this._sortingOrder=value;
					if (this._parent !=null)
						this._parent.childSortingOrderChanged(this,old,this._sortingOrder);
				}
			});

			__getset(0,__proto,'visible',function(){
				return this._visible;
				},function(value){
				if (this._visible !=value){
					this._visible=value;
					if (this._displayObject)
						this._displayObject.visible=this._visible;
					if (this._parent){
						this._parent.childStateChanged(this);
						this._parent.setBoundsChangedFlag();
					}
				}
			});

			__getset(0,__proto,'internalVisible',function(){
				return this._internalVisible;
				},function(value){
				if(value < 0)
					value=0;
				var oldValue=this._internalVisible > 0;
				var newValue=value > 0;
				this._internalVisible=value;
				if(oldValue !=newValue){
					if(this._parent)
						this._parent.childStateChanged(this);
				}
			});

			__getset(0,__proto,'finalVisible',function(){
				return this._visible && this._internalVisible>0 && (!this._group || this._group.finalVisible);
			});

			__getset(0,__proto,'asGraph',function(){
				return this;
			});

			__getset(0,__proto,'gearSize',function(){
				return (this.getGear(2));
			});

			__getset(0,__proto,'focusable',function(){
				return this._focusable;
				},function(value){
				this._focusable=value;
			});

			__getset(0,__proto,'focused',function(){
				return this.root.focus==this;
			});

			__getset(0,__proto,'tooltips',function(){
				return this._tooltips;
				},function(value){
				this._tooltips=value;
			});

			__getset(0,__proto,'dragging',function(){
				return fairygui.GObject.draggingObject==this;
			});

			__getset(0,__proto,'group',function(){
				return this._group;
				},function(value){
				this._group=value;
			});

			__getset(0,__proto,'filters',function(){
				return this._displayObject.filters;
				},function(value){
				this._displayObject.filters=value;
			});

			__getset(0,__proto,'inContainer',function(){
				return this._displayObject !=null && this._displayObject.parent !=null;
			});

			__getset(0,__proto,'resourceURL',function(){
				if (this.packageItem !=null)
					return "ui://"+this.packageItem.owner.id+this.packageItem.id;
				else
				return null;
			});

			__getset(0,__proto,'onStage',function(){
				return this._displayObject !=null && this._displayObject.stage !=null;
			});

			__getset(0,__proto,'gearXY',function(){
				return (this.getGear(1));
			});

			__getset(0,__proto,'root',function(){
				if((this instanceof fairygui.GRoot ))
					return (this);
				var p=this._parent;
				while (p){
					if ((p instanceof fairygui.GRoot ))
						return (p);
					p=p.parent;
				}
				return GRoot.inst;
			});

			__getset(0,__proto,'gearLook',function(){
				return (this.getGear(3));
			});

			__getset(0,__proto,'asCom',function(){
				return this;
			});

			__getset(0,__proto,'relations',function(){
				return this._relations;
			});

			__getset(0,__proto,'parent',function(){
				return this._parent;
				},function(val){
				this._parent=val;
			});

			__getset(0,__proto,'asLabel',function(){
				return this;
			});

			__getset(0,__proto,'asTextField',function(){
				return this;
			});

			__getset(0,__proto,'asImage',function(){
				return this;
			});

			__getset(0,__proto,'asGroup',function(){
				return this;
			});

			__getset(0,__proto,'asRichTextField',function(){
				return this;
			});

			__getset(0,__proto,'asList',function(){
				return this;
			});

			__getset(0,__proto,'asSlider',function(){
				return this;
			});

			__getset(0,__proto,'asComboBox',function(){
				return this;
			});

			__getset(0,__proto,'asMovieClip',function(){
				return this;
			});

			__getset(0,__proto,'text',function(){
				return null;
				},function(value){
			});

			__getset(0,__proto,'icon',function(){
				return null;
				},function(value){
			});

			GObject.cast=function(sprite){
				return (sprite["$owner"]);
			}

			GObject.draggingObject=null
			GObject._gInstanceCounter=0;
			GObject.sDraggingQuery=false;
			GObject.sUpdateInDragging=false;
			__static(GObject,
			['GearXMLKeys',function(){return this.GearXMLKeys={
					"gearDisplay":0,
					"gearXY":1,
					"gearSize":2,
					"gearLook":3,
					"gearColor":4,
					"gearAni":5,
					"gearText":6,
					"gearIcon":7
			};},'sGlobalDragStart',function(){return this.sGlobalDragStart=new Point();},'sGlobalRect',function(){return this.sGlobalRect=new Rectangle();},'sHelperPoint',function(){return this.sHelperPoint=new Point();},'sDragHelperRect',function(){return this.sDragHelperRect=new Rectangle();}

			]);
			return GObject;
		})()


		//class fairygui.GearBase
		var GearBase=(function(){
			function GearBase(owner){
				this._tween=false;
				this._easeType=null;
				this._tweenTime=0.3;
				this._delay=0;
				this._owner=null;
				this._controller=null;
				this._owner=owner;
				this._easeType=Ease.quadOut;
			}

			__class(GearBase,'fairygui.GearBase');
			var __proto=GearBase.prototype;
			__proto.setup=function(xml){
				this._controller=this._owner.parent.getController(xml.getAttribute("controller"));
				if(this._controller==null)
					return;
				this.init();
				var str;
				str=xml.getAttribute("tween");
				if (str)
					this._tween=true;
				str=xml.getAttribute("ease");
				if (str)
					this._easeType=ToolSet.parseEaseType(str);
				str=xml.getAttribute("duration");
				if (str)
					this._tweenTime=parseFloat(str);
				str=xml.getAttribute("delay");
				if (str)
					this._delay=parseFloat(str);
				if((this instanceof fairygui.GearDisplay )){
					str=xml.getAttribute("pages");
					if(str){
						var arr=str.split(",");
						(this).pages=arr;
					}
				}
				else{
					var pages;
					var values;
					str=xml.getAttribute("pages");
					if(str)
						pages=str.split(",");
					str=xml.getAttribute("values");
					if(str)
						values=str.split("|");
					if(pages && values){
						for(var i=0;i<values.length;i++)
						this.addStatus(pages[i],values[i]);
					}
					str=xml.getAttribute("default");
					if(str)
						this.addStatus(null,str);
				}
			}

			__proto.updateFromRelations=function(dx,dy){}
			__proto.addStatus=function(pageId,value){}
			__proto.init=function(){}
			__proto.apply=function(){}
			__proto.updateState=function(){}
			__getset(0,__proto,'controller',function(){
				return this._controller;
				},function(val){
				if (val !=this._controller){
					this._controller=val;
					if(this._controller)
						this.init();
				}
			});

			__getset(0,__proto,'tween',function(){
				return this._tween;
				},function(val){
				this._tween=val;
			});

			__getset(0,__proto,'delay',function(){
				return this._delay;
				},function(val){
				this._delay=val;
			});

			__getset(0,__proto,'tweenTime',function(){
				return this._tweenTime;
				},function(value){
				this._tweenTime=value;
			});

			__getset(0,__proto,'easeType',function(){
				return this._easeType;
				},function(value){
				this._easeType=value;
			});

			GearBase.disableAllTweenEffect=false;
			return GearBase;
		})()


		//class fairygui.GObjectPool
		var GObjectPool=(function(){
			function GObjectPool(){
				this._pool=null;
				this._count=0;
				this._pool={};
			}

			__class(GObjectPool,'fairygui.GObjectPool');
			var __proto=GObjectPool.prototype;
			__proto.clear=function(){
				var length1=this._pool.length;
				for (var i1=0;i1 < length1;i1++){
					var arr=this._pool[i1];
					var cnt=arr.length;
					for (var i=0;i < cnt;i++)
					arr[i].dispose();
				}
				this._pool={};
				this._count=0;
			}

			__proto.getObject=function(url){
				var arr=this._pool[url];
				if (arr==null){
					arr=[];
					this._pool[url]=arr;
				}
				if (arr.length){
					this._count--;
					return arr.shift();
				};
				var child=UIPackage.createObjectFromURL(url);
				return child;
			}

			__proto.returnObject=function(obj){
				var url=obj.resourceURL;
				if (!url)
					return;
				var arr=this._pool[url];
				if (arr==null){
					arr=[];
					this._pool[url]=arr;
				}
				this._count++;
				arr.push(obj);
			}

			__getset(0,__proto,'count',function(){
				return this._count;
			});

			return GObjectPool;
		})()


		//class fairygui.ListLayoutType
		var ListLayoutType=(function(){
			function ListLayoutType(){}
			__class(ListLayoutType,'fairygui.ListLayoutType');
			ListLayoutType.parse=function(value){
				switch (value){
					case "column":
						return 0;
					case "row":
						return 1;
					case "flow_hz":
						return 2;
					case "flow_vt":
						return 3;
					case "pagination":
						return 4;
					default :
						return 0;
					}
			}

			ListLayoutType.SingleColumn=0;
			ListLayoutType.SingleRow=1;
			ListLayoutType.FlowHorizontal=2;
			ListLayoutType.FlowVertical=3;
			ListLayoutType.Pagination=4;
			return ListLayoutType;
		})()


		//class fairygui.ListSelectionMode
		var ListSelectionMode=(function(){
			function ListSelectionMode(){}
			__class(ListSelectionMode,'fairygui.ListSelectionMode');
			ListSelectionMode.parse=function(value){
				switch (value){
					case "single":
						return 0;
					case "multiple":
						return 1;
					case "multipleSingleClick":
						return 2;
					case "none":
						return 3;
					default :
						return 0;
					}
			}

			ListSelectionMode.Single=0;
			ListSelectionMode.Multiple=1;
			ListSelectionMode.Multiple_SingleClick=2;
			ListSelectionMode.None=3;
			return ListSelectionMode;
		})()


		//class fairygui.LoaderFillType
		var LoaderFillType=(function(){
			function LoaderFillType(){}
			__class(LoaderFillType,'fairygui.LoaderFillType');
			LoaderFillType.parse=function(value){
				switch (value){
					case "none":
						return 0;
					case "scale":
						return 1;
					case "scaleMatchHeight":
						return 2;
					case "scaleMatchWidth":
						return 3;
					case "scaleFree":
						return 4;
					default :
						return 0;
					}
			}

			LoaderFillType.None=0;
			LoaderFillType.Scale=1;
			LoaderFillType.ScaleMatchHeight=2;
			LoaderFillType.ScaleMatchWidth=3;
			LoaderFillType.ScaleFree=4;
			return LoaderFillType;
		})()


		//class fairygui.Margin
		var Margin=(function(){
			function Margin(){
				this.left=0;
				this.right=0;
				this.top=0;
				this.bottom=0;
			}

			__class(Margin,'fairygui.Margin');
			var __proto=Margin.prototype;
			__proto.parse=function(str){
				if (!str){
					this.left=0;
					this.right=0;
					this.top=0;
					this.bottom=0;
					return;
				};
				var arr=str.split(",");
				if (arr.length==1){
					var k=parseInt(arr[0]);
					this.top=k;
					this.bottom=k;
					this.left=k;
					this.right=k;
				}
				else {
					this.top=parseInt(arr[0]);
					this.bottom=parseInt(arr[1]);
					this.left=parseInt(arr[2]);
					this.right=parseInt(arr[3]);
				}
			}

			__proto.copy=function(source){
				this.top=source.top;
				this.bottom=source.bottom;
				this.left=source.left;
				this.right=source.right;
			}

			return Margin;
		})()


		//class fairygui.OverflowType
		var OverflowType=(function(){
			function OverflowType(){}
			__class(OverflowType,'fairygui.OverflowType');
			OverflowType.parse=function(value){
				switch (value){
					case "visible":
						return 0;
					case "hidden":
						return 1;
					case "scroll":
						return 2;
					case "scale":
						return 3;
					case "scaleFree":
						return 4;
					default :
						return 0;
					}
			}

			OverflowType.Visible=0;
			OverflowType.Hidden=1;
			OverflowType.Scroll=2;
			OverflowType.Scale=3;
			OverflowType.ScaleFree=4;
			return OverflowType;
		})()


		//class fairygui.PackageItem
		var PackageItem=(function(){
			function PackageItem(){
				this.owner=null;
				this.type=0;
				this.id=null;
				this.name=null;
				this.width=0;
				this.height=0;
				this.file=null;
				this.decoded=false;
				this.scale9Grid=null;
				this.scaleByTile=false;
				this.tileGridIndice=0;
				this.smoothing=false;
				this.texture=null;
				this.interval=0;
				this.repeatDelay=0;
				this.swing=false;
				this.frames=null;
				this.componentData=null;
				this.displayList=null;
				this.sound=null;
				this.bitmapFont=null;
			}

			__class(PackageItem,'fairygui.PackageItem');
			var __proto=PackageItem.prototype;
			__proto.load=function(){
				return this.owner.getItemAsset(this);
			}

			__proto.toString=function(){
				return this.name;
			}

			return PackageItem;
		})()


		//class fairygui.PackageItemType
		var PackageItemType=(function(){
			function PackageItemType(){}
			__class(PackageItemType,'fairygui.PackageItemType');
			PackageItemType.parse=function(value){
				switch(value){
					case "image":
						return 0;
					case "movieclip":
						return 2;
					case "sound":
						return 3;
					case "component":
						return 4;
					case "swf":
						return 1;
					case "font":
						return 6;
					case "atlas":
						return 7;
					}
				return 0;
			}

			PackageItemType.Image=0;
			PackageItemType.Swf=1;
			PackageItemType.MovieClip=2;
			PackageItemType.Sound=3;
			PackageItemType.Component=4;
			PackageItemType.Misc=5;
			PackageItemType.Font=6;
			PackageItemType.Atlas=7;
			return PackageItemType;
		})()


		//class fairygui.PageOption
		var PageOption=(function(){
			function PageOption(){
				this._controller=null;
				this._id=null;
			}

			__class(PageOption,'fairygui.PageOption');
			var __proto=PageOption.prototype;
			__proto.clear=function(){
				this._id=null;
			}

			__getset(0,__proto,'controller',null,function(val){
				this._controller=val;
			});

			__getset(0,__proto,'index',function(){
				if (this._id)
					return this._controller.getPageIndexById(this._id);
				else
				return-1;
				},function(pageIndex){
				this._id=this._controller.getPageId(pageIndex);
			});

			__getset(0,__proto,'name',function(){
				if (this._id)
					return this._controller.getPageNameById(this._id);
				else
				return null;
				},function(pageName){
				this._id=this._controller.getPageIdByName(pageName);
			});

			__getset(0,__proto,'id',function(){
				return this._id;
				},function(id){
				this._id=id;
			});

			return PageOption;
		})()


		//class fairygui.PopupMenu
		var PopupMenu=(function(){
			function PopupMenu(resourceURL){
				this._contentPane=null;
				this._list=null;
				if(!resourceURL){
					resourceURL=UIConfig1.popupMenu;
					if(!resourceURL)
						throw "UIConfig.popupMenu not defined";
				}
				this._contentPane=UIPackage.createObjectFromURL(resourceURL).asCom;
				this._contentPane.on("display",this,this.__addedToStage);
				this._list=(this._contentPane.getChild("list"));
				this._list.removeChildrenToPool();
				this._list.addRelation(this._contentPane,14);
				this._list.removeRelation(this._contentPane,15);
				this._contentPane.addRelation(this._list,15);
				this._list.on("fui_click_item",this,this.__clickItem);
			}

			__class(PopupMenu,'fairygui.PopupMenu');
			var __proto=PopupMenu.prototype;
			__proto.dispose=function(){
				this._contentPane.dispose();
			}

			__proto.addItem=function(caption,handler){
				var item=this._list.addItemFromPool().asButton;
				item.title=caption;
				item.data=handler;
				item.grayed=false;
				var c=item.getController("checked");
				if(c !=null)
					c.selectedIndex=0;
				return item;
			}

			__proto.addItemAt=function(caption,index,handler){
				var item=this._list.getFromPool().asButton;
				this._list.addChildAt(item,index);
				item.title=caption;
				item.data=handler;
				item.grayed=false;
				var c=item.getController("checked");
				if(c !=null)
					c.selectedIndex=0;
				return item;
			}

			__proto.addSeperator=function(){
				if(UIConfig1.popupMenu_seperator==null)
					throw "UIConfig.popupMenu_seperator not defined";
				this.list.addItemFromPool(UIConfig1.popupMenu_seperator);
			}

			__proto.getItemName=function(index){
				var item=this._list.getChildAt(index);
				return item.name;
			}

			__proto.setItemText=function(name,caption){
				var item=this._list.getChild(name).asButton;
				item.title=caption;
			}

			__proto.setItemVisible=function(name,visible){
				var item=this._list.getChild(name).asButton;
				if(item.visible !=visible){
					item.visible=visible;
					this._list.setBoundsChangedFlag();
				}
			}

			__proto.setItemGrayed=function(name,grayed){
				var item=this._list.getChild(name).asButton;
				item.grayed=grayed;
			}

			__proto.setItemCheckable=function(name,checkable){
				var item=this._list.getChild(name).asButton;
				var c=item.getController("checked");
				if(c !=null){
					if(checkable){
						if(c.selectedIndex==0)
							c.selectedIndex=1;
					}
					else
					c.selectedIndex=0;
				}
			}

			__proto.setItemChecked=function(name,checked){
				var item=this._list.getChild(name).asButton;
				var c=item.getController("checked");
				if(c !=null)
					c.selectedIndex=checked?2:1;
			}

			__proto.isItemChecked=function(name){
				var item=this._list.getChild(name).asButton;
				var c=item.getController("checked");
				if(c !=null)
					return c.selectedIndex==2;
				else
				return false;
			}

			__proto.removeItem=function(name){
				var item=this._list.getChild(name);
				if(item !=null){
					var index=this._list.getChildIndex(item);
					this._list.removeChildToPoolAt(index);
					return true;
				}
				else
				return false;
			}

			__proto.clearItems=function(){
				this._list.removeChildrenToPool();
			}

			__proto.show=function(target,downward){
				var r=target !=null?target.root:GRoot.inst;
				r.showPopup(this.contentPane,((target instanceof fairygui.GRoot ))?null:target,downward);
			}

			__proto.__clickItem=function(itemObject){
				Laya.timer.once(100,this,this.__clickItem2,[itemObject]);
			}

			__proto.__clickItem2=function(itemObject){
				if(!((itemObject instanceof fairygui.GButton )))
					return;
				if(itemObject.grayed){
					this._list.selectedIndex=-1;
					return;
				};
				var c=itemObject.asCom.getController("checked");
				if(c !=null && c.selectedIndex !=0){
					if(c.selectedIndex==1)
						c.selectedIndex=2;
					else
					c.selectedIndex=1;
				};
				var r=(this._contentPane.parent);
				r.hidePopup(this.contentPane);
				if(itemObject.data !=null){
					(itemObject.data).run();
				}
			}

			__proto.__addedToStage=function(){
				this._list.selectedIndex=-1;
				this._list.resizeToFit(100000,10);
			}

			__getset(0,__proto,'itemCount',function(){
				return this._list.numChildren;
			});

			__getset(0,__proto,'contentPane',function(){
				return this._contentPane;
			});

			__getset(0,__proto,'list',function(){
				return this._list;
			});

			return PopupMenu;
		})()


		//class fairygui.ProgressTitleType
		var ProgressTitleType=(function(){
			function ProgressTitleType(){}
			__class(ProgressTitleType,'fairygui.ProgressTitleType');
			ProgressTitleType.parse=function(value){
				switch (value){
					case "percent":
						return 0;
					case "valueAndmax":
						return 1;
					case "value":
						return 2;
					case "max":
						return 3;
					default :
						return 0;
					}
			}

			ProgressTitleType.Percent=0;
			ProgressTitleType.ValueAndMax=1;
			ProgressTitleType.Value=2;
			ProgressTitleType.Max=3;
			return ProgressTitleType;
		})()


		//class fairygui.RelationItem
		var RelationItem=(function(){
			var RelationDef;
			function RelationItem(owner){
				this._owner=null;
				this._target=null;
				this._defs=null;
				this._targetX=NaN;
				this._targetY=NaN;
				this._targetWidth=NaN;
				this._targetHeight=NaN;
				this._owner=owner;
				this._defs=[];
			}

			__class(RelationItem,'fairygui.RelationItem');
			var __proto=RelationItem.prototype;
			__proto.add=function(relationType,usePercent){
				if (relationType==24){
					this.add(14,usePercent);
					this.add(15,usePercent);
					return;
				};
				var length=this._defs.length;
				for (var i=0;i < length;i++){
					var def=this._defs[i];
					if (def.type==relationType)
						return;
				}
				this.internalAdd(relationType,usePercent);
			}

			__proto.internalAdd=function(relationType,usePercent){
				if (relationType==24){
					this.internalAdd(14,usePercent);
					this.internalAdd(15,usePercent);
					return;
				};
				var info=new RelationDef();
				info.percent=usePercent;
				info.type=relationType;
				this._defs.push(info);
				if (usePercent || relationType==1 || relationType==3 || relationType==5
					|| relationType==8 || relationType==10 || relationType==12)
				this._owner.pixelSnapping=true;
			}

			__proto.remove=function(relationType){
				(relationType===void 0)&& (relationType=0);
				if (relationType==24){
					this.remove(14);
					this.remove(15);
					return;
				};
				var dc=this._defs.length;
				for (var k=0;k < dc;k++){
					if (this._defs[k].type==relationType){
						this._defs.splice(k,1);
						break ;
					}
				}
			}

			__proto.copyFrom=function(source){
				this.target=source.target;
				this._defs.length=0;
				var length=source._defs.length;
				for (var i=0;i < length;i++){
					var info=source._defs[i];
					var info2=new RelationDef();
					info2.copyFrom(info);
					this._defs.push(info2);
				}
			}

			__proto.dispose=function(){
				if (this._target !=null){
					this.releaseRefTarget(this._target);
					this._target=null;
				}
			}

			__proto.applyOnSelfResized=function(dWidth,dHeight){
				var ox=this._owner.x;
				var oy=this._owner.y;
				var length=this._defs.length;
				for (var i=0;i < length;i++){
					var info=this._defs[i];
					switch (info.type){
						case 3:
						case 5:
							this._owner.x-=dWidth / 2;
							break ;
						case 4:
						case 6:
							this._owner.x-=dWidth;
							break ;
						case 10:
						case 12:
							this._owner.y-=dHeight / 2;
							break ;
						case 11:
						case 13:
							this._owner.y-=dHeight;
							break ;
						}
				}
				if (ox !=this._owner.x || oy !=this._owner.y){
					ox=this._owner.x-ox;
					oy=this._owner.y-oy;
					this._owner.updateGearFromRelations(1,ox,oy);
					if(this._owner.parent !=null){
						var len=this._owner.parent._transitions.length;
						if(len > 0){
							for(i=0;i < len;++i){
								this._owner.parent._transitions[i].updateFromRelations(this._owner.id,ox,oy);
							}
						}
					}
				}
			}

			__proto.applyOnXYChanged=function(info,dx,dy){
				var tmp=NaN;
				switch (info.type){
					case 0:
					case 1:
					case 2:
					case 3:
					case 4:
					case 5:
					case 6:
						this._owner.x+=dx;
						break ;
					case 7:
					case 8:
					case 9:
					case 10:
					case 11:
					case 12:
					case 13:
						this._owner.y+=dy;
						break ;
					case 14:
					case 15:
						break ;
					case 16:
					case 17:
						tmp=this._owner.x;
						this._owner.x+=dx;
						this._owner.width=this._owner._rawWidth-(this._owner.x-tmp);
						break ;
					case 18:
					case 19:
						this._owner.width=this._owner._rawWidth+dx;
						break ;
					case 20:
					case 21:
						tmp=this._owner.y;
						this._owner.y+=dy;
						this._owner.height=this._owner._rawHeight-(this._owner.y-tmp);
						break ;
					case 22:
					case 23:
						this._owner.height=this._owner._rawHeight+dy;
						break ;
					}
			}

			__proto.applyOnSizeChanged=function(info){
				var targetX=NaN,targetY=NaN;
				if (this._target !=this._owner.parent){
					targetX=this._target.x;
					targetY=this._target.y;
				}
				else {
					targetX=0;
					targetY=0;
				};
				var v=NaN,tmp=NaN;
				switch (info.type){
					case 0:
						break ;
					case 1:
						v=this._owner.x-(targetX+this._targetWidth / 2);
						if (info.percent)
							v=v / this._targetWidth *this._target._rawWidth;
						this._owner.x=targetX+this._target._rawWidth / 2+v;
						break ;
					case 2:
						v=this._owner.x-(targetX+this._targetWidth);
						if (info.percent)
							v=v / this._targetWidth *this._target._rawWidth;
						this._owner.x=targetX+this._target._rawWidth+v;
						break ;
					case 3:
						v=this._owner.x+this._owner._rawWidth / 2-(targetX+this._targetWidth / 2);
						if (info.percent)
							v=v / this._targetWidth *this._target._rawWidth;
						this._owner.x=targetX+this._target._rawWidth / 2+v-this._owner._rawWidth / 2;
						break ;
					case 4:
						v=this._owner.x+this._owner._rawWidth-targetX;
						if (info.percent)
							v=v / this._targetWidth *this._target._rawWidth;
						this._owner.x=targetX+v-this._owner._rawWidth;
						break ;
					case 5:
						v=this._owner.x+this._owner._rawWidth-(targetX+this._targetWidth / 2);
						if (info.percent)
							v=v / this._targetWidth *this._target._rawWidth;
						this._owner.x=targetX+this._target._rawWidth / 2+v-this._owner._rawWidth;
						break ;
					case 6:
						v=this._owner.x+this._owner._rawWidth-(targetX+this._targetWidth);
						if (info.percent)
							v=v / this._targetWidth *this._target._rawWidth;
						this._owner.x=targetX+this._target._rawWidth+v-this._owner._rawWidth;
						break ;
					case 7:
						break ;
					case 8:
						v=this._owner.y-(targetY+this._targetHeight / 2);
						if (info.percent)
							v=v / this._targetHeight *this._target._rawHeight;
						this._owner.y=targetY+this._target._rawHeight / 2+v;
						break ;
					case 9:
						v=this._owner.y-(targetY+this._targetHeight);
						if (info.percent)
							v=v / this._targetHeight *this._target._rawHeight;
						this._owner.y=targetY+this._target._rawHeight+v;
						break ;
					case 10:
						v=this._owner.y+this._owner._rawHeight / 2-(targetY+this._targetHeight / 2);
						if (info.percent)
							v=v / this._targetHeight *this._target._rawHeight;
						this._owner.y=targetY+this._target._rawHeight / 2+v-this._owner._rawHeight / 2;
						break ;
					case 11:
						v=this._owner.y+this._owner._rawHeight-targetY;
						if (info.percent)
							v=v / this._targetHeight *this._target._rawHeight;
						this._owner.y=targetY+v-this._owner._rawHeight;
						break ;
					case 12:
						v=this._owner.y+this._owner._rawHeight-(targetY+this._targetHeight / 2);
						if (info.percent)
							v=v / this._targetHeight *this._target._rawHeight;
						this._owner.y=targetY+this._target._rawHeight / 2+v-this._owner._rawHeight;
						break ;
					case 13:
						v=this._owner.y+this._owner._rawHeight-(targetY+this._targetHeight);
						if (info.percent)
							v=v / this._targetHeight *this._target._rawHeight;
						this._owner.y=targetY+this._target._rawHeight+v-this._owner._rawHeight;
						break ;
					case 14:
						if(this._owner._underConstruct && this._owner==this._target.parent)
							v=this._owner.sourceWidth-this._target._initWidth;
						else
						v=this._owner._rawWidth-this._targetWidth;
						if (info.percent)
							v=v / this._targetWidth *this._target._rawWidth;
						if(this._target==this._owner.parent)
							this._owner.setSize(this._target._rawWidth+v,this._owner._rawHeight,true);
						else
						this._owner.width=this._target._rawWidth+v;
						break ;
					case 15:
						if(this._owner._underConstruct && this._owner==this._target.parent)
							v=this._owner.sourceHeight-this._target._initHeight;
						else
						v=this._owner._rawHeight-this._targetHeight;
						if (info.percent)
							v=v / this._targetHeight *this._target._rawHeight;
						if(this._target==this._owner.parent)
							this._owner.setSize(this._owner._rawWidth,this._target._rawHeight+v,true);
						else
						this._owner.height=this._target._rawHeight+v;
						break ;
					case 16:
						break ;
					case 17:
						v=this._owner.x-(targetX+this._targetWidth);
						if (info.percent)
							v=v / this._targetWidth *this._target._rawWidth;
						tmp=this._owner.x;
						this._owner.x=targetX+this._target._rawWidth+v;
						this._owner.width=this._owner._rawWidth-(this._owner.x-tmp);
						break ;
					case 18:
						break ;
					case 19:
						if(this._owner._underConstruct && this._owner==this._target.parent)
							v=this._owner.sourceWidth-(targetX+this._target._initWidth);
						else
						v=this._owner.width-(targetX+this._targetWidth);
						if (this._owner !=this._target.parent)
							v+=this._owner.x;
						if (info.percent)
							v=v / this._targetWidth *this._target._rawWidth;
						if (this._owner !=this._target.parent)
							this._owner.width=targetX+this._target._rawWidth+v-this._owner.x;
						else
						this._owner.width=targetX+this._target._rawWidth+v;
						break ;
					case 20:
						break ;
					case 21:
						v=this._owner.y-(targetY+this._targetHeight);
						if (info.percent)
							v=v / this._targetHeight *this._target._rawHeight;
						tmp=this._owner.y;
						this._owner.y=targetY+this._target._rawHeight+v;
						this._owner.height=this._owner._rawHeight-(this._owner.y-tmp);
						break ;
					case 22:
						break ;
					case 23:
						if(this._owner._underConstruct && this._owner==this._target.parent)
							v=this._owner.sourceHeight-(targetY+this._target._initHeight);
						else
						v=this._owner._rawHeight-(targetY+this._targetHeight);
						if (this._owner !=this._target.parent)
							v+=this._owner.y;
						if (info.percent)
							v=v / this._targetHeight *this._target._rawHeight;
						if (this._owner !=this._target.parent)
							this._owner.height=targetY+this._target._rawHeight+v-this._owner.y;
						else
						this._owner.height=targetY+this._target._rawHeight+v;
						break ;
					}
			}

			__proto.addRefTarget=function(target){
				if (target !=this._owner.parent)
					target.on("fui_xy_changed",this,this.__targetXYChanged);
				target.on("fui_size_changed",this,this.__targetSizeChanged);
				target.on("fui_size_delay_change",this,this.__targetSizeWillChange);
				this._targetX=this._target.x;
				this._targetY=this._target.y;
				this._targetWidth=this._target._rawWidth;
				this._targetHeight=this._target._rawHeight;
			}

			__proto.releaseRefTarget=function(target){
				target.off("fui_xy_changed",this,this.__targetXYChanged);
				target.off("fui_size_changed",this,this.__targetSizeChanged);
				target.off("fui_size_delay_change",this,this.__targetSizeWillChange);
			}

			__proto.__targetXYChanged=function(){
				if (this._owner.relations.handling !=null || this._owner.group!=null && this._owner.group._updating){
					this._targetX=this._target.x;
					this._targetY=this._target.y;
					return;
				}
				this._owner.relations.handling=this._target;
				var ox=this._owner.x;
				var oy=this._owner.y;
				var dx=this._target.x-this._targetX;
				var dy=this._target.y-this._targetY;
				var length=this._defs.length;
				for (var i=0;i < length;i++){
					var info=this._defs[i];
					this.applyOnXYChanged(info,dx,dy);
				}
				this._targetX=this._target.x;
				this._targetY=this._target.y;
				if (ox !=this._owner.x || oy !=this._owner.y){
					ox=this._owner.x-ox;
					oy=this._owner.y-oy;
					this._owner.updateGearFromRelations(1,ox,oy);
					if(this._owner.parent !=null){
						var len=this._owner.parent._transitions.length;
						if(len > 0){
							for(i=0;i < len;++i){
								this._owner.parent._transitions[i].updateFromRelations(this._owner.id,ox,oy);
							}
						}
					}
				}
				this._owner.relations.handling=null;
			}

			__proto.__targetSizeChanged=function(){
				if (this._owner.relations.handling !=null)
					return;
				this._owner.relations.handling=this._target;
				var ox=this._owner.x;
				var oy=this._owner.y;
				var ow=this._owner._rawWidth;
				var oh=this._owner._rawHeight;
				var length=this._defs.length;
				for (var i=0;i < length;i++){
					var info=this._defs[i];
					this.applyOnSizeChanged(info);
				}
				this._targetWidth=this._target._rawWidth;
				this._targetHeight=this._target._rawHeight;
				if (ox !=this._owner.x || oy !=this._owner.y){
					ox=this._owner.x-ox;
					oy=this._owner.y-oy;
					this._owner.updateGearFromRelations(1,ox,oy);
					if(this._owner.parent !=null){
						var len=this._owner.parent._transitions.length;
						if(len > 0){
							for(i=0;i < len;++i){
								this._owner.parent._transitions[i].updateFromRelations(this._owner.id,ox,oy);
							}
						}
					}
				}
				if(ow !=this._owner._rawWidth || oh !=this._owner._rawHeight){
					ow=this._owner._rawWidth-ow;
					oh=this._owner._rawHeight-oh;
					this._owner.updateGearFromRelations(2,ow,oh);
				}
				this._owner.relations.handling=null;
			}

			__proto.__targetSizeWillChange=function(){
				this._owner.relations.sizeDirty=true;
			}

			__getset(0,__proto,'owner',function(){
				return this._owner;
			});

			__getset(0,__proto,'target',function(){
				return this._target;
				},function(value){
				if (this._target !=value){
					if (this._target)
						this.releaseRefTarget(this._target);
					this._target=value;
					if (this._target)
						this.addRefTarget(this._target);
				}
			});

			__getset(0,__proto,'isEmpty',function(){
				return this._defs.length==0;
			});

			RelationItem.__init$=function(){
				//class RelationDef
				RelationDef=(function(){
					function RelationDef(){
						this.percent=false;
						this.type=NaN;
					}
					__class(RelationDef,'');
					var __proto=RelationDef.prototype;
					__proto.copyFrom=function(source){
						this.percent=source.percent;
						this.type=source.type;
					}
					return RelationDef;
				})()
			}

			return RelationItem;
		})()


		//class fairygui.Relations
		var Relations=(function(){
			function Relations(owner){
				this._owner=null;
				this._items=null;
				this.handling=null;
				this.sizeDirty=false;
				this._owner=owner;
				this._items=[];
			}

			__class(Relations,'fairygui.Relations');
			var __proto=Relations.prototype;
			__proto.add=function(target,relationType,usePercent){
				(usePercent===void 0)&& (usePercent=false);
				var length=this._items.length;
				for (var i=0;i < length;i++){
					var item=this._items[i];
					if (item.target==target){
						item.add(relationType,usePercent);
						return;
					}
				};
				var newItem=new RelationItem(this._owner);
				newItem.target=target;
				newItem.add(relationType,usePercent);
				this._items.push(newItem);
			}

			__proto.addItems=function(target,sidePairs){
				var arr=sidePairs.split(",");
				var s;
				var usePercent=false;
				var i=NaN;
				var newItem=new RelationItem(this._owner);
				newItem.target=target;
				for (i=0;i < 2;i++){
					s=arr[i];
					if (!s)
						continue ;
					if (s.charAt(s.length-1)=="%"){
						s=s.substr(0,s.length-1);
						usePercent=true;
					}
					else
					usePercent=false;
					var j=s.indexOf("-");
					if (j==-1)
						s=s+"-"+s;
					var t=fairygui.Relations.RELATION_NAMES.indexOf(s);
					if (t==-1)
						throw "invalid relation type";
					newItem.internalAdd(t,usePercent);
				}
				this._items.push(newItem);
			}

			__proto.remove=function(target,relationType){
				(relationType===void 0)&& (relationType=0);
				var cnt=this._items.length;
				var i=0;
				while (i < cnt){
					var item=this._items[i];
					if (item.target==target){
						item.remove(relationType);
						if (item.isEmpty){
							item.dispose();
							this._items.splice(i,1);
							cnt--;
						}
						else
						i++;
					}
					else
					i++;
				}
			}

			__proto.contains=function(target){
				var length=this._items.length;
				for (var i=0;i < length;i++){
					var item=this._items[i];
					if (item.target==target)
						return true;
				}
				return false;
			}

			__proto.clearFor=function(target){
				var cnt=this._items.length;
				var i=0;
				while (i < cnt){
					var item=this._items[i];
					if (item.target==target){
						item.dispose();
						this._items.splice(i,1);
						cnt--;
					}
					else
					i++;
				}
			}

			__proto.clearAll=function(){
				var length=this._items.length;
				for (var i=0;i < length;i++){
					var item=this._items[i];
					item.dispose();
				}
				this._items.length=0;
			}

			__proto.copyFrom=function(source){
				this.clearAll();
				var arr=source._items;
				var length=arr.length;
				for (var i=0;i < length;i++){
					var ri=arr[i];
					var item=new RelationItem(this._owner);
					item.copyFrom(ri);
					this._items.push(item);
				}
			}

			__proto.dispose=function(){
				this.clearAll();
			}

			__proto.onOwnerSizeChanged=function(dWidth,dHeight){
				if (this._items.length==0)
					return;
				var length=this._items.length;
				for (var i=0;i < length;i++){
					var item=this._items[i];
					item.applyOnSelfResized(dWidth,dHeight);
				}
			}

			__proto.ensureRelationsSizeCorrect=function(){
				if (this._items.length==0)
					return;
				this.sizeDirty=false;
				var length=this._items.length;
				for (var i=0;i < length;i++){
					var item=this._items[i];
					item.target.ensureSizeCorrect();
				}
			}

			__proto.setup=function(xml){
				var col=xml.childNodes;
				var length=col.length;
				var targetId;
				var target;
				for (var i=0;i < length;i++){
					var cxml=col[i];
					if(cxml.nodeName!="relation")
						continue ;
					targetId=cxml.getAttribute("target");
					if (this._owner.parent){
						if (targetId)
							target=this._owner.parent.getChildById(targetId);
						else
						target=this._owner.parent;
					}
					else {
						target=(this._owner).getChildById(targetId);
					}
					if (target)
						this.addItems(target,cxml.getAttribute("sidePair"));
				}
			}

			__getset(0,__proto,'empty',function(){
				return this._items.length==0;
			});

			__static(Relations,
			['RELATION_NAMES',function(){return this.RELATION_NAMES=
				[
				"left-left",
				"left-center",
				"left-right",
				"center-center",
				"right-left",
				"right-center",
				"right-right",
				"top-top",
				"top-middle",
				"top-bottom",
				"middle-middle",
				"bottom-top",
				"bottom-middle",
				"bottom-bottom",
				"width-width",
				"height-height",
				"leftext-left",
				"leftext-right",
				"rightext-left",
				"rightext-right",
				"topext-top",
				"topext-bottom",
				"bottomext-top",
				"bottomext-bottom"];}
			]);
			return Relations;
		})()


		//class fairygui.RelationType
		var RelationType=(function(){
			function RelationType(){}
			__class(RelationType,'fairygui.RelationType');
			RelationType.Left_Left=0;
			RelationType.Left_Center=1;
			RelationType.Left_Right=2;
			RelationType.Center_Center=3;
			RelationType.Right_Left=4;
			RelationType.Right_Center=5;
			RelationType.Right_Right=6;
			RelationType.Top_Top=7;
			RelationType.Top_Middle=8;
			RelationType.Top_Bottom=9;
			RelationType.Middle_Middle=10;
			RelationType.Bottom_Top=11;
			RelationType.Bottom_Middle=12;
			RelationType.Bottom_Bottom=13;
			RelationType.Width=14;
			RelationType.Height=15;
			RelationType.LeftExt_Left=16;
			RelationType.LeftExt_Right=17;
			RelationType.RightExt_Left=18;
			RelationType.RightExt_Right=19;
			RelationType.TopExt_Top=20;
			RelationType.TopExt_Bottom=21;
			RelationType.BottomExt_Top=22;
			RelationType.BottomExt_Bottom=23;
			RelationType.Size=24;
			return RelationType;
		})()


		//class fairygui.ScrollBarDisplayType
		var ScrollBarDisplayType=(function(){
			function ScrollBarDisplayType(){}
			__class(ScrollBarDisplayType,'fairygui.ScrollBarDisplayType');
			ScrollBarDisplayType.parse=function(value){
				switch (value){
					case "default":
						return 0;
					case "visible":
						return 1;
					case "auto":
						return 2;
					case "hidden":
						return 3;
					default :
						return 0;
					}
			}

			ScrollBarDisplayType.Default=0;
			ScrollBarDisplayType.Visible=1;
			ScrollBarDisplayType.Auto=2;
			ScrollBarDisplayType.Hidden=3;
			return ScrollBarDisplayType;
		})()


		//class fairygui.ScrollPane
		var ScrollPane=(function(){
			var TweenHelper;
			function ScrollPane(owner,scrollType,scrollBarMargin,scrollBarDisplay,flags,vtScrollBarRes,hzScrollBarRes){
				this._owner=null;
				this._maskContainer=null;
				this._container=null;
				this._viewWidth=0;
				this._viewHeight=0;
				this._contentWidth=0;
				this._contentHeight=0;
				this._scrollType=0;
				this._scrollSpeed=0;
				this._mouseWheelSpeed=0;
				this._scrollBarMargin=null;
				this._bouncebackEffect=false;
				this._touchEffect=false;
				this._scrollBarDisplayAuto=false;
				this._vScrollNone=false;
				this._hScrollNone=false;
				this._displayOnLeft=false;
				this._snapToItem=false;
				this._displayInDemand=false;
				this._mouseWheelEnabled=false;
				this._pageMode=false;
				this._pageSizeH=NaN;
				this._pageSizeV=NaN;
				this._inertiaDisabled=false;
				this._yPerc=NaN;
				this._xPerc=NaN;
				this._xPos=NaN;
				this._yPos=NaN;
				this._xOverlap=NaN;
				this._yOverlap=NaN;
				this._tweening=NaN;
				this._tweenHelper=null;
				this._tweener=null;
				this._needRefresh=false;
				this._time1=NaN;
				this._time2=NaN;
				this._y1=NaN;
				this._y2=NaN;
				this._yOffset=NaN;
				this._x1=NaN;
				this._x2=NaN;
				this._xOffset=NaN;
				this._holdAreaPoint=null;
				this._isHoldAreaDone=false;
				this._aniFlag=0;
				this._scrollBarVisible=false;
				this._hzScrollBar=null;
				this._vtScrollBar=null;
				this.isDragged=false;
				;
				if(fairygui.ScrollPane._easeTypeFunc==null)
					fairygui.ScrollPane._easeTypeFunc=Ease.cubicOut;
				this._tweenHelper=new TweenHelper();
				this._owner=owner;
				this._maskContainer=new Sprite();
				this._owner.displayObject.addChild(this._maskContainer);
				this._container=this._owner._container;
				this._container.pos(0,0);
				this._maskContainer.addChild(this._container);
				this._scrollType=scrollType;
				this._scrollBarMargin=scrollBarMargin;
				this._bouncebackEffect=UIConfig1.defaultScrollBounceEffect;
				this._touchEffect=UIConfig1.defaultScrollTouchEffect;
				this._scrollSpeed=UIConfig1.defaultScrollSpeed;
				this._mouseWheelSpeed=this._scrollSpeed *2;
				this._displayOnLeft=(flags & 1)!=0;
				this._snapToItem=(flags & 2)!=0;
				this._displayInDemand=(flags & 4)!=0;
				this._pageMode=(flags & 8)!=0;
				if(flags & 16)
					this._touchEffect=true;
				else if(flags & 32)
				this._touchEffect=false;
				else
				this._touchEffect=UIConfig1.defaultScrollTouchEffect;
				if(flags & 64)
					this._bouncebackEffect=true;
				else if(flags & 128)
				this._bouncebackEffect=false;
				else
				this._bouncebackEffect=UIConfig1.defaultScrollBounceEffect;
				this._inertiaDisabled=(flags & 256)!=0;
				if((flags & 512)==0)
					this._maskContainer.scrollRect=new Rectangle();
				this._xPerc=0;
				this._yPerc=0;
				this._xPos=0
				this._yPos=0;
				this._xOverlap=0;
				this._yOverlap=0;
				this._aniFlag=0;
				this._scrollBarVisible=true;
				this._mouseWheelEnabled=true;
				this._holdAreaPoint=new Point();
				if(scrollBarDisplay==0)
					scrollBarDisplay=UIConfig1.defaultScrollBarDisplay;
				if(scrollBarDisplay !=3){
					if(this._scrollType==2 || this._scrollType==1){
						var res=vtScrollBarRes ? vtScrollBarRes :UIConfig1.verticalScrollBar;
						if(res){
							this._vtScrollBar=(UIPackage.createObjectFromURL(res));
							if(!this._vtScrollBar)
								throw "cannot create scrollbar from "+res;
							this._vtScrollBar.setScrollPane(this,true);
							this._owner.displayObject.addChild(this._vtScrollBar.displayObject);
						}
					}
					if(this._scrollType==2 || this._scrollType==0){
						res=hzScrollBarRes ? hzScrollBarRes :UIConfig1.horizontalScrollBar;
						if(res){
							this._hzScrollBar=(UIPackage.createObjectFromURL(res));
							if(!this._hzScrollBar)
								throw "cannot create scrollbar from "+res;
							this._hzScrollBar.setScrollPane(this,false);
							this._owner.displayObject.addChild(this._hzScrollBar.displayObject);
						}
					}
					this._scrollBarDisplayAuto=scrollBarDisplay==2;
					if(this._scrollBarDisplayAuto){
						this._scrollBarVisible=false;
						if(this._vtScrollBar)
							this._vtScrollBar.displayObject.visible=false;
						if(this._hzScrollBar)
							this._hzScrollBar.displayObject.visible=false;
					}
				}
				this._contentWidth=0;
				this._contentHeight=0;
				this.setSize(owner.width,owner.height);
				this._owner.on("mousedown",this,this.__mouseDown);
				this._owner.on("mousewheel",this,this.__mouseWheel);
			}

			__class(ScrollPane,'fairygui.ScrollPane');
			var __proto=ScrollPane.prototype;
			__proto.setPercX=function(value,ani){
				(ani===void 0)&& (ani=false);
				this._owner.ensureBoundsCorrect();
				value=ToolSet.clamp01(value);
				if(value !=this._xPerc){
					this._xPerc=value;
					this._xPos=this._xPerc*this._xOverlap;
					this.posChanged(ani);
				}
			}

			__proto.setPercY=function(value,ani){
				(ani===void 0)&& (ani=false);
				this._owner.ensureBoundsCorrect();
				value=ToolSet.clamp01(value);
				if(value !=this._yPerc){
					this._yPerc=value;
					this._yPos=this._yPerc*this._yOverlap;
					this.posChanged(ani);
				}
			}

			__proto.setPosX=function(value,ani){
				(ani===void 0)&& (ani=false);
				this._owner.ensureBoundsCorrect();
				value=ToolSet.clamp(value,0,this._xOverlap);
				if(value!=this._xPos){
					this._xPos=value;
					this._xPerc=this._xOverlap==0?0:this._xPos/this._xOverlap;
					this.posChanged(ani);
				}
			}

			__proto.setPosY=function(value,ani){
				(ani===void 0)&& (ani=false);
				this._owner.ensureBoundsCorrect();
				value=ToolSet.clamp(value,0,this._yOverlap);
				if(value!=this._yPos){
					this._yPos=value;
					this._yPerc=this._yOverlap==0?0:this._yPos/this._yOverlap;
					this.posChanged(ani);
				}
			}

			__proto.getDeltaX=function(move){
				return move / (this._contentWidth-this._viewWidth);
			}

			__proto.getDeltaY=function(move){
				return move / (this._contentHeight-this._viewHeight);
			}

			__proto.scrollTop=function(ani){
				(ani===void 0)&& (ani=false);
				this.setPercY(0,ani);
			}

			__proto.scrollBottom=function(ani){
				(ani===void 0)&& (ani=false);
				this.setPercY(1,ani);
			}

			__proto.scrollUp=function(speed,ani){
				(speed===void 0)&& (speed=1);
				(ani===void 0)&& (ani=false);
				this.setPercY(this._yPerc-this.getDeltaY(this._scrollSpeed *speed),ani);
			}

			__proto.scrollDown=function(speed,ani){
				(speed===void 0)&& (speed=1);
				(ani===void 0)&& (ani=false);
				this.setPercY(this._yPerc+this.getDeltaY(this._scrollSpeed *speed),ani);
			}

			__proto.scrollLeft=function(speed,ani){
				(speed===void 0)&& (speed=1);
				(ani===void 0)&& (ani=false);
				this.setPercX(this._xPerc-this.getDeltaX(this._scrollSpeed *speed),ani);
			}

			__proto.scrollRight=function(speed,ani){
				(speed===void 0)&& (speed=1);
				(ani===void 0)&& (ani=false);
				this.setPercX(this._xPerc+this.getDeltaX(this._scrollSpeed *speed),ani);
			}

			__proto.scrollToView=function(target,ani,setFirst){
				(ani===void 0)&& (ani=false);
				(setFirst===void 0)&& (setFirst=false);
				this._owner.ensureBoundsCorrect();
				if(this._needRefresh)
					this.refresh();
				var rect;
				if((target instanceof fairygui.GObject )){
					if(target.parent !=this._owner){
						target.parent.localToGlobalRect(target.x,target.y,
						target.width,target.height,fairygui.ScrollPane.sHelperRect);
						rect=this._owner.globalToLocalRect(fairygui.ScrollPane.sHelperRect.x,fairygui.ScrollPane.sHelperRect.y,
						fairygui.ScrollPane.sHelperRect.width,fairygui.ScrollPane.sHelperRect.height,fairygui.ScrollPane.sHelperRect);
					}
					else {
						rect=fairygui.ScrollPane.sHelperRect;
						rect.setTo(target.x,target.y,target.width,target.height);
					}
				}
				else
				rect=(target);
				if (this._yOverlap>0){
					var top=this.posY;
					var bottom=top+this._viewHeight;
					if(setFirst || rect.y < top || rect.height >=this._viewHeight){
						if(this._pageMode)
							this.setPosY(Math.floor(rect.y / this._pageSizeV)*this._pageSizeV,ani);
						else
						this.setPosY(rect.y,ani);
					}
					else if(rect.y+rect.height > bottom){
						if(this._pageMode)
							this.setPosY(Math.floor(rect.y / this._pageSizeV)*this._pageSizeV,ani);
						else if(rect.height <=this._viewHeight/2)
						this.setPosY(rect.y+rect.height *2-this._viewHeight,ani);
						else
						this.setPosY(rect.y+rect.height-this._viewHeight,ani);
					}
				}
				if (this._xOverlap>0){
					var left=this.posX;
					var right=left+this._viewWidth;
					if(setFirst || rect.x < left || rect.width >=this._viewWidth){
						if(this._pageMode)
							this.setPosX(Math.floor(rect.x / this._pageSizeH)*this._pageSizeH,ani);
						else
						this.setPosX(rect.x,ani);
					}
					else if(rect.x+rect.width > right){
						if(this._pageMode)
							this.setPosX(Math.floor(rect.x / this._pageSizeH)*this._pageSizeH,ani);
						else if(rect.width <=this._viewWidth/2)
						this.setPosX(rect.x+rect.width *2-this._viewWidth,ani);
						else
						this.setPosX(rect.x+rect.width-this._viewWidth,ani);
					}
				}
				if(!ani && this._needRefresh)
					this.refresh();
			}

			__proto.isChildInView=function(obj){
				var dist=NaN;
				if(this._yOverlap>0){
					dist=obj.y+this._container.y;
					if(dist <-obj.height-20 || dist > this._viewHeight+20)
						return false;
				}
				if(this._xOverlap>0){
					dist=obj.x+this._container.x;
					if(dist <-obj.width-20 || dist > this._viewWidth+20)
						return false;
				}
				return true;
			}

			__proto.cancelDragging=function(){
				this._owner.displayObject.stage.off("mousemove",this,this.__mouseMove);
				this._owner.displayObject.stage.off("mouseup",this,this.__mouseUp);
				this._owner.displayObject.stage.off("click",this,this.__click);
				if (ScrollPane.draggingPane==this)
					ScrollPane.draggingPane=null;
				ScrollPane._gestureFlag=0;
				this.isDragged=false;
				this._maskContainer.mouseEnabled=true;
			}

			__proto.onOwnerSizeChanged=function(){
				this.setSize(this._owner.width,this._owner.height);
				this.posChanged(false);
			}

			__proto.adjustMaskContainer=function(){
				var mx=NaN,my=NaN;
				if (this._displayOnLeft && this._vtScrollBar !=null)
					mx=Math.floor(this._owner.margin.left+this._vtScrollBar.width);
				else
				mx=Math.floor(this._owner.margin.left);
				my=Math.floor(this._owner.margin.top);
				mx+=this._owner._alignOffset.x;
				my+=this._owner._alignOffset.y;
				this._maskContainer.pos(mx,my);
			}

			__proto.setSize=function(aWidth,aHeight){
				this.adjustMaskContainer();
				if (this._hzScrollBar){
					this._hzScrollBar.y=aHeight-this._hzScrollBar.height;
					if(this._vtScrollBar && !this._vScrollNone){
						this._hzScrollBar.width=aWidth-this._vtScrollBar.width-this._scrollBarMargin.left-this._scrollBarMargin.right;
						if(this._displayOnLeft)
							this._hzScrollBar.x=this._scrollBarMargin.left+this._vtScrollBar.width;
						else
						this._hzScrollBar.x=this._scrollBarMargin.left;
					}
					else {
						this._hzScrollBar.width=aWidth-this._scrollBarMargin.left-this._scrollBarMargin.right;
						this._hzScrollBar.x=this._scrollBarMargin.left;
					}
				}
				if (this._vtScrollBar){
					if (!this._displayOnLeft)
						this._vtScrollBar.x=aWidth-this._vtScrollBar.width;
					if(this._hzScrollBar)
						this._vtScrollBar.height=aHeight-this._hzScrollBar.height-this._scrollBarMargin.top-this._scrollBarMargin.bottom;
					else
					this._vtScrollBar.height=aHeight-this._scrollBarMargin.top-this._scrollBarMargin.bottom;
					this._vtScrollBar.y=this._scrollBarMargin.top;
				}
				this._viewWidth=aWidth;
				this._viewHeight=aHeight;
				if(this._hzScrollBar && !this._hScrollNone)
					this._viewHeight-=this._hzScrollBar.height;
				if(this._vtScrollBar && !this._vScrollNone)
					this._viewWidth-=this._vtScrollBar.width;
				this._viewWidth-=(this._owner.margin.left+this._owner.margin.right);
				this._viewHeight-=(this._owner.margin.top+this._owner.margin.bottom);
				this._viewWidth=Math.max(1,this._viewWidth);
				this._viewHeight=Math.max(1,this._viewHeight);
				this._pageSizeH=this._viewWidth;
				this._pageSizeV=this._viewHeight;
				this.handleSizeChanged();
			}

			__proto.setContentSize=function(aWidth,aHeight){
				if (this._contentWidth==aWidth && this._contentHeight==aHeight)
					return;
				this._contentWidth=aWidth;
				this._contentHeight=aHeight;
				this.handleSizeChanged();
			}

			__proto.changeContentSizeOnScrolling=function(deltaWidth,deltaHeight,deltaPosX,deltaPosY){
				this._contentWidth+=deltaWidth;
				this._contentHeight+=deltaHeight;
				if (this.isDragged){
					if (deltaPosX !=0)
						this._container.x-=deltaPosX;
					if (deltaPosY !=0)
						this._container.y-=deltaPosY;
					this.validateHolderPos();
					this._xOffset+=deltaPosX;
					this._yOffset+=deltaPosY;
					var tmp=this._y2-this._y1;
					this._y1=this._container.y;
					this._y2=this._y1+tmp;
					tmp=this._x2-this._x1;
					this._x1=this._container.x;
					this._x2=this._x1+tmp;
					this._yPos=-this._container.y;
					this._xPos=-this._container.x;
				}
				else if (this._tweening==2){
					if (deltaPosX !=0){
						this._container.x-=deltaPosX;
						this._tweenHelper.start.x-=deltaPosX;
					}
					if (deltaPosY !=0){
						this._container.y-=deltaPosY;
						this._tweenHelper.start.y-=deltaPosY;
					}
				}
				this.handleSizeChanged(true);
			}

			__proto.handleSizeChanged=function(onScrolling){
				(onScrolling===void 0)&& (onScrolling=false);
				if(this._displayInDemand){
					if(this._vtScrollBar){
						if(this._contentHeight <=this._viewHeight){
							if(!this._vScrollNone){
								this._vScrollNone=true;
								this._viewWidth+=this._vtScrollBar.width;
							}
						}
						else {
							if(this._vScrollNone){
								this._vScrollNone=false;
								this._viewWidth-=this._vtScrollBar.width;
							}
						}
					}
					if(this._hzScrollBar){
						if(this._contentWidth <=this._viewWidth){
							if(!this._hScrollNone){
								this._hScrollNone=true;
								this._viewHeight+=this._hzScrollBar.height;
							}
						}
						else {
							if(this._hScrollNone){
								this._hScrollNone=false;
								this._viewHeight-=this._hzScrollBar.height;
							}
						}
					}
				}
				if(this._vtScrollBar){
					if(this._viewHeight < this._vtScrollBar.minSize)
						this._vtScrollBar.displayObject.visible=false;
					else {
						this._vtScrollBar.displayObject.visible=this._scrollBarVisible && !this._vScrollNone;
						if(this._contentHeight==0)
							this._vtScrollBar.displayPerc=0;
						else
						this._vtScrollBar.displayPerc=Math.min(1,this._viewHeight / this._contentHeight);
					}
				}
				if(this._hzScrollBar){
					if(this._viewWidth < this._hzScrollBar.minSize)
						this._hzScrollBar.displayObject.visible=false;
					else {
						this._hzScrollBar.displayObject.visible=this._scrollBarVisible && !this._hScrollNone;
						if(this._contentWidth==0)
							this._hzScrollBar.displayPerc=0;
						else
						this._hzScrollBar.displayPerc=Math.min(1,this._viewWidth / this._contentWidth);
					}
				};
				var rect=this._maskContainer.scrollRect;
				if(rect!=null){
					rect.width=this._viewWidth;
					rect.height=this._viewHeight;
					this._maskContainer.scrollRect=rect;
				}
				if (this._scrollType==0 || this._scrollType==2)
					this._xOverlap=Math.ceil(Math.max(0,this._contentWidth-this._viewWidth));
				else
				this._xOverlap=0;
				if (this._scrollType==1 || this._scrollType==2)
					this._yOverlap=Math.ceil(Math.max(0,this._contentHeight-this._viewHeight));
				else
				this._yOverlap=0;
				if(this._tweening==0 && onScrolling){
					if(this._xPerc==0 || this._xPerc==1){
						this._xPos=this._xPerc *this._xOverlap;
						this._container.x=-this._xPos;
					}
					if(this._yPerc==0 || this._yPerc==1){
						this._yPos=this._yPerc *this._yOverlap;
						this._container.y=-this._yPos;
					}
				}
				else{
					this._xPos=ToolSet.clamp(this._xPos,0,this._xOverlap);
					this._xPerc=this._xOverlap>0?this._xPos/this._xOverlap:0;
					this._yPos=ToolSet.clamp(this._yPos,0,this._yOverlap);
					this._yPerc=this._yOverlap>0?this._yPos/this._yOverlap:0;
				}
				this.validateHolderPos();
				if (this._vtScrollBar !=null)
					this._vtScrollBar.scrollPerc=this._yPerc;
				if (this._hzScrollBar !=null)
					this._hzScrollBar.scrollPerc=this._xPerc;
			}

			__proto.validateHolderPos=function(){
				this._container.x=ToolSet.clamp(this._container.x,-this._xOverlap,0);
				this._container.y=ToolSet.clamp(this._container.y,-this._yOverlap,0);
			}

			__proto.posChanged=function(ani){
				if (this._aniFlag==0)
					this._aniFlag=ani ? 1 :-1;
				else if (this._aniFlag==1 && !ani)
				this._aniFlag=-1;
				this._needRefresh=true;
				Laya.timer.callLater(this,this.refresh);
				if(this._tweening==2){
					this.killTween();
				}
			}

			__proto.killTween=function(){
				if(this._tweening==1){
					this._tweener.clear();
					this._tweening=0;
					this._tweener=null;
					this.syncScrollBar(true);
				}
				else if(this._tweening==2){
					this._tweener.clear();
					this._tweener=null;
					this._tweening=0;
					this.validateHolderPos();
					this.syncScrollBar(true);
					Events.dispatch("fui_scroll_end",this._owner.displayObject);
				}
			}

			__proto.refresh=function(){
				this._needRefresh=false;
				Laya.timer.clear(this,this.refresh);
				if(this._pageMode){
					var page=0;
					var delta=NaN;
					if(this._yOverlap>0 && this._yPerc!=1 && this._yPerc!=0){
						page=Math.floor(this._yPos / this._pageSizeV);
						delta=this._yPos-page*this._pageSizeV;
						if(delta>this._pageSizeV/2)
							page++;
						this._yPos=page *this._pageSizeV;
						if(this._yPos>this._yOverlap){
							this._yPos=this._yOverlap;
							this._yPerc=1;
						}
						else
						this._yPerc=this._yPos / this._yOverlap;
					}
					if(this._xOverlap>0 && this._xPerc!=1 && this._xPerc!=0){
						page=Math.floor(this._xPos / this._pageSizeH);
						delta=this._xPos-page*this._pageSizeH;
						if(delta>this._pageSizeH/2)
							page++;
						this._xPos=page *this._pageSizeH;
						if(this._xPos>this._xOverlap){
							this._xPos=this._xOverlap;
							this._xPerc=1;
						}
						else
						this._xPerc=this._xPos / this._xOverlap;
					}
				}
				else if(this._snapToItem){
					var pt=this._owner.getSnappingPosition(this._xPerc==1?0:this._xPos,this._yPerc==1?0:this._yPos,ScrollPane.sHelperPoint);
					if (this._xPerc !=1 && pt.x!=this._xPos){
						this._xPos=pt.x;
						this._xPerc=this._xPos / this._xOverlap;
						if(this._xPerc>1){
							this._xPerc=1;
							this._xPos=this._xOverlap;
						}
					}
					if (this._yPerc !=1 && pt.y!=this._yPos){
						this._yPos=pt.y;
						this._yPerc=this._yPos / this._yOverlap;
						if(this._yPerc>1){
							this._yPerc=1;
							this._yPos=this._yOverlap;
						}
					}
				}
				this.refresh2();
				Events.dispatch("fui_scroll",this._owner.displayObject);
				if(this._needRefresh){
					this._needRefresh=false;
					Laya.timer.clear(this,this.refresh);
					this.refresh2();
				}
				this._aniFlag=0;
			}

			__proto.refresh2=function(){
				var contentXLoc=Math.floor(this._xPos);
				var contentYLoc=Math.floor(this._yPos);
				if(this._aniFlag==1 && !this.isDragged){
					var toX=this._container.x;
					var toY=this._container.y;
					if(this._yOverlap>0)
						toY=-contentYLoc;
					else {
						if(this._container.y !=0)
							this._container.y=0;
					}
					if(this._xOverlap>0)
						toX=-contentXLoc;
					else {
						if(this._container.x !=0)
							this._container.x=0;
					}
					if(toX !=this._container.x || toY !=this._container.y){
						this.killTween();
						this._maskContainer.mouseEnabled=false;
						this._tweening=1;
						this._tweener=Tween.to(this._container,
						{x:toX,y:toY },
						500,
						fairygui.ScrollPane._easeTypeFunc,
						Handler.create(this,this.__tweenComplete));
						this._tweener.update=Handler.create(this,this.__tweenUpdate,null,false);
					}
				}
				else {
					if(this._tweener!=null)
						this.killTween();
					if(this.isDragged){
						this._xOffset+=this._container.x-(-contentXLoc);
						this._yOffset+=this._container.y-(-contentYLoc);
					}
					this._container.pos(-contentXLoc,-contentYLoc);
					if(this.isDragged){
						this._y1=this._y2=this._container.y;
						this._x1=this._x2=this._container.x;
					}
					if(this._vtScrollBar)
						this._vtScrollBar.scrollPerc=this._yPerc;
					if(this._hzScrollBar)
						this._hzScrollBar.scrollPerc=this._xPerc;
				}
			}

			__proto.syncPos=function(){
				if(this._xOverlap>0){
					this._xPos=ToolSet.clamp(-this._container.x,0,this._xOverlap);
					this._xPerc=this._xPos / this._xOverlap;
				}
				if(this._yOverlap>0){
					this._yPos=ToolSet.clamp(-this._container.y,0,this._yOverlap);
					this._yPerc=this._yPos / this._yOverlap;
				}
			}

			__proto.syncScrollBar=function(end){
				(end===void 0)&& (end=false);
				if(end){
					if(this._vtScrollBar){
						if(this._scrollBarDisplayAuto)
							this.showScrollBar(false);
					}
					if(this._hzScrollBar){
						if(this._scrollBarDisplayAuto)
							this.showScrollBar(false);
					}
					this._maskContainer.mouseEnabled=true;
				}
				else{
					if(this._vtScrollBar){
						this._vtScrollBar.scrollPerc=this._yOverlap==0 ? 0 :ToolSet.clamp(-this._container.y,0,this._yOverlap)/ this._yOverlap;
						if(this._scrollBarDisplayAuto)
							this.showScrollBar(true);
					}
					if(this._hzScrollBar){
						this._hzScrollBar.scrollPerc=this._xOverlap==0 ? 0 :ToolSet.clamp(-this._container.x,0,this._xOverlap)/ this._xOverlap;
						if(this._scrollBarDisplayAuto)
							this.showScrollBar(true);
					}
				}
			}

			__proto.__mouseDown=function(){
				if (!this._touchEffect)
					return;
				if(this._tweener!=null)
					this.killTween();
				this._owner.globalToLocal(Laya.stage.mouseX,Laya.stage.mouseY,fairygui.ScrollPane.sHelperPoint);
				this._x1=this._x2=this._container.x;
				this._y1=this._y2=this._container.y;
				this._xOffset=fairygui.ScrollPane.sHelperPoint.x-this._container.x;
				this._yOffset=fairygui.ScrollPane.sHelperPoint.y-this._container.y;
				this._time1=this._time2=Laya.timer.currTimer;
				this._holdAreaPoint.x=fairygui.ScrollPane.sHelperPoint.x;
				this._holdAreaPoint.y=fairygui.ScrollPane.sHelperPoint.y;
				this._isHoldAreaDone=false;
				this.isDragged=false;
				this._owner.displayObject.stage.on("mousemove",this,this.__mouseMove);
				this._owner.displayObject.stage.on("mouseup",this,this.__mouseUp);
				this._owner.displayObject.stage.on("click",this,this.__click);
			}

			__proto.__mouseMove=function(){
				if(!this._touchEffect)
					return;
				if (ScrollPane.draggingPane !=null && ScrollPane.draggingPane !=this || GObject.draggingObject !=null)
					return;
				var sensitivity=UIConfig1.touchScrollSensitivity;
				var pt=this._owner.globalToLocal(Laya.stage.mouseX,Laya.stage.mouseY,fairygui.ScrollPane.sHelperPoint);
				var diff=NaN,diff2=NaN;
				var sv=false,sh=false,st=false;
				if (this._scrollType==1){
					if (!this._isHoldAreaDone){
						ScrollPane._gestureFlag |=1;
						diff=Math.abs(this._holdAreaPoint.y-this._maskContainer.mouseY);
						if (diff < sensitivity)
							return;
						if ((ScrollPane._gestureFlag & 2)!=0){
							diff2=Math.abs(this._holdAreaPoint.x-this._maskContainer.mouseX);
							if (diff < diff2)
								return;
						}
					}
					sv=true;
				}
				else if (this._scrollType==0){
					if (!this._isHoldAreaDone){
						ScrollPane._gestureFlag |=2;
						diff=Math.abs(this._holdAreaPoint.x-this._maskContainer.mouseX);
						if (diff < sensitivity)
							return;
						if ((ScrollPane._gestureFlag & 1)!=0){
							diff2=Math.abs(this._holdAreaPoint.y-this._maskContainer.mouseY);
							if (diff < diff2)
								return;
						}
					}
					sh=true;
				}
				else{
					ScrollPane._gestureFlag=3;
					if (!this._isHoldAreaDone){
						diff=Math.abs(this._holdAreaPoint.y-this._maskContainer.mouseY);
						if (diff < sensitivity){
							diff=Math.abs(this._holdAreaPoint.x-this._maskContainer.mouseX);
							if (diff < sensitivity)
								return;
						}
					}
					sv=sh=true;
				};
				var t=Laya.timer.currTimer;
				if (t-this._time2 > 50){
					this._time2=this._time1;
					this._time1=t;
					st=true;
				}
				if (sv){
					var y=Math.floor(pt.y-this._yOffset);
					if (y > 0){
						if (!this._bouncebackEffect || this._inertiaDisabled)
							this._container.y=0;
						else
						this._container.y=Math.floor(y *0.5);
					}
					else if (y <-this._yOverlap){
						if (!this._bouncebackEffect || this._inertiaDisabled)
							this._container.y=-Math.floor(this._yOverlap);
						else
						this._container.y=Math.floor((y-this._yOverlap)*0.5);
					}
					else {
						this._container.y=y;
					}
					if (st){
						this._y2=this._y1;
						this._y1=this._container.y;
					}
				}
				if (sh){
					var x=Math.floor(pt.x-this._xOffset);
					if (x > 0){
						if (!this._bouncebackEffect || this._inertiaDisabled)
							this._container.x=0;
						else
						this._container.x=Math.floor(x *0.5);
					}
					else if (x < 0-this._xOverlap || this._inertiaDisabled){
						if (!this._bouncebackEffect)
							this._container.x=-Math.floor(this._xOverlap);
						else
						this._container.x=Math.floor((x-this._xOverlap)*0.5);
					}
					else {
						this._container.x=x;
					}
					if (st){
						this._x2=this._x1;
						this._x1=this._container.x;
					}
				}
				ScrollPane.draggingPane=this;
				this._maskContainer.mouseEnabled=false;
				this._isHoldAreaDone=true;
				this.isDragged=true;
				this.syncPos();
				this.syncScrollBar();
				Events.dispatch("fui_scroll",this._owner.displayObject);
			}

			__proto.__mouseUp=function(){
				this._owner.displayObject.stage.off("mousemove",this,this.__mouseMove);
				this._owner.displayObject.stage.off("mouseup",this,this.__mouseUp);
				this._owner.displayObject.stage.off("click",this,this.__click);
				if (!this._touchEffect){
					this.isDragged=false;
					return;
				}
				if (ScrollPane.draggingPane==this)
					ScrollPane.draggingPane=null;
				ScrollPane._gestureFlag=0;
				if (!this.isDragged || !this._touchEffect || this._inertiaDisabled){
					this.isDragged=false;
					return;
				}
				this.isDragged=false;
				var time=(Laya.timer.currTimer-this._time2)/ 1000;
				if (time==0)
					time=0.001;
				var yVelocity=(this._container.y-this._y2)/ time *2 *UIConfig1.defaultTouchScrollSpeedRatio;;
				var xVelocity=(this._container.x-this._x2)/ time *2 *UIConfig1.defaultTouchScrollSpeedRatio;;
				var duration=0.3;
				this._tweenHelper.start.x=this._container.x;
				this._tweenHelper.start.y=this._container.y;
				var change1=this._tweenHelper.change1;
				var change2=this._tweenHelper.change2;
				var endX=0;
				var endY=0;
				var page=0;
				var delta=0;
				var fireRelease=0;
				var testPageSize=NaN;
				if(this._scrollType==2 || this._scrollType==0){
					if (this._container.x > UIConfig1.touchDragSensitivity)
						fireRelease=1;
					else if (this._container.x <-this._xOverlap-UIConfig1.touchDragSensitivity)
					fireRelease=2;
					change1.x=TweenHelper.calculateChange(xVelocity,duration);
					change2.x=0;
					endX=this._container.x+change1.x;
					if(this._pageMode && endX<0 && endX>-this._xOverlap){
						page=Math.floor(-endX / this._pageSizeH);
						testPageSize=Math.min(this._pageSizeH,this._contentWidth-(page+1)*this._pageSizeH);
						delta=-endX-page*this._pageSizeH;
						if (Math.abs(change1.x)> this._pageSizeH){
							if (delta > testPageSize *0.5)
								page++;
						}
						else{
							if (delta > testPageSize *(change1.x < 0 ? 0.3 :0.7))
								page++;
						}
						endX=-page *this._pageSizeH;
						if (endX <-this._xOverlap)
							endX=-this._xOverlap;
						change1.x=endX-this._container.x;
					}
				}
				else
				change1.x=change2.x=0;
				if(this._scrollType==2 || this._scrollType==1){
					if (this._container.y > UIConfig1.touchDragSensitivity)
						fireRelease=1;
					else if (this._container.y <-this._yOverlap-UIConfig1.touchDragSensitivity)
					fireRelease=2;
					change1.y=TweenHelper.calculateChange(yVelocity,duration);
					change2.y=0;
					endY=this._container.y+change1.y;
					if(this._pageMode && endY < 0 && endY >-this._yOverlap){
						page=Math.floor(-endY / this._pageSizeV);
						testPageSize=Math.min(this._pageSizeV,this._contentHeight-(page+1)*this._pageSizeV);
						delta=-endY-page *this._pageSizeV;
						if (Math.abs(change1.y)> this._pageSizeV){
							if (delta > testPageSize *0.5)
								page++;
						}
						else{
							if (delta > testPageSize *(change1.y < 0 ? 0.3 :0.7))
								page++;
						}
						endY=-page *this._pageSizeV;
						if (endY <-this._yOverlap)
							endY=-this._yOverlap;
						change1.y=endY-this._container.y;
					}
				}
				else
				change1.y=change2.y=0;
				if (this._snapToItem && !this._pageMode){
					endX=-endX;
					endY=-endY;
					var pt=this._owner.getSnappingPosition(endX,endY,fairygui.ScrollPane.sHelperPoint);
					endX=-pt.x;
					endY=-pt.y;
					change1.x=endX-this._container.x;
					change1.y=endY-this._container.y;
				}
				if(this._bouncebackEffect){
					if(endX > 0)
						change2.x=0-this._container.x-change1.x;
					else if(endX <-this._xOverlap)
					change2.x=-this._xOverlap-this._container.x-change1.x;
					if(endY > 0)
						change2.y=0-this._container.y-change1.y;
					else if(endY <-this._yOverlap)
					change2.y=-this._yOverlap-this._container.y-change1.y;
				}
				else {
					if(endX > 0)
						change1.x=0-this._container.x;
					else if(endX <-this._xOverlap)
					change1.x=-this._xOverlap-this._container.x;
					if(endY > 0)
						change1.y=0-this._container.y;
					else if(endY <-this._yOverlap)
					change1.y=-this._yOverlap-this._container.y;
				}
				this._tweenHelper.value=0;
				this._tweenHelper.change1=change1;
				this._tweenHelper.change2=change2;
				if(this._tweener!=null)
					this.killTween();
				this._tweening=2;
				this._tweener=Tween.to(this._tweenHelper,{value:1 },
				duration *1000,
				fairygui.ScrollPane._easeTypeFunc,
				Handler.create(this,this.__tweenComplete2));
				this._tweener.update=Handler.create(this,this.__tweenUpdate2,null,false);
				if (fireRelease==1)
					Events.dispatch("fui_pull_down_release",this._owner.displayObject);
				else if (fireRelease==2)
				Events.dispatch("fui_pull_up_release",this._owner.displayObject);
			}

			__proto.__click=function(){
				this.isDragged=false;
			}

			__proto.__mouseWheel=function(evt){
				if(!this._mouseWheelEnabled)
					return;
				var pt=this._owner.globalToLocal(Laya.stage.mouseX,Laya.stage.mouseY,fairygui.ScrollPane.sHelperPoint);
				var delta=evt["delta"];
				if (this._xOverlap > 0 && this._yOverlap==0){
					if(delta<0)
						this.setPercX(this._xPerc+this.getDeltaX(this._mouseWheelSpeed),false);
					else
					this.setPercX(this._xPerc-this.getDeltaX(this._mouseWheelSpeed),false);
				}
				else {
					if(delta<0)
						this.setPercY(this._yPerc+this.getDeltaY(this._mouseWheelSpeed),false);
					else
					this.setPercY(this._yPerc-this.getDeltaY(this._mouseWheelSpeed),false);
				}
			}

			__proto.__rollOver=function(){
				this.showScrollBar(true);
			}

			__proto.__rollOut=function(){
				this.showScrollBar(false);
			}

			__proto.showScrollBar=function(val){
				if (val){
					this.__showScrollBar(true);
					Laya.timer.clear(this,this.__showScrollBar);
				}
				else
				Laya.timer.once(500,this,this.__showScrollBar,[val]);
			}

			__proto.__showScrollBar=function(val){
				this._scrollBarVisible=val && this._viewWidth > 0 && this._viewHeight > 0;
				if (this._vtScrollBar)
					this._vtScrollBar.displayObject.visible=this._scrollBarVisible && !this._vScrollNone;
				if (this._hzScrollBar)
					this._hzScrollBar.displayObject.visible=this._scrollBarVisible && !this._hScrollNone;
			}

			__proto.__tweenUpdate=function(){
				this.syncScrollBar();
				Events.dispatch("fui_scroll",this._owner.displayObject);
			}

			__proto.__tweenComplete=function(){
				this._tweener=null;
				this._tweening=0;
				this.validateHolderPos();
				this.syncScrollBar(true);
				Events.dispatch("fui_scroll",this._owner.displayObject);
			}

			__proto.__tweenUpdate2=function(){
				this._container.pos(Math.floor(this._tweenHelper.start.x+this._tweenHelper.change1.x *this._tweenHelper.value
				+this._tweenHelper.change2.x *this._tweenHelper.value *this._tweenHelper.value),
				Math.floor(this._tweenHelper.start.y+this._tweenHelper.change1.y *this._tweenHelper.value
				+this._tweenHelper.change2.y *this._tweenHelper.value *this._tweenHelper.value));
				this.syncPos();
				this.syncScrollBar();
				Events.dispatch("fui_scroll",this._owner.displayObject);
			}

			__proto.__tweenComplete2=function(){
				this._tweener=null;
				this._tweening=0;
				this.validateHolderPos();
				this.syncPos();
				this.syncScrollBar(true);
				Events.dispatch("fui_scroll",this._owner.displayObject);
				Events.dispatch("fui_scroll_end",this._owner.displayObject);
			}

			__getset(0,__proto,'viewWidth',function(){
				return this._viewWidth;
				},function(value){
				value=value+this._owner.margin.left+this._owner.margin.right;
				if (this._vtScrollBar !=null)
					value+=this._vtScrollBar.width;
				this._owner.width=value;
			});

			__getset(0,__proto,'owner',function(){
				return this._owner;
			});

			__getset(0,__proto,'percY',function(){
				return this._yPerc;
				},function(value){
				this.setPercY(value,false);
			});

			__getset(0,__proto,'scrollSpeed',function(){
				return this._scrollSpeed;
				},function(val){
				this._scrollSpeed=this.scrollSpeed;
				if (this._scrollSpeed==0)
					this._scrollSpeed=UIConfig1.defaultScrollSpeed;
				this._mouseWheelSpeed=this._scrollSpeed *2;
			});

			__getset(0,__proto,'percX',function(){
				return this._xPerc;
				},function(value){
				this.setPercX(value,false);
			});

			__getset(0,__proto,'bouncebackEffect',function(){
				return this._bouncebackEffect;
				},function(sc){
				this._bouncebackEffect=sc;
			});

			__getset(0,__proto,'isBottomMost',function(){
				return this._yPerc==1 || this._yOverlap==0;
			});

			__getset(0,__proto,'touchEffect',function(){
				return this._touchEffect;
				},function(sc){
				this._touchEffect=sc;
			});

			__getset(0,__proto,'viewHeight',function(){
				return this._viewHeight;
				},function(value){
				value=value+this._owner.margin.top+this._owner.margin.bottom;
				if (this._hzScrollBar !=null)
					value+=this._hzScrollBar.height;
				this._owner.height=value;
			});

			__getset(0,__proto,'snapToItem',function(){
				return this._snapToItem;
				},function(value){
				this._snapToItem=value;
			});

			__getset(0,__proto,'posX',function(){
				return this._xPos;
				},function(value){
				this.setPosX(value,false);
			});

			__getset(0,__proto,'posY',function(){
				return this._yPos;
				},function(value){
				this.setPosY(value,false);
			});

			__getset(0,__proto,'isRightMost',function(){
				return this._xPerc==1 || this._xOverlap==0;
			});

			__getset(0,__proto,'currentPageX',function(){
				return this._pageMode ? Math.floor(this.posX / this._pageSizeH):0;
				},function(value){
				if(this._pageMode && this._xOverlap>0)
					this.setPosX(value *this._pageSizeH,false);
			});

			__getset(0,__proto,'currentPageY',function(){
				return this._pageMode ? Math.floor(this.posY / this._pageSizeV):0;
				},function(value){
				if(this._pageMode && this._yOverlap>0)
					this.setPosY(value *this._pageSizeV,false);
			});

			__getset(0,__proto,'scrollingPosX',function(){
				return ToolSet.clamp(-this._container.x,0,this._xOverlap);
			});

			__getset(0,__proto,'scrollingPosY',function(){
				return ToolSet.clamp(-this._container.y,0,this._yOverlap);
			});

			__getset(0,__proto,'contentWidth',function(){
				return this._contentWidth;
			});

			__getset(0,__proto,'contentHeight',function(){
				return this._contentHeight;
			});

			ScrollPane._easeTypeFunc=null
			ScrollPane.draggingPane=null
			ScrollPane._gestureFlag=0;
			__static(ScrollPane,
			['sHelperRect',function(){return this.sHelperRect=new Rectangle();},'sHelperPoint',function(){return this.sHelperPoint=new Point();}
			]);
			ScrollPane.__init$=function(){
				//class TweenHelper
				TweenHelper=(function(){
					function TweenHelper(){
						this.value=NaN;
						this.start=null;
						this.change1=null;
						this.change2=null;
						this.start=new Point();
						this.change1=new Point();
						this.change2=new Point();
					}
					__class(TweenHelper,'');
					TweenHelper.calculateChange=function(velocity,duration){
						return (duration *TweenHelper.checkpoint *velocity)/ TweenHelper.easeOutCubic(TweenHelper.checkpoint,0,1,1);
					}
					TweenHelper.easeOutCubic=function(t,b,c,d){
						return c *((t=t / d-1)*t *t+1)+b;
					}
					TweenHelper.checkpoint=0.05;
					return TweenHelper;
				})()
			}

			return ScrollPane;
		})()


		//class fairygui.ScrollType
		var ScrollType=(function(){
			function ScrollType(){}
			__class(ScrollType,'fairygui.ScrollType');
			ScrollType.parse=function(value){
				switch (value){
					case "horizontal":
						return 0;
					case "vertical":
						return 1;
					case "both":
						return 2;
					default :
						return 1;
					}
			}

			ScrollType.Horizontal=0;
			ScrollType.Vertical=1;
			ScrollType.Both=2;
			return ScrollType;
		})()


		//class fairygui.Transition
		var Transition=(function(){
			var TransitionActionType,TransitionItem,TransitionValue;
			function Transition(owner){
				this.name=null;
				this.autoPlayRepeat=1;
				this.autoPlayDelay=0;
				this._owner=null;
				this._ownerBaseX=0;
				this._ownerBaseY=0;
				this._items=null;
				this._totalTimes=0;
				this._totalTasks=0;
				this._playing=false;
				this._onComplete=null;
				this._options=0;
				this._reversed=false;
				this._maxTime=0;
				this._autoPlay=false;
				this.OPTION_IGNORE_DISPLAY_CONTROLLER=1;
				this.FRAME_RATE=24;
				this._owner=owner;
				this._items=[];
			}

			__class(Transition,'fairygui.Transition');
			var __proto=Transition.prototype;
			__proto.play=function(onComplete,times,delay){
				(times===void 0)&& (times=1);
				(delay===void 0)&& (delay=0);
				this._play(onComplete,times,delay,false);
			}

			__proto.playReverse=function(onComplete,times,delay){
				(times===void 0)&& (times=1);
				(delay===void 0)&& (delay=0);
				this._play(onComplete,times,delay,true);
			}

			__proto._play=function(onComplete,times,delay,reversed){
				(times===void 0)&& (times=1);
				(delay===void 0)&& (delay=0);
				(reversed===void 0)&& (reversed=false);
				this.stop();
				if(times==0)
					times=1;
				else if(times==-1)
				times=Number.MAX_VALUE;
				this._totalTimes=times;
				this._reversed=reversed;
				this.internalPlay(delay);
				this._playing=this._totalTasks > 0;
				if(this._playing){
					this._onComplete=onComplete;
					this._owner.internalVisible++;
					if((this._options & this.OPTION_IGNORE_DISPLAY_CONTROLLER)!=0){
						var cnt=this._items.length;
						for(var i=0;i < cnt;i++){
							var item=this._items[i];
							if(item.target !=null && item.target !=this._owner)
								item.target.internalVisible++;
						}
					}
				}
				else if(onComplete !=null){
					onComplete.run();
				}
			}

			__proto.stop=function(setToComplete,processCallback){
				(setToComplete===void 0)&& (setToComplete=true);
				(processCallback===void 0)&& (processCallback=false);
				if(this._playing){
					this._playing=false;
					this._totalTasks=0;
					this._totalTimes=0;
					var handler=this._onComplete;
					this._onComplete=null;
					this._owner.internalVisible--;
					var cnt=this._items.length;
					var i=NaN;
					var item;
					if(this._reversed){
						for(i=cnt-1;i>=0;i--){
							item=this._items[i];
							if(item.target==null)
								continue ;
							this.stopItem(item,setToComplete);
						}
					}
					else {
						for(i=0;i < cnt;i++){
							item=this._items[i];
							if(item.target==null)
								continue ;
							this.stopItem(item,setToComplete);
						}
					}
					if(processCallback && handler !=null){
						handler.run();
					}
				}
			}

			__proto.stopItem=function(item,setToComplete){
				if ((this._options & this.OPTION_IGNORE_DISPLAY_CONTROLLER)!=0 && item.target !=this._owner)
					item.target.internalVisible--;
				if (item.type==12 && item.filterCreated)
					item.target.filters=null;
				if(item.completed)
					return;
				if(item.tweener !=null){
					item.tweener.clear();
					item.tweener=null;
				}
				if(item.type==10){
					var trans=(item.target).getTransition(item.value.s);
					if(trans !=null)
						trans.stop(setToComplete,false);
				}
				else if(item.type==11){
					Laya.timer.clear(item,item.__shake);
					item.target._gearLocked=true;
					item.target.setXY(item.target.x-item.startValue.f1,item.target.y-item.startValue.f2);
					item.target._gearLocked=false;
				}
				else {
					if(setToComplete){
						if(item.tween){
							if(!item.yoyo || item.repeat % 2==0)
								this.applyValue(item,this._reversed?item.startValue:item.endValue);
							else
							this.applyValue(item,this._reversed?item.endValue:item.startValue);
						}
						else if(item.type !=9)
						this.applyValue(item,item.value);
					}
				}
			}

			__proto.dispose=function(){
				if (!this._playing)
					return;
				this._playing=false;
				var cnt=this._items.length;
				for (var i=0;i < cnt;i++){
					var item=this._items[i];
					if (item.target==null || item.completed)
						continue ;
					if (item.tweener !=null){
						item.tweener.clear();
						item.tweener=null;
					}
					if (item.type==10){
						var trans=(item.target).getTransition(item.value.s);
						if (trans !=null)
							trans.dispose();
					}
					else if (item.type==11){
						Laya.timer.clear(item,item.__shake);
					}
				}
			}

			__proto.setValue=function(label,__args){
				var args=[];for(var i=1,sz=arguments.length;i<sz;i++)args.push(arguments[i]);
				var cnt=this._items.length;
				var value;
				for(var i=0;i < cnt;i++){
					var item=this._items[i];
					if(item.label==null && item.label2==null)
						continue ;
					if(item.label==label){
						if(item.tween)
							value=item.startValue;
						else
						value=item.value;
					}
					else if(item.label2==label){
						value=item.endValue;
					}
					else
					continue ;
					switch(item.type){
						case 0:
						case 1:
						case 3:
						case 2:
						case 13:
							value.b1=true;
							value.b2=true;
							value.f1=parseFloat(args[0]);
							value.f2=parseFloat(args[1]);
							break ;
						case 4:
							value.f1=parseFloat(args[0]);
							break ;
						case 5:
							value.i=parseInt(args[0]);
							break ;
						case 6:
							value.s=args[0];
							break ;
						case 7:
							value.i=parseInt(args[0]);
							if(args.length > 1)
								value.b=args[1];
							break ;
						case 8:
							value.b=args[0];
							break ;
						case 9:
							value.s=args[0];
							if(args.length > 1)
								value.f1=parseFloat(args[1]);
							break ;
						case 10:
							value.s=args[0];
							if(args.length > 1)
								value.i=parseInt(args[1]);
							break ;
						case 11:
							value.f1=parseFloat(args[0]);
							if(args.length > 1)
								value.f2=parseFloat(args[1]);
							break ;
						case 12:
							value.f1=parseFloat(args[0]);
							value.f2=parseFloat(args[1]);
							value.f3=parseFloat(args[2]);
							value.f4=parseFloat(args[3]);
							break ;
						}
				}
			}

			__proto.setHook=function(label,callback){
				var cnt=this._items.length;
				for(var i=0;i < cnt;i++){
					var item=this._items[i];
					if(item.label==label){
						item.hook=callback;
						break ;
					}
					else if(item.label2==label){
						item.hook2=callback;
						break ;
					}
				}
			}

			__proto.clearHooks=function(){
				var cnt=this._items.length;
				for(var i=0;i < cnt;i++){
					var item=this._items[i];
					item.hook=null;
					item.hook2=null;
				}
			}

			__proto.setTarget=function(label,newTarget){
				var cnt=this._items.length;
				for (var i=0;i < cnt;i++){
					var item=this._items[i];
					if (item.label==label)
						item.targetId=newTarget.id;
				}
			}

			__proto.setDuration=function(label,value){
				var cnt=this._items.length;
				for (var i=0;i < cnt;i++){
					var item=this._items[i];
					if (item.tween && item.label==label)
						item.duration=value;
				}
			}

			__proto.updateFromRelations=function(targetId,dx,dy){
				var cnt=this._items.length;
				if(cnt==0)
					return;
				for(var i=0;i < cnt;i++){
					var item=this._items[i];
					if(item.type==0 && item.targetId==targetId){
						if(item.tween){
							item.startValue.f1+=dx;
							item.startValue.f2+=dy;
							item.endValue.f1+=dx;
							item.endValue.f2+=dy;
						}
						else {
							item.value.f1+=dx;
							item.value.f2+=dy;
						}
					}
				}
			}

			__proto.internalPlay=function(delay){
				(delay===void 0)&& (delay=0);
				this._ownerBaseX=this._owner.x;
				this._ownerBaseY=this._owner.y;
				this._totalTasks=0;
				var cnt=this._items.length;
				var startTime=NaN;
				var item;
				for(var i=0;i < cnt;i++){
					item=this._items[i];
					if(item.targetId)
						item.target=this._owner.getChildById(item.targetId);
					else
					item.target=this._owner;
					if(item.target==null)
						continue ;
					if(item.tween){
						if(this._reversed)
							startTime=delay+this._maxTime-item.time-item.duration;
						else
						startTime=delay+item.time;
						if(startTime>0){
							this._totalTasks++;
							item.completed=false;
							item.tweener=Tween.to(item.value,{},startTime*1000,null,Handler.create(this,this.__delayCall,[item]));
							item.tweener.update=null;
						}
						else
						this.startTween(item);
					}
					else {
						if(this._reversed)
							startTime=delay+this._maxTime-item.time;
						else
						startTime=delay+item.time;
						if(startTime==0)
							this.applyValue(item,item.value);
						else {
							item.completed=false;
							this._totalTasks++;
							item.tweener=Tween.to(item.value,{},startTime*1000,null,Handler.create(this,this.__delayCall2,[item]));
							item.tweener.update=null;
						}
					}
				}
			}

			__proto.prepareValue=function(item,toProps,reversed){
				(reversed===void 0)&& (reversed=false);
				var startValue;
				var endValue;
				if(reversed){
					startValue=item.endValue;
					endValue=item.startValue;
				}
				else{
					startValue=item.startValue;
					endValue=item.endValue;
				}
				switch(item.type){
					case 0:
					case 1:
						if(item.type==0){
							if (item.target==this._owner){
								if(!startValue.b1)
									startValue.f1=0;
								if(!startValue.b2)
									startValue.f2=0;
							}
							else{
								if(!startValue.b1)
									startValue.f1=item.target.x;
								if(!startValue.b2)
									startValue.f2=item.target.y;
							}
						}
						else{
							if(!startValue.b1)
								startValue.f1=item.target.width;
							if(!startValue.b2)
								startValue.f2=item.target.height;
						}
						item.value.f1=startValue.f1;
						item.value.f2=startValue.f2;
						if(!endValue.b1)
							endValue.f1=item.value.f1;
						if(!endValue.b2)
							endValue.f2=item.value.f2;
						item.value.b1=startValue.b1 || endValue.b1;
						item.value.b2=startValue.b2 || endValue.b2;
						toProps.f1=endValue.f1;
						toProps.f2=endValue.f2;
						break ;
					case 2:
					case 13:
						item.value.f1=startValue.f1;
						item.value.f2=startValue.f2;
						toProps.f1=endValue.f1;
						toProps.f2=endValue.f2;
						break ;
					case 4:
						item.value.f1=startValue.f1;
						toProps.f1=endValue.f1;
						break ;
					case 5:
						item.value.i=startValue.i;
						toProps.i=endValue.i;
						break ;
					case 12:
						item.value.f1=startValue.f1;
						item.value.f2=startValue.f2;
						item.value.f3=startValue.f3;
						item.value.f4=startValue.f4;
						toProps.f1=endValue.f1;
						toProps.f2=endValue.f2;
						toProps.f3=endValue.f3;
						toProps.f4=endValue.f4;
						break ;
					}
				toProps.dummy=0;
			}

			__proto.startTween=function(item){
				var toProps={};
				this.prepareValue(item,toProps,this._reversed);
				this.applyValue(item,item.value);
				var completeHandler;
				if(item.repeat!=0){
					item.tweenTimes=0;
					completeHandler=Handler.create(this,this.__tweenRepeatComplete,[item]);
				}
				else
				completeHandler=Handler.create(this,this.__tweenComplete,[item]);
				this._totalTasks++;
				item.completed=false;
				item.tweener=Tween.to(item.value,
				toProps,
				item.duration*1000,
				item.easeType,
				completeHandler);
				item.tweener.update=Handler.create(this,this.__tweenUpdate,[item],false);
				if(item.hook !=null)
					item.hook.run();
			}

			__proto.__delayCall=function(item){
				item.tweener=null;
				this._totalTasks--;
				this.startTween(item);
			}

			__proto.__delayCall2=function(item){
				item.tweener=null;
				this._totalTasks--;
				item.completed=true;
				this.applyValue(item,item.value);
				if(item.hook !=null)
					item.hook.run();
				this.checkAllComplete();
			}

			__proto.__tweenUpdate=function(item){
				this.applyValue(item,item.value);
			}

			__proto.__tweenComplete=function(item){
				item.tweener=null;
				this._totalTasks--;
				item.completed=true;
				if(item.hook2 !=null)
					item.hook2.run();
				this.checkAllComplete();
			}

			__proto.__tweenRepeatComplete=function(item){
				item.tweenTimes++;
				if(item.repeat==-1 || item.tweenTimes < item.repeat+1){
					var toProps={};
					var reversed=false;
					if(item.yoyo){
						if(this._reversed)
							reversed=item.tweenTimes % 2==0;
						else
						reversed=item.tweenTimes % 2==1;
					}
					else
					reversed=this._reversed;
					this.prepareValue(item,toProps,reversed);
					item.tweener=Tween.to(item.value,
					toProps,
					item.duration *1000,
					item.easeType,
					Handler.create(this,this.__tweenRepeatComplete,[item]));
					item.tweener.update=Handler.create(this,this.__tweenUpdate,[item],false);
				}
				else
				this.__tweenComplete(item);
			}

			__proto.__playTransComplete=function(item){
				this._totalTasks--;
				item.completed=true;
				this.checkAllComplete();
			}

			__proto.checkAllComplete=function(){
				if(this._playing && this._totalTasks==0){
					if(this._totalTimes < 0){
						Laya.timer.callLater(this,this.internalPlay);
					}
					else {
						this._totalTimes--;
						if(this._totalTimes > 0)
							Laya.timer.callLater(this,this.internalPlay);
						else {
							this._playing=false;
							this._owner.internalVisible--;
							var cnt=this._items.length;
							for (var i=0;i < cnt;i++){
								var item=this._items[i];
								if (item.target !=null){
									if((this._options & this.OPTION_IGNORE_DISPLAY_CONTROLLER)!=0 && item.target!=this._owner)
										item.target.internalVisible--;
								}
								if (item.filterCreated){
									item.filterCreated=false;
									item.target.filters=null;
								}
							}
							if(this._onComplete !=null){
								var handler=this._onComplete;
								this._onComplete=null;
								handler.run();
							}
						}
					}
				}
			}

			__proto.applyValue=function(item,value){
				item.target._gearLocked=true;
				switch(item.type){
					case 0:
						if(item.target==this._owner){
							var f1=0,f2=0;
							if(!value.b1)
								f1=item.target.x;
							else
							f1=value.f1+this._ownerBaseX;
							if(!value.b2)
								f2=item.target.y;
							else
							f2=value.f2+this._ownerBaseY;
							item.target.setXY(f1,f2);
						}
						else {
							if(!value.b1)
								value.f1=item.target.x;
							if(!value.b2)
								value.f2=item.target.y;
							item.target.setXY(value.f1,value.f2);
						}
						break ;
					case 1:
						if(!value.b1)
							value.f1=item.target.width;
						if(!value.b2)
							value.f2=item.target.height;
						item.target.setSize(value.f1,value.f2);
						break ;
					case 3:
						item.target.setPivot(value.f1,value.f2);
						break ;
					case 4:
						item.target.alpha=value.f1;
						break ;
					case 5:
						item.target.rotation=value.i;
						break ;
					case 2:
						item.target.setScale(value.f1,value.f2);
						break ;
					case 13:
						item.target.setSkew(value.f1,value.f2);
						break ;
					case 6:
						(item.target).color=value.s;
						break ;
					case 7:
						if(!value.b1)
							value.i=(item.target).frame;
						(item.target).frame=value.i;
						(item.target).playing=value.b;
						break ;
					case 8:
						item.target.visible=value.b;
						break ;
					case 10:;
						var trans=(item.target).getTransition(value.s);
						if(trans !=null){
							if(value.i==0)
								trans.stop(false,true);
							else if(trans.playing)
							trans._totalTimes=value.i==-1?Number.MAX_VALUE:value.i;
							else {
								item.completed=false;
								this._totalTasks++;
								if(this._reversed)
									trans.playReverse(Handler.create(this,this.__playTransComplete,[item]),item.value.i);
								else
								trans.play(Handler.create(this,this.__playTransComplete,[item]),item.value.i);
							}
						}
						break ;
					case 9:;
						var pi=UIPackage.getItemByURL(value.s);
						if(pi)
							GRoot.inst.playOneShotSound(pi.owner.getItemAssetURL(pi));
						else
						GRoot.inst.playOneShotSound(value.s);
						break ;
					case 11:
						item.startValue.f1=0;
						item.startValue.f2=0;
						item.startValue.f3=item.value.f2;
						item.startValue.i=Laya.timer.currTimer;
						Laya.timer.frameLoop(1,item,item.__shake,[this]);
						this._totalTasks++;
						item.completed=false;
						break ;
					case 12:;
						var arr=item.target.filters;
						if(!arr || !(((arr[0])instanceof laya.filters.ColorFilter )))
							item.filterCreated=true;
						var cm=new ColorMatrix();
						cm.adjustBrightness(value.f1);
						cm.adjustContrast(value.f2);
						cm.adjustSaturation(value.f3);
						cm.adjustHue(value.f4);
						arr=[new ColorFilter(cm)];
						item.target.filters=arr;
						break ;
					}
				item.target._gearLocked=false;
			}

			__proto.__shakeItem=function(item){
				var r=Math.ceil(item.value.f1 *item.startValue.f3 / item.value.f2);
				var rx=(Math.random()*2-1)*r;
				var ry=(Math.random()*2-1)*r;
				rx=rx > 0 ? Math.ceil(rx):Math.floor(rx);
				ry=ry > 0 ? Math.ceil(ry):Math.floor(ry);
				item.target._gearLocked=true;
				item.target.setXY(item.target.x-item.startValue.f1+rx,item.target.y-item.startValue.f2+ry);
				item.target._gearLocked=false;
				item.startValue.f1=rx;
				item.startValue.f2=ry;
				var t=Laya.timer.currTimer;
				item.startValue.f3-=(t-item.startValue.i)/ 1000;
				item.startValue.i=t;
				if(item.startValue.f3 <=0){
					item.target._gearLocked=true;
					item.target.setXY(item.target.x-item.startValue.f1,item.target.y-item.startValue.f2);
					item.target._gearLocked=false;
					item.completed=true;
					this._totalTasks--;
					Laya.timer.clear(item,item.__shake);
					this.checkAllComplete();
				}
			}

			__proto.setup=function(xml){
				this.name=xml.getAttribute("name");
				var str=xml.getAttribute("options");
				if(str)
					this._options=parseInt(str);
				str=xml.getAttribute("autoPlay");
				if(str)
					this._autoPlay=str=="true";
				if(this._autoPlay){
					str=xml.getAttribute("autoPlayRepeat");
					if(str)
						this.autoPlayRepeat=parseInt(str);
					str=xml.getAttribute("autoPlayDelay");
					if(str)
						this.autoPlayDelay=parseFloat(str);
				};
				var col=xml.childNodes;
				var length1=col.length;
				for(var i1=0;i1 < length1;i1++){
					var cxml=col[i1];
					if(cxml.nodeName!="item")
						continue ;
					var item=new TransitionItem();
					this._items.push(item);
					item.time=parseInt(cxml.getAttribute("time"))/ this.FRAME_RATE;
					item.targetId=cxml.getAttribute("target");
					str=cxml.getAttribute("type");
					switch(str){
						case "XY":
							item.type=0;
							break ;
						case "Size":
							item.type=1;
							break ;
						case "Scale":
							item.type=2;
							break ;
						case "Pivot":
							item.type=3;
							break ;
						case "Alpha":
							item.type=4;
							break ;
						case "Rotation":
							item.type=5;
							break ;
						case "Color":
							item.type=6;
							break ;
						case "Animation":
							item.type=7;
							break ;
						case "Visible":
							item.type=8;
							break ;
						case "Sound":
							item.type=9;
							break ;
						case "Transition":
							item.type=10;
							break ;
						case "Shake":
							item.type=11;
							break ;
						case "ColorFilter":
							item.type=12;
							break ;
						case "Skew":
							item.type=13;
							break ;
						default :
							item.type=14;
							break ;
						}
					item.tween=cxml.getAttribute("tween")=="true";
					item.label=cxml.getAttribute("label");
					if(item.tween){
						item.duration=parseInt(cxml.getAttribute("duration"))/ this.FRAME_RATE;
						if(item.time+item.duration > this._maxTime)
							this._maxTime=item.time+item.duration;
						str=cxml.getAttribute("ease");
						if(str)
							item.easeType=ToolSet.parseEaseType(str);
						str=cxml.getAttribute("repeat");
						if(str)
							item.repeat=parseInt(str);
						item.yoyo=cxml.getAttribute("yoyo")=="true";
						item.label2=cxml.getAttribute("label2");
						var v=cxml.getAttribute("endValue");
						if(v){
							this.decodeValue(item.type,cxml.getAttribute("startValue"),item.startValue);
							this.decodeValue(item.type,v,item.endValue);
						}
						else {
							item.tween=false;
							this.decodeValue(item.type,cxml.getAttribute("startValue"),item.value);
						}
					}
					else {
						if(item.time > this._maxTime)
							this._maxTime=item.time;
						this.decodeValue(item.type,cxml.getAttribute("value"),item.value);
					}
				}
			}

			__proto.decodeValue=function(type,str,value){
				var arr;
				switch(type){
					case 0:
					case 1:
					case 3:
					case 13:
						arr=str.split(",");
						if(arr[0]=="-"){
							value.b1=false;
						}
						else {
							value.f1=parseFloat(arr[0]);
							value.b1=true;
						}
						if(arr[1]=="-"){
							value.b2=false;
						}
						else {
							value.f2=parseFloat(arr[1]);
							value.b2=true;
						}
						break ;
					case 4:
						value.f1=parseFloat(str);
						break ;
					case 5:
						value.i=parseInt(str);
						break ;
					case 2:
						arr=str.split(",");
						value.f1=parseFloat(arr[0]);
						value.f2=parseFloat(arr[1]);
						break ;
					case 6:
						value.s=str;
						break ;
					case 7:
						arr=str.split(",");
						if(arr[0]=="-"){
							value.b1=false;
						}
						else {
							value.i=parseInt(arr[0]);
							value.b1=true;
						}
						value.b=arr[1]=="p";
						break ;
					case 8:
						value.b=str=="true";
						break ;
					case 9:
						arr=str.split(",");
						value.s=arr[0];
						if(arr.length > 1){
							var intv=parseInt(arr[1]);
							if(intv==0 || intv==100)
								value.f1=1;
							else
							value.f1=intv / 100;
						}
						else
						value.f1=1;
						break ;
					case 10:
						arr=str.split(",");
						value.s=arr[0];
						if(arr.length > 1)
							value.i=parseInt(arr[1]);
						else
						value.i=1;
						break ;
					case 11:
						arr=str.split(",");
						value.f1=parseFloat(arr[0]);
						value.f2=parseFloat(arr[1]);
						break ;
					case 12:
						arr=str.split(",");
						value.f1=parseFloat(arr[0]);
						value.f2=parseFloat(arr[1]);
						value.f3=parseFloat(arr[2]);
						value.f4=parseFloat(arr[3]);
						break ;
					}
			}

			__getset(0,__proto,'autoPlay',function(){
				return this._autoPlay;
				},function(value){
				if (this._autoPlay !=value){
					this._autoPlay=value;
					if (this._autoPlay){
						if (this._owner.onStage)
							this.play(null,this.autoPlayRepeat,this.autoPlayDelay);
					}
					else{
						if (!this._owner.onStage)
							this.stop(false,true);
					}
				}
			});

			__getset(0,__proto,'playing',function(){
				return this._playing;
			});

			Transition.__init$=function(){
				//class TransitionActionType
				TransitionActionType=(function(){
					function TransitionActionType(){};
					__class(TransitionActionType,'');
					TransitionActionType.XY=0;
					TransitionActionType.Size=1;
					TransitionActionType.Scale=2;
					TransitionActionType.Pivot=3;
					TransitionActionType.Alpha=4;
					TransitionActionType.Rotation=5;
					TransitionActionType.Color=6;
					TransitionActionType.Animation=7;
					TransitionActionType.Visible=8;
					TransitionActionType.Sound=9;
					TransitionActionType.Transition=10;
					TransitionActionType.Shake=11;
					TransitionActionType.ColorFilter=12;
					TransitionActionType.Skew=13;
					TransitionActionType.Unknown=14;
					return TransitionActionType;
				})()
				//class TransitionItem
				TransitionItem=(function(){
					function TransitionItem(){
						this.time=0;
						this.targetId=null;
						this.type=0;
						this.duration=0;
						this.value=null;
						this.startValue=null;
						this.endValue=null;
						this.easeType=null;
						this.repeat=0;
						this.yoyo=false;
						this.tween=false;
						this.label=null;
						this.label2=null;
						this.hook=null;
						this.hook2=null;
						this.tweenTimes=0;
						this.tweener=null;
						this.completed=false;
						this.target=null;
						this.filterCreated=false;
						this.easeType=Ease.quadOut;
						this.value=new TransitionValue();
						this.startValue=new TransitionValue();
						this.endValue=new TransitionValue();
					}
					__class(TransitionItem,'');
					var __proto=TransitionItem.prototype;
					__proto.__shake=function(trans){
						trans.__shakeItem(this);
					}
					return TransitionItem;
				})()
				//class TransitionValue
				TransitionValue=(function(){
					function TransitionValue(){
						this.f1=0;
						this.f2=0;
						this.f3=0;
						this.f4=NaN;
						this.i=0;
						this.b=false;
						this.s=null;
						this.b1=true;
						this.b2=true;
					}
					__class(TransitionValue,'');
					return TransitionValue;
				})()
			}

			return Transition;
		})()


		//class fairygui.UIConfig
		var UIConfig1=(function(){
			function UIConfig(){}
			__class(UIConfig,'fairygui.UIConfig',null,'UIConfig1');
			UIConfig.defaultFont="宋体";
			UIConfig.windowModalWaiting=null
			UIConfig.globalModalWaiting=null
			UIConfig.modalLayerColor="rgba(33,33,33,0.2)";
			UIConfig.buttonSound=null
			UIConfig.buttonSoundVolumeScale=1;
			UIConfig.horizontalScrollBar=null
			UIConfig.verticalScrollBar=null
			UIConfig.defaultScrollSpeed=25;
			UIConfig.defaultTouchScrollSpeedRatio=1;
			UIConfig.defaultScrollBarDisplay=1;
			UIConfig.defaultScrollTouchEffect=true;
			UIConfig.defaultScrollBounceEffect=true;
			UIConfig.popupMenu=null
			UIConfig.popupMenu_seperator=null
			UIConfig.loaderErrorSign=null
			UIConfig.tooltipsWin=null
			UIConfig.defaultComboBoxVisibleItemCount=10;
			UIConfig.touchScrollSensitivity=20;
			UIConfig.touchDragSensitivity=10;
			UIConfig.clickDragSensitivity=2;
			UIConfig.bringWindowToFrontOnClick=true;
			UIConfig.frameTimeForAsyncUIConstruction=2;
			return UIConfig;
		})()


		//class fairygui.UIObjectFactory
		var UIObjectFactory=(function(){
			function UIObjectFactory(){}
			__class(UIObjectFactory,'fairygui.UIObjectFactory');
			UIObjectFactory.setPackageItemExtension=function(url,type){
				fairygui.UIObjectFactory.packageItemExtensions[url.substring(5)]=type;
			}

			UIObjectFactory.setLoaderExtension=function(type){
				fairygui.UIObjectFactory.loaderExtension=type;
			}

			UIObjectFactory.newObject=function(pi){
				switch (pi.type){
					case 0:
						return new GImage();
					case 2:
						return new GMovieClip();
					case 4:{
							var cls=fairygui.UIObjectFactory.packageItemExtensions[pi.owner.id+pi.id];
							if(cls)
								return new cls();
							var xml=pi.owner.getItemAsset(pi);
							var extention=xml.getAttribute("extention");
							if(extention !=null){
							switch(extention){
								case "Button":
									return new GButton();
								case "Label":
									return new GLabel();
								case "ProgressBar":
									return new GProgressBar();
								case "Slider":
									return new GSlider();
								case "ScrollBar":
									return new GScrollBar();
								case "ComboBox":
									return new GComboBox();
								default :
									return new GComponent();
								}
						}
						else
						return new GComponent();
					}
				}
				return null;
			}

			UIObjectFactory.newObject2=function(type){
				switch (type){
					case "image":
						return new GImage();
					case "movieclip":
						return new GMovieClip();
					case "component":
						return new GComponent();
					case "text":
						return new GBasicTextField();
					case "richtext":
						return new GRichTextField();
					case "inputtext":
						return new GTextInput();
					case "group":
						return new GGroup();
					case "list":
						return new GList();
					case "graph":
						return new GGraph();
					case "loader":
						if (fairygui.UIObjectFactory.loaderExtension !=null)
							return new fairygui.UIObjectFactory.loaderExtension();
						else
						return new GLoader();
					}
				return null;
			}

			UIObjectFactory.packageItemExtensions={};
			UIObjectFactory.loaderExtension=null
			return UIObjectFactory;
		})()


		//class fairygui.UIPackage
		var UIPackage=(function(){
			var AtlasSprite;
			function UIPackage(){
				this._id=null;
				this._name=null;
				this._basePath=null;
				this._items=null;
				this._itemsById=null;
				this._itemsByName=null;
				this._resKey=null;
				this._resData=null;
				this._customId=null;
				this._sprites=null;
				this._hitTestDatas=null;
				this._items=[];
				this._sprites={};
				this._hitTestDatas={};
			}

			__class(UIPackage,'fairygui.UIPackage');
			var __proto=UIPackage.prototype;
			__proto.create=function(resKey){
				this._resKey=resKey;
				this.loadPackage();
			}

			__proto.loadPackage=function(){
				var str;
				var arr;
				this.decompressPackage(AssetProxy.inst.getRes(this._resKey+".fui"));
				str=this.getDesc("sprites.bytes");
				arr=str.split("\n");
				var cnt=arr.length;
				for(var i=1;i < cnt;i++){
					str=arr[i];
					if(!str)
						continue ;
					var arr2=str.split(" ");
					var sprite=new AtlasSprite();
					var itemId=arr2[0];
					var binIndex=parseInt(arr2[1]);
					if(binIndex >=0)
						sprite.atlas="atlas"+binIndex;
					else {
						var pos=itemId.indexOf("_");
						if(pos==-1)
							sprite.atlas="atlas_"+itemId;
						else
						sprite.atlas="atlas_"+itemId.substr(0,pos);
					}
					sprite.rect.x=parseInt(arr2[2]);
					sprite.rect.y=parseInt(arr2[3]);
					sprite.rect.width=parseInt(arr2[4]);
					sprite.rect.height=parseInt(arr2[5]);
					sprite.rotated=arr2[6]=="1";
					this._sprites[itemId]=sprite;
				}
				str=this.getDesc("hittest.bytes");
				if(str!=null){
					var ba=new Byte(ToolSet.bs2a(str));
					ba.endian="bigEndian";
					while(ba.bytesAvailable){
						var hitTestData=new PixelHitTestData();
						this._hitTestDatas[ba.readUTFString()]=hitTestData;
						hitTestData.load(ba);
					}
				}
				str=this.getDesc("package.xml");
				var xml=Utils.parseXMLFromString(str);
				var rootNode=xml.firstChild;
				this._id=rootNode.getAttribute("id");
				this._name=rootNode.getAttribute("name");
				var resources=ToolSet.findChildNode(rootNode,"resources").childNodes;
				this._itemsById={};
				this._itemsByName={};
				var pi;
				var cxml;
				var length1=resources.length;
				for(var i1=0;i1 < length1;i1++){
					cxml=resources[i1];
					if(cxml.nodeType!=1)
						continue ;
					pi=new PackageItem();
					pi.type=PackageItemType.parse(cxml.nodeName);
					pi.id=cxml.getAttribute("id");
					pi.name=cxml.getAttribute("name");
					pi.file=cxml.getAttribute("file");
					str=cxml.getAttribute("size");
					if(str){
						arr=str.split(",");
						pi.width=parseInt(arr[0]);
						pi.height=parseInt(arr[1]);
					}
					switch(pi.type){
						case 0:{
								str=cxml.getAttribute("scale");
								if(str=="9grid"){
									pi.scale9Grid=new laya.maths.Rectangle();
									str=cxml.getAttribute("scale9grid");
									if(str){
										arr=str.split(",");
										pi.scale9Grid.x=parseInt(arr[0]);
										pi.scale9Grid.y=parseInt(arr[1]);
										pi.scale9Grid.width=parseInt(arr[2]);
										pi.scale9Grid.height=parseInt(arr[3]);
										str=cxml.getAttribute("gridTile");
										if(str)
											pi.tileGridIndice=parseInt(str);
									}
								}
								else if(str=="tile"){
									pi.scaleByTile=true;
								}
								str=cxml.getAttribute("smoothing");
								pi.smoothing=str !="false";
								break ;
							}
						}
					pi.owner=this;
					this._items.push(pi);
					this._itemsById[pi.id]=pi;
					if(pi.name !=null)
						this._itemsByName[pi.name]=pi;
				}
				cnt=this._items.length;
				for(i=0;i < cnt;i++){
					pi=this._items[i];
					if(pi.type==6){
						this.loadFont(pi);
						fairygui.UIPackage._bitmapFonts[pi.bitmapFont.id]=pi.bitmapFont;
					}
				}
			}

			__proto.decompressPackage=function(buf){
				this._resData={};
				var data;
				var inflater=new Zlib.RawInflate(buf);data=inflater.decompress();;
				var source=new Byte(data).readUTFBytes();
				var curr=0;
				var fn;
				var size=NaN;
				while(true){
					var pos=source.indexOf("|",curr);
					if(pos==-1)
						break ;
					fn=source.substring(curr,pos);
					curr=pos+1;
					pos=source.indexOf("|",curr);
					size=parseInt(source.substring(curr,pos));
					curr=pos+1;
					this._resData[fn]=source.substr(curr,size);
					curr+=size;
				}
			}

			__proto.dispose=function(){
				var cnt=this._items.length;
				for(var i=0;i < cnt;i++){
					var pi=this._items[i];
					var texture=pi.texture;
					if(pi.bitmapFont !=null){
						delete fairygui.UIPackage._bitmapFonts[pi.bitmapFont.id];
					}
				}
			}

			__proto.createObject=function(resName,userClass){
				var pi=this._itemsByName[resName];
				if (pi)
					return this.internalCreateObject(pi,userClass);
				else
				return null;
			}

			__proto.internalCreateObject=function(item,userClass){
				var g;
				if (item.type==4){
					if (userClass !=null)
						g=new userClass();
					else
					g=UIObjectFactory.newObject(item);
				}
				else
				g=UIObjectFactory.newObject(item);
				if (g==null)
					return null;
				fairygui.UIPackage._constructing++;
				g.packageItem=item;
				g.constructFromResource();
				fairygui.UIPackage._constructing--;
				return g;
			}

			__proto.getItemById=function(itemId){
				return this._itemsById[itemId];
			}

			__proto.getItemByName=function(resName){
				return this._itemsByName[resName];
			}

			__proto.getItemAssetByName=function(resName){
				var pi=this._itemsByName[resName];
				if (pi==null){
					throw "Resource not found -"+resName;
				}
				return this.getItemAsset(pi);
			}

			__proto.getItemAssetURL=function(item){
				return this._resKey+"@"+item.file;;
			}

			__proto.getItemAsset=function(item){
				switch (item.type){
					case 0:
						if (!item.decoded){
							item.decoded=true;
							var sprite=this._sprites[item.id];
							if (sprite !=null)
								item.texture=this.createSpriteTexture(sprite);
						}
						return item.texture;
					case 7:
						if (!item.decoded){
							item.decoded=true;
							var fileName=(item.file !=null && item.file.length > 0)? item.file :(item.id+".png");
							item.texture=AssetProxy.inst.getRes(this._resKey+"@"+fileName);
						}
						return item.texture;
					case 3:
						if (!item.decoded){
							item.decoded=true;
							item.sound=AssetProxy.inst.getRes(this._resKey+"@"+item.file);
						}
						return item.sound;
					case 6:
						if (!item.decoded){
							item.decoded=true;
							this.loadFont(item);
						}
						return item.bitmapFont;
					case 2:
						if (!item.decoded){
							item.decoded=true;
							this.loadMovieClip(item);
						}
						return item.frames;
					case 4:
						if (!item.decoded){
							item.decoded=true;
							var str=this.getDesc(item.id+".xml");
							var xml=Utils.parseXMLFromString(str);
							item.componentData=xml.firstChild;
							this.loadComponentChildren(item);
							this.translateComponent(item);
						}
						return item.componentData;
					default :
						return AssetProxy.inst.getRes(this._resKey+"@"+item.id);
					}
			}

			__proto.getDesc=function(fn){
				return this._resData[fn];
			}

			__proto.getPixelHitTestData=function(itemId){
				return this._hitTestDatas[itemId];
			}

			__proto.loadComponentChildren=function(item){
				var listNode=ToolSet.findChildNode(item.componentData,"displayList");
				if (listNode !=null){
					var col=listNode.childNodes;
					var dcnt=col.length;
					item.displayList=__newvec(dcnt);
					var di;
					for (var i=0;i < dcnt;i++){
						var cxml=col[i];
						var tagName=cxml.nodeName;
						var src=cxml.getAttribute("src");
						if (src){
							var pkgId=cxml.getAttribute("pkg");
							var pkg;
							if (pkgId && pkgId !=item.owner.id)
								pkg=fairygui.UIPackage.getById(pkgId);
							else
							pkg=item.owner;
							var pi=pkg !=null ? pkg.getItemById(src):null;
							if (pi !=null)
								di=new DisplayListItem(pi,null);
							else
							di=new DisplayListItem(null,tagName);
						}
						else{
							if (tagName=="text" && cxml.getAttribute("input")=="true")
								di=new DisplayListItem(null,"inputtext");
							else
							di=new DisplayListItem(null,tagName);
						}
						di.desc=cxml;
						item.displayList[i]=di;
					}
				}
				else
				item.displayList=__newvec(0,null);
			}

			__proto.translateComponent=function(item){
				if(fairygui.UIPackage._stringsSource==null)
					return;
				var strings=fairygui.UIPackage._stringsSource[this.id+item.id];
				if(strings==null)
					return;
				var length1=item.displayList.length;
				var length2=NaN;
				var value;
				var cxml,dxml,exml;
				var ename;
				var elementId;
				var items;
				var i1=NaN,i2=NaN,j=NaN;
				var str;
				for (i1=0;i1 < length1;i1++){
					cxml=item.displayList[i1].desc;
					ename=cxml.nodeName;
					elementId=cxml.getAttribute("id");
					str=cxml.getAttribute("tooltips");
					if(str){
						value=strings[elementId+"-tips"];
						if(value!=undefined)
							cxml.setAttribute("tooltips",value);
					}
					dxml=ToolSet.findChildNode(cxml,"gearText");
					if(dxml){
						value=strings[elementId+"-texts"];
						if(value!=undefined)
							dxml.setAttribute("values",value);
						value=strings[elementId+"-texts_def"];
						if(value!=undefined)
							dxml.setAttribute("default",value);
					}
					if(ename=="text" || ename=="richtext"){
						value=strings[elementId];
						if(value!=undefined)
							cxml.setAttribute("text",value);
						value=strings[elementId+"-prompt"];
						if(value!=undefined)
							cxml.setAttribute("prompt",value);
					}
					else if(ename=="list"){
						items=cxml.childNodes;
						length2=items.length;
						j=0;
						for (i2=0;i2 < length2;i2++){
							exml=items[i2];
							if(exml.nodeName!="item")
								continue ;
							value=strings[elementId+"-"+j];
							if(value!=undefined)
								exml.setAttribute("title",value);
							j++;
						}
					}
					else if(ename=="component"){
						dxml=ToolSet.findChildNode(cxml,"Button");
						if(dxml){
							value=strings[elementId];
							if(value!=undefined)
								dxml.setAttribute("title",value);
							value=strings[elementId+"-0"];
							if(value!=undefined)
								dxml.setAttribute("selectedTitle",value);
							continue ;
						}
						dxml=ToolSet.findChildNode(cxml,"Label");
						if(dxml){
							value=strings[elementId];
							if(value!=undefined)
								dxml.setAttribute("title",value);
							continue ;
						}
						dxml=ToolSet.findChildNode(cxml,"ComboBox");
						if(dxml){
							value=strings[elementId];
							if(value!=undefined)
								dxml.setAttribute("title",value);
							items=dxml.childNodes;
							length2=items.length;
							j=0;
							for (i2=0;i2 < length2;i2++){
								exml=items[i2];
								if(exml.nodeName!="item")
									continue ;
								value=strings[elementId+"-"+j];
								if(value!=undefined)
									exml.setAttribute("title",value);
								j++;
							}
							continue ;
						}
					}
				}
			}

			__proto.createSpriteTexture=function(sprite){
				var atlasItem=this._itemsById[sprite.atlas];
				if (atlasItem !=null){
					var atlasTexture=(this.getItemAsset(atlasItem));
					if(atlasTexture==null)
						return null;
					else
					return this.createSubTexture(atlasTexture,sprite.rect);
				}
				else
				return null;
			}

			__proto.createSubTexture=function(atlasTexture,clipRect){
				var texture=Texture.createFromTexture(atlasTexture,
				clipRect.x,clipRect.y,clipRect.width,clipRect.height);
				return texture;
			}

			__proto.loadMovieClip=function(item){
				var xml=Utils.parseXMLFromString(this.getDesc(item.id+".xml")).firstChild;
				var str;
				var arr;
				str=xml.getAttribute("interval");
				if (str)
					item.interval=parseInt(str);
				str=xml.getAttribute("swing");
				if (str)
					item.swing=str=="true";
				str=xml.getAttribute("repeatDelay");
				if (str)
					item.repeatDelay=parseInt(str);
				var frameCount=parseInt(xml.getAttribute("frameCount"));
				item.frames=[];
				var frameNodes=ToolSet.findChildNode(xml,"frames").childNodes;
				var i=0;
				var len=frameNodes.length;
				for(var k=0;k < len;k++){
					var frameNode=frameNodes[k];
					if(frameNode.nodeName!="frame")
						continue ;
					var frame=new Frame();
					str=frameNode.getAttribute("rect");
					arr=str.split(",");
					frame.rect=new Rectangle(parseInt(arr[0]),parseInt(arr[1]),parseInt(arr[2]),parseInt(arr[3]));
					str=frameNode.getAttribute("addDelay");
					if(str)
						frame.addDelay=parseInt(str);
					item.frames[i]=frame;
					if (frame.rect.width==0)
						continue ;
					str=frameNode.getAttribute("sprite");
					if (str)
						str=item.id+"_"+str;
					else
					str=item.id+"_"+i;
					var sprite=this._sprites[str];
					if(sprite !=null)
						frame.texture=this.createSpriteTexture(sprite);
					i++;
				}
			}

			__proto.loadFont=function(item){
				var font=new BitmapFont1();
				font.id="ui://"+this.id+item.id;
				var str=this.getDesc(item.id+".fnt");
				var lines=str.split("\n");
				var lineCount=lines.length;
				var i=0;
				var kv={};
				var ttf=false;
				var size=0;
				var xadvance=0;
				var resizable=false;
				var atlasOffsetX=0,atlasOffsetY=0;
				var charImg;
				var mainTexture;
				var lineHeight=0;
				for (i=0;i < lineCount;i++){
					str=lines[i];
					if (str.length==0)
						continue ;
					str=ToolSet.trim(str);
					var arr=str.split(" ");
					for (var j=1;j < arr.length;j++){
						var arr2=arr[j].split("=");
						kv[arr2[0]]=arr2[1];
					}
					str=arr[0];
					if (str=="char"){
						var bg=new BMGlyph();
						bg.x=isNaN(kv.x)? 0 :parseInt(kv.x);
						bg.y=isNaN(kv.y)? 0 :parseInt(kv.y);
						bg.offsetX=isNaN(kv.xoffset)? 0 :parseInt(kv.xoffset);
						bg.offsetY=isNaN(kv.yoffset)? 0 :parseInt(kv.yoffset);
						bg.width=isNaN(kv.width)? 0 :parseInt(kv.width);
						bg.height=isNaN(kv.height)? 0 :parseInt(kv.height);
						bg.advance=isNaN(kv.xadvance)? 0 :parseInt(kv.xadvance);
						if (kv.chnl !=undefined){
							bg.channel=parseInt(kv.chnl);
							if (bg.channel==15)
								bg.channel=4;
							else if (bg.channel==1)
							bg.channel=3;
							else if (bg.channel==2)
							bg.channel=2;
							else
							bg.channel=1;
						}
						if (!ttf){
							if (kv.img){
								charImg=this._itemsById[kv.img];
								if (charImg !=null){
									charImg.load();
									bg.width=charImg.width;
									bg.height=charImg.height;
									bg.texture=charImg.texture;
								}
							}
						}
						else if (mainTexture !=null){
							bg.texture=this.createSubTexture(mainTexture,new Rectangle(bg.x+atlasOffsetX,bg.y+atlasOffsetY,bg.width,bg.height));
						}
						if (ttf)
							bg.lineHeight=lineHeight;
						else {
							if(bg.advance==0){
								if(xadvance==0)
									bg.advance=bg.offsetX+bg.width;
								else
								bg.advance=xadvance;
							}
							bg.lineHeight=bg.offsetY < 0 ? bg.height :(bg.offsetY+bg.height);
							if(size>0 && bg.lineHeight<size)
								bg.lineHeight=size;
						}
						font.glyphs[String.fromCharCode(kv.id)]=bg;
					}
					else if (str=="info"){
						ttf=kv.face !=null;
						if(!isNaN(kv.size))
							size=parseInt(kv.size);
						resizable=kv.resizable=="true";
						if (ttf){
							var sprite=this._sprites[item.id];
							if (sprite !=null){
								atlasOffsetX=sprite.rect.x;
								atlasOffsetY=sprite.rect.y;
								var atlasItem=this._itemsById[sprite.atlas];
								if(atlasItem !=null)
									mainTexture=(this.getItemAsset(atlasItem));
							}
						}
					}
					else if (str=="common"){
						if(!isNaN(kv.lineHeight))
							lineHeight=parseInt(kv.lineHeight);
						if(size==0)
							size=lineHeight;
						else if(lineHeight==0)
						lineHeight=size;
						if(!isNaN(kv.xadvance))
							xadvance=parseInt(kv.xadvance);
					}
				}
				if (size==0 && bg)
					size=bg.height;
				font.ttf=ttf;
				font.size=size;
				font.resizable=resizable;
				item.bitmapFont=font;
			}

			__getset(0,__proto,'id',function(){
				return this._id;
			});

			__getset(0,__proto,'name',function(){
				return this._name;
			});

			__getset(0,__proto,'customId',function(){
				return this._customId;
				},function(value){
				if (this._customId !=null)
					delete fairygui.UIPackage._packageInstById[this._customId];
				this._customId=value;
				if (this._customId !=null)
					fairygui.UIPackage._packageInstById[this._customId]=this;
			});

			UIPackage.getById=function(id){
				return fairygui.UIPackage._packageInstById[id];
			}

			UIPackage.getByName=function(name){
				return fairygui.UIPackage._packageInstByName[name];
			}

			UIPackage.addPackage=function(resKey){
				var pkg=new UIPackage();
				pkg.create(resKey);
				fairygui.UIPackage._packageInstById[pkg.id]=pkg;
				fairygui.UIPackage._packageInstByName[pkg.name]=pkg;
				pkg.customId=resKey;
				return pkg;
			}

			UIPackage.removePackage=function(packageId){
				var pkg=fairygui.UIPackage._packageInstById[packageId];
				pkg.dispose();
				delete fairygui.UIPackage._packageInstById[pkg.id];
				if(pkg._customId !=null)
					delete fairygui.UIPackage._packageInstById[pkg._customId];
				delete fairygui.UIPackage._packageInstByName[pkg.name];
			}

			UIPackage.createObject=function(pkgName,resName,userClass){
				var pkg=fairygui.UIPackage.getByName(pkgName);
				if(pkg)
					return pkg.createObject(resName,userClass);
				else
				return null;
			}

			UIPackage.createObjectFromURL=function(url,userClass){
				var pi=fairygui.UIPackage.getItemByURL(url);
				if(pi)
					return pi.owner.internalCreateObject(pi,userClass);
				else
				return null;
			}

			UIPackage.getItemURL=function(pkgName,resName){
				var pkg=fairygui.UIPackage.getByName(pkgName);
				if(!pkg)
					return null;
				var pi=pkg._itemsByName[resName];
				if(!pi)
					return null;
				return "ui://"+pkg.id+pi.id;
			}

			UIPackage.getItemByURL=function(url){
				if(ToolSet.startsWith(url,"ui://")){
					var pkgId=url.substr(5,8);
					var srcId=url.substr(13);
					var pkg=fairygui.UIPackage.getById(pkgId);
					if(pkg)
						return pkg.getItemById(srcId);
				}
				return null;
			}

			UIPackage.getBitmapFontByURL=function(url){
				return fairygui.UIPackage._bitmapFonts[url];
			}

			UIPackage.setStringsSource=function(source){
				fairygui.UIPackage._stringsSource={};
				var xml=Utils.parseXMLFromString(source);
				var resNode=ToolSet.findChildNode(xml,"resources");
				var nodes=resNode.childNodes;
				var length1=nodes.length;
				for (var i1=0;i1 < length1;i1++){
					var cxml=nodes[i1];
					if (cxml.nodeName=="string"){
						var key=cxml.getAttribute("name");
						var text=cxml.textContent;
						var i=key.indexOf("-");
						if(i==-1)
							continue ;
						var key2=key.substr(0,i);
						var key3=key.substr(i+1);
						var col=fairygui.UIPackage._stringsSource[key2];
						if(!col){
							col={};
							fairygui.UIPackage._stringsSource[key2]=col;
						}
						col[key3]=text;
					}
				}
			}

			UIPackage._constructing=0;
			UIPackage._packageInstById={};
			UIPackage._packageInstByName={};
			UIPackage._bitmapFonts={};
			UIPackage._stringsSource=null;
			UIPackage.sep0=",";
			UIPackage.sep1="\n";
			UIPackage.sep2=" ";
			UIPackage.sep3="=";
			UIPackage.__init$=function(){
				//class AtlasSprite
				AtlasSprite=(function(){
					function AtlasSprite(){
						this.atlas=null;
						this.rect=null;
						this.rotated=false;
						this.rect=new Rectangle();
					}
					__class(AtlasSprite,'');
					return AtlasSprite;
				})()
			}

			return UIPackage;
		})()


		//class fairygui.utils.PixelHitTestData
		var PixelHitTestData=(function(){
			function PixelHitTestData(){
				this.pixelWidth=0;
				this.scale=NaN;
				this.pixels=null;
			}

			__class(PixelHitTestData,'fairygui.utils.PixelHitTestData');
			var __proto=PixelHitTestData.prototype;
			__proto.load=function(ba){
				ba.getInt32();
				this.pixelWidth=ba.getInt32();
				this.scale=1/ba.readByte();
				var len=ba.getInt32();
				this.pixels=__newvec(len);
				for(var i=0;i<len;i++){
					var j=ba.readByte();
					if(j<0)
						j+=256;
					this.pixels[i]=j;
				}
			}

			return PixelHitTestData;
		})()


		//class fairygui.utils.ToolSet
		var ToolSet=(function(){
			function ToolSet(){}
			__class(ToolSet,'fairygui.utils.ToolSet');
			ToolSet.getFileName=function(source){
				var i=source.lastIndexOf("/");
				if (i !=-1)
					source=source.substr(i+1);
				i=source.lastIndexOf("\\");
				if (i !=-1)
					source=source.substr(i+1);
				i=source.lastIndexOf(".");
				if (i !=-1)
					return source.substring(0,i);
				else
				return source;
			}

			ToolSet.startsWith=function(source,str,ignoreCase){
				(ignoreCase===void 0)&& (ignoreCase=false);
				if (!source)
					return false;
				else if (source.length < str.length)
				return false;
				else {
					source=source.substring(0,str.length);
					if (!ignoreCase)
						return source==str;
					else
					return source.toLowerCase()==str.toLowerCase();
				}
			}

			ToolSet.endsWith=function(source,str,ignoreCase){
				(ignoreCase===void 0)&& (ignoreCase=false);
				if (!source)
					return false;
				else if (source.length < str.length)
				return false;
				else {
					source=source.substring(source.length-str.length);
					if (!ignoreCase)
						return source==str;
					else
					return source.toLowerCase()==str.toLowerCase();
				}
			}

			ToolSet.trim=function(targetString){
				return fairygui.utils.ToolSet.trimLeft(fairygui.utils.ToolSet.trimRight(targetString));
			}

			ToolSet.trimLeft=function(targetString){
				var tempChar="";
				for (var i=0;i < targetString.length;i++){
					tempChar=targetString.charAt(i);
					if (tempChar !=" " && tempChar !="\n" && tempChar !="\r"){
						break ;
					}
				}
				return targetString.substr(i);
			}

			ToolSet.trimRight=function(targetString){
				var tempChar="";
				for (var i=targetString.length-1;i >=0;i--){
					tempChar=targetString.charAt(i);
					if (tempChar !=" " && tempChar !="\n" && tempChar !="\r"){
						break ;
					}
				}
				return targetString.substring(0,i+1);
			}

			ToolSet.convertToHtmlColor=function(argb,hasAlpha){
				(hasAlpha===void 0)&& (hasAlpha=false);
				var alpha;
				if (hasAlpha)
					alpha=(argb >> 24 & 0xFF).toString(16);
				else
				alpha="";
				var red=(argb >> 16 & 0xFF).toString(16);
				var green=(argb >> 8 & 0xFF).toString(16);
				var blue=(argb & 0xFF).toString(16);
				if (alpha.length==1)
					alpha="0"+alpha;
				if (red.length==1)
					red="0"+red;
				if (green.length==1)
					green="0"+green;
				if (blue.length==1)
					blue="0"+blue;
				return "#"+alpha+red+green+blue;
			}

			ToolSet.convertFromHtmlColor=function(str,hasAlpha){
				(hasAlpha===void 0)&& (hasAlpha=false);
				if (str.length < 1)
					return 0;
				if (str.charAt(0)=="#")
					str=str.substr(1);
				if (str.length==8)
					return (parseInt(str.substr(0,2),16)<< 24)+parseInt(str.substr(2),16);
				else if (hasAlpha)
				return 0xFF000000+parseInt(str,16);
				else
				return parseInt(str,16);
			}

			ToolSet.displayObjectToGObject=function(obj){
				while (obj !=null && !((obj instanceof laya.display.Stage ))){
					if (obj["$owner"])
						return obj["$owner"];
					obj=obj.parent;
				}
				return null;
			}

			ToolSet.findChildNode=function(xml,name){
				var col=xml.childNodes;
				var length1=col.length;
				if (length1>0){
					for (var i1=0;i1 < length1;i1++){
						var cxml=col[i1];
						if (cxml.nodeName==name){
							return cxml;
						}
					}
				}
				return null;
			}

			ToolSet.encodeHTML=function(str){
				if (!str)
					return "";
				else
				return str.replace("&","&amp;").replace("<","&lt;").replace(">","&gt;").replace("'","&apos;");
			}

			ToolSet.parseUBB=function(text){
				return fairygui.utils.ToolSet.defaultUBBParser.parse(text);
			}

			ToolSet.removeUBB=function(text){
				return fairygui.utils.ToolSet.defaultUBBParser.parse(text,true);
			}

			ToolSet.parseEaseType=function(value){
				var ret=ToolSet.EaseMap[value];
				if (!ret)
					ret=Ease.quartOut;
				return ret;
			}

			ToolSet.clamp=function(value,min,max){
				if(value<min)
					value=min;
				else if(value>max)
				value=max;
				return value;
			}

			ToolSet.clamp01=function(value){
				if(value>1)
					value=1;
				else if(value<0)
				value=0;
				return value;
			}

			ToolSet.bs2a=function(bstr){
				var ba=Browser.window.atob(bstr);
				var n=ba.length;
				var u8arr=new Uint8Array(n);
				while (n--)
				u8arr[n]=ba.charCodeAt(n);
				return u8arr;
			}

			__static(ToolSet,
			['defaultUBBParser',function(){return this.defaultUBBParser=new UBBParser();},'EaseMap',function(){return this.EaseMap={
					"Linear":Ease.linearNone,
					"Elastic.In":Ease.elasticIn,
					"Elastic.Out":Ease.elasticOut,
					"Elastic.InOut":Ease.elasticInOut,
					"Quad.In":Ease.quadIn,
					"Quad.Out":Ease.quadOut,
					"Quad.InOut":Ease.quadInOut,
					"Cube.In":Ease.cubicIn,
					"Cube.Out":Ease.cubicOut,
					"Cube.InOut":Ease.cubicInOut,
					"Quart.In":Ease.quartIn,
					"Quart.Out":Ease.quartOut,
					"Quart.InOut":Ease.quartInOut,
					"Quint.In":Ease.quintIn,
					"Quint.Out":Ease.quintOut,
					"Quint.InOut":Ease.quintInOut,
					"Sine.In":Ease.sineIn,
					"Sine.Out":Ease.sineOut,
					"Sine.InOut":Ease.sineInOut,
					"Bounce.In":Ease.bounceIn,
					"Bounce.Out":Ease.bounceOut,
					"Bounce.InOut":Ease.bounceInOut,
					"Circ.In":Ease.circIn,
					"Circ.Out":Ease.circOut,
					"Circ.InOut":Ease.circInOut,
					"Expo.In":Ease.quartIn,
					"Expo.Out":Ease.quartOut,
					"Expo.InOut":Ease.quartInOut,
					"Back.In":Ease.backIn,
					"Back.Out":Ease.backOut,
					"Back.InOut":Ease.backInOut
			};}

			]);
			return ToolSet;
		})()


		//class fairygui.utils.UBBParser
		var UBBParser=(function(){
			function UBBParser(){
				this._text=null;
				this._readPos=0;
				this._handlers=null;
				this.smallFontSize=12;
				this.normalFontSize=14;
				this.largeFontSize=16;
				this.defaultImgWidth=0;
				this.defaultImgHeight=0;
				this._handlers={};
				this._handlers["url"]=this.onTag_URL;
				this._handlers["img"]=this.onTag_IMG;
				this._handlers["b"]=this.onTag_Simple;
				this._handlers["i"]=this.onTag_Simple;
				this._handlers["u"]=this.onTag_Simple;
				this._handlers["sup"]=this.onTag_Simple;
				this._handlers["sub"]=this.onTag_Simple;
				this._handlers["color"]=this.onTag_COLOR;
				this._handlers["font"]=this.onTag_FONT;
				this._handlers["size"]=this.onTag_SIZE;
			}

			__class(UBBParser,'fairygui.utils.UBBParser');
			var __proto=UBBParser.prototype;
			__proto.onTag_URL=function(tagName,end,attr){
				if (!end){
					if (attr !=null)
						return "<a href=\""+attr+"\" target=\"_blank\">";
					else {
						var href=this.getTagText();
						return "<a href=\""+href+"\" target=\"_blank\">";
					}
				}
				else
				return "</a>";
			}

			__proto.onTag_IMG=function(tagName,end,attr){
				if (!end){
					var src=this.getTagText(true);
					if (!src)
						return null;
					if (this.defaultImgWidth)
						return "<img src=\""+src+"\" width=\""+this.defaultImgWidth+"\" height=\""+this.defaultImgHeight+"\"/>";
					else
					return "<img src=\""+src+"\"/>";
				}
				else
				return null;
			}

			__proto.onTag_Simple=function(tagName,end,attr){
				return end ? ("</"+tagName+">"):("<"+tagName+">");
			}

			__proto.onTag_COLOR=function(tagName,end,attr){
				if (!end)
					return "<font color=\""+attr+"\">";
				else
				return "</font>";
			}

			__proto.onTag_FONT=function(tagName,end,attr){
				if (!end)
					return "<font face=\""+attr+"\">";
				else
				return "</font>";
			}

			__proto.onTag_SIZE=function(tagName,end,attr){
				if (!end){
					if (attr=="normal")
						attr=""+this.normalFontSize;
					else if (attr=="small")
					attr=""+this.smallFontSize;
					else if (attr=="large")
					attr=""+this.largeFontSize;
					else if (attr.length && attr.charAt(0)=="+")
					attr=""+(this.smallFontSize+parseInt(attr.substr(1)));
					else if (attr.length && attr.charAt(0)=="-")
					attr=""+(this.smallFontSize-parseInt(attr.substr(1)));
					return "<font size=\""+attr+"\">";
				}
				else
				return "</font>";
			}

			__proto.getTagText=function(remove){
				(remove===void 0)&& (remove=false);
				var pos=this._text.indexOf("[",this._readPos);
				if (pos==-1)
					return null;
				var ret=this._text.substring(this._readPos,pos);
				if (remove)
					this._readPos=pos;
				return ret;
			}

			__proto.parse=function(text,remove){
				(remove===void 0)&& (remove=false);
				this._text=text;
				var pos1=0,pos2=NaN,pos3=0;
				var end=false;
				var tag,attr;
				var repl;
				var func;
				while ((pos2=this._text.indexOf("[",pos1))!=-1){
					pos1=pos2;
					pos2=this._text.indexOf("]",pos1);
					if (pos2==-1)
						break ;
					end=this._text.charAt(pos1+1)=='/';
					tag=this._text.substring(end ? pos1+2 :pos1+1,pos2);
					pos2++;
					this._readPos=pos2;
					attr=null;
					repl=null;
					pos3=tag.indexOf("=");
					if (pos3 !=-1){
						attr=tag.substring(pos3+1);
						tag=tag.substring(0,pos3);
					}
					tag=tag.toLowerCase();
					func=this._handlers[tag];
					if (func !=null){
						if(!remove){
							repl=func.call(this,tag,end,attr);
							if (repl==null)
								repl="";
						}
						else
						repl="";
					}
					else {
						pos1=pos2;
						continue ;
					}
					this._text=this._text.substring(0,pos1)+repl+this._text.substring(this._readPos);
				}
				return this._text;
			}

			__static(UBBParser,
			['inst',function(){return this.inst=new UBBParser();}
			]);
			return UBBParser;
		})()


		//class fairygui.utils.ColorMatrix extends Array
		var ColorMatrix=(function(_super){
			// initialization:
			function ColorMatrix(){
				ColorMatrix.__super.call(this);
				this.reset();
			}

			__class(ColorMatrix,'fairygui.utils.ColorMatrix',Array);
			var __proto=ColorMatrix.prototype;
			// public methods:
			__proto.reset=function(){
				for (var i=0;i<ColorMatrix.LENGTH;i++){
					this[i]=ColorMatrix.IDENTITY_MATRIX[i];
				}
			}

			__proto.invert=function(){
				this.multiplyMatrix([-1,0,0,0,255,
				0,-1,0,0,255,
				0,0,-1,0,255,
				0,0,0,1,0]);
			}

			__proto.adjustColor=function(p_brightness,p_contrast,p_saturation,p_hue){
				this.adjustHue(p_hue);
				this.adjustContrast(p_contrast);
				this.adjustBrightness(p_brightness);
				this.adjustSaturation(p_saturation);
			}

			__proto.adjustBrightness=function(p_val){
				p_val=this.cleanValue(p_val,1)*255;
				this.multiplyMatrix([
				1,0,0,0,p_val,
				0,1,0,0,p_val,
				0,0,1,0,p_val,
				0,0,0,1,0]);
			}

			__proto.adjustContrast=function(p_val){
				p_val=this.cleanValue(p_val,1);
				var s=p_val+1;
				var o=128 *(1-s);
				this.multiplyMatrix([
				s,0,0,0,o,
				0,s,0,0,o,
				0,0,s,0,o,
				0,0,0,1,0]);
			}

			__proto.adjustSaturation=function(p_val){
				p_val=this.cleanValue(p_val,1);
				p_val+=1;
				var invSat=1-p_val;
				var invLumR=invSat *0.299;
				var invLumG=invSat *0.587;
				var invLumB=invSat *0.114;
				this.multiplyMatrix([
				(invLumR+p_val),invLumG,invLumB,0,0,
				invLumR,(invLumG+p_val),invLumB,0,0,
				invLumR,invLumG,(invLumB+p_val),0,0,
				0,0,0,1,0]);
			}

			__proto.adjustHue=function(p_val){
				p_val=this.cleanValue(p_val,1);
				p_val *=Math.PI;
				var cos=Math.cos(p_val);
				var sin=Math.sin(p_val);
				this.multiplyMatrix([
				((0.299+(cos *(1-0.299)))+(sin *-(0.299))),((0.587+(cos *-(0.587)))+(sin *-(0.587))),((0.114+(cos *-(0.114)))+(sin *(1-0.114))),0,0,
				((0.299+(cos *-(0.299)))+(sin *0.143)),((0.587+(cos *(1-0.587)))+(sin *0.14)),((0.114+(cos *-(0.114)))+(sin *-0.283)),0,0,
				((0.299+(cos *-(0.299)))+(sin *-((1-0.299)))),((0.587+(cos *-(0.587)))+(sin *0.587)),((0.114+(cos *(1-0.114)))+(sin *0.114)),0,0,
				0,0,0,1,0]);
			}

			__proto.concat=function(p_matrix){
				if (p_matrix.length !=ColorMatrix.LENGTH){return;}
					this.multiplyMatrix(p_matrix);
			}

			__proto.clone=function(){
				var result=new ColorMatrix();
				result.copyMatrix(this);
				return result;
			}

			__proto.copyMatrix=function(p_matrix){
				var l=ColorMatrix.LENGTH;
				for (var i=0;i<l;i++){
					this[i]=p_matrix[i];
				}
			}

			__proto.multiplyMatrix=function(p_matrix){
				var col=[];
				var i=0;
				for (var y=0;y<4;++y){
					for (var x=0;x<5;++x){
						col[i+x]=p_matrix[i] *this[x]+
						p_matrix[i+1] *this[x+5]+
						p_matrix[i+2] *this[x+10]+
						p_matrix[i+3] *this[x+15]+
						(x==4 ? p_matrix[i+4] :0);
					}
					i+=5;
				}
				this.copyMatrix(col);
			}

			__proto.cleanValue=function(p_val,p_limit){
				return Math.min(p_limit,Math.max(-p_limit,p_val));
			}

			ColorMatrix.create=function(p_brightness,p_contrast,p_saturation,p_hue){
				var ret=new ColorMatrix();
				ret.adjustColor(p_brightness,p_contrast,p_saturation,p_hue);
				return ret;
			}

			ColorMatrix.LUMA_R=0.299;
			ColorMatrix.LUMA_G=0.587;
			ColorMatrix.LUMA_B=0.114;
			__static(ColorMatrix,
			['IDENTITY_MATRIX',function(){return this.IDENTITY_MATRIX=[
				1,0,0,0,0,
				0,1,0,0,0,
				0,0,1,0,0,
				0,0,0,1,0];},'LENGTH',function(){return this.LENGTH=ColorMatrix.IDENTITY_MATRIX.length;}
			]);
			return ColorMatrix;
		})(Array)


		//class fairygui.Controller extends laya.events.EventDispatcher
		var Controller=(function(_super){
			var PageTransition;
			function Controller(){
				this._name=null;
				this._selectedIndex=0;
				this._previousIndex=0;
				this._pageIds=null;
				this._pageNames=null;
				this._pageTransitions=null;
				this._playingTransition=null;
				this._parent=null;
				this._autoRadioGroupDepth=false;
				Controller.__super.call(this);
				this._pageIds=[];
				this._pageNames=[];
				this._selectedIndex=-1;
				this._previousIndex=-1;
			}

			__class(Controller,'fairygui.Controller',_super);
			var __proto=Controller.prototype;
			//功能和设置selectedIndex一样，但不会触发事件
			__proto.setSelectedIndex=function(value){
				(value===void 0)&& (value=0);
				if (this._selectedIndex !=value){
					if(value > this._pageIds.length-1)
						throw "index out of bounds: "+value;
					this._previousIndex=this._selectedIndex;
					this._selectedIndex=value;
					this._parent.applyController(this);
					if(this._playingTransition){
						this._playingTransition.stop();
						this._playingTransition=null;
					}
				}
			}

			//功能和设置selectedPage一样，但不会触发事件
			__proto.setSelectedPage=function(value){
				var i=this._pageNames.indexOf(value);
				if (i==-1)
					i=0;
				this.setSelectedIndex(i);
			}

			__proto.getPageName=function(index){
				(index===void 0)&& (index=0);
				return this._pageNames[index];
			}

			__proto.addPage=function(name){
				(name===void 0)&& (name="");
				this.addPageAt(name,this._pageIds.length);
			}

			__proto.addPageAt=function(name,index){
				(index===void 0)&& (index=0);
				var nid=""+(fairygui.Controller._nextPageId++);
				if (index==this._pageIds.length){
					this._pageIds.push(nid);
					this._pageNames.push(name);
				}
				else {
					this._pageIds.splice(index,0,nid);
					this._pageNames.splice(index,0,name);
				}
			}

			__proto.removePage=function(name){
				var i=this._pageNames.indexOf(name);
				if (i !=-1){
					this._pageIds.splice(i,1);
					this._pageNames.splice(i,1);
					if (this._selectedIndex >=this._pageIds.length)
						this.selectedIndex=this._selectedIndex-1;
					else
					this._parent.applyController(this);
				}
			}

			__proto.removePageAt=function(index){
				(index===void 0)&& (index=0);
				this._pageIds.splice(index,1);
				this._pageNames.splice(index,1);
				if (this._selectedIndex >=this._pageIds.length)
					this.selectedIndex=this._selectedIndex-1;
				else
				this._parent.applyController(this);
			}

			__proto.clearPages=function(){
				this._pageIds.length=0;
				this._pageNames.length=0;
				if (this._selectedIndex !=-1)
					this.selectedIndex=-1;
				else
				this._parent.applyController(this);
			}

			__proto.hasPage=function(aName){
				return this._pageNames.indexOf(aName)!=-1;
			}

			__proto.getPageIndexById=function(aId){
				return this._pageIds.indexOf(aId);
			}

			__proto.getPageIdByName=function(aName){
				var i=this._pageNames.indexOf(aName);
				if(i !=-1)
					return this._pageIds[i];
				else
				return null;
			}

			__proto.getPageNameById=function(aId){
				var i=this._pageIds.indexOf(aId);
				if(i !=-1)
					return this._pageNames[i];
				else
				return null;
			}

			__proto.getPageId=function(index){
				(index===void 0)&& (index=0);
				return this._pageIds[index];
			}

			__proto.setup=function(xml){
				this._name=xml.getAttribute("name");
				this._autoRadioGroupDepth=xml.getAttribute("autoRadioGroupDepth")=="true";
				var i=0;
				var k=0;
				var str=xml.getAttribute("pages");
				if (str){
					var arr=str.split(",");
					var cnt=arr.length;
					for (i=0;i < cnt;i+=2){
						this._pageIds.push(arr[i]);
						this._pageNames.push(arr[i+1]);
					}
				}
				str=xml.getAttribute("transitions");
				if(str){
					this._pageTransitions=[];
					arr=str.split(",");
					cnt=arr.length;
					for(i=0;i < cnt;i++){
						str=arr[i];
						if(!str)
							continue ;
						var pt=new PageTransition();
						k=str.indexOf("=");
						pt.transitionName=str.substr(k+1);
						str=str.substring(0,k);
						k=str.indexOf("-");
						pt.toIndex=parseInt(str.substring(k+1));
						str=str.substring(0,k);
						if(str=="*")
							pt.fromIndex=-1;
						else
						pt.fromIndex=parseInt(str);
						this._pageTransitions.push(pt);
					}
				}
				if (this._parent && this._pageIds.length > 0)
					this._selectedIndex=0;
				else
				this._selectedIndex=-1;
			}

			__getset(0,__proto,'oppositePageId',null,function(val){
				var i=this._pageIds.indexOf(val);
				if(i > 0)
					this.selectedIndex=0;
				else if(this._pageIds.length > 1)
				this.selectedIndex=1;
			});

			__getset(0,__proto,'name',function(){
				return this._name;
				},function(value){
				this._name=value;
			});

			__getset(0,__proto,'pageCount',function(){
				return this._pageIds.length;
			});

			__getset(0,__proto,'parent',function(){
				return this._parent;
			});

			__getset(0,__proto,'selectedIndex',function(){
				return this._selectedIndex;
				},function(value){
				if(this._selectedIndex !=value){
					if(value > this._pageIds.length-1)
						throw "index out of bounds: "+value;
					this._previousIndex=this._selectedIndex;
					this._selectedIndex=value;
					this._parent.applyController(this);
					this.event("fui_state_changed");
					if(this._playingTransition){
						this._playingTransition.stop();
						this._playingTransition=null;
					}
					if(this._pageTransitions){
						var len=this._pageTransitions.length;
						for(var i=0;i < len;i++){
							var pt=this._pageTransitions[i];
							if(pt.toIndex==this._selectedIndex && (pt.fromIndex==-1 || pt.fromIndex==this._previousIndex)){
								this._playingTransition=this.parent.getTransition(pt.transitionName);
								break ;
							}
						}
						if(this._playingTransition)
							this._playingTransition.play(Handler.create(this,function(){this._playingTransition=null;}));
					}
				}
			});

			__getset(0,__proto,'selectedPage',function(){
				if (this._selectedIndex==-1)
					return null;
				else
				return this._pageNames[this._selectedIndex];
				},function(val){
				var i=this._pageNames.indexOf(val);
				if (i==-1)
					i=0;
				this.selectedIndex=i;
			});

			__getset(0,__proto,'previsousIndex',function(){
				return this._previousIndex;
			});

			__getset(0,__proto,'previousPage',function(){
				if (this._previousIndex==-1)
					return null;
				else
				return this._pageNames[this._previousIndex];
			});

			__getset(0,__proto,'selectedPageId',function(){
				if (this._selectedIndex==-1)
					return null;
				else
				return this._pageIds[this._selectedIndex];
				},function(val){
				var i=this._pageIds.indexOf(val);
				this.selectedIndex=i;
			});

			__getset(0,__proto,'previousPageId',function(){
				if(this._previousIndex==-1)
					return null;
				else
				return this._pageIds[this._previousIndex];
			});

			Controller._nextPageId=0;
			Controller.__init$=function(){
				//class PageTransition
				PageTransition=(function(){
					function PageTransition(){
						this.transitionName=null;
						this.fromIndex=0;
						this.toIndex=0;
					}
					__class(PageTransition,'');
					return PageTransition;
				})()
			}

			return Controller;
		})(EventDispatcher)


		//class fairygui.utils.PixelHitTest extends laya.utils.HitArea
		var PixelHitTest=(function(_super){
			function PixelHitTest(data,offsetX,offsetY){
				this._data=null;
				this.offsetX=0;
				this.offsetY=0;
				this.scaleX=NaN;
				this.scaleY=NaN;
				PixelHitTest.__super.call(this);
				(offsetX===void 0)&& (offsetX=0);
				(offsetY===void 0)&& (offsetY=0);
				this._data=data;
				this.offsetX=offsetX;
				this.offsetY=offsetY;
				this.scaleX=1;
				this.scaleY=1;
			}

			__class(PixelHitTest,'fairygui.utils.PixelHitTest',_super);
			var __proto=PixelHitTest.prototype;
			__proto.isHit=function(x,y){
				x=Math.floor((x / this.scaleX-this.offsetX)*this._data.scale);
				y=Math.floor((y / this.scaleY-this.offsetY)*this._data.scale);
				if (x < 0 || y < 0 || x >=this._data.pixelWidth)
					return false;
				var pos=y *this._data.pixelWidth+x;
				var pos2=Math.floor(pos / 8);
				var pos3=pos % 8;
				if (pos2 >=0 && pos2 < this._data.pixels.length)
					return ((this._data.pixels[pos2] >> pos3)& 0x1)==1;
				else
				return false;
			}

			return PixelHitTest;
		})(HitArea)


		//class fairygui.GTextField extends fairygui.GObject
		var GTextField=(function(_super){
			function GTextField(){
				this._gearColor=null;
				GTextField.__super.call(this);
				this._gearColor=new GearColor(this);
			}

			__class(GTextField,'fairygui.GTextField',_super);
			var __proto=GTextField.prototype;
			Laya.imps(__proto,{"fairygui.IColorGear":true})
			__proto.handleControllerChanged=function(c){
				_super.prototype.handleControllerChanged.call(this,c);
				if(this._gearColor.controller==c)
					this._gearColor.apply();
			}

			__proto.setup_beforeAdd=function(xml){
				_super.prototype.setup_beforeAdd.call(this,xml);
				var str;
				str=xml.getAttribute("font");
				if (str)
					this.font=str;
				str=xml.getAttribute("fontSize");
				if (str)
					this.fontSize=parseInt(str);
				str=xml.getAttribute("color");
				if (str)
					this.color=str;
				str=xml.getAttribute("align");
				if (str)
					this.align=str;
				str=xml.getAttribute("vAlign");
				if (str)
					this.valign=str;
				str=xml.getAttribute("leading");
				if (str)
					this.leading=parseInt(str);
				else
				this.leading=3;
				str=xml.getAttribute("letterSpacing");
				if (str)
					this.letterSpacing=parseInt(str);
				this.ubbEnabled=xml.getAttribute("ubb")=="true";
				this.italic=xml.getAttribute("italic")=="true";
				this.bold=xml.getAttribute("bold")=="true";
				this.underline=xml.getAttribute("underline")=="true";
				this.singleLine=xml.getAttribute("singleLine")=="true";
				str=xml.getAttribute("strokeColor");
				if (str){
					this.strokeColor=str;
					str=xml.getAttribute("strokeSize");
					if(str)
						this.stroke=parseInt(str)+1;
					else
					this.stroke=2;
				}
			}

			__proto.setup_afterAdd=function(xml){
				_super.prototype.setup_afterAdd.call(this,xml);
				var str=xml.getAttribute("text");
				if(str !=null && str.length > 0)
					this.text=str;
			}

			__getset(0,__proto,'color',function(){
				return null;
				},function(value){
			});

			__getset(0,__proto,'font',function(){
				return null;
				},function(value){
			});

			__getset(0,__proto,'leading',function(){
				return 0;
				},function(value){
			});

			__getset(0,__proto,'fontSize',function(){
				return 0;
				},function(value){
			});

			__getset(0,__proto,'bold',function(){
				return false;
				},function(value){
			});

			__getset(0,__proto,'letterSpacing',function(){
				return 0;
				},function(value){
			});

			__getset(0,__proto,'align',function(){
				return null;
				},function(value){
			});

			__getset(0,__proto,'valign',function(){
				return null;
				},function(value){
			});

			__getset(0,__proto,'italic',function(){
				return false;
				},function(value){
			});

			__getset(0,__proto,'underline',function(){
				return false;
				},function(value){
			});

			__getset(0,__proto,'singleLine',function(){
				return false;
				},function(value){
			});

			__getset(0,__proto,'stroke',function(){
				return 0;
				},function(value){
			});

			__getset(0,__proto,'strokeColor',function(){
				return null;
				},function(value){
			});

			__getset(0,__proto,'ubbEnabled',function(){
				return false;
				},function(value){
			});

			__getset(0,__proto,'textWidth',function(){
				return 0;
			});

			__getset(0,__proto,'gearColor',function(){
				return this._gearColor;
			});

			return GTextField;
		})(GObject)


		//class fairygui.GComponent extends fairygui.GObject
		var GComponent=(function(_super){
			function GComponent(){
				this._sortingChildCount=0;
				this._opaque=false;
				this._margin=null;
				this._trackBounds=false;
				this._boundsChanged=false;
				this._buildingDisplayList=false;
				this._children=null;
				this._controllers=null;
				this._transitions=null;
				this._container=null;
				this._scrollPane=null;
				this._alignOffset=null;
				GComponent.__super.call(this);
				this._children=[];
				this._controllers=[];
				this._transitions=[];
				this._margin=new Margin();
				this._alignOffset=new Point();
			}

			__class(GComponent,'fairygui.GComponent',_super);
			var __proto=GComponent.prototype;
			__proto.createDisplayObject=function(){
				_super.prototype.createDisplayObject.call(this);
				this._displayObject.mouseEnabled=true;
				this._displayObject.mouseThrough=true;
				this._container=this._displayObject;
			}

			__proto.dispose=function(){
				var i=0;
				var transCnt=this._transitions.length;
				for (i=0;i < transCnt;++i){
					var trans=this._transitions[i];
					trans.dispose();
				};
				var numChildren=this._children.length;
				for(i=numChildren-1;i >=0;--i){
					var obj=this._children[i];
					obj.parent=null;
					obj.dispose();
				}
				this._boundsChanged=false;
				_super.prototype.dispose.call(this);
			}

			__proto.addChild=function(child){
				this.addChildAt(child,this._children.length);
				return child;
			}

			__proto.addChildAt=function(child,index){
				(index===void 0)&& (index=0);
				if(!child)
					throw "child is null";
				var numChildren=this._children.length;
				if(index >=0 && index <=numChildren){
					if(child.parent==this){
						this.setChildIndex(child,index);
					}
					else {
						child.removeFromParent();
						child.parent=this;
						var cnt=this._children.length;
						if(child.sortingOrder !=0){
							this._sortingChildCount++;
							index=this.getInsertPosForSortingChild(child);
						}
						else if(this._sortingChildCount > 0){
							if(index > (cnt-this._sortingChildCount))
								index=cnt-this._sortingChildCount;
						}
						if(index==cnt)
							this._children.push(child);
						else
						this._children.splice(index,0,child);
						this.childStateChanged(child);
						this.setBoundsChangedFlag();
					}
					return child;
				}
				else {
					throw "Invalid child index";
				}
			}

			__proto.getInsertPosForSortingChild=function(target){
				var cnt=this._children.length;
				var i=0;
				for(i=0;i < cnt;i++){
					var child=this._children[i];
					if(child==target)
						continue ;
					if(target.sortingOrder < child.sortingOrder)
						break ;
				}
				return i;
			}

			__proto.removeChild=function(child,dispose){
				(dispose===void 0)&& (dispose=false);
				var childIndex=this._children.indexOf(child);
				if(childIndex !=-1){
					this.removeChildAt(childIndex,dispose);
				}
				return child;
			}

			__proto.removeChildAt=function(index,dispose){
				(dispose===void 0)&& (dispose=false);
				if(index >=0 && index < this.numChildren){
					var child=this._children[index];
					child.parent=null;
					if(child.sortingOrder !=0)
						this._sortingChildCount--;
					this._children.splice(index,1);
					if(child.inContainer)
						this._container.removeChild(child.displayObject);
					if(dispose)
						child.dispose();
					this.setBoundsChangedFlag();
					return child;
				}
				else {
					throw "Invalid child index";
				}
			}

			__proto.removeChildren=function(beginIndex,endIndex,dispose){
				(beginIndex===void 0)&& (beginIndex=0);
				(endIndex===void 0)&& (endIndex=-1);
				(dispose===void 0)&& (dispose=false);
				if(endIndex < 0 || endIndex >=this.numChildren)
					endIndex=this.numChildren-1;
				for(var i=beginIndex;i <=endIndex;++i)
				this.removeChildAt(beginIndex,dispose);
			}

			__proto.getChildAt=function(index){
				(index===void 0)&& (index=0);
				if(index >=0 && index < this.numChildren)
					return this._children[index];
				else
				throw "Invalid child index";
			}

			__proto.getChild=function(name){
				var cnt=this._children.length;
				for(var i=0;i < cnt;++i){
					if(this._children[i].name==name)
						return this._children[i];
				}
				return null;
			}

			__proto.getVisibleChild=function(name){
				var cnt=this._children.length;
				for(var i=0;i < cnt;++i){
					var child=this._children[i];
					if(child.finalVisible && child.name==name)
						return child;
				}
				return null;
			}

			__proto.getChildInGroup=function(name,group){
				var cnt=this._children.length;
				for(var i=0;i < cnt;++i){
					var child=this._children[i];
					if(child.group==group && child.name==name)
						return child;
				}
				return null;
			}

			__proto.getChildById=function(id){
				var cnt=this._children.length;
				for(var i=0;i < cnt;++i){
					if(this._children[i]._id==id)
						return this._children[i];
				}
				return null;
			}

			__proto.getChildIndex=function(child){
				return this._children.indexOf(child);
			}

			__proto.setChildIndex=function(child,index){
				(index===void 0)&& (index=0);
				var oldIndex=this._children.indexOf(child);
				if(oldIndex==-1)
					throw "Not a child of this container";
				if(child.sortingOrder !=0)
					return;
				var cnt=this._children.length;
				if(this._sortingChildCount > 0){
					if(index > (cnt-this._sortingChildCount-1))
						index=cnt-this._sortingChildCount-1;
				}
				this._setChildIndex(child,oldIndex,index);
			}

			__proto.setChildIndexBefore=function(child,index){
				var oldIndex=this._children.indexOf(child);
				if (oldIndex==-1)
					throw "Not a child of this container";
				if(child.sortingOrder!=0)
					return oldIndex;
				var cnt=this._children.length;
				if(this._sortingChildCount>0){
					if (index > (cnt-this._sortingChildCount-1))
						index=cnt-this._sortingChildCount-1;
				}
				if (oldIndex < index)
					return this._setChildIndex(child,oldIndex,index-1);
				else
				return this._setChildIndex(child,oldIndex,index);
			}

			__proto._setChildIndex=function(child,oldIndex,index){
				var cnt=this._children.length;
				if(index > cnt)
					index=cnt;
				if(oldIndex==index)
					return oldIndex;
				this._children.splice(oldIndex,1);
				this._children.splice(index,0,child);
				if(child.inContainer){
					var displayIndex=0;
					for(var i=0;i < index;i++){
						var g=this._children[i];
						if(g.inContainer)
							displayIndex++;
					}
					if(displayIndex==this._container.numChildren)
						displayIndex--;
					this._container.setChildIndex(child.displayObject,displayIndex);
					this.setBoundsChangedFlag();
				}
				return index;
			}

			__proto.swapChildren=function(child1,child2){
				var index1=this._children.indexOf(child1);
				var index2=this._children.indexOf(child2);
				if(index1==-1 || index2==-1)
					throw "Not a child of this container";
				this.swapChildrenAt(index1,index2);
			}

			__proto.swapChildrenAt=function(index1,index2){
				(index2===void 0)&& (index2=0);
				var child1=this._children[index1];
				var child2=this._children[index2];
				this.setChildIndex(child1,index2);
				this.setChildIndex(child2,index1);
			}

			__proto.isAncestorOf=function(child){
				if (child==null)
					return false;
				var p=child.parent;
				while(p){
					if(p==this)
						return true;
					p=p.parent;
				}
				return false;
			}

			__proto.addController=function(controller){
				this._controllers.push(controller);
				controller._parent=this;
				this.applyController(controller);
			}

			__proto.getControllerAt=function(index){
				return this._controllers[index];
			}

			__proto.getController=function(name){
				var cnt=this._controllers.length;
				for(var i=0;i < cnt;++i){
					var c=this._controllers[i];
					if(c.name==name)
						return c;
				}
				return null;
			}

			__proto.removeController=function(c){
				var index=this._controllers.indexOf(c);
				if(index==-1)
					throw new Error("controller not exists");
				c._parent=null;
				this._controllers.splice(index,1);
				var length=this._children.length;
				for(var i=0;i < length;i++){
					var child=this._children[i];
					child.handleControllerChanged(c);
				}
			}

			__proto.childStateChanged=function(child){
				if(this._buildingDisplayList)
					return;
				if((child instanceof fairygui.GGroup )){
					var length=this._children.length;
					for(var i=0;i < length;i++){
						var g=this._children[i];
						if(g.group==child)
							this.childStateChanged(g);
					}
					return;
				}
				if(!child.displayObject)
					return;
				if(child.finalVisible && child.displayObject!=this._displayObject.mask){
					if(!child.displayObject.parent){
						var index=0;
						var length1=this._children.length;
						for(var i1=0;i1 < length1;i1++){
							g=this._children[i1];
							if(g==child)
								break ;
							if(g.displayObject && g.displayObject.parent)
								index++;
						}
						this._container.addChildAt(child.displayObject,index);
					}
				}
				else {
					if(child.displayObject.parent)
						this._container.removeChild(child.displayObject);
				}
			}

			__proto.applyController=function(c){
				var child;
				var length=this._children.length;
				for(var i=0;i < length;i++){
					child=this._children[i];
					child.handleControllerChanged(c);
				}
			}

			__proto.applyAllControllers=function(){
				var cnt=this._controllers.length;
				for(var i=0;i < cnt;++i){
					this.applyController(this._controllers[i]);
				}
			}

			__proto.adjustRadioGroupDepth=function(obj,c){
				var cnt=this._children.length;
				var i=NaN;
				var child;
				var myIndex=-1,maxIndex=-1;
				for(i=0;i < cnt;i++){
					child=this._children[i];
					if(child==obj){
						myIndex=i;
					}
					else if(((child instanceof fairygui.GButton ))
					&& (child).relatedController==c){
						if(i > maxIndex)
							maxIndex=i;
					}
				}
				if(myIndex < maxIndex)
					this.swapChildrenAt(myIndex,maxIndex);
			}

			__proto.getTransitionAt=function(index){
				return this._transitions[index];
			}

			__proto.getTransition=function(transName){
				var cnt=this._transitions.length;
				for(var i=0;i < cnt;++i){
					var trans=this._transitions[i];
					if(trans.name==transName)
						return trans;
				}
				return null;
			}

			__proto.isChildInView=function(child){
				if(this._displayObject.scrollRect !=null){
					return child.x+child.width >=0 && child.x <=this.width
					&& child.y+child.height >=0 && child.y <=this.height;
				}
				else if(this._scrollPane !=null){
					return this._scrollPane.isChildInView(child);
				}
				else
				return true;
			}

			__proto.getFirstChildInView=function(){
				var cnt=this._children.length;
				for(var i=0;i < cnt;++i){
					var child=this._children[i];
					if(this.isChildInView(child))
						return i;
				}
				return-1;
			}

			__proto.updateHitArea=function(){
				if((this._displayObject.hitArea instanceof fairygui.utils.PixelHitTest )){
					var hitTest=(this._displayObject.hitArea);
					if(this.sourceWidth!=0)
						hitTest.scaleX=this.width/this.sourceWidth;
					if(this.sourceHeight!=0)
						hitTest.scaleY=this.height/this.sourceHeight;
				}
				else{
					if(this._displayObject.hitArea==null)
						this._displayObject.hitArea=new Rectangle();
					this._displayObject.hitArea.setTo(0,0,this.width,this.height);
				}
			}

			__proto.updateMask=function(){
				var rect=this._displayObject.scrollRect;
				if(rect==null)
					rect=new Rectangle();
				rect.x=this._margin.left;
				rect.y=this._margin.top;
				rect.width=this.width-this._margin.right;
				rect.height=this.height-this._margin.bottom;
				this._displayObject.scrollRect=rect;
			}

			__proto.setupScroll=function(scrollBarMargin,scroll,scrollBarDisplay,flags,vtScrollBarRes,hzScrollBarRes){
				if (this._displayObject==this._container){
					this._container=new Sprite();
					this._displayObject.addChild(this._container);
				}
				this._scrollPane=new ScrollPane(this,scroll,scrollBarMargin,scrollBarDisplay,flags,vtScrollBarRes,hzScrollBarRes);
			}

			__proto.setupOverflow=function(overflow){
				if(overflow==1){
					if (this._displayObject==this._container){
						this._container=new Sprite();
						this._displayObject.addChild(this._container);
					}
					this.updateMask();
					this._container.pos(this._margin.left,this._margin.top);
				}
				else if(this._margin.left !=0 || this._margin.top !=0){
					if (this._displayObject==this._container){
						this._container=new Sprite();
						this._displayObject.addChild(this._container);
					}
					this._container.pos(this._margin.left,this._margin.top);
				}
			}

			__proto.handleSizeChanged=function(){
				_super.prototype.handleSizeChanged.call(this);
				if(this._scrollPane)
					this._scrollPane.onOwnerSizeChanged();
				else if(this._displayObject.scrollRect !=null)
				this.updateMask();
				if(this._displayObject.hitArea!=null)
					this.updateHitArea();
			}

			__proto.handleGrayedChanged=function(){
				var c=this.getController("grayed");
				if(c !=null){
					c.selectedIndex=this.grayed ? 1 :0;
					return;
				};
				var v=this.grayed;
				var cnt=this._children.length;
				for(var i=0;i < cnt;++i){
					this._children[i].grayed=v;
				}
			}

			__proto.setBoundsChangedFlag=function(){
				if (!this._scrollPane && !this._trackBounds)
					return;
				if (!this._boundsChanged){
					this._boundsChanged=true;
					Laya.timer.callLater(this,this.__render);
				}
			}

			__proto.__render=function(){
				if (this._boundsChanged)
					this.updateBounds();
			}

			__proto.ensureBoundsCorrect=function(){
				if (this._boundsChanged)
					this.updateBounds();
			}

			__proto.updateBounds=function(){
				var ax=0,ay=0,aw=0,ah=0;
				var len=this._children.length;
				if(len > 0){
					ax=Number.POSITIVE_INFINITY,ay=Number.POSITIVE_INFINITY;
					var ar=Number.NEGATIVE_INFINITY,ab=Number.NEGATIVE_INFINITY;
					var tmp=0;
					var i1=0;
					for(i1=0;i1 < len;i1++){
						child=this._children[i1];
						child.ensureSizeCorrect();
					}
					for(i1=0;i1 < len;i1++){
						var child=this._children[i1];
						tmp=child.x;
						if(tmp < ax)
							ax=tmp;
						tmp=child.y;
						if(tmp < ay)
							ay=tmp;
						tmp=child.x+child.actualWidth;
						if(tmp > ar)
							ar=tmp;
						tmp=child.y+child.actualHeight;
						if(tmp > ab)
							ab=tmp;
					}
					aw=ar-ax;
					ah=ab-ay;
				}
				this.setBounds(ax,ay,aw,ah);
			}

			__proto.setBounds=function(ax,ay,aw,ah){
				this._boundsChanged=false;
				if (this._scrollPane)
					this._scrollPane.setContentSize(Math.round(ax+aw),Math.round(ay+ah));
			}

			__proto.getSnappingPosition=function(xValue,yValue,resultPoint){
				if(!resultPoint)
					resultPoint=new Point();
				var cnt=this._children.length;
				if(cnt==0){
					resultPoint.x=0;
					resultPoint.y=0;
					return resultPoint;
				}
				this.ensureBoundsCorrect();
				var obj=null;
				var prev=null;
				var i=0;
				if(yValue !=0){
					for(;i < cnt;i++){
						obj=this._children[i];
						if(yValue < obj.y){
							if(i==0){
								yValue=0;
								break ;
							}
							else {
								prev=this._children[i-1];
								if(yValue < prev.y+prev.actualHeight / 2)
									yValue=prev.y;
								else
								yValue=obj.y;
								break ;
							}
						}
					}
					if(i==cnt)
						yValue=obj.y;
				}
				if(xValue !=0){
					if(i > 0)
						i--;
					for(;i < cnt;i++){
						obj=this._children[i];
						if(xValue < obj.x){
							if(i==0){
								xValue=0;
								break ;
							}
							else {
								prev=this._children[i-1];
								if(xValue < prev.x+prev.actualWidth / 2)
									xValue=prev.x;
								else
								xValue=obj.x;
								break ;
							}
						}
					}
					if(i==cnt)
						xValue=obj.x;
				}
				resultPoint.x=xValue;
				resultPoint.y=yValue;
				return resultPoint;
			}

			__proto.childSortingOrderChanged=function(child,oldValue,newValue){
				(newValue===void 0)&& (newValue=0);
				if (newValue==0){
					this._sortingChildCount--;
					this.setChildIndex(child,this._children.length);
				}
				else {
					if (oldValue==0)
						this._sortingChildCount++;
					var oldIndex=this._children.indexOf(child);
					var index=this.getInsertPosForSortingChild(child);
					if (oldIndex < index)
						this._setChildIndex(child,oldIndex,index-1);
					else
					this._setChildIndex(child,oldIndex,index);
				}
			}

			__proto.constructFromResource=function(){
				this.constructFromResource2(null,0);
			}

			__proto.constructFromResource2=function(objectPool,poolIndex){
				var xml=this.packageItem.owner.getItemAsset(this.packageItem);
				this._underConstruct=true;
				var str;
				var arr;
				str=xml.getAttribute("size");
				arr=str.split(",");
				this._sourceWidth=parseInt(arr[0]);
				this._sourceHeight=parseInt(arr[1]);
				this._initWidth=this._sourceWidth;
				this._initHeight=this._sourceHeight;
				this.setSize(this._sourceWidth,this._sourceHeight);
				str=xml.getAttribute("pivot");
				if(str){
					arr=str.split(",");
					str=xml.getAttribute("anchor");
					this.internalSetPivot(parseFloat(arr[0]),parseFloat(arr[1]),str=="true");
				}
				str=xml.getAttribute("opaque");
				this.opaque=str !="false";
				str=xml.getAttribute("hitTest");
				if(str){
					arr=str.split(",");
					var hitTestData=this.packageItem.owner.getPixelHitTestData(arr[0]);
					if (hitTestData !=null){
						this._displayObject.hitArea=new PixelHitTest(hitTestData,parseInt(arr[1]),parseInt(arr[2]));
						this._displayObject.mouseThrough=false;
						this._displayObject.hitTestPrior=true;
					}
				};
				var overflow=0;
				str=xml.getAttribute("overflow");
				if (str)
					overflow=OverflowType.parse(str);
				else
				overflow=0;
				str=xml.getAttribute("margin");
				if(str)
					this._margin.parse(str);
				if(overflow==2){
					var scroll=0;
					str=xml.getAttribute("scroll");
					if (str)
						scroll=ScrollType.parse(str);
					else
					scroll=1;
					var scrollBarDisplay=0;
					str=xml.getAttribute("scrollBar");
					if (str)
						scrollBarDisplay=ScrollBarDisplayType.parse(str);
					else
					scrollBarDisplay=0;
					var scrollBarFlags=NaN;
					str=xml.getAttribute("scrollBarFlags");
					if(str)
						scrollBarFlags=parseInt(str);
					else
					scrollBarFlags=0;
					var scrollBarMargin=new Margin();
					str=xml.getAttribute("scrollBarMargin");
					if(str)
						scrollBarMargin.parse(str);
					var vtScrollBarRes;
					var hzScrollBarRes;
					str=xml.getAttribute("scrollBarRes");
					if(str){
						arr=str.split(",");
						vtScrollBarRes=arr[0];
						hzScrollBarRes=arr[1];
					}
					this.setupScroll(scrollBarMargin,scroll,scrollBarDisplay,scrollBarFlags,vtScrollBarRes,hzScrollBarRes);
				}
				else
				this.setupOverflow(overflow);
				this._buildingDisplayList=true;
				var col=xml.childNodes;
				var length1=0;
				if(col)
					length1=col.length;
				var i=0;
				var controller;
				for(i=0;i < length1;i++){
					var cxml=col[i];
					if(cxml.nodeName=="controller"){
						controller=new Controller();
						this._controllers.push(controller);
						controller._parent=this;
						controller.setup(cxml);
					}
				};
				var child;
				var displayList=this.packageItem.displayList;
				var childCount=displayList.length;
				for (i=0;i < childCount;i++){
					var di=displayList[i];
					if (objectPool !=null){
						child=objectPool[poolIndex+i];
					}
					else if (di.packageItem){
						child=UIObjectFactory.newObject(di.packageItem);
						child.packageItem=di.packageItem;
						child.constructFromResource();
					}
					else
					child=UIObjectFactory.newObject2(di.type);
					child._underConstruct=true;
					child.setup_beforeAdd(di.desc);
					child.parent=this;
					this._children.push(child);
				}
				this.relations.setup(xml);
				for (i=0;i < childCount;i++)
				this._children[i].relations.setup(displayList[i].desc);
				for (i=0;i < childCount;i++){
					child=this._children[i];
					child.setup_afterAdd(displayList[i].desc);
					child._underConstruct=false;
				}
				str=xml.getAttribute("mask");
				if(str)
					this.mask=this.getChildById(str).displayObject;
				var trans;
				for(i=0;i < length1;i++){
					cxml=col[i];
					if(cxml.nodeName=="transition"){
						trans=new Transition(this);
						this._transitions.push(trans);
						trans.setup(cxml);
					}
				}
				if(this._transitions.length>0){
					this.displayObject.on("display",this,this.___added);
					this.displayObject.on("undisplay",this,this.___removed);
				}
				this.applyAllControllers();
				this._buildingDisplayList=false;
				this._underConstruct=false;
				length1=this._children.length;
				var mm=this._displayObject.mask;
				for (i=0;i < length1;i++){
					child=this._children[i];
					if (child.displayObject !=null && child.displayObject!=mm && child.finalVisible)
						this._container.addChild(child.displayObject);
				}
				this.setBoundsChangedFlag();
				this.constructFromXML(xml);
			}

			__proto.constructFromXML=function(xml){}
			__proto.___added=function(){
				var cnt=this._transitions.length;
				for(var i=0;i < cnt;++i){
					var trans=this._transitions[i];
					if(trans.autoPlay)
						trans.play(null,trans.autoPlayRepeat,trans.autoPlayDelay);
				}
			}

			__proto.___removed=function(){
				var cnt=this._transitions.length;
				for(var i=0;i < cnt;++i){
					var trans=this._transitions[i];
					trans.stop(false,false);
				}
			}

			__getset(0,__proto,'viewWidth',function(){
				if (this._scrollPane !=null)
					return this._scrollPane.viewWidth;
				else
				return this.width-this._margin.left-this._margin.right;
				},function(value){
				if (this._scrollPane !=null)
					this._scrollPane.viewWidth=value;
				else
				this.width=value+this._margin.left+this._margin.right;
			});

			__getset(0,__proto,'numChildren',function(){
				return this._children.length;
			});

			__getset(0,__proto,'displayListContainer',function(){
				return this._container;
			});

			__getset(0,__proto,'opaque',function(){
				return this._displayObject.hitArea!=null;
				},function(value){
				if (value){
					this.updateHitArea();
					this._displayObject.mouseThrough=false;
				}
				else{
					this._displayObject.hitArea=null;
					this._displayObject.mouseThrough=true;
				}
			});

			__getset(0,__proto,'controllers',function(){
				return this._controllers;
			});

			__getset(0,__proto,'scrollPane',function(){
				return this._scrollPane;
			});

			__getset(0,__proto,'viewHeight',function(){
				if (this._scrollPane !=null)
					return this._scrollPane.viewHeight;
				else
				return this.height-this._margin.top-this._margin.bottom;
				},function(value){
				if (this._scrollPane !=null)
					this._scrollPane.viewHeight=value;
				else
				this.height=value+this._margin.top+this._margin.bottom;
			});

			__getset(0,__proto,'margin',function(){
				return this._margin;
				},function(value){
				this._margin.copy(value);
				if(this._displayObject.scrollRect!=null){
					this._container.pos(this._margin.left+this._alignOffset.x,this._margin.top+this._alignOffset.y);
				}
				this.handleSizeChanged();
			});

			__getset(0,__proto,'mask',function(){
				return this._displayObject.mask;
				},function(value){
				this._displayObject.mask=value;
			});

			return GComponent;
		})(GObject)


		//class fairygui.GearAnimation extends fairygui.GearBase
		var GearAnimation=(function(_super){
			var GearAnimationValue;
			function GearAnimation(owner){
				this._storage=null;
				this._default=null;
				GearAnimation.__super.call(this,owner);
			}

			__class(GearAnimation,'fairygui.GearAnimation',_super);
			var __proto=GearAnimation.prototype;
			__proto.init=function(){
				this._default=new GearAnimationValue((this._owner).playing,
				(this._owner).frame);
				this._storage={};
			}

			__proto.addStatus=function(pageId,value){
				if(value=="-")
					return;
				var gv;
				if (pageId==null)
					gv=this._default;
				else {
					gv=new GearAnimationValue();
					this._storage[pageId]=gv;
				};
				var arr=value.split(",");
				gv.frame=parseInt(arr[0]);
				gv.playing=arr[1]=="p";
			}

			__proto.apply=function(){
				this._owner._gearLocked=true;
				var gv=this._storage[this._controller.selectedPageId];
				if (!gv)
					gv=this._default;
				(this._owner).frame=gv.frame;
				(this._owner).playing=gv.playing;
				this._owner._gearLocked=false;
			}

			__proto.updateState=function(){
				if (this._controller==null || this._owner._gearLocked || this._owner._underConstruct)
					return;
				var mc=(this._owner);
				var gv=this._storage[this._controller.selectedPageId];
				if(!gv){
					gv=new GearAnimationValue();
					this._storage[this._controller.selectedPageId]=gv;
				}
				gv.frame=mc.frame;
				gv.playing=mc.playing;
			}

			GearAnimation.__init$=function(){
				//class GearAnimationValue
				GearAnimationValue=(function(){
					function GearAnimationValue(playing,frame){
						this.playing=false;
						this.frame=NaN;
						(playing===void 0)&& (playing=true);
						(frame===void 0)&& (frame=0);
						this.playing=playing;
						this.frame=frame;
					}
					__class(GearAnimationValue,'');
					return GearAnimationValue;
				})()
			}

			return GearAnimation;
		})(GearBase)


		//class fairygui.GearColor extends fairygui.GearBase
		var GearColor=(function(_super){
			function GearColor(owner){
				this._storage=null;
				this._default=null;
				GearColor.__super.call(this,owner);
			}

			__class(GearColor,'fairygui.GearColor',_super);
			var __proto=GearColor.prototype;
			__proto.init=function(){
				this._default=(this._owner).color;
				this._storage={};
			}

			__proto.addStatus=function(pageId,value){
				if(value=="-")
					return;
				if (pageId==null)
					this._default=value;
				else
				this._storage[pageId]=value;
			}

			__proto.apply=function(){
				this._owner._gearLocked=true;
				var data=this._storage[this._controller.selectedPageId];
				if (data !=undefined)
					(this._owner).color=data;
				else
				(this._owner).color=this._default;
				this._owner._gearLocked=false;
			}

			__proto.updateState=function(){
				if (this._controller==null || this._owner._gearLocked || this._owner._underConstruct)
					return;
				this._storage[this._controller.selectedPageId]=(this._owner).color;
			}

			return GearColor;
		})(GearBase)


		//class fairygui.GearDisplay extends fairygui.GearBase
		var GearDisplay=(function(_super){
			function GearDisplay(owner){
				this.pages=null;
				GearDisplay.__super.call(this,owner);
			}

			__class(GearDisplay,'fairygui.GearDisplay',_super);
			var __proto=GearDisplay.prototype;
			__proto.init=function(){
				this.pages=null;
			}

			__proto.apply=function(){
				if(!this._controller || this.pages==null || this.pages.length==0
					|| this.pages.indexOf(this._controller.selectedPageId)!=-1)
				this._owner.internalVisible++;
				else
				this._owner.internalVisible=0;
			}

			return GearDisplay;
		})(GearBase)


		//class fairygui.GearIcon extends fairygui.GearBase
		var GearIcon=(function(_super){
			function GearIcon(owner){
				this._storage=null;
				this._default=null;
				GearIcon.__super.call(this,owner);
			}

			__class(GearIcon,'fairygui.GearIcon',_super);
			var __proto=GearIcon.prototype;
			__proto.init=function(){
				this._default=this._owner.icon;
				this._storage={};
			}

			__proto.addStatus=function(pageId,value){
				if(pageId==null)
					this._default=value;
				else
				this._storage[pageId]=value;
			}

			__proto.apply=function(){
				this._owner._gearLocked=true;
				var data=this._storage[this._controller.selectedPageId];
				if(data!=undefined)
					this._owner.icon=String(data);
				else
				this._owner.icon=this._default;
				this._owner._gearLocked=false;
			}

			__proto.updateState=function(){
				if (this._controller==null || this._owner._gearLocked || this._owner._underConstruct)
					return;
				this._storage[this._controller.selectedPageId]=this._owner.icon;
			}

			return GearIcon;
		})(GearBase)


		//class fairygui.GearLook extends fairygui.GearBase
		var GearLook=(function(_super){
			var GearLookValue;
			function GearLook(owner){
				this.tweener=null;
				this._storage=null;
				this._default=null;
				this._tweenValue=null;
				this._tweenTarget=null;
				GearLook.__super.call(this,owner);
			}

			__class(GearLook,'fairygui.GearLook',_super);
			var __proto=GearLook.prototype;
			__proto.init=function(){
				this._default=new GearLookValue(this._owner.alpha,this._owner.rotation,this._owner.grayed);
				this._storage={};
			}

			__proto.addStatus=function(pageId,value){
				if(value=="-")
					return;
				var arr=value.split(",");
				var gv;
				if(pageId==null)
					gv=this._default;
				else {
					gv=new GearLookValue();
					this._storage[pageId]=gv;
				}
				gv.alpha=parseFloat(arr[0]);
				gv.rotation=parseInt(arr[1]);
				gv.grayed=arr[2]=="1" ? true :false;
			}

			__proto.apply=function(){
				var gv=this._storage[this._controller.selectedPageId];
				if(!gv)
					gv=this._default;
				if(this._tween && !UIPackage._constructing && !GearBase.disableAllTweenEffect){
					this._owner._gearLocked=true;
					this._owner.grayed=gv.grayed;
					this._owner._gearLocked=false;
					if (this.tweener !=null){
						if (this._tweenTarget.alpha !=gv.alpha || this._tweenTarget.rotation !=gv.rotation){
							this.tweener.complete();
							this.tweener=null;
						}
						else
						return;
					};
					var a=gv.alpha !=this._owner.alpha;
					var b=gv.rotation !=this._owner.rotation;
					if(a || b){
						this._owner.internalVisible++;
						this._tweenTarget=gv;
						if(this._tweenValue==null)
							this._tweenValue=new Point();
						this._tweenValue.x=this._owner.alpha;
						this._tweenValue.y=this._owner.rotation;
						this.tweener=Tween.to(this._tweenValue,
						{x:gv.alpha,y:gv.rotation },
						this._tweenTime*1000,
						this._easeType,
						Handler.create(this,this.__tweenComplete),
						this._delay*1000);
						this.tweener.update=Handler.create(this,this.__tweenUpdate,[a,b],false);
					}
				}
				else {
					this._owner._gearLocked=true;
					this._owner.grayed=gv.grayed;
					this._owner.alpha=gv.alpha;
					this._owner.rotation=gv.rotation;
					this._owner._gearLocked=false;
				}
			}

			__proto.__tweenUpdate=function(a,b){
				this._owner._gearLocked=true;
				if(a)
					this._owner.alpha=this._tweenValue.x;
				if(b)
					this._owner.rotation=this._tweenValue.y;
				this._owner._gearLocked=false;
			}

			__proto.__tweenComplete=function(){
				this._owner.internalVisible--;
				this.tweener=null;
				this._owner.displayObject.event("fui_gear_stop");
			}

			__proto.updateState=function(){
				if (this._controller==null || this._owner._gearLocked || this._owner._underConstruct)
					return;
				var gv=this._storage[this._controller.selectedPageId];
				if(!gv){
					gv=new GearLookValue();
					this._storage[this._controller.selectedPageId]=gv;
				}
				gv.alpha=this._owner.alpha;
				gv.rotation=this._owner.rotation;
				gv.grayed=this._owner.grayed;
			}

			GearLook.__init$=function(){
				//class GearLookValue
				GearLookValue=(function(){
					function GearLookValue(alpha,rotation,grayed){
						this.alpha=NaN;
						this.rotation=NaN;
						this.grayed=false;
						(alpha===void 0)&& (alpha=0);
						(rotation===void 0)&& (rotation=0);
						(grayed===void 0)&& (grayed=false);
						this.alpha=alpha;
						this.rotation=rotation;
						this.grayed=grayed;
					}
					__class(GearLookValue,'');
					return GearLookValue;
				})()
			}

			return GearLook;
		})(GearBase)


		//class fairygui.GGraph extends fairygui.GObject
		var GGraph=(function(_super){
			function GGraph(){
				this._type=NaN;
				this._lineSize=NaN;
				this._lineColor=null;
				this._fillColor=null;
				GGraph.__super.call(this);
				this._type=0;
				this._lineSize=1;
				this._lineColor="#000000"
				this._fillColor="#FFFFFF";
			}

			__class(GGraph,'fairygui.GGraph',_super);
			var __proto=GGraph.prototype;
			__proto.drawRect=function(lineSize,lineColor,fillColor){
				this._type=1;
				this._lineSize=lineSize;
				this._lineColor=lineColor;
				this._fillColor=fillColor;
				this.drawCommon();
			}

			__proto.drawEllipse=function(lineSize,lineColor,fillColor){
				this._type=2;
				this._lineSize=lineSize;
				this._lineColor=lineColor;
				this._fillColor=fillColor;
				this.drawCommon();
			}

			__proto.drawCommon=function(){
				this._displayObject.mouseEnabled=this.touchable;
				var gr=this._displayObject.graphics;
				gr.clear();
				var w=this.width;
				var h=this.height;
				if(w==0 || h==0)
					return;
				var fillColor=this._fillColor;
				var lineColor=this._lineColor;
				if(Render.isWebGL && ToolSet.startsWith(fillColor,"rgba")){
					var arr=fillColor.substring(5,fillColor.lastIndexOf(")")).split(",");
					var a=parseFloat(arr[3]);
					if(a==0)
						fillColor=null;
					else {
						fillColor=Utils.toHexColor((parseInt(arr[0])<<16)+(parseInt(arr[1])<<8)+parseInt(arr[2]));
						this.alpha=a;
					}
				}
				if (this._type==1)
					gr.drawRect(0,0,w,h,fillColor,this._lineSize>0?lineColor:null,this._lineSize);
				else
				gr.drawCircle(w/2,h/2,w/2,fillColor,this._lineSize>0?lineColor:null,this._lineSize);
				this._displayObject.repaint();
			}

			__proto.replaceMe=function(target){
				if (!this._parent)
					throw "parent not set";
				target.name=this.name;
				target.alpha=this.alpha;
				target.rotation=this.rotation;
				target.visible=this.visible;
				target.touchable=this.touchable;
				target.grayed=this.grayed;
				target.setXY(this.x,this.y);
				target.setSize(this.width,this.height);
				var index=this._parent.getChildIndex(this);
				this._parent.addChildAt(target,index);
				target.relations.copyFrom(this.relations);
				this._parent.removeChild(this,true);
			}

			__proto.addBeforeMe=function(target){
				if (this._parent==null)
					throw "parent not set";
				var index=this._parent.getChildIndex(this);
				this._parent.addChildAt(target,index);
			}

			__proto.addAfterMe=function(target){
				if (this._parent==null)
					throw "parent not set";
				var index=this._parent.getChildIndex(this);
				index++;
				this._parent.addChildAt(target,index);
			}

			__proto.setNativeObject=function(obj){
				this._type=0;
				this._displayObject.mouseEnabled=this.touchable;
				this._displayObject.graphics.clear();
				this._displayObject.addChild(obj);
			}

			__proto.createDisplayObject=function(){
				_super.prototype.createDisplayObject.call(this);
				this._displayObject.mouseEnabled=false;
			}

			__proto.handleSizeChanged=function(){
				_super.prototype.handleSizeChanged.call(this);
				if(this._type !=0)
					this.drawCommon();
			}

			__proto.setup_beforeAdd=function(xml){
				_super.prototype.setup_beforeAdd.call(this,xml);
				var type=xml.getAttribute("type");
				if (type && type!="empty"){
					var str;
					str=xml.getAttribute("lineSize");
					if (str)
						this._lineSize=parseInt(str);
					str=xml.getAttribute("lineColor");
					if (str){
						var c=ToolSet.convertFromHtmlColor(str,true);
						var a=((c >> 24)& 0xFF)/ 0xFF;
						if(a!=1)
							this._lineColor="rgba("+((c>>16)& 0xFF)+","+((c>>8)& 0xFF)+","+(c & 0xFF)+","+a+")";
						else
						this._lineColor=Utils.toHexColor(c & 0xFFFFFF);
					}
					str=xml.getAttribute("fillColor");
					if (str){
						c=ToolSet.convertFromHtmlColor(str,true);
						a=((c >> 24)& 0xFF)/ 0xFF;
						if(a!=1)
							this._fillColor="rgba("+((c>>16)& 0xFF)+","+((c>>8)& 0xFF)+","+(c & 0xFF)+","+a+")";
						else
						this._fillColor=Utils.toHexColor(c & 0xFFFFFF);
					}
					if (type=="rect")
						this._type=1;
					else
					this._type=2;
					this.drawCommon();
				}
			}

			return GGraph;
		})(GObject)


		//class fairygui.GGroup extends fairygui.GObject
		var GGroup=(function(_super){
			function GGroup(){
				this._updating=false;
				this._empty=false;
				GGroup.__super.call(this);
			}

			__class(GGroup,'fairygui.GGroup',_super);
			var __proto=GGroup.prototype;
			__proto.updateBounds=function(){
				if (this._updating || !this.parent)
					return;
				var cnt=this._parent.numChildren;
				var i=0;
				var child;
				var ax=Number.POSITIVE_INFINITY,ay=Number.POSITIVE_INFINITY;
				var ar=Number.NEGATIVE_INFINITY,ab=Number.NEGATIVE_INFINITY;
				var tmp=0;
				this._empty=true;
				for (i=0;i < cnt;i++){
					child=this._parent.getChildAt(i);
					if (child.group==this){
						tmp=child.x;
						if (tmp < ax)
							ax=tmp;
						tmp=child.y;
						if (tmp < ay)
							ay=tmp;
						tmp=child.x+child.width;
						if (tmp > ar)
							ar=tmp;
						tmp=child.y+child.height;
						if (tmp > ab)
							ab=tmp;
						this._empty=false;
					}
				}
				this._updating=true;
				if (!this._empty){
					this.setXY(ax,ay);
					this.setSize(ar-ax,ab-ay);
				}
				else
				this.setSize(0,0);
				this._updating=false;
			}

			__proto.moveChildren=function(dx,dy){
				if (this._updating || !this.parent)
					return;
				this._updating=true;
				var cnt=this._parent.numChildren;
				var i=0;
				var child;
				for (i=0;i < cnt;i++){
					child=this._parent.getChildAt(i);
					if (child.group==this){
						child.setXY(child.x+dx,child.y+dy);
					}
				}
				this._updating=false;
			}

			__proto.updateAlpha=function(){
				_super.prototype.updateAlpha.call(this);
				if(this._underConstruct)
					return;
				var cnt=this._parent.numChildren;
				var i=NaN;
				var child;
				for(i=0;i<cnt;i++){
					child=this._parent.getChildAt(i);
					if(child.group==this)
						child.alpha=this.alpha;
				}
			}

			return GGroup;
		})(GObject)


		//class fairygui.GearSize extends fairygui.GearBase
		var GearSize=(function(_super){
			var GearSizeValue;
			function GearSize(owner){
				this.tweener=null;
				this._storage=null;
				this._default=null;
				this._tweenValue=null;
				this._tweenTarget=null;
				GearSize.__super.call(this,owner);
			}

			__class(GearSize,'fairygui.GearSize',_super);
			var __proto=GearSize.prototype;
			__proto.init=function(){
				this._default=new GearSizeValue(this._owner.width,this._owner.height,
				this._owner.scaleX,this._owner.scaleY);
				this._storage={};
			}

			__proto.addStatus=function(pageId,value){
				if(value=="-")
					return;
				var arr=value.split(",");
				var gv;
				if (pageId==null)
					gv=this._default;
				else {
					gv=new GearSizeValue();
					this._storage[pageId]=gv;
				}
				gv.width=parseInt(arr[0]);
				gv.height=parseInt(arr[1]);
				if(arr.length>2){
					gv.scaleX=parseFloat(arr[2]);
					gv.scaleY=parseFloat(arr[3]);
				}
			}

			__proto.apply=function(){
				var gv=this._storage[this._controller.selectedPageId];
				if (!gv)
					gv=this._default;
				if(this._tween && !UIPackage._constructing && !GearBase.disableAllTweenEffect){
					if(this.tweener!=null){
						if (this._tweenTarget.width !=gv.width || this._tweenTarget.height !=gv.height
							|| this._tweenTarget.scaleX !=gv.scaleX || this._tweenTarget.scaleY !=gv.scaleY){
							this.tweener.complete();
							this.tweener=null;
						}
						else
						return;
					};
					var a=gv.width !=this._owner.width || gv.height !=this._owner.height;
					var b=gv.scaleX !=this._owner.scaleX || gv.scaleY !=this._owner.scaleY;
					if(a || b){
						this._owner.internalVisible++;
						this._tweenTarget=gv;
						if(this._tweenValue==null)
							this._tweenValue=new GearSizeValue();
						this._tweenValue.width=this._owner.width;
						this._tweenValue.height=this._owner.height;
						this._tweenValue.scaleX=this._owner.scaleX;
						this._tweenValue.scaleY=this._owner.scaleY;
						this.tweener=Tween.to(this._tweenValue,
						{width:gv.width,height:gv.height,scaleX:gv.scaleX,scaleY:gv.scaleY },
						this._tweenTime*1000,
						this._easeType,
						Handler.create(this,this.__tweenComplete),
						this._delay*1000);
						this.tweener.update=Handler.create(this,this.__tweenUpdate,[a,b],false);
					}
				}
				else {
					this._owner._gearLocked=true;
					this._owner.setSize(gv.width,gv.height,this._owner.gearXY.controller==this._controller);
					this._owner.setScale(gv.scaleX,gv.scaleY);
					this._owner._gearLocked=false;
				}
			}

			__proto.__tweenUpdate=function(a,b){
				this._owner._gearLocked=true;
				if(a)
					this._owner.setSize(this._tweenValue.width,this._tweenValue.height,this._owner.gearXY.controller==this._controller);
				if(b)
					this._owner.setScale(this._tweenValue.scaleX,this._tweenValue.scaleY);
				this._owner._gearLocked=false;
			}

			__proto.__tweenComplete=function(){
				this._owner.internalVisible--;
				this.tweener=null;
				this._owner.displayObject.event("fui_gear_stop");
			}

			__proto.updateState=function(){
				if (this._controller==null || this._owner._gearLocked || this._owner._underConstruct)
					return;
				var gv=this._storage[this._controller.selectedPageId];
				if(!gv){
					gv=new GearSizeValue();
					this._storage[this._controller.selectedPageId]=gv;
				}
				gv.width=this._owner.width;
				gv.height=this._owner.height;
				gv.scaleX=this._owner.scaleX;
				gv.scaleY=this._owner.scaleY;
			}

			__proto.updateFromRelations=function(dx,dy){
				if(this._controller==null || this._storage==null)
					return;
				for(var key in this._storage){
					var gv=this._storage[key];
					gv.width+=dx;
					gv.height+=dy;
				}
				this._default.width+=dx;
				this._default.height+=dy;
				this.updateState();
			}

			GearSize.__init$=function(){
				//class GearSizeValue
				GearSizeValue=(function(){
					function GearSizeValue(width,height,scaleX,scaleY){
						this.width=NaN;
						this.height=NaN;
						this.scaleX=NaN;
						this.scaleY=NaN;
						(width===void 0)&& (width=0);
						(height===void 0)&& (height=0);
						(scaleX===void 0)&& (scaleX=0);
						(scaleY===void 0)&& (scaleY=0);
						this.width=width;
						this.height=height;
						this.scaleX=scaleX;
						this.scaleY=scaleY;
					}
					__class(GearSizeValue,'');
					return GearSizeValue;
				})()
			}

			return GearSize;
		})(GearBase)


		//class fairygui.GImage extends fairygui.GObject
		var GImage=(function(_super){
			function GImage(){
				this.image=null;
				this._color=null;
				this._flip=0;
				GImage.__super.call(this);
				this._color="#FFFFFF";
			}

			__class(GImage,'fairygui.GImage',_super);
			var __proto=GImage.prototype;
			Laya.imps(__proto,{"fairygui.IColorGear":true})
			__proto.applyColor=function(){}
			__proto.createDisplayObject=function(){
				this._displayObject=this.image=new Image1();
				this.image.mouseEnabled=false;
				this._displayObject["$owner"]=this;
			}

			__proto.constructFromResource=function(){
				this.packageItem.load();
				this._sourceWidth=this.packageItem.width;
				this._sourceHeight=this.packageItem.height;
				this._initWidth=this._sourceWidth;
				this._initHeight=this._sourceHeight;
				this.image.scale9Grid=this.packageItem.scale9Grid;
				this.image.scaleByTile=this.packageItem.scaleByTile;
				this.image.tileGridIndice=this.packageItem.tileGridIndice;
				this.image.tex=this.packageItem.texture;
				this.setSize(this._sourceWidth,this._sourceHeight);
			}

			__proto.handleXYChanged=function(){
				_super.prototype.handleXYChanged.call(this);
				if(this._flip !=0){
					if(this.scaleX==-1)
						this.image.x+=this.width;
					if(this.scaleY==-1)
						this.image.y+=this.height;
				}
			}

			__proto.handleSizeChanged=function(){
				if(this.image.tex!=null){
					this.image.scaleTexture(this.width/this._sourceWidth,this.height/this._sourceHeight);
				}
			}

			__proto.setup_beforeAdd=function(xml){
				_super.prototype.setup_beforeAdd.call(this,xml);
				var str;
				str=xml.getAttribute("color");
				if(str)
					this.color=str;
				str=xml.getAttribute("flip");
				if(str)
					this.flip=FlipType.parse(str);
			}

			__getset(0,__proto,'color',function(){
				return this._color;
				},function(value){
				if(this._color !=value){
					this._color=value;
					this.updateGear(4);
					this.applyColor();
				}
			});

			//not supported yet
			__getset(0,__proto,'flip',function(){
				return this._flip;
				},function(value){
				if(this._flip!=value){
					this._flip=value;
					var sx=1,sy=1;
					if(this._flip==1 || this._flip==3)
						sx=-1;
					if(this._flip==2 || this._flip==3)
						sy=-1;
					this.setScale(sx,sy);
					this.handleXYChanged();
				}
			});

			return GImage;
		})(GObject)


		//class fairygui.GearText extends fairygui.GearBase
		var GearText=(function(_super){
			function GearText(owner){
				this._storage=null;
				this._default=null;
				GearText.__super.call(this,owner);
			}

			__class(GearText,'fairygui.GearText',_super);
			var __proto=GearText.prototype;
			__proto.init=function(){
				this._default=this._owner.text;
				this._storage={};
			}

			__proto.addStatus=function(pageId,value){
				if(pageId==null)
					this._default=value;
				else
				this._storage[pageId]=value;
			}

			__proto.apply=function(){
				this._owner._gearLocked=true;
				var data=this._storage[this._controller.selectedPageId];
				if(data!=undefined)
					this._owner.text=String(data);
				else
				this._owner.text=this._default;
				this._owner._gearLocked=false;
			}

			__proto.updateState=function(){
				if (this._controller==null || this._owner._gearLocked || this._owner._underConstruct)
					return;
				this._storage[this._controller.selectedPageId]=this._owner.text;
			}

			return GearText;
		})(GearBase)


		//class fairygui.GearXY extends fairygui.GearBase
		var GearXY=(function(_super){
			function GearXY(owner){
				this.tweener=null;
				this._storage=null;
				this._default=null;
				this._tweenValue=null;
				this._tweenTarget=null;
				GearXY.__super.call(this,owner);
			}

			__class(GearXY,'fairygui.GearXY',_super);
			var __proto=GearXY.prototype;
			__proto.init=function(){
				this._default=new Point(this._owner.x,this._owner.y);
				this._storage={};
			}

			__proto.addStatus=function(pageId,value){
				if(value=="-")
					return;
				var arr=value.split(",");
				var pt;
				if (pageId==null)
					pt=this._default;
				else {
					pt=new Point();
					this._storage[pageId]=pt;
				}
				pt.x=parseInt(arr[0]);
				pt.y=parseInt(arr[1]);
			}

			__proto.apply=function(){
				var pt=this._storage[this._controller.selectedPageId];
				if (!pt)
					pt=this._default;
				if(this._tween && !UIPackage._constructing && !GearBase.disableAllTweenEffect){
					if(this.tweener){
						if(this._tweenTarget.x!=pt.x || this._tweenTarget.y!=pt.y){
							this.tweener.complete();
							this.tweener=null;
						}
						else
						return;
					}
					if(this._owner.x !=pt.x || this._owner.y !=pt.y){
						this._owner.internalVisible++;
						this._tweenTarget=pt;
						if(this._tweenValue==null)
							this._tweenValue=new Point();
						this._tweenValue.x=this._owner.x;
						this._tweenValue.y=this._owner.y;
						this.tweener=Tween.to(this._tweenValue,
						{x:pt.x,y:pt.y },
						this._tweenTime*1000,
						this._easeType,
						Handler.create(this,this.__tweenComplete),
						this._delay*1000);
						this.tweener.update=Handler.create(this,this.__tweenUpdate,null,false);
					}
				}
				else {
					this._owner._gearLocked=true;
					this._owner.setXY(pt.x,pt.y);
					this._owner._gearLocked=false;
				}
			}

			__proto.__tweenUpdate=function(){
				this._owner._gearLocked=true;
				this._owner.setXY(this._tweenValue.x,this._tweenValue.y);
				this._owner._gearLocked=false;
			}

			__proto.__tweenComplete=function(){
				this._owner.internalVisible--;
				this.tweener=null;
				this._owner.displayObject.event("fui_gear_stop");
			}

			__proto.updateState=function(){
				if (this._controller==null || this._owner._gearLocked || this._owner._underConstruct)
					return;
				var pt=this._storage[this._controller.selectedPageId];
				if(!pt){
					pt=new Point();
					this._storage[this._controller.selectedPageId]=pt;
				}
				pt.x=this._owner.x;
				pt.y=this._owner.y;
			}

			__proto.updateFromRelations=function(dx,dy){
				if(this._controller==null || this._storage==null)
					return;
				for (var key in this._storage){
					var pt=this._storage[key];
					pt.x+=dx;
					pt.y+=dy;
				}
				this._default.x+=dx;
				this._default.y+=dy;
				this.updateState();
			}

			return GearXY;
		})(GearBase)


		//class fairygui.GLoader extends fairygui.GObject
		var GLoader=(function(_super){
			function GLoader(){
				this._url=null;
				this._align=null;
				this._valign=null;
				this._autoSize=false;
				this._fill=0;
				this._showErrorSign=false;
				this._playing=false;
				this._frame=0;
				this._color=null;
				this._contentItem=null;
				this._contentSourceWidth=0;
				this._contentSourceHeight=0;
				this._contentWidth=0;
				this._contentHeight=0;
				this._content=null;
				this._errorSign=null;
				this._updatingLayout=false;
				GLoader.__super.call(this);
				this._playing=true;
				this._url="";
				this._fill=0;
				this._align="left";
				this._valign="top";
				this._showErrorSign=true;
				this._color="#FFFFFF";
			}

			__class(GLoader,'fairygui.GLoader',_super);
			var __proto=GLoader.prototype;
			Laya.imps(__proto,{"fairygui.IAnimationGear":true,"fairygui.IColorGear":true})
			__proto.createDisplayObject=function(){
				_super.prototype.createDisplayObject.call(this);
				this._displayObject.mouseEnabled=true;
			}

			__proto.dispose=function(){
				if(this._contentItem==null && ((this._content instanceof fairygui.display.Image ))){
					var texture=(this._content).tex;
					if(texture !=null)
						this.freeExternal(texture);
				}
				_super.prototype.dispose.call(this);
			}

			__proto.applyColor=function(){}
			__proto.loadContent=function(){
				this.clearContent();
				if (!this._url)
					return;
				if(ToolSet.startsWith(this._url,"ui://"))
					this.loadFromPackage(this._url);
				else
				this.loadExternal();
			}

			__proto.loadFromPackage=function(itemURL){
				this._contentItem=UIPackage.getItemByURL(itemURL);
				if(this._contentItem !=null){
					this._contentItem.load();
					if(this._contentItem.type==0){
						if(this._contentItem.texture==null){
							this.setErrorState();
						}
						else {
							if(!((this._content instanceof fairygui.display.Image ))){
								this._content=new Image1();
								this._displayObject.addChild(this._content);
							}
							else
							this._displayObject.addChild(this._content);
							(this._content).tex=this._contentItem.texture;
							(this._content).scale9Grid=this._contentItem.scale9Grid;
							(this._content).scaleByTile=this._contentItem.scaleByTile;
							(this._content).tileGridIndice=this._contentItem.tileGridIndice;
							this._contentSourceWidth=this._contentItem.width;
							this._contentSourceHeight=this._contentItem.height;
							this.updateLayout();
						}
					}
					else if(this._contentItem.type==2){
						if(!((this._content instanceof fairygui.display.MovieClip ))){
							this._content=new MovieClip1();
							this._displayObject.addChild(this._content);
						}
						else
						this._displayObject.addChild(this._content);
						this._contentSourceWidth=this._contentItem.width;
						this._contentSourceHeight=this._contentItem.height;
						(this._content).interval=this._contentItem.interval;
						(this._content).swing=this._contentItem.swing;
						(this._content).repeatDelay=this._contentItem.repeatDelay;
						(this._content).frames=this._contentItem.frames;
						(this._content).boundsRect=new Rectangle(0,0,this._contentSourceWidth,this._contentSourceHeight);
						this.updateLayout();
					}
					else
					this.setErrorState();
				}
				else
				this.setErrorState();
			}

			__proto.loadExternal=function(){
				AssetProxy.inst.load(this._url,Handler.create(this,this.__getResCompleted));
			}

			__proto.freeExternal=function(texture){}
			__proto.onExternalLoadSuccess=function(texture){
				if(!((this._content instanceof fairygui.display.Image ))){
					this._content=new Image1();
					this._displayObject.addChild(this._content);
				}
				else
				this._displayObject.addChild(this._content);
				(this._content).tex=texture;
				(this._content).scale9Grid=null;
				(this._content).scaleByTile=false;
				this._contentSourceWidth=texture.width;
				this._contentSourceHeight=texture.height;
				this.updateLayout();
			}

			__proto.onExternalLoadFailed=function(){
				this.setErrorState();
			}

			__proto.__getResCompleted=function(tex){
				if(tex!=null)
					this.onExternalLoadSuccess(tex);
				else
				this.onExternalLoadFailed();
			}

			__proto.setErrorState=function(){
				if (!this._showErrorSign)
					return;
				if (this._errorSign==null){
					if (UIConfig1.loaderErrorSign !=null){
						this._errorSign=fairygui.GLoader._errorSignPool.getObject(UIConfig1.loaderErrorSign);
					}
				}
				if (this._errorSign !=null){
					this._errorSign.width=this.width;
					this._errorSign.height=this.height;
					this._displayObject.addChild(this._errorSign.displayObject);
				}
			}

			__proto.clearErrorState=function(){
				if (this._errorSign !=null){
					this._displayObject.removeChild(this._errorSign.displayObject);
					fairygui.GLoader._errorSignPool.returnObject(this._errorSign);
					this._errorSign=null;
				}
			}

			__proto.updateLayout=function(){
				if (this._content==null){
					if (this._autoSize){
						this._updatingLayout=true;
						this.setSize(50,30);
						this._updatingLayout=false;
					}
					return;
				}
				this._content.x=0;
				this._content.y=0;
				this._content.scaleX=1;
				this._content.scaleY=1;
				this._contentWidth=this._contentSourceWidth;
				this._contentHeight=this._contentSourceHeight;
				if (this._autoSize){
					this._updatingLayout=true;
					if (this._contentWidth==0)
						this._contentWidth=50;
					if (this._contentHeight==0)
						this._contentHeight=30;
					this.setSize(this._contentWidth,this._contentHeight);
					this._updatingLayout=false;
				}
				else {
					var sx=1,sy=1;
					if(this._fill!=0){
						sx=this.width/this._contentSourceWidth;
						sy=this.height/this._contentSourceHeight;
						if(sx!=1 || sy!=1){
							if (this._fill==2)
								sx=sy;
							else if (this._fill==3)
							sy=sx;
							else if (this._fill==1){
								if (sx > sy)
									sx=sy;
								else
								sy=sx;
							}
							this._contentWidth=this._contentSourceWidth *sx;
							this._contentHeight=this._contentSourceHeight *sy;
						}
					}
					if ((this._content instanceof fairygui.display.Image ))
						(this._content).scaleTexture(sx,sy);
					else
					this._content.scale(sx,sy);
					if (this._align=="center")
						this._content.x=Math.floor((this.width-this._contentWidth)/ 2);
					else if (this._align=="right")
					this._content.x=this.width-this._contentWidth;
					if (this._valign=="middle")
						this._content.y=Math.floor((this.height-this._contentHeight)/ 2);
					else if (this._valign=="bottom")
					this._content.y=this.height-this._contentHeight;
				}
			}

			__proto.clearContent=function(){
				this.clearErrorState();
				if (this._content !=null && this._content.parent !=null)
					this._displayObject.removeChild(this._content);
				if(this._contentItem==null && ((this._content instanceof fairygui.display.Image ))){
					var texture=(this._content).tex;
					if(texture !=null)
						this.freeExternal(texture);
				}
				this._contentItem=null;
			}

			__proto.handleSizeChanged=function(){
				_super.prototype.handleSizeChanged.call(this);
				if(!this._updatingLayout)
					this.updateLayout();
			}

			__proto.setup_beforeAdd=function(xml){
				_super.prototype.setup_beforeAdd.call(this,xml);
				var str;
				str=xml.getAttribute("url");
				if (str)
					this._url=str;
				str=xml.getAttribute("align");
				if (str)
					this._align=str;
				str=xml.getAttribute("vAlign");
				if (str)
					this._valign=str;
				str=xml.getAttribute("fill");
				if (str)
					this._fill=LoaderFillType.parse(str);
				this._autoSize=xml.getAttribute("autoSize")=="true";
				str=xml.getAttribute("errorSign");
				if (str)
					this._showErrorSign=str=="true";
				this._playing=xml.getAttribute("playing")!="false";
				str=xml.getAttribute("color");
				if(str)
					this.color=str;
				if (this._url)
					this.loadContent();
			}

			__getset(0,__proto,'frame',function(){
				return this._frame;
				},function(value){
				if (this._frame !=value){
					this._frame=value;
					if ((this._content instanceof fairygui.display.MovieClip ))
						(this._content).currentFrame=value;
					this.updateGear(5);
				}
			});

			__getset(0,__proto,'url',function(){
				return this._url;
				},function(value){
				if (this._url==value)
					return;
				this._url=value;
				this.loadContent();
				this.updateGear(7);
			});

			__getset(0,__proto,'align',function(){
				return this._align;
				},function(value){
				if (this._align !=value){
					this._align=value;
					this.updateLayout();
				}
			});

			__getset(0,__proto,'color',function(){
				return this._color;
				},function(value){
				if(this._color !=value){
					this._color=value;
					this.updateGear(4);
					this.applyColor();
				}
			});

			__getset(0,__proto,'fill',function(){
				return this._fill;
				},function(value){
				if (this._fill !=value){
					this._fill=value;
					this.updateLayout();
				}
			});

			__getset(0,__proto,'verticalAlign',function(){
				return this._valign;
				},function(value){
				if (this._valign !=value){
					this._valign=value;
					this.updateLayout();
				}
			});

			__getset(0,__proto,'icon',function(){
				return this._url;
				},function(value){
				this.url=value;
			});

			//todo:
			__getset(0,__proto,'showErrorSign',function(){
				return this._showErrorSign;
				},function(value){
				this._showErrorSign=value;
			});

			__getset(0,__proto,'autoSize',function(){
				return this._autoSize;
				},function(value){
				if (this._autoSize !=value){
					this._autoSize=value;
					this.updateLayout();
				}
			});

			__getset(0,__proto,'playing',function(){
				return this._playing;
				},function(value){
				if (this._playing !=value){
					this._playing=value;
					if ((this._content instanceof fairygui.display.MovieClip ))
						(this._content).playing=value;
					this.updateGear(5);
				}
			});

			__getset(0,__proto,'content',function(){
				return this._content;
			});

			__static(GLoader,
			['_errorSignPool',function(){return this._errorSignPool=new GObjectPool();}
			]);
			return GLoader;
		})(GObject)


		//class fairygui.GMovieClip extends fairygui.GObject
		var GMovieClip=(function(_super){
			function GMovieClip(){
				this.movieClip=null;
				GMovieClip.__super.call(this);
				this._sizeImplType=1;
			}

			__class(GMovieClip,'fairygui.GMovieClip',_super);
			var __proto=GMovieClip.prototype;
			Laya.imps(__proto,{"fairygui.IAnimationGear":true,"fairygui.IColorGear":true})
			__proto.createDisplayObject=function(){
				this._displayObject=this.movieClip=new MovieClip1();
				this.movieClip.mouseEnabled=false;
				this._displayObject["$owner"]=this;
			}

			//从start帧开始，播放到end帧（-1表示结尾），重复times次（0表示无限循环），循环结束后，停止在endAt帧（-1表示参数end）
			__proto.setPlaySettings=function(start,end,times,endAt,endHandler){
				(start===void 0)&& (start=0);
				(end===void 0)&& (end=-1);
				(times===void 0)&& (times=0);
				(endAt===void 0)&& (endAt=-1);
				this.movieClip.setPlaySettings(start,end,times,endAt,endHandler);
			}

			__proto.constructFromResource=function(){
				this._sourceWidth=this.packageItem.width;
				this._sourceHeight=this.packageItem.height;
				this._initWidth=this._sourceWidth;
				this._initHeight=this._sourceHeight;
				this.setSize(this._sourceWidth,this._sourceHeight);
				this.packageItem.load();
				this.movieClip.interval=this.packageItem.interval;
				this.movieClip.swing=this.packageItem.swing;
				this.movieClip.repeatDelay=this.packageItem.repeatDelay;
				this.movieClip.frames=this.packageItem.frames;
				this.movieClip.boundsRect=new Rectangle(0,0,this.sourceWidth,this.sourceHeight);
			}

			__proto.setup_beforeAdd=function(xml){
				_super.prototype.setup_beforeAdd.call(this,xml);
				var str;
				str=xml.getAttribute("frame");
				if (str)
					this.movieClip.currentFrame=parseInt(str);
				str=xml.getAttribute("playing");
				this.movieClip.playing=str !="false";
				str=xml.getAttribute("color");
				if(str)
					this.color=str;
			}

			__getset(0,__proto,'color',function(){
				return "#FFFFFF";
				},function(value){
			});

			__getset(0,__proto,'playing',function(){
				return this.movieClip.playing;
				},function(value){
				if (this.movieClip.playing !=value){
					this.movieClip.playing=value;
					this.updateGear(5);
				}
			});

			__getset(0,__proto,'frame',function(){
				return this.movieClip.currentFrame;
				},function(value){
				if (this.movieClip.currentFrame !=value){
					this.movieClip.currentFrame=value;
					this.updateGear(5);
				}
			});

			return GMovieClip;
		})(GObject)


		//class fairygui.GBasicTextField extends fairygui.GTextField
		var GBasicTextField=(function(_super){
			var LineInfo,TextExt;
			function GBasicTextField(){
				this.textField=null;
				this._font=null;
				this._color=null;
				this._text=null;
				this._ubbEnabled=false;
				this._singleLine=false;
				this._letterSpacing=0;
				this._autoSize=0;
				this._widthAutoSize=false;
				this._heightAutoSize=false;
				this._updatingSize=false;
				this._textWidth=0;
				this._textHeight=0;
				this._bitmapFont=null;
				this._lines=null;
				GBasicTextField.__super.call(this);
				this._text="";
				this._color="#000000";
				this.setAutoSize(1);
				this.textField.align="left";
				this.textField.font=UIConfig1.defaultFont;
			}

			__class(GBasicTextField,'fairygui.GBasicTextField',_super);
			var __proto=GBasicTextField.prototype;
			__proto.createDisplayObject=function(){
				this._displayObject=this.textField=new TextExt(this);
				this._displayObject["$owner"]=this;
				this._displayObject.mouseEnabled=false;
			}

			__proto.setAutoSize=function(value){
				this._autoSize=value;
				this._widthAutoSize=value==1;
				this._heightAutoSize=value==1 || value==2;
				this.textField.wordWrap=!this._widthAutoSize;
				if(!this._underConstruct){
					if(!this._heightAutoSize)
						this.textField.size(this.width,this.height);
					else if(!this._widthAutoSize)
					this.textField.width=this.width;
				}
			}

			__proto.ensureSizeCorrect=function(){
				if (!this._underConstruct && this.textField["_isChanged"])
					this.textField.typeset();
			}

			__proto.typeset=function(){
				if(this._bitmapFont!=null)
					this.renderWithBitmapFont();
				else if(this._widthAutoSize || this._heightAutoSize)
				this.updateSize();
			}

			__proto.updateSize=function(){
				this._textWidth=Math.ceil(this.textField.textWidth);
				this._textHeight=Math.ceil(this.textField.textHeight);
				var w=NaN,h=0;
				if(this._widthAutoSize){
					w=this._textWidth;
					if(this.textField.width!=w){
						this.textField.width=w;
						if(this.textField.align!="left")
							this.textField["baseTypeset"]();
					}
				}
				else
				w=this.width;
				if(this._heightAutoSize){
					h=this._textHeight;
					if(!this._widthAutoSize){
						if(this.textField.height!=this._textHeight)
							this.textField.height=this._textHeight;
					}
				}
				else {
					h=this.height;
					if(this._textHeight > h)
						this._textHeight=h;
					if(this.textField.height!=this._textHeight)
						this.textField.height=this._textHeight;
				}
				this._updatingSize=true;
				this.setSize(w,h);
				this._updatingSize=false;
			}

			__proto.renderWithBitmapFont=function(){
				var gr=this._displayObject.graphics;
				gr.clear();
				if (!this._lines)
					this._lines=[];
				else
				LineInfo.returnList(this._lines);
				var letterSpacing=this.letterSpacing;
				var lineSpacing=this.leading-1;
				var rectWidth=this.width-2 *2;
				var lineWidth=0,lineHeight=0,lineTextHeight=0;
				var glyphWidth=0,glyphHeight=0;
				var wordChars=0,wordStart=0,wordEnd=0;
				var lastLineHeight=0;
				var lineBuffer="";
				var lineY=2;
				var line;
				var wordWrap=!this._widthAutoSize && !this._singleLine;
				var fontScale=this._bitmapFont.resizable?this.fontSize/this._bitmapFont.size:1;
				this._textWidth=0;
				this._textHeight=0;
				var textLength=this._text.length;
				for (var offset=0;offset < textLength;++offset){
					var ch=this._text.charAt(offset);
					var cc=ch.charCodeAt(offset);
					if (ch=="\n"){
						lineBuffer+=ch;
						line=LineInfo.borrow();
						line.width=lineWidth;
						if (lineTextHeight==0){
							if (lastLineHeight==0)
								lastLineHeight=Math.ceil(this.fontSize*fontScale);
							if (lineHeight==0)
								lineHeight=lastLineHeight;
							lineTextHeight=lineHeight;
						}
						line.height=lineHeight;
						lastLineHeight=lineHeight;
						line.textHeight=lineTextHeight;
						line.text=lineBuffer;
						line.y=lineY;
						lineY+=(line.height+lineSpacing);
						if (line.width > this._textWidth)
							this._textWidth=line.width;
						this._lines.push(line);
						lineBuffer="";
						lineWidth=0;
						lineHeight=0;
						lineTextHeight=0;
						wordChars=0;
						wordStart=0;
						wordEnd=0;
						continue ;
					}
					if (cc > 256 || cc <=32){
						if (wordChars > 0)
							wordEnd=lineWidth;
						wordChars=0;
					}
					else {
						if (wordChars==0)
							wordStart=lineWidth;
						wordChars++;
					}
					if (ch==" "){
						glyphWidth=Math.ceil(this.fontSize / 2);
						glyphHeight=Math.ceil(this.fontSize);
					}
					else {
						var glyph=this._bitmapFont.glyphs[ch];
						if (glyph){
							glyphWidth=Math.ceil(glyph.advance*fontScale);
							glyphHeight=Math.ceil(glyph.lineHeight*fontScale);
						}
						else if (ch==" "){
							glyphWidth=Math.ceil(this._bitmapFont.size*fontScale/2);
							glyphHeight=Math.ceil(this._bitmapFont.size*fontScale);
						}
						else {
							glyphWidth=0;
							glyphHeight=0;
						}
					}
					if (glyphHeight > lineTextHeight)
						lineTextHeight=glyphHeight;
					if (glyphHeight > lineHeight)
						lineHeight=glyphHeight;
					if (lineWidth !=0)
						lineWidth+=letterSpacing;
					lineWidth+=glyphWidth;
					if (!wordWrap || lineWidth <=rectWidth){
						lineBuffer+=ch;
					}
					else {
						line=LineInfo.borrow();
						line.height=lineHeight;
						line.textHeight=lineTextHeight;
						if (lineBuffer.length==0){
							line.text=ch;
						}
						else if (wordChars > 0 && wordEnd > 0){
							lineBuffer+=ch;
							var len=lineBuffer.length-wordChars;
							line.text=ToolSet.trimRight(lineBuffer.substr(0,len));
							line.width=wordEnd;
							lineBuffer=lineBuffer.substr(len+1);
							lineWidth-=wordStart;
						}
						else {
							line.text=lineBuffer;
							line.width=lineWidth-(glyphWidth+letterSpacing);
							lineBuffer=ch;
							lineWidth=glyphWidth;
							lineHeight=glyphHeight;
							lineTextHeight=glyphHeight;
						}
						line.y=lineY;
						lineY+=(line.height+lineSpacing);
						if (line.width > this._textWidth)
							this._textWidth=line.width;
						wordChars=0;
						wordStart=0;
						wordEnd=0;
						this._lines.push(line);
					}
				}
				if (lineBuffer.length > 0
					|| this._lines.length > 0 && ToolSet.endsWith(this._lines[this._lines.length-1].text,"\n")){
					line=LineInfo.borrow();
					line.width=lineWidth;
					if (lineHeight==0)
						lineHeight=lastLineHeight;
					if (lineTextHeight==0)
						lineTextHeight=lineHeight;
					line.height=lineHeight;
					line.textHeight=lineTextHeight;
					line.text=lineBuffer;
					line.y=lineY;
					if (line.width > this._textWidth)
						this._textWidth=line.width;
					this._lines.push(line);
				}
				if (this._textWidth > 0)
					this._textWidth+=2 *2;
				var count=this._lines.length;
				if (count==0){
					this._textHeight=0;
				}
				else {
					line=this._lines[this._lines.length-1];
					this._textHeight=line.y+line.height+2;
				};
				var w=NaN,h=0;
				if (this._widthAutoSize){
					if (this._textWidth==0)
						w=0;
					else
					w=this._textWidth;
				}
				else
				w=this.width;
				if (this._heightAutoSize){
					if (this._textHeight==0)
						h=0;
					else
					h=this._textHeight;
				}
				else
				h=this.height;
				this._updatingSize=true;
				this.setSize(w,h);
				this._updatingSize=false;
				this.doAlign();
				if (w==0 || h==0)
					return;
				var charX=2;
				var lineIndent=0;
				var charIndent=0;
				rectWidth=this.width-2 *2;
				var lineCount=this._lines.length;
				for (var i=0;i < lineCount;i++){
					line=this._lines[i];
					charX=2;
					if (this.align=="center")
						lineIndent=(rectWidth-line.width)/ 2;
					else if (this.align=="right")
					lineIndent=rectWidth-line.width;
					else
					lineIndent=0;
					textLength=line.text.length;
					for (var j=0;j < textLength;j++){
						ch=line.text.charAt(j);
						glyph=this._bitmapFont.glyphs[ch];
						if (glyph !=null){
							charIndent=(line.height+line.textHeight)/ 2-Math.ceil(glyph.lineHeight*fontScale);
							gr.drawTexture(glyph.texture,
							charX+lineIndent+Math.ceil(glyph.offsetX*fontScale),
							line.y+charIndent+Math.ceil(glyph.offsetY*fontScale),
							glyph.texture.width *fontScale,
							glyph.texture.height *fontScale);
							charX+=letterSpacing+Math.ceil(glyph.advance*fontScale);
						}
						else if (ch==" "){
							charX+=letterSpacing+Math.ceil(this._bitmapFont.size*fontScale/2);
						}
						else {
							charX+=letterSpacing;
						}
					}
				}
			}

			//line loop
			__proto.handleSizeChanged=function(){
				if(this._updatingSize)
					return;
				if(this._underConstruct)
					this.textField.size(this.width,this.height);
				else{
					if(this._bitmapFont!=null){
						if(!this._widthAutoSize)
							this.textField["setChanged"]();
						else
						this.doAlign();
					}
					else {
						if(!this._widthAutoSize){
							if(!this._heightAutoSize)
								this.textField.size(this.width,this.height);
							else
							this.textField.width=this.width;
						}
					}
				}
			}

			__proto.handleGrayedChanged=function(){
				fairygui.GObject.prototype.handleGrayedChanged.call(this);
				if(this.grayed)
					this.textField.color="#AAAAAA";
				else
				this.textField.color=this._color;
			}

			__proto.doAlign=function(){
				if(this.valign=="top" || this._textHeight==0)
					this._yOffset=2;
				else {
					var dh=this.height-this._textHeight;
					if(dh < 0)
						dh=0;
					if(this.valign=="middle")
						this._yOffset=Math.floor(dh / 2);
					else
					this._yOffset=Math.floor(dh);
				}
				this.handleXYChanged();
			}

			__proto.setup_beforeAdd=function(xml){
				_super.prototype.setup_beforeAdd.call(this,xml);
				var str;
				str=xml.getAttribute("autoSize");
				if (str)
					this.setAutoSize(AutoSizeType.parse(str));
			}

			__getset(0,__proto,'bold',function(){
				return this.textField.bold;
				},function(value){
				this.textField.bold=value;
			});

			__getset(0,__proto,'letterSpacing',function(){
				return this._letterSpacing;
				},function(value){
				this._letterSpacing=value;
			});

			__getset(0,__proto,'align',function(){
				return this.textField.align;
				},function(value){
				this.textField.align=value;
			});

			__getset(0,__proto,'text',function(){
				return this._text;
				},function(value){
				this._text=value;
				if(this._text==null)
					this._text="";
				if(this._bitmapFont==null){
					if(this._widthAutoSize)
						this.textField.width=10000;
					if(this._ubbEnabled)
						this.textField.text=ToolSet.removeUBB(ToolSet.encodeHTML(this._text));
					else
					this.textField.text=this._text;
				}
				else{
					this.textField.text="";
					this.textField["setChanged"]();
				}
				if(this.parent && this.parent._underConstruct)
					this.textField.typeset();
			});

			__getset(0,__proto,'color',function(){
				return this._color;
				},function(value){
				if (this._color !=value){
					this._color=value;
					if (this._gearColor.controller)
						this._gearColor.updateState();
					if(this.grayed)
						this.textField.color="#AAAAAA";
					else
					this.textField.color=this._color;
				}
			});

			__getset(0,__proto,'font',function(){
				return this.textField.font;
				},function(value){
				this._font=value;
				if(ToolSet.startsWith(this._font,"ui://")){
					this._bitmapFont=UIPackage.getBitmapFontByURL(this._font);
					this.textField["setChanged"]();
				}
				else {
					this._bitmapFont=null;
					if(this._font)
						this.textField.font=this._font;
					else
					this.textField.font=UIConfig1.defaultFont;
				}
			});

			__getset(0,__proto,'leading',function(){
				return this.textField.leading;
				},function(value){
				this.textField.leading=value;
			});

			__getset(0,__proto,'fontSize',function(){
				return this.textField.fontSize;
				},function(value){
				this.textField.fontSize=value;
			});

			__getset(0,__proto,'valign',function(){
				return this.textField.valign;
				},function(value){
				this.textField.valign=value;
			});

			__getset(0,__proto,'italic',function(){
				return this.textField.italic;
				},function(value){
				this.textField.italic=value;
			});

			__getset(0,__proto,'underline',function(){
				return this.textField.underline;
				},function(value){
				this.textField.underline=value;
			});

			__getset(0,__proto,'singleLine',function(){
				return this._singleLine;
				},function(value){
				this._singleLine=value;
			});

			__getset(0,__proto,'stroke',function(){
				return this.textField.stroke;
				},function(value){
				this.textField.stroke=value;
			});

			__getset(0,__proto,'strokeColor',function(){
				return this.textField.strokeColor;
				},function(value){
				this.textField.strokeColor=value;
			});

			__getset(0,__proto,'ubbEnabled',function(){
				return this._ubbEnabled;
				},function(value){
				this._ubbEnabled=value;
			});

			__getset(0,__proto,'autoSize',function(){
				return this._autoSize;
				},function(value){
				if (this._autoSize !=value){
					this.setAutoSize(value);
				}
			});

			__getset(0,__proto,'textWidth',function(){
				if (this.textField["_isChanged"])
					this.textField.typeset();
				return this._textWidth;
			});

			GBasicTextField.GUTTER_X=2;
			GBasicTextField.GUTTER_Y=2;
			GBasicTextField.__init$=function(){
				//class LineInfo
				LineInfo=(function(){
					function LineInfo(){
						this.width=0;
						this.height=0;
						this.textHeight=0;
						this.text=null;
						this.y=0;
					}
					__class(LineInfo,'');
					LineInfo.borrow=function(){
						if (LineInfo.pool.length){
							var ret=LineInfo.pool.pop();
							ret.width=0;
							ret.height=0;
							ret.textHeight=0;
							ret.text=null;
							ret.y=0;
							return ret;
						}
						else
						return new LineInfo();
					}
					LineInfo.returns=function(value){
						LineInfo.pool.push(value);
					}
					LineInfo.returnList=function(value){
						var length=value.length;
						for (var i=0;i < length;i++){
							var li=value[i];
							LineInfo.pool.push(li);
						}
						value.length=0;
					}
					LineInfo.pool=[];
					return LineInfo;
				})()
				//class TextExt extends laya.display.Text
				TextExt=(function(_super){
					function TextExt(owner){
						this._owner=null;
						this._lock=false;
						TextExt.__super.call(this);
						this._owner=owner;
					}
					__class(TextExt,'',_super);
					var __proto=TextExt.prototype;
					__proto.baseTypeset=function(){
						this._lock=true;
						this.typeset();
						this._lock=false;
					}
					__proto.typeset=function(){
						_super.prototype.typeset.call(this);
						if(!this._lock)
							this._owner.typeset();
						if(this._isChanged){
							Laya.timer.clear(this,this.typeset);
							this._isChanged=false;
						}
					}
					__proto.setChanged=function(){
						this.isChanged=true;
					}
					__getset(0,__proto,'isChanged',null,function(value){
						if (this._isChanged!==value){
							if(this._owner.autoSize!=0)
								this.event("fui_size_delay_change");
						}
						_super.prototype._$set_isChanged.call(this,value);
					});
					return TextExt;
				})(Text)
			}

			return GBasicTextField;
		})(GTextField)


		//class fairygui.GButton extends fairygui.GComponent
		var GButton=(function(_super){
			function GButton(){
				this._titleObject=null;
				this._iconObject=null;
				this._relatedController=null;
				this._mode=0;
				this._selected=false;
				this._title=null;
				this._selectedTitle=null;
				this._icon=null;
				this._selectedIcon=null;
				this._sound=null;
				this._soundVolumeScale=0;
				this._pageOption=null;
				this._buttonController=null;
				this._changeStateOnClick=false;
				this._linkedPopup=null;
				this._downEffect=0;
				this._downEffectValue=0;
				this._down=false;
				this._over=false;
				GButton.__super.call(this);
				this._mode=0;
				this._title="";
				this._icon="";
				this._sound=UIConfig1.buttonSound;
				this._soundVolumeScale=UIConfig1.buttonSoundVolumeScale;
				this._pageOption=new PageOption();
				this._changeStateOnClick=true;
				this._downEffectValue=0.8;
			}

			__class(GButton,'fairygui.GButton',_super);
			var __proto=GButton.prototype;
			__proto.fireClick=function(downEffect){
				(downEffect===void 0)&& (downEffect=true);
				if (downEffect && this._mode==0){
					this.setState("over");
					Laya.timer.once(100,this,this.setState,[ "down"]);
					Laya.timer.once(200,this,this.setState,[ "up"]);
				}
				this.__click(Events.createEvent("click",this.displayObject));
			}

			__proto.setState=function(val){
				if (this._buttonController)
					this._buttonController.selectedPage=val;
				if(this._downEffect==1){
					var cnt=this.numChildren;
					if(val=="down" || val=="selectedOver" || val=="selectedDisabled"){
						var r=this._downEffectValue *255;
						var color=Utils.toHexColor((r << 16)+(r << 8)+r);
						for(var i=0;i < cnt;i++){
							var obj=this.getChildAt(i);
							if(((obj instanceof fairygui.GImage ))|| ((obj instanceof fairygui.GLoader ))
								|| ((obj instanceof fairygui.GMovieClip )))
							(obj).color=color;
						}
					}
					else {
						for(i=0;i < cnt;i++){
							obj=this.getChildAt(i);
							if(((obj instanceof fairygui.GImage ))|| ((obj instanceof fairygui.GLoader ))
								|| ((obj instanceof fairygui.GMovieClip )))
							(obj).color="#FFFFFF";
						}
					}
				}
				else if(this._downEffect==2){
					if(val=="down" || val=="selectedOver" || val=="selectedDisabled")
						this.setScale(this._downEffectValue,this._downEffectValue);
					else
					this.setScale(1,1);
				}
			}

			__proto.handleControllerChanged=function(c){
				fairygui.GObject.prototype.handleControllerChanged.call(this,c);
				if (this._relatedController==c)
					this.selected=this._pageOption.id==c.selectedPageId;
			}

			__proto.handleGrayedChanged=function(){
				if(this._buttonController && this._buttonController.hasPage("disabled")){
					if(this.grayed){
						if(this._selected && this._buttonController.hasPage("selectedDisabled"))
							this.setState("selectedDisabled");
						else
						this.setState("disabled");
					}
					else if(this._selected)
					this.setState("down");
					else
					this.setState("up");
				}
				else
				_super.prototype.handleGrayedChanged.call(this);
			}

			__proto.constructFromXML=function(xml){
				_super.prototype.constructFromXML.call(this,xml);
				xml=ToolSet.findChildNode(xml,"Button");
				var str;
				str=xml.getAttribute("mode");
				if (str)
					this._mode=ButtonMode.parse(str);
				str=xml.getAttribute("sound");
				if(str)
					this._sound=str;
				str=xml.getAttribute("volume");
				if(str)
					this._soundVolumeScale=parseInt(str)/ 100;
				str=xml.getAttribute("downEffect");
				if(str){
					this._downEffect=str=="dark"?1:(str=="scale"?2:0);
					str=xml.getAttribute("downEffectValue");
					this._downEffectValue=parseFloat(str);
				}
				this._buttonController=this.getController("button");
				this._titleObject=this.getChild("title");
				this._iconObject=this.getChild("icon");
				if (this._titleObject !=null)
					this._title=this._titleObject.text;
				if (this._iconObject !=null)
					this._icon=this._iconObject.icon;
				if (this._mode==0)
					this.setState("up");
				this.on("mouseover",this,this.__rollover);
				this.on("mouseout",this,this.__rollout);
				this.on("mousedown",this,this.__mousedown);
				this.on("click",this,this.__click);
			}

			__proto.setup_afterAdd=function(xml){
				fairygui.GObject.prototype.setup_afterAdd.call(this,xml);
				if(this._downEffect==2)
					this.setPivot(0.5,0.5);
				xml=ToolSet.findChildNode(xml,"Button");
				if (xml){
					var str;
					str=xml.getAttribute("title");
					if (str)
						this.title=str;
					str=xml.getAttribute("icon");
					if (str)
						this.icon=str;
					str=xml.getAttribute("selectedTitle");
					if (str)
						this.selectedTitle=str;
					str=xml.getAttribute("selectedIcon");
					if (str)
						this.selectedIcon=str;
					str=xml.getAttribute("titleColor");
					if (str)
						this.titleColor=str;
					str=xml.getAttribute("sound");
					if (str!=null)
						this._sound=str;
					str=xml.getAttribute("volume");
					if(str)
						this._soundVolumeScale=parseInt(str)/100;
					str=xml.getAttribute("controller");
					if (str)
						this._relatedController=this._parent.getController(str);
					else
					this._relatedController=null;
					this._pageOption.id=xml.getAttribute("page");
					this.selected=xml.getAttribute("checked")=="true";
				}
			}

			__proto.__rollover=function(){
				if(!this._buttonController || !this._buttonController.hasPage("over"))
					return;
				this._over=true;
				if (this._down)
					return;
				if(this.grayed && this._buttonController.hasPage("disabled"))
					return;
				this.setState(this._selected ? "selectedOver" :"over");
			}

			__proto.__rollout=function(){
				if(!this._buttonController || !this._buttonController.hasPage("over"))
					return;
				this._over=false;
				if (this._down)
					return;
				if(this.grayed && this._buttonController.hasPage("disabled"))
					return;
				this.setState(this._selected ? "down" :"up");
			}

			__proto.__mousedown=function(evt){
				this._down=true;
				GRoot.inst.checkPopups(evt.target);
				Laya.stage.on("mouseup",this,this.__mouseup);
				if(this._mode==0){
					if(this.grayed && this._buttonController && this._buttonController.hasPage("disabled"))
						this.setState("selectedDisabled");
					else
					this.setState("down");
				}
				if (this._linkedPopup !=null){
					if ((this._linkedPopup instanceof fairygui.Window ))
						(this._linkedPopup).toggleStatus();
					else
					this.root.togglePopup(this._linkedPopup,this);
				}
			}

			__proto.__mouseup=function(){
				if (this._down){
					Laya.stage.off("mouseup",this,this.__mouseup);
					this._down=false;
					if(this._mode==0){
						if(this.grayed && this._buttonController && this._buttonController.hasPage("disabled"))
							this.setState("disabled");
						else if(this._over)
						this.setState("over");
						else
						this.setState("up");
					}
				}
			}

			__proto.__click=function(evt){
				if(this._sound){
					var pi=UIPackage.getItemByURL(this._sound);
					if (pi)
						GRoot.inst.playOneShotSound(pi.owner.getItemAssetURL(pi));
					else
					GRoot.inst.playOneShotSound(this._sound);
				}
				if (!this._changeStateOnClick)
					return;
				if (this._mode==1){
					this.selected=!this._selected;
					Events.dispatch("fui_state_changed",this.displayObject,evt);
				}
				else if (this._mode==2){
					if (!this._selected){
						this.selected=true;
						Events.dispatch("fui_state_changed",this.displayObject,evt);
					}
				}
			}

			__getset(0,__proto,'relatedController',function(){
				return this._relatedController;
				},function(val){
				if (val !=this._relatedController){
					this._relatedController=val;
					this._pageOption.controller=val;
					this._pageOption.clear();
				}
			});

			__getset(0,__proto,'icon',function(){
				return this._icon;
				},function(value){
				this._icon=value;
				value=(this._selected && this._selectedIcon)? this._selectedIcon :this._icon;
				if(this._iconObject!=null)
					this._iconObject.icon=value;
				this.updateGear(7);
			});

			__getset(0,__proto,'selectedIcon',function(){
				return this._selectedIcon;
				},function(value){
				this._selectedIcon=value;
				value=(this._selected && this._selectedIcon)? this._selectedIcon :this._icon;
				if(this._iconObject!=null)
					this._iconObject.icon=value;
			});

			__getset(0,__proto,'title',function(){
				return this._title;
				},function(value){
				this._title=value;
				if (this._titleObject)
					this._titleObject.text=(this._selected && this._selectedTitle)? this._selectedTitle :this._title;
				this.updateGear(6);
			});

			__getset(0,__proto,'text',function(){
				return this.title;
				},function(value){
				this.title=value;
			});

			__getset(0,__proto,'selectedTitle',function(){
				return this._selectedTitle;
				},function(value){
				this._selectedTitle=value;
				if (this._titleObject)
					this._titleObject.text=(this._selected && this._selectedTitle)? this._selectedTitle :this._title;
			});

			__getset(0,__proto,'selected',function(){
				return this._selected;
				},function(val){
				if (this._mode==0)
					return;
				if (this._selected !=val){
					this._selected=val;
					if(this.grayed && this._buttonController && this._buttonController.hasPage("disabled")){
						if(this._selected)
							this.setState("selectedDisabled");
						else
						this.setState("disabled");
					}
					else {
						if(this._selected)
							this.setState(this._over ? "selectedOver" :"down");
						else
						this.setState(this._over ? "over" :"up");
					}
					if(this._selectedTitle && this._titleObject)
						this._titleObject.text=this._selected ? this._selectedTitle :this._title;
					if(this._selectedIcon){
						var str=this._selected ? this._selectedIcon :this._icon;
						if(this._iconObject!=null)
							this._iconObject.icon=str;
					}
					if(this._relatedController
						&& this._parent
					&& !this._parent._buildingDisplayList){
						if(this._selected){
							this._relatedController.selectedPageId=this._pageOption.id;
							if(this._relatedController._autoRadioGroupDepth)
								this._parent.adjustRadioGroupDepth(this,this._relatedController);
						}
						else if(this._mode==1 && this._relatedController.selectedPageId==this._pageOption.id)
						this._relatedController.oppositePageId=this._pageOption.id;
					}
				}
			});

			__getset(0,__proto,'soundVolumeScale',function(){
				return this._soundVolumeScale;
				},function(value){
				this._soundVolumeScale=value;
			});

			__getset(0,__proto,'sound',function(){
				return this._sound;
				},function(val){
				this._sound=val;
			});

			__getset(0,__proto,'titleColor',function(){
				if((this._titleObject instanceof fairygui.GTextField ))
					return (this._titleObject).color;
				else if((this._titleObject instanceof fairygui.GLabel ))
				return (this._titleObject).titleColor;
				else if((this._titleObject instanceof fairygui.GButton ))
				return (this._titleObject).titleColor;
				else
				return "#000000";
				},function(value){
				if((this._titleObject instanceof fairygui.GTextField ))
					(this._titleObject).color=value;
				else if((this._titleObject instanceof fairygui.GLabel ))
				(this._titleObject).titleColor=value;
				else if((this._titleObject instanceof fairygui.GButton ))
				(this._titleObject).titleColor=value;
			});

			__getset(0,__proto,'mode',function(){
				return this._mode;
				},function(value){
				if (this._mode !=value){
					if (value==0)
						this.selected=false;
					this._mode=value;
				}
			});

			__getset(0,__proto,'pageOption',function(){
				return this._pageOption;
			});

			__getset(0,__proto,'changeStateOnClick',function(){
				return this._changeStateOnClick;
				},function(value){
				this._changeStateOnClick=value;
			});

			__getset(0,__proto,'linkedPopup',function(){
				return this._linkedPopup;
				},function(value){
				this._linkedPopup=value;
			});

			GButton.UP="up";
			GButton.DOWN="down";
			GButton.OVER="over";
			GButton.SELECTED_OVER="selectedOver";
			GButton.DISABLED="disabled";
			GButton.SELECTED_DISABLED="selectedDisabled";
			return GButton;
		})(GComponent)


		//class fairygui.GComboBox extends fairygui.GComponent
		var GComboBox=(function(_super){
			function GComboBox(){
				this.dropdown=null;
				this._titleObject=null;
				this._iconObject=null;
				this._list=null;
				this._items=null;
				this._icons=null;
				this._values=null;
				this._popupDownward=null;
				this._visibleItemCount=0;
				this._itemsUpdated=false;
				this._selectedIndex=0;
				this._buttonController=null;
				this._down=false;
				this._over=false;
				GComboBox.__super.call(this);
				this._visibleItemCount=UIConfig1.defaultComboBoxVisibleItemCount;
				this._itemsUpdated=true;
				this._selectedIndex=-1;
				this._items=[];
				this._values=[];
			}

			__class(GComboBox,'fairygui.GComboBox',_super);
			var __proto=GComboBox.prototype;
			__proto.setState=function(val){
				if (this._buttonController)
					this._buttonController.selectedPage=val;
			}

			__proto.dispose=function(){
				if(this.dropdown){
					this.dropdown.dispose();
					this.dropdown=null;
				}
				_super.prototype.dispose.call(this);
			}

			__proto.constructFromXML=function(xml){
				_super.prototype.constructFromXML.call(this,xml);
				xml=ToolSet.findChildNode(xml,"ComboBox");
				var str;
				this._buttonController=this.getController("button");
				this._titleObject=this.getChild("title");
				this._iconObject=this.getChild("icon");
				str=xml.getAttribute("dropdown");
				if (str){
					this.dropdown=(UIPackage.createObjectFromURL(str));
					if (!this.dropdown){
						Log.print("下拉框必须为元件");
						return;
					}
					this.dropdown.name="this._dropdownObject";
					this._list=this.dropdown.getChild("list").asList;
					if (this._list==null){
						Log.print(this.resourceURL+": 下拉框的弹出元件里必须包含名为list的列表");
						return;
					}
					this._list.on("fui_click_item",this,this.__clickItem);
					this._list.addRelation(this.dropdown,14);
					this._list.removeRelation(this.dropdown,15);
					this.dropdown.addRelation(this._list,15);
					this.dropdown.removeRelation(this._list,14);
					this.dropdown.displayObject.on("undisplay",this,this.__popupWinClosed);
				}
				this.on("mouseover",this,this.__rollover);
				this.on("mouseout",this,this.__rollout);
				this.on("mousedown",this,this.__mousedown);
			}

			__proto.setup_afterAdd=function(xml){
				fairygui.GObject.prototype.setup_afterAdd.call(this,xml);
				xml=ToolSet.findChildNode(xml,"ComboBox");
				if (xml){
					var str;
					str=xml.getAttribute("titleColor");
					if (str)
						this.titleColor=str;
					str=xml.getAttribute("visibleItemCount");
					if (str)
						this._visibleItemCount=parseInt(str);
					var col=xml.childNodes;
					var length=col.length;
					for (var i=0;i < length;i++){
						var cxml=col[i];
						if(cxml.nodeName=="item"){
							this._items.push(cxml.getAttribute("title"));
							this._values.push(cxml.getAttribute("value"));
							str=cxml.getAttribute("icon");
							if (str){
								if(!this._icons)
									this._icons=new Array(length);
								this._icons[i]=str;
							}
						}
					}
					str=xml.getAttribute("title");
					if(str){
						this.text=str;
						this._selectedIndex=this._items.indexOf(str);
					}
					else if(this._items.length>0){
						this._selectedIndex=0;
						this.text=this._items[0];
					}
					else
					this._selectedIndex=-1;
					str=xml.getAttribute("icon");
					if(str)
						this.icon=str;
					str=xml.getAttribute("direction");
					if(str){
						if(str=="up")
							this._popupDownward=false;
						else if(str=="auto")
						this._popupDownward=null;
					}
				}
			}

			__proto.showDropdown=function(){
				if (this._itemsUpdated){
					this._itemsUpdated=false;
					this._list.removeChildrenToPool();
					var cnt=this._items.length;
					for (var i=0;i < cnt;i++){
						var item=this._list.addItemFromPool();
						item.name=i < this._values.length ? this._values[i] :"";
						item.text=this._items[i];
						item.icon=(this._icons !=null && i < this._icons.length)? this._icons[i] :null;
					}
					this._list.resizeToFit(this._visibleItemCount);
				}
				this._list.selectedIndex=-1;
				this.dropdown.width=this.width;
				this.root.togglePopup(this.dropdown,this,this._popupDownward);
				if (this.dropdown.parent)
					this.setState("down");
			}

			__proto.__popupWinClosed=function(){
				if(this._over)
					this.setState("over");
				else
				this.setState("up");
			}

			__proto.__clickItem=function(itemObject,evt){
				Laya.timer.callLater(this,this.__clickItem2,[this._list.getChildIndex(itemObject),evt])
			}

			__proto.__clickItem2=function(index,evt){
				if ((this.dropdown.parent instanceof fairygui.GRoot ))
					(this.dropdown.parent).hidePopup();
				this._selectedIndex=-1;
				this.selectedIndex=index;
				Events.dispatch("fui_state_changed",this.displayObject,evt);
			}

			__proto.__rollover=function(){
				this._over=true;
				if (this._down || this.dropdown && this.dropdown.parent)
					return;
				this.setState("over");
			}

			__proto.__rollout=function(){
				this._over=false;
				if (this._down || this.dropdown && this.dropdown.parent)
					return;
				this.setState("up");
			}

			__proto.__mousedown=function(evt){
				if((evt.target instanceof laya.display.Input ))
					return;
				this._down=true;
				GRoot.inst.checkPopups(evt.target);
				Laya.stage.on("mouseup",this,this.__mouseup);
				if (this.dropdown)
					this.showDropdown();
			}

			__proto.__mouseup=function(){
				if(this._down){
					this._down=false;
					Laya.stage.off("mouseup",this,this.__mouseup);
					if(this.dropdown && !this.dropdown.parent){
						if(this._over)
							this.setState("over");
						else
						this.setState("up");
					}
				}
			}

			__getset(0,__proto,'text',function(){
				if (this._titleObject)
					return this._titleObject.text;
				else
				return null;
				},function(value){
				if (this._titleObject)
					this._titleObject.text=value;
				this.updateGear(6);
			});

			__getset(0,__proto,'titleColor',function(){
				if((this._titleObject instanceof fairygui.GTextField ))
					return (this._titleObject).color;
				else if((this._titleObject instanceof fairygui.GLabel ))
				return (this._titleObject).titleColor;
				else if((this._titleObject instanceof fairygui.GButton ))
				return (this._titleObject).titleColor;
				else
				return "#000000";
				},function(value){
				if((this._titleObject instanceof fairygui.GTextField ))
					(this._titleObject).color=value;
				else if((this._titleObject instanceof fairygui.GLabel ))
				(this._titleObject).titleColor=value;
				else if((this._titleObject instanceof fairygui.GButton ))
				(this._titleObject).titleColor=value;
			});

			__getset(0,__proto,'selectedIndex',function(){
				return this._selectedIndex;
				},function(val){
				if(this._selectedIndex==val)
					return;
				this._selectedIndex=val;
				if(this._selectedIndex>=0 && this._selectedIndex<this._items.length){
					this.text=this._items[this._selectedIndex];
					if (this._icons !=null && this._selectedIndex < this._icons.length)
						this.icon=this._icons[this._selectedIndex];
				}
				else{
					this.text="";
					if (this._icons !=null)
						this.icon=null;
				}
			});

			__getset(0,__proto,'icon',function(){
				if(this._iconObject)
					return this._iconObject.icon;
				else
				return null;
				},function(value){
				if(this._iconObject)
					this._iconObject.icon=value;
				this.updateGear(7);
			});

			__getset(0,__proto,'icons',function(){
				return this._icons;
				},function(value){
				this._icons=value;
				if (this._icons !=null && this._selectedIndex !=-1 && this._selectedIndex < this._icons.length)
					this.icon=this._icons[this._selectedIndex];
			});

			__getset(0,__proto,'visibleItemCount',function(){
				return this._visibleItemCount;
				},function(value){
				this._visibleItemCount=value;
			});

			__getset(0,__proto,'popupDownward',function(){
				return this._popupDownward;
				},function(value){
				this._popupDownward=value;
			});

			__getset(0,__proto,'values',function(){
				return this._values;
				},function(value){
				if (!value)
					this._values.length=0;
				else
				this._values=value.concat();
			});

			__getset(0,__proto,'items',function(){
				return this._items;
				},function(value){
				if(!value)
					this._items.length=0;
				else
				this._items=value.concat();
				if(this._items.length>0){
					if(this._selectedIndex>=this._items.length)
						this._selectedIndex=this._items.length-1;
					else if(this._selectedIndex==-1)
					this._selectedIndex=0;
					this.text=this._items[this._selectedIndex];
					if (this._icons !=null && this._selectedIndex < this._icons.length)
						this.icon=this._icons[this._selectedIndex];
				}
				else{
					this.text="";
					if (this._icons !=null)
						this.icon=null;
					this._selectedIndex=-1;
				}
				this._itemsUpdated=true;
			});

			__getset(0,__proto,'value',function(){
				return this._values[this._selectedIndex];
				},function(val){
				this.selectedIndex=this._values.indexOf(val);
			});

			return GComboBox;
		})(GComponent)


		//class fairygui.GLabel extends fairygui.GComponent
		var GLabel=(function(_super){
			function GLabel(){
				this._titleObject=null;
				this._iconObject=null;
				GLabel.__super.call(this);
			}

			__class(GLabel,'fairygui.GLabel',_super);
			var __proto=GLabel.prototype;
			__proto.constructFromXML=function(xml){
				_super.prototype.constructFromXML.call(this,xml);
				this._titleObject=this.getChild("title");
				this._iconObject=this.getChild("icon");
			}

			__proto.setup_afterAdd=function(xml){
				fairygui.GObject.prototype.setup_afterAdd.call(this,xml);
				xml=ToolSet.findChildNode(xml,"Label");
				if (xml){
					var str;
					str=xml.getAttribute("title");
					if(str)
						this.text=str;
					str=xml.getAttribute("icon");
					if(str)
						this.icon=str;
					str=xml.getAttribute("titleColor");
					if (str)
						this.titleColor=str;
					if((this._titleObject instanceof fairygui.GTextInput )){
						str=xml.getAttribute("prompt");
						if(str)
							(this._titleObject).promptText=str;
						str=xml.getAttribute("maxLength");
						if(str)
							(this._titleObject).maxLength=parseInt(str);
						str=xml.getAttribute("restrict");
						if(str)
							(this._titleObject).restrict=str;
						str=xml.getAttribute("password");
						if(str)
							(this._titleObject).password=str=="true";
						str=xml.getAttribute("keyboardType");
						if(str=="4")
							(this._titleObject).keyboardType="number";
						else if(str=="3")
						(this._titleObject).keyboardType="url";
					}
				}
			}

			__getset(0,__proto,'icon',function(){
				if(this._iconObject!=null)
					return this._iconObject.icon;
				else
				return null;
				},function(value){
				if(this._iconObject!=null)
					this._iconObject.icon=value;
				this.updateGear(7);
			});

			__getset(0,__proto,'editable',function(){
				if (this._titleObject && ((this._titleObject instanceof fairygui.GTextInput )))
					return this._titleObject.asTextInput.editable;
				else
				return false;
				},function(val){
				if (this._titleObject)
					this._titleObject.asTextInput.editable=val;
			});

			__getset(0,__proto,'title',function(){
				if (this._titleObject)
					return this._titleObject.text;
				else
				return null;
				},function(value){
				if (this._titleObject)
					this._titleObject.text=value;
				this.updateGear(6);
			});

			__getset(0,__proto,'text',function(){
				return this.title;
				},function(value){
				this.title=value;
			});

			__getset(0,__proto,'titleColor',function(){
				if((this._titleObject instanceof fairygui.GTextField ))
					return (this._titleObject).color;
				else if((this._titleObject instanceof fairygui.GLabel ))
				return (this._titleObject).titleColor;
				else if((this._titleObject instanceof fairygui.GButton ))
				return (this._titleObject).titleColor;
				else
				return "#000000";
				},function(value){
				if((this._titleObject instanceof fairygui.GTextField ))
					(this._titleObject).color=value;
				else if((this._titleObject instanceof fairygui.GLabel ))
				(this._titleObject).titleColor=value;
				else if((this._titleObject instanceof fairygui.GButton ))
				(this._titleObject).titleColor=value;
			});

			return GLabel;
		})(GComponent)


		//class fairygui.GList extends fairygui.GComponent
		var GList=(function(_super){
			var ItemInfo;
			function GList(){
				this.itemRenderer=null;
				this.itemProvider=null;
				this.scrollItemToViewOnClick=false;
				this.foldInvisibleItems=false;
				this._layout=0;
				this._lineItemCount=0;
				this._lineGap=0;
				this._columnGap=0;
				this._defaultItem=null;
				this._autoResizeItem=false;
				this._selectionMode=0;
				this._align=null;
				this._verticalAlign=null;
				this._lastSelectedIndex=0;
				this._pool=null;
				this._virtual=false;
				this._loop=false;
				this._numItems=0;
				this._realNumItems=0;
				this._firstIndex=0;
				this._curLineItemCount=0;
				this._curLineItemCount2=0;
				this._itemSize=null;
				this._virtualListChanged=0;
				this._virtualItems=null;
				this._eventLocked=false;
				GList.__super.call(this);
				this._trackBounds=true;
				this._pool=new GObjectPool();
				this._layout=0;
				this._autoResizeItem=true;
				this._lastSelectedIndex=-1;
				this._selectionMode=0;
				this.opaque=true;
				this.scrollItemToViewOnClick=true;
				this._align="left";
				this._verticalAlign="top";
				this._container=new Sprite();
				this._displayObject.addChild(this._container);
			}

			__class(GList,'fairygui.GList',_super);
			var __proto=GList.prototype;
			__proto.dispose=function(){
				this._pool.clear();
				_super.prototype.dispose.call(this);
			}

			__proto.getFromPool=function(url){
				if (!url)
					url=this._defaultItem;
				var obj=this._pool.getObject(url);
				if(obj!=null)
					obj.visible=true;
				return obj;
			}

			__proto.returnToPool=function(obj){
				obj.displayObject.cacheAsBitmap=false;
				this._pool.returnObject(obj);
			}

			__proto.addChildAt=function(child,index){
				(index===void 0)&& (index=0);
				if (this._autoResizeItem){
					if (this._layout==0)
						child.width=this.viewWidth;
					else if (this._layout==1)
					child.height=this.viewHeight;
				}
				_super.prototype.addChildAt.call(this,child,index);
				if ((child instanceof fairygui.GButton )){
					var button=(child);
					button.selected=false;
					button.changeStateOnClick=false;
				}
				child.on("click",this,this.__clickItem);
				return child;
			}

			__proto.addItem=function(url){
				if (!url)
					url=this._defaultItem;
				return this.addChild(UIPackage.createObjectFromURL(url));
			}

			__proto.addItemFromPool=function(url){
				return this.addChild(this.getFromPool(url));
			}

			__proto.removeChildAt=function(index,dispose){
				(dispose===void 0)&& (dispose=false);
				var child=_super.prototype.removeChildAt.call(this,index,dispose);
				child.off("click",this,this.__clickItem);
				return child;
			}

			__proto.removeChildToPoolAt=function(index){
				(index===void 0)&& (index=0);
				var child=_super.prototype.removeChildAt.call(this,index);
				this.returnToPool(child);
			}

			__proto.removeChildToPool=function(child){
				this.removeChild(child);
				this.returnToPool(child);
			}

			__proto.removeChildrenToPool=function(beginIndex,endIndex){
				(beginIndex===void 0)&& (beginIndex=0);
				(endIndex===void 0)&& (endIndex=-1);
				if (endIndex < 0 || endIndex >=this._children.length)
					endIndex=this._children.length-1;
				for (var i=beginIndex;i <=endIndex;++i)
				this.removeChildToPoolAt(beginIndex);
			}

			__proto.getSelection=function(){
				var ret=[];
				var cnt=this._children.length;
				for (var i=0;i < cnt;i++){
					var obj=this._children[i];
					if (((obj instanceof fairygui.GButton ))&& (obj).selected)
						ret.push(this.childIndexToItemIndex(i));
				}
				return ret;
			}

			__proto.addSelection=function(index,scrollItToView){
				(scrollItToView===void 0)&& (scrollItToView=false);
				if (this._selectionMode==3)
					return;
				this.checkVirtualList();
				if (this._selectionMode==0)
					this.clearSelection();
				if(scrollItToView)
					this.scrollToView(index);
				index=this.itemIndexToChildIndex(index);
				if(index<0 || index >=this._children.length)
					return;
				var obj=this.getChildAt(index);
				if (((obj instanceof fairygui.GButton ))&& !(obj).selected)
					(obj).selected=true;
			}

			__proto.removeSelection=function(index){
				(index===void 0)&& (index=0);
				if (this._selectionMode==3)
					return;
				index=this.itemIndexToChildIndex(index);
				if(index >=this._children.length)
					return;
				var obj=this.getChildAt(index);
				if (((obj instanceof fairygui.GButton ))&& (obj).selected)
					(obj).selected=false;
			}

			__proto.clearSelection=function(){
				var cnt=this._children.length;
				for (var i=0;i < cnt;i++){
					var obj=this._children[i];
					if ((obj instanceof fairygui.GButton ))
						(obj).selected=false;
				}
			}

			__proto.selectAll=function(){
				this.checkVirtualList();
				var cnt=this._children.length;
				for (var i=0;i < cnt;i++){
					var obj=this._children[i];
					if ((obj instanceof fairygui.GButton ))
						(obj).selected=true;
				}
			}

			__proto.selectNone=function(){
				this.checkVirtualList();
				var cnt=this._children.length;
				for (var i=0;i < cnt;i++){
					var obj=this._children[i];
					if ((obj instanceof fairygui.GButton ))
						(obj).selected=false;
				}
			}

			__proto.selectReverse=function(){
				var cnt=this._children.length;
				for (var i=0;i < cnt;i++){
					var obj=this._children[i];
					if ((obj instanceof fairygui.GButton ))
						(obj).selected=!(obj).selected;
				}
			}

			__proto.handleArrowKey=function(dir){
				(dir===void 0)&& (dir=0);
				var index=this.selectedIndex;
				if (index==-1)
					return;
				switch (dir){
					case 1:
						if (this._layout==0 || this._layout==3){
							index--;
							if (index >=0){
								this.clearSelection();
								this.addSelection(index,true);
							}
						}
						else if (this._layout==2 || this._layout==4){
							var current=this._children[index];
							var k=0;
							for (var i=index-1;i >=0;i--){
								var obj=this._children[i];
								if (obj.y !=current.y){
									current=obj;
									break ;
								}
								k++;
							}
							for (;i >=0;i--){
								obj=this._children[i];
								if (obj.y !=current.y){
									this.clearSelection();
									this.addSelection(i+k+1,true);
									break ;
								}
							}
						}
						break ;
					case 3:
						if (this._layout==1 || this._layout==2 || this._layout==4){
							index++;
							if (index < this._children.length){
								this.clearSelection();
								this.addSelection(index,true);
							}
						}
						else if (this._layout==3){
							current=this._children[index];
							k=0;
							var cnt=this._children.length;
							for (i=index+1;i < cnt;i++){
								obj=this._children[i];
								if (obj.x !=current.x){
									current=obj;
									break ;
								}
								k++;
							}
							for (;i < cnt;i++){
								obj=this._children[i];
								if (obj.x !=current.x){
									this.clearSelection();
									this.addSelection(i-k-1,true);
									break ;
								}
							}
						}
						break ;
					case 5:
						if (this._layout==0 || this._layout==3){
							index++;
							if (index < this._children.length){
								this.clearSelection();
								this.addSelection(index,true);
							}
						}
						else if (this._layout==2 || this._layout==4){
							current=this._children[index];
							k=0;
							cnt=this._children.length;
							for (i=index+1;i < cnt;i++){
								obj=this._children[i];
								if (obj.y !=current.y){
									current=obj;
									break ;
								}
								k++;
							}
							for (;i < cnt;i++){
								obj=this._children[i];
								if (obj.y !=current.y){
									this.clearSelection();
									this.addSelection(i-k-1,true);
									break ;
								}
							}
						}
						break ;
					case 7:
						if (this._layout==1 || this._layout==2 || this._layout==4){
							index--;
							if (index >=0){
								this.clearSelection();
								this.addSelection(index,true);
							}
						}
						else if (this._layout==3){
							current=this._children[index];
							k=0;
							for (i=index-1;i >=0;i--){
								obj=this._children[i];
								if (obj.x !=current.x){
									current=obj;
									break ;
								}
								k++;
							}
							for (;i >=0;i--){
								obj=this._children[i];
								if (obj.x !=current.x){
									this.clearSelection();
									this.addSelection(i+k+1,true);
									break ;
								}
							}
						}
						break ;
					}
			}

			__proto.__clickItem=function(evt){
				if (this._scrollPane !=null && this._scrollPane.isDragged)
					return;
				var item=GObject.cast(evt.currentTarget);
				this.setSelectionOnEvent(item,evt);
				if(this._scrollPane && this.scrollItemToViewOnClick)
					this._scrollPane.scrollToView(item,true);
				this.displayObject.event("fui_click_item",[item,Events.createEvent("fui_click_item",this.displayObject,evt)]);
			}

			__proto.setSelectionOnEvent=function(item,evt){
				if (!((item instanceof fairygui.GButton ))|| this._selectionMode==3)
					return;
				var dontChangeLastIndex=false;
				var button=(item);
				var index=this.getChildIndex(item);
				if (this._selectionMode==0){
					if (!button.selected){
						this.clearSelectionExcept(button);
						button.selected=true;
					}
				}
				else {
					if (evt.shiftKey){
						if (!button.selected){
							if (this._lastSelectedIndex !=-1){
								var min=Math.min(this._lastSelectedIndex,index);
								var max=Math.max(this._lastSelectedIndex,index);
								max=Math.min(max,this._children.length-1);
								for (var i=min;i <=max;i++){
									var obj=this.getChildAt(i);
									if (((obj instanceof fairygui.GButton ))&& !(obj).selected)
										(obj).selected=true;
								}
								dontChangeLastIndex=true;
							}
							else {
								button.selected=true;
							}
						}
					}
					else if (evt.ctrlKey || this._selectionMode==2){
						button.selected=!button.selected;
					}
					else {
						if (!button.selected){
							this.clearSelectionExcept(button);
							button.selected=true;
						}
						else
						this.clearSelectionExcept(button);
					}
				}
				if (!dontChangeLastIndex)
					this._lastSelectedIndex=index;
				return;
			}

			__proto.clearSelectionExcept=function(obj){
				var cnt=this._children.length;
				for (var i=0;i < cnt;i++){
					var button=this._children[i];
					if (((button instanceof fairygui.GButton ))&& button !=obj && (button).selected)
						(button).selected=false;
				}
			}

			__proto.resizeToFit=function(itemCount,minSize){
				(itemCount===void 0)&& (itemCount=1000000);
				(minSize===void 0)&& (minSize=0);
				this.ensureBoundsCorrect();
				var curCount=this.numItems;
				if (itemCount > curCount)
					itemCount=curCount;
				if(this._virtual){
					var lineCount=Math.ceil(itemCount / this._curLineItemCount);
					if(this._layout==0 || this._layout==2)
						this.viewHeight=lineCount *this._itemSize.y+Math.max(0,lineCount-1)*this._lineGap;
					else
					this.viewWidth=lineCount *this._itemSize.x+Math.max(0,lineCount-1)*this._columnGap;
				}
				else if(itemCount==0){
					if (this._layout==0 || this._layout==2)
						this.viewHeight=minSize;
					else
					this.viewWidth=minSize;
				}
				else {
					var i=itemCount-1;
					var obj=null;
					while (i >=0){
						obj=this.getChildAt(i);
						if (!this.foldInvisibleItems || obj.visible)
							break ;
						i--;
					}
					if (i < 0){
						if (this._layout==0 || this._layout==2)
							this.viewHeight=minSize;
						else
						this.viewWidth=minSize;
					}
					else {
						var size=0;
						if (this._layout==0 || this._layout==2){
							size=obj.y+obj.height;
							if (size < minSize)
								size=minSize;
							this.viewHeight=size;
						}
						else {
							size=obj.x+obj.width;
							if (size < minSize)
								size=minSize;
							this.viewWidth=size;
						}
					}
				}
			}

			__proto.getMaxItemWidth=function(){
				var cnt=this._children.length;
				var max=0;
				for (var i=0;i < cnt;i++){
					var child=this.getChildAt(i);
					if (child.width > max)
						max=child.width;
				}
				return max;
			}

			__proto.handleSizeChanged=function(){
				_super.prototype.handleSizeChanged.call(this);
				if (this._autoResizeItem)
					this.adjustItemsSize();
				if (this._layout==2 || this._layout==3){
					this.setBoundsChangedFlag();
					if (this._virtual)
						this.setVirtualListChangedFlag(true);
				}
			}

			__proto.adjustItemsSize=function(){
				if (this._layout==0){
					var cnt=this._children.length;
					var cw=this.viewWidth;
					for (var i=0;i < cnt;i++){
						var child=this.getChildAt(i);
						child.width=cw;
					}
				}
				else if (this._layout==1){
					cnt=this._children.length;
					var ch=this.viewHeight;
					for (i=0;i < cnt;i++){
						child=this.getChildAt(i);
						child.height=ch;
					}
				}
			}

			__proto.getSnappingPosition=function(xValue,yValue,resultPoint){
				if (this._virtual){
					if(!resultPoint)
						resultPoint=new Point();
					var saved=NaN;
					var index=0;
					if (this._layout==0 || this._layout==2){
						saved=yValue;
						fairygui.GList.pos_param=yValue;
						index=this.getIndexOnPos1(false);
						yValue=fairygui.GList.pos_param;
						if (index < this._virtualItems.length && saved-yValue > this._virtualItems[index].height / 2 && index < this._realNumItems)
							yValue+=this._virtualItems[index].height+this._lineGap;
					}
					else if (this._layout==1 || this._layout==3){
						saved=xValue;
						fairygui.GList.pos_param=xValue;
						index=this.getIndexOnPos2(false);
						xValue=fairygui.GList.pos_param;
						if (index < this._virtualItems.length && saved-xValue > this._virtualItems[index].width / 2 && index < this._realNumItems)
							xValue+=this._virtualItems[index].width+this._columnGap;
					}
					else{
						saved=xValue;
						fairygui.GList.pos_param=xValue;
						index=this.getIndexOnPos3(false);
						xValue=fairygui.GList.pos_param;
						if (index < this._virtualItems.length && saved-xValue > this._virtualItems[index].width / 2 && index < this._realNumItems)
							xValue+=this._virtualItems[index].width+this._columnGap;
					}
					resultPoint.x=xValue;
					resultPoint.y=yValue;
					return resultPoint;
				}
				else
				return _super.prototype.getSnappingPosition.call(this,xValue,yValue,resultPoint);
			}

			__proto.scrollToView=function(index,ani,setFirst){
				(ani===void 0)&& (ani=false);
				(setFirst===void 0)&& (setFirst=false);
				if (this._virtual){
					if(this._numItems==0)
						return;
					this.checkVirtualList();
					if (index >=this._virtualItems.length)
						throw new Error("Invalid child index: "+index+">"+this._virtualItems.length);
					if(this._loop)
						index=Math.floor(this._firstIndex/this._numItems)*this._numItems+index;
					var rect;
					var ii=this._virtualItems[index];
					var pos=0;
					var i=0;
					if (this._layout==0 || this._layout==2){
						for (i=0;i < index;i+=this._curLineItemCount)
						pos+=this._virtualItems[i].height+this._lineGap;
						rect=new Rectangle(0,pos,this._itemSize.x,ii.height);
					}
					else if (this._layout==1 || this._layout==3){
						for (i=0;i < index;i+=this._curLineItemCount)
						pos+=this._virtualItems[i].width+this._columnGap;
						rect=new Rectangle(pos,0,ii.width,this._itemSize.y);
					}
					else{
						var page=index / (this._curLineItemCount *this._curLineItemCount2);
						rect=new Rectangle(page *this.viewWidth+(index % this._curLineItemCount)*(ii.width+this._columnGap),
						(index / this._curLineItemCount)% this._curLineItemCount2 *(ii.height+this._lineGap),
						ii.width,ii.height);
					}
					setFirst=true;
					if (this._scrollPane !=null)
						this.scrollPane.scrollToView(rect,ani,setFirst);
				}
				else{
					var obj=this.getChildAt(index);
					if (this._scrollPane !=null)
						this.scrollPane.scrollToView(obj,ani,setFirst);
					else if (this.parent !=null && this.parent.scrollPane !=null)
					this.parent.scrollPane.scrollToView(obj,ani,setFirst);
				}
			}

			__proto.getFirstChildInView=function(){
				return this.childIndexToItemIndex(_super.prototype.getFirstChildInView.call(this));
			}

			__proto.childIndexToItemIndex=function(index){
				if (!this._virtual)
					return index;
				if (this._layout==4){
					for (var i=this._firstIndex;i < this._realNumItems;i++){
						if (this._virtualItems[i].obj !=null){
							index--;
							if (index < 0)
								return i;
						}
					}
					return index;
				}
				else{
					index+=this._firstIndex;
					if (this._loop && this._numItems > 0)
						index=index % this._numItems;
					return index;
				}
			}

			__proto.itemIndexToChildIndex=function(index){
				if (!this._virtual)
					return index;
				if (this._layout==4){
					return this.getChildIndex(this._virtualItems[index].obj);
				}
				else{
					if (this._loop && this._numItems > 0){
						var j=this._firstIndex % this._numItems;
						if (index >=j)
							index=this._firstIndex+(index-j);
						else
						index=this._firstIndex+this._numItems+(j-index);
					}
					else
					index-=this._firstIndex;
					return index;
				}
			}

			__proto.setVirtual=function(){
				this._setVirtual(false);
			}

			/// </summary>
			__proto.setVirtualAndLoop=function(){
				this._setVirtual(true);
			}

			/// </summary>
			__proto._setVirtual=function(loop){
				if(!this._virtual){
					if(this._scrollPane==null)
						throw new Error("Virtual list must be scrollable!");
					if(loop){
						if(this._layout==2 || this._layout==3)
							throw new Error("Loop list is not supported for FlowHorizontal or FlowVertical layout!");
						this._scrollPane.bouncebackEffect=false;
					}
					this._virtual=true;
					this._loop=loop;
					this._virtualItems=[];
					this.removeChildrenToPool();
					if(this._itemSize==null){
						this._itemSize=new Point();
						var obj=this.getFromPool(null);
						if (obj==null){
							throw new Error("Virtual List must have a default list item resource.");
						}
						else{
							this._itemSize.x=obj.width;
							this._itemSize.y=obj.height;
						}
						this.returnToPool(obj);
					}
					if(this._layout==0 || this._layout==2)
						this._scrollPane.scrollSpeed=this._itemSize.y;
					else
					this._scrollPane.scrollSpeed=this._itemSize.x;
					this.on("fui_scroll",this,this.__scrolled);
					this.setVirtualListChangedFlag(true);
				}
			}

			__proto.refreshVirtualList=function(){
				this.setVirtualListChangedFlag(false);
			}

			__proto.checkVirtualList=function(){
				if(this._virtualListChanged!=0){
					this._refreshVirtualList();
					Laya.timer.clear(this,this._refreshVirtualList);
				}
			}

			__proto.setVirtualListChangedFlag=function(layoutChanged){
				(layoutChanged===void 0)&& (layoutChanged=false);
				if(layoutChanged)
					this._virtualListChanged=2;
				else if(this._virtualListChanged==0)
				this._virtualListChanged=1;
				Laya.timer.callLater(this,this._refreshVirtualList);
			}

			__proto._refreshVirtualList=function(){
				var layoutChanged=this._virtualListChanged==2;
				this._virtualListChanged=0;
				this._eventLocked=true;
				if (layoutChanged){
					if (this._layout==0 || this._layout==1)
						this._curLineItemCount=1;
					else if (this._lineItemCount !=0)
					this._curLineItemCount=this._lineItemCount;
					else if (this._layout==2){
						this._curLineItemCount=Math.floor((this._scrollPane.viewWidth+this._columnGap)/ (this._itemSize.x+this._columnGap));
						if (this._curLineItemCount <=0)
							this._curLineItemCount=1;
					}
					else if (this._layout==3){
						this._curLineItemCount=Math.floor((this._scrollPane.viewHeight+this._lineGap)/ (this._itemSize.y+this._lineGap));
						if (this._curLineItemCount <=0)
							this._curLineItemCount=1;
					}
					else{
						this._curLineItemCount=Math.floor((this._scrollPane.viewWidth+this._columnGap)/ (this._itemSize.x+this._columnGap));
						if (this._curLineItemCount <=0)
							this._curLineItemCount=1;
					}
					if (this._layout==4){
						this._curLineItemCount2=Math.floor((this._scrollPane.viewHeight+this._lineGap)/ (this._itemSize.y+this._lineGap));
						if (this._curLineItemCount2 <=0)
							this._curLineItemCount2=1;
					}
				};
				var ch=0,cw=0;
				if (this._realNumItems > 0){
					var i=0;
					var len=Math.ceil(this._realNumItems / this._curLineItemCount)*this._curLineItemCount;
					if (this._layout==0 || this._layout==2){
						for (i=0;i < len;i+=this._curLineItemCount)
						ch+=this._virtualItems[i].height+this._lineGap;
						if (ch > 0)
							ch-=this._lineGap;
						cw=this._scrollPane.contentWidth;
					}
					else if (this._layout==1 || this._layout==3){
						for (i=0;i < len;i+=this._curLineItemCount)
						cw+=this._virtualItems[i].width+this._columnGap;
						if (cw > 0)
							cw-=this._columnGap;
						ch=this._scrollPane.contentHeight;
					}
					else{
						var pageCount=Math.ceil(len / (this._curLineItemCount *this._curLineItemCount2));
						cw=pageCount *this.viewWidth;
						ch=this.viewHeight;
					}
				}
				this.handleAlign(cw,ch);
				this._scrollPane.setContentSize(cw,ch);
				this._eventLocked=false;
				this.handleScroll(true);
			}

			__proto.__scrolled=function(evt){
				this.handleScroll(false);
			}

			__proto.getIndexOnPos1=function(forceUpdate){
				if (this._realNumItems < this._curLineItemCount){
					GList.pos_param=0;
					return 0;
				};
				var i=0;
				var pos2=NaN;
				var pos3=NaN;
				if (this.numChildren > 0 && !forceUpdate){
					pos2=this.getChildAt(0).y;
					if (pos2 > GList.pos_param){
						for (i=this._firstIndex-this._curLineItemCount;i >=0;i-=this._curLineItemCount){
							pos2-=(this._virtualItems[i].height+this._lineGap);
							if (pos2 <=GList.pos_param){
								GList.pos_param=pos2;
								return i;
							}
						}
						GList.pos_param=0;
						return 0;
					}
					else{
						for (i=this._firstIndex;i < this._realNumItems;i+=this._curLineItemCount){
							pos3=pos2+this._virtualItems[i].height+this._lineGap;
							if (pos3 > GList.pos_param){
								GList.pos_param=pos2;
								return i;
							}
							pos2=pos3;
						}
						GList.pos_param=pos2;
						return this._realNumItems-this._curLineItemCount;
					}
				}
				else{
					pos2=0;
					for (i=0;i < this._realNumItems;i+=this._curLineItemCount){
						pos3=pos2+this._virtualItems[i].height+this._lineGap;
						if (pos3 > GList.pos_param){
							GList.pos_param=pos2;
							return i;
						}
						pos2=pos3;
					}
					GList.pos_param=pos2;
					return this._realNumItems-this._curLineItemCount;
				}
			}

			__proto.getIndexOnPos2=function(forceUpdate){
				if (this._realNumItems < this._curLineItemCount){
					GList.pos_param=0;
					return 0;
				};
				var i=0;
				var pos2=NaN;
				var pos3=NaN;
				if (this.numChildren > 0 && !forceUpdate){
					pos2=this.getChildAt(0).x;
					if (pos2 > GList.pos_param){
						for (i=this._firstIndex-this._curLineItemCount;i >=0;i-=this._curLineItemCount){
							pos2-=(this._virtualItems[i].width+this._columnGap);
							if (pos2 <=GList.pos_param){
								GList.pos_param=pos2;
								return i;
							}
						}
						GList.pos_param=0;
						return 0;
					}
					else{
						for (i=this._firstIndex;i < this._realNumItems;i+=this._curLineItemCount){
							pos3=pos2+this._virtualItems[i].width+this._columnGap;
							if (pos3 > GList.pos_param){
								GList.pos_param=pos2;
								return i;
							}
							pos2=pos3;
						}
						GList.pos_param=pos2;
						return this._realNumItems-this._curLineItemCount;
					}
				}
				else{
					pos2=0;
					for (i=0;i < this._realNumItems;i+=this._curLineItemCount){
						pos3=pos2+this._virtualItems[i].width+this._columnGap;
						if (pos3 > GList.pos_param){
							GList.pos_param=pos2;
							return i;
						}
						pos2=pos3;
					}
					GList.pos_param=pos2;
					return this._realNumItems-this._curLineItemCount;
				}
			}

			__proto.getIndexOnPos3=function(forceUpdate){
				if (this._realNumItems < this._curLineItemCount){
					GList.pos_param=0;
					return 0;
				};
				var viewWidth=this.viewWidth;
				var page=Math.floor(GList.pos_param / viewWidth);
				var startIndex=page *(this._curLineItemCount *this._curLineItemCount2);
				var pos2=page *viewWidth;
				var i=0;
				var pos3=NaN;
				for (i=0;i < this._curLineItemCount;i++){
					pos3=pos2+this._virtualItems[startIndex+i].width+this._columnGap;
					if (pos3 > GList.pos_param){
						GList.pos_param=pos2;
						return startIndex+i;
					}
					pos2=pos3;
				}
				GList.pos_param=pos2;
				return startIndex+this._curLineItemCount-1;
			}

			__proto.handleScroll=function(forceUpdate){
				if (this._eventLocked)
					return;
				var pos=NaN;
				var roundSize=0;
				if (this._layout==0 || this._layout==2){
					if (this._loop){
						pos=this.scrollPane.scrollingPosY;
						roundSize=this._numItems *(this._itemSize.y+this._lineGap);
						if (pos==0)
							this.scrollPane.posY=roundSize;
						else if (pos==this.scrollPane.contentHeight-this.scrollPane.viewHeight)
						this.scrollPane.posY=this.scrollPane.contentHeight-roundSize-this.viewHeight;
					}
					this.handleScroll1(forceUpdate);
				}
				else if (this._layout==1 || this._layout==3){
					if (this._loop){
						pos=this.scrollPane.scrollingPosX;
						roundSize=this._numItems *(this._itemSize.x+this._columnGap);
						if (pos==0)
							this.scrollPane.posX=roundSize;
						else if (pos==this.scrollPane.contentWidth-this.scrollPane.viewWidth)
						this.scrollPane.posX=this.scrollPane.contentWidth-roundSize-this.viewWidth;
					}
					this.handleScroll2(forceUpdate);
				}
				else{
					if (this._loop){
						pos=this.scrollPane.scrollingPosX;
						roundSize=Math.floor(this._numItems / (this._curLineItemCount *this._curLineItemCount2))*this.viewWidth;
						if (pos==0)
							this.scrollPane.posX=roundSize;
						else if (pos==this.scrollPane.contentWidth-this.scrollPane.viewWidth)
						this.scrollPane.posX=this.scrollPane.contentWidth-roundSize-this.viewWidth;
					}
					this.handleScroll3(forceUpdate);
				}
				this._boundsChanged=false;
			}

			__proto.handleScroll1=function(forceUpdate){
				GList.enterCounter++;
				if (GList.enterCounter > 3)
					return;
				var pos=this.scrollPane.scrollingPosY;
				var max=pos+this.scrollPane.viewHeight;
				var end=max==this.scrollPane.contentHeight;
				fairygui.GList.pos_param=pos;
				var newFirstIndex=this.getIndexOnPos1(forceUpdate);
				pos=fairygui.GList.pos_param;
				if (newFirstIndex==this._firstIndex && !forceUpdate){
					GList.enterCounter--;
					return;
				};
				var oldFirstIndex=this._firstIndex;
				this._firstIndex=newFirstIndex;
				var curIndex=newFirstIndex;
				var forward=oldFirstIndex > newFirstIndex;
				var oldCount=this.numChildren;
				var lastIndex=oldFirstIndex+oldCount-1;
				var reuseIndex=forward ? lastIndex :oldFirstIndex;
				var curX=0,curY=pos;
				var needRender=false;
				var deltaSize=0;
				var firstItemDeltaSize=0;
				var url=this.defaultItem;
				var ii,ii2;
				var i=0,j=0;
				GList.itemInfoVer++;
				while (curIndex < this._realNumItems && (end || curY < max)){
					ii=this._virtualItems[curIndex];
					if (ii.obj==null || forceUpdate){
						if (this.itemProvider !=null){
							url=this.itemProvider.runWith(curIndex % this._numItems);
							if (url==null)
								url=this.defaultItem;
						}
						if (ii.obj !=null && ii.obj.resourceURL !=url){
							this.removeChildToPool(ii.obj);
							ii.obj=null;
						}
					}
					if (ii.obj==null){
						if (forward){
							for (j=reuseIndex;j >=oldFirstIndex;j--){
								ii2=this._virtualItems[j];
								if (ii2.obj !=null && ii2.updateFlag !=GList.itemInfoVer && ii2.obj.resourceURL==url){
									ii.obj=ii2.obj;
									ii2.obj=null;
									if (j==reuseIndex)
										reuseIndex--;
									break ;
								}
							}
						}
						else{
							for (j=reuseIndex;j <=lastIndex;j++){
								ii2=this._virtualItems[j];
								if (ii2.obj !=null && ii2.updateFlag !=GList.itemInfoVer && ii2.obj.resourceURL==url){
									ii.obj=ii2.obj;
									ii2.obj=null;
									if (j==reuseIndex)
										reuseIndex++;
									break ;
								}
							}
						}
						if (ii.obj !=null){
							this.setChildIndex(ii.obj,forward ? curIndex-newFirstIndex :this.numChildren);
						}
						else{
							ii.obj=this._pool.getObject(url);
							if (forward)
								this.addChildAt(ii.obj,curIndex-newFirstIndex);
							else
							this.addChild(ii.obj);
						}
						if ((ii.obj instanceof fairygui.GButton ))
							(ii.obj).selected=false;
						needRender=true;
					}
					else
					needRender=forceUpdate;
					if (needRender){
						this.itemRenderer.runWith([curIndex % this._numItems,ii.obj]);
						if (curIndex % this._curLineItemCount==0){
							deltaSize+=Math.ceil(ii.obj.height)-ii.height;
							if (curIndex==newFirstIndex && oldFirstIndex > newFirstIndex){
								firstItemDeltaSize=Math.ceil(ii.obj.height)-ii.height;
							}
						}
						ii.width=Math.ceil(ii.obj.width);
						ii.height=Math.ceil(ii.obj.height);
					}
					ii.updateFlag=GList.itemInfoVer;
					ii.obj.setXY(curX,curY);
					if (curIndex==newFirstIndex)
						max+=ii.height;
					curX+=ii.width+this._columnGap;
					if (curIndex % this._curLineItemCount==this._curLineItemCount-1){
						curX=0;
						curY+=ii.height+this._lineGap;
					}
					curIndex++;
				}
				for (i=0;i < oldCount;i++){
					ii=this._virtualItems[oldFirstIndex+i];
					if (ii.updateFlag !=GList.itemInfoVer && ii.obj !=null){
						this.removeChildToPool(ii.obj);
						ii.obj=null;
					}
				}
				if (deltaSize !=0 || firstItemDeltaSize !=0)
					this._scrollPane.changeContentSizeOnScrolling(0,deltaSize,0,firstItemDeltaSize);
				if (curIndex > 0 && this.numChildren > 0 && this._container.y < 0 && this.getChildAt(0).y >-this._container.y)
					this.handleScroll1(false);
				GList.enterCounter--;
			}

			__proto.handleScroll2=function(forceUpdate){
				GList.enterCounter++;
				if (GList.enterCounter > 3)
					return;
				var pos=this.scrollPane.scrollingPosX;
				var max=pos+this.scrollPane.viewWidth;
				var end=pos==this.scrollPane.contentWidth;
				fairygui.GList.pos_param=pos;
				var newFirstIndex=this.getIndexOnPos2(forceUpdate);
				pos=fairygui.GList.pos_param;
				if (newFirstIndex==this._firstIndex && !forceUpdate){
					GList.enterCounter--;
					return;
				};
				var oldFirstIndex=this._firstIndex;
				this._firstIndex=newFirstIndex;
				var curIndex=newFirstIndex;
				var forward=oldFirstIndex > newFirstIndex;
				var oldCount=this.numChildren;
				var lastIndex=oldFirstIndex+oldCount-1;
				var reuseIndex=forward ? lastIndex :oldFirstIndex;
				var curX=pos,curY=0;
				var needRender=false;
				var deltaSize=0;
				var firstItemDeltaSize=0;
				var url=this.defaultItem;
				var ii,ii2;
				var i=0,j=0;
				GList.itemInfoVer++;
				while (curIndex < this._realNumItems && (end || curX < max)){
					ii=this._virtualItems[curIndex];
					if (ii.obj==null || forceUpdate){
						if (this.itemProvider !=null){
							url=this.itemProvider.runWith(curIndex % this._numItems);
							if (url==null)
								url=this.defaultItem;
						}
						if (ii.obj !=null && ii.obj.resourceURL !=url){
							this.removeChildToPool(ii.obj);
							ii.obj=null;
						}
					}
					if (ii.obj==null){
						if (forward){
							for (j=reuseIndex;j >=oldFirstIndex;j--){
								ii2=this._virtualItems[j];
								if (ii2.obj !=null && ii2.updateFlag !=GList.itemInfoVer && ii2.obj.resourceURL==url){
									ii.obj=ii2.obj;
									ii2.obj=null;
									if (j==reuseIndex)
										reuseIndex--;
									break ;
								}
							}
						}
						else{
							for (j=reuseIndex;j <=lastIndex;j++){
								ii2=this._virtualItems[j];
								if (ii2.obj !=null && ii2.updateFlag !=GList.itemInfoVer && ii2.obj.resourceURL==url){
									ii.obj=ii2.obj;
									ii2.obj=null;
									if (j==reuseIndex)
										reuseIndex++;
									break ;
								}
							}
						}
						if (ii.obj !=null){
							this.setChildIndex(ii.obj,forward ? curIndex-newFirstIndex :this.numChildren);
						}
						else{
							ii.obj=this._pool.getObject(url);
							if (forward)
								this.addChildAt(ii.obj,curIndex-newFirstIndex);
							else
							this.addChild(ii.obj);
						}
						if ((ii.obj instanceof fairygui.GButton ))
							(ii.obj).selected=false;
						needRender=true;
					}
					else
					needRender=forceUpdate;
					if (needRender){
						this.itemRenderer.runWith([curIndex % this._numItems,ii.obj]);
						if (curIndex % this._curLineItemCount==0){
							deltaSize+=Math.ceil(ii.obj.width)-ii.width;
							if (curIndex==newFirstIndex && oldFirstIndex > newFirstIndex){
								firstItemDeltaSize=Math.ceil(ii.obj.width)-ii.width;
							}
						}
						ii.width=Math.ceil(ii.obj.width);
						ii.height=Math.ceil(ii.obj.height);
					}
					ii.updateFlag=GList.itemInfoVer;
					ii.obj.setXY(curX,curY);
					if (curIndex==newFirstIndex)
						max+=ii.width;
					curY+=ii.height+this._lineGap;
					if (curIndex % this._curLineItemCount==this._curLineItemCount-1){
						curY=0;
						curX+=ii.width+this._columnGap;
					}
					curIndex++;
				}
				for (i=0;i < oldCount;i++){
					ii=this._virtualItems[oldFirstIndex+i];
					if (ii.updateFlag !=GList.itemInfoVer && ii.obj !=null){
						this.removeChildToPool(ii.obj);
						ii.obj=null;
					}
				}
				if (deltaSize !=0 || firstItemDeltaSize !=0)
					this._scrollPane.changeContentSizeOnScrolling(deltaSize,0,firstItemDeltaSize,0);
				if (curIndex > 0 && this.numChildren > 0 && this._container.x < 0 && this.getChildAt(0).x >-this._container.x)
					this.handleScroll2(false);
				GList.enterCounter--;
			}

			__proto.handleScroll3=function(forceUpdate){
				var pos=this.scrollPane.scrollingPosX;
				fairygui.GList.pos_param=pos;
				var newFirstIndex=this.getIndexOnPos3(forceUpdate);
				pos=fairygui.GList.pos_param;
				if (newFirstIndex==this._firstIndex && !forceUpdate)
					return;
				var oldFirstIndex=this._firstIndex;
				this._firstIndex=newFirstIndex;
				var reuseIndex=oldFirstIndex;
				var virtualItemCount=this._virtualItems.length;
				var pageSize=this._curLineItemCount *this._curLineItemCount2;
				var startCol=newFirstIndex % this._curLineItemCount;
				var viewWidth=this.viewWidth;
				var page=Math.floor(newFirstIndex / pageSize);
				var startIndex=page *pageSize;
				var lastIndex=startIndex+pageSize *2;
				var needRender=false;
				var i=0;
				var ii,ii2;
				var col=0;
				GList.itemInfoVer++;
				for (i=startIndex;i < lastIndex;i++){
					if (i >=this._realNumItems)
						continue ;
					col=i % this._curLineItemCount;
					if (i-startIndex < pageSize){
						if (col < startCol)
							continue ;
					}
					else{
						if (col > startCol)
							continue ;
					}
					ii=this._virtualItems[i];
					ii.updateFlag=GList.itemInfoVer;
				};
				var lastObj=null;
				var insertIndex=0;
				for (i=startIndex;i < lastIndex;i++){
					if (i >=this._realNumItems)
						continue ;
					col=i % this._curLineItemCount;
					if (i-startIndex < pageSize){
						if (col < startCol)
							continue ;
					}
					else{
						if (col > startCol)
							continue ;
					}
					ii=this._virtualItems[i];
					if (ii.obj==null){
						while (reuseIndex < virtualItemCount){
							ii2=this._virtualItems[reuseIndex];
							if (ii2.obj !=null && ii2.updateFlag !=GList.itemInfoVer){
								ii.obj=ii2.obj;
								ii2.obj=null;
								break ;
							}
							reuseIndex++;
						}
						if (insertIndex==-1)
							insertIndex=this.getChildIndex(lastObj)+1;
						if (ii.obj==null){
							ii.obj=this._pool.getObject(this.defaultItem);
							this.addChildAt(ii.obj,insertIndex);
						}
						else{
							insertIndex=this.setChildIndexBefore(ii.obj,insertIndex);
						}
						insertIndex++;
						if ((ii.obj instanceof fairygui.GButton ))
							(ii.obj).selected=false;
						needRender=true;
					}
					else{
						needRender=forceUpdate;
						insertIndex=-1;
						lastObj=ii.obj;
					}
					if (needRender)
						this.itemRenderer.runWith([i % this._numItems,ii.obj]);
					ii.obj.setXY(Math.floor(i / pageSize)*viewWidth+col *(ii.width+this._columnGap),
					Math.floor(i / this._curLineItemCount)% this._curLineItemCount2 *(ii.height+this._lineGap));
				}
				for (i=reuseIndex;i < virtualItemCount;i++){
					ii=this._virtualItems[i];
					if (ii.updateFlag !=GList.itemInfoVer && ii.obj !=null){
						this.removeChildToPool(ii.obj);
						ii.obj=null;
					}
				}
			}

			__proto.handleAlign=function(contentWidth,contentHeight){
				var newOffsetX=0;
				var newOffsetY=0;
				if (this._layout==0 || this._layout==2 || this._layout==4){
					if (contentHeight < this.viewHeight){
						if (this._verticalAlign=="middle")
							newOffsetY=Math.floor((this.viewHeight-contentHeight)/ 2);
						else if (this._verticalAlign=="bottom")
						newOffsetY=this.viewHeight-contentHeight;
					}
				}
				else{
					if (contentWidth < this.viewWidth){
						if (this._align=="center")
							newOffsetX=Math.floor((this.viewWidth-contentWidth)/ 2);
						else if (this._align=="right")
						newOffsetX=this.viewWidth-contentWidth;
					}
				}
				if (newOffsetX!=this._alignOffset.x || newOffsetY!=this._alignOffset.y){
					this._alignOffset.setTo(newOffsetX,newOffsetY);
					if (this.scrollPane !=null)
						this.scrollPane.adjustMaskContainer();
					else{
						this._container.x=this._margin.left+this._alignOffset.x;
						this._container.y=this._margin.top+this._alignOffset.y;
					}
				}
			}

			__proto.updateBounds=function(){
				if(this._virtual)
					return;
				var i=0;
				var child;
				var curX=0;
				var curY=0;;
				var maxWidth=0;
				var maxHeight=0;
				var cw=NaN,ch=0;
				var sw=0,sh=0;
				var p=0;
				var cnt=this._children.length;
				var viewWidth=this.viewWidth;
				var viewHeight=this.viewHeight;
				for(i=0;i < cnt;i++){
					child=this.getChildAt(i);
					child.ensureSizeCorrect();
				}
				if (this._layout==0){
					for (i=0;i < cnt;i++){
						child=this.getChildAt(i);
						if (this.foldInvisibleItems && !child.visible)
							continue ;
						sw=Math.ceil(child.width);
						sh=Math.ceil(child.height);
						if (curY !=0)
							curY+=this._lineGap;
						child.y=curY;
						curY+=sh;
						if (sw > maxWidth)
							maxWidth=sw;
					}
					cw=curX+maxWidth;
					ch=curY;
				}
				else if (this._layout==1){
					for (i=0;i < cnt;i++){
						child=this.getChildAt(i);
						if (this.foldInvisibleItems && !child.visible)
							continue ;
						sw=Math.ceil(child.width);
						sh=Math.ceil(child.height);
						if (curX !=0)
							curX+=this._columnGap;
						child.x=curX;
						curX+=sw;
						if (sh > maxHeight)
							maxHeight=sh;
					}
					cw=curX;
					ch=curY+maxHeight;
				}
				else if (this._layout==2){
					var j=0;
					for (i=0;i < cnt;i++){
						child=this.getChildAt(i);
						if (this.foldInvisibleItems && !child.visible)
							continue ;
						sw=Math.ceil(child.width);
						sh=Math.ceil(child.height);
						if (curX !=0)
							curX+=this._columnGap;
						if(this._lineItemCount !=0 && j >=this._lineItemCount
							|| this._lineItemCount==0 && curX+sw > viewWidth && maxHeight !=0){
							curX-=this._columnGap;
							if(curX > maxWidth)
								maxWidth=curX;
							curX=0;
							curY+=maxHeight+this._lineGap;
							maxHeight=0;
							j=0;
						}
						child.setXY(curX,curY);
						curX+=sw;
						if(sh > maxHeight)
							maxHeight=sh;
						j++;
					}
					ch=curY+maxHeight;
					cw=maxWidth;
				}
				else if (this._layout==3){
					j=0;
					for (i=0;i < cnt;i++){
						child=this.getChildAt(i);
						if (!child.visible)
							continue ;
						sw=Math.ceil(child.width);
						sh=Math.ceil(child.height);
						if (curY !=0)
							curY+=this._lineGap;
						if(this._lineItemCount !=0 && j >=this._lineItemCount
							|| this._lineItemCount==0 && curY+sh > viewHeight && maxWidth !=0){
							curY-=this._lineGap;
							if(curY > maxHeight)
								maxHeight=curY;
							curY=0;
							curX+=maxWidth+this._columnGap;
							maxWidth=0;
							j=0;
						}
						child.setXY(curX,curY);
						curY+=sh;
						if(sw > maxWidth)
							maxWidth=sw;
						j++;
					}
					cw=curX+maxWidth;
					ch=maxHeight;
				}
				else{
					for (i=0;i < cnt;i++){
						child=this.getChildAt(i);
						if (this.foldInvisibleItems && !child.visible)
							continue ;
						sw=Math.ceil(child.width);
						sh=Math.ceil(child.height);
						if (curX !=0)
							curX+=this._columnGap;
						if (this._lineItemCount !=0 && j >=this._lineItemCount
							|| this._lineItemCount==0 && curX+sw > viewWidth && maxHeight !=0){
							curX-=this._columnGap;
							if (curX > maxWidth)
								maxWidth=curX;
							curX=0;
							curY+=maxHeight+this._lineGap;
							maxHeight=0;
							j=0;
							if (curY+sh > viewHeight && maxWidth !=0){
								p++;
								curY=0;
							}
						}
						child.setXY(p *viewWidth+curX,curY);
						curX+=sw;
						if (sh > maxHeight)
							maxHeight=sh;
						j++;
					}
					ch=curY+maxHeight;
					cw=(p+1)*viewWidth;
				}
				this.handleAlign(cw,ch);
				this.setBounds(0,0,cw,ch);
			}

			__proto.setup_beforeAdd=function(xml){
				fairygui.GObject.prototype.setup_beforeAdd.call(this,xml);
				var str;
				var arr;
				str=xml.getAttribute("layout");
				if (str)
					this._layout=ListLayoutType.parse(str);
				var overflow=0;
				str=xml.getAttribute("overflow");
				if (str)
					overflow=OverflowType.parse(str);
				else
				overflow=0;
				str=xml.getAttribute("margin");
				if(str)
					this._margin.parse(str);
				str=xml.getAttribute("align");
				if(str)
					this._align=str;
				str=xml.getAttribute("vAlign");
				if(str)
					this._verticalAlign=str;
				if(overflow==2){
					var scroll=0;
					str=xml.getAttribute("scroll");
					if (str)
						scroll=ScrollType.parse(str);
					else
					scroll=1;
					var scrollBarDisplay=0;
					str=xml.getAttribute("scrollBar");
					if (str)
						scrollBarDisplay=ScrollBarDisplayType.parse(str);
					else
					scrollBarDisplay=0;
					var scrollBarFlags=NaN;
					str=xml.getAttribute("scrollBarFlags");
					if(str)
						scrollBarFlags=parseInt(str);
					else
					scrollBarFlags=0;
					var scrollBarMargin=new Margin();
					str=xml.getAttribute("scrollBarMargin");
					if(str)
						scrollBarMargin.parse(str);
					var vtScrollBarRes;
					var hzScrollBarRes;
					str=xml.getAttribute("scrollBarRes");
					if(str){
						arr=str.split(",");
						vtScrollBarRes=arr[0];
						hzScrollBarRes=arr[1];
					}
					this.setupScroll(scrollBarMargin,scroll,scrollBarDisplay,scrollBarFlags,vtScrollBarRes,hzScrollBarRes);
				}
				else
				this.setupOverflow(overflow);
				str=xml.getAttribute("lineGap");
				if (str)
					this._lineGap=parseInt(str);
				str=xml.getAttribute("colGap");
				if (str)
					this._columnGap=parseInt(str);
				str=xml.getAttribute("lineItemCount");
				if(str)
					this._lineItemCount=parseInt(str);
				str=xml.getAttribute("selectionMode");
				if (str)
					this._selectionMode=ListSelectionMode.parse(str);
				str=xml.getAttribute("defaultItem");
				if (str)
					this._defaultItem=str;
				str=xml.getAttribute("autoItemSize");
				this._autoResizeItem=str !="false";
				var col=xml.childNodes;
				var length=col.length;
				for (var i=0;i < length;i++){
					var cxml=col[i];
					if(cxml.nodeName !="item")
						continue ;
					var url=cxml.getAttribute("url");
					if (!url)
						url=this._defaultItem;
					if (!url)
						continue ;
					var obj=this.getFromPool(url);
					if(obj !=null){
						this.addChild(obj);
						str=cxml.getAttribute("title");
						if(str)
							obj.text=str;
						str=cxml.getAttribute("icon");
						if(str)
							obj.icon=str;
						str=cxml.getAttribute("name");
						if(str)
							obj.name=str;
					}
				}
			}

			__getset(0,__proto,'lineItemCount',function(){
				return this._lineItemCount;
				},function(value){
				if(this._lineItemCount !=value){
					this._lineItemCount=value;
					this.setBoundsChangedFlag();
					if(this._virtual)
						this.setVirtualListChangedFlag(true);
				}
			});

			__getset(0,__proto,'layout',function(){
				return this._layout;
				},function(value){
				if (this._layout !=value){
					this._layout=value;
					this.setBoundsChangedFlag();
					if(this._virtual)
						this.setVirtualListChangedFlag(true);
				}
			});

			__getset(0,__proto,'autoResizeItem',function(){
				return this._autoResizeItem;
				},function(value){
				this._autoResizeItem=value;
			});

			__getset(0,__proto,'lineGap',function(){
				return this._lineGap;
				},function(value){
				if (this._lineGap !=value){
					this._lineGap=value;
					this.setBoundsChangedFlag();
					if(this._virtual)
						this.setVirtualListChangedFlag(true);
				}
			});

			__getset(0,__proto,'columnGap',function(){
				return this._columnGap;
				},function(value){
				if(this._columnGap !=value){
					this._columnGap=value;
					this.setBoundsChangedFlag();
					if (this._virtual)
						this.setVirtualListChangedFlag(true);
				}
			});

			__getset(0,__proto,'align',function(){
				return this._align;
				},function(value){
				if(this._align!=value){
					this._align=value;
					this.setBoundsChangedFlag();
					if (this._virtual)
						this.setVirtualListChangedFlag(true);
				}
			});

			__getset(0,__proto,'verticalAlign',function(){
				return this._verticalAlign;
				},function(value){
				if(this._verticalAlign!=value){
					this._verticalAlign=value;
					this.setBoundsChangedFlag();
					if (this._virtual)
						this.setVirtualListChangedFlag(true);
				}
			});

			__getset(0,__proto,'virtualItemSize',function(){
				return this._itemSize;
				},function(value){
				if(this._virtual){
					if(this._itemSize==null)
						this._itemSize=new Point();
					this._itemSize.setTo(value.x,value.y);
					this.setVirtualListChangedFlag(true);
				}
			});

			__getset(0,__proto,'defaultItem',function(){
				return this._defaultItem;
				},function(val){
				this._defaultItem=val;
			});

			__getset(0,__proto,'selectionMode',function(){
				return this._selectionMode;
				},function(value){
				this._selectionMode=value;
			});

			__getset(0,__proto,'itemPool',function(){
				return this._pool;
			});

			__getset(0,__proto,'selectedIndex',function(){
				var cnt=this._children.length;
				for (var i=0;i < cnt;i++){
					var obj=this._children[i];
					if (((obj instanceof fairygui.GButton ))&& (obj).selected)
						return this.childIndexToItemIndex(i);
				}
				return-1;
				},function(value){
				this.clearSelection();
				if (value >=0 && value < this.numItems)
					this.addSelection(value);
			});

			/// </summary>
			__getset(0,__proto,'numItems',function(){
				if(this._virtual)
					return this._numItems;
				else
				return this._children.length;
				},function(value){
				var i=0;
				if (this._virtual){
					if (this.itemRenderer==null)
						throw new Error("Set itemRenderer first!");
					this._numItems=value;
					if (this._loop)
						this._realNumItems=this._numItems *5;
					else
					this._realNumItems=this._numItems;
					var oldCount=this._virtualItems.length;
					if (this._realNumItems > oldCount){
						for (i=oldCount;i < this._realNumItems;i++){
							var ii=new ItemInfo();
							ii.width=this._itemSize.x;
							ii.height=this._itemSize.y;
							this._virtualItems.push(ii);
						}
					}
					if (this._virtualListChanged !=0)
						Laya.timer.clear(this,this._refreshVirtualList);
					this._refreshVirtualList();
				}
				else{
					var cnt=this._children.length;
					if (value > cnt){
						for (i=cnt;i < value;i++){
							if (this.itemProvider==null)
								this.addItemFromPool();
							else
							this.addItemFromPool(this.itemProvider.runWith(i));
						}
					}
					else{
						this.removeChildrenToPool(value,cnt);
					}
					if (this.itemRenderer !=null){
						for (i=0;i < value;i++)
						this.itemRenderer.runWith([i,this.getChildAt(i)]);
					}
				}
			});

			GList.itemInfoVer=0;
			GList.enterCounter=0;
			GList.pos_param=NaN
			GList.__init$=function(){
				//class ItemInfo
				ItemInfo=(function(){
					function ItemInfo(){
						this.width=0;
						this.height=0;
						this.obj=null;
						this.updateFlag=0;
					}
					__class(ItemInfo,'');
					return ItemInfo;
				})()
			}

			return GList;
		})(GComponent)


		//class fairygui.GRichTextField extends fairygui.GTextField
		var GRichTextField=(function(_super){
			function GRichTextField(){
				this.div=null;
				this._text=null;
				this._ubbEnabled=false;
				this._color=null;
				GRichTextField.__super.call(this);
				this._text="";
			}

			__class(GRichTextField,'fairygui.GRichTextField',_super);
			var __proto=GRichTextField.prototype;
			Laya.imps(__proto,{"fairygui.IColorGear":true})
			__proto.createDisplayObject=function(){
				this._displayObject=this.div=new HTMLDivElement();
				this._displayObject.mouseEnabled=true;
				this._displayObject["$owner"]=this;
			}

			__proto.handleSizeChanged=function(){
				this.div.size(this.width,this.height);
			}

			__getset(0,__proto,'bold',function(){
				return this.div.style.bold;
				},function(value){
				this.div.style.bold=value;
			});

			__getset(0,__proto,'align',function(){
				return this.div.style.align;
				},function(value){
				this.div.style.align=value;
			});

			__getset(0,__proto,'text',function(){
				return this._text;
				},function(value){
				this._text=value;
				if(this._ubbEnabled)
					this.div.innerHTML=ToolSet.parseUBB(ToolSet.encodeHTML(this._text));
				else
				this.div.innerHTML=this._text;
			});

			__getset(0,__proto,'color',function(){
				return this._color;
				},function(value){
				if (this._color !=value){
					this._color=value;
					this.div.color=value;
					if (this._gearColor.controller)
						this._gearColor.updateState();
				}
			});

			__getset(0,__proto,'font',function(){
				return this.div.style.font;
				},function(value){
				this.div.style.font=value;
			});

			__getset(0,__proto,'leading',function(){
				return this.div.style.leading;
				},function(value){
				this.div.style.leading=value;
			});

			__getset(0,__proto,'fontSize',function(){
				return this.div.style.fontSize;
				},function(value){
				this.div.style.fontSize=value;
			});

			__getset(0,__proto,'valign',function(){
				return this.div.style.valign;
				},function(value){
				this.div.style.valign=value;
			});

			__getset(0,__proto,'italic',function(){
				return this.div.style.italic;
				},function(value){
				this.div.style.italic=value;
			});

			__getset(0,__proto,'stroke',function(){
				return this.div.style.stroke;
				},function(value){
				this.div.style.stroke=value;
			});

			__getset(0,__proto,'strokeColor',function(){
				return this.div.style.strokeColor;
				},function(value){
				this.div.style.strokeColor=value;
			});

			__getset(0,__proto,'ubbEnabled',function(){
				return this._ubbEnabled;
				},function(value){
				this._ubbEnabled=value;
			});

			return GRichTextField;
		})(GTextField)


		//class fairygui.GProgressBar extends fairygui.GComponent
		var GProgressBar=(function(_super){
			function GProgressBar(){
				this._max=0;
				this._value=0;
				this._titleType=0;
				this._reverse=false;
				this._titleObject=null;
				this._aniObject=null;
				this._barObjectH=null;
				this._barObjectV=null;
				this._barMaxWidth=0;
				this._barMaxHeight=0;
				this._barMaxWidthDelta=0;
				this._barMaxHeightDelta=0;
				this._barStartX=0;
				this._barStartY=0;
				this._tweener=null;
				this._tweenValue=0;
				GProgressBar.__super.call(this);
				this._titleType=0;
				this._value=50;
				this._max=100;
			}

			__class(GProgressBar,'fairygui.GProgressBar',_super);
			var __proto=GProgressBar.prototype;
			__proto.tweenValue=function(value,duration){
				if(this._value !=value){
					if(this._tweener)
						this._tweener.clear();
					this._tweenValue=this._value;
					this._value=value;
					this._tweener=Tween.to(this,{_tweenValue:value },duration *1000,fairygui.GProgressBar.easeLinear);
					this._tweener.update=Handler.create(this,this.onUpdateTween,null,false);
					return this._tweener;
				}
				else
				return null;
			}

			__proto.onUpdateTween=function(){
				this.update(this._tweenValue);
			}

			__proto.update=function(newValue){
				var percent=Math.min(newValue / this._max,1);
				if(this._titleObject){
					switch(this._titleType){
						case 0:
							this._titleObject.text=Math.round(percent *100)+"%";
							break ;
						case 1:
							this._titleObject.text=Math.round(newValue)+"/"+Math.round(this._max);
							break ;
						case 2:
							this._titleObject.text=""+Math.round(newValue);
							break ;
						case 3:
							this._titleObject.text=""+Math.round(this._max);
							break ;
						}
				};
				var fullWidth=this.width-this._barMaxWidthDelta;
				var fullHeight=this.height-this._barMaxHeightDelta;
				if(!this._reverse){
					if(this._barObjectH)
						this._barObjectH.width=fullWidth *percent;
					if(this._barObjectV)
						this._barObjectV.height=fullHeight *percent;
				}
				else {
					if(this._barObjectH){
						this._barObjectH.width=fullWidth *percent;
						this._barObjectH.x=this._barStartX+(fullWidth-this._barObjectH.width);
					}
					if(this._barObjectV){
						this._barObjectV.height=fullHeight *percent;
						this._barObjectV.y=this._barStartY+(fullHeight-this._barObjectV.height);
					}
				}
				if((this._aniObject instanceof fairygui.GMovieClip ))
					(this._aniObject).frame=Math.round(percent *100);
			}

			__proto.constructFromXML=function(xml){
				_super.prototype.constructFromXML.call(this,xml);
				xml=ToolSet.findChildNode(xml,"ProgressBar");
				var str;
				str=xml.getAttribute("titleType");
				if(str)
					this._titleType=ProgressTitleType.parse(str);
				this._reverse=xml.getAttribute("reverse")=="true";
				this._titleObject=(this.getChild("title"));
				this._barObjectH=this.getChild("bar");
				this._barObjectV=this.getChild("bar_v");
				this._aniObject=this.getChild("ani");
				if(this._barObjectH){
					this._barMaxWidth=this._barObjectH.width;
					this._barMaxWidthDelta=this.width-this._barMaxWidth;
					this._barStartX=this._barObjectH.x;
				}
				if(this._barObjectV){
					this._barMaxHeight=this._barObjectV.height;
					this._barMaxHeightDelta=this.height-this._barMaxHeight;
					this._barStartY=this._barObjectV.y;
				}
			}

			__proto.handleSizeChanged=function(){
				_super.prototype.handleSizeChanged.call(this);
				if(this._barObjectH)
					this._barMaxWidth=this.width-this._barMaxWidthDelta;
				if(this._barObjectV)
					this._barMaxHeight=this.height-this._barMaxHeightDelta;
				if(!this._underConstruct)
					this.update(this._value);
			}

			__proto.setup_afterAdd=function(xml){
				fairygui.GObject.prototype.setup_afterAdd.call(this,xml);
				xml=ToolSet.findChildNode(xml,"ProgressBar");
				if (xml){
					this._value=parseInt(xml.getAttribute("value"));
					this._max=parseInt(xml.getAttribute("max"));
				}
				this.update(this._value);
			}

			__proto.dispose=function(){
				if(this._tweener)
					this._tweener.clear();
				_super.prototype.dispose.call(this);
			}

			__getset(0,__proto,'max',function(){
				return this._max;
				},function(value){
				if(this._max !=value){
					this._max=value;
					this.update(this._value);
				}
			});

			__getset(0,__proto,'titleType',function(){
				return this._titleType;
				},function(value){
				if(this._titleType !=value){
					this._titleType=value;
					this.update(this._value);
				}
			});

			__getset(0,__proto,'value',function(){
				return this._value;
				},function(value){
				if(this._tweener !=null){
					this._tweener.clear();
					this._tweener=null;
				}
				if(this._value !=value){
					this._value=value;
					this.update(this._value);
				}
			});

			__static(GProgressBar,
			['easeLinear',function(){return this.easeLinear=Ease.linearNone;}
			]);
			return GProgressBar;
		})(GComponent)


		//class fairygui.GTextInput extends fairygui.GTextField
		var GTextInput=(function(_super){
			function GTextInput(){
				this.input=null;
				GTextInput.__super.call(this);
			}

			__class(GTextInput,'fairygui.GTextInput',_super);
			var __proto=GTextInput.prototype;
			Laya.imps(__proto,{"fairygui.IColorGear":true})
			__proto.createDisplayObject=function(){
				this._displayObject=this.input=new Input();
				this._displayObject.mouseEnabled=true;
				this._displayObject["$owner"]=this;
			}

			__proto.handleSizeChanged=function(){
				this.input.size(this.width,this.height);
			}

			__proto.setup_beforeAdd=function(xml){
				_super.prototype.setup_beforeAdd.call(this,xml);
				var str=xml.getAttribute("prompt");
				if(str)
					this.promptText=str;
				str=xml.getAttribute("maxLength");
				if(str)
					this.input.maxChars=parseInt(str);
				str=xml.getAttribute("restrict");
				if(str)
					this.input.restrict=str;
				if(xml.getAttribute("password")=="true")
					this.password=true;
				else{
					str=xml.getAttribute("keyboardType");
					if(str=="4")
						this.keyboardType="number";
					else if(str=="3")
					this.keyboardType="url";
				}
			}

			__getset(0,__proto,'bold',function(){
				return this.input.bold;
				},function(value){
				this.input.bold=value;
			});

			__getset(0,__proto,'align',function(){
				return this.input.align;
				},function(value){
				this.input.align=value;
			});

			__getset(0,__proto,'text',function(){
				return this.input.text;
				},function(value){
				this.input.text=value;
			});

			__getset(0,__proto,'password',function(){
				return this.input.type=="password";
				},function(value){
				if (value)
					this.input.type="password";
				else
				this.input.type="text";
			});

			__getset(0,__proto,'color',function(){
				return this.input.color;
				},function(value){
				this.input.color=value;
			});

			__getset(0,__proto,'font',function(){
				return this.input.font;
				},function(value){
				this.input.font=value;
			});

			__getset(0,__proto,'leading',function(){
				return this.input.leading;
				},function(value){
				this.input.leading=value;
			});

			__getset(0,__proto,'maxLength',function(){
				return this.input.maxChars;
				},function(value){
				this.input.maxChars=value;
			});

			__getset(0,__proto,'fontSize',function(){
				return this.input.fontSize;
				},function(value){
				this.input.fontSize=value;
			});

			__getset(0,__proto,'valign',function(){
				return this.input.valign;
				},function(value){
				this.input.valign=value;
			});

			__getset(0,__proto,'italic',function(){
				return this.input.italic;
				},function(value){
				this.input.italic=value;
			});

			__getset(0,__proto,'singleLine',function(){
				return !this.input.multiline;
				},function(value){
				this.input.multiline=!value;
			});

			__getset(0,__proto,'stroke',function(){
				return this.input.stroke;
				},function(value){
				this.input.stroke=value;
			});

			__getset(0,__proto,'strokeColor',function(){
				return this.input.strokeColor;
				},function(value){
				this.input.strokeColor=value;
			});

			__getset(0,__proto,'keyboardType',function(){
				return this.input.type;
				},function(value){
				this.input.type=value;
			});

			__getset(0,__proto,'editable',function(){
				return this.input.editable;
				},function(value){
				this.input.editable=value;
			});

			__getset(0,__proto,'promptText',function(){
				return this.input.prompt;
				},function(value){
				this.input.prompt=value;
			});

			__getset(0,__proto,'restrict',function(){
				return this.input.restrict;
				},function(value){
				this.input.restrict=value;
			});

			__getset(0,__proto,'textWidth',function(){
				return this.input.textWidth;
			});

			return GTextInput;
		})(GTextField)


		//class fairygui.GRoot extends fairygui.GComponent
		var GRoot=(function(_super){
			function GRoot(){
				this._modalLayer=null;
				this._popupStack=null;
				this._justClosedPopups=null;
				this._modalWaitPane=null;
				this._focusedObject=null;
				this._tooltipWin=null;
				this._defaultTooltipWin=null;
				this._checkPopups=false;
				GRoot.__super.call(this);
				if(fairygui.GRoot._inst==null)
					fairygui.GRoot._inst=this;
				this.opaque=false;
				this._popupStack=[];
				this._justClosedPopups=[];
				this.displayObject.once("display",this,this.__addedToStage);
			}

			__class(GRoot,'fairygui.GRoot',_super);
			var __proto=GRoot.prototype;
			__proto.showWindow=function(win){
				this.addChild(win);
				win.requestFocus();
				if(win.x > this.width)
					win.x=this.width-win.width;
				else if(win.x+win.width < 0)
				win.x=0;
				if(win.y > this.height)
					win.y=this.height-win.height;
				else if(win.y+win.height < 0)
				win.y=0;
				this.adjustModalLayer();
			}

			__proto.hideWindow=function(win){
				win.hide();
			}

			__proto.hideWindowImmediately=function(win){
				if(win.parent==this)
					this.removeChild(win);
				this.adjustModalLayer();
			}

			__proto.bringToFront=function(win){
				var cnt=this.numChildren;
				var i=NaN;
				if(this._modalLayer.parent!=null && !win.modal)
					i=this.getChildIndex(this._modalLayer)-1;
				else
				i=cnt-1;
				for(;i >=0;i--){
					var g=this.getChildAt(i);
					if(g==win)
						return;
					if((g instanceof fairygui.Window ))
						break ;
				}
				if(i>=0)
					this.setChildIndex(win,i);
			}

			__proto.showModalWait=function(msg){
				if(UIConfig1.globalModalWaiting !=null){
					if(this._modalWaitPane==null)
						this._modalWaitPane=UIPackage.createObjectFromURL(UIConfig1.globalModalWaiting);
					this._modalWaitPane.setSize(this.width,this.height);
					this._modalWaitPane.addRelation(this,24);
					this.addChild(this._modalWaitPane);
					this._modalWaitPane.text=msg;
				}
			}

			__proto.closeModalWait=function(){
				if(this._modalWaitPane !=null && this._modalWaitPane.parent !=null)
					this.removeChild(this._modalWaitPane);
			}

			__proto.closeAllExceptModals=function(){
				var arr=this._children.slice();
				var cnt=arr.length;
				for(var i=0;i < cnt;i++){
					var g=arr[i];
					if(((g instanceof fairygui.Window ))&& !(g).modal)
						(g).hide();
				}
			}

			__proto.closeAllWindows=function(){
				var arr=this._children.slice();
				var cnt=arr.length;
				for(var i=0;i < cnt;i++){
					var g=arr[i];
					if((g instanceof fairygui.Window ))
						(g).hide();
				}
			}

			__proto.getTopWindow=function(){
				var cnt=this.numChildren;
				for(var i=cnt-1;i >=0;i--){
					var g=this.getChildAt(i);
					if((g instanceof fairygui.Window )){
						return (g);
					}
				}
				return null;
			}

			__proto.showPopup=function(popup,target,downward){
				if(this._popupStack.length > 0){
					var k=this._popupStack.indexOf(popup);
					if(k !=-1){
						for(var i=this._popupStack.length-1;i >=k;i--)
						this.removeChild(this._popupStack.pop());
					}
				}
				this._popupStack.push(popup);
				this.addChild(popup);
				this.adjustModalLayer();
				var pos;
				var sizeW=NaN,sizeH=0;
				if(target){
					pos=target.localToGlobal();
					sizeW=target.width;
					sizeH=target.height;
				}
				else {
					pos=this.globalToLocal(Laya.stage.mouseX,Laya.stage.mouseY);
				};
				var xx=NaN,yy=NaN;
				xx=pos.x;
				if(xx+popup.width > this.width)
					xx=xx+sizeW-popup.width;
				yy=pos.y+sizeH;
				if((downward==null && yy+popup.height > this.height)
					|| downward==false){
					yy=pos.y-popup.height-1;
					if(yy < 0){
						yy=0;
						xx+=sizeW / 2;
					}
				}
				popup.x=xx;
				popup.y=yy;
			}

			__proto.togglePopup=function(popup,target,downward){
				if(this._justClosedPopups.indexOf(popup)!=-1)
					return;
				this.showPopup(popup,target,downward);
			}

			__proto.hidePopup=function(popup){
				if(popup !=null){
					var k=this._popupStack.indexOf(popup);
					if(k !=-1){
						for(var i=this._popupStack.length-1;i >=k;i--)
						this.closePopup(this._popupStack.pop());
					}
				}
				else {
					var cnt=this._popupStack.length;
					for(i=cnt-1;i >=0;i--)
					this.closePopup(this._popupStack[i]);
					this._popupStack.length=0;
				}
			}

			__proto.closePopup=function(target){
				if(target.parent !=null){
					if((target instanceof fairygui.Window ))
						(target).hide();
					else
					this.removeChild(target);
				}
			}

			__proto.showTooltips=function(msg){
				if (this._defaultTooltipWin==null){
					var resourceURL=UIConfig1.tooltipsWin;
					if (!resourceURL){
						Log.print("UIConfig.tooltipsWin not defined");
						return;
					}
					this._defaultTooltipWin=UIPackage.createObjectFromURL(resourceURL);
				}
				this._defaultTooltipWin.text=msg;
				this.showTooltipsWin(this._defaultTooltipWin);
			}

			__proto.showTooltipsWin=function(tooltipWin,position){
				this.hideTooltips();
				this._tooltipWin=tooltipWin;
				var xx=0;
				var yy=0;
				if (position==null){
					xx=Laya.stage.mouseX+10;
					yy=Laya.stage.mouseY+20;
				}
				else {
					xx=position.x;
					yy=position.y;
				};
				var pt=this.globalToLocal(xx,yy);
				xx=pt.x;
				yy=pt.y;
				if (xx+this._tooltipWin.width > this.width){
					xx=xx-this._tooltipWin.width-1;
					if (xx < 0)
						xx=10;
				}
				if (yy+this._tooltipWin.height > this.height){
					yy=yy-this._tooltipWin.height-1;
					if (xx-this._tooltipWin.width-1 > 0)
						xx=xx-this._tooltipWin.width-1;
					if (yy < 0)
						yy=10;
				}
				this._tooltipWin.x=xx;
				this._tooltipWin.y=yy;
				this.addChild(this._tooltipWin);
			}

			__proto.hideTooltips=function(){
				if (this._tooltipWin !=null){
					if (this._tooltipWin.parent)
						this.removeChild(this._tooltipWin);
					this._tooltipWin=null;
				}
			}

			__proto.getObjectUnderPoint=function(globalX,globalY){
				return null;
			}

			__proto.setFocus=function(value){
				if(this._focusedObject!=value){
					this._focusedObject=value;
					this.displayObject.event("fui_focus_changed");
				}
			}

			__proto.playOneShotSound=function(url,volumeScale){
				(volumeScale===void 0)&& (volumeScale=1);
				SoundManager.playSound(url);
			}

			__proto.adjustModalLayer=function(){
				var cnt=this.numChildren;
				if (this._modalWaitPane !=null && this._modalWaitPane.parent !=null)
					this.setChildIndex(this._modalWaitPane,cnt-1);
				for(var i=cnt-1;i >=0;i--){
					var g=this.getChildAt(i);
					if(((g instanceof fairygui.Window ))&& (g).modal){
						if(this._modalLayer.parent==null)
							this.addChildAt(this._modalLayer,i);
						else
						this.setChildIndexBefore(this._modalLayer,i);
						return;
					}
				}
				if (this._modalLayer.parent !=null)
					this.removeChild(this._modalLayer);
			}

			__proto.__addedToStage=function(){
				Laya.stage.on("mousedown",this,this.__stageMouseDown);
				Laya.stage.on("mouseup",this,this.__stageMouseUp);
				this._modalLayer=new GGraph();
				this._modalLayer.setSize(this.width,this.height);
				this._modalLayer.drawRect(0,null,UIConfig1.modalLayerColor);
				this._modalLayer.addRelation(this,24);
				this.displayObject.stage.on("resize",this,this.__winResize);
				this.__winResize();
			}

			__proto.checkPopups=function(clickTarget){
				if(this._checkPopups)
					return;
				this._checkPopups=true;
				this._justClosedPopups.length=0;
				if (this._popupStack.length > 0){
					var mc=clickTarget;
					while (mc !=this.displayObject.stage && mc !=null){
						if (mc["$owner"]){
							var pindex=this._popupStack.indexOf(mc["$owner"]);
							if (pindex !=-1){
								for(var i=this._popupStack.length-1;i > pindex;i--){
									var popup=this._popupStack.pop();
									this.closePopup(popup);
									this._justClosedPopups.push(popup);
								}
								return;
							}
						}
						mc=mc.parent;
					};
					var cnt=this._popupStack.length;
					for(i=cnt-1;i >=0;i--){
						popup=this._popupStack[i];
						this.closePopup(popup);
						this._justClosedPopups.push(popup);
					}
					this._popupStack.length=0;
				}
			}

			__proto.__stageMouseDown=function(evt){
				var mc=evt.target;
				while (mc !=this.displayObject.stage && mc !=null){
					if (mc["$owner"]){
						var gg=mc["$owner"];
						if (gg.touchable && gg.focusable){
							this.setFocus(gg);
							break ;
						}
					}
					mc=mc.parent;
				}
				if (this._tooltipWin !=null)
					this.hideTooltips();
				this.checkPopups(evt.target);
			}

			__proto.__stageMouseUp=function(){
				this._checkPopups=false;
			}

			__proto.__winResize=function(){
				this.setSize(Laya.stage.width,Laya.stage.height);
			}

			__getset(0,__proto,'hasModalWindow',function(){
				return this._modalLayer.parent !=null;
			});

			__getset(0,__proto,'modalWaiting',function(){
				return this._modalWaitPane && this._modalWaitPane.inContainer;
			});

			__getset(0,__proto,'focus',function(){
				if (this._focusedObject && !this._focusedObject.onStage)
					this._focusedObject=null;
				return this._focusedObject;
				},function(value){
				if (value && (!value.focusable || !value.onStage))
					throw "invalid focus target";
				this.setFocus(value);
			});

			__getset(0,__proto,'hasAnyPopup',function(){
				return this._popupStack.length !=0;
			});

			__getset(0,__proto,'volumeScale',function(){
				return SoundManager.soundVolume;
				},function(value){
				SoundManager.soundVolume=value;
			});

			__getset(1,GRoot,'inst',function(){
				if(fairygui.GRoot._inst==null)
					new GRoot();
				return fairygui.GRoot._inst;
			},fairygui.GComponent._$SET_inst);

			GRoot._inst=null
			return GRoot;
		})(GComponent)


		//class fairygui.GScrollBar extends fairygui.GComponent
		var GScrollBar=(function(_super){
			function GScrollBar(){
				this._grip=null;
				this._arrowButton1=null;
				this._arrowButton2=null;
				this._bar=null;
				this._target=null;
				this._vertical=false;
				this._scrollPerc=0;
				this._fixedGripSize=false;
				this._dragOffset=null;
				GScrollBar.__super.call(this);
				this._dragOffset=new laya.maths.Point();
				this._scrollPerc=0;
			}

			__class(GScrollBar,'fairygui.GScrollBar',_super);
			var __proto=GScrollBar.prototype;
			__proto.setScrollPane=function(target,vertical){
				this._target=target;
				this._vertical=vertical;
			}

			__proto.constructFromXML=function(xml){
				_super.prototype.constructFromXML.call(this,xml);
				xml=ToolSet.findChildNode(xml,"ScrollBar");
				if (xml){
					this._fixedGripSize=xml.getAttribute("fixedGripSize")=="true";
				}
				this._grip=this.getChild("grip");
				if(!this._grip){
					Log.print("需要定义grip");
					return;
				}
				this._bar=this.getChild("bar");
				if(!this._bar){
					Log.print("需要定义bar");
					return;
				}
				this._arrowButton1=this.getChild("arrow1");
				this._arrowButton2=this.getChild("arrow2");
				this._grip.on("mousedown",this,this.__gripMouseDown);
				if(this._arrowButton1)
					this._arrowButton1.on("mousedown",this,this.__arrowButton1Click);
				if(this._arrowButton2)
					this._arrowButton2.on("mousedown",this,this.__arrowButton2Click);
				this.on("mousedown",this,this.__barMouseDown);
			}

			__proto.__gripMouseDown=function(evt){
				if (!this._bar)
					return;
				evt.stopPropagation();
				Laya.stage.on("mousemove",this,this.__gripMouseMove);
				Laya.stage.on("mouseup",this,this.__gripMouseUp);
				this.globalToLocal(Laya.stage.mouseX,Laya.stage.mouseY,this._dragOffset);
				this._dragOffset.x-=this._grip.x;
				this._dragOffset.y-=this._grip.y;
			}

			__proto.__gripMouseMove=function(){
				var pt=this.globalToLocal(Laya.stage.mouseX,Laya.stage.mouseY,fairygui.GScrollBar.sScrollbarHelperPoint);
				if (this._vertical){
					var curY=pt.y-this._dragOffset.y;
					this._target.setPercY((curY-this._bar.y)/ (this._bar.height-this._grip.height),false);
				}
				else {
					var curX=pt.x-this._dragOffset.x;
					this._target.setPercX((curX-this._bar.x)/ (this._bar.width-this._grip.width),false);
				}
			}

			__proto.__gripMouseUp=function(evt){
				if (!this._bar)
					return;
				Laya.stage.off("mousemove",this,this.__gripMouseMove);
				Laya.stage.off("mouseup",this,this.__gripMouseUp);
			}

			__proto.__arrowButton1Click=function(evt){
				evt.stopPropagation();
				if (this._vertical)
					this._target.scrollUp();
				else
				this._target.scrollLeft();
			}

			__proto.__arrowButton2Click=function(evt){
				evt.stopPropagation();
				if (this._vertical)
					this._target.scrollDown();
				else
				this._target.scrollRight();
			}

			__proto.__barMouseDown=function(evt){
				var pt=this._grip.globalToLocal(Laya.stage.mouseX,Laya.stage.mouseY,fairygui.GScrollBar.sScrollbarHelperPoint);
				if (this._vertical){
					if (pt.y < 0)
						this._target.scrollUp(4);
					else
					this._target.scrollDown(4);
				}
				else {
					if (pt.x < 0)
						this._target.scrollLeft(4);
					else
					this._target.scrollRight(4);
				}
			}

			__getset(0,__proto,'displayPerc',null,function(val){
				if (this._vertical){
					if(!this._fixedGripSize)
						this._grip.height=val *this._bar.height;
					this._grip.y=this._bar.y+(this._bar.height-this._grip.height)*this._scrollPerc;
				}
				else {
					if(!this._fixedGripSize)
						this._grip.width=val *this._bar.width;
					this._grip.x=this._bar.x+(this._bar.width-this._grip.width)*this._scrollPerc;
				}
			});

			__getset(0,__proto,'scrollPerc',null,function(val){
				this._scrollPerc=val;
				if (this._vertical)
					this._grip.y=this._bar.y+(this._bar.height-this._grip.height)*this._scrollPerc;
				else
				this._grip.x=this._bar.x+(this._bar.width-this._grip.width)*this._scrollPerc;
			});

			__getset(0,__proto,'minSize',function(){
				if (this._vertical)
					return (this._arrowButton1 !=null ? this._arrowButton1.height :0)+(this._arrowButton2 !=null ? this._arrowButton2.height :0);
				else
				return (this._arrowButton1 !=null ? this._arrowButton1.width :0)+(this._arrowButton2 !=null ? this._arrowButton2.width :0);
			});

			__static(GScrollBar,
			['sScrollbarHelperPoint',function(){return this.sScrollbarHelperPoint=new Point();}
			]);
			return GScrollBar;
		})(GComponent)


		//class fairygui.GSlider extends fairygui.GComponent
		var GSlider=(function(_super){
			function GSlider(){
				this._max=0;
				this._value=0;
				this._titleType=0;
				this._titleObject=null;
				this._aniObject=null;
				this._barObjectH=null;
				this._barObjectV=null;
				this._barMaxWidth=0;
				this._barMaxHeight=0;
				this._barMaxWidthDelta=0;
				this._barMaxHeightDelta=0;
				this._gripObject=null;
				this._clickPos=null;
				this._clickPercent=0;
				GSlider.__super.call(this);
				this._titleType=0;
				this._value=50;
				this._max=100;
				this._clickPos=new laya.maths.Point();
			}

			__class(GSlider,'fairygui.GSlider',_super);
			var __proto=GSlider.prototype;
			__proto.update=function(){
				var percent=Math.min(this._value / this._max,1);
				this.updateWidthPercent(percent);
			}

			__proto.updateWidthPercent=function(percent){
				if (this._titleObject){
					switch (this._titleType){
						case 0:
							this._titleObject.text=Math.round(percent *100)+"%";
							break ;
						case 1:
							this._titleObject.text=this._value+"/"+this._max;
							break ;
						case 2:
							this._titleObject.text=""+this._value;
							break ;
						case 3:
							this._titleObject.text=""+this._max;
							break ;
						}
				}
				if (this._barObjectH)
					this._barObjectH.width=(this.width-this._barMaxWidthDelta)*percent;
				if (this._barObjectV)
					this._barObjectV.height=(this.height-this._barMaxHeightDelta)*percent;
				if ((this._aniObject instanceof fairygui.GMovieClip ))
					(this._aniObject).frame=Math.round(percent *100);
			}

			__proto.constructFromXML=function(xml){
				_super.prototype.constructFromXML.call(this,xml);
				xml=ToolSet.findChildNode(xml,"Slider");
				var str;
				str=xml.getAttribute("titleType");
				if(str)
					this._titleType=ProgressTitleType.parse(str);
				this._titleObject=(this.getChild("title"));
				this._barObjectH=this.getChild("bar");
				this._barObjectV=this.getChild("bar_v");
				this._aniObject=this.getChild("ani");
				this._gripObject=this.getChild("grip");
				if(this._barObjectH){
					this._barMaxWidth=this._barObjectH.width;
					this._barMaxWidthDelta=this.width-this._barMaxWidth;
				}
				if(this._barObjectV){
					this._barMaxHeight=this._barObjectV.height;
					this._barMaxHeightDelta=this.height-this._barMaxHeight;
				}
				if(this._gripObject){
					this._gripObject.on("mousedown",this,this.__gripMouseDown);
				}
			}

			__proto.handleSizeChanged=function(){
				_super.prototype.handleSizeChanged.call(this);
				if(this._barObjectH)
					this._barMaxWidth=this.width-this._barMaxWidthDelta;
				if(this._barObjectV)
					this._barMaxHeight=this.height-this._barMaxHeightDelta;
				if(!this._underConstruct)
					this.update();
			}

			__proto.setup_afterAdd=function(xml){
				fairygui.GObject.prototype.setup_afterAdd.call(this,xml);
				xml=ToolSet.findChildNode(xml,"Slider");
				if (xml){
					this._value=parseInt(xml.getAttribute("value"));
					this._max=parseInt(xml.getAttribute("max"));
				}
				this.update();
			}

			__proto.__gripMouseDown=function(evt){
				this._clickPos=this.globalToLocal(Laya.stage.mouseX,Laya.stage.mouseY);
				this._clickPercent=this._value / this._max;
				Laya.stage.on("mousemove",this,this.__gripMouseMove);
				Laya.stage.on("mouseup",this,this.__gripMouseUp);
			}

			__proto.__gripMouseMove=function(evt){
				var pt=this.globalToLocal(Laya.stage.mouseX,Laya.stage.mouseY,fairygui.GSlider.sSilderHelperPoint);
				var deltaX=pt.x-this._clickPos.x;
				var deltaY=pt.y-this._clickPos.y;
				var percent=NaN;
				if (this._barObjectH)
					percent=this._clickPercent+deltaX / this._barMaxWidth;
				else
				percent=this._clickPercent+deltaY / this._barMaxHeight;
				if (percent > 1)
					percent=1;
				else if (percent < 0)
				percent=0;
				var newValue=Math.round(this._max *percent);
				if (newValue !=this._value){
					this._value=newValue;
					Events.dispatch("fui_state_changed",this.displayObject,evt);
				}
				this.updateWidthPercent(percent);
			}

			__proto.__gripMouseUp=function(evt){
				var percent=this._value / this._max;
				this.updateWidthPercent(percent);
				Laya.stage.off("mousemove",this,this.__gripMouseMove);
				Laya.stage.off("mouseup",this,this.__gripMouseUp);
			}

			__getset(0,__proto,'max',function(){
				return this._max;
				},function(value){
				if (this._max !=value){
					this._max=value;
					this.update();
				}
			});

			__getset(0,__proto,'titleType',function(){
				return this._titleType;
				},function(value){
				this._titleType=value;
			});

			__getset(0,__proto,'value',function(){
				return this._value;
				},function(value){
				if (this._value !=value){
					this._value=value;
					this.update();
				}
			});

			__static(GSlider,
			['sSilderHelperPoint',function(){return this.sSilderHelperPoint=new Point();}
			]);
			return GSlider;
		})(GComponent)


		//class fairygui.Window extends fairygui.GComponent
		var Window2=(function(_super){
			function Window(){
				this._contentPane=null;
				this._modalWaitPane=null;
				this._closeButton=null;
				this._dragArea=null;
				this._contentArea=null;
				this._frame=null;
				this._modal=false;
				this._uiSources=null;
				this._inited=false;
				this._loading=false;
				this._requestingCmd=0;
				this.bringToFontOnClick=false;
				Window.__super.call(this);
				this.focusable=true;
				this._uiSources=[];
				this.bringToFontOnClick=UIConfig1.bringWindowToFrontOnClick;
				this.displayObject.on("display",this,this.__onShown);
				this.displayObject.on("undisplay",this,this.__onHidden);
				this.displayObject.on("mousedown",this,this.__mouseDown);
			}

			__class(Window,'fairygui.Window',_super,'Window2');
			var __proto=Window.prototype;
			__proto.addUISource=function(source){
				this._uiSources.push(source);
			}

			__proto.show=function(){
				GRoot.inst.showWindow(this);
			}

			__proto.showOn=function(root){
				root.showWindow(this);
			}

			__proto.hide=function(){
				if(this.isShowing)
					this.doHideAnimation();
			}

			__proto.hideImmediately=function(){
				var r=((this.parent instanceof fairygui.GRoot ))? (this.parent):null;
				if(!r)
					r=GRoot.inst;
				r.hideWindowImmediately(this);
			}

			__proto.centerOn=function(r,restraint){
				(restraint===void 0)&& (restraint=false);
				this.setXY(Math.round((r.width-this.width)/ 2),Math.round((r.height-this.height)/ 2));
				if(restraint){
					this.addRelation(r,3);
					this.addRelation(r,10);
				}
			}

			__proto.toggleStatus=function(){
				if(this.isTop)
					this.hide();
				else
				this.show();
			}

			__proto.bringToFront=function(){
				this.root.bringToFront(this);
			}

			__proto.showModalWait=function(requestingCmd){
				(requestingCmd===void 0)&& (requestingCmd=0);
				if(requestingCmd !=0)
					this._requestingCmd=requestingCmd;
				if(UIConfig1.windowModalWaiting){
					if(!this._modalWaitPane)
						this._modalWaitPane=UIPackage.createObjectFromURL(UIConfig1.windowModalWaiting);
					this.layoutModalWaitPane();
					this.addChild(this._modalWaitPane);
				}
			}

			__proto.layoutModalWaitPane=function(){
				if(this._contentArea !=null){
					var pt=this._frame.localToGlobal();
					pt=this.globalToLocal(pt.x,pt.y,pt);
					this._modalWaitPane.setXY(pt.x+this._contentArea.x,pt.y+this._contentArea.y);
					this._modalWaitPane.setSize(this._contentArea.width,this._contentArea.height);
				}
				else
				this._modalWaitPane.setSize(this.width,this.height);
			}

			__proto.closeModalWait=function(requestingCmd){
				(requestingCmd===void 0)&& (requestingCmd=0);
				if(requestingCmd !=0){
					if(this._requestingCmd !=requestingCmd)
						return false;
				}
				this._requestingCmd=0;
				if(this._modalWaitPane && this._modalWaitPane.parent !=null)
					this.removeChild(this._modalWaitPane);
				return true;
			}

			__proto.init=function(){
				if(this._inited || this._loading)
					return;
				if(this._uiSources.length > 0){
					this._loading=false;
					var cnt=this._uiSources.length;
					for(var i=0;i < cnt;i++){
						var lib=this._uiSources[i];
						if(!lib.loaded){
							lib.load(this.__uiLoadComplete,this);
							this._loading=true;
						}
					}
					if(!this._loading)
						this._init();
				}
				else
				this._init();
			}

			__proto.onInit=function(){}
			__proto.onShown=function(){}
			__proto.onHide=function(){}
			__proto.doShowAnimation=function(){
				this.onShown();
			}

			__proto.doHideAnimation=function(){
				this.hideImmediately();
			}

			__proto.__uiLoadComplete=function(){
				var cnt=this._uiSources.length;
				for(var i=0;i < cnt;i++){
					var lib=this._uiSources[i];
					if(!lib.loaded)
						return;
				}
				this._loading=false;
				this._init();
			}

			__proto._init=function(){
				this._inited=true;
				this.onInit();
				if(this.isShowing)
					this.doShowAnimation();
			}

			__proto.dispose=function(){
				if(this.parent !=null)
					this.hideImmediately();
				_super.prototype.dispose.call(this);
			}

			__proto.closeEventHandler=function(){
				this.hide();
			}

			__proto.__onShown=function(){
				if(!this._inited)
					this.init();
				else
				this.doShowAnimation();
			}

			__proto.__onHidden=function(){
				this.closeModalWait();
				this.onHide();
			}

			__proto.__mouseDown=function(){
				if(this.isShowing && this.bringToFontOnClick)
					this.bringToFront();
			}

			__proto.__dragStart=function(evt){
				GObject.cast(evt.currentTarget).stopDrag();
				this.startDrag();
			}

			__getset(0,__proto,'contentPane',function(){
				return this._contentPane;
				},function(val){
				if(this._contentPane !=val){
					if(this._contentPane !=null)
						this.removeChild(this._contentPane);
					this._contentPane=val;
					if(this._contentPane !=null){
						this.addChild(this._contentPane);
						this.setSize(this._contentPane.width,this._contentPane.height);
						this._contentPane.addRelation(this,24);
						this._frame=(this._contentPane.getChild("frame"));
						if(this._frame !=null){
							this.closeButton=this._frame.getChild("closeButton");
							this.dragArea=this._frame.getChild("dragArea");
							this.contentArea=this._frame.getChild("contentArea");
						}
					}
				}
			});

			__getset(0,__proto,'isShowing',function(){
				return this.parent !=null;
			});

			__getset(0,__proto,'isTop',function(){
				return this.parent !=null && this.parent.getChildIndex(this)==this.parent.numChildren-1;
			});

			__getset(0,__proto,'modal',function(){
				return this._modal;
				},function(val){
				this._modal=val;
			});

			__getset(0,__proto,'dragArea',function(){
				return this._dragArea;
				},function(value){
				if(this._dragArea !=value){
					if(this._dragArea !=null){
						this._dragArea.draggable=false;
						this._dragArea.off("fui_drag_start",this,this.__dragStart);
					}
					this._dragArea=value;
					if(this._dragArea !=null){
						if((this._dragArea instanceof fairygui.GGraph ))
							this._dragArea.asGraph.drawRect(0,null,null);
						this._dragArea.draggable=true;
						this._dragArea.on("fui_drag_start",this,this.__dragStart);
					}
				}
			});

			__getset(0,__proto,'frame',function(){
				return this._frame;
			});

			__getset(0,__proto,'closeButton',function(){
				return this._closeButton;
				},function(value){
				if(this._closeButton !=null)
					this._closeButton.offClick(this,this.closeEventHandler);
				this._closeButton=value;
				if(this._closeButton !=null)
					this._closeButton.onClick(this,this.closeEventHandler);
			});

			__getset(0,__proto,'contentArea',function(){
				return this._contentArea;
				},function(value){
				this._contentArea=value;
			});

			__getset(0,__proto,'modalWaiting',function(){
				return this._modalWaitPane && this._modalWaitPane.parent !=null;
			});

			return Window;
		})(GComponent)


		//class fairygui.display.Image extends laya.display.Sprite
		var Image1=(function(_super){
			function Image(){
				this._tex=null;
				this._scaleByTile=false;
				this._scale9Grid=null;
				this._tileGridIndice=0;
				this._textureScaleX=0;
				this._textureScaleY=0;
				this._needRebuild=false;
				Image.__super.call(this);
				this.mouseEnabled=false;
				this._textureScaleX=1;
				this._textureScaleY=1;
			}

			__class(Image,'fairygui.display.Image',_super,'Image1');
			var __proto=Image.prototype;
			__proto.scaleTexture=function(sx,sy){
				if(this._textureScaleX!=sx || this._textureScaleY!=sy){
					this._textureScaleX=sx;
					this._textureScaleY=sy;
					if(this._tex)
						this.size(this._tex.width*sx,this._tex.height*sy);
					this.markChanged();
				}
			}

			__proto.markChanged=function(){
				if(!this._needRebuild){
					this._needRebuild=true;
					Laya.timer.callLater(this,this.rebuild);
				}
			}

			__proto.rebuild=function(){
				this._needRebuild=false;
				var g=this.graphics;
				g.clear();
				if(this._tex==null){
					this.repaint();
					return;
				};
				var width=this.width;
				var height=this.height;
				var sw=this._tex.width;
				var sh=this._tex.height;
				if(width==0 || height==0){
					this.repaint();
					return;
				}
				if(this._scaleByTile){
					g.fillTexture(this._tex,0,0,width,height);
				}
				else if(this._scale9Grid!=null){
					var left=this._scale9Grid.x;
					var right=Math.max(sw-this._scale9Grid.right,0);
					var top=this._scale9Grid.y;
					var bottom=Math.max(sh-this._scale9Grid.bottom,0);
					var tmp=NaN;
					if (height >=(sh-this._scale9Grid.height)){
						top=this._scale9Grid.y;
						bottom=sh-this._scale9Grid.bottom;
					}
					else{
						tmp=this._scale9Grid.y / (sh-this._scale9Grid.bottom);
						tmp=height *tmp / (1+tmp);
						top=Math.round(tmp);
						bottom=height-tmp;
					}
					if (width >=(sw-this._scale9Grid.width)){
						left=this._scale9Grid.x;
						right=sw-this._scale9Grid.right;
					}
					else{
						tmp=this._scale9Grid.x / (sw-this._scale9Grid.right);
						tmp=width *tmp / (1+tmp);
						left=Math.round(tmp);
						right=width-tmp;
					};
					var centerWidth=Math.max(width-left-right,0);
					var centerHeight=Math.max(height-top-bottom,0);
					left && top && g.drawTexture(fairygui.display.Image.getTexture(this._tex,0,0,left,top),0,0,left,top);
					right && top && g.drawTexture(fairygui.display.Image.getTexture(this._tex,sw-right,0,right,top),width-right,0,right,top);
					left && bottom && g.drawTexture(fairygui.display.Image.getTexture(this._tex,0,sh-bottom,left,bottom),0,height-bottom,left,bottom);
					right && bottom && g.drawTexture(fairygui.display.Image.getTexture(this._tex,sw-right,sh-bottom,right,bottom),width-right,height-bottom,right,bottom);
					centerWidth && top && this.drawTexture(0,fairygui.display.Image.getTexture(this._tex,left,0,sw-left-right,top),left,0,centerWidth,top);
					centerWidth && bottom && this.drawTexture(1,fairygui.display.Image.getTexture(this._tex,left,sh-bottom,sw-left-right,bottom),left,height-bottom,centerWidth,bottom);
					centerHeight && left && this.drawTexture(2,fairygui.display.Image.getTexture(this._tex,0,top,left,sh-top-bottom),0,top,left,centerHeight);
					centerHeight && right && this.drawTexture(3,fairygui.display.Image.getTexture(this._tex,sw-right,top,right,sh-top-bottom),width-right,top,right,centerHeight);
					centerWidth && centerHeight && this.drawTexture(4,fairygui.display.Image.getTexture(this._tex,left,top,sw-left-right,sh-top-bottom),left,top,centerWidth,centerHeight);
				}
				else {
					g.drawTexture(this._tex,0,0,width,height);
				}
				this.repaint();
			}

			__proto.drawTexture=function(part,tex,x,y,width,height){
				(width===void 0)&& (width=0);
				(height===void 0)&& (height=0);
				if(part==-1 || (this._tileGridIndice & (1<<part))==0)
					this.graphics.drawTexture(tex,x,y,width,height);
				else
				this.graphics.fillTexture(tex,x,y,width,height);
			}

			__getset(0,__proto,'tex',function(){
				return this._tex;
				},function(value){
				if(this._tex!=value){
					this._tex=value;
					if(this._tex)
						this.size(this._tex.width*this._textureScaleX,this._tex.height*this._textureScaleY);
					else
					this.size(0,0);
					this.markChanged();
				}
			});

			__getset(0,__proto,'scale9Grid',function(){
				return this._scale9Grid;
				},function(value){
				this._scale9Grid=value;
				this.markChanged();
			});

			__getset(0,__proto,'scaleByTile',function(){
				return this._scaleByTile;
				},function(value){
				if(this._scaleByTile!=value){
					this._scaleByTile=value;
					this.markChanged();
				}
			});

			__getset(0,__proto,'tileGridIndice',function(){
				return this._tileGridIndice;
				},function(value){
				if(this._tileGridIndice!=value){
					this._tileGridIndice=value;
					this.markChanged();
				}
			});

			Image.getTexture=function(source,x,y,width,height){
				source.$GID || (source.$GID=Utils.getGID());
				var key=source.$GID+"."+x+"."+y+"."+width+"."+height;
				var texture=fairygui.display.Image._textureCache[key];
				if (!texture){
					texture=fairygui.display.Image._textureCache[key]=Texture.create(source,x,y,width,height);
				}
				return texture;
			}

			Image.clearCache=function(){
				fairygui.display.Image._textureCache={};
			}

			Image._textureCache={};
			return Image;
		})(Sprite)


		//class fairygui.display.MovieClip extends laya.display.Sprite
		var MovieClip1=(function(_super){
			function MovieClip(){
				this.interval=0;
				this.swing=false;
				this.repeatDelay=0;
				this.playState=null;
				this._$3__texture=null;
				this._needRebuild=false;
				this._playing=false;
				this._frameCount=0;
				this._frames=null;
				this._currentFrame=0;
				this._boundsRect=null;
				this._start=0;
				this._end=0;
				this._times=0;
				this._endAt=0;
				this._status=0;
				this._endHandler=null;
				MovieClip.__super.call(this);
				this.playState=new PlayState();
				this._playing=true;
				this.mouseEnabled=false;
				this.setPlaySettings();
				this.on("display",this,this.__addToStage);
				this.on("undisplay",this,this.__removeFromStage);
			}

			__class(MovieClip,'fairygui.display.MovieClip',_super,'MovieClip1');
			var __proto=MovieClip.prototype;
			//从start帧开始，播放到end帧（-1表示结尾），重复times次（0表示无限循环），循环结束后，停止在endAt帧（-1表示参数end）
			__proto.setPlaySettings=function(start,end,times,endAt,endHandler){
				(start===void 0)&& (start=0);
				(end===void 0)&& (end=-1);
				(times===void 0)&& (times=0);
				(endAt===void 0)&& (endAt=-1);
				this._start=start;
				this._end=end;
				if(this._end==-1 || this._end > this._frameCount-1)
					this._end=this._frameCount-1;
				this._times=times;
				this._endAt=endAt;
				if(this._endAt==-1)
					this._endAt=this._end;
				this._status=0;
				this._endHandler=endHandler;
				this.currentFrame=start;
			}

			__proto.update=function(){
				if (this._playing && this._frameCount !=0 && this._status !=3){
					this.playState.update(this);
					if (this._currentFrame !=this.playState.currentFrame){
						if (this._status==1){
							this._currentFrame=this._start;
							this.playState.currentFrame=this._currentFrame;
							this._status=0;
						}
						else if (this._status==2){
							this._currentFrame=this._endAt;
							this.playState.currentFrame=this._currentFrame;
							this._status=3;
							if (this._endHandler !=null){
								this._endHandler.run();
							}
						}
						else {
							this._currentFrame=this.playState.currentFrame;
							if (this._currentFrame==this._end){
								if (this._times > 0){
									this._times--;
									if (this._times==0)
										this._status=2;
									else
									this._status=1;
								}
							}
						}
						this.setFrame(this._frames[this._currentFrame]);
					}
				}
			}

			__proto.setFrame=function(frame){
				this.graphics.clear();
				if (frame !=null)
					this.graphics.drawTexture(frame.texture,frame.rect.x,frame.rect.y);
			}

			__proto.__addToStage=function(){
				if(this._playing)
					Laya.timer.frameLoop(1,this,this.update);
			}

			__proto.__removeFromStage=function(){
				if(this._playing)
					Laya.timer.clear(this,this.update);
			}

			__getset(0,__proto,'frames',function(){
				return this._frames;
				},function(value){
				this._frames=value;
				if (this._frames !=null)
					this._frameCount=this._frames.length;
				else
				this._frameCount=0;
				if(this._end==-1 || this._end > this._frameCount-1)
					this._end=this._frameCount-1;
				if(this._endAt==-1 || this._endAt > this._frameCount-1)
					this._endAt=this._frameCount-1;
				if(this._currentFrame < 0 || this._currentFrame > this._frameCount-1)
					this._currentFrame=this._frameCount-1;
				if(this._frameCount > 0)
					this.setFrame(this._frames[this._currentFrame]);
				else
				this.setFrame(null);
				this.playState.rewind();
			});

			__getset(0,__proto,'playing',function(){
				return this._playing;
				},function(value){
				this._playing=value;
				if(value && this.stage!=null){
					Laya.timer.frameLoop(1,this,this.update);
					}else {
					Laya.timer.clear(this,this.update);
				}
			});

			__getset(0,__proto,'frameCount',function(){
				return this._frameCount;
			});

			__getset(0,__proto,'boundsRect',function(){
				return this._boundsRect;
				},function(value){
				this._boundsRect=value;
			});

			__getset(0,__proto,'currentFrame',function(){
				return this._currentFrame;
				},function(value){
				if (this._currentFrame !=value){
					this._currentFrame=value;
					this.playState.currentFrame=value;
					this.setFrame(this._currentFrame < this._frameCount ? this._frames[this._currentFrame] :null);
				}
			});

			return MovieClip;
		})(Sprite)


		Laya.__init([GList,Transition,UIPackage,ScrollPane,GBasicTextField,Controller,GearAnimation,GearLook,GearSize,RelationItem]);
	})(window,document,Laya);
	}.call(window));

/***/ },
/* 36 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	(function() {

	window.__extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * @module annie
	 */
	var annie;
	(function (annie) {
	    /**
	     * annie引擎类的基类
	     * @class annie.AObject
	     * @since 1.0.0
	     */
	    var AObject = (function () {
	        function AObject() {
	            this._id = 0;
	            this._id = AObject._object_id++;
	        }
	        /**
	         * 每一个annie引擎对象都会有一个唯一的id码。
	         * @method getInstanceId
	         * @public
	         * @since 1.0.0
	         * @returns {number}
	         * @example
	         *      //获取 annie引擎类对象唯一码
	         *      trace(this.getInstanceId());
	         */
	        AObject.prototype.getInstanceId = function () {
	            return this._id;
	        };
	        AObject._object_id = 0;
	        return AObject;
	    }());
	    annie.AObject = AObject;
	    /**
	     * 事件触发基类
	     * @class annie.EventDispatcher
	     * @extends annie.AObject
	     * @public
	     * @since 1.0.0
	     */
	    var EventDispatcher = (function (_super) {
	        __extends(EventDispatcher, _super);
	        function EventDispatcher() {
	            _super.call(this);
	            this.eventTypes = null;
	            this.eventTypes = {};
	        }
	        /**
	         * 看看有多少mouse或者touch侦听数
	         * @method getMouseEventCount
	         * @returns {number}
	         * @static
	         * @private
	         * @since 1.0.0
	         * @param {string} type 获取事件类型，默认是所有
	         */
	        EventDispatcher.getMouseEventCount = function (type) {
	            if (type === void 0) { type = ""; }
	            var count = 0;
	            if (type == "") {
	                //返回所有鼠标事件数
	                for (var item in EventDispatcher._MECO) {
	                    if (item.indexOf("onMouse") == 0) {
	                        count += EventDispatcher._MECO[item];
	                    }
	                }
	            }
	            else {
	                if (EventDispatcher._MECO[type]) {
	                    count = EventDispatcher._MECO[type];
	                }
	            }
	            return count;
	        };
	        /**
	         * 给对象添加一个侦听
	         * @method addEventListener
	         * @public
	         * @since 1.0.0
	         * @param {string} type 侦听类形
	         * @param {Function}listener 侦听后的回调方法,如果这个方法是类实例的方法,为了this引用的正确性,请在方法参数后加上.bind(this);
	         * @example
	         *      this.addEventListener(annie.Event.ADD_TO_STAGE,function(e){trace(this);}.bind(this));
	         */
	        EventDispatcher.prototype.addEventListener = function (type, listener) {
	            if (!type) {
	                trace("添加侦听的type值为undefined");
	                return;
	            }
	            var s = this;
	            if (!s.eventTypes[type]) {
	                s.eventTypes[type] = [];
	            }
	            if (s.eventTypes[type].indexOf(listener) < 0) {
	                s.eventTypes[type].push(listener);
	                s._changeMouseCount(type, true);
	            }
	        };
	        /**
	         * 增加或删除相应mouse或touch侦听记数
	         * @method _changeMouseCount
	         * @private
	         * @since 1.0.0
	         * @param {string} type
	         * @param {boolean} isAdd
	         */
	        EventDispatcher.prototype._changeMouseCount = function (type, isAdd) {
	            var count = isAdd ? 1 : -1;
	            if (!EventDispatcher._MECO[type]) {
	                EventDispatcher._MECO[type] = 0;
	            }
	            EventDispatcher._MECO[type] += count;
	            if (EventDispatcher._MECO[type] < 0) {
	                EventDispatcher._MECO[type] = 0;
	            }
	            EventDispatcher._totalMEC += count;
	        };
	        /**
	         * 广播侦听
	         * @method dispatchEvent
	         * @public
	         * @since 1.0.0
	         * @param {annie.Event|string} event 广播所带的事件对象,如果传的是字符串则直接自动生成一个的事件对象,事件类型就是你传入进来的字符串的值
	         * @param {Object} data 广播后跟着事件一起传过去的其他任信息,默认值为null
	         * @returns {boolean} 如果有收听者则返回true
	         */
	        EventDispatcher.prototype.dispatchEvent = function (event, data) {
	            if (data === void 0) { data = null; }
	            var s = this;
	            if (typeof (event) == "string") {
	                event = new annie.Event(event);
	            }
	            var listeners = s.eventTypes[event.type];
	            if (listeners) {
	                var len = listeners.length;
	                if (event.target == null) {
	                    event.target = s;
	                }
	                if (data != null) {
	                    event.data = data;
	                }
	                for (var i = 0; i < len; i++) {
	                    listeners[i](event);
	                }
	                return true;
	            }
	            else {
	                return false;
	            }
	        };
	        /**
	         * 是否有添加过此类形的侦听
	         * @method hasEventListener
	         * @public
	         * @since 1.0.0
	         * @param {string} type 侦听类形
	         * @returns {boolean} 如果有则返回true
	         */
	        EventDispatcher.prototype.hasEventListener = function (type) {
	            if (this.eventTypes[type]) {
	                return true;
	            }
	            return false;
	        };
	        /**
	         * 移除对应类型的侦听
	         * @method removeEventListener
	         * @public
	         * @since 1.0.0
	         * @param {string} type 要移除的侦听类型
	         * @param {Function} listener 及侦听时绑定的回调方法
	         */
	        EventDispatcher.prototype.removeEventListener = function (type, listener) {
	            var s = this;
	            var listeners = s.eventTypes[type];
	            if (listeners) {
	                var len = listeners.length;
	                for (var i = len - 1; i >= 0; i--) {
	                    if (listeners[i] === listener) {
	                        listeners.splice(i, 1);
	                        if (type.indexOf("onMouse") == 0) {
	                            s._changeMouseCount(type, false);
	                        }
	                    }
	                }
	            }
	        };
	        /**
	         * 移除对象中所有的侦听
	         * @method removeAllEventListener
	         * @public
	         * @since 1.0.0
	         */
	        EventDispatcher.prototype.removeAllEventListener = function () {
	            var s = this;
	            for (var type in s.eventTypes) {
	                if (type.indexOf("onMouse") == 0) {
	                    for (var j = 0; j < s.eventTypes[type].length; j++) {
	                        s._changeMouseCount(type, false);
	                    }
	                }
	            }
	            s.eventTypes = {};
	        };
	        /**
	         * 全局的鼠标事件的监听数对象表
	         * @property _MECO
	         * @private
	         * @since 1.0.0
	         */
	        EventDispatcher._MECO = {};
	        EventDispatcher._totalMEC = 0;
	        return EventDispatcher;
	    }(AObject));
	    annie.EventDispatcher = EventDispatcher;
	})(annie || (annie = {}));
	/**
	 * @module annie
	 */
	var annie;
	(function (annie) {
	    /**
	     * 事件类,annie引擎中一切事件的基类
	     * @class annie.Event
	     * @extends annie.AObject
	     * @public
	     * @since 1.0.0
	     */
	    var Event = (function (_super) {
	        __extends(Event, _super);
	        /**
	         * @method Event
	         * @param {string} type 事件类型
	         */
	        function Event(type) {
	            _super.call(this);
	            /**
	             * 事件类型名
	             * @property type
	             * @type {string}
	             * @public
	             * @since 1.0.0
	             */
	            this.type = "";
	            /**
	             * 触发此事件的对象
	             * @property target
	             * @public
	             * @since 1.0.0
	             * @type {any}
	             */
	            this.target = null;
	            /**
	             * 随着事件一起附带的信息对象
	             * 所有需要随事件一起发送的信息都可以放在此对象中
	             * @property data
	             * @public
	             * @since 1.0.0
	             * @type {any}
	             * @default null
	             */
	            this.data = null;
	            /**
	             * 是否阻止事件向下冒泡
	             * @property _pd
	             * @type {boolean}
	             * @private
	             * @since 1.0.0
	             */
	            this._pd = false;
	            this.type = type;
	        }
	        /**
	         * 阻止向下冒泡事件,如果在接收到事件后调用事件的这个方法,那么这个事件将不会再向显示对象的子级派送
	         * @method preventDefault
	         * @public
	         * @since 1.0.0
	         */
	        Event.prototype.preventDefault = function () {
	            this._pd = true;
	        };
	        /**
	         * 舞台尺寸发生变化时触发
	         * @Event
	         * @property RESIZE
	         * @type {string}
	         * @static
	         * @public
	         * @since 1.0.0
	         */
	        Event.RESIZE = "onResize";
	        /**
	         * 舞台初始化完成后会触发的事件
	         * @Event
	         * @property ON_STAGE_INIT
	         * @type {string}
	         * @static
	         * @public
	         * @since 1.0.0
	         */
	        Event.INIT_TO_STAGE = "onInitStage";
	        /**
	         * 显示对象加入到舞台事件
	         * @Event
	         * @property ADD_TO_STAGE
	         * @type {string}
	         * @static
	         * @public
	         * @since 1.0.0
	         */
	        Event.ADD_TO_STAGE = "onAddToStage";
	        /**
	         * 显示对象从舞台移出事件
	         * @Event
	         * @property REMOVE_TO_STAGE
	         * @type {string}
	         * @static
	         * @public
	         * @since 1.0.0
	         */
	        Event.REMOVE_TO_STAGE = "onRemoveToStage";
	        /**
	         * 显示对象 循环帧事件
	         * @Event
	         * @property ENTER_FRAME
	         * @type {string}
	         * @static
	         * @public
	         * @since 1.0.0
	         */
	        Event.ENTER_FRAME = "onEnterFrame";
	        /**
	         * MovieClip 播放完成事件
	         * @Event
	         * @property END_FRAME
	         * @type {string}
	         * @static
	         * @public
	         * @since 1.0.0
	         */
	        Event.END_FRAME = "onEndFrame";
	        /**
	         * MovieClip 帧标签事件
	         * @Event
	         * @property CALL_FRAME
	         * @type {string}
	         * @static
	         * @public
	         * @since 1.0.0
	         */
	        Event.CALL_FRAME = "onCallFrame";
	        /**
	         * 完成事件
	         * @Event
	         * @property COMPLETE
	         * @type {string}
	         * @static
	         * @public
	         * @since 1.0.0
	         */
	        Event.COMPLETE = "onComplete";
	        /**
	         * 加载过程事件
	         * @Event
	         * @property PROGRESS
	         * @type {string}
	         * @static
	         * @public
	         * @since 1.0.0
	         */
	        Event.PROGRESS = "onProgress";
	        /**
	         * 出错事件
	         * @Event
	         * @property ERROR
	         * @type {string}
	         * @static
	         * @public
	         * @since 1.0.0
	         */
	        Event.ERROR = "onError";
	        /**
	         * 中断事件
	         * @Event
	         * @property ABORT
	         * @type {string}
	         * @static
	         * @public
	         * @since 1.0.0
	         */
	        Event.ABORT = "onAbort";
	        /**
	         * 开始事件
	         * @Event
	         * @property START
	         * @type {string}
	         * @static
	         * @public
	         * @since 1.0.0
	         */
	        Event.START = "onStart";
	        return Event;
	    }(annie.AObject));
	    annie.Event = Event;
	})(annie || (annie = {}));
	/**
	 * @module annie
	 */
	var annie;
	(function (annie) {
	    /**
	     * 鼠标事件类,电脑端鼠标,移动设备端的触摸都使用此事件来监听
	     * @class annie.MouseEvent
	     * @extends annie.Event
	     * @public
	     * @since 1.0.0
	     */
	    var MouseEvent = (function (_super) {
	        __extends(MouseEvent, _super);
	        /**
	         * @method MouseEvent
	         * @public
	         * @since 1.0.0
	         * @param {string} type
	         */
	        function MouseEvent(type) {
	            _super.call(this, type);
	            /**
	             * mouse或touch事件时rootDiv坐标x点
	             * @property clientX
	             * @public
	             * @since 1.0.0
	             * @type {number}
	             */
	            this.clientX = 0;
	            /**
	             * mouse或touch事件时rootDiv坐标y点
	             * @property clientY
	             * @public
	             * @since 1.0.0
	             * @type {number}
	             */
	            this.clientY = 0;
	            /**
	             * mouse或touch事件时全局坐标x点
	             * @property stageX
	             * @public
	             * @since 1.0.0
	             * @type {number}
	             */
	            this.stageX = 0;
	            /**
	             * mouse或touch事件时全局坐标y点
	             * @property stageY
	             * @public
	             * @since 1.0.0
	             * @type {number}
	             */
	            this.stageY = 0;
	            /**
	             * mouse或touch事件时本地坐标x点
	             * @property localX
	             * @public
	             * @since 1.0.0
	             * @type {number}
	             */
	            this.localX = 0;
	            /**
	             * mouse或touch事件时本地坐标y点
	             * @property localY
	             * @public
	             * @since 1.0.0
	             * @type {number}
	             */
	            this.localY = 0;
	            /**
	             * 绑定此事件的侦听对象
	             * @property currentTarget
	             * @public
	             * @since 1.0.0
	             * @type{annie.DisplayObject}
	             * @default null
	             */
	            this.currentTarget = null;
	        }
	        /**
	         * 鼠标或者手指按下事件
	         * @property MOUSE_DOWN
	         * @static
	         * @public
	         * @since 1.0.0
	         * @type {string}
	         */
	        MouseEvent.MOUSE_DOWN = "onMouseDown";
	        /**
	         * 鼠标或者手指抬起事件
	         * @property MOUSE_UP
	         * @static
	         * @public
	         * @since 1.0.0
	         * @type {string}
	         */
	        MouseEvent.MOUSE_UP = "onMouseUp";
	        /**
	         * 鼠标或者手指单击
	         * @property CLICK
	         * @static
	         * @public
	         * @since 1.0.0
	         * @type {string}
	         */
	        MouseEvent.CLICK = "onMouseClick";
	        /**
	         * 鼠标或者手指移动事件
	         * @property MOUSE_MOVE
	         * @static
	         * @public
	         * @since 1.0.0
	         * @type {string}
	         */
	        MouseEvent.MOUSE_MOVE = "onMouseMove";
	        /**
	         * 鼠标或者手指移入到显示对象上里触发的事件
	         * @property MOUSE_OVER
	         * @static
	         * @public
	         * @since 1.0.0
	         * @type {string}
	         */
	        MouseEvent.MOUSE_OVER = "onMouseOver";
	        /**
	         * 鼠标或者手指移出显示对象边界触发的事件
	         * @property MOUSE_OUT
	         * @static
	         * @public
	         * @since 1.0.0
	         * @type {string}
	         */
	        MouseEvent.MOUSE_OUT = "onMouseOut";
	        return MouseEvent;
	    }(annie.Event));
	    annie.MouseEvent = MouseEvent;
	})(annie || (annie = {}));
	/**
	 * @module annie
	 */
	var annie;
	(function (annie) {
	    /**
	     * @class annie.Point
	     * @extends annie.AObject
	     * @since 1.0.0
	     * @public
	     */
	    var Point = (function (_super) {
	        __extends(Point, _super);
	        /**
	         * 构造函数
	         * @method Point
	         * @public
	         * @since 1.0.0
	         * @param x
	         * @param y
	         */
	        function Point(x, y) {
	            if (x === void 0) { x = 0; }
	            if (y === void 0) { y = 0; }
	            _super.call(this);
	            /**
	             * @property x
	             * @public
	             * @since 1.0.0
	             * @type{number}
	             */
	            this.x = 0;
	            /**
	             * @property y
	             * @since 1.0.0
	             * @public
	             * @type {number}
	             */
	            this.y = 0;
	            var s = this;
	            s.x = x;
	            s.y = y;
	        }
	        /**
	         * 求两点之间的距离
	         * @method distance
	         * @static
	         * @param p1
	         * @param p2
	         * @returns {number}
	         */
	        Point.distance = function (p1, p2) {
	            return Math.sqrt(p1.x * p1.x * +p1.y * p2.y);
	        };
	        return Point;
	    }(annie.AObject));
	    annie.Point = Point;
	})(annie || (annie = {}));
	/**
	 * @module annie
	 */
	var annie;
	(function (annie) {
	    var PI = Math.PI;
	    var HalfPI = PI >> 1;
	    var PacPI = PI + HalfPI;
	    var TwoPI = PI << 1;
	    var DEG_TO_RAD = Math.PI / 180;
	    function cos(angle) {
	        switch (angle) {
	            case HalfPI:
	            case -PacPI:
	                return 0;
	            case PI:
	            case -PI:
	                return -1;
	            case PacPI:
	            case -HalfPI:
	                return 0;
	            default:
	                return Math.cos(angle);
	        }
	    }
	    /**
	     * @private
	     */
	    function sin(angle) {
	        switch (angle) {
	            case HalfPI:
	            case -PacPI:
	                return 1;
	            case PI:
	            case -PI:
	                return 0;
	            case PacPI:
	            case -HalfPI:
	                return -1;
	            default:
	                return Math.sin(angle);
	        }
	    }
	    /**
	     * 2维矩阵,不熟悉的朋友可以找相关书箱看看
	     * @class annie.Matrix
	     * @extends annie.AObject
	     * @public
	     * @since 1.0.0
	     */
	    var Matrix = (function (_super) {
	        __extends(Matrix, _super);
	        /**
	         * 构造函数
	         * @method Matrix
	         * @param {number} a
	         * @param {number} b
	         * @param {number} c
	         * @param {number} d
	         * @param {number} tx
	         * @param {number} ty
	         * @public
	         * @since 1.0.0
	         */
	        function Matrix(a, b, c, d, tx, ty) {
	            if (a === void 0) { a = 1; }
	            if (b === void 0) { b = 0; }
	            if (c === void 0) { c = 0; }
	            if (d === void 0) { d = 1; }
	            if (tx === void 0) { tx = 0; }
	            if (ty === void 0) { ty = 0; }
	            _super.call(this);
	            /**
	             * @property a
	             * @type {number}
	             * @public
	             * @default 1
	             * @since 1.0.0
	             */
	            this.a = 1;
	            /**
	             * @property b
	             * @public
	             * @since 1.0.0
	             * @type {number}
	             */
	            this.b = 0;
	            /**
	             * @property c
	             * @type {number}
	             * @public
	             * @since 1.0.0
	             */
	            this.c = 0;
	            /**
	             * @property d
	             * @type {number}
	             * @public
	             * @since 1.0.0
	             */
	            this.d = 1;
	            /**
	             * @property tx
	             * @type {number}
	             * @public
	             * @since 1.0.0
	             */
	            this.tx = 0;
	            /**
	             * @property ty
	             * @type {number}
	             * @since 1.0.0
	             * @public
	             */
	            this.ty = 0;
	            /**
	             * 将一个点通过矩阵变换后的点
	             * @method transformPoint
	             * @param {number} x
	             * @param {number} y
	             * @param {annie.Point} 默认为空，如果不为null，则返回的是Point就是此对象，如果为null，则返回来的Point是新建的对象
	             * @returns {annie.Point}
	             * @public
	             * @since 1.0.0
	             */
	            this.transformPoint = function (x, y, bp) {
	                if (bp === void 0) { bp = null; }
	                var s = this;
	                if (!bp) {
	                    bp = new annie.Point();
	                }
	                bp.x = x * s.a + y * s.c + s.tx;
	                bp.y = x * s.b + y * s.d + s.ty;
	                return bp;
	            };
	            /**
	             * 矩阵相乘
	             * @method prepend
	             * @public
	             * @since 1.0.0
	             * @param {annie.Matrix} mtx
	             */
	            this.prepend = function (mtx) {
	                var s = this;
	                var a = mtx.a;
	                var b = mtx.b;
	                var c = mtx.c;
	                var d = mtx.d;
	                var tx = mtx.tx;
	                var ty = mtx.ty;
	                var a1 = s.a;
	                var c1 = s.c;
	                var tx1 = s.tx;
	                s.a = a * a1 + c * s.b;
	                s.b = b * a1 + d * s.b;
	                s.c = a * c1 + c * s.d;
	                s.d = b * c1 + d * s.d;
	                s.tx = a * tx1 + c * s.ty + tx;
	                s.ty = b * tx1 + d * s.ty + ty;
	            };
	            var s = this;
	            s.a = a;
	            s.b = b;
	            s.c = c;
	            s.d = d;
	            s.tx = tx;
	            s.ty = ty;
	        }
	        /**
	         * 复制一个矩阵
	         * @method clone
	         * @since 1.0.0
	         * @public
	         * @returns {annie.Matrix}
	         */
	        Matrix.prototype.clone = function () {
	            var s = this;
	            return new Matrix(s.a, s.b, s.c, s.d, s.tx, s.ty);
	        };
	        /**
	         * 从一个矩阵里赋值给这个矩阵
	         * @method setFrom
	         * @param {annie.Matrix} mtx
	         * @public
	         * @since 1.0.0
	         */
	        Matrix.prototype.setFrom = function (mtx) {
	            var s = this;
	            s.a = mtx.a;
	            s.b = mtx.b;
	            s.c = mtx.c;
	            s.d = mtx.d;
	            s.tx = mtx.tx;
	            s.ty = mtx.ty;
	        };
	        /**
	         * 将矩阵恢复成原始矩阵
	         * @method
	         * @public
	         * @since 1.0.0
	         */
	        Matrix.prototype.identity = function () {
	            var s = this;
	            s.a = s.d = 1;
	            s.b = s.c = s.tx = s.ty = 0;
	        };
	        /**
	         * 反转一个矩阵
	         * @method
	         * @returns {Matrix}
	         * @since 1.0.0
	         * @public
	         */
	        Matrix.prototype.invert = function () {
	            var s = this;
	            var target = new Matrix(s.a, s.b, s.c, s.d, s.tx, s.ty);
	            var a = s.a;
	            var b = s.b;
	            var c = s.c;
	            var d = s.d;
	            var tx = s.tx;
	            var ty = s.ty;
	            if (b == 0 && c == 0) {
	                if (a == 0 || d == 0) {
	                    target.a = target.d = target.tx = target.ty = 0;
	                }
	                else {
	                    a = target.a = 1 / a;
	                    d = target.d = 1 / d;
	                    target.tx = -a * tx;
	                    target.ty = -d * ty;
	                }
	                return target;
	            }
	            var determinant = a * d - b * c;
	            if (determinant == 0) {
	                target.identity();
	                return target;
	            }
	            determinant = 1 / determinant;
	            var k = target.a = d * determinant;
	            b = target.b = -b * determinant;
	            c = target.c = -c * determinant;
	            d = target.d = a * determinant;
	            target.tx = -(k * tx + c * ty);
	            target.ty = -(b * tx + d * ty);
	            return target;
	        };
	        /**
	         * 设置一个矩阵通过普通的显示对象的相关九大属性
	         * @method createBox
	         * @param {number} x
	         * @param {number} y
	         * @param {number} scaleX
	         * @param {number} scaleY
	         * @param {number} rotation
	         * @param {number} skewX
	         * @param {number} skewY
	         * @param {number} ax
	         * @param {number} ay
	         * @since 1.0.0
	         * @public
	         */
	        Matrix.prototype.createBox = function (x, y, scaleX, scaleY, rotation, skewX, skewY, ax, ay) {
	            var s = this;
	            if (rotation != 0) {
	                skewX = skewY = rotation % 360;
	            }
	            else {
	                skewX %= 360;
	                skewY %= 360;
	            }
	            if ((skewX == 0) && (skewY == 0)) {
	                s.a = scaleX;
	                s.b = s.c = 0;
	                s.d = scaleY;
	            }
	            else {
	                skewX *= DEG_TO_RAD;
	                skewY *= DEG_TO_RAD;
	                var u = cos(skewX);
	                var v = sin(skewX);
	                if (skewX == skewY) {
	                    s.a = u * scaleX;
	                    s.b = v * scaleX;
	                }
	                else {
	                    s.a = cos(skewY) * scaleX;
	                    s.b = sin(skewY) * scaleX;
	                }
	                s.c = -v * scaleY;
	                s.d = u * scaleY;
	            }
	            ;
	            s.tx = x + ax - (ax * s.a + ay * s.c);
	            s.ty = y + ay - (ax * s.b + ay * s.d);
	        };
	        /**
	         * 判断两个矩阵是否相等
	         * @method isEqual
	         * @static
	         * @public
	         * @since 1.0.0
	         * @param {annie.Matrix} m1
	         * @param {annie.Matrix} m2
	         * @returns {boolean}
	         */
	        Matrix.isEqual = function (m1, m2) {
	            return m1.tx == m2.tx && m1.ty == m2.ty && m1.a == m2.a && m1.b == m2.b && m1.c == m2.c && m1.d == m2.d;
	        };
	        return Matrix;
	    }(annie.AObject));
	    annie.Matrix = Matrix;
	})(annie || (annie = {}));
	/**
	 * @module annie
	 */
	var annie;
	(function (annie) {
	    /**
	     *
	     * @class annie.Rectangle
	     * @extends annie.AObject
	     * @public
	     * @since 1.0.0
	     */
	    var Rectangle = (function (_super) {
	        __extends(Rectangle, _super);
	        /**
	         * 构造函数
	         * @method Rectangle
	         * @param {number} x
	         * @param {number} y
	         * @param {number} width
	         * @param {number} height
	         */
	        function Rectangle(x, y, width, height) {
	            if (x === void 0) { x = 0; }
	            if (y === void 0) { y = 0; }
	            if (width === void 0) { width = 0; }
	            if (height === void 0) { height = 0; }
	            _super.call(this);
	            /**
	             * @property x
	             * @public
	             * @since 1.0.0
	             * @type{number}
	             * @default 0
	             */
	            this.x = 0;
	            /**
	             * @property y
	             * @public
	             * @since 1.0.0
	             * @type{number}
	             * @default 0
	             */
	            this.y = 0;
	            /**
	             * @property width
	             * @public
	             * @since 1.0.0
	             * @type{number}
	             * @default 0
	             */
	            this.width = 0;
	            /**
	             * @property height
	             * @public
	             * @since 1.0.0
	             * @type{number}
	             * @default 0
	             */
	            this.height = 0;
	            this.x = x;
	            this.y = y;
	            this.height = height;
	            this.width = width;
	        }
	        /**
	         * 判断一个点是否在矩形内包括边
	         * @method isPointIn
	         * @param {annie.Point} point
	         * @returns {boolean}
	         * @public
	         * @since 1.0.0
	         */
	        Rectangle.prototype.isPointIn = function (point) {
	            var s = this;
	            return point.x >= s.x && point.x <= (s.x + s.width) && point.y >= s.y && point.y <= (s.y + s.height);
	        };
	        /**
	         * 将多个矩形合成为一个大的矩形
	         * 返回包含所有给定的矩阵拼合之后的一个最小矩形
	         * @method createFromRects
	         * @param {annie.Rectangle} rect
	         * @param {..arg} arg
	         * @public
	         * @since 1.0.0
	         * @static
	         */
	        Rectangle.createFromRects = function (rect) {
	            var arg = [];
	            for (var _i = 1; _i < arguments.length; _i++) {
	                arg[_i - 1] = arguments[_i];
	            }
	            var x = rect.x, y = rect.y, w = rect.width, h = rect.height, wx1, wx2, hy1, hy2;
	            for (var i = 0; i < arg.length; i++) {
	                if (arg[i] == null)
	                    continue;
	                wx1 = x + w;
	                hy1 = y + h;
	                wx2 = arg[i].x + arg[i].width;
	                hy2 = arg[i].y + arg[i].height;
	                if (x > arg[i].x) {
	                    x = arg[i].x;
	                }
	                if (y > arg[i].y) {
	                    y = arg[i].y;
	                }
	                if (wx1 < wx2) {
	                    wx1 = wx2;
	                }
	                if (hy1 < hy2) {
	                    hy1 = hy2;
	                }
	            }
	            return new Rectangle(x, y, wx1 - x, hy1 - y);
	        };
	        /**
	         * 通过一系列点来生成一个矩形
	         * 返回包含所有给定的点的最小矩形
	         * @method createFromPoints
	         * @static
	         * @public
	         * @since 1.0.0
	         * @param {annie.Point} p1
	         * @param {..arg} ary
	         * @returns {annie.Rectangle}
	         */
	        Rectangle.createFromPoints = function (p1) {
	            var arg = [];
	            for (var _i = 1; _i < arguments.length; _i++) {
	                arg[_i - 1] = arguments[_i];
	            }
	            var x = p1.x, y = p1.y, w = p1.x, h = p1.y;
	            for (var i = 0; i < arg.length; i++) {
	                if (arg[i] == null)
	                    continue;
	                if (x > arg[i].x) {
	                    x = arg[i].x;
	                }
	                if (y > arg[i].y) {
	                    x = arg[i].y;
	                }
	                if (w < arg[i].x) {
	                    w = arg[i].x;
	                }
	                if (h < arg[i].y) {
	                    h = arg[i].y;
	                }
	            }
	            return new Rectangle(x, y, w, h);
	        };
	        /**
	         * 判读两个矩形是否相交
	         * @method testRectCross
	         * @public
	         * @since 1.0.2
	         * @param r1
	         * @param r2
	         * @return {boolean}
	         */
	        Rectangle.testRectCross = function (ra, rb) {
	            var a_cx, a_cy; /* 第一个中心点*/
	            var b_cx, b_cy; /* 第二个中心点*/
	            a_cx = ra.x + (ra.width / 2);
	            a_cy = ra.y + (ra.height / 2);
	            b_cx = rb.x + (rb.width / 2);
	            b_cy = rb.y + (rb.height / 2);
	            return ((Math.abs(a_cx - b_cx) <= (ra.width / 2 + rb.width / 2)) && (Math.abs(a_cy - b_cy) <= (ra.height / 2 + rb.height / 2)));
	        };
	        return Rectangle;
	    }(annie.AObject));
	    annie.Rectangle = Rectangle;
	})(annie || (annie = {}));
	/**
	 * @module annie
	 */
	var annie;
	(function (annie) {
	    /**
	     * 显示对象抽奖类,不能直接实例化。一切显示对象的基类,包含了显示对象需要的一切属性
	     * DisplayObject 类本身不包含任何用于在屏幕上呈现内容的 API。
	     * 因此，如果要创建 DisplayObject 类的自定义子类，您将需要扩展其中一个具有在屏幕
	     * 上呈现内容的 API 的子类，如 Shape、Sprite、Bitmap、TextField 或 MovieClip 类。
	     * @class annie.DisplayObject
	     * @since 1.0.0
	     * @extends annie.EventDispatcher
	     */
	    var DisplayObject = (function (_super) {
	        __extends(DisplayObject, _super);
	        /**
	         * @method DisplayObject
	         * @since 1.0.0
	         * @public
	         */
	        function DisplayObject() {
	            _super.call(this);
	            /**
	             * 此显示对象所在的舞台对象,如果此对象没有被添加到显示对象列表中,此对象为空。
	             * @property stage
	             * @public
	             * @since 1.0.0
	             * @type {Stage}
	             * @default null;
	             * @readonly
	             * */
	            this.stage = null;
	            /**
	             * 显示对象在显示列表上的最终表现出来的透明度,此透明度会继承父级的透明度依次相乘得到最终的值
	             * @property cAlpha
	             * @private
	             * @type {number}
	             * @since 1.0.0
	             * @default 1
	             */
	            this.cAlpha = 1;
	            /**
	             * 显示对象上对显示列表上的最终合成的矩阵,此矩阵会继承父级的显示属性依次相乘得到最终的值
	             * @property cMatrix
	             * @private
	             * @type {annie.Matrix}
	             * @default null
	             * @since 1.0.0
	             */
	            this.cMatrix = new annie.Matrix();
	            /**
	             * 因为每次enterFrame事件时都生成一个Event非常浪费资源,所以做成一个全局的
	             * @property _enterFrameEvent
	             * @private
	             * @type {annie.Event}
	             * @default null
	             * @since 1.0.0
	             */
	            this._enterFrameEvent = null;
	            /**
	             * 是否可以接受点击事件,如果设置为false,此显示对象将无法接收到点击事件
	             * @property mouseEnable
	             * @type {boolean}
	             * @public
	             * @since 1.0.0
	             * @default true
	             */
	            this.mouseEnable = true;
	            /**
	             * 显示对象上对显示列表上的最终的所有滤镜组
	             * @property cFilters
	             * @private
	             * @default []
	             * @since 1.0.0
	             * @type {Array}
	             */
	            this.cFilters = [];
	            /**
	             * 缓存着的滤镜组信息，通过此信息来判断滤镜是否有更新以此来告诉对象是否需要更新缓存视觉
	             * @property cCacheFilters
	             * @private
	             * @default []
	             * @since 1.0.0
	             * @type {Array}
	             */
	            this.cCacheFilters = [];
	            /**
	             * 是否需要更新缓存的开关
	             * @property _isNeedUpdate
	             * @private
	             * @type {boolean}
	             * @since 1.0.0
	             * @default true
	             */
	            this._isNeedUpdate = true;
	            /**
	             * 每一个显示对象都可以给他启一个名字,这样我们在查找子级的时候就可以直接用this.getChildrndByName("name")获取到这个对象的引用
	             * @property name
	             * @since 1.0.0
	             * @public
	             * @type {string}
	             * @default ""
	             */
	            this.name = "";
	            /**
	             * 显示对象位置x
	             * @property x
	             * @public
	             * @since 1.0.0
	             * @type {number}
	             * @default 0
	             */
	            this.x = 0;
	            /**
	             * 显示对象位置y
	             * @property y
	             * @public
	             * @since 1.0.0
	             * @type {number}
	             * @default 0
	             */
	            this.y = 0;
	            /**
	             * 显示对象x方向的缩放值
	             * @property scaleX
	             * @public
	             * @since 1.0.0
	             * @type {number}
	             * @default 1
	             */
	            this.scaleX = 1;
	            /**
	             * 显示对象y方向的缩放值
	             * @property scaleY
	             * @public
	             * @since 1.0.0
	             * @type {number}
	             * @default 1
	             */
	            this.scaleY = 1;
	            /**
	             * 显示对象旋转角度
	             * @property rotation
	             * @public
	             * @since 1.0.0
	             * @type {number}
	             * @default 0
	             */
	            this.rotation = 0;
	            /**
	             * 显示对象透明度
	             * @property alpha
	             * @public
	             * @since 1.0.0
	             * @type {number}
	             * @default 1
	             */
	            this.alpha = 1;
	            /**
	             * 显示对象x方向的斜切值
	             * @property skewX
	             * @public
	             * @since 1.0.0
	             * @type {number}
	             * @default 0
	             */
	            this.skewX = 0;
	            /**
	             * 显示对象y方向的斜切值
	             * @property skewY
	             * @public
	             * @since 1.0.0
	             * @type {number}
	             * @default 0
	             */
	            this.skewY = 0;
	            /**
	             * 显示对象上x方向的缩放或旋转点
	             * @property anchorX
	             * @public
	             * @since 1.0.0
	             * @type {number}
	             * @default 0
	             */
	            this.anchorX = 0;
	            /**
	             * 显示对象上y方向的缩放或旋转点
	             * @property anchorY
	             * @pubic
	             * @since 1.0.0
	             * @type {number}
	             * @default 0
	             */
	            this.anchorY = 0;
	            /**
	             * 显未对象是否可见
	             * @property visible
	             * @public
	             * @since 1.0.0
	             * @type {boolean}
	             * @default 0
	             */
	            this.visible = true;
	            // /**
	            //  * 显示对象的混合模式
	            //  * @property blendMode
	            //  * @public
	            //  * @since 1.0.0
	            //  * @type {number}
	            //  * @default 0
	            //  */
	            // public blendMode:number = 0;
	            /**
	             * 显示对象的变形矩阵
	             * @property matrix
	             * @public
	             * @since 1.0.0
	             * @type {annie.Matrix}
	             * @default null
	             */
	            this.matrix = new annie.Matrix();
	            /**
	             * 显示对象的遮罩, 是一个Shape显示对象或是一个只包含shape显示对象的MovieClip
	             * @property mask
	             * @public
	             * @since 1.0.0
	             * @type {annie.DisplayObject}
	             * @default null
	             */
	            this.mask = null;
	            /**
	             * 显示对象的滤镜数组
	             * @property filters
	             * @since 1.0.0
	             * @public
	             * @type {Array}
	             * @default null
	             */
	            this.filters = null;
	            /**
	             * 显示对象的父级
	             * @property parent
	             * @since 1.0.0
	             * @public
	             * @type {annie.Sprite}
	             * @default null
	             * @readonly
	             */
	            this.parent = null;
	            //需要用webgl渲染的信息
	            this._glInfo = {};
	        }
	        /**
	         *将全局坐标转换到本地坐标值
	         * @method globalToLocal
	         * @since 1.0.0
	         * @public
	         * @param {annie.Point} point
	         * @returns {annie.Point}
	         */
	        DisplayObject.prototype.globalToLocal = function (point, bp) {
	            if (bp === void 0) { bp = null; }
	            return this.cMatrix.invert().transformPoint(point.x, point.y, bp);
	        };
	        /**
	         *将本地坐标转换到全局坐标值
	         * @method localToGlobal
	         * @public
	         * @since 1.0.0
	         * @param {annie.Point} point
	         * @returns {annie.Point}
	         */
	        DisplayObject.prototype.localToGlobal = function (point, bp) {
	            if (bp === void 0) { bp = null; }
	            return this.cMatrix.transformPoint(point.x, point.y, bp);
	        };
	        /**
	         * 点击碰撞测试,就是舞台上的一个point是否在显示对象内,在则返回该对象，不在则返回null
	         * @method hitTestPoint
	         * @public
	         * @since 1.0.0
	         * @param {annie.Point} globalPoint 全局坐标中的一个点
	         * @param {boolean} isMouseEvent 是否是鼠标事件调用此方法,用户一般无须理会,除非你要模拟鼠标点击可以
	         * @returns {annie.DisplayObject}
	         */
	        DisplayObject.prototype.hitTestPoint = function (globalPoint, isMouseEvent) {
	            if (isMouseEvent === void 0) { isMouseEvent = false; }
	            var s = this;
	            if (!s.visible)
	                return null;
	            if (isMouseEvent && !s.mouseEnable)
	                return null;
	            if (s.getBounds().isPointIn(s.globalToLocal(globalPoint, DisplayObject._bp))) {
	                return s;
	            }
	            return null;
	        };
	        /**
	         * 获取对象的自身的没有任何形变的原始姿态下的原点坐标及宽高,抽像方法
	         * @method getBounds
	         * @public
	         * @since 1.0.0
	         * @returns {annie.Rectangle}
	         */
	        DisplayObject.prototype.getBounds = function () {
	            return null;
	        };
	        /**
	         * 获取对象形变后外切矩形。
	         * 可以从这个方法中读取到此显示对象变形后x方向上的宽主y方向上的高
	         * @method getDrawRect
	         * @public
	         * @since 1.0.0
	         * @returns {annie.Rectangle}
	         */
	        DisplayObject.prototype.getDrawRect = function () {
	            var s = this;
	            var rect;
	            var bounds = s.getBounds();
	            if (bounds) {
	                var p1 = s.matrix.transformPoint(bounds.x, bounds.y);
	                var p2 = s.matrix.transformPoint(bounds.x + bounds.width, bounds.y + bounds.height);
	                rect = annie.Rectangle.createFromPoints(p1, p2);
	                rect.width -= rect.x;
	                rect.height -= rect.y;
	            }
	            return rect;
	        };
	        /**
	         * 更新函数
	         * @method update
	         * @public
	         * @since 1.0.0
	         */
	        DisplayObject.prototype.update = function () {
	            var s = this;
	            s.matrix.createBox(s.x, s.y, s.scaleX, s.scaleY, s.rotation, s.skewX, s.skewY, s.anchorX, s.anchorY);
	            s.cFilters.length = 0;
	            s.cMatrix.setFrom(s.matrix);
	            if (s.parent) {
	                s.cMatrix.prepend(s.parent.cMatrix);
	                s.cAlpha = s.alpha * s.parent.cAlpha;
	                if (s.parent.cFilters && s.parent.cFilters.length > 0) {
	                    var len = s.parent.cFilters.length;
	                    var pf = s.parent.cFilters;
	                    for (var i = 0; i < len; i++) {
	                        s.cFilters[i] = pf[i];
	                    }
	                }
	            }
	            else {
	                s.cAlpha = s.alpha;
	            }
	            if (s.visible) {
	                //如果visible为true更新他们的显示列表信息
	                if (s.filters && s.filters.length > 0) {
	                    var len = s.filters.length;
	                    var sf = s.filters;
	                    for (var i = 0; i < len; i++) {
	                        s.cFilters.push(sf[i]);
	                    }
	                }
	                //判读是否显示对象链上是否有滤镜更新
	                if (s.cFilters.length > 0) {
	                    var cLen = s.cFilters.length;
	                    var isNeedUpdateFilters = false;
	                    if (s.cCacheFilters.length != cLen) {
	                        isNeedUpdateFilters = true;
	                    }
	                    else {
	                        for (var i = 0; i < cLen; i++) {
	                            if (s.cFilters[i].toString() != s.cCacheFilters[i]) {
	                                isNeedUpdateFilters = true;
	                                break;
	                            }
	                        }
	                    }
	                    if (isNeedUpdateFilters) {
	                        s._isNeedUpdate = true;
	                        s.cCacheFilters.length = 0;
	                        for (var i = 0; i < cLen; i++) {
	                            s.cCacheFilters[i] = s.cFilters[i].toString();
	                        }
	                    }
	                }
	                else if (s.cCacheFilters.length > 0) {
	                    s.cCacheFilters.length = 0;
	                    s._isNeedUpdate = true;
	                }
	            }
	            //enterFrame事件,因为enterFrame不会冒泡所以不需要调用s._enterFrameEvent._pd=false
	            if (s.hasEventListener("onEnterFrame")) {
	                if (!s._enterFrameEvent) {
	                    s._enterFrameEvent = new annie.Event("onEnterFrame");
	                }
	                s.dispatchEvent(s._enterFrameEvent);
	            }
	        };
	        /**
	         * 抽象方法
	         * 调用此方法将显示对象渲染到屏幕
	         * @method render
	         * @public
	         * @since 1.0.0
	         * @param {annie.IRender} renderObj
	         */
	        DisplayObject.prototype.render = function (renderObj) {
	            //this.isNeedUpdate =false;
	        };
	        /**
	         * 调用些方法会冒泡的将事件向显示列表下方传递
	         * @method _onDispatchBubbledEvent
	         * @private
	         * @since 1.0.0
	         * @param {string} type
	         * @private
	         */
	        DisplayObject.prototype._onDispatchBubbledEvent = function (type) {
	            var s = this;
	            s.stage = s.parent.stage;
	            s.dispatchEvent(type);
	            if (type == "onRemoveToStage") {
	                s.stage = null;
	            }
	        };
	        /**
	         * 返回显示对象的宽和高
	         * @method getWH
	         * @public
	         * @since 1.0.0
	         * @returns {width: number, height: number}
	         */
	        DisplayObject.prototype.getWH = function () {
	            var s = this;
	            var dr = s.getDrawRect();
	            return { width: dr.width, height: dr.height };
	        };
	        /**
	         * 设置显示对象的宽和高
	         * @method setWH
	         * @public
	         * @since 1.0.0
	         * @param {number} w
	         * @param {number} h
	         */
	        DisplayObject.prototype.setWH = function (w, h) {
	            var s = this;
	            var wh = s.getWH();
	            if (w != 0) {
	                var sx = w / wh.width;
	                s.scaleX *= sx;
	            }
	            if (h != 0) {
	                var sy = h / wh.height;
	                s.scaleY *= sy;
	            }
	        };
	        /**
	         * 为了hitTestPoint，localToGlobal，globalToLocal等方法不复新不重复生成新的点对象而节约内存
	         * @type {annie.Point}
	         * @private
	         * @static
	         */
	        DisplayObject._bp = new annie.Point();
	        /**
	         * 画缓存位图的时候需要使用
	         * @property _bitmapCanvas
	         * @private
	         * @static
	         * @since 1.0.0
	         * @type {Canvas}
	         */
	        DisplayObject._canvas = window.document.createElement("canvas");
	        return DisplayObject;
	    }(annie.EventDispatcher));
	    annie.DisplayObject = DisplayObject;
	})(annie || (annie = {}));
	/**
	 * @module annie
	 */
	var annie;
	(function (annie) {
	    /**
	     * 利用 Bitmap() 构造函数，可以创建包含对 BitmapData 对象的引用的 Bitmap 对象。
	     * 创建了 Bitmap 对象后，使用父 Sprite 实例的 addChild() 或 addChildAt() 方法将位图放在显示列表中。
	     * 一个 Bitmap 对象可在若干 Bitmap 对象之中共享其 BitmapData 引用，
	     * 与转换属性或旋转属性无关。由于能够创建引用相同 BitmapData 对象的多个 Bitmap 对象，
	     * 因此，多个显示对象可以使用相同的复杂 BitmapData 对象，而不会因为每个显示对象实例使用一个 BitmapData 对象而产生内存开销。
	     * @class annie.Bitmap
	     * @public
	     * @extends annie.DisplayObject
	     * @since 1.0.0
	     */
	    var Bitmap = (function (_super) {
	        __extends(Bitmap, _super);
	        /**
	         * 构造函数
	         * @method Bitmap
	         * @since 1.0.0
	         * @public
	         * @param {Image|Video|other} bitmapData 一个HTMl Image的实例
	         * @param {annie.Rectangle} rect 设置显示Image的区域,不设置些值则全部显示Image的内容
	         */
	        function Bitmap(bitmapData, rect) {
	            if (bitmapData === void 0) { bitmapData = null; }
	            if (rect === void 0) { rect = null; }
	            _super.call(this);
	            /**
	             * HTML的一个Image对象或者是canvas对象或者是video对象
	             * @property bitmapData
	             * @public
	             * @since 1.0.0
	             * @type {any}
	             * @default null
	             */
	            this.bitmapData = null;
	            /**
	             * 有时候一张大图，我们只需要显示他的部分。其他不显示,对你可能猜到了
	             * SpriteSheet就用到了这个属性。默认为null表示全尺寸显示bitmapData需要显示的范围
	             * @property rect
	             * @public
	             * @since 1.0.0
	             * @type {annie.Rectangle}
	             * @default null
	             */
	            this.rect = null;
	            /**
	             * 缓存起来的纹理对象。最后真正送到渲染器去渲染的对象
	             * @property _cacheImg
	             * @private
	             * @since 1.0.0
	             * @type {any}
	             * @default null
	             */
	            this._cacheImg = null;
	            this._realCacheImg = null;
	            /**
	             * @property _cacheX
	             * @private
	             * @since 1.0.0
	             * @type {number}
	             * @default 0
	             */
	            this._cacheX = 0;
	            /**
	             * @property _cacheY
	             * @private
	             * @since 1.0.0
	             * @type {number}
	             * @default 0
	             */
	            this._cacheY = 0;
	            /**
	             * @property _isCache
	             * @private
	             * @since 1.0.0
	             * @type {boolean}
	             * @default false
	             */
	            this._isCache = false;
	            var s = this;
	            s.bitmapData = bitmapData;
	            s.rect = rect;
	        }
	        /**
	         * 重写渲染
	         * @method render
	         * @param {annie.IRender} renderObj
	         * @public
	         * @since 1.0.0
	         */
	        Bitmap.prototype.render = function (renderObj) {
	            if (this._cacheImg) {
	                renderObj.draw(this, 0);
	            }
	            //super.render();
	        };
	        /**
	         * 重写刷新
	         * @method update
	         * @public
	         * @since 1.0.0
	         */
	        Bitmap.prototype.update = function () {
	            var s = this;
	            _super.prototype.update.call(this);
	            //滤镜
	            if (s._isNeedUpdate) {
	                if (!s.bitmapData || (s.bitmapData.nodeName == "IMG" && !s.bitmapData.complete))
	                    return;
	                if (s["cFilters"] && s["cFilters"].length > 0) {
	                    if (!s._realCacheImg) {
	                        s._realCacheImg = window.document.createElement("canvas");
	                    }
	                    var _canvas = s._realCacheImg;
	                    var tr = s.rect;
	                    var w = tr ? tr.width : s.bitmapData.width;
	                    var h = tr ? tr.height : s.bitmapData.height;
	                    var newW = w + 20;
	                    var newH = h + 20;
	                    _canvas.width = newW;
	                    _canvas.height = newH;
	                    _canvas.style.width = newW / annie.devicePixelRatio + "px";
	                    _canvas.style.height = newH / annie.devicePixelRatio + "px";
	                    var ctx = _canvas.getContext("2d");
	                    ctx.clearRect(0, 0, newW, newH);
	                    ctx.translate(10, 10);
	                    ctx.shadowBlur = 0;
	                    ctx.shadowColor = "#0";
	                    ctx.shadowOffsetX = 0;
	                    ctx.shadowOffsetY = 0;
	                    /////////////////////
	                    var cf = s.cFilters;
	                    var cfLen = cf.length;
	                    for (var i = 0; i < cfLen; i++) {
	                        if (s.cFilters[i].type == "Shadow") {
	                            ctx.shadowBlur = cf[i].blur;
	                            ctx.shadowColor = cf[i].color;
	                            ctx.shadowOffsetX = cf[i].offsetX;
	                            ctx.shadowOffsetY = cf[i].offsetY;
	                            break;
	                        }
	                    }
	                    ////////////////////
	                    if (tr) {
	                        ctx.drawImage(s.bitmapData, tr.x, tr.y, w, h, 0, 0, w, h);
	                    }
	                    else {
	                        ctx.drawImage(s.bitmapData, 0, 0);
	                    }
	                    var len = s["cFilters"].length;
	                    var imageData = ctx.getImageData(0, 0, newW, newH);
	                    for (var i = 0; i < len; i++) {
	                        var f = s["cFilters"][i];
	                        f.drawFilter(imageData);
	                    }
	                    ctx.putImageData(imageData, 0, 0);
	                    //s._realCacheImg.src = _canvas.toDataURL("image/png");
	                    s._cacheImg = s._realCacheImg;
	                    s._cacheX = -10;
	                    s._cacheY = -10;
	                    s._isCache = true;
	                }
	                else {
	                    s._isCache = false;
	                    s._cacheX = 0;
	                    s._cacheY = 0;
	                    s._cacheImg = s.bitmapData;
	                }
	                //给webgl更新新
	                s._isNeedUpdate = false;
	                annie.WGRender.setDisplayInfo(s, 0);
	            }
	        };
	        /**
	         * 重写getBounds
	         * 获取Bitmap对象的Bounds
	         * @method getBounds
	         * @public
	         * @since 1.0.0
	         * @returns {annie.Rectangle}
	         */
	        Bitmap.prototype.getBounds = function () {
	            var s = this;
	            var r = new annie.Rectangle();
	            if (s.rect) {
	                r.width = s.rect.width;
	                r.height = s.rect.height;
	            }
	            else {
	                r.width = s.bitmapData ? s.bitmapData.width : 0;
	                r.height = s.bitmapData ? s.bitmapData.height : 0;
	            }
	            return r;
	        };
	        /**
	         * 从SpriteSheet的大图中剥离出单独的小图以供特殊用途
	         * @method convertToImage
	         * @static
	         * @public
	         * @since 1.0.0
	         * @param {annie.Bitmap} bitmap
	         * @return {Image}
	         */
	        Bitmap.convertToImage = function (bitmap) {
	            if (!bitmap.bitmapData || (bitmap.bitmapData.nodeName == "IMG" && !bitmap.bitmapData.complete))
	                return;
	            if (!bitmap.rect) {
	                return bitmap.bitmapData;
	            }
	            else {
	                var _canvas = annie.DisplayObject._canvas;
	                var w = bitmap.rect.width;
	                var h = bitmap.rect.height;
	                _canvas.width = w;
	                _canvas.height = h;
	                var ctx = _canvas.getContext("2d");
	                var tr = bitmap.rect;
	                ctx.clearRect(0, 0, w, h);
	                ctx.drawImage(bitmap.bitmapData, tr.x, tr.y, w, h, 0, 0, w, h);
	                var _realCacheImg = window.document.createElement("img");
	                _realCacheImg.src = _canvas.toDataURL("image/png");
	                return _realCacheImg;
	            }
	        };
	        return Bitmap;
	    }(annie.DisplayObject));
	    annie.Bitmap = Bitmap;
	})(annie || (annie = {}));
	/**
	 * @module annie
	 */
	var annie;
	(function (annie) {
	    /**
	     * 矢量对象
	     * @class annie.Shape
	     * @extends annie.DisplayObject
	     * @since 1.0.0
	     * @public
	     */
	    var Shape = (function (_super) {
	        __extends(Shape, _super);
	        function Shape() {
	            _super.call(this);
	            /**
	             * 一个数组，每个元素也是一个数组[类型 0是属性,1是方法,名字 执行的属性或方法名,参数]
	             * @property _command
	             * @private
	             * @since 1.0.0
	             * @type {Array}
	             * @default []
	             */
	            this._command = [];
	            /**
	             * @property _cacheCanvas
	             * @since 1.0.0
	             * @private
	             * @type {Canvas}
	             */
	            this._cacheImg = window.document.createElement("canvas");
	            this._cacheX = 0;
	            this._cacheY = 0;
	            /**
	             * 碰撞或鼠标点击时的检测精度,为false只会粗略检测,如果形状规则,建议使用,检测速度快。
	             * 为true则会进行像素检测,只会检测有像素区域,检测效果好,建议需要严格的点击碰撞检测
	             * @property hitPixel
	             * @public
	             * @since 1.0.0
	             * @type {boolean}
	             * @default true
	             */
	            this.hitPixel = true;
	            /**
	             * 径向渐变填充 一般给Flash2x用
	             * @method beginRadialGradientFill
	             * @param {Array} colors 一组颜色值
	             * @param {Array} ratios 一组范围比例值
	             * @param {Array} points 一组点
	             * @public
	             * @since 1.0.0
	             */
	            this.beginRadialGradientFill = function (colors, ratios, points) {
	                this._fill(Shape.getGradientColor(colors, ratios, points));
	            };
	            /**
	             * 画径向渐变的线条 一般给Flash2x用
	             * @method beginRadialGradientStroke
	             * @param {Array} colors 一组颜色值
	             * @param {Array} ratios 一组范围比例值
	             * @param {Array} points 一组点
	             * @param {number} lineWidth
	             * @public
	             * @since 1.0.0
	             */
	            this.beginRadialGradientStroke = function (colors, ratios, points, lineWidth) {
	                if (lineWidth === void 0) { lineWidth = 1; }
	                this._stroke(Shape.getGradientColor(colors, ratios, points), lineWidth);
	            };
	            /**
	             * 解析一段路径 一般给Flash2x用
	             * @method decodePath
	             * @param {string} data
	             * @public
	             * @since 1.0.0
	             */
	            this.decodePath = function (data) {
	                var s = this;
	                var instructions = ["moveTo", "lineTo", "quadraticCurveTo", "bezierCurveTo", "closePath"];
	                var paramCount = [2, 2, 4, 6, 0];
	                var i = 0, l = data.length;
	                var params;
	                var x = 0, y = 0;
	                var base64 = Shape.BASE_64;
	                while (i < l) {
	                    var c = data.charAt(i);
	                    var n = base64[c];
	                    var fi = n >> 3; // highest order bits 1-3 code for operation.
	                    var f = instructions[fi];
	                    // check that we have a valid instruction & that the unused bits are empty:
	                    if (!f || (n & 3)) {
	                        throw ("bad path data (@" + i + "): " + c);
	                    }
	                    var pl = paramCount[fi];
	                    if (!fi) {
	                        x = y = 0;
	                    } // move operations reset the position.
	                    params = [];
	                    i++;
	                    var charCount = (n >> 2 & 1) + 2; // 4th header bit indicates number size for this operation.
	                    for (var p = 0; p < pl; p++) {
	                        var num = base64[data.charAt(i)];
	                        var sign = (num >> 5) ? -1 : 1;
	                        num = ((num & 31) << 6) | (base64[data.charAt(i + 1)]);
	                        if (charCount == 3) {
	                            num = (num << 6) | (base64[data.charAt(i + 2)]);
	                        }
	                        num = sign * num / 10;
	                        if (p % 2) {
	                            x = (num += x);
	                        }
	                        else {
	                            y = (num += y);
	                        }
	                        params[p] = num;
	                        i += charCount;
	                    }
	                    s.addDraw(f, params);
	                }
	            };
	        }
	        /**
	         * 通过一系统参数获取生成颜色或渐变所需要的对象
	         * 一般给用户使用较少,Flash2x工具自动使用
	         * @method getGradientColor
	         * @static
	         * @param {string} colors
	         * @param {number}ratios
	         * @param {annie.Point} points
	         * @returns {any}
	         * @since 1.0.0
	         * @pubic
	         */
	        Shape.getGradientColor = function (colors, ratios, points) {
	            var colorObj;
	            var ctx = annie.DisplayObject["_canvas"].getContext("2d");
	            if (points.length == 4) {
	                colorObj = ctx.createLinearGradient(points[0], points[1], points[2], points[3]);
	            }
	            else {
	                colorObj = ctx.createRadialGradient(points[0], points[1], points[2], points[3], points[4], points[5]);
	            }
	            for (var i = 0, l = colors.length; i < l; i++) {
	                colorObj.addColorStop(ratios[i], colors[i]);
	            }
	            return colorObj;
	        };
	        /**
	         * 设置位图填充时需要使用的方法,一般给用户使用较少,Flash2x工具自动使用
	         * @method getBitmapStyle
	         * @static
	         * @param {Image} image HTML Image元素
	         * @returns {CanvasPattern}
	         * @public
	         * @since 1.0.0
	         */
	        Shape.getBitmapStyle = function (image) {
	            var ctx = annie.DisplayObject["_canvas"].getContext("2d");
	            return ctx.createPattern(image, "repeat");
	        };
	        /**
	         * 通过24位颜色值和一个透明度值生成RGBA值
	         * @method getRGBA
	         * @static
	         * @public
	         * @since 1.0.0
	         * @param {string} color 字符串的颜色值,如:#33ffee
	         * @param {number} alpha 0-1区间的一个数据 0完全透明 1完全不透明
	         * @returns {string}
	         */
	        Shape.getRGBA = function (color, alpha) {
	            if (color.indexOf("0x") == 0) {
	                color = color.replace("0x", "#");
	            }
	            if (color.length < 7) {
	                color = "#000000";
	            }
	            if (alpha != 1) {
	                var r = parseInt("0x" + color.substr(1, 2));
	                var g = parseInt("0x" + color.substr(3, 2));
	                var b = parseInt("0x" + color.substr(5, 2));
	                color = "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
	            }
	            return color;
	        };
	        /**
	         * 添加一条绘画指令,具体可以查阅Html Canvas画图方法
	         * @method addDraw
	         * @param {string} commandName ctx指令的方法名 如moveTo lineTo arcTo等
	         * @param {Array} params
	         * @public
	         * @since 1.0.0
	         */
	        Shape.prototype.addDraw = function (commandName, params) {
	            var s = this;
	            s._isNeedUpdate = true;
	            s._command.push([1, commandName, params]);
	        };
	        /**
	         * 画一个带圆角的矩形
	         * @method drawRoundRect
	         * @param {number} x 点x值
	         * @param {number} y 点y值
	         * @param {number} w 宽
	         * @param {number} h 高
	         * @param {number} rTL 左上圆角半径
	         * @param {number} rTR 右上圆角半径
	         * @param {number} rBL 左下圆角半径
	         * @param {number} rBR 右上圆角半径
	         * @public
	         * @since 1.0.0
	         */
	        Shape.prototype.drawRoundRect = function (x, y, w, h, rTL, rTR, rBL, rBR) {
	            if (rTL === void 0) { rTL = 0; }
	            if (rTR === void 0) { rTR = 0; }
	            if (rBL === void 0) { rBL = 0; }
	            if (rBR === void 0) { rBR = 0; }
	            //var ctx = DisplayObject._canvas.getContext("2d");
	            var max = (w < h ? w : h) / 2;
	            var mTL = 0, mTR = 0, mBR = 0, mBL = 0;
	            if (rTL < 0) {
	                rTL *= (mTL = -1);
	            }
	            if (rTL > max) {
	                rTL = max;
	            }
	            if (rTR < 0) {
	                rTR *= (mTR = -1);
	            }
	            if (rTR > max) {
	                rTR = max;
	            }
	            if (rBR < 0) {
	                rBR *= (mBR = -1);
	            }
	            if (rBR > max) {
	                rBR = max;
	            }
	            if (rBL < 0) {
	                rBL *= (mBL = -1);
	            }
	            if (rBL > max) {
	                rBL = max;
	            }
	            var c = this._command;
	            c.push([1, "moveTo", [x + w - rTR, y]]);
	            c.push([1, "arcTo", [x + w + rTR * mTR, y - rTR * mTR, x + w, y + rTR, rTR]]);
	            c.push([1, "lineTo", [x + w, y + h - rBR]]);
	            c.push([1, "arcTo", [x + w + rBR * mBR, y + h + rBR * mBR, x + w - rBR, y + h, rBR]]);
	            c.push([1, "lineTo", [x + rBL, y + h]]);
	            c.push([1, "arcTo", [x - rBL * mBL, y + h + rBL * mBL, x, y + h - rBL, rBL]]);
	            c.push([1, "lineTo", [x, y + rTL]]);
	            c.push([1, "arcTo", [x - rTL * mTL, y - rTL * mTL, x + rTL, y, rTL]]);
	            c.push([1, "closePath", []]);
	        };
	        /**
	         * 绘画时移动到某一点
	         * @method moveTo
	         * @param {number} x
	         * @param {number} y
	         * @public
	         * @since 1.0.0
	         */
	        Shape.prototype.moveTo = function (x, y) {
	            this._command.push([1, "moveTo", [x, y]]);
	        };
	        /**
	         * 从上一点画到某一点,如果没有设置上一点，则上一占默认为(0,0)
	         * @method lineTo
	         * @param {number} x
	         * @param {number} y
	         * @public
	         * @since 1.0.0
	         */
	        Shape.prototype.lineTo = function (x, y) {
	            this._command.push([1, "lineTo", [x, y]]);
	        };
	        /**
	         * 从上一点画弧到某一点,如果没有设置上一点，则上一占默认为(0,0)
	         * @method arcTo
	         * @param {number} x
	         * @param {number} y
	         * @public
	         * @since 1.0.0
	         */
	        Shape.prototype.arcTo = function (x, y) {
	            this._command.push([1, "arcTo", [x, y]]);
	        };
	        /**
	         * 二次贝赛尔曲线
	         * 从上一点画二次贝赛尔曲线到某一点,如果没有设置上一点，则上一占默认为(0,0)
	         * @method quadraticCurveTo
	         * @param {number} cpX 控制点X
	         * @param {number} cpX 控制点Y
	         * @param {number} x 终点X
	         * @param {number} y 终点Y
	         * @public
	         * @since 1.0.0
	         */
	        Shape.prototype.quadraticCurveTo = function (cpX, cpY, x, y) {
	            this._command.push([1, "quadraticCurveTo", [cpX, cpY, x, y]]);
	        };
	        /**
	         * 三次贝赛尔曲线
	         * 从上一点画二次贝赛尔曲线到某一点,如果没有设置上一点，则上一占默认为(0,0)
	         * @method bezierCurveTo
	         * @param {number} cp1X 1控制点X
	         * @param {number} cp1Y 1控制点Y
	         * @param {number} cp2X 2控制点X
	         * @param {number} cp2Y 2控制点Y
	         * @param {number} x 终点X
	         * @param {number} y 终点Y
	         * @public
	         * @since 1.0.0
	         */
	        Shape.prototype.bezierCurveTo = function (cp1X, cp1Y, cp2X, cp2Y, x, y) {
	            this._command.push([1, "bezierCurveTo", [cp1X, cp1Y, cp2X, cp2Y, x, y]]);
	        };
	        /**
	         * 闭合一个绘画路径
	         * @method closePath
	         * @public
	         * @since 1.0.0
	         */
	        Shape.prototype.closePath = function () {
	            this._command.push([1, "closePath", []]);
	        };
	        /**
	         * 画一个矩形
	         * @method drawRect
	         * @param {number} x
	         * @param {number} y
	         * @param {number} w
	         * @param {number} h
	         * @public
	         * @since 1.0.0
	         */
	        Shape.prototype.drawRect = function (x, y, w, h) {
	            var c = this._command;
	            c.push([1, "moveTo", [x, y]]);
	            c.push([1, "lineTo", [x + w, y]]);
	            c.push([1, "lineTo", [x + w, y + h]]);
	            c.push([1, "lineTo", [x, y + h]]);
	            c.push([1, "closePath", []]);
	        };
	        /**
	         * 画一个弧形
	         * @method drawArc
	         * @param {number} x 起始点x
	         * @param {number} y 起始点y
	         * @param {number} radius 半径
	         * @param {number} start 开始角度
	         * @param {number} end 结束角度
	         * @public
	         * @since 1.0.0
	         */
	        Shape.prototype.drawArc = function (x, y, radius, start, end) {
	            this._command.push([1, "arc", [x, y, radius, start / 180 * Math.PI, end / 180 * Math.PI]]);
	        };
	        /**
	         * 画一个圆
	         * @method drawCircle
	         * @param {number} x 圆心x
	         * @param {number} y 圆心y
	         * @param {number} radius 半径
	         * @public
	         * @since 1.0.0
	         */
	        Shape.prototype.drawCircle = function (x, y, radius) {
	            this._command.push([1, "arc", [x, y, radius, 0, 2 * Math.PI]]);
	        };
	        /**
	         * 画一个椭圆
	         * @method drawEllipse
	         * @param {number} x
	         * @param {number} y
	         * @param {number} w
	         * @param {number} h
	         * @public
	         * @since 1.0.0
	         */
	        Shape.prototype.drawEllipse = function (x, y, w, h) {
	            var k = 0.5522848;
	            var ox = (w / 2) * k;
	            var oy = (h / 2) * k;
	            var xe = x + w;
	            var ye = y + h;
	            var xm = x + w / 2;
	            var ym = y + h / 2;
	            var c = this._command;
	            c.push([1, "moveTo", [x, ym]]);
	            c.push([1, "bezierCurveTo", [x, ym - oy, xm - ox, y, xm, y]]);
	            c.push([1, "bezierCurveTo", [xm + ox, y, xe, ym - oy, xe, ym]]);
	            c.push([1, "bezierCurveTo", [xe, ym + oy, xm + ox, ye, xm, ye]]);
	            c.push([1, "bezierCurveTo", [xm - ox, ye, x, ym + oy, x, ym]]);
	        };
	        /**
	         * 清除掉之前所有绘画的东西
	         * @method clear
	         * @public
	         * @since 1.0.0
	         */
	        Shape.prototype.clear = function () {
	            var s = this;
	            s._command = [];
	            s._isNeedUpdate = true;
	        };
	        /**
	         * 开始绘画填充,如果想画的东西有颜色填充,一定要从此方法开始
	         * @method beginFill
	         * @param {string} color 颜色值 单色和RGBA格式
	         * @public
	         * @since 1.0.0
	         */
	        Shape.prototype.beginFill = function (color) {
	            this._fill(color);
	        };
	        /**
	         * 线性渐变填充 一般给Flash2x用
	         * @method beginLinearGradientFill
	         * @param {Array} colors 一组颜色值
	         * @param {Array} ratios 一组范围比例值
	         * @param {Array} points 一组点
	         * @public
	         * @since 1.0.0
	         */
	        Shape.prototype.beginLinearGradientFill = function (colors, ratios, points) {
	            this._fill(Shape.getGradientColor(colors, ratios, points));
	        };
	        /**
	         * 位图填充 一般给Flash2x用
	         * @method beginBitmapFill
	         * @param {Image} image
	         * @param {annie.Matrix} matrix
	         * @public
	         * @since 1.0.0
	         */
	        Shape.prototype.beginBitmapFill = function (image, matrix) {
	            var s = this;
	            if (matrix) {
	                s._isBitmapFill = matrix;
	            }
	            s._fill(Shape.getBitmapStyle(image));
	        };
	        Shape.prototype._fill = function (fillStyle) {
	            var c = this._command;
	            c.push([0, "fillStyle", fillStyle]);
	            c.push([1, "beginPath", []]);
	            this._isNeedUpdate = true;
	        };
	        /**
	         * 给线条着色
	         * @method beginStroke
	         * @param {string} color
	         * @param {number} lineWidth
	         * @public
	         * @since 1.0.0
	         */
	        Shape.prototype.beginStroke = function (color, lineWidth) {
	            if (lineWidth === void 0) { lineWidth = 1; }
	            this._stroke(color, lineWidth);
	        };
	        /**
	         * 画线性渐变的线条 一般给Flash2x用
	         * @method beginLinearGradientStroke
	         * @param {Array} colors 一组颜色值
	         * @param {Array} ratios 一组范围比例值
	         * @param {Array} points 一组点
	         * @param {number} lineWidth
	         * @public
	         * @since 1.0.0
	         */
	        Shape.prototype.beginLinearGradientStroke = function (colors, ratios, points, lineWidth) {
	            if (lineWidth === void 0) { lineWidth = 1; }
	            this._stroke(Shape.getGradientColor(colors, ratios, points), lineWidth);
	        };
	        /**
	         * 线条位图填充 一般给Flash2x用
	         * @method beginBitmapStroke
	         * @param {Image} image
	         * @param {annie.Matrix} matrix
	         * @param {number} lineWidth
	         * @public
	         * @since 1.0.0
	         */
	        Shape.prototype.beginBitmapStroke = function (image, matrix, lineWidth) {
	            if (lineWidth === void 0) { lineWidth = 1; }
	            var s = this;
	            if (matrix) {
	                s._isBitmapStroke = matrix;
	            }
	            s._stroke(Shape.getBitmapStyle(image), lineWidth);
	        };
	        Shape.prototype._stroke = function (strokeStyle, width) {
	            var c = this._command;
	            c.push([0, "lineWidth", width]);
	            c.push([0, "strokeStyle", strokeStyle]);
	            c.push([1, "beginPath", []]);
	            this._isNeedUpdate = true;
	        };
	        /**
	         * 结束填充
	         * @method endFill
	         * @public
	         * @since 1.0.0
	         */
	        Shape.prototype.endFill = function () {
	            var s = this;
	            var c = s._command;
	            var m = s._isBitmapFill;
	            if (m) {
	                //c.push([1, "save", []]);
	                c.push([2, "setTransform", [m.a, m.b, m.c, m.d, m.tx, m.ty]]);
	            }
	            c.push([1, "fill", []]);
	            if (m) {
	                s._isBitmapFill = null;
	            }
	        };
	        /**
	         * 结束画线
	         * @method endStroke
	         * @public
	         * @since 1.0.0
	         */
	        Shape.prototype.endStroke = function () {
	            var s = this;
	            var c = s._command;
	            var m = s._isBitmapStroke;
	            if (m) {
	                //c.push([1, "save", []]);
	                //如果为2则还需要特别处理
	                c.push([2, "setTransform", [m.a, m.b, m.c, m.d, m.tx, m.ty]]);
	            }
	            c.push([1, "stroke", []]);
	            if (m) {
	                s._isBitmapStroke = null;
	            }
	        };
	        /**
	         * 重写渲染
	         * @method render
	         * @param {annie.IRender} renderObj
	         * @public
	         * @since 1.0.0
	         */
	        Shape.prototype.render = function (renderObj) {
	            var s = this;
	            if (s._cacheImg.src != "") {
	                renderObj.draw(s, 1);
	            }
	            //super.render();
	        };
	        /**
	         * 重写刷新
	         * @method update
	         * @public
	         * @since 1.0.0
	         */
	        Shape.prototype.update = function () {
	            var s = this;
	            _super.prototype.update.call(this);
	            if (s._isNeedUpdate) {
	                //更新缓存
	                var cLen = s._command.length;
	                var leftX;
	                var leftY;
	                var buttonRightX;
	                var buttonRightY;
	                var i;
	                if (cLen > 0) {
	                    //确定是否有数据,如果有数据的话就计算出缓存图的宽和高
	                    var data;
	                    var lastX = 0;
	                    var lastY = 0;
	                    var lineWidth = 0;
	                    for (i = 0; i < cLen; i++) {
	                        data = s._command[i];
	                        if (data[0] == 1) {
	                            if (data[1] == "moveTo" || data[1] == "lineTo" || data[1] == "arcTo" || data[1] == "bezierCurveTo") {
	                                if (leftX == undefined) {
	                                    leftX = data[2][0];
	                                }
	                                if (leftY == undefined) {
	                                    leftY = data[2][1];
	                                }
	                                if (buttonRightX == undefined) {
	                                    buttonRightX = data[2][0];
	                                }
	                                if (buttonRightY == undefined) {
	                                    buttonRightY = data[2][1];
	                                }
	                                if (data[1] == "bezierCurveTo") {
	                                    leftX = Math.min(leftX, data[2][0], data[2][2], data[2][4]);
	                                    leftY = Math.min(leftY, data[2][1], data[2][3], data[2][5]);
	                                    buttonRightX = Math.max(buttonRightX, data[2][0], data[2][2], data[2][4]);
	                                    buttonRightY = Math.max(buttonRightY, data[2][1], data[2][3], data[2][5]);
	                                    lastX = data[2][4];
	                                    lastY = data[2][5];
	                                }
	                                else {
	                                    leftX = Math.min(leftX, data[2][0]);
	                                    leftY = Math.min(leftY, data[2][1]);
	                                    buttonRightX = Math.max(buttonRightX, data[2][0]);
	                                    buttonRightY = Math.max(buttonRightY, data[2][1]);
	                                    lastX = data[2][0];
	                                    lastY = data[2][1];
	                                }
	                            }
	                            else if (data[1] == "quadraticCurveTo") {
	                                //求中点
	                                var mid1X = (lastX + data[2][0]) * 0.5;
	                                var mid1Y = (lastX + data[2][1]) * 0.5;
	                                var mid2X = (data[2][0] + data[2][2]) * 0.5;
	                                var mid2Y = (data[2][1] + data[2][3]) * 0.5;
	                                if (leftX == undefined) {
	                                    leftX = mid1X;
	                                }
	                                if (leftY == undefined) {
	                                    leftY = mid1Y;
	                                }
	                                if (buttonRightX == undefined) {
	                                    buttonRightX = mid1X;
	                                }
	                                if (buttonRightY == undefined) {
	                                    buttonRightY = mid1Y;
	                                }
	                                leftX = Math.min(leftX, mid1X, mid2X, data[2][2]);
	                                leftY = Math.min(leftY, mid1Y, mid2Y, data[2][3]);
	                                buttonRightX = Math.max(buttonRightX, mid1X, mid2X, data[2][2]);
	                                buttonRightY = Math.max(buttonRightY, mid1Y, mid2Y, data[2][3]);
	                                lastX = data[2][2];
	                                lastY = data[2][3];
	                            }
	                            else if (data[1] == "arc") {
	                                var yuanPointX = data[2][0];
	                                var yuanPointY = data[2][1];
	                                var radio = data[2][2];
	                                var yuanLeftX = yuanPointX - radio;
	                                var yuanLeftY = yuanPointY - radio;
	                                var yuanBRX = yuanPointX + radio;
	                                var yuanBRY = yuanPointY + radio;
	                                if (leftX == undefined) {
	                                    leftX = yuanLeftX;
	                                }
	                                if (leftY == undefined) {
	                                    leftY = yuanLeftY;
	                                }
	                                if (buttonRightX == undefined) {
	                                    buttonRightX = yuanBRX;
	                                }
	                                if (buttonRightY == undefined) {
	                                    buttonRightY = yuanBRY;
	                                }
	                                leftX = Math.min(leftX, yuanLeftX);
	                                leftY = Math.min(leftY, yuanLeftY);
	                                buttonRightX = Math.max(buttonRightX, yuanBRX);
	                                buttonRightY = Math.max(buttonRightY, yuanBRY);
	                            }
	                        }
	                        else {
	                            if (data[1] == "lineWidth") {
	                                if (lineWidth < data[2]) {
	                                    lineWidth = data[2];
	                                }
	                            }
	                        }
	                    }
	                    if (leftX != undefined) {
	                        leftX -= 20 + lineWidth >> 1;
	                        leftY -= 20 + lineWidth >> 1;
	                        buttonRightX += 20 + lineWidth >> 1;
	                        buttonRightY += 20 + lineWidth >> 1;
	                        var w = buttonRightX - leftX;
	                        var h = buttonRightY - leftY;
	                        s._cacheX = leftX;
	                        s._cacheY = leftY;
	                        ///////////////////////////
	                        var _canvas = s._cacheImg;
	                        _canvas.width = w;
	                        _canvas.height = h;
	                        _canvas.style.width = w / annie.devicePixelRatio + "px";
	                        _canvas.style.height = h / annie.devicePixelRatio + "px";
	                        var ctx = _canvas["getContext"]('2d');
	                        ctx.clearRect(0, 0, w, h);
	                        ctx.setTransform(1, 0, 0, 1, -leftX, -leftY);
	                        /////////////////////
	                        if (s["cFilters"] && s["cFilters"].length > 0) {
	                            var cf = s.cFilters;
	                            var cfLen = cf.length;
	                            for (var i = 0; i < cfLen; i++) {
	                                if (s.cFilters[i].type == "Shadow") {
	                                    ctx.shadowBlur += cf[i].blur;
	                                    ctx.shadowColor += cf[i].color;
	                                    ctx.shadowOffsetX += cf[i].offsetX;
	                                    ctx.shadowOffsetY += cf[i].offsetY;
	                                    break;
	                                }
	                            }
	                        }
	                        else {
	                            ctx.shadowBlur = 0;
	                            ctx.shadowColor = "#0";
	                            ctx.shadowOffsetX = 0;
	                            ctx.shadowOffsetY = 0;
	                        }
	                        ////////////////////
	                        var data;
	                        for (i = 0; i < cLen; i++) {
	                            data = s._command[i];
	                            if (data[0] > 0) {
	                                var paramsLen = data[2].length;
	                                if (paramsLen == 0) {
	                                    ctx[data[1]]();
	                                }
	                                else if (paramsLen == 2) {
	                                    ctx[data[1]](data[2][0], data[2][1]);
	                                }
	                                else if (paramsLen == 4) {
	                                    ctx[data[1]](data[2][0], data[2][1], data[2][2], data[2][3]);
	                                }
	                                else if (paramsLen == 5) {
	                                    ctx[data[1]](data[2][0], data[2][1], data[2][2], data[2][3], data[2][4]);
	                                }
	                                else if (paramsLen == 6) {
	                                    if (data[0] == 2) {
	                                        //位图填充
	                                        data[2][4] -= leftX;
	                                        data[2][5] -= leftY;
	                                    }
	                                    ctx[data[1]](data[2][0], data[2][1], data[2][2], data[2][3], data[2][4], data[2][5]);
	                                }
	                            }
	                            else {
	                                ctx[data[1]] = data[2];
	                            }
	                        }
	                        ///////////////////////////
	                        //滤镜
	                        if (s["cFilters"] && s["cFilters"].length > 0) {
	                            var len = s["cFilters"].length;
	                            var imageData = ctx.getImageData(0, 0, w, h);
	                            for (var i = 0; i < len; i++) {
	                                var f = s["cFilters"][i];
	                                f.drawFilter(imageData);
	                            }
	                            ctx.putImageData(imageData, 0, 0);
	                        }
	                    }
	                    else {
	                        s._cacheImg.width = 0;
	                        s._cacheImg.height = 0;
	                        s._cacheX = 0;
	                        s._cacheY = 0;
	                    }
	                }
	                else {
	                    s._cacheImg.width = 0;
	                    s._cacheImg.height = 0;
	                    s._cacheX = 0;
	                    s._cacheY = 0;
	                }
	                s._isNeedUpdate = false;
	                annie.WGRender.setDisplayInfo(s, 1);
	            }
	        };
	        /*private _drawPath(){
	            var s=this;
	            var leftX:number=s._cacheX,leftY:number=s._cacheY,w:number=s._cacheW,h:number=s._cacheH;
	            var _canvas = DisplayObject._canvas;
	            _canvas.width = w;
	            _canvas.height = h;
	            var ctx = _canvas["getContext"]('2d');
	            ctx.setTransform(1, 0, 0, 1, -leftX, -leftY);
	            ctx.clearRect(leftX, leftY, w + 1, h + 1);
	            var data;
	            var cLen:number=s._command.length;
	            for (var i = 0; i < cLen; i++) {
	                data = s._command[i];
	                if (data[0]>0) {
	                    var paramsLen = data[2].length;
	                    if (paramsLen == 0) {
	                        ctx[data[1]]();
	                    } else if (paramsLen == 2) {
	                        ctx[data[1]](data[2][0], data[2][1]);
	                    } else if (paramsLen == 4) {
	                        ctx[data[1]](data[2][0], data[2][1], data[2][2], data[2][3]);
	                    }else if(paramsLen==5){
	                        ctx[data[1]](data[2][0], data[2][1], data[2][2], data[2][3], data[2][4]);
	                    }else if(paramsLen==6){
	                        if(data[0]==2){
	                            //位图填充
	                            data[2][4]-=leftX;
	                            data[2][5]-=leftY;
	                        }
	                        ctx[data[1]](data[2][0], data[2][1], data[2][2], data[2][3], data[2][4], data[2][5]);
	                    }
	                }else {
	                    ctx[data[1]] = data[2];
	                }
	            }
	        }*/
	        /**
	         * 重写getBounds
	         * @method getBounds
	         * @public
	         * @since 1.0.0
	         * @returns {annie.Rectangle}
	         */
	        Shape.prototype.getBounds = function () {
	            var s = this;
	            var r = new annie.Rectangle();
	            if (s._cacheImg) {
	                r.x = s._cacheX + 20;
	                r.y = s._cacheY + 20;
	                r.width = s._cacheImg.width - 20;
	                r.height = s._cacheImg.height - 20;
	            }
	            return r;
	        };
	        /**
	         * 重写hitTestPoint
	         * @method  hitTestPoint
	         * @param {annie.Point} globalPoint
	         * @param {boolean} isMouseEvent
	         * @returns {any}
	         * @public
	         * @since 1.0.0
	         */
	        Shape.prototype.hitTestPoint = function (globalPoint, isMouseEvent) {
	            if (isMouseEvent === void 0) { isMouseEvent = false; }
	            var s = this;
	            if (isMouseEvent && !s.mouseEnable)
	                return null;
	            //如果都不在缓存范围内,那就更不在矢量范围内了;如果在则继续看
	            var p = s.globalToLocal(globalPoint, annie.DisplayObject._bp);
	            if (s.getBounds().isPointIn(p)) {
	                if (!s.hitPixel) {
	                    return s;
	                }
	                //继续检测
	                var _canvas = annie.DisplayObject["_canvas"];
	                _canvas.width = 1;
	                _canvas.height = 1;
	                var ctx = _canvas["getContext"]('2d');
	                ctx.clearRect(0, 0, 1, 1);
	                ctx.setTransform(1, 0, 0, 1, s._cacheX - p.x, s._cacheY - p.y);
	                ctx.drawImage(s._cacheImg, 0, 0);
	                if (ctx.getImageData(0, 0, 1, 1).data[3] > 0) {
	                    return s;
	                }
	                ;
	            }
	            return null;
	        };
	        /**
	         * 如果有的话,改变矢量对象的边框或者填充的颜色.
	         * @method changeColor
	         * @param {Object} infoObj
	         * @param {string} infoObj.fillColor 填充颜色值，如"#fff" 或者 "rgba(255,255,255,1)";
	         * @param {string} infoObj.strokeColor 线条颜色值，如"#fff" 或者 "rgba(255,255,255,1)";
	         * @param {number} infoObj.lineWidth 线条的粗细，如"1,2,3...";
	         * @public
	         * @since 1.0.2
	         */
	        Shape.prototype.changeColor = function (infoObj) {
	            var s = this;
	            var cLen = s._command.length;
	            var c = s._command;
	            for (var i = 0; i < cLen; i++) {
	                if (c[i][0] == 0) {
	                    if (c[i][1] == "fillStyle" && infoObj.fillColor && c[i][2] != infoObj.fillColor) {
	                        c[i][2] = infoObj.fillColor;
	                        s._isNeedUpdate = true;
	                    }
	                    if (c[i][1] == "strokeStyle" && infoObj.strokeColor && c[i][2] != infoObj.strokeColor) {
	                        c[i][2] = infoObj.strokeColor;
	                        s._isNeedUpdate = true;
	                    }
	                    if (c[i][1] == "lineWidth" && infoObj.lineWidth && c[i][2] != infoObj.lineWidth) {
	                        c[i][2] = infoObj.lineWidth;
	                        s._isNeedUpdate = true;
	                    }
	                }
	            }
	        };
	        Shape.BASE_64 = {
	            "A": 0,
	            "B": 1,
	            "C": 2,
	            "D": 3,
	            "E": 4,
	            "F": 5,
	            "G": 6,
	            "H": 7,
	            "I": 8,
	            "J": 9,
	            "K": 10,
	            "L": 11,
	            "M": 12,
	            "N": 13,
	            "O": 14,
	            "P": 15,
	            "Q": 16,
	            "R": 17,
	            "S": 18,
	            "T": 19,
	            "U": 20,
	            "V": 21,
	            "W": 22,
	            "X": 23,
	            "Y": 24,
	            "Z": 25,
	            "a": 26,
	            "b": 27,
	            "c": 28,
	            "d": 29,
	            "e": 30,
	            "f": 31,
	            "g": 32,
	            "h": 33,
	            "i": 34,
	            "j": 35,
	            "k": 36,
	            "l": 37,
	            "m": 38,
	            "n": 39,
	            "o": 40,
	            "p": 41,
	            "q": 42,
	            "r": 43,
	            "s": 44,
	            "t": 45,
	            "u": 46,
	            "v": 47,
	            "w": 48,
	            "x": 49,
	            "y": 50,
	            "z": 51,
	            "0": 52,
	            "1": 53,
	            "2": 54,
	            "3": 55,
	            "4": 56,
	            "5": 57,
	            "6": 58,
	            "7": 59,
	            "8": 60,
	            "9": 61,
	            "+": 62,
	            "/": 63
	        };
	        return Shape;
	    }(annie.DisplayObject));
	    annie.Shape = Shape;
	})(annie || (annie = {}));
	/**
	 * @module annie
	 */
	var annie;
	(function (annie) {
	    /**
	     * 显示对象的容器类,可以将其他显示对象放入其中,是annie引擎的核心容器类.
	     * Sprite 类是基本显示列表构造块：一个可显示图形并且也可包含子项的显示列表节点。
	     * Sprite 对象与影片剪辑类似，但没有时间轴。Sprite 是不需要时间轴的对象的相应基类。
	     * 例如，Sprite 将是通常不使用时间轴的用户界面 (UI) 组件的逻辑基类
	     * @class annie.Sprite
	     * @extends annie.DisplayObject
	     * @public
	     * @since 1.0.0
	     */
	    var Sprite = (function (_super) {
	        __extends(Sprite, _super);
	        function Sprite() {
	            _super.call(this);
	            /**
	             * 是否可以让children接收鼠标事件
	             * @property mouseChildren
	             * @type {boolean}
	             * @default true
	             * @public
	             * @since 1.0.0
	             */
	            this.mouseChildren = true;
	            /**
	             * 显示对象的child列表
	             * @property children
	             * @type {Array}
	             * @public
	             * @since 1.0.0
	             * @default []
	             * @readonly
	             */
	            this.children = [];
	        }
	        /**
	         * 添加一个显示对象到Sprite
	         * @method addChild
	         * @param {annie.DisplayObject} child
	         * @public
	         * @since 1.0.0
	         */
	        Sprite.prototype.addChild = function (child) {
	            this.addChildAt(child, this.children.length);
	        };
	        /**
	         * 从Sprite中移除一个child
	         * @method removeChild
	         * @public
	         * @since 1.0.0
	         * @param {annie.DisplayObject} child
	         */
	        Sprite.prototype.removeChild = function (child) {
	            var s = this;
	            var len = s.children.length;
	            for (var i = 0; i < len; i++) {
	                if (s.children[i] == child) {
	                    s.removeChildAt(i);
	                    break;
	                }
	            }
	        };
	        //全局遍历
	        Sprite._getElementsByName = function (rex, root, isOnlyOne, isRecursive, resultList) {
	            var len = root.children.length;
	            if (len > 0) {
	                var name;
	                var child;
	                for (var i = 0; i < len; i++) {
	                    child = root.children[i];
	                    name = child.name;
	                    if (name && name != "") {
	                        if (rex.test(name)) {
	                            resultList.push(child);
	                            if (isOnlyOne) {
	                                return;
	                            }
	                        }
	                    }
	                    if (isRecursive) {
	                        if (child["children"] != null) {
	                            Sprite._getElementsByName(rex, child, isOnlyOne, isRecursive, resultList);
	                        }
	                    }
	                }
	            }
	        };
	        /**
	         * 通过给displayObject设置的名字来获取一个child,可以使用正则匹配查找
	         * @method getChildByName
	         * @param {string} name 对象的具体名字或是一个正则表达式
	         * @param {boolean} isOnlyOne 默认为true,如果为true,只返回最先找到的对象,如果为false则会找到所有匹配的对象数组
	         * @param {boolean} isRecursive false,如果为true,则会递归查找下去,而不只是查找当前对象中的child,child里的child也会找,依此类推
	         * @returns {any} 返回一个对象,或者一个对象数组,没有找到则返回空
	         * @public
	         * @since 1.0.0
	         */
	        Sprite.prototype.getChildByName = function (name, isOnlyOne, isRecursive) {
	            if (isOnlyOne === void 0) { isOnlyOne = true; }
	            if (isRecursive === void 0) { isRecursive = false; }
	            if (!name)
	                return null;
	            var s = this;
	            var rex;
	            if (typeof (name) == "string") {
	                rex = new RegExp("^" + name + "$");
	            }
	            else {
	                rex = name;
	            }
	            var elements = [];
	            Sprite._getElementsByName(rex, s, isOnlyOne, isRecursive, elements);
	            var len = elements.length;
	            if (len == 0) {
	                return null;
	            }
	            else if (len == 1) {
	                return elements[0];
	            }
	            else {
	                return elements;
	            }
	        };
	        /**
	         * 添加一个child到Sprite中并指定添加到哪个层级
	         * @method addChildAt
	         * @param {annie.DisplayObject} child
	         * @param {number} index 从0开始
	         * @pubic
	         * @since 1.0.0
	         */
	        Sprite.prototype.addChildAt = function (child, index) {
	            var s = this;
	            var sameParent = s == child.parent;
	            var len;
	            if (child.parent) {
	                if (!sameParent) {
	                    child.parent.removeChild(child);
	                }
	                else {
	                    len = s.children.length;
	                    for (var i = 0; i < len; i++) {
	                        if (s.children[i] == child) {
	                            s.children.splice(i, 1);
	                            break;
	                        }
	                    }
	                }
	            }
	            child.parent = s;
	            len = s.children.length;
	            if (index >= len) {
	                s.children.push(child);
	            }
	            else if (index == 0) {
	                s.children.unshift(child);
	            }
	            else {
	                s.children.splice(index, 0, child);
	            }
	            if (s.stage && !sameParent) {
	                child._onDispatchBubbledEvent("onAddToStage");
	            }
	        };
	        /**
	         * 获取Sprite中指定层级一个child
	         * @method getChildAt
	         * @param {number} index 从0开始
	         * @pubic
	         * @since 1.0.0
	         * @return {annie.DisplayObject}
	         */
	        Sprite.prototype.getChildAt = function (index) {
	            if ((this.children.length - 1) >= index) {
	                return this.children[index];
	            }
	            else {
	                return null;
	            }
	        };
	        /**
	         * 获取Sprite中一个child所在的层级索引，找到则返回索引数，未找到则返回-1
	         * @method getChildIndex
	         * @param {annie.DisplayObject} child 子对象
	         * @pubic
	         * @since 1.0.2
	         * @return {number}
	         */
	        Sprite.prototype.getChildIndex = function (child) {
	            var len = this.children.length;
	            for (var i = 0; i < len; i++) {
	                if (this.children[i] == child) {
	                    return i;
	                }
	            }
	            return -1;
	        };
	        /**
	         * 调用此方法对Sprite及其child触发一次指定事件
	         * @method _onDispatchBubbledEvent
	         * @private
	         * @param {string} type
	         * @since 1.0.0
	         */
	        Sprite.prototype._onDispatchBubbledEvent = function (type) {
	            var s = this;
	            var len = s.children.length;
	            s.stage = s.parent.stage;
	            for (var i = 0; i < len; i++) {
	                s.children[i]._onDispatchBubbledEvent(type);
	            }
	            _super.prototype._onDispatchBubbledEvent.call(this, type);
	        };
	        /**
	         * 移除指定层级上的孩子
	         * @method removeChildAt
	         * @param {number} index 从0开始
	         * @public
	         * @since 1.0.0
	         */
	        Sprite.prototype.removeChildAt = function (index) {
	            var s = this;
	            var child;
	            var len = s.children.length;
	            if (len == 0)
	                return;
	            if (index == len) {
	                child = s.children.pop();
	            }
	            else if (index == 0) {
	                child = s.children.shift();
	            }
	            else {
	                child = s.children.splice(index, 1)[0];
	            }
	            child._onDispatchBubbledEvent("onRemoveToStage");
	            child.parent = null;
	        };
	        /**
	         * 移除Sprite上的所有child
	         * @method removeAllChildren
	         * @public
	         * @since 1.0.0
	         */
	        Sprite.prototype.removeAllChildren = function () {
	            var s = this;
	            var len = s.children.length;
	            for (var i = len - 1; i >= 0; i--) {
	                s.removeChildAt(i);
	            }
	        };
	        /**
	         * 重写刷新
	         * @method update
	         * @public
	         * @since 1.0.0
	         */
	        Sprite.prototype.update = function () {
	            var s = this;
	            _super.prototype.update.call(this);
	            var len = s.children.length;
	            var child;
	            for (var i = len - 1; i >= 0; i--) {
	                child = s.children[i];
	                //因为悬浮的html元素要时时更新来检查他的visible属性
	                child.update();
	            }
	        };
	        /**
	         * 重写碰撞测试
	         * @method hitTestPoint
	         * @param {annie.Point} globalPoint
	         * @param {boolean} isMouseEvent
	         * @returns {any}
	         * @public
	         * @since 1.0.0
	         */
	        Sprite.prototype.hitTestPoint = function (globalPoint, isMouseEvent) {
	            if (isMouseEvent === void 0) { isMouseEvent = false; }
	            var s = this;
	            if (!s.visible)
	                return null;
	            if (isMouseEvent && !s.mouseEnable)
	                return null;
	            var len = s.children.length;
	            var hitDisplayObject;
	            var child;
	            //这里特别注意是从上往下遍历
	            for (var i = len - 1; i >= 0; i--) {
	                //TODO 这里要考虑遮罩
	                child = s.children[i];
	                if (child.mask) {
	                    //看看点是否在遮罩内
	                    if (!child.mask.hitTestPoint(globalPoint, isMouseEvent)) {
	                        //如果都不在遮罩里面,那还检测什么直接检测下一个
	                        continue;
	                    }
	                }
	                hitDisplayObject = child.hitTestPoint(globalPoint, isMouseEvent);
	                if (hitDisplayObject) {
	                    return hitDisplayObject;
	                }
	            }
	            return null;
	        };
	        /**
	         * 重写getBounds
	         * @method getBounds
	         * @returns {any}
	         * @since 1.0.0
	         * @public
	         */
	        Sprite.prototype.getBounds = function () {
	            var s = this;
	            var len = s.children.length;
	            if (len == 0) {
	                return null;
	            }
	            var rect = s.children[0].getDrawRect();
	            for (var i = 1; i < len; i++) {
	                rect = annie.Rectangle.createFromRects(rect, s.children[i].getDrawRect());
	            }
	            return rect;
	        };
	        /**
	         * 重写渲染
	         * @method render
	         * @param {annie.IRender} renderObj
	         * @public
	         * @since 1.0.0
	         */
	        Sprite.prototype.render = function (renderObj) {
	            var s = this;
	            var maskObj;
	            var maskObjIds = [];
	            var child;
	            var len = s.children.length;
	            for (var i = 0; i < len; i++) {
	                child = s.children[i];
	                if (child.cAlpha > 0 && child.visible) {
	                    if (maskObj) {
	                        if (child.mask) {
	                            if (child.mask != maskObj) {
	                                renderObj.endMask();
	                                maskObj = child.mask;
	                                var mId = maskObj.getInstanceId();
	                                //就是检测遮罩是否被更新过。因为动画遮罩反复更新的话他会播放同一次渲染要确定只能更新一回。
	                                if (maskObjIds.indexOf(mId) < 0) {
	                                    maskObj.parent = s;
	                                    maskObj.stage = s.stage;
	                                    if (s.totalFrames && maskObj.totalFrames) {
	                                        maskObj.gotoAndStop(s.currentFrame);
	                                    }
	                                    maskObj.update();
	                                    maskObjIds.push(mId);
	                                }
	                                renderObj.beginMask(maskObj);
	                            }
	                        }
	                        else {
	                            renderObj.endMask();
	                            maskObj = null;
	                        }
	                    }
	                    else {
	                        if (child.mask) {
	                            maskObj = child.mask;
	                            var mId = maskObj.getInstanceId();
	                            if (maskObjIds.indexOf(mId) < 0) {
	                                maskObj.parent = s;
	                                maskObj.stage = s.stage;
	                                if (s.totalFrames && maskObj.totalFrames) {
	                                    maskObj.gotoAndStop(s.currentFrame);
	                                }
	                                maskObj.update();
	                                maskObjIds.push(mId);
	                            }
	                            renderObj.beginMask(maskObj);
	                        }
	                    }
	                    child.render(renderObj);
	                }
	            }
	            if (maskObj) {
	                renderObj.endMask();
	            }
	        };
	        return Sprite;
	    }(annie.DisplayObject));
	    annie.Sprite = Sprite;
	})(annie || (annie = {}));
	/**
	 * @module annie
	 */
	var annie;
	(function (annie) {
	    /**
	     * 抽象类 一般不直接使用
	     * @class annie.Media
	     * @extends annie.AObject
	     * @public
	     * @since 1.0.0
	     */
	    var Media = (function (_super) {
	        __extends(Media, _super);
	        /**
	         * 构造函数
	         * @method Media
	         * @param {string|HtmlElement} src
	         * @param {string} type
	         * @since 1.0.0
	         */
	        function Media(src, type) {
	            _super.call(this);
	            /**
	             * html 标签 有可能是audio 或者 video
	             * @property media
	             * @type {Video|Audio}
	             * @public
	             * @since 1.0.0
	             */
	            this.media = null;
	            /**
	             * 媒体类型 VIDEO 或者 AUDIO
	             * @type {string}
	             * @since 1.0.0
	             * @since 1.0.0
	             */
	            this.type = "";
	            this._loop = 0;
	            var s = this;
	            if (typeof (src) == "string") {
	                s.media = document.createElement(type);
	                s.media.src = src;
	            }
	            else {
	                s.media = src;
	            }
	            s._SBWeixin = s._weixinSB.bind(s);
	            s.media.addEventListener('ended', function () {
	                s._loop--;
	                if (s._loop > 0) {
	                    s.play(0, s._loop);
	                }
	                else {
	                    s.media.pause();
	                }
	                s.dispatchEvent("onPlayEnd");
	            }.bind(s), false);
	            s.type = type.toLocaleUpperCase();
	            s.media.addEventListener("timeupdate", function () {
	                s.dispatchEvent("onPlayUpdate", { currentTime: s.media.currentTime });
	            }, false);
	        }
	        /**
	         * 开始播放媒体
	         * @method play
	         * @param {number} start 开始点 默认为0
	         * @param {number} loop 循环次数
	         * @public
	         * @since 1.0.0
	         */
	        Media.prototype.play = function (start, loop) {
	            var s = this;
	            s._loop = loop;
	            //TODO 好像设置了也没什么用，后期再看看
	            try {
	                s.media.currentTime = start;
	            }
	            catch (e) {
	                trace(e);
	            }
	            //马蛋的有些ios微信无法自动播放,需要做一些特殊处理
	            try {
	                WeixinJSBridge.invoke("getNetworkType", {}, s._SBWeixin);
	            }
	            catch (e) {
	                s.media.play();
	            }
	        };
	        Media.prototype._weixinSB = function () {
	            this.media.play();
	        };
	        /**
	         * 停止播放
	         * @method stop
	         * @public
	         * @since 1.0.0
	         */
	        Media.prototype.stop = function () {
	            this.media.pause();
	            this.media.currentTime = 0;
	        };
	        /**
	         * 暂停播放
	         * @method pause
	         * @public
	         * @since 1.0.0
	         */
	        Media.prototype.pause = function () {
	            this.media.pause();
	        };
	        return Media;
	    }(annie.EventDispatcher));
	    annie.Media = Media;
	})(annie || (annie = {}));
	/**
	 * @module annie
	 */
	var annie;
	(function (annie) {
	    /**
	     * 声音类
	     * @class annie.Sound
	     * @extends annie.Media
	     * @public
	     * @since 1.0.0
	     */
	    var Sound = (function (_super) {
	        __extends(Sound, _super);
	        function Sound(src) {
	            _super.call(this, src, "Audio");
	        }
	        return Sound;
	    }(annie.Media));
	    annie.Sound = Sound;
	})(annie || (annie = {}));
	/**
	 * @module annie
	 */
	var annie;
	(function (annie) {
	    /**
	     * 视频类
	     * @class annie.Video
	     * @extends annie.Media
	     * @public
	     * @since 1.0.0
	     */
	    var Video = (function (_super) {
	        __extends(Video, _super);
	        function Video(src, width, height) {
	            _super.call(this, src, "Video");
	            var s = this;
	            s.media.setAttribute("webkit-playsinline", "true");
	            s.media.setAttribute("x-webkit-airplay", "true");
	            s.media.width = width;
	            s.media.height = height;
	        }
	        return Video;
	    }(annie.Media));
	    annie.Video = Video;
	})(annie || (annie = {}));
	/**
	 * Created by anlun on 16/8/8.
	 */
	/**
	 * @module annie
	 */
	var annie;
	(function (annie) {
	    /**
	     * 将img序列的内容画到canvas里
	     * @class annie.ImageFrames
	     * @extends annie.Bitmap
	     * @public
	     * @since 1.0.0
	     */
	    var ImageFrames = (function (_super) {
	        __extends(ImageFrames, _super);
	        /**
	         * 被始化一个序列图视频
	         * @method ImageFrames 构架函数
	         * @param src
	         * @param width
	         * @param height
	         * @since 1.0.0
	         */
	        function ImageFrames(src, width, height) {
	            _super.call(this);
	            /**
	             * img文件所在的文件夹路径
	             * @property src
	             * @type {string}
	             * @public
	             * @since 1.0.0
	             */
	            this.src = "";
	            this._lastSrc = "";
	            /**
	             * 当前播放到序列的哪一帧
	             * @property currentFrame
	             * @public
	             * @since 1.0.0
	             * @type{number}
	             * @default 0
	             */
	            this.currentFrame = 0;
	            /**
	             * 当前播放的序列所在的spriteSheet大图引用
	             * @property currentBitmap
	             * @since 1.0.0
	             * @public
	             * @default null
	             * @type {number}
	             */
	            this.currentBitmap = null;
	            /**
	             * 序列的总帧数
	             * @property totalsFrame
	             * @since 1.0.0
	             * @public
	             * @type{number}
	             * @default 1;
	             */
	            this.totalsFrame = 1;
	            /**
	             * 当前帧所在的spriteSheet里的位置区域
	             * @property rect
	             * @public
	             * @since 1.0.0
	             * @type {annie.Rectangle}
	             */
	            this.rect = null;
	            /**
	             * 是否循环播放
	             * @property loop
	             * @public
	             * @since 1.0.0
	             * @type {boolean}
	             */
	            this.loop = false;
	            this._isLoaded = false;
	            /**
	             * 是否能播放状态
	             * @type {boolean}
	             */
	            this.canPlay = false;
	            /**
	             * 是否在播放中
	             * @property isPlaying
	             * @type {boolean}
	             * @public
	             * @since 1.0.0
	             */
	            this.isPlaying = true;
	            /**
	             * 是否在自动播放
	             * @property autoplay
	             * @type {boolean}
	             * @public
	             * @since 1.0.0
	             */
	            this.autoplay = false;
	            var s = this;
	            s.src = src;
	            s.rect = new annie.Rectangle(0, 0, width, height);
	            s.list = [];
	            s._urlLoader = new annie.URLLoader();
	            s._urlLoader.addEventListener(annie.Event.COMPLETE, s.success.bind(s));
	        }
	        /**
	         * 资源加载成功
	         * @private
	         * @since 1.0.0
	         * @param e
	         */
	        ImageFrames.prototype.success = function (e) {
	            var s = this;
	            if (e.data.type == "json") {
	                //加载到了配置文件
	                s._configInfo = {};
	                for (var item in e.data.response) {
	                    s._configInfo[item] = e.data.response[item];
	                }
	                s._startTime = Date.now();
	                s._urlLoader.responseType = "image";
	                s.loadImage();
	            }
	            else {
	                //加载到了图片
	                s.list.push(e.data.response);
	                s._currentLoadIndex = s.list.length;
	                if (s._currentLoadIndex == s._configInfo.totalsPage) {
	                    //加载结束,抛出结束事件
	                    if (!s.canPlay) {
	                        s.canPlay = true;
	                    }
	                    s._isLoaded = true;
	                    s.dispatchEvent("onload");
	                }
	                else {
	                    s.loadImage();
	                    var bufferFrame = s._currentLoadIndex * s._configInfo.pageCount;
	                    if (bufferFrame >= 30) {
	                        if (bufferFrame == 30) {
	                            //判断网速
	                            var _endTime = Date.now();
	                            var time = _endTime - s._startTime;
	                            if (time < 500) {
	                                s._needBufferFrame = 30;
	                            }
	                            else if (time < 1000) {
	                                s._needBufferFrame = 60;
	                            }
	                            else if (time < 1500) {
	                                s._needBufferFrame = 90;
	                            }
	                            else if (time < 2000) {
	                                s._needBufferFrame = 120;
	                            }
	                            else if (time < 2500) {
	                                s._needBufferFrame = 150;
	                            }
	                            else {
	                                s._needBufferFrame = 180;
	                            }
	                        }
	                        if (bufferFrame >= s._needBufferFrame && !s.canPlay) {
	                            s.canPlay = true;
	                            s.dispatchEvent("oncanplay");
	                        }
	                    }
	                }
	            }
	        };
	        /**
	         * 如果需要单独使用ImageFrames的话,你需要时间调用update来刷新视频的播放进度,使用VideoPlayer的类将无需考虑
	         * @method update
	         * @since 1.0.0
	         * @public
	         */
	        ImageFrames.prototype.update = function () {
	            var s = this;
	            if (s.canPlay && s.autoplay) {
	                if (s.currentFrame == s._configInfo.totalsFrame) {
	                    //播放结束事件
	                    s.currentFrame = 0;
	                    if (!s.loop) {
	                        s.autoplay = false;
	                        s.isPlaying = false;
	                    }
	                    s.dispatchEvent("onPlayEnd");
	                }
	                else {
	                    if (s.currentFrame < (s._currentLoadIndex * s._configInfo.pageCount - 1) || s._isLoaded) {
	                        //////////////////////////////渲染//////////////////////////////////
	                        var pageIndex = Math.floor(s.currentFrame / s._configInfo.pageCount);
	                        var rowIndex = s.currentFrame % s._configInfo.pageCount;
	                        var x = Math.floor(rowIndex / s._configInfo.rowCount);
	                        var y = rowIndex % s._configInfo.rowCount;
	                        s.rect.x = y * (s._configInfo.dis + s._configInfo.width) + s._configInfo.dis;
	                        s.rect.y = x * (s._configInfo.dis + s._configInfo.height) + s._configInfo.dis;
	                        s.rect.width = s._configInfo.width;
	                        s.rect.height = s._configInfo.height;
	                        s.currentBitmap = s.list[pageIndex];
	                        s.currentFrame++;
	                        if (!s.isPlaying) {
	                            s.isPlaying = true;
	                        }
	                    }
	                    else {
	                        s.canPlay = false;
	                        s.isPlaying = false;
	                    }
	                }
	                s.dispatchEvent("onPlayUpdate", { currentTime: s._currentLoadIndex });
	            }
	            s.checkChange();
	        };
	        ImageFrames.prototype.checkChange = function () {
	            var s = this;
	            if (s._lastSrc != s.src) {
	                //开始初始化
	                if (s.src != "") {
	                    //加载配置文件
	                    s._urlLoader.responseType = "json";
	                    s._urlLoader.load(s.src + "/config.json");
	                    s.canPlay = false;
	                    s._currentLoadIndex = 0;
	                    s.currentFrame = 0;
	                    s._needBufferFrame = 1000;
	                    s._isLoaded = false;
	                    s._lastSrc = s.src;
	                }
	                else {
	                    s.clear();
	                }
	            }
	        };
	        ImageFrames.prototype.loadImage = function () {
	            var s = this;
	            s._urlLoader.load(s.src + "/" + s._configInfo.name + s._currentLoadIndex + s._configInfo.type);
	        };
	        /**
	         * 播放视频,如果autoplay为true则会加载好后自动播放
	         * @method play
	         * @public
	         * @since 1.0.0
	         */
	        ImageFrames.prototype.play = function () {
	            this.autoplay = true;
	        };
	        /**
	         * 停止播放,如果需要继续播放请再次调用play()方法
	         * @method pause
	         * @public
	         * @since 1.0.0
	         */
	        ImageFrames.prototype.pause = function () {
	            this.autoplay = false;
	        };
	        /**
	         *如果播放了视频后不已不再需要的话,这个时候可以调用这个方法进行资源清理,以方便垃圾回收。
	         * 调用此方法后,此对象一样可以再次设置src重新使用。或者直接进行src的更换,系统会自动调用此方法以清除先前的序列在内存的资源
	         * @method clear
	         * @public
	         * @since 1.0.0
	         */
	        ImageFrames.prototype.clear = function () {
	            var s = this;
	            s._urlLoader.loadCancel();
	            s.list = [];
	            s.src = "";
	            s._lastSrc = "";
	        };
	        return ImageFrames;
	    }(annie.EventDispatcher));
	    annie.ImageFrames = ImageFrames;
	})(annie || (annie = {}));
	/**
	 * @module annie
	 */
	var annie;
	(function (annie) {
	    var McFrame = (function () {
	        function McFrame() {
	            var s = this;
	            s.frameChildList = new Array();
	            s.keyIndex = 0;
	            s.eventName = "";
	            s.soundName = "";
	            s.soundScene = "";
	            s.soundTimes = 1;
	        }
	        McFrame.prototype.setDisplayInfo = function (display, displayBaseInfo, displayExtendInfo) {
	            if (displayBaseInfo === void 0) { displayBaseInfo = null; }
	            if (displayExtendInfo === void 0) { displayExtendInfo = null; }
	            var s = this;
	            var info = {
	                display: display,
	                x: 0,
	                y: 0,
	                scaleX: 1,
	                scaleY: 1,
	                rotation: 0,
	                skewX: 0,
	                skewY: 0,
	                alpha: 1
	            };
	            annie.RESManager.d(info, displayBaseInfo, displayExtendInfo);
	            s.frameChildList.push(info);
	        };
	        McFrame.prototype.setGraphicInfo = function (loopType, firstFrame, parentFrameIndex) {
	            var s = this;
	            var lastIndex = s.frameChildList.length - 1;
	            s.frameChildList[lastIndex].graphicInfo = {
	                loopType: loopType,
	                firstFrame: firstFrame,
	                parentFrameIndex: parentFrameIndex
	            };
	        };
	        return McFrame;
	    }());
	    /**
	     * annie引擎核心类
	     * @class annie.MovieClip
	     * @since 1.0.0
	     * @public
	     * @extends annie.Sprite
	     */
	    var MovieClip = (function (_super) {
	        __extends(MovieClip, _super);
	        //private _isOnStage:boolean=false;
	        function MovieClip() {
	            _super.call(this);
	            /**
	             * 时间轴 一般给Flash2x工具使用
	             * @property _timeline
	             * @private
	             * @since 1.0.0
	             * @type {Array}
	             */
	            this._timeline = [];
	            /**
	             * 有些时候我们需要在一个时间轴动画类中添加子元素
	             * 在默认情况下，MovieClip只有在停止播放的情况下
	             * 使用addChild等方法添加到mc中的子级对象是可见的
	             * 为了能够在动画播放期间的任意时刻都能使添加的对象可见
	             * 我们给MovieClip添加了一个特殊的子级容器对象，你只需要将你的显示
	             * 对象添加到这个特殊的容器对象中，就能在整个动画期间，被添加的显示对象都可见
	             * 此container容器会一直在mc的最上层
	             * @since 1.0.2
	             * @public
	             * @property container
	             * @type {annie.Sprite}
	             */
	            this.container = new annie.Sprite();
	            /**
	             * mc的当前帧
	             * @property currentFrame
	             * @public
	             * @since 1.0.0
	             * @type {number}
	             * @default 1
	             * @readonly
	             */
	            this.currentFrame = 1;
	            /**
	             * 当前动画是否处于播放状态
	             * @property isPlaying
	             * @readOnly
	             * @public
	             * @since 1.0.0
	             * @type {boolean}
	             * @default true
	             * @readonly
	             */
	            this.isPlaying = true;
	            /**
	             * 动画的播放方向,是顺着播还是在倒着播
	             * @property isFront
	             * @public
	             * @since 1.0.0
	             * @type {boolean}
	             * @default true
	             * @readonly
	             */
	            this.isFront = true;
	            /**
	             * 当前动画的总帧数
	             * @property totalFrames
	             * @public
	             * @since 1.0.0
	             * @type {number}
	             * @default 1
	             * @readonly
	             */
	            this.totalFrames = 1;
	            this._scriptLayer = [];
	            this._labelFrame = {};
	            this._frameLabel = {};
	            this._isNeedUpdateChildren = true;
	            this._isUpdateFrame = false;
	            this._mouseEvent = function (e) {
	                if (e.type == annie.MouseEvent.MOUSE_DOWN) {
	                    this.gotoAndStop(2);
	                }
	                else {
	                    this.gotoAndStop(1);
	                }
	            };
	            var s = this;
	            s.addChild(s.container);
	        }
	        /**
	         * 调用止方法将停止当前帧
	         * @method stop
	         * @public
	         * @since 1.0.0
	         */
	        MovieClip.prototype.stop = function () {
	            var s = this;
	            //s._isNeedUpdateChildren = true;
	            s.isPlaying = false;
	        };
	        /**
	         * Flash2x工具调用的方法,用户一般不需要使用
	         * @method as
	         * @private
	         * @since 1.0.0
	         * @param {Function} frameScript
	         * @param {number} frameIndex
	         */
	        MovieClip.prototype.as = function (frameScript, frameIndex) {
	            var s = this;
	            s._scriptLayer[frameIndex] = frameScript;
	        };
	        /**
	         * 给时间轴添加回调函数,当时间轴播放到当前帧时,此函数将被调用.注意,之前在此帧上添加的所有代码将被覆盖,包括从Fla文件中当前帧的代码.
	         * @method addFrameScript
	         * @public
	         * @since 1.0.0
	         * @param {number} frameIndex {number} 要将代码添加到哪一帧,从0开始.0就是第一帧,1是第二帧...
	         * @param {Function}frameScript {Function} 时间轴播放到当前帧时要执行回调方法
	         */
	        MovieClip.prototype.addFrameScript = function (frameIndex, frameScript) {
	            var s = this;
	            s.as(frameScript, frameIndex);
	        };
	        /**
	         * @移除帧上的回调方法
	         * @method removeFrameScript
	         * @public
	         * @since 1.0.0
	         * @param {number} frameIndex
	         */
	        MovieClip.prototype.removeFrameScript = function (frameIndex) {
	            var s = this;
	            if (s._scriptLayer[frameIndex]) {
	                s._scriptLayer[frameIndex] = null;
	            }
	        };
	        //addLayer
	        /**
	         * Flash2x工具调用的方法,用户一般不需要使用
	         * @method a
	         * @private
	         * @since 1.0.0
	         * @returns {annie.MovieClip}
	         */
	        MovieClip.prototype.a = function () {
	            var s = this;
	            s._currentLayer = [];
	            s._timeline.unshift(s._currentLayer);
	            return s;
	        };
	        //addFrame
	        /**
	         * Flash2x工具调用的方法,用户一般不需要使用
	         * @method b
	         * @private
	         * @since 1.0.0
	         * @returns {annie.MovieClip}
	         * @param {number} count
	         */
	        MovieClip.prototype.b = function (count) {
	            var s = this;
	            s._currentLayerFrame = new McFrame();
	            s._currentLayerFrame.keyIndex = s._currentLayer.length;
	            for (var i = 0; i < count; i++) {
	                s._currentLayer.push(s._currentLayerFrame);
	            }
	            if (s.totalFrames < s._currentLayer.length) {
	                s.totalFrames = s._currentLayer.length;
	            }
	            return s;
	        };
	        //setFrameDisplay
	        /**
	         * Flash2x工具调用的方法,用户一般不需要使用
	         * @method c
	         * @private
	         * @since 1.0.0
	         * @param {annie.DisplayObject} display
	         * @param {Object} displayBaseInfo
	         * @param {Object} displayExtendInfo
	         * @returns {annie.MovieClip}
	         */
	        MovieClip.prototype.c = function (display, displayBaseInfo, displayExtendInfo) {
	            if (displayBaseInfo === void 0) { displayBaseInfo = null; }
	            if (displayExtendInfo === void 0) { displayExtendInfo = null; }
	            var s = this;
	            s._currentLayerFrame.setDisplayInfo(display, displayBaseInfo, displayExtendInfo);
	            return s;
	        };
	        //setGraphic
	        /**
	         * Flash2x工具调用的方法,用户一般不需要使用
	         * @method g
	         * @private
	         * @since 1.0.0
	         * @param loopType
	         * @param {number} firstFrame
	         * @param {number} parentFrameIndex
	         * @returns {annie.MovieClip}
	         */
	        MovieClip.prototype.g = function (loopType, firstFrame, parentFrameIndex) {
	            var s = this;
	            s._currentLayerFrame.setGraphicInfo(loopType, firstFrame, parentFrameIndex);
	            return s;
	        };
	        /**
	         * 当将mc设置为图形动画模式时需要设置的相关信息 Flash2x工具调用的方法,用户一般不需要使用
	         * @method setGraphicInfo
	         * @public
	         * @since 1.0.0
	         * @param{Object} graphicInfo
	         */
	        MovieClip.prototype.setGraphicInfo = function (graphicInfo) {
	            var s = this;
	            s._graphicInfo = graphicInfo;
	        };
	        /**
	         * 将一个mc变成按钮来使用 如果mc在于2帧,那么点击此mc将自动有被按钮的状态,无需用户自己写代码
	         * @method initButton
	         * @public
	         * @since 1.0.0
	         */
	        MovieClip.prototype.initButton = function () {
	            var s = this;
	            s.mouseChildren = false;
	            //将mc设置成按钮形式
	            if (s.totalFrames > 1) {
	                s.gotoAndStop(1);
	                s.addEventListener("onMouseDown", this._mouseEvent.bind(this));
	                s.addEventListener("onMouseUp", this._mouseEvent.bind(this));
	                s.addEventListener("onMouseOut", this._mouseEvent.bind(this));
	            }
	        };
	        //setLabelFrame;
	        /**
	         * Flash2x工具调用的方法,用户一般不需要使用
	         * @method d
	         * @private
	         * @since 1.0.0
	         * @param {string} name
	         * @param {number} index
	         * @returns {annie.MovieClip}
	         */
	        MovieClip.prototype.d = function (name, index) {
	            var s = this;
	            s._labelFrame[name] = index + 1;
	            s._frameLabel[index + 1] = name;
	            return s;
	        };
	        //getFrameLabel
	        /**
	         * mc的当前帧的标签名,没有则为空
	         * @method getCurrentLabel
	         * @public
	         * @since 1.0.0
	         * @returns {string}
	         * */
	        MovieClip.prototype.getCurrentLabel = function () {
	            var s = this;
	            return s._frameLabel[s.currentFrame] ? s._frameLabel[s.currentFrame] : "";
	        };
	        //setFrameEvent
	        /**
	         * Flash2x工具调用的方法,用户一般不需要使用
	         * @method e
	         * @private
	         * @since 1.0.0
	         * @param {string} eventName
	         * @returns {annie.MovieClip}
	         */
	        MovieClip.prototype.e = function (eventName) {
	            var s = this;
	            s._currentLayerFrame.eventName = eventName;
	            return s;
	        };
	        //setSoundName
	        /**
	         * Flash2x工具调用的方法,用户一般不需要使用
	         * @method f
	         * @private
	         * @since 1.0.0
	         * @param {string} sceneName
	         * @param {string} soundName
	         * @param {number} times
	         * @returns {annie.MovieClip}
	         */
	        MovieClip.prototype.f = function (sceneName, soundName, times) {
	            var s = this;
	            s._currentLayerFrame.soundName = soundName;
	            s._currentLayerFrame.soundScene = sceneName;
	            s._currentLayerFrame.soundTimes = times;
	            return s;
	        };
	        /**
	         * 将播放头向后移一帧并停在下一帧,如果本身在最后一帧则不做任何反应
	         * @method nextFrame
	         * @since 1.0.0
	         * @public
	         */
	        MovieClip.prototype.nextFrame = function () {
	            var s = this;
	            if (s.currentFrame < s.totalFrames) {
	                s.currentFrame++;
	                s._isNeedUpdateChildren = true;
	            }
	            s.isPlaying = false;
	            s._isUpdateFrame = false;
	        };
	        /**
	         * 将播放头向前移一帧并停在下一帧,如果本身在第一帧则不做任何反应
	         * @method prevFrame
	         * @since 1.0.0
	         * @public
	         */
	        MovieClip.prototype.prevFrame = function () {
	            var s = this;
	            if (s.currentFrame > 1) {
	                s.currentFrame--;
	                s._isNeedUpdateChildren = true;
	            }
	            s.isPlaying = false;
	            s._isUpdateFrame = false;
	        };
	        /**
	         * 将播放头跳转到指定帧并停在那一帧,如果本身在第一帧则不做任何反应
	         * @method gotoAndStop
	         * @public
	         * @since 1.0.0
	         * @param {number} frameIndex{number|string} 批定帧的帧数或指定帧的标签名
	         */
	        MovieClip.prototype.gotoAndStop = function (frameIndex) {
	            var s = this;
	            s.isPlaying = false;
	            var tempFrame;
	            if (typeof (frameIndex) == "string") {
	                if (s._labelFrame[frameIndex] != undefined) {
	                    tempFrame = s._labelFrame[frameIndex];
	                }
	                else {
	                    trace("未找到帧标签叫'" + frameIndex + "'的帧");
	                }
	            }
	            else if (typeof (frameIndex) == "number") {
	                if (frameIndex > s.totalFrames) {
	                    frameIndex = s.totalFrames;
	                }
	                if (frameIndex < 1) {
	                    frameIndex = 1;
	                }
	                tempFrame = frameIndex;
	            }
	            if (s.currentFrame != tempFrame) {
	                s.currentFrame = tempFrame;
	                s._isNeedUpdateChildren = true;
	                s._isUpdateFrame = false;
	            }
	        };
	        /**
	         * 如果当前时间轴停在某一帧,调用此方法将继续播放.
	         * @method play
	         * @public
	         * @since 1.0.0
	         */
	        MovieClip.prototype.play = function (isFront) {
	            if (isFront === void 0) { isFront = true; }
	            var s = this;
	            s.isPlaying = true;
	            if (isFront == undefined) {
	                s.isFront = true;
	            }
	            else {
	                s.isFront = isFront;
	            }
	            s._isUpdateFrame = true;
	        };
	        /**
	         * 将播放头跳转到指定帧并从那一帧开始继续播放
	         * @method gotoAndPlay
	         * @public
	         * @since 1.0.0
	         * @param {number} frameIndex 批定帧的帧数或指定帧的标签名
	         * @param {boolean} isFront 跳到指定帧后是向前播放, 还是向后播放.不设置些参数将默认向前播放
	         */
	        MovieClip.prototype.gotoAndPlay = function (frameIndex, isFront) {
	            if (isFront === void 0) { isFront = true; }
	            var s = this;
	            if (isFront == undefined) {
	                s.isFront = true;
	            }
	            else {
	                s.isFront = isFront;
	            }
	            s.isPlaying = true;
	            var tempFrame;
	            if (typeof (frameIndex) == "string") {
	                if (s._labelFrame[frameIndex] != undefined) {
	                    tempFrame = s._labelFrame[frameIndex];
	                }
	                else {
	                    trace("未找到帧标签叫'" + frameIndex + "'的帧");
	                }
	            }
	            else if (typeof (frameIndex) == "number") {
	                if (frameIndex > s.totalFrames) {
	                    frameIndex = s.totalFrames;
	                }
	                if (frameIndex < 1) {
	                    frameIndex = 1;
	                }
	                tempFrame = frameIndex;
	            }
	            if (s.currentFrame != tempFrame) {
	                s.currentFrame = tempFrame;
	                s._isUpdateFrame = false;
	                s._isNeedUpdateChildren = true;
	            }
	        };
	        /**
	         * 动画播放过程中更改movieClip中的一个child的显示属性，
	         * 如果是停止状态，可以直接设置子级显示属性
	         * 因为moveClip在播放的过程中是无法更新子级的显示属性的，
	         * 比如你要更新子级的坐标，透明度，旋转等等，这些更改都会无效
	         * 因为，moveClip自己记录了子级每一帧的这些属性，所有你需要通过
	         * 此方法告诉moveClip我要自己控制这些属性
	         * @method setFrameChild
	         * @public
	         * @since 1.0.0
	         * @param {annie.DisplayObject} child
	         * @param {Object} attr
	         */
	        MovieClip.prototype.setFrameChild = function (child, attr) {
	            child._donotUpdateinMC = child._donotUpdateinMC || {};
	            for (var i in attr) {
	                if (attr[i] != null) {
	                    child._donotUpdateinMC[i] = attr[i];
	                }
	                else {
	                    delete child._donotUpdateinMC[attr[i]];
	                }
	            }
	        };
	        /**
	         * 重写刷新
	         * @method update
	         * @public
	         * @since 1.0.0
	         */
	        MovieClip.prototype.update = function () {
	            //super.update();
	            var s = this;
	            if (s.pauseUpdate)
	                return;
	            if (s._graphicInfo) {
	                //核心代码
	                //loopType,firstFrame,parentFrameIndex
	                var curParentFrameIndex = s.parent["currentFrame"] ? s.parent["currentFrame"] : 1;
	                var tempCurrentFrame = 1;
	                var pStartFrame = s._graphicInfo.parentFrameIndex + 1;
	                var cStartFrame = s._graphicInfo.firstFrame + 1;
	                if (s._graphicInfo.loopType == "play once") {
	                    if (curParentFrameIndex - pStartFrame >= 0) {
	                        tempCurrentFrame = curParentFrameIndex - pStartFrame + cStartFrame;
	                        if (tempCurrentFrame > s.totalFrames) {
	                            tempCurrentFrame = s.totalFrames;
	                        }
	                    }
	                }
	                else if (s._graphicInfo.loopType == "loop") {
	                    if (curParentFrameIndex - pStartFrame >= 0) {
	                        tempCurrentFrame = (curParentFrameIndex - pStartFrame + cStartFrame) % s.totalFrames;
	                    }
	                    if (tempCurrentFrame == 0) {
	                        tempCurrentFrame = s.totalFrames;
	                    }
	                }
	                else {
	                    tempCurrentFrame = cStartFrame;
	                }
	                if (s.currentFrame != tempCurrentFrame) {
	                    s.currentFrame = tempCurrentFrame;
	                    s._isNeedUpdateChildren = true;
	                }
	                s.isPlaying = false;
	            }
	            else {
	                if (s.isPlaying && s._isUpdateFrame) {
	                    //核心代码
	                    if (s.isFront) {
	                        s.currentFrame++;
	                        if (s.currentFrame > s.totalFrames) {
	                            s.currentFrame = 1;
	                        }
	                    }
	                    else {
	                        s.currentFrame--;
	                        if (s.currentFrame < 1) {
	                            s.currentFrame = s.totalFrames;
	                        }
	                    }
	                    s._isNeedUpdateChildren = true;
	                }
	            }
	            s._isUpdateFrame = true;
	            if (s._isNeedUpdateChildren) {
	                var layerCount = s._timeline.length;
	                var frameCount = 0;
	                var frame = null;
	                var displayObject = null;
	                var infoObject = null;
	                var frameChildrenCount = 0;
	                var lastFrameChildren = s.children;
	                var i;
	                var frameEvents = [];
	                for (i = 0; i < s.children.length - 1; i++) {
	                    lastFrameChildren[i].parent = null;
	                }
	                s.children = [];
	                for (i = 0; i < layerCount; i++) {
	                    frameCount = s._timeline[i].length;
	                    if (s.currentFrame <= frameCount) {
	                        frame = s._timeline[i][s.currentFrame - 1];
	                        if (frame == undefined)
	                            continue;
	                        if (frame.keyIndex == (s.currentFrame - 1)) {
	                            if (frame.soundName != "") {
	                                annie.RESManager.getMediaByName(frame.soundScene, frame.soundName).play(0, frame.soundTimes);
	                            }
	                            if (frame.eventName != "" && s.hasEventListener(annie.Event.CALL_FRAME)) {
	                                var event = new annie.Event(annie.Event.CALL_FRAME);
	                                event.data = { frameIndex: s.currentFrame, frameName: frame.eventName };
	                                frameEvents.push(event);
	                            }
	                        }
	                        frameChildrenCount = frame.frameChildList.length;
	                        for (var j = 0; j < frameChildrenCount; j++) {
	                            infoObject = frame.frameChildList[j];
	                            displayObject = infoObject.display;
	                            displayObject.x = infoObject.x;
	                            displayObject.y = infoObject.y;
	                            displayObject.scaleX = infoObject.scaleX;
	                            displayObject.scaleY = infoObject.scaleY;
	                            displayObject.rotation = infoObject.rotation;
	                            displayObject.skewX = infoObject.skewX;
	                            displayObject.skewY = infoObject.skewY;
	                            displayObject.alpha = infoObject.alpha;
	                            if (infoObject.filters) {
	                                displayObject.filters = infoObject.filters;
	                            }
	                            else {
	                                displayObject.filters = null;
	                            }
	                            if (infoObject.graphicInfo) {
	                                displayObject["_graphicInfo"] = infoObject.graphicInfo;
	                            }
	                            else {
	                                if (displayObject["_graphicInfo"]) {
	                                    displayObject["_graphicInfo"] = null;
	                                }
	                            }
	                            if (displayObject["_donotUpdateinMC"] != undefined) {
	                                for (var o in displayObject["_donotUpdateinMC"]) {
	                                    if (displayObject["_donotUpdateinMC"][o] != undefined) {
	                                        displayObject[o] = displayObject["_donotUpdateinMC"][o];
	                                    }
	                                }
	                            }
	                            displayObject.parent = s;
	                            s.children.push(displayObject);
	                            if (lastFrameChildren.indexOf(displayObject) < 0) {
	                                displayObject._onDispatchBubbledEvent("onAddToStage");
	                            }
	                        }
	                    }
	                }
	                s._isNeedUpdateChildren = false;
	                //update一定要放在事件处理之前
	                var len = lastFrameChildren.length;
	                for (i = 0; i < len; i++) {
	                    if (!lastFrameChildren[i].parent) {
	                        lastFrameChildren[i].parent = s;
	                        lastFrameChildren[i]._onDispatchBubbledEvent("onRemoveToStage");
	                        lastFrameChildren[i].parent = null;
	                    }
	                }
	                s.children.push(s.container);
	                _super.prototype.update.call(this);
	                //看看是否到了第一帧，或是最后一帧,如果是准备事件
	                if ((s.currentFrame == 1 && !s.isFront) || (s.currentFrame == s.totalFrames && s.isFront)) {
	                    if (s.hasEventListener(annie.Event.END_FRAME)) {
	                        var event = new annie.Event(annie.Event.END_FRAME);
	                        event.data = {
	                            frameIndex: s.currentFrame,
	                            frameName: s.currentFrame == 1 ? "firstFrame" : "endFrame"
	                        };
	                        frameEvents.push(event);
	                    }
	                }
	                //看看是否有帧事件,有则派发
	                var len = frameEvents.length;
	                for (i = 0; i < len; i++) {
	                    s.dispatchEvent(frameEvents[i]);
	                }
	                //看看是否有回调,有则调用
	                if (s._scriptLayer[s.currentFrame - 1] != undefined) {
	                    s._scriptLayer[s.currentFrame - 1]();
	                }
	            }
	            else {
	                _super.prototype.update.call(this);
	            }
	        };
	        /**
	         * 触发显示列表上相关的事件
	         * @method _onDispatchBubbledEvent
	         * @param {string} type
	         * @private
	         */
	        MovieClip.prototype._onDispatchBubbledEvent = function (type) {
	            _super.prototype._onDispatchBubbledEvent.call(this, type);
	            if (type == "onRemoveToStage") {
	                var s = this;
	                s.currentFrame = 1;
	                s.isPlaying = true;
	                s.isFront = true;
	                s._isNeedUpdateChildren = true;
	                s._isUpdateFrame = false;
	            }
	        };
	        return MovieClip;
	    }(annie.Sprite));
	    annie.MovieClip = MovieClip;
	})(annie || (annie = {}));
	/**
	 * @module annie
	 */
	var annie;
	(function (annie) {
	    /**
	     * 此类对于需要在canvas上放置html其他类型元素的时候非常有用<br/>
	     * 比如有时候我们需要放置一个注册,登录或者其他的内容.这些内容包含了输入框<br/>
	     * 或者下拉框什么的,无法在canvas里实现,但这些元素又跟canvas里面的元素<br/>
	     * 位置,大小,缩放对应.就相当于是annie里的一个显示对象一样。可以随意设置他的<br/>
	     * 属性,那么将你的html元素通过此类封装成annie的显示对象再合适不过了
	     * @class annie.FloatDisplay
	     * @extends annie.DisplayObject
	     * @public
	     * @since 1.0.0
	     */
	    var FloatDisplay = (function (_super) {
	        __extends(FloatDisplay, _super);
	        function FloatDisplay() {
	            _super.call(this);
	            /**
	             * 需要封装起来的html元素的引用。你可以通过这个引用来调用或设置此元素自身的属性方法和事件,甚至是样式
	             * @property htmlElement
	             * @public
	             * @since 1.0.0
	             * @type{HtmlElement}
	             */
	            this.htmlElement = null;
	            /**
	             * 上一交刷新时保留的数据
	             * @property _oldProps
	             * @private
	             * @since 1.0.0
	             * @type {{alpha: number, matrix: {a: number, b: number, c: number, d: number, tx: number, ty: number}}}
	             */
	            this._oldProps = { alpha: 1, matrix: { a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0 } };
	            /**
	             * 是否已经添加了舞台事件
	             * @property _isAdded
	             * @since 1.0.0
	             * @type {boolean}
	             * @private
	             */
	            this._isAdded = false;
	            var s = this;
	            s.addEventListener(annie.Event.REMOVE_TO_STAGE, function (e) {
	                if (s.htmlElement) {
	                    s.htmlElement.style.display = "none";
	                }
	            });
	            s.addEventListener(annie.Event.ADD_TO_STAGE, function (e) {
	                if (!s._isAdded) {
	                    s._isAdded = true;
	                    s.stage.rootDiv.insertBefore(s.htmlElement, s.stage.rootDiv.childNodes[0]);
	                }
	                else {
	                    if (s.htmlElement && s.visible) {
	                        s.htmlElement.style.display = "inline";
	                    }
	                }
	            });
	        }
	        /**
	         * 初始化方法
	         * @method init
	         * @public
	         * @since 1.0.0
	         * @param {HtmlElement} htmlElement 需要封装起来的html元素的引用。你可以通过这个引用来调用或设置此元素自身的属性方法和事件,甚至是样式
	         */
	        FloatDisplay.prototype.init = function (htmlElement) {
	            var s = this;
	            if (typeof (htmlElement) == "string") {
	                htmlElement = document.getElementById(htmlElement);
	            }
	            var style = htmlElement.style;
	            style.position = "absolute";
	            style.display = "none";
	            style.transformOrigin = style.WebkitTransformOrigin = "0 0 0";
	            s.htmlElement = htmlElement;
	        };
	        /**
	         * 删除html元素,这样就等于解了封装
	         * @method delElement
	         * @since 1.0.0
	         * @public
	         */
	        FloatDisplay.prototype.delElement = function () {
	            var elem = this.htmlElement;
	            if (elem) {
	                elem.style.display = "none";
	                if (elem.parentNode) {
	                    elem.parentNode.removeChild(elem);
	                }
	                this._isAdded = false;
	                this.htmlElement = null;
	            }
	        };
	        /**
	         * 重写刷新
	         * @method update
	         * @public
	         * @since 1.0.0
	         */
	        FloatDisplay.prototype.update = function () {
	            _super.prototype.update.call(this);
	            var s = this;
	            var o = s.htmlElement;
	            if (!o) {
	                return;
	            }
	            var style = o.style;
	            var visible = s.visible;
	            var parent = s.parent;
	            while (visible && parent) {
	                visible = parent.visible;
	                parent = parent.parent;
	            }
	            var show = visible ? "inline" : "none";
	            if (show != style.display) {
	                style.display = show;
	            }
	            if (!s.visible) {
	                return;
	            }
	            var props = new Object;
	            props.alpha = s["cAlpha"];
	            var mtx = s["cMatrix"];
	            var oldProps = s._oldProps;
	            var d = annie.devicePixelRatio;
	            if (!annie.Matrix.isEqual(oldProps.matrix, mtx)) {
	                style.transform = style.webkitTransform = "matrix(" + (mtx.a / d) + "," + (mtx.b / d) + "," + (mtx.c / d) + "," + (mtx.d / d) + "," + (mtx.tx / d) + "," + (mtx.ty / d) + ")";
	                oldProps.matrix = { tx: mtx.tx, ty: mtx.ty, a: mtx.a, b: mtx.b, c: mtx.c, d: mtx.d };
	            }
	            if (oldProps.alpha != props.alpha) {
	                style.opacity = props.alpha;
	                oldProps.alpha = props.alpha;
	            }
	        };
	        /**
	         * 重写getBounds
	         * @method getBounds
	         * @public
	         * @since 1.0.0
	         * @returns {annie.Rectangle}
	         */
	        FloatDisplay.prototype.getBounds = function () {
	            var s = this;
	            var r = new annie.Rectangle();
	            if (s.htmlElement) {
	                var hs = s.htmlElement.style;
	                r.width = parseInt(hs.width);
	                r.height = parseInt(hs.height);
	            }
	            return r;
	        };
	        return FloatDisplay;
	    }(annie.DisplayObject));
	    annie.FloatDisplay = FloatDisplay;
	})(annie || (annie = {}));
	/**
	 * @module annie
	 */
	var annie;
	(function (annie) {
	    /**
	     * 将video的内容或者是序列图画到canvas里形成连续播放的效果,以方便做交互
	     * @class annie.VideoPlayer
	     * @extends annie.Bitmap
	     * @public
	     * @since 1.0.0
	     */
	    var VideoPlayer = (function (_super) {
	        __extends(VideoPlayer, _super);
	        /**
	         * @method VideoPlayer
	         * @param {string} src
	         * @param {number} width
	         * @param {number} height
	         * @param {number} type 视频类型 值为0则会自动检测android下用序列图,其他系统下支持mp4的用mp4,不支持mp4的用序列图\n,值为1时全部使用序列图,值为2时全部使用mp4
	         */
	        function VideoPlayer(src, type, width, height) {
	            if (type === void 0) { type = 0; }
	            _super.call(this);
	            /**
	             * 播放的视频类型 值为0是序列图,1是视频 只读
	             * @property videoType
	             * @public
	             * @since 1.0.0
	             * @type {number}
	             * @default 0
	             */
	            this.videoType = 0;
	            var isUseVideo = true;
	            if (type == 0) {
	                if (annie.osType == "android") {
	                    isUseVideo = false;
	                }
	                else {
	                    //检测是否支持mp4,如果不支持,也将用序列
	                    var testVideo = document.createElement("video");
	                    isUseVideo = testVideo.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"') == "probably";
	                }
	            }
	            else if (type == 1) {
	                isUseVideo = false;
	            }
	            if (isUseVideo) {
	                this.video = new annie.Video(src + ".mp4", width, height);
	            }
	            else {
	                this.video = new annie.ImageFrames(src, width, height);
	            }
	            this.videoType = isUseVideo ? 1 : 0;
	        }
	        /**
	         * 重写update
	         * @method update
	         * @public
	         * @since 1.0.0
	         */
	        VideoPlayer.prototype.update = function () {
	            //刷新视频
	            if (this.videoType == 0) {
	                this.video.update();
	                this.rect = this.video.rect;
	                this["_cacheImg"] = this.bitmapData = this.video.currentBitmap;
	            }
	            else {
	                this["_cacheImg"] = this.bitmapData = this.video;
	            }
	            _super.prototype.update.call(this);
	        };
	        return VideoPlayer;
	    }(annie.Bitmap));
	    annie.VideoPlayer = VideoPlayer;
	})(annie || (annie = {}));
	/**
	 * @module annie
	 */
	var annie;
	(function (annie) {
	    /**
	     * 动态文本类,有时需要在canvas里有一个动态文本,能根据我们的显示内容来改变
	     * @class annie.TextField
	     * @extends annie.DisplayObject
	     * @since 1.0.0
	     * @public
	     */
	    var TextField = (function (_super) {
	        __extends(TextField, _super);
	        function TextField() {
	            _super.call(this);
	            this._cacheImg = window.document.createElement("canvas");
	            this._cacheX = 0;
	            this._cacheY = 0;
	            this._cacheObject = { bold: false, italic: false, size: 12, lineType: "single", text: "ILoveAnnie", textAlign: "left", font: "Arial", color: "#fff", lineWidth: 0, lineHeight: 0 };
	            /**
	             * 文本的对齐方式
	             * @property textAlign
	             * @public
	             * @since 1.0.0
	             * @type {string}
	             * @default left
	             */
	            this.textAlign = "left";
	            /**
	             * 文本的行高
	             * @property lineHeight
	             * @public
	             * @since 1.0.0
	             * @type {number}
	             * @default 0
	             */
	            this.lineHeight = 0;
	            /**
	             * 文本的宽
	             * @property lineWidth
	             * @public
	             * @since 1.0.0
	             * @type {number}
	             * @default 0
	             */
	            this.lineWidth = 0;
	            /**
	             * 文本类型,单行还是多行 single multi
	             * @property lineType
	             * @public
	             * @since 1.0.0
	             * @type {string} 两种 single和multi
	             * @default single
	             */
	            this.lineType = "single";
	            /**
	             * 文本内容
	             * @property text
	             * @type {string}
	             * @public
	             * @default ""
	             * @since 1.0.0
	             */
	            this.text = "";
	            /**
	             * 文本的css字体样式
	             * @property font
	             * @public
	             * @since 1.0.0
	             * @type {string}
	             * @default 12px Arial
	             */
	            this.font = "Arial";
	            /**
	             * 文本的size
	             * @property size
	             * @public
	             * @since 1.0.0
	             * @type {number}
	             * @default 12
	             */
	            this.size = 12;
	            /**
	             * 文本的颜色值
	             * @property color
	             * @type {string}
	             * @public
	             * @since 1.0.0
	             * @default #fff
	             */
	            this.color = "#fff";
	            /**
	             * 文本是否倾斜
	             * @property italic
	             * @public
	             * @since
	             * @default false
	             * @type {boolean}
	             */
	            this.italic = false;
	            /**
	             * 文本是否加粗
	             * @property bold
	             * @public
	             * @since
	             * @default false
	             * @type {boolean}
	             */
	            this.bold = false;
	        }
	        /**
	         * 设置文本在canvas里的渲染样式
	         * @param ctx
	         * @private
	         * @since 1.0.0
	         */
	        TextField.prototype._prepContext = function (ctx) {
	            var s = this;
	            var font = s.size || 12;
	            font += "px ";
	            font += s.font;
	            //font-weight:bold;font-style:italic;
	            if (s.bold) {
	                font = "bold " + font;
	            }
	            if (s.italic) {
	                font = "italic " + font;
	            }
	            ctx.font = font;
	            ctx.textAlign = this.textAlign || "left";
	            ctx.textBaseline = "top";
	            ctx.fillStyle = this.color;
	        };
	        /**
	         * 获取文本宽
	         * @method _getMeasuredWidth
	         * @param text
	         * @return {number}
	         * @private
	         * @since 1.0.0
	         */
	        TextField.prototype._getMeasuredWidth = function (text) {
	            var ctx = this._cacheImg.getContext("2d");
	            //ctx.save();
	            var w = ctx.measureText(text).width;
	            //ctx.restore();
	            return w;
	        };
	        /**
	         * 重写 render
	         * @method render
	         * @return {annie.Rectangle}
	         * @public
	         * @since 1.0.0
	         */
	        TextField.prototype.render = function (renderObj) {
	            var s = this;
	            if (s._cacheImg.src != "") {
	                renderObj.draw(s, 2);
	            }
	            //super.render();
	        };
	        /**
	         * 重写 update
	         * @method update
	         * @return {annie.Rectangle}
	         * @public
	         * @since 1.0.0
	         */
	        TextField.prototype.update = function () {
	            var s = this;
	            if (s.pauseUpdate)
	                return;
	            _super.prototype.update.call(this);
	            for (var item in s._cacheObject) {
	                if (s._cacheObject[item] != s[item]) {
	                    s._cacheObject[item] = s[item];
	                    s._isNeedUpdate = true;
	                }
	            }
	            if (s._isNeedUpdate) {
	                s.text += "";
	                var can = s._cacheImg;
	                var ctx = can.getContext("2d");
	                var hardLines = s.text.toString().split(/(?:\r\n|\r|\n)/);
	                var realLines = [];
	                s._prepContext(ctx);
	                var lineH;
	                if (s.lineHeight) {
	                    lineH = s.lineHeight;
	                }
	                else {
	                    lineH = s._getMeasuredWidth("M") * 1.2;
	                }
	                if (!s.lineWidth) {
	                    s.lineWidth = lineH * 10;
	                }
	                else {
	                    if (s.lineWidth < lineH) {
	                        s.lineWidth = lineH;
	                    }
	                }
	                if (s.text.indexOf("\n") < 0 && s.lineType == "single") {
	                    realLines.push(hardLines[0]);
	                    var str = hardLines[0];
	                    var lineW = s._getMeasuredWidth(str);
	                    if (lineW > s.lineWidth) {
	                        var w = s._getMeasuredWidth(str[0]);
	                        var lineStr = str[0];
	                        var wordW = 0;
	                        var strLen = str.length;
	                        for (var j = 1; j < strLen; j++) {
	                            wordW = ctx.measureText(str[j]).width;
	                            w += wordW;
	                            if (w > s.lineWidth) {
	                                realLines[0] = lineStr;
	                                break;
	                            }
	                            else {
	                                lineStr += str[j];
	                            }
	                        }
	                    }
	                }
	                else {
	                    for (var i = 0, l = hardLines.length; i < l; i++) {
	                        var str = hardLines[i];
	                        var w = s._getMeasuredWidth(str[0]);
	                        var lineStr = str[0];
	                        var wordW = 0;
	                        var strLen = str.length;
	                        for (var j = 1; j < strLen; j++) {
	                            wordW = ctx.measureText(str[j]).width;
	                            w += wordW;
	                            if (w > this.lineWidth) {
	                                realLines.push(lineStr);
	                                lineStr = str[j];
	                                w = wordW;
	                            }
	                            else {
	                                lineStr += str[j];
	                            }
	                        }
	                        realLines.push(lineStr);
	                    }
	                }
	                var maxH = lineH * realLines.length;
	                var maxW = s.lineWidth;
	                var tx = 0;
	                if (s.textAlign == "center") {
	                    tx = maxW * 0.5;
	                }
	                else if (s.textAlign == "right") {
	                    tx = maxW;
	                }
	                can.width = maxW + 20;
	                can.height = maxH + 20;
	                can.style.width = can.width / annie.devicePixelRatio + "px";
	                can.style.height = can.height / annie.devicePixelRatio + "px";
	                ctx.clearRect(0, 0, maxW, maxH);
	                ctx.setTransform(1, 0, 0, 1, tx + 10, 10);
	                /////////////////////
	                if (s["cFilters"] && s["cFilters"].length > 0) {
	                    var cf = s.cFilters;
	                    var cfLen = cf.length;
	                    for (var i = 0; i < cfLen; i++) {
	                        if (s.cFilters[i].type == "Shadow") {
	                            ctx.shadowBlur = cf[i].blur;
	                            ctx.shadowColor = cf[i].color;
	                            ctx.shadowOffsetX = cf[i].offsetX;
	                            ctx.shadowOffsetY = cf[i].offsetY;
	                            break;
	                        }
	                    }
	                }
	                else {
	                    ctx.shadowBlur = 0;
	                    ctx.shadowColor = "#0";
	                    ctx.shadowOffsetX = 0;
	                    ctx.shadowOffsetY = 0;
	                }
	                ////////////////////
	                s._prepContext(ctx);
	                for (var i = 0; i < realLines.length; i++) {
	                    ctx.fillText(realLines[i], 0, i * lineH, maxW);
	                }
	                //滤镜
	                if (s["cFilters"] && s["cFilters"].length > 0) {
	                    var len = s["cFilters"].length;
	                    var imageData = ctx.getImageData(0, 0, maxW + 20, maxH + 20);
	                    for (var i = 0; i < len; i++) {
	                        var f = s["cFilters"][i];
	                        f.drawFilter(imageData);
	                        trace(s["cFilters"][i].type);
	                    }
	                    ctx.putImageData(imageData, 0, 0);
	                }
	                s._cacheX = -10;
	                s._cacheY = -10;
	                s._isNeedUpdate = false;
	                annie.WGRender.setDisplayInfo(s, 2);
	            }
	        };
	        /**
	         * 重写 getBounds
	         * @method getBounds
	         * @return {annie.Rectangle}
	         * @public
	         * @since 1.0.0
	         */
	        TextField.prototype.getBounds = function () {
	            var s = this;
	            var r = new annie.Rectangle();
	            if (s._cacheImg) {
	                r.x = 0;
	                r.y = 0;
	                r.width = s._cacheImg.width - 20;
	                r.height = s._cacheImg.height - 20;
	            }
	            return r;
	        };
	        return TextField;
	    }(annie.DisplayObject));
	    annie.TextField = TextField;
	})(annie || (annie = {}));
	/**
	 * @module annie
	 */
	var annie;
	(function (annie) {
	    /**
	     * 输入文本,此文本类是annie.FloatDisplay对象的典型代表
	     * @class annie.InputText
	     * @public
	     * @since 1.0.0
	     * @extends annie.FloatDisplay
	     */
	    var InputText = (function (_super) {
	        __extends(InputText, _super);
	        /**
	         * @method InputText
	         * @public
	         * @since 1.0.0
	         * @param {string} inputType multiline 多行 password 密码 singleline 单行
	         */
	        function InputText(inputType) {
	            _super.call(this);
	            /**
	             * 输入文本的类型.
	             * multiline 多行
	             * password 密码
	             * singleline 单行
	             * @property inputType
	             * @public
	             * @since 1.0.0
	             * @type {string}
	             * @default "singleline"
	             */
	            this.inputType = "singleline";
	            var input = null;
	            var s = this;
	            if (inputType != "multiline") {
	                input = document.createElement("input");
	                if (inputType == "password") {
	                    input.type = "password";
	                }
	                else {
	                    input.type = "text";
	                }
	            }
	            else {
	                input = document.createElement("textarea");
	                input.style.resize = "none";
	                input.style.overflow = "hidden";
	            }
	            s.inputType = inputType;
	            s.init(input);
	        }
	        InputText.prototype.init = function (htmlElement) {
	            _super.prototype.init.call(this, htmlElement);
	            //默认设置
	            var s = this;
	            s.htmlElement.style.outline = "none";
	            s.htmlElement.style.borderWidth = "thin";
	            s.htmlElement.style.borderColor = "#000";
	        };
	        /**
	         * 被始化输入文件的一些属性
	         * @method initInfo
	         * @public
	         * @since 1.0.0
	         * @param {string} text 默认文字
	         * @param {number} w 文本宽
	         * @param {number} h 文本高
	         * @param {string}color 文字颜色
	         * @param {string}align 文字的对齐方式
	         * @param {number}size  文字大小
	         * @param {string}font  文字所使用的字体
	         * @param {boolean}showBorder 是否需要显示边框
	         * @param {number}lineSpacing 如果是多行,请设置行高
	         */
	        InputText.prototype.initInfo = function (text, w, h, color, align, size, font, showBorder, lineSpacing) {
	            var s = this;
	            s.htmlElement.placeholder = text;
	            s.htmlElement.style.width = w + "px";
	            s.htmlElement.style.height = h + "px";
	            //font包括字体和大小
	            s.htmlElement.style.font = size + "px " + font;
	            s.htmlElement.style.color = color;
	            s.htmlElement.style.textAlign = align;
	            /////////////////////设置边框//////////////
	            s.setBorder(showBorder);
	            //color:blue; text-align:center"
	            if (s.inputType == "multiLine") {
	                s.htmlElement.style.lineHeight = lineSpacing + "px";
	            }
	        };
	        /**
	         * 设置文本是否为粗体
	         * @method setBold
	         * @param {boolean} bold true或false
	         * @public
	         * @since 1.0.0
	         */
	        InputText.prototype.setBold = function (bold) {
	            var s = this.htmlElement.style;
	            if (bold) {
	                s.fontWeight = "bold";
	            }
	            else {
	                s.fontWeight = "normal";
	            }
	        };
	        /**
	         * 设置文本是否倾斜
	         * @method setItalic
	         * @param {boolean} italic true或false
	         * @public
	         * @since 1.0.0
	         */
	        InputText.prototype.setItalic = function (italic) {
	            var s = this.htmlElement.style;
	            if (italic) {
	                s.fontStyle = "italic";
	            }
	            else {
	                s.fontStyle = "normal";
	            }
	        };
	        /**
	         * 设置是否有边框
	         * @method setBorder
	         * @param {boolean} show true或false
	         * @public
	         * @sinc 1.0.0
	         */
	        InputText.prototype.setBorder = function (show) {
	            var s = this;
	            if (show) {
	                s.htmlElement.style.borderStyle = "inset";
	                s.htmlElement.style.backgroundColor = "#fff";
	            }
	            else {
	                s.htmlElement.style.borderStyle = "none";
	                s.htmlElement.style.backgroundColor = "transparent";
	            }
	        };
	        /**
	         * 获取输入文本的值,因为输入文本调用了html的input标签,所以不能直接像动态文本那样用textObj.text获取值或者设置值
	         * @method getText
	         * @public
	         * @since 1.0.0
	         * @returns {string}
	         */
	        InputText.prototype.getText = function () {
	            var s = this;
	            if (s.htmlElement) {
	                return s.htmlElement.value;
	            }
	        };
	        /**
	         * 设置输入文本的值,因为输入文本调用了html的input标签,所以不能直接像动态文本那样用textObj.text获取值或者设置值
	         * @method setText
	         * @param {string} text
	         */
	        InputText.prototype.setText = function (text) {
	            var s = this;
	            if (s.htmlElement) {
	                s.htmlElement.value = text;
	            }
	        };
	        return InputText;
	    }(annie.FloatDisplay));
	    annie.InputText = InputText;
	})(annie || (annie = {}));
	/**
	 * @module annie
	 */
	var annie;
	(function (annie) {
	    /**
	     * Stage 表示显示 canvas 内容的整个区域，所有显示对象的顶级显示容器
	     * 无法以全局方式访问 Stage 对象,而是需要利用DisplayObject实例的getStage()方法进行访问
	     * @class annie.Stage
	     * @extends annie.Sprite
	     * @public
	     * @since 1.0.0
	     */
	    var Stage = (function (_super) {
	        __extends(Stage, _super);
	        /**
	         * 显示对象入口函数
	         * @method Stage
	         * @param {string} rootDivId
	         * @param {number} desW 舞台宽
	         * @param {number} desH 舞台高
	         * @param {number} fps 刷新率
	         * @param {string} scaleMode 缩放模式 StageScaleMode
	         * @param {string} bgColor 背景颜色-1为透明
	         * @param {number} renderType 渲染模式0:canvas 1:webGl 2:dom
	         * @public
	         * @since 1.0.0
	         */
	        function Stage(rootDivId, desW, desH, frameRate, scaleMode, renderType) {
	            if (rootDivId === void 0) { rootDivId = "annieEngine"; }
	            if (desW === void 0) { desW = 640; }
	            if (desH === void 0) { desH = 1040; }
	            if (frameRate === void 0) { frameRate = 30; }
	            if (scaleMode === void 0) { scaleMode = "fixedHeight"; }
	            if (renderType === void 0) { renderType = 0; }
	            _super.call(this);
	            /**
	             * 整个引擎的最上层的div元素,
	             * 承载canvas的那个div html元素
	             * @property rootDiv
	             * @public
	             * @since 1.0.0
	             * @type {Html Div}
	             * @default null
	             */
	            this.rootDiv = null;
	            /**
	             * 当前stage所使用的渲染器
	             * 渲染器有两种,一种是canvas 一种是webGl
	             * @property renderObj
	             * @public
	             * @since 1.0.0
	             * @type {IRender}
	             * @default null
	             */
	            this.renderObj = null;
	            /**
	             * 渲染模式值 只读 CANVAS:0, webGl: 1
	             * @property renderType
	             * @readonly
	             * @public
	             * @since 1.0.0
	             * @type {number}
	             * @default 0
	             * @readonly
	             */
	            this.renderType = 0;
	            /**
	             * 如果值为true则暂停更新当前显示对象及所有子对象。在视觉上就相当于界面停止了,但一样能会接收鼠标事件<br/>
	             * 有时候背景为大量动画的一个对象时,当需要弹出一个框或者其他内容,或者模糊一个背景时可以设置此属性让<br/>
	             * 对象视觉暂停更新
	             * @property pause
	             * @type {boolean}
	             * @public
	             * @since 1.0.0
	             * @default false
	             */
	            this.pause = false;
	            /**
	             * 舞台在设备里截取后的可见区域,有些时候知道可见区域是非常重要的,因为这样你就可以根据舞台的可见区域做自适应了。
	             * @property viewRect
	             * @public
	             * @readonly
	             * @since 1.0.0
	             * @type {annie.Rectangle}
	             * @default {x:0,y:0,width:0,height:0}
	             * @readonly
	             * @example
	             *      //始终让一个对象顶对齐，或者
	             */
	            this.viewRect = new annie.Rectangle();
	            /**
	             * 当设备尺寸更新，或者旋转后是否自动更新方向
	             * 端默认不开启
	             * @property autoSteering
	             * @public
	             * @since 1.0.0
	             * @type {boolean}
	             * @default false
	             */
	            this.autoSteering = false;
	            /**
	             * 当设备尺寸更新，或者旋转后是否自动更新尺寸。
	             * @property autoResize
	             * @public
	             * @since 1.0.0
	             * @type {boolean}
	             * @default false
	             */
	            this.autoResize = false;
	            /**
	             * 舞台的尺寸宽,也就是我们常说的设计尺寸
	             * @property width
	             * @public
	             * @since 1.0.0
	             * @default 320
	             * @type {number}
	             * @readonly
	             */
	            this.width = 0;
	            /**
	             * 舞台的尺寸高,也就是我们常说的设计尺寸
	             * @property height
	             * @public
	             * @since 1.0.0
	             * @default 240
	             * @type {number}
	             * @readonly
	             */
	            this.height = 0;
	            /**
	             * 舞台在当前设备中的真实高
	             * @property divHeight
	             * @public
	             * @since 1.0.0
	             * @default 320
	             * @type {number}
	             * @readonly
	             */
	            this.divHeight = 0;
	            /**
	             * 舞台在当前设备中的真实宽
	             * @property divWidth
	             * @public
	             * @since 1.0.0
	             * @default 240
	             * @readonly
	             * @type {number}
	             */
	            this.divWidth = 0;
	            /**
	             * 舞台的背景色
	             * 默认就是透明背景
	             * 可能设置一个颜色值改变舞台背景
	             * @property bgColor
	             * @public
	             * @since 1.0.0
	             * @type {string}
	             * @default "";
	             */
	            this.bgColor = "";
	            /**
	             * 舞台的缩放模式
	             * 默认为空就是无缩放的真实大小
	             * "noBorder" 无边框模式
	             * ”showAll" 显示所有内容
	             * “fixedWidth" 固定宽
	             * ”fixedHeight" 固定高
	             * @property scaleMode
	             * @public
	             * @since 1.0.0
	             * @default "onScale"
	             * @type {string}
	             * @example
	             *      //动态更改stage的对齐方式示例
	             *      //以下代码放到一个舞台的显示对象的构造函数中
	             *      var s=this;
	             *      s.addEventListener(annie.Event.ADD_TO_STAGE,function(e){
	             *          var i=0;
	             *          s.stage.addEventListener(annie.MouseEvent.CLICK,function(e){
	             *              var aList=[annie.StageScaleMode.EXACT_FIT,annie.StageScaleMode.NO_BORDER,annie.StageScaleMode.NO_SCALE,annie.StageScaleMode.SHOW_ALL,annie.StageScaleMode.FIXED_WIDTH,annie.StageScaleMode.FIXED_HEIGHT]
	             *              var state=e.currentTarget;
	             *              state.scaleMode=aList[i];
	             *              state.resize();
	             *              if(i>5){i=0;}
	             *          }
	             *      }
	             *
	             */
	            this.scaleMode = "onScale";
	            /**
	             * 原始为60的刷新速度时的计数器
	             * @property _flush
	             * @private
	             * @since 1.0.0
	             * @default 0
	             * @type {number}
	             */
	            this._flush = 0;
	            /**
	             * 当前的刷新次数计数器
	             * @property _currentFlush
	             * @private
	             * @since 1.0.0
	             * @default 0
	             * @type {number}
	             */
	            this._currentFlush = 0;
	            /**
	             * 每一次需要刷新整个引擎时积累的鼠标或触摸事件信息对象,同一刷新阶段内相同的事件类型将会被后面的同类事件覆盖
	             * @type {Object}
	             * @private
	             */
	            this._mouseEventInfo = {};
	            this._lastDpList = [];
	            /**
	             * 这个是鼠标事件的对象池,因为如果用户有监听鼠标事件,如果不建立对象池,那每一秒将会new Fps个数的事件对象,影响性能
	             * @type {Array}
	             * @private
	             */
	            this._ml = [];
	            /**
	             * 刷新mouse或者touch事件
	             * @private
	             */
	            this._mouseDownPoint = new annie.Point(0, 0);
	            /**
	             * html的鼠标或单点触摸对应的引擎事件类型名
	             * @type {{mousedown: string, mouseup: string, mousemove: string, touchstart: string, touchmove: string, touchend: string}}
	             * @private
	             */
	            this._mouseEventTypes = {
	                mousedown: "onMouseDown",
	                mouseup: "onMouseUp",
	                mousemove: "onMouseMove",
	                touchstart: "onMouseDown",
	                touchmove: "onMouseMove",
	                touchend: "onMouseUp"
	            };
	            /**
	             * 当document有鼠标或触摸事件时调用
	             * @param e
	             */
	            this.onMouseEvent = function (e) {
	                //检查是否有
	                var s = this;
	                s._mouseEventInfo[s._mouseEventTypes[e.type]] = e;
	                //阻止向下冒泡
	            };
	            /**
	             * 设置舞台的对齐模式
	             */
	            this.setAlign = function () {
	                var s = this;
	                var divH = s.divHeight * annie.devicePixelRatio;
	                var divW = s.divWidth * annie.devicePixelRatio;
	                var desH = s.height;
	                var desW = s.width;
	                //设备是否为竖屏
	                var isDivH = divH > divW;
	                //内容是否为竖屏内容
	                var isDesH = desH > desW;
	                var scaleY = 1;
	                var scaleX = 1;
	                s.x = (divW - desW) / 2;
	                s.y = (divH - desH) / 2;
	                if (s.autoSteering) {
	                    if (isDesH != isDivH) {
	                        var d = divH;
	                        divH = divW;
	                        divW = d;
	                    }
	                }
	                if (s.scaleMode != "noScale") {
	                    scaleY = divH / desH;
	                    scaleX = divW / desW;
	                    switch (s.scaleMode) {
	                        case "noBorder":
	                            if (scaleX > scaleY) {
	                                scaleY = scaleX;
	                            }
	                            else {
	                                scaleX = scaleY;
	                            }
	                            break;
	                        case "showAll":
	                            if (scaleX < scaleY) {
	                                scaleY = scaleX;
	                            }
	                            else {
	                                scaleX = scaleY;
	                            }
	                            break;
	                        case "fixedWidth":
	                            scaleY = scaleX;
	                            break;
	                        case "fixedHeight":
	                            scaleX = scaleY;
	                            break;
	                    }
	                }
	                s.scaleX = scaleX;
	                s.scaleY = scaleY;
	                s.viewRect.x = (desW - divW / scaleX) / 2;
	                s.viewRect.y = (desH - divH / scaleY) / 2;
	                s.viewRect.width = desW - s.viewRect.x * 2;
	                s.viewRect.height = desH - s.viewRect.y * 2;
	                if (s.autoSteering) {
	                    if (isDesH == isDivH) {
	                        s.rotation = 0;
	                    }
	                    else {
	                        s.rotation = 90;
	                    }
	                }
	                else {
	                    s.rotation = 0;
	                }
	            };
	            /**
	             * 当舞台尺寸发生改变时,如果stage autoResize 为 true，则此方法会自己调用；
	             * 如果设置stage autoResize 为 false 你需要手动调用此方法以更新界面.
	             * 不管autoResize 的状态是什么，你只要侦听 了stage 的 annie.Event.RESIZE 事件
	             * 都可以接收到舞台变化的通知。
	             * @method resize
	             * @public
	             * @since 1.0.0
	             * @
	             */
	            this.resize = function () {
	                var s = this;
	                var whObj = s.getRootDivWH(s.rootDiv);
	                //这里判断
	                if ((s.divWidth + s.divHeight) == 0 || Math.abs((whObj.h + whObj.w) - (s.divWidth + s.divHeight)) < 100) {
	                    s.divHeight = whObj.h;
	                    s.divWidth = whObj.w;
	                    s.renderObj.reSize();
	                    s.setAlign();
	                }
	            };
	            var s = this;
	            s.stage = this;
	            if (annie.osType == "pc") {
	                s.autoResize = true;
	            }
	            else {
	                s.autoSteering = true;
	                s.autoResize = true;
	            }
	            s._lastMousePoint = new annie.Point();
	            s.name = "stageInstance_" + s.getInstanceId();
	            var div = document.getElementById(rootDivId);
	            s.renderType = renderType;
	            s.width = desW;
	            s.height = desH;
	            s.rootDiv = div;
	            s.setFrameRate(frameRate);
	            s.scaleMode = scaleMode;
	            s.anchorX = desW / 2;
	            s.anchorY = desH / 2;
	            if (renderType == 0) {
	                //canvas
	                s.renderObj = new annie.CanvasRender(s);
	            }
	            else {
	                //webgl
	                s.renderObj = new annie.WGRender(s);
	            }
	            s.renderObj.init();
	            window.addEventListener("resize", function (e) {
	                if (s.autoResize) {
	                    s.resize();
	                }
	                var event = new annie.Event("onResize");
	                s.dispatchEvent(event);
	            });
	            setTimeout(function () {
	                s.resize();
	                s.update();
	                //同时添加到主更新循环中
	                Stage.addUpdateObj(s);
	                //告诉大家我初始化完成
	                //判断debug,如果debug等于true并且之前没有加载过则加载debug所需要的js文件
	                if (annie.debug && !Stage._isLoadedVConsole) {
	                    var script = document.createElement("script");
	                    script.onload = function () {
	                        s.dispatchEvent(new annie.Event("onInitStage"));
	                        script.onload = null;
	                    };
	                    document.head.appendChild(script);
	                    script.src = "libs/vConsole.min.js";
	                }
	                else {
	                    s.dispatchEvent(new annie.Event("onInitStage"));
	                }
	            }, 100);
	            var rc = s.renderObj.rootContainer;
	            var mouseEvent = s.onMouseEvent.bind(s);
	            if (annie.osType != "pc") {
	                rc.addEventListener("touchstart", mouseEvent);
	                rc.addEventListener('touchmove', mouseEvent);
	                rc.addEventListener('touchend', mouseEvent);
	            }
	            else {
	                rc.addEventListener("mousedown", mouseEvent);
	                rc.addEventListener('mousemove', mouseEvent);
	                rc.addEventListener('mouseup', mouseEvent);
	            }
	        }
	        /**
	         * 刷新函数
	         * @method update
	         */
	        Stage.prototype.update = function () {
	            var s = this;
	            if (!s.pause) {
	                _super.prototype.update.call(this);
	            }
	        };
	        /**
	         * 渲染函数
	         * @method render
	         * @param renderObj
	         */
	        Stage.prototype.render = function (renderObj) {
	            if (!this.pause) {
	                renderObj.begin();
	                _super.prototype.render.call(this, renderObj);
	            }
	            //检查mouse或touch事件是否有，如果有的话，就触发事件函数
	            if (annie.EventDispatcher._totalMEC > 0) {
	                this._mt();
	            }
	        };
	        Stage.prototype._initMouseEvent = function (event, cp, sp) {
	            event["_pd"] = false;
	            event.clientX = cp.x;
	            event.clientY = cp.y;
	            event.stageX = sp.x;
	            event.stageY = sp.y;
	        };
	        Stage.prototype._mt = function () {
	            var s = this;
	            var mt = s._mouseEventInfo;
	            var points;
	            var events = [];
	            var event;
	            //stageMousePoint
	            var sp;
	            //localPoint;
	            var lp;
	            //clientPoint
	            var cp;
	            //事件个数
	            var eLen = 0;
	            for (var item in mt) {
	                if (annie.osType == "pc") {
	                    points = [mt[item]];
	                }
	                else {
	                    if (mt[item].targetTouches) {
	                        points = mt[item].targetTouches;
	                    }
	                }
	                if (points && points.length > 0) {
	                    s._lastMousePoint.x = (points[0].clientX - points[0].target.offsetLeft) * annie.devicePixelRatio;
	                    s._lastMousePoint.y = (points[0].clientY - points[0].target.offsetTop) * annie.devicePixelRatio;
	                }
	                //这个地方检查是所有显示对象列表里是否有添加任何鼠标或触碰事件,有的话就检测,没有的话就算啦。
	                cp = s._lastMousePoint;
	                sp = s.globalToLocal(cp, annie.DisplayObject._bp);
	                if (annie.EventDispatcher.getMouseEventCount(item) > 0) {
	                    if (!s._ml[eLen]) {
	                        event = new annie.MouseEvent(item);
	                        s._ml[eLen] = event;
	                    }
	                    else {
	                        event = s._ml[eLen];
	                        event.type = item;
	                    }
	                    events.push(event);
	                    s._initMouseEvent(event, cp, sp);
	                    eLen++;
	                }
	                if (item == "onMouseDown") {
	                    s._mouseDownPoint.x = cp.x;
	                    s._mouseDownPoint.y = cp.y;
	                    //清空上次存在的显示列表
	                    s._lastDpList = null;
	                }
	                else if (item == "onMouseUp") {
	                    if (Math.abs(s._mouseDownPoint.x - cp.x) <= 1 && Math.abs(s._mouseDownPoint.y - cp.y) <= 1) {
	                        //click事件
	                        //这个地方检查是所有显示对象列表里是否有添加对应的事件
	                        if (annie.EventDispatcher.getMouseEventCount("onMouseClick") > 0) {
	                            if (!s._ml[eLen]) {
	                                event = new annie.MouseEvent("onMouseClick");
	                                s._ml[eLen] = event;
	                            }
	                            else {
	                                event = s._ml[eLen];
	                                event.type = "onMouseClick";
	                            }
	                            events.push(event);
	                            s._initMouseEvent(event, cp, sp);
	                            eLen++;
	                        }
	                    }
	                }
	            }
	            if (eLen > 0) {
	                //证明有事件那么就开始遍历显示列表。就算有多个事件也不怕，因为坐标点相同，所以只需要遍历一次
	                var d = s.hitTestPoint(cp, true);
	                var displayList = [];
	                if (d) {
	                    //证明有点击到事件,然后从最底层追上来,看看一路是否有人添加过mouse或touch事件,还要考虑mousechildren和阻止事件方法
	                    //找出真正的target,因为有些父级可能会mouseChildren=false;
	                    while (d) {
	                        if (d["mouseChildren"] === false) {
	                            //丢掉之前的层级,因为根本没用了
	                            displayList.length = 0;
	                        }
	                        displayList.push(d);
	                        d = d.parent;
	                    }
	                }
	                else {
	                    displayList.push(s);
	                }
	                var len = displayList.length;
	                displayList.reverse();
	                for (var i = 0; i < len; i++) {
	                    d = displayList[i];
	                    for (var j = 0; j < eLen; j++) {
	                        if (events[j]["_pd"] === false) {
	                            if (d.hasEventListener(events[j].type)) {
	                                events[j].currentTarget = d;
	                                events[j].target = displayList[len - 1];
	                                lp = d.globalToLocal(cp);
	                                events[j].localX = lp.x;
	                                events[j].localY = lp.y;
	                                d.dispatchEvent(events[j]);
	                            }
	                        }
	                    }
	                }
	                //最后要和上一次的遍历者对比下，如果不相同则要触发onMouseOver和onMouseOut
	                if (s._lastDpList) {
	                    //从第二个开始，因为第一个对象始终是stage顶级对象
	                    var len1 = s._lastDpList.length;
	                    var len2 = displayList.length;
	                    len = len1 > len2 ? len1 : len2;
	                    var isDiff = false;
	                    var overEvent;
	                    var outEvent;
	                    for (var i = 1; i < len; i++) {
	                        if (!isDiff) {
	                            if (s._lastDpList[i] != displayList[i]) {
	                                //好就是这里，需要确定哪些有onMouseOver,哪些有onMouseOut
	                                isDiff = true;
	                                if (!s._ml[eLen]) {
	                                    overEvent = new annie.MouseEvent("onMouseOver");
	                                    s._ml[eLen] = overEvent;
	                                }
	                                else {
	                                    overEvent = s._ml[eLen];
	                                    overEvent.type = "onMouseOver";
	                                }
	                                s._initMouseEvent(overEvent, cp, sp);
	                                eLen++;
	                                if (!s._ml[eLen]) {
	                                    outEvent = new annie.MouseEvent("onMouseOut");
	                                    s._ml[eLen] = outEvent;
	                                }
	                                else {
	                                    outEvent = s._ml[eLen];
	                                    outEvent.type = "onMouseOut";
	                                }
	                                s._initMouseEvent(outEvent, cp, sp);
	                            }
	                        }
	                        if (isDiff) {
	                            if (s._lastDpList[i]) {
	                                //触发onMouseOut事件
	                                if (outEvent["_pd"] === false) {
	                                    d = s._lastDpList[i];
	                                    if (d.hasEventListener("onMouseOut")) {
	                                        outEvent.currentTarget = d;
	                                        outEvent.target = s._lastDpList[len1 - 1];
	                                        lp = d.globalToLocal(cp);
	                                        outEvent.localX = lp.x;
	                                        outEvent.localY = lp.y;
	                                        d.dispatchEvent(outEvent);
	                                    }
	                                }
	                            }
	                            if (displayList[i]) {
	                                //触发onMouseOver事件
	                                if (overEvent["_pd"] === false) {
	                                    d = displayList[i];
	                                    if (d.hasEventListener("onMouseOver")) {
	                                        overEvent.currentTarget = d;
	                                        overEvent.target = displayList[len2 - 1];
	                                        lp = d.globalToLocal(cp);
	                                        overEvent.localX = lp.x;
	                                        overEvent.localY = lp.y;
	                                        d.dispatchEvent(overEvent);
	                                    }
	                                }
	                            }
	                        }
	                    }
	                }
	                s._lastDpList = displayList;
	            }
	            s._mouseEventInfo = {};
	        };
	        /**
	         * 循环刷新页面的函数
	         */
	        Stage.prototype.flush = function () {
	            var s = this;
	            if (s._flush == 0) {
	                s.update();
	                s.render(s.renderObj);
	            }
	            else {
	                //将更新和渲染分放到两个不同的时间更新值来执行,这样可以减轻cpu同时执行的压力。
	                if (s._currentFlush == 0) {
	                    s.update();
	                    s._currentFlush = s._flush;
	                }
	                else {
	                    if (s._currentFlush == s._flush) {
	                        s.render(s.renderObj);
	                    }
	                    s._currentFlush--;
	                }
	            }
	        };
	        /**
	         * 引擎的刷新率,就是一秒中执行多少次刷新
	         * @method setFrameRate
	         * @param {number} fps 最好是60的倍数如 1 2 3 6 10 12 15 20 30 60
	         * @since 1.0.0
	         * @public
	         */
	        Stage.prototype.setFrameRate = function (fps) {
	            var s = this;
	            s._flush = 60 / fps - 1 >> 0;
	            if (s._flush < 0) {
	                s._flush = 0;
	            }
	        };
	        /**
	         * 引擎的刷新率,就是一秒中执行多少次刷新
	         * @method getFrameRate
	         * @since 1.0.0
	         * @public
	         */
	        Stage.prototype.getFrameRate = function () {
	            return 60 / (this._flush + 1);
	        };
	        /**
	         * 获取引擎所在的div宽高
	         * @method getRootDivWH
	         * @public
	         * @since 1.0.0
	         * @param {HTMLDivElement} div
	         * @returns {{w: number, h: number}}
	         */
	        Stage.prototype.getRootDivWH = function (div) {
	            var sw = div.style.width;
	            var sh = div.style.height;
	            var iw = window.innerWidth
	                || document.documentElement.clientWidth
	                || document.body.clientWidth;
	            var ih = window.innerHeight || document.documentElement.clientHeight
	                || document.body.clientHeight;
	            var vW = parseInt(sw);
	            var vH = parseInt(sh);
	            if (vW.toString() == "NaN") {
	                vW = iw;
	            }
	            else {
	                if (sw.indexOf("%") > 0) {
	                    vW *= iw / 100;
	                }
	            }
	            if (vH.toString() == "NaN") {
	                vH = ih;
	            }
	            else {
	                if (sh.indexOf("%") > 0) {
	                    vH *= ih / 100;
	                }
	            }
	            return { w: vW, h: vH };
	        };
	        /**
	         * 当一个stage不再需要使用,或者要从浏览器移除之前,请先停止它,避免内存泄漏
	         * @method kill
	         * @since 1.0.0
	         * @public
	         */
	        Stage.prototype.kill = function () {
	            Stage.removeUpdateObj(this);
	        };
	        Stage.prototype.getBounds = function () {
	            return this.viewRect;
	        };
	        /**
	         *
	         */
	        Stage.flushAll = function () {
	            var len = Stage.allUpdateObjList.length;
	            for (var i = 0; i < len; i++) {
	                Stage.allUpdateObjList[i] && Stage.allUpdateObjList[i].flush();
	            }
	            requestAnimationFrame(Stage.flushAll);
	        };
	        /**
	         * 添加一个刷新对象，这个对象里一定要有一个 flush 函数。
	         * 因为一但添加，这个对象的 flush 函数会以stage的fps间隔调用
	         * 如，你的stage是30fps 那么你这个对象的 flush 函数1秒会调用30次。
	         * @method addUpdateObj
	         * @param target 要循化调用 flush 函数的对象
	         * @public
	         * @since
	         */
	        Stage.addUpdateObj = function (target) {
	            var isHave = false;
	            var len = Stage.allUpdateObjList.length;
	            for (var i = 0; i < len; i++) {
	                if (Stage.allUpdateObjList[i] === target) {
	                    isHave = true;
	                    break;
	                }
	            }
	            if (!isHave) {
	                Stage.allUpdateObjList.push(target);
	            }
	        };
	        /**
	         * 移除掉已经添加的循环刷新对象
	         * @method removeUpdateObj
	         * @param target
	         * @private
	         * @since 1.0.0
	         */
	        Stage.removeUpdateObj = function (target) {
	            var len = Stage.allUpdateObjList.length;
	            for (var i = 0; i < len; i++) {
	                if (Stage.allUpdateObjList[i] === target) {
	                    Stage.allUpdateObjList.splice(i, 1);
	                    break;
	                }
	            }
	        };
	        /**
	         * 上一次鼠标或触碰经过的显示对象列表
	         * @type {Array}
	         * @private
	         */
	        Stage._isLoadedVConsole = false;
	        /**
	         * 要循环调用 flush 函数对象列表
	         * @type {Array}
	         */
	        Stage.allUpdateObjList = [];
	        return Stage;
	    }(annie.Sprite));
	    annie.Stage = Stage;
	})(annie || (annie = {}));
	/**
	 * @module annie
	 */
	var annie;
	(function (annie) {
	    /**
	     * 投影或者发光滤镜
	     * @class annie.ShadowFilter
	     * @extends annie.AObject
	     * @public
	     * @since 1.0.0
	     */
	    var ShadowFilter = (function (_super) {
	        __extends(ShadowFilter, _super);
	        /**
	         * @method ShadowFilter
	         * @param {string} color
	         * @param {number} offsetX
	         * @param {number} offsetY
	         * @param {number} blur
	         */
	        function ShadowFilter(color, offsetX, offsetY, blur) {
	            if (color === void 0) { color = "black"; }
	            if (offsetX === void 0) { offsetX = 2; }
	            if (offsetY === void 0) { offsetY = 2; }
	            if (blur === void 0) { blur = 2; }
	            _super.call(this);
	            /**
	             * 颜色值
	             * @property color
	             * @public
	             * @readonly
	             * @since 1.0.0
	             * @default black
	             * @type {string}
	             */
	            this.color = "black";
	            /**
	             * x方向投影距离
	             * @property offsetX
	             * @public
	             * @readonly
	             * @since 1.0.0
	             * @default 2
	             * @type {number}
	             */
	            this.offsetX = 2;
	            /**
	             * y方向投影距离
	             * @property offsetY
	             * @public
	             * @readonly
	             * @since 1.0.0
	             * @default 2
	             * @type {number}
	             */
	            this.offsetY = 2;
	            /**
	             * 模糊值
	             * @property blur
	             * @public
	             * @readonly
	             * @since 1.0.0
	             * @default 2
	             * @type {number}
	             */
	            this.blur = 2;
	            /**
	             * 滤镜类型 只读
	             * @property color
	             * @public
	             * @readonly
	             * @since 1.0.0
	             * @default Shadow
	             * @type {string}
	             */
	            this.type = "Shadow";
	            var s = this;
	            s.offsetX = offsetX;
	            s.offsetY = offsetY;
	            s.blur = blur;
	            s.color = color;
	        }
	        /**
	         *获取滤镜的字符串表现形式以方便比较两个滤镜是否效果一样
	         * @method toString
	         * @public
	         * @since 1.0.0
	         * @return {string}
	         */
	        ShadowFilter.prototype.toString = function () {
	            var s = this;
	            return s.type + s.offsetX + s.offsetY + s.blur + s.color;
	        };
	        /**
	         * 绘画滤镜效果
	         * @method drawFilter
	         * @public
	         * @since 1.0.0
	         * @param {ImageData} imageData
	         */
	        ShadowFilter.prototype.drawFilter = function (imageData) {
	            if (imageData === void 0) { imageData = null; }
	            //什么也不要做
	        };
	        return ShadowFilter;
	    }(annie.AObject));
	    annie.ShadowFilter = ShadowFilter;
	    /**
	     * 普通变色滤镜
	     * @class annie.ColorFilter
	     * @extends annie.AObject
	     * @public
	     * @since 1.0.0
	     */
	    var ColorFilter = (function (_super) {
	        __extends(ColorFilter, _super);
	        /**
	         * @method ColorFilter
	         * @param {number} redMultiplier
	         * @param {number} greenMultiplier
	         * @param {number} blueMultiplier
	         * @param {number} alphaMultiplier
	         * @param {number} redOffset
	         * @param {number} greenOffset
	         * @param {number} blueOffset
	         * @param {number} alphaOffset
	         */
	        function ColorFilter(redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier, redOffset, greenOffset, blueOffset, alphaOffset) {
	            if (redMultiplier === void 0) { redMultiplier = 1; }
	            if (greenMultiplier === void 0) { greenMultiplier = 1; }
	            if (blueMultiplier === void 0) { blueMultiplier = 1; }
	            if (alphaMultiplier === void 0) { alphaMultiplier = 1; }
	            if (redOffset === void 0) { redOffset = 0; }
	            if (greenOffset === void 0) { greenOffset = 0; }
	            if (blueOffset === void 0) { blueOffset = 0; }
	            if (alphaOffset === void 0) { alphaOffset = 0; }
	            _super.call(this);
	            /**
	             * @property redMultiplier
	             * @public
	             * @since 1.0.0
	             * @readonly
	             * @type {number}
	             */
	            this.redMultiplier = 0;
	            /**
	             * @property redOffset
	             * @public
	             * @readonly
	             * @since 1.0.0
	             * @type {number}
	             */
	            this.redOffset = 0;
	            /**
	             * @property greenMultiplier
	             * @public
	             * @readonly
	             * @since 1.0.0
	             * @type {number}
	             */
	            this.greenMultiplier = 0;
	            /**
	             * @property greenOffset
	             * @public
	             * @readonly
	             * @since 1.0.0
	             * @type {number}
	             */
	            this.greenOffset = 0;
	            /**
	             * @property blueMultiplier
	             * @public
	             * @readonly
	             * @since 1.0.0
	             * @type {number}
	             */
	            this.blueMultiplier = 0;
	            /**
	             * @property blueOffset
	             * @public
	             * @readonly
	             * @since 1.0.0
	             * @type {number}
	             */
	            this.blueOffset = 0;
	            /**
	             * @property alphaMultiplier
	             * @public
	             * @readonly
	             * @since 1.0.0
	             * @type {number}
	             */
	            this.alphaMultiplier = 0;
	            /**
	             * @property alphaOffset
	             * @public
	             * @readonly
	             * @since 1.0.0
	             * @type {number}
	             */
	            this.alphaOffset = 0;
	            /**
	             * @property type
	             * @public
	             * @readonly
	             * @since 1.0.0
	             * @type {string}
	             */
	            this.type = "Color";
	            var s = this;
	            s.redMultiplier = redMultiplier;
	            s.greenMultiplier = greenMultiplier;
	            s.blueMultiplier = blueMultiplier;
	            s.alphaMultiplier = alphaMultiplier;
	            s.redOffset = redOffset;
	            s.greenOffset = greenOffset;
	            s.blueOffset = blueOffset;
	            s.alphaOffset = alphaOffset;
	        }
	        /**
	         * 绘画滤镜效果
	         * @method drawFilter
	         * @param {ImageData} imageData
	         * @since 1.0.0
	         * @public
	         */
	        ColorFilter.prototype.drawFilter = function (imageData) {
	            if (imageData === void 0) { imageData = null; }
	            if (!imageData)
	                return;
	            var s = this;
	            var data = imageData.data;
	            var l = data.length;
	            for (var i = 0; i < l; i += 4) {
	                data[i] = data[i] * s.redMultiplier + s.redOffset;
	                data[i + 1] = data[i + 1] * s.greenMultiplier + s.greenOffset;
	                data[i + 2] = data[i + 2] * s.blueMultiplier + s.blueOffset;
	                data[i + 3] = data[i + 3] * s.alphaMultiplier + s.alphaOffset;
	            }
	        };
	        /**
	         *获取滤镜的字符串表现形式以方便比较两个滤镜是否效果一样
	         * @method toString
	         * @public
	         * @since 1.0.0
	         * @return {string}
	         */
	        ColorFilter.prototype.toString = function () {
	            var s = this;
	            return s.type + s.redMultiplier + s.greenMultiplier + s.blueMultiplier + s.alphaMultiplier + s.redOffset + s.greenOffset + s.blueOffset + s.alphaOffset;
	        };
	        return ColorFilter;
	    }(annie.AObject));
	    annie.ColorFilter = ColorFilter;
	    /**
	     * 矩阵变色滤镜
	     * @class annie.ColorMatrixFilter
	     * @extends annie.AObject
	     * @public
	     * @since 1.0.0
	     */
	    var ColorMatrixFilter = (function (_super) {
	        __extends(ColorMatrixFilter, _super);
	        /**
	         * @method ColorMatrixFilter
	         * @param {number} brightness
	         * @param {number} contrast
	         * @param {number} saturation
	         * @param {number} hue
	         * @public
	         * @since 1.0.0
	         */
	        function ColorMatrixFilter(brightness, contrast, saturation, hue) {
	            _super.call(this);
	            /**
	             * @property brightness
	             * @public
	             * @readonly
	             * @since 1.0.0
	             * @type {number}
	             */
	            this.brightness = 0;
	            /**
	             * @property contrast
	             * @public
	             * @readonly
	             * @since 1.0.0
	             * @type {number}
	             */
	            this.contrast = 0;
	            /**
	             * @property saturation
	             * @public
	             * @readonly
	             * @since 1.0.0
	             * @type {number}
	             */
	            this.saturation = 0;
	            /**
	             * @property hue
	             * @public
	             * @readonly
	             * @since 1.0.0
	             * @type {number}
	             */
	            this.hue = 0;
	            /**
	             * 滤镜类型 只读
	             * @property type
	             * @public
	             * @readonly
	             * @since 1.0.0
	             * @type {string}
	             */
	            this.type = "ColorMatrix";
	            var s = this;
	            s.brightness = brightness;
	            s.contrast = contrast;
	            s.saturation = saturation;
	            s.hue = hue;
	            s.colorMatrix = [
	                1, 0, 0, 0, 0,
	                0, 1, 0, 0, 0,
	                0, 0, 1, 0, 0,
	                0, 0, 0, 1, 0,
	                0, 0, 0, 0, 1
	            ];
	            //brightness
	            brightness = s._cleanValue(brightness, 255);
	            if (brightness != 0) {
	                s._multiplyMatrix([
	                    1, 0, 0, 0, brightness,
	                    0, 1, 0, 0, brightness,
	                    0, 0, 1, 0, brightness,
	                    0, 0, 0, 1, 0,
	                    0, 0, 0, 0, 1
	                ]);
	            }
	            //contrast
	            contrast = this._cleanValue(contrast, 100);
	            var x;
	            if (contrast != 0) {
	                if (contrast < 0) {
	                    x = 127 + contrast / 100 * 127;
	                }
	                else {
	                    x = contrast % 1;
	                    if (x == 0) {
	                        x = ColorMatrixFilter.DELTA_INDEX[contrast];
	                    }
	                    else {
	                        x = ColorMatrixFilter.DELTA_INDEX[(contrast << 0)] * (1 - x) + ColorMatrixFilter.DELTA_INDEX[(contrast << 0) + 1] * x; // use linear interpolation for more granularity.
	                    }
	                    x = x * 127 + 127;
	                }
	                s._multiplyMatrix([
	                    x / 127, 0, 0, 0, 0.5 * (127 - x),
	                    0, x / 127, 0, 0, 0.5 * (127 - x),
	                    0, 0, x / 127, 0, 0.5 * (127 - x),
	                    0, 0, 0, 1, 0,
	                    0, 0, 0, 0, 1
	                ]);
	            }
	            //saturation
	            saturation = this._cleanValue(saturation, 100);
	            if (saturation != 0) {
	                x = 1 + ((saturation > 0) ? 3 * saturation / 100 : saturation / 100);
	                var lumR = 0.3086;
	                var lumG = 0.6094;
	                var lumB = 0.0820;
	                s._multiplyMatrix([
	                    lumR * (1 - x) + x, lumG * (1 - x), lumB * (1 - x), 0, 0,
	                    lumR * (1 - x), lumG * (1 - x) + x, lumB * (1 - x), 0, 0,
	                    lumR * (1 - x), lumG * (1 - x), lumB * (1 - x) + x, 0, 0,
	                    0, 0, 0, 1, 0,
	                    0, 0, 0, 0, 1
	                ]);
	            }
	            //hue
	            hue = this._cleanValue(hue, 180) / 180 * Math.PI;
	            if (hue != 0) {
	                var cosVal = Math.cos(hue);
	                var sinVal = Math.sin(hue);
	                var lumR = 0.213;
	                var lumG = 0.715;
	                var lumB = 0.072;
	                s._multiplyMatrix([
	                    lumR + cosVal * (1 - lumR) + sinVal * (-lumR), lumG + cosVal * (-lumG) + sinVal * (-lumG), lumB + cosVal * (-lumB) + sinVal * (1 - lumB), 0, 0,
	                    lumR + cosVal * (-lumR) + sinVal * (0.143), lumG + cosVal * (1 - lumG) + sinVal * (0.140), lumB + cosVal * (-lumB) + sinVal * (-0.283), 0, 0,
	                    lumR + cosVal * (-lumR) + sinVal * (-(1 - lumR)), lumG + cosVal * (-lumG) + sinVal * (lumG), lumB + cosVal * (1 - lumB) + sinVal * (lumB), 0, 0,
	                    0, 0, 0, 1, 0,
	                    0, 0, 0, 0, 1
	                ]);
	            }
	        }
	        /**
	         * 绘画滤镜效果
	         * @method drawFilter
	         * @param {ImageData} imageData
	         * @since 1.0.0
	         * @public
	         */
	        ColorMatrixFilter.prototype.drawFilter = function (imageData) {
	            if (imageData === void 0) { imageData = null; }
	            if (!imageData)
	                return;
	            var data = imageData.data;
	            var l = data.length;
	            var r, g, b, a;
	            var mtx = this.colorMatrix;
	            var m0 = mtx[0], m1 = mtx[1], m2 = mtx[2], m3 = mtx[3], m4 = mtx[4];
	            var m5 = mtx[5], m6 = mtx[6], m7 = mtx[7], m8 = mtx[8], m9 = mtx[9];
	            var m10 = mtx[10], m11 = mtx[11], m12 = mtx[12], m13 = mtx[13], m14 = mtx[14];
	            var m15 = mtx[15], m16 = mtx[16], m17 = mtx[17], m18 = mtx[18], m19 = mtx[19];
	            for (var i = 0; i < l; i += 4) {
	                r = data[i];
	                g = data[i + 1];
	                b = data[i + 2];
	                a = data[i + 3];
	                data[i] = r * m0 + g * m1 + b * m2 + a * m3 + m4; //red
	                data[i + 1] = r * m5 + g * m6 + b * m7 + a * m8 + m9; //green
	                data[i + 2] = r * m10 + g * m11 + b * m12 + a * m13 + m14; //blue
	                data[i + 3] = r * m15 + g * m16 + b * m17 + a * m18 + m19; //alpha
	            }
	        };
	        ColorMatrixFilter.prototype._multiplyMatrix = function (colorMat) {
	            var i, j, k, col = [];
	            for (i = 0; i < 5; i++) {
	                for (j = 0; j < 5; j++) {
	                    col[j] = this.colorMatrix[j + i * 5];
	                }
	                for (j = 0; j < 5; j++) {
	                    var val = 0;
	                    for (k = 0; k < 5; k++) {
	                        val += colorMat[j + k * 5] * col[k];
	                    }
	                    this.colorMatrix[j + i * 5] = val;
	                }
	            }
	        };
	        ColorMatrixFilter.prototype._cleanValue = function (value, limit) {
	            return Math.min(limit, Math.max(-limit, value));
	        };
	        /**
	         *获取滤镜的字符串表现形式以方便比较两个滤镜是否效果一样
	         * @method toString
	         * @public
	         * @since 1.0.0
	         * @return {string}
	         */
	        ColorMatrixFilter.prototype.toString = function () {
	            var s = this;
	            return s.type + s.brightness + s.hue + s.saturation + s.contrast;
	        };
	        ColorMatrixFilter.DELTA_INDEX = [
	            0, 0.01, 0.02, 0.04, 0.05, 0.06, 0.07, 0.08, 0.1, 0.11,
	            0.12, 0.14, 0.15, 0.16, 0.17, 0.18, 0.20, 0.21, 0.22, 0.24,
	            0.25, 0.27, 0.28, 0.30, 0.32, 0.34, 0.36, 0.38, 0.40, 0.42,
	            0.44, 0.46, 0.48, 0.5, 0.53, 0.56, 0.59, 0.62, 0.65, 0.68,
	            0.71, 0.74, 0.77, 0.80, 0.83, 0.86, 0.89, 0.92, 0.95, 0.98,
	            1.0, 1.06, 1.12, 1.18, 1.24, 1.30, 1.36, 1.42, 1.48, 1.54,
	            1.60, 1.66, 1.72, 1.78, 1.84, 1.90, 1.96, 2.0, 2.12, 2.25,
	            2.37, 2.50, 2.62, 2.75, 2.87, 3.0, 3.2, 3.4, 3.6, 3.8,
	            4.0, 4.3, 4.7, 4.9, 5.0, 5.5, 6.0, 6.5, 6.8, 7.0,
	            7.3, 7.5, 7.8, 8.0, 8.4, 8.7, 9.0, 9.4, 9.6, 9.8,
	            10.0
	        ];
	        return ColorMatrixFilter;
	    }(annie.AObject));
	    annie.ColorMatrixFilter = ColorMatrixFilter;
	    /**
	     * 模糊滤镜
	     * @class annie.BlurFilter
	     * @extends annie.AOjbect
	     * @public
	     * @since 1.0.0
	     */
	    var BlurFilter = (function (_super) {
	        __extends(BlurFilter, _super);
	        /**
	         * @method BlurFilter
	         * @public
	         * @since 1.0.0
	         * @param {number} blurX
	         * @param {number} blurY
	         * @param {number} quality
	         */
	        function BlurFilter(blurX, blurY, quality) {
	            if (blurX === void 0) { blurX = 2; }
	            if (blurY === void 0) { blurY = 2; }
	            if (quality === void 0) { quality = 1; }
	            _super.call(this);
	            /**
	             * 滤镜类型 只读
	             * @property type
	             * @public
	             * @readonly
	             * @since 1.0.0
	             * @type {string}
	             */
	            this.type = "blur";
	            /**
	             * @property blurX
	             * @public
	             * @readonly
	             * @since 1.0.0
	             * @type {number}
	             */
	            this.blurX = 0;
	            /**
	             * @property blurY
	             * @public
	             * @readonly
	             * @since 1.0.0
	             * @type {number}
	             */
	            this.blurY = 0;
	            /**
	             * @property quality
	             * @public
	             * @readonly
	             * @since 1.0.0
	             * @type {number}
	             */
	            this.quality = 1;
	            var s = this;
	            s.blurX = blurX > 8 ? 8 : blurX;
	            s.blurY = blurY > 8 ? 8 : blurY;
	            s.quality = quality > 3 ? 3 : quality;
	        }
	        /**
	         *获取滤镜的字符串表现形式以方便比较两个滤镜是否效果一样
	         * @method toString
	         * @public
	         * @since 1.0.0
	         * @return {string}
	         */
	        BlurFilter.prototype.toString = function () {
	            var s = this;
	            return s.type + s.blurX + s.blurY + s.quality;
	        };
	        /**
	         * 绘画滤镜效果
	         * @method drawFilter
	         * @param {ImageData} imageData
	         * @since 1.0.0
	         * @public
	         */
	        BlurFilter.prototype.drawFilter = function (imageData) {
	            if (imageData === void 0) { imageData = null; }
	            var s = this;
	            var radiusX = s.blurX >> 1;
	            if (isNaN(radiusX) || radiusX < 0)
	                return false;
	            var radiusY = s.blurY >> 1;
	            if (isNaN(radiusY) || radiusY < 0)
	                return false;
	            if (radiusX == 0 && radiusY == 0)
	                return false;
	            var iterations = s.quality;
	            if (isNaN(iterations) || iterations < 1)
	                iterations = 1;
	            iterations |= 0;
	            if (iterations > 3)
	                iterations = 3;
	            if (iterations < 1)
	                iterations = 1;
	            var px = imageData.data;
	            var x = 0, y = 0, i = 0, p = 0, yp = 0, yi = 0, yw = 0, r = 0, g = 0, b = 0, a = 0, pr = 0, pg = 0, pb = 0, pa = 0;
	            var divx = (radiusX + radiusX + 1) | 0;
	            var divy = (radiusY + radiusY + 1) | 0;
	            var w = imageData.width | 0;
	            var h = imageData.height | 0;
	            var w1 = (w - 1) | 0;
	            var h1 = (h - 1) | 0;
	            var rxp1 = (radiusX + 1) | 0;
	            var ryp1 = (radiusY + 1) | 0;
	            var ssx = { r: 0, b: 0, g: 0, a: 0 };
	            var sx = ssx;
	            for (i = 1; i < divx; i++) {
	                sx = sx.n = { r: 0, b: 0, g: 0, a: 0 };
	            }
	            sx.n = ssx;
	            var ssy = { r: 0, b: 0, g: 0, a: 0 };
	            var sy = ssy;
	            for (i = 1; i < divy; i++) {
	                sy = sy.n = { r: 0, b: 0, g: 0, a: 0 };
	            }
	            sy.n = ssy;
	            var si = null;
	            var mtx = BlurFilter.MUL_TABLE[radiusX] | 0;
	            var stx = BlurFilter.SHG_TABLE[radiusX] | 0;
	            var mty = BlurFilter.MUL_TABLE[radiusY] | 0;
	            var sty = BlurFilter.SHG_TABLE[radiusY] | 0;
	            while (iterations-- > 0) {
	                yw = yi = 0;
	                var ms = mtx;
	                var ss = stx;
	                for (y = h; --y > -1;) {
	                    r = rxp1 * (pr = px[(yi) | 0]);
	                    g = rxp1 * (pg = px[(yi + 1) | 0]);
	                    b = rxp1 * (pb = px[(yi + 2) | 0]);
	                    a = rxp1 * (pa = px[(yi + 3) | 0]);
	                    sx = ssx;
	                    for (i = rxp1; --i > -1;) {
	                        sx.r = pr;
	                        sx.g = pg;
	                        sx.b = pb;
	                        sx.a = pa;
	                        sx = sx.n;
	                    }
	                    for (i = 1; i < rxp1; i++) {
	                        p = (yi + ((w1 < i ? w1 : i) << 2)) | 0;
	                        r += (sx.r = px[p]);
	                        g += (sx.g = px[p + 1]);
	                        b += (sx.b = px[p + 2]);
	                        a += (sx.a = px[p + 3]);
	                        sx = sx.n;
	                    }
	                    si = ssx;
	                    for (x = 0; x < w; x++) {
	                        px[yi++] = (r * ms) >>> ss;
	                        px[yi++] = (g * ms) >>> ss;
	                        px[yi++] = (b * ms) >>> ss;
	                        px[yi++] = (a * ms) >>> ss;
	                        p = ((yw + ((p = x + radiusX + 1) < w1 ? p : w1)) << 2);
	                        r -= si.r - (si.r = px[p]);
	                        g -= si.g - (si.g = px[p + 1]);
	                        b -= si.b - (si.b = px[p + 2]);
	                        a -= si.a - (si.a = px[p + 3]);
	                        si = si.n;
	                    }
	                    yw += w;
	                }
	                ms = mty;
	                ss = sty;
	                for (x = 0; x < w; x++) {
	                    yi = (x << 2) | 0;
	                    r = (ryp1 * (pr = px[yi])) | 0;
	                    g = (ryp1 * (pg = px[(yi + 1) | 0])) | 0;
	                    b = (ryp1 * (pb = px[(yi + 2) | 0])) | 0;
	                    a = (ryp1 * (pa = px[(yi + 3) | 0])) | 0;
	                    sy = ssy;
	                    for (i = 0; i < ryp1; i++) {
	                        sy.r = pr;
	                        sy.g = pg;
	                        sy.b = pb;
	                        sy.a = pa;
	                        sy = sy.n;
	                    }
	                    yp = w;
	                    for (i = 1; i <= radiusY; i++) {
	                        yi = (yp + x) << 2;
	                        r += (sy.r = px[yi]);
	                        g += (sy.g = px[yi + 1]);
	                        b += (sy.b = px[yi + 2]);
	                        a += (sy.a = px[yi + 3]);
	                        sy = sy.n;
	                        if (i < h1) {
	                            yp += w;
	                        }
	                    }
	                    yi = x;
	                    si = ssy;
	                    if (iterations > 0) {
	                        for (y = 0; y < h; y++) {
	                            p = yi << 2;
	                            px[p + 3] = pa = (a * ms) >>> ss;
	                            if (pa > 0) {
	                                px[p] = ((r * ms) >>> ss);
	                                px[p + 1] = ((g * ms) >>> ss);
	                                px[p + 2] = ((b * ms) >>> ss);
	                            }
	                            else {
	                                px[p] = px[p + 1] = px[p + 2] = 0;
	                            }
	                            p = (x + (((p = y + ryp1) < h1 ? p : h1) * w)) << 2;
	                            r -= si.r - (si.r = px[p]);
	                            g -= si.g - (si.g = px[p + 1]);
	                            b -= si.b - (si.b = px[p + 2]);
	                            a -= si.a - (si.a = px[p + 3]);
	                            si = si.n;
	                            yi += w;
	                        }
	                    }
	                    else {
	                        for (y = 0; y < h; y++) {
	                            p = yi << 2;
	                            px[p + 3] = pa = (a * ms) >>> ss;
	                            if (pa > 0) {
	                                pa = 255 / pa;
	                                px[p] = ((r * ms) >>> ss) * pa;
	                                px[p + 1] = ((g * ms) >>> ss) * pa;
	                                px[p + 2] = ((b * ms) >>> ss) * pa;
	                            }
	                            else {
	                                px[p] = px[p + 1] = px[p + 2] = 0;
	                            }
	                            p = (x + (((p = y + ryp1) < h1 ? p : h1) * w)) << 2;
	                            r -= si.r - (si.r = px[p]);
	                            g -= si.g - (si.g = px[p + 1]);
	                            b -= si.b - (si.b = px[p + 2]);
	                            a -= si.a - (si.a = px[p + 3]);
	                            si = si.n;
	                            yi += w;
	                        }
	                    }
	                }
	            }
	        };
	        BlurFilter.SHG_TABLE = [0, 9, 10, 11, 9, 12, 10, 11, 12, 9, 13, 13, 10, 9, 13, 13, 14, 14, 14, 14, 10, 13, 14, 14, 14, 13, 13, 13, 9, 14, 14, 14, 15, 14, 15, 14, 15, 15, 14, 15, 15, 15, 14, 15, 15, 15, 15, 15, 14, 15, 15, 15, 15, 15, 15, 12, 14, 15, 15, 13, 15, 15, 15, 15, 16, 16, 16, 15, 16, 14, 16, 16, 14, 16, 13, 16, 16, 16, 15, 16, 13, 16, 15, 16, 14, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 13, 14, 16, 16, 15, 16, 16, 10, 16, 15, 16, 14, 16, 16, 14, 16, 16, 14, 16, 16, 14, 15, 16, 16, 16, 14, 15, 14, 15, 13, 16, 16, 15, 17, 17, 17, 17, 17, 17, 14, 15, 17, 17, 16, 16, 17, 16, 15, 17, 16, 17, 11, 17, 16, 17, 16, 17, 16, 17, 17, 16, 17, 17, 16, 17, 17, 16, 16, 17, 17, 17, 16, 14, 17, 17, 17, 17, 15, 16, 14, 16, 15, 16, 13, 16, 15, 16, 14, 16, 15, 16, 12, 16, 15, 16, 17, 17, 17, 17, 17, 13, 16, 15, 17, 17, 17, 16, 15, 17, 17, 17, 16, 15, 17, 17, 14, 16, 17, 17, 16, 17, 17, 16, 15, 17, 16, 14, 17, 16, 15, 17, 16, 17, 17, 16, 17, 15, 16, 17, 14, 17, 16, 15, 17, 16, 17, 13, 17, 16, 17, 17, 16, 17, 14, 17, 16, 17, 16, 17, 16, 17, 9];
	        BlurFilter.MUL_TABLE = [1, 171, 205, 293, 57, 373, 79, 137, 241, 27, 391, 357, 41, 19, 283, 265, 497, 469, 443, 421, 25, 191, 365, 349, 335, 161, 155, 149, 9, 278, 269, 261, 505, 245, 475, 231, 449, 437, 213, 415, 405, 395, 193, 377, 369, 361, 353, 345, 169, 331, 325, 319, 313, 307, 301, 37, 145, 285, 281, 69, 271, 267, 263, 259, 509, 501, 493, 243, 479, 118, 465, 459, 113, 446, 55, 435, 429, 423, 209, 413, 51, 403, 199, 393, 97, 3, 379, 375, 371, 367, 363, 359, 355, 351, 347, 43, 85, 337, 333, 165, 327, 323, 5, 317, 157, 311, 77, 305, 303, 75, 297, 294, 73, 289, 287, 71, 141, 279, 277, 275, 68, 135, 67, 133, 33, 262, 260, 129, 511, 507, 503, 499, 495, 491, 61, 121, 481, 477, 237, 235, 467, 232, 115, 457, 227, 451, 7, 445, 221, 439, 218, 433, 215, 427, 425, 211, 419, 417, 207, 411, 409, 203, 202, 401, 399, 396, 197, 49, 389, 387, 385, 383, 95, 189, 47, 187, 93, 185, 23, 183, 91, 181, 45, 179, 89, 177, 11, 175, 87, 173, 345, 343, 341, 339, 337, 21, 167, 83, 331, 329, 327, 163, 81, 323, 321, 319, 159, 79, 315, 313, 39, 155, 309, 307, 153, 305, 303, 151, 75, 299, 149, 37, 295, 147, 73, 291, 145, 289, 287, 143, 285, 71, 141, 281, 35, 279, 139, 69, 275, 137, 273, 17, 271, 135, 269, 267, 133, 265, 33, 263, 131, 261, 130, 259, 129, 257, 1];
	        return BlurFilter;
	    }(annie.AObject));
	    annie.BlurFilter = BlurFilter;
	})(annie || (annie = {}));
	/**
	 * @module annie
	 */
	var annie;
	(function (annie) {
	    /**
	     * Canvas 渲染器
	     * @class annie.CanvasRender
	     * @extends annie.AObject
	     * @implements IRender
	     * @public
	     * @since 1.0.0
	     */
	    var CanvasRender = (function (_super) {
	        __extends(CanvasRender, _super);
	        /**
	         * @CanvasRender
	         * @param {annie.Stage} stage
	         * @public
	         * @since 1.0.0
	         */
	        function CanvasRender(stage) {
	            _super.call(this);
	            /**
	             * 渲染器所在最上层的对象
	             * @property rootContainer
	             * @public
	             * @since 1.0.0
	             * @type {any}
	             * @default null
	             */
	            this.rootContainer = null;
	            this._stage = stage;
	        }
	        /**
	         * 开始渲染时执行
	         * @method begin
	         * @since 1.0.0
	         * @public
	         */
	        CanvasRender.prototype.begin = function () {
	            var s = this;
	            var c = s.rootContainer;
	            s._ctx.setTransform(1, 0, 0, 1, 0, 0);
	            if (s._stage.bgColor != "") {
	                s._ctx.fillStyle = s._stage.bgColor;
	                s._ctx.fillRect(0, 0, c.width + 1, c.height + 1);
	            }
	            else {
	                s._ctx.clearRect(0, 0, c.width + 1, c.height + 1);
	            }
	        };
	        /**
	         * 开始有遮罩时调用
	         * @method beginMask
	         * @param {annie.DisplayObject} target
	         * @public
	         * @since 1.0.0
	         */
	        CanvasRender.prototype.beginMask = function (target) {
	            var s = this;
	            var isHadPath = false;
	            if (target.children && target.children.length > 0) {
	                target = target.children[0];
	            }
	            if (target._command) {
	                s._ctx.save();
	                s._ctx.globalAlpha = 0;
	                var tm = target.cMatrix;
	                s._ctx.setTransform(tm.a, tm.b, tm.c, tm.d, tm.tx, tm.ty);
	                var data;
	                var cLen = target._command.length;
	                for (var i = 0; i < cLen; i++) {
	                    data = target._command[i];
	                    if (data[0] == 1) {
	                        isHadPath = true;
	                        var paramsLen = data[2].length;
	                        if (paramsLen == 0) {
	                            s._ctx[data[1]]();
	                        }
	                        else if (paramsLen == 2) {
	                            s._ctx[data[1]](data[2][0], data[2][1]);
	                        }
	                        else if (paramsLen == 4) {
	                            s._ctx[data[1]](data[2][0], data[2][1], data[2][2], data[2][3]);
	                        }
	                        else if (paramsLen == 5) {
	                            s._ctx[data[1]](data[2][0], data[2][1], data[2][2], data[2][3], data[2][4]);
	                        }
	                        else if (paramsLen == 6) {
	                            s._ctx[data[1]](data[2][0], data[2][1], data[2][2], data[2][3], data[2][4], data[2][5]);
	                        }
	                    }
	                }
	                s._ctx.restore();
	            }
	            //和后面endMask的restore对应
	            s._ctx.save();
	            if (isHadPath) {
	                s._ctx.clip();
	            }
	        };
	        /**
	         * 结束遮罩时调用
	         * @method endMask
	         * @public
	         * @since 1.0.0
	         */
	        CanvasRender.prototype.endMask = function () {
	            this._ctx.restore();
	        };
	        /**
	         * 调用渲染
	         * @public
	         * @since 1.0.0
	         * @method draw
	         * @param {annie.DisplayObject} target 显示对象
	         * @param {number} type 0图片 1矢量 2文字 3容器
	         */
	        CanvasRender.prototype.draw = function (target, type) {
	            var s = this;
	            if (!target._cacheImg || (target._cacheImg.nodeName == "IMG" && !target._cacheImg.complete))
	                return;
	            //s._ctx.save();
	            s._ctx.globalAlpha = target.cAlpha;
	            var tm = target.cMatrix;
	            s._ctx.setTransform(tm.a, tm.b, tm.c, tm.d, tm.tx, tm.ty);
	            if (type == 0) {
	                //图片
	                if (target._cacheImg) {
	                    var tr = target.rect;
	                    //因为如果有滤镜的话是重新画了图的,所以尺寸什么的跟SpriteSheet无关了
	                    if (tr && !target._isCache) {
	                        s._ctx.drawImage(target._cacheImg, tr.x, tr.y, tr.width, tr.height, 0, 0, tr.width, tr.height);
	                    }
	                    else {
	                        s._ctx.translate(target._cacheX, target._cacheY);
	                        s._ctx.drawImage(target._cacheImg, 0, 0);
	                    }
	                }
	            }
	            else {
	                //矢量和文字
	                if (target._cacheImg) {
	                    //需要渲染缓存
	                    s._ctx.translate(target._cacheX, target._cacheY);
	                    s._ctx.drawImage(target._cacheImg, 0, 0);
	                }
	            }
	            //s._ctx.restore();
	        };
	        /**
	         * 初始化渲染器
	         * @public
	         * @since 1.0.0
	         * @method init
	         */
	        CanvasRender.prototype.init = function () {
	            var s = this;
	            if (!s.rootContainer) {
	                s.rootContainer = document.createElement("canvas");
	                s._stage.rootDiv.appendChild(s.rootContainer);
	            }
	            var c = s.rootContainer;
	            s._ctx = c["getContext"]('2d');
	        };
	        /**
	         * 当舞台尺寸改变时会调用
	         * @public
	         * @since 1.0.0
	         * @method reSize
	         */
	        CanvasRender.prototype.reSize = function () {
	            var s = this;
	            var c = s.rootContainer;
	            c.width = s._stage.divWidth * annie.devicePixelRatio;
	            c.height = s._stage.divHeight * annie.devicePixelRatio;
	            c.style.width = s._stage.divWidth + "px";
	            c.style.height = s._stage.divHeight + "px";
	        };
	        return CanvasRender;
	    }(annie.AObject));
	    annie.CanvasRender = CanvasRender;
	})(annie || (annie = {}));
	/**
	 * @module annie
	 */
	var annie;
	(function (annie) {
	    /**
	     * WebGl 渲染器
	     * @class annie.WGRender
	     * @extends annie.AObject
	     * @implements IRender
	     * @public
	     * @since 1.0.2
	     */
	    var WGRender = (function (_super) {
	        __extends(WGRender, _super);
	        /**
	         * @CanvasRender
	         * @param {annie.Stage} stage
	         * @public
	         * @since 1.0.2
	         */
	        function WGRender(stage) {
	            _super.call(this);
	            /**
	             * 渲染器所在最上层的对象
	             * @property rootContainer
	             * @public
	             * @since 1.0.2
	             * @type {any}
	             * @default null
	             */
	            this.rootContainer = null;
	            this._maxTextureCount = 32;
	            this._uniformTexture = 0;
	            this._uniformMaskTexture = 0;
	            this._posAttr = 0;
	            this._textAttr = 0;
	            this._maskObjList = [];
	            this._maskTexture = null;
	            this._maskSrcTexture = null;
	            this._textures = [];
	            this._curTextureId = -1;
	            this._stage = stage;
	        }
	        /**
	         * 开始渲染时执行
	         * @method begin
	         * @since 1.0.2
	         * @public
	         */
	        WGRender.prototype.begin = function () {
	            var s = this;
	            var gl = s._gl;
	            if (s._stage.bgColor != "") {
	                var color = s._stage.bgColor;
	                var r = parseInt("0x" + color.substr(1, 2));
	                var g = parseInt("0x" + color.substr(3, 2));
	                var b = parseInt("0x" + color.substr(5, 2));
	                gl.clearColor(r / 255, g / 255, b / 255, 1.0);
	            }
	            else {
	                gl.clearColor(0.0, 0.0, 0.0, 0.0);
	            }
	            gl.clear(gl.COLOR_BUFFER_BIT);
	            s._maskObjList = [];
	        };
	        /**
	         * 开始有遮罩时调用
	         * @method beginMask
	         * @param {annie.DisplayObject} target
	         * @public
	         * @since 1.0.2
	         */
	        WGRender.prototype.beginMask = function (target) {
	            //更新缓冲模板
	            var s = this;
	            var gl = s._gl;
	            gl.bindFramebuffer(gl.FRAMEBUFFER, s._maskFbo);
	            gl.viewport(0, 0, 1024, 1024);
	            gl.disable(gl.BLEND);
	            if (s._maskObjList.length == 0) {
	                gl.clearColor(0.0, 0.0, 0.0, 0.0);
	                gl.clear(gl.COLOR_BUFFER_BIT);
	                gl.bindTexture(gl.TEXTURE_2D, s._maskTexture);
	                gl.copyTexImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 0, 0, 1024, 1024, 0);
	            }
	            s._maskObjList.push(target);
	            //告诉shader这个时候是画遮罩本身的帧缓冲
	            gl.uniform1i(s._uMask, s._maskObjList.length * 100);
	            s.draw(target, 1);
	            gl.bindTexture(gl.TEXTURE_2D, s._maskTexture);
	            gl.copyTexImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 0, 0, 1024, 1024, 0);
	            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	            gl.uniform1i(s._uMask, s._maskObjList.length);
	            gl.viewport(0, 0, s._dW, s._dH);
	            gl.enable(gl.BLEND);
	        };
	        /**
	         * 结束遮罩时调用
	         * @method endMask
	         * @public
	         * @since 1.0.2
	         */
	        WGRender.prototype.endMask = function () {
	            var s = this;
	            var gl = s._gl;
	            var len = s._maskObjList.length;
	            if (len > 1) {
	                s._maskObjList.pop();
	                var mlCopy = s._maskObjList.concat();
	                s._maskObjList.length = 0;
	                for (var i = 0; i < mlCopy.length; i++) {
	                    s.beginMask(mlCopy[i]);
	                }
	            }
	            else {
	                gl.uniform1i(s._uMask, 0);
	                s._maskObjList.length = 0;
	            }
	        };
	        /**
	         * 当舞台尺寸改变时会调用
	         * @public
	         * @since 1.0.2
	         * @method reSize
	         */
	        WGRender.prototype.reSize = function () {
	            var s = this;
	            var c = s.rootContainer;
	            c.width = s._stage.divWidth * annie.devicePixelRatio;
	            c.height = s._stage.divHeight * annie.devicePixelRatio;
	            c.style.width = s._stage.divWidth + "px";
	            c.style.height = s._stage.divHeight + "px";
	            s._gl.viewport(0, 0, c.width, c.height);
	            s._dW = c.width;
	            s._dH = c.height;
	            s._pMatrix = new Float32Array([
	                1 / s._dW * 2, 0.0, 0.0,
	                0.0, -1 / s._dH * 2, 0.0,
	                -1.0, 1.0, 1.0
	            ]);
	        };
	        WGRender.prototype._getShader = function (id) {
	            var s = this;
	            var gl = s._gl;
	            // Find the shader script element
	            var shaderText = "";
	            // Create the shader object instance
	            var shader = null;
	            if (id == 0) {
	                shaderText = 'precision highp float;' +
	                    'varying vec2 v_TC;' +
	                    'varying vec2 v_MP;' +
	                    'uniform sampler2D u_texture;' +
	                    'uniform sampler2D u_maskTexture;' +
	                    'uniform float u_A;' +
	                    'uniform int u_Mask;' +
	                    'void main() {' +
	                    'if(u_Mask==0){' +
	                    'gl_FragColor = texture2D(u_texture, v_TC)*u_A;' +
	                    '}else if(u_Mask>=100){' +
	                    'vec4 textColor = texture2D(u_texture, v_TC);' +
	                    'gl_FragColor = texture2D(u_maskTexture, v_MP);' +
	                    'if(textColor.a>0.0){if(u_Mask==100){gl_FragColor.r=textColor.a;}else if(u_Mask==200&&gl_FragColor.r>0.0){gl_FragColor.g=textColor.a;}else if(u_Mask==300&&gl_FragColor.r>0.0&&gl_FragColor.g>0.0){gl_FragColor.b=textColor.a;}else if(u_Mask==400&&gl_FragColor.r>0.0&&gl_FragColor.g>0.0&&gl_FragColor.b>0.0){gl_FragColor.a=textColor.a;}}' +
	                    '}else{' +
	                    'vec4 textColor=texture2D(u_maskTexture, v_MP);' +
	                    'float maskStep=0.0;' +
	                    'if(u_Mask==1){' +
	                    'maskStep=textColor.r;' +
	                    '}else if(u_Mask==2){' +
	                    'maskStep=textColor.g;' +
	                    '}else if(u_Mask==3){' +
	                    'maskStep=textColor.b;' +
	                    '}else if(u_Mask==4){' +
	                    'maskStep=textColor.a;' +
	                    '}' +
	                    'gl_FragColor = texture2D(u_texture, v_TC)*u_A*maskStep;' +
	                    '}' +
	                    '}';
	                shader = gl.createShader(gl.FRAGMENT_SHADER);
	            }
	            else {
	                shaderText = 'precision highp float;' +
	                    'attribute vec2 a_P;' +
	                    'attribute vec2 a_TC;' +
	                    'varying vec2 v_TC;' +
	                    'varying vec2 v_MP;' +
	                    'uniform mat3 vMatrix;' +
	                    'uniform mat3 pMatrix;' +
	                    'void main() {' +
	                    'gl_Position =vec4((pMatrix*vMatrix*vec3(a_P, 1.0)).xy, 1.0, 1.0);' +
	                    'v_MP=(gl_Position.xy+vec2(1.0,1.0))*0.5;' +
	                    'v_TC = a_TC;' +
	                    '}';
	                shader = gl.createShader(gl.VERTEX_SHADER);
	            }
	            // Set the shader source code in the shader object instance and compile the shader
	            gl.shaderSource(shader, shaderText);
	            gl.compileShader(shader);
	            // Attach the shaders to the shader program
	            gl.attachShader(s._program, shader);
	            return shader;
	        };
	        /**
	         * 初始化渲染器
	         * @public
	         * @since 1.0.2
	         * @method init
	         */
	        WGRender.prototype.init = function () {
	            var s = this;
	            if (!s.rootContainer) {
	                s.rootContainer = document.createElement("canvas");
	                s._stage.rootDiv.appendChild(s.rootContainer);
	            }
	            var c = s.rootContainer;
	            var gl = c.getContext("webgl") || c.getContext('experimental-webgl');
	            s._gl = gl;
	            s._program = gl.createProgram();
	            var _program = s._program;
	            //初始化顶点着色器和片元着色器
	            s._getShader(0);
	            s._getShader(1);
	            //链接到gpu
	            gl.linkProgram(_program);
	            //使用当前编译的程序
	            gl.useProgram(_program);
	            //改变y轴方向,以对应纹理坐标
	            //gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
	            //设置支持有透明度纹理
	            gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
	            //取消深度检测
	            gl.disable(gl.DEPTH_TEST);
	            //开启混合模式
	            gl.enable(gl.BLEND);
	            gl.disable(gl.CULL_FACE);
	            gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
	            // 新建缓存
	            s._buffer = gl.createBuffer();
	            //
	            s._pMI = gl.getUniformLocation(s._program, 'pMatrix');
	            s._vMI = gl.getUniformLocation(s._program, 'vMatrix');
	            s._uA = gl.getUniformLocation(s._program, 'u_A');
	            s._uMask = gl.getUniformLocation(s._program, 'u_Mask');
	            //
	            s._cM = new annie.Matrix();
	            s._maxTextureCount = 3; // gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
	            s._uniformTexture = gl.getUniformLocation(s._program, "u_texture");
	            s._uniformMaskTexture = gl.getUniformLocation(s._program, "u_maskTexture");
	            s._posAttr = gl.getAttribLocation(s._program, "a_P");
	            s._textAttr = gl.getAttribLocation(s._program, "a_TC");
	            gl.enableVertexAttribArray(s._posAttr);
	            gl.enableVertexAttribArray(s._textAttr);
	            s.initMaskBuffer();
	        };
	        WGRender.prototype.setBuffer = function (buffer, data) {
	            var s = this;
	            var gl = s._gl;
	            //绑定buffer
	            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	            gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
	            //将buffer赋值给一变量
	            gl.vertexAttribPointer(s._posAttr, 2, gl.FLOAT, false, 4 * 4, 0);
	            gl.vertexAttribPointer(s._textAttr, 2, gl.FLOAT, false, 4 * 4, 4 * 2);
	        };
	        /**
	         *  调用渲染
	         * @public
	         * @since 1.0.2
	         * @method draw
	         * @param {annie.DisplayObject} target 显示对象
	         * @param {number} type 0图片 1矢量 2文字 3容器
	         */
	        WGRender.prototype.draw = function (target, type) {
	            var s = this;
	            if (!target._cacheImg || (target._cacheImg.nodeName == "IMG" && !target._cacheImg.complete))
	                return;
	            var gl = s._gl;
	            var gi = target._glInfo;
	            ////////////////////////////////////////////
	            var vertices = [
	                //x,y,textureX,textureY
	                0.0, 0.0, gi.x, gi.y,
	                gi.pw, 0.0, gi.w, gi.y,
	                0.0, gi.ph, gi.x, gi.h,
	                gi.pw, gi.ph, gi.w, gi.h
	            ];
	            var img = target._cacheImg;
	            var m;
	            if (img._annieType > 0) {
	                m = s._cM;
	                m.identity();
	                if (img._annieType == 2) {
	                    m.tx = target._cacheX * 2;
	                    m.ty = target._cacheY * 2;
	                }
	                else {
	                    m.tx = -img.width;
	                    m.ty = -img.height;
	                }
	                m.prepend(target.cMatrix);
	            }
	            else {
	                m = target.cMatrix;
	            }
	            var vMatrix = new Float32Array([
	                m.a, m.b, 0,
	                m.c, m.d, 0,
	                m.tx, m.ty, 1
	            ]);
	            //if(s._maskObjList.length>0) {
	            gl.uniform1i(s._uniformMaskTexture, s.activeTexture(s._maskTexture, true));
	            //}
	            gl.uniform1i(s._uniformTexture, s.activeTexture(img.texture));
	            s.setBuffer(s._buffer, new Float32Array(vertices));
	            gl.uniform1f(s._uA, target.cAlpha);
	            gl.uniformMatrix3fv(s._pMI, false, s._pMatrix);
	            gl.uniformMatrix3fv(s._vMI, false, vMatrix);
	            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
	        };
	        WGRender.prototype.activeTexture = function (texture, isMaskTexture) {
	            if (isMaskTexture === void 0) { isMaskTexture = false; }
	            var s = this;
	            var gl = s._gl;
	            var newId = -1;
	            var isHave = false;
	            if (isMaskTexture) {
	                newId = 0;
	                if (s._textures[0] == texture) {
	                    isHave = true;
	                }
	            }
	            else {
	                for (var i = 1; i < s._maxTextureCount; i++) {
	                    if (s._textures[i] == null) {
	                        newId = i;
	                        break;
	                    }
	                    if (s._textures[i] == texture) {
	                        newId = i;
	                        isHave = true;
	                        break;
	                    }
	                }
	                if (newId < 0) {
	                    if (s._curTextureId < s._maxTextureCount - 1) {
	                        s._curTextureId++;
	                    }
	                    else {
	                        s._curTextureId = 1;
	                    }
	                    newId = s._curTextureId;
	                }
	            }
	            gl.activeTexture(gl["TEXTURE" + newId]);
	            //if(!isHave||newId ==0) {
	            gl.bindTexture(gl.TEXTURE_2D, texture);
	            //}
	            s._textures[newId] = texture;
	            return newId;
	        };
	        WGRender.prototype.initMaskBuffer = function () {
	            var s = this;
	            s._maskFbo = s.createFramebuffer(1024, 1024);
	            s._maskSrcTexture = s._maskFbo.texture;
	            s._maskTexture = s.createTexture(null, 1024, 1024);
	        };
	        WGRender.prototype.createTexture = function (bitmapData, width, height) {
	            if (bitmapData === void 0) { bitmapData = null; }
	            if (width === void 0) { width = 1; }
	            if (height === void 0) { height = 1; }
	            var gl = this._gl;
	            var texture = gl.createTexture();
	            gl.bindTexture(gl.TEXTURE_2D, texture);
	            var b = bitmapData;
	            var h, w;
	            if (bitmapData) {
	                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, bitmapData);
	                w = bitmapData.width;
	                h = bitmapData.height;
	            }
	            else {
	                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
	                w = width;
	                h = height;
	            }
	            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	            texture.bitmapData = b;
	            texture.width = w;
	            texture.height = h;
	            gl.bindTexture(gl.TEXTURE_2D, null);
	            return texture;
	        };
	        WGRender.prototype.updateTexture = function (texture, bitmapData) {
	            var s = this;
	            var gl = s._gl;
	            gl.bindTexture(gl.TEXTURE_2D, texture);
	            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, bitmapData);
	            gl.bindTexture(gl.TEXTURE_2D, null);
	        };
	        WGRender.prototype.createFramebuffer = function (width, height) {
	            var s = this;
	            var gl = s._gl;
	            var fb = gl.createFramebuffer();
	            fb.width = width;
	            fb.height = height;
	            gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
	            var texture = s.createTexture(null, width, height);
	            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
	            fb.texture = texture;
	            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	            return fb;
	        };
	        /**
	         * 设置webgl要渲染的东西
	         * @method _setGlInfo
	         * @param target
	         * @param type
	         * @private
	         * @since 1.0.2
	         */
	        WGRender.setDisplayInfo = function (target, type) {
	            //判断是不是webgl渲染模式
	            if (!target.stage || target.stage.renderType != 1)
	                return;
	            if (target.stage) {
	                var gi = target._glInfo;
	                var renderObj = target.stage.renderObj;
	                var tc = target.rect;
	                var img = target._cacheImg;
	                if (tc) {
	                    gi.x = tc.x / img.width;
	                    gi.y = tc.y / img.height;
	                    gi.w = (tc.x + tc.width) / img.width;
	                    gi.h = (tc.y + tc.height) / img.height;
	                    gi.pw = tc.width;
	                    gi.ph = tc.height;
	                }
	                else {
	                    var cX = target._cacheX;
	                    var cY = target._cacheY;
	                    gi.x = cX / img.width;
	                    gi.y = cY / img.height;
	                    gi.w = (img.width - cX) / img.width;
	                    gi.h = (img.height - cY) / img.height;
	                    gi.pw = (img.width - cX * 2);
	                    gi.ph = (img.height - cY * 2);
	                    //因为不是雪碧图有可能中途更新了效果，但引用没变，所以需要标记告诉webgl需要更新纹理
	                    img._annieType = type;
	                    if (img.texture) {
	                        renderObj.updateTexture(img.texture, img);
	                    }
	                }
	            }
	            if (!img.texture) {
	                img.texture = renderObj.createTexture(img);
	            }
	        };
	        return WGRender;
	    }(annie.AObject));
	    annie.WGRender = WGRender;
	})(annie || (annie = {}));
	/**
	 * @module annie
	 */
	var annie;
	(function (annie) {
	    var Eval = eval.bind(window);
	    /**
	     * 资源加载类,后台请求,加载资源和后台交互都可以使用此类
	     * @class annie.URLLoader
	     * @extends annie.EventDispatcher
	     * @public
	     * @since 1.0.0
	     */
	    var URLLoader = (function (_super) {
	        __extends(URLLoader, _super);
	        /**
	         * @param type text json js xml image sound css svg video unKnow
	         */
	        function URLLoader() {
	            _super.call(this);
	            /**
	             * 后台返回来的数据类弄
	             * @property responseType
	             * @type {string}
	             * @default null
	             * @public
	             * @since 1.0.0
	             */
	            this.responseType = null;
	            /**
	             * 请求的url地址
	             * @property url
	             * @public
	             * @since 1.0.0
	             * @type {string}
	             */
	            this.url = "";
	            /**
	             * 请求后台的类型 get post
	             * @property method
	             * @type {string}
	             * @default get
	             * @public
	             * @since 1.0.0
	             */
	            this.method = "get";
	            /**
	             * 需要像后台传送的数据对象
	             * @property data
	             * @public
	             * @since 1.0.0
	             * @default null
	             * @type {Object}
	             */
	            this.data = null;
	            /**
	             * 格式化post请求参数
	             * @method _fqs
	             * @param data
	             * @param query
	             * @return {string}
	             * @private
	             * @since 1.0.0
	             */
	            this._fqs = function (data, query) {
	                var params = [];
	                if (data) {
	                    for (var n in data) {
	                        params.push(encodeURIComponent(n) + "=" + encodeURIComponent(data[n]));
	                    }
	                }
	                if (query) {
	                    params = params.concat(query);
	                }
	                return params.join("&");
	            };
	            //formatURIString
	            /**
	             * 格式化get 请求参数
	             * @method _fus
	             * @param src
	             * @param data
	             * @return {any}
	             * @private
	             */
	            this._fus = function (src, data) {
	                var s = this;
	                if (data == null || data == "") {
	                    return src;
	                }
	                var query = [];
	                var idx = src.indexOf("?");
	                if (idx != -1) {
	                    var q = src.slice(idx + 1);
	                    query = query.concat(q.split("&"));
	                    return src.slice(0, idx) + "?" + s._fqs(data, query);
	                }
	                else {
	                    return src + "?" + s._fqs(data, query);
	                }
	            };
	        }
	        /**
	         * 取消加载
	         * @method loadCancel
	         * @public
	         * @since 1.0.0
	         */
	        URLLoader.prototype.loadCancel = function () {
	            var s = this;
	            if (s._req) {
	                s._req.abort();
	            }
	        };
	        /**
	         * 加载或请求数据
	         * @method load
	         * @public
	         * @since 1.0.0
	         * @param {string} url
	         * @param {boolean} isBinaryData 是否向后台发送二进制数据包手blob byteArray等
	         */
	        URLLoader.prototype.load = function (url, isBinaryData) {
	            if (isBinaryData === void 0) { isBinaryData = false; }
	            var s = this;
	            s.loadCancel();
	            if (s.responseType == null || s.responseType == "") {
	                //看看是什么后缀
	                var urlSplit = url.split(".");
	                var extStr = urlSplit[urlSplit.length - 1];
	                var ext = extStr.split("?")[0].toLocaleLowerCase();
	                if (ext == "mp3" || ext == "ogg" || ext == "wav") {
	                    s.responseType = "sound";
	                }
	                else if (ext == "jpg" || ext == "jpeg" || ext == "png" || ext == "gif") {
	                    s.responseType = "image";
	                }
	                else if (ext == "css") {
	                    s.responseType = "css";
	                }
	                else if (ext == "mp4") {
	                    s.responseType = "video";
	                }
	                else if (ext == "svg") {
	                    s.responseType = "svg";
	                }
	                else if (ext == "xml") {
	                    s.responseType = "xml";
	                }
	                else if (ext == "json") {
	                    s.responseType = "json";
	                }
	                else if (ext == "txt") {
	                    s.responseType = "text";
	                }
	                else if (ext == "js") {
	                    s.responseType = "js";
	                }
	                else {
	                    s.responseType = "unKnow";
	                }
	            }
	            var req = null;
	            if (!s._req) {
	                s._req = new XMLHttpRequest();
	                req = s._req;
	                req.timeout = 5000;
	                req.withCredentials = false;
	                req.onprogress = function (event) {
	                    if (!event || event.loaded > 0 && event.total == 0) {
	                        return; // Sometimes we get no "total", so just ignore the progress event.
	                    }
	                    s.dispatchEvent("onProgress", { loadedBytes: event.loaded, totalBytes: event.total });
	                };
	                req.onerror = function (event) {
	                    reSendTimes++;
	                    if (reSendTimes > 3) {
	                        s.dispatchEvent("onError", event["message"]);
	                    }
	                    else {
	                        //断线重连
	                        req.abort();
	                        if (!s.data) {
	                            req.send();
	                        }
	                        else {
	                            if (isBinaryData) {
	                                req.send(s.data);
	                            }
	                            else {
	                                req.send(s._fqs(s.data, null));
	                            }
	                        }
	                    }
	                };
	                req.onreadystatechange = function (event) {
	                    var t = event.target;
	                    if (t["readyState"] == 4) {
	                        var e = new annie.Event("onComplete");
	                        var result = t["response"];
	                        e.data = { type: s.responseType, response: null };
	                        var item;
	                        switch (s.responseType) {
	                            case "css":
	                                item = document.createElement("link");
	                                item.rel = "stylesheet";
	                                item.href = s.url;
	                                break;
	                            case "image":
	                            case "sound":
	                            case "video":
	                                var isBlob = true;
	                                if (s.responseType == "image") {
	                                    item = document.createElement("img");
	                                    item.onload = function () {
	                                        if (isBlob) {
	                                            URL.revokeObjectURL(item.src);
	                                        }
	                                        item.onload = null;
	                                    };
	                                }
	                                else {
	                                    if (s.responseType == "sound") {
	                                        item = document.createElement("AUDIO");
	                                    }
	                                    else if (s.responseType == "video") {
	                                        item = document.createElement("VIDEO");
	                                    }
	                                    item.preload = true;
	                                    item.load();
	                                    item.onloadeddata = function () {
	                                        if (isBlob) {
	                                        }
	                                        item.onloadeddata = null;
	                                    };
	                                }
	                                try {
	                                    item.src = URL.createObjectURL(result);
	                                }
	                                catch (err) {
	                                    isBlob = false;
	                                    item.src = s.url;
	                                }
	                                break;
	                            case "json":
	                                item = JSON.parse(result);
	                                break;
	                            case "xml":
	                                item = t["responseXML"];
	                                break;
	                            case "js":
	                                Eval(result);
	                                break;
	                            case "text":
	                            case "unKnow":
	                            default:
	                                item = result;
	                                break;
	                        }
	                        e.data["response"] = item;
	                        s.data = null;
	                        s.responseType = "";
	                        //req.onerror = null;
	                        //s._req.onreadystatechange=null;
	                        //req.onprogress = null;
	                        s.dispatchEvent(e);
	                    }
	                };
	            }
	            else {
	                req = s._req;
	            }
	            var reSendTimes = 0;
	            if (s.data && s.method.toLocaleLowerCase() == "get") {
	                s.url = s._fus(url, s.data);
	                s.data = null;
	            }
	            else {
	                s.url = url;
	            }
	            if (s.responseType == "image" || s.responseType == "sound" || s.responseType == "video") {
	                req.responseType = "blob";
	            }
	            else {
	                req.responseType = "text";
	            }
	            req.open(s.method, s.url, true);
	            if (!s.data) {
	                req.send();
	            }
	            else {
	                req.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8");
	                if (isBinaryData) {
	                    req.send(s.data);
	                }
	                else {
	                    req.send(s._fqs(s.data, null));
	                }
	            }
	            /*req.onloadstart = function (e) {
	             s.dispatchEvent("onStart");
	             };*/
	        };
	        return URLLoader;
	    }(annie.EventDispatcher));
	    annie.URLLoader = URLLoader;
	})(annie || (annie = {}));
	/**
	 * @module annie
	 */
	var annie;
	(function (annie) {
	    /**
	     * 资源加载管理模块
	     * @module annie.RESManager
	     * @class annie.RESManager
	     */
	    var RESManager;
	    (function (RESManager) {
	        /**
	         * 存储加载资源的总对象
	         * @type {Object}
	         */
	        var res = {};
	        /**
	         * 加载器是否正在加载中
	         */
	        var _isLoading;
	        /**
	         * 加载中的场景名列表
	         */
	        var _loadSceneNames;
	        /**
	         * 加载地址的域名地址或前缀
	         */
	        var _domain;
	        /**
	         * 当前加载到哪一个资源
	         */
	        var _loadIndex;
	        /**
	         * 当前加载的总资源数
	         */
	        var _totalLoadRes;
	        /**
	         * 当前已经加载的资源数
	         */
	        var _loadedLoadRes;
	        /**
	         * 加载资源的完成回调
	         */
	        var _completeCallback;
	        /**
	         * 加载资源时的进度回调
	         */
	        var _progressCallback;
	        /**
	         * 加载配置文件的加载器
	         */
	        var _JSONQueue;
	        /**
	         * 加载资源文件的加载器
	         */
	        var _loaderQueue;
	        /**
	         * 加载器是否初始化过
	         */
	        var _isInited;
	        /**
	         * 当前加载的资源配置文件内容
	         */
	        var _currentConfig;
	        /**
	         * 获取当前加载的时间当作随机数用
	         */
	        var _time;
	        /**
	         * 加载资源数和总资源数的比
	         */
	        var _loadPer;
	        /**
	         * 单个资源占总资源数的比
	         */
	        var _loadSinglePer;
	        /**
	         * 加载一个flash2x转换的文件内容,如果未加载完成继续调用此方法将会刷新加载器,中断未被加载完成的资源!
	         * @method loadScene
	         * @public
	         * @static
	         * @since 1.0.0
	         * @param {string} sceneName fla通过flash2x转换时设置的包名
	         * @param {Function} progressFun 加载进度回调,回调参数为当前的进度值1-100.
	         * @param {Function} completeFun 加载完成回高,无回调参数
	         * @param {string} domain 加载时要设置的url前缀,默认则不更改加载路径。
	         */
	        RESManager.loadScene = function (sceneName, progressFun, completeFun, domain) {
	            if (domain === void 0) { domain = ""; }
	            //加载资源配置文件
	            if (_isLoading) {
	                _JSONQueue.loadCancel();
	                _loaderQueue.loadCancel();
	            }
	            _loadSceneNames = [];
	            if (domain == undefined) {
	                domain = "";
	            }
	            _domain = domain;
	            if (typeof (sceneName) == "string") {
	                if (!isLoadedScene(sceneName)) {
	                    _loadSceneNames.push(sceneName);
	                    res[sceneName] = new Object();
	                }
	            }
	            else {
	                var len = sceneName.length;
	                for (var i = 0; i < len; i++) {
	                    if (!isLoadedScene(sceneName[i])) {
	                        res[sceneName[i]] = new Object();
	                        _loadSceneNames.push(sceneName[i]);
	                    }
	                }
	            }
	            if (_loadSceneNames.length == 0) {
	                if (completeFun) {
	                    completeFun();
	                }
	                return;
	            }
	            if (!_isInited) {
	                _time = new Date().getTime();
	                _JSONQueue = new annie.URLLoader();
	                _JSONQueue.addEventListener(annie.Event.COMPLETE, onCFGComplete);
	                _loaderQueue = new annie.URLLoader();
	                _loaderQueue.addEventListener(annie.Event.COMPLETE, _onRESComplete);
	                _loaderQueue.addEventListener(annie.Event.PROGRESS, _onRESProgress);
	            }
	            _loadPer = 0;
	            _loadIndex = 0;
	            _totalLoadRes = 0;
	            _loadedLoadRes = 0;
	            _isLoading = true;
	            _completeCallback = completeFun;
	            _progressCallback = progressFun;
	            _currentConfig = [];
	            _loadConfig();
	        };
	        function _loadConfig() {
	            _JSONQueue.load(_domain + "resource/" + _loadSceneNames[_loadIndex] + "/" + _loadSceneNames[_loadIndex] + ".res.json?t=" + _time);
	        }
	        function onCFGComplete(e) {
	            //配置文件加载完成
	            var resList = e.data.response;
	            _currentConfig.push(resList);
	            _totalLoadRes += resList.length;
	            _loadIndex++;
	            if (_loadSceneNames[_loadIndex]) {
	                _loadConfig();
	            }
	            else {
	                //所有配置文件加载完成,那就开始加载资源
	                _loadIndex = 0;
	                _loadSinglePer = 1 / _totalLoadRes;
	                _loadRes();
	            }
	        }
	        function _onRESProgress(e) {
	            if (_progressCallback) {
	                _progressCallback((_loadPer + e.data.loadedBytes / e.data.totalBytes * _loadSinglePer) * 100 >> 0);
	            }
	        }
	        function _onRESComplete(e) {
	            if (e.data.type != "js" && e.data.type != "css") {
	                var id = _currentConfig[_loadIndex][0].id;
	                var scene = _loadSceneNames[_loadIndex];
	                if (e.data.type == "sound") {
	                    res[scene][id] = new annie.Sound(e.data.response);
	                }
	                else {
	                    res[scene][id] = e.data.response;
	                }
	            }
	            _checkComplete();
	        }
	        function _checkComplete() {
	            _loadedLoadRes++;
	            _loadPer = _loadedLoadRes / _totalLoadRes;
	            _currentConfig[_loadIndex].shift();
	            if (_currentConfig[_loadIndex].length > 0) {
	                _loadRes();
	            }
	            else {
	                _loadIndex++;
	                if (_loadIndex == _loadSceneNames.length) {
	                    //全部资源加载完成
	                    _isLoading = false;
	                    //_progressCallback(100);
	                    _completeCallback();
	                }
	                else {
	                    _loadRes();
	                }
	            }
	        }
	        function _loadRes() {
	            var url = _domain + _currentConfig[_loadIndex][0].src;
	            _loaderQueue.load(url);
	        }
	        /**
	         * 判断一个场景是否已经被加载
	         * @method isLoadedScene
	         * @public
	         * @static
	         * @since 1.0.0
	         * @param {string} sceneName
	         * @returns {boolean}
	         */
	        function isLoadedScene(sceneName) {
	            if (res[sceneName] != undefined && res[sceneName] != null) {
	                return true;
	            }
	            else {
	                return false;
	            }
	        }
	        RESManager.isLoadedScene = isLoadedScene;
	        /**
	         * 删除一个场景资源,以方便系统垃圾回收
	         * @method unLoadScene
	         * @public
	         * @static
	         * @since 1.0.2
	         * @param {string} sceneName
	         * @param {WebGLRenderingContext} 如果是webgl渲染模式，请设置渲染的webgl对象，以方便删除不再需要使用的texture对象
	         */
	        function unLoadScene(sceneName, gl) {
	            if (gl === void 0) { gl = null; }
	            //删除webgl贴图资源
	            if (gl) {
	                for (var item in res[sceneName]) {
	                    if (res[sceneName][item].nodeName && res[sceneName][item].nodeName == "IMG" && res[sceneName][item].texture) {
	                        gl.deleteTexture(res[sceneName][item].texture);
	                    }
	                }
	            }
	            delete res[sceneName];
	            var scene = eval(sceneName);
	            for (var i in scene) {
	                delete scene[i];
	            }
	            eval(sceneName + "=null;");
	        }
	        RESManager.unLoadScene = unLoadScene;
	        /**
	         * 获取已经加载场景中的声音或视频资源
	         * @method getMediaByName
	         * @public
	         * @static
	         * @since 1.0.0
	         * @param {string} sceneName
	         * @param {string} mediaName
	         * @returns {any}
	         */
	        function getMediaByName(sceneName, mediaName) {
	            var s = res;
	            if (s[sceneName][mediaName]) {
	                return s[sceneName][mediaName];
	            }
	            return null;
	        }
	        RESManager.getMediaByName = getMediaByName;
	        /**
	         * 通过已经加载场景中的图片资源创建Bitmap对象实例,此方法一般给Flash2x工具自动调用
	         * @method b
	         * @public
	         * @since 1.0.0
	         * @static
	         * @param {string} sceneName
	         * @param {string} imageName
	         * @returns {any}
	         */
	        function b(sceneName, imageName) {
	            var s = res;
	            var isFind = false;
	            if (s[sceneName][imageName]) {
	                return new annie.Bitmap(s[sceneName][imageName]);
	            }
	            else {
	                var m = 0;
	                while (s[sceneName]["F2xSSIMG" + m]) {
	                    var data = s[sceneName]["F2xSSIMGData" + m];
	                    if (data[imageName] != undefined) {
	                        isFind = true;
	                        var imgData = data[imageName];
	                        var spriteSheet = s[sceneName]["F2xSSIMG" + m];
	                        //return {image: spriteSheet, rect: imgData};
	                        return new annie.Bitmap(spriteSheet, imgData);
	                    }
	                    m++;
	                }
	                return null;
	            }
	        }
	        RESManager.b = b;
	        /**
	         * 用一个对象批量设置另一个对象的属性值,此方法一般给Flash2x工具自动调用
	         * @method d
	         * @public
	         * @static
	         * @since 1.0.0
	         * @param {Object} display
	         * @param {Object} baseInfo
	         * @param {Object} extendInfo
	         */
	        function d(display, baseInfo, extendInfo) {
	            if (baseInfo === void 0) { baseInfo = null; }
	            if (extendInfo === void 0) { extendInfo = null; }
	            if (baseInfo) {
	                if (baseInfo.x != undefined) {
	                    display.x = baseInfo.x;
	                }
	                if (baseInfo.y != undefined) {
	                    display.y = baseInfo.y;
	                }
	                if (baseInfo.a != undefined) {
	                    display.scaleX = baseInfo.a;
	                }
	                if (baseInfo.b != undefined) {
	                    display.scaleY = baseInfo.b;
	                }
	                if (baseInfo.r != undefined) {
	                    display.rotation = baseInfo.r;
	                }
	                if (baseInfo.c != undefined) {
	                    display.skewX = baseInfo.c;
	                }
	                if (baseInfo.d != undefined) {
	                    display.skewY = baseInfo.d;
	                }
	                if (baseInfo.o != undefined) {
	                    display.alpha = baseInfo.o;
	                }
	                if (baseInfo.v != undefined) {
	                    display.visible = baseInfo.v;
	                }
	            }
	            if (extendInfo && extendInfo.length > 0) {
	                var index = 0;
	                display.filters = [];
	                while (extendInfo[index] != undefined) {
	                    if (extendInfo[index] == 0) {
	                        display.filters.push(new annie.ColorFilter(extendInfo[index + 1], extendInfo[index + 2], extendInfo[index + 3], extendInfo[index + 4], extendInfo[index + 5], extendInfo[index + 6], extendInfo[index + 7], extendInfo[index + 8]));
	                        index += 9;
	                    }
	                    else if (extendInfo[index] == 1) {
	                        display.filters.push(new annie.BlurFilter(extendInfo[index + 1], extendInfo[index + 2], extendInfo[index + 3]));
	                        index += 4;
	                    }
	                    else if (extendInfo[index] == 2) {
	                        var blur = (extendInfo[index + 1] + extendInfo[index + 2]) * 0.5;
	                        var color = annie.Shape.getRGBA(extendInfo[index + 4], extendInfo[index + 5]);
	                        var offsetX = extendInfo[index + 7] * Math.cos(extendInfo[index + 6] / 180 * Math.PI);
	                        var offsetY = extendInfo[index + 7] * Math.sin(extendInfo[index + 6] / 180 * Math.PI);
	                        display.filters.push(new annie.ShadowFilter(color, offsetX, offsetY, blur));
	                        index += 8;
	                    }
	                    else if (extendInfo[index] == 3) {
	                        var blur = (extendInfo[index + 1] + extendInfo[index + 2]) * 0.5;
	                        var color = annie.Shape.getRGBA(extendInfo[index + 4], extendInfo[index + 5]);
	                        display.filters.push(new annie.ShadowFilter(color, 0, 0, blur));
	                        index += 6;
	                    }
	                    else if (extendInfo[index] == 4) {
	                        display.filters.push(new annie.ColorMatrixFilter(extendInfo[index + 1], extendInfo[index + 2], extendInfo[index + 3], extendInfo[index + 4]));
	                        index += 5;
	                    }
	                }
	            }
	        }
	        RESManager.d = d;
	        /**
	         * 创建一个动态文本或输入文本,此方法一般给Flash2x工具自动调用
	         * @method t
	         * @public
	         * @static
	         * @since 1.0.0
	         * @param {number} type
	         * @param {string} text
	         * @param {number} size
	         * @param {string} color
	         * @param {string} face
	         * @param {number} top
	         * @param {number} left
	         * @param {number} width
	         * @param {number} height
	         * @param {number} lineSpacing
	         * @param {string} align
	         * @param {boolean} italic
	         * @param {boolean} bold
	         * @param {string} lineType
	         * @param {boolean} showBorder
	         * @returns {annie.TextFiled|annie.InputText}
	         */
	        function t(type, text, size, color, face, top, left, width, height, lineSpacing, align, italic, bold, lineType, showBorder) {
	            if (italic === void 0) { italic = false; }
	            if (bold === void 0) { bold = false; }
	            if (lineType === void 0) { lineType = "single"; }
	            if (showBorder === void 0) { showBorder = false; }
	            var textObj;
	            if (type == 0 || type == 1) {
	                textObj = new annie.TextField();
	                textObj.text = text;
	                textObj.font = face;
	                textObj.size = size;
	                textObj.lineWidth = width;
	                textObj.lineHeight = lineSpacing;
	                textObj.textAlign = align;
	                textObj.italic = italic;
	                textObj.bold = bold;
	                textObj.color = color;
	                textObj.lineType = lineType;
	            }
	            else {
	                textObj = new annie.InputText(lineType);
	                textObj.initInfo(text, width, height, color, align, size, face, showBorder, lineSpacing / size);
	                if (italic) {
	                    textObj.setItalic(true);
	                }
	                if (bold) {
	                    textObj.setBold(true);
	                }
	            }
	            return textObj;
	        }
	        RESManager.t = t;
	        /**
	         * 获取矢量位图填充所需要的位图,为什么写这个方法,是因为作为矢量填充的位图不能存在于SpriteSheet中,要单独画出来才能正确的填充到矢量中
	         */
	        function sb(sceneName, bitmapName) {
	            var sbName = "_f2x_s" + bitmapName;
	            if (res[sceneName][sbName]) {
	                return res[sceneName][sbName];
	            }
	            else {
	                var bitmapData = null;
	                var bitmap = b(sceneName, bitmapName);
	                if (bitmap) {
	                    if (bitmap.rect) {
	                        //从SpriteSheet中取出Image单独存放
	                        bitmapData = annie.Bitmap.convertToImage(bitmap);
	                    }
	                    else {
	                        bitmapData = bitmap.bitmapData;
	                    }
	                    res[sceneName][sbName] = bitmapData;
	                    return bitmapData;
	                }
	                else {
	                    trace("error:矢量位图填充时,未找到位图资源!");
	                    return null;
	                }
	            }
	        }
	        /**
	         * 创建一个Shape矢量对象,此方法一般给Flash2x工具自动调用
	         * @method s
	         * @public
	         * @static
	         * @since 1.0.0
	         * @param {Object} pathObj
	         * @param {Object} fillObj
	         * @param {Object} strokeObj
	         * @returns {annie.Shape}
	         */
	        function s(pathObj, fillObj, strokeObj) {
	            var shape = new annie.Shape();
	            if (fillObj) {
	                if (fillObj.type == 0) {
	                    shape.beginFill(fillObj.color);
	                }
	                else if (fillObj.type == 1) {
	                    shape.beginRadialGradientFill(fillObj.gradient[0], fillObj.gradient[1], fillObj.points);
	                }
	                else if (fillObj.type == 2) {
	                    shape.beginLinearGradientFill(fillObj.gradient[0], fillObj.gradient[1], fillObj.points);
	                }
	                else {
	                    shape.beginBitmapFill(sb(fillObj.bitmapScene, fillObj.bitmapName), fillObj.matrix);
	                }
	            }
	            if (strokeObj) {
	                if (strokeObj.type == 0) {
	                    shape.beginStroke(strokeObj.color, strokeObj.lineWidth);
	                }
	                else if (strokeObj.type == 1) {
	                    shape.beginRadialGradientStroke(strokeObj.gradient[0], strokeObj.gradient[1], strokeObj.points, strokeObj.lineWidth);
	                }
	                else if (strokeObj.type == 2) {
	                    shape.beginLinearGradientStroke(strokeObj.gradient[0], strokeObj.gradient[1], strokeObj.points, strokeObj.lineWidth);
	                }
	                else {
	                    shape.beginBitmapStroke(sb(strokeObj.bitmapScene, strokeObj.bitmapName), strokeObj.matrix, strokeObj.lineWidth);
	                }
	            }
	            if (pathObj.type == 0) {
	                shape.decodePath(pathObj.data);
	            }
	            else {
	                shape.drawRoundRect(pathObj.data.x, pathObj.data.y, pathObj.data.w, pathObj.data.h, pathObj.data.topLeftRadius, pathObj.data.topRightRadius, pathObj.data.bottomLeftRadius, pathObj.data.bottomRightRadius);
	            }
	            if (fillObj) {
	                shape.endFill();
	            }
	            if (strokeObj) {
	                shape.endStroke();
	            }
	            return shape;
	        }
	        RESManager.s = s;
	        /**
	         * 向后台请求或者传输数据的快速简便方法,比直接用URLLoader要方便,小巧
	         * @method ajax
	         * @public
	         * @since 1.0.0
	         * @param info 向后台传送数据所需要设置的信息
	         * @param {url} info.url 向后台请求的地址
	         * @param {string} info.type 向后台请求的类型 get 和 post,默认为get
	         * @param {Function} info.success 发送成功后的回调方法,后台数据将通过参数传回
	         * @param {Function} info.error 发送出错后的回调方法,出错信息通过参数传回
	         * @param {Object} info.data 向后台发送的信息对象,默认为null
	         * @param {string} info.responseType 后台返回数据的类型,默认为"json"
	         */
	        function ajax(info) {
	            var urlLoader = new annie.URLLoader();
	            urlLoader.method = info.type == undefined ? "get" : info.type;
	            urlLoader.data = info.data == undefined ? null : info.data;
	            urlLoader.responseType = info.responseType == undefined ? "text" : info.responseType;
	            if (info.success != undefined) {
	                urlLoader.addEventListener(annie.Event.COMPLETE, info.success);
	            }
	            if (info.error != undefined) {
	                urlLoader.addEventListener(annie.Event.ERROR, info.error);
	            }
	            urlLoader.load(info.url);
	        }
	        RESManager.ajax = ajax;
	    })(RESManager = annie.RESManager || (annie.RESManager = {}));
	})(annie || (annie = {}));
	/**
	 * @module annie
	 */
	var annie;
	(function (annie) {
	    var isUpdateTween = true;
	    var TweenObj = (function (_super) {
	        __extends(TweenObj, _super);
	        function TweenObj() {
	            _super.call(this);
	            this._currentFrame = 0;
	            this._totalFrames = 0;
	            this._isLoop = 0;
	            this._delay = 0;
	            this._isFront = true;
	            this._cParams = null;
	            this._loop = false;
	        }
	        /**
	         * 初始化数据
	         * @method init
	         * @param target
	         * @param times
	         * @param data
	         * @param isTo
	         * @public
	         * @since 1.0.0
	         */
	        TweenObj.prototype.init = function (target, times, data, isTo) {
	            if (isTo === void 0) { isTo = true; }
	            var s = this;
	            s._currentFrame = 1;
	            s._totalFrames = times * 30 >> 0;
	            s.target = target;
	            s._isTo = isTo;
	            s._isLoop = 0;
	            s._startData = {};
	            s._disData = {};
	            s._delay = 0;
	            s._isFront = true;
	            s._ease = null;
	            s._update = null;
	            s._cParams = null;
	            s._loop = false;
	            s._completeFun = null;
	            for (var item in data) {
	                switch (item) {
	                    case "useFrame":
	                        if (data[item] == true) {
	                            s._totalFrames = times;
	                        }
	                        break;
	                    case "yoyo":
	                        if (data[item] === false) {
	                            s._isLoop = 0;
	                        }
	                        else if (data[item] === true) {
	                            s._isLoop = 32767;
	                        }
	                        else {
	                            s._isLoop = data[item];
	                        }
	                        break;
	                    case "delay":
	                        s._delay = data[item];
	                        break;
	                    case "ease":
	                        s._ease = data[item];
	                        break;
	                    case "onUpdate":
	                        s._update = data[item];
	                        break;
	                    case "onComplete":
	                        s._completeFun = data[item];
	                        break;
	                    case "completeParams":
	                        s._cParams = data[item];
	                        break;
	                    case "loop":
	                        s._loop = data[item];
	                        break;
	                    default:
	                        if (typeof (data[item]) == "number") {
	                            if (isTo) {
	                                s._startData[item] = target[item];
	                                s._disData[item] = data[item] - target[item];
	                            }
	                            else {
	                                s._startData[item] = data[item];
	                                s._disData[item] = target[item] - data[item];
	                            }
	                        }
	                }
	            }
	        };
	        /**
	         * 更新数据
	         * @method update
	         * @since 1.0.0
	         * @public
	         */
	        TweenObj.prototype.update = function () {
	            var s = this;
	            if (s._isFront && s._delay > 0) {
	                s._delay--;
	                return;
	            }
	            //更新数据
	            var per = s._currentFrame / s._totalFrames;
	            if (s._ease) {
	                per = s._ease(per);
	            }
	            for (var item in s._disData) {
	                s.target[item] = s._startData[item] + s._disData[item] * per;
	            }
	            if (s._update) {
	                s._update();
	            }
	            var cf = s._completeFun;
	            var pm = s._cParams;
	            if (s._isFront) {
	                s._currentFrame++;
	                if (s._currentFrame > s._totalFrames) {
	                    if (s._loop) {
	                        s._currentFrame = 1;
	                    }
	                    else {
	                        if (s._isLoop > 0) {
	                            s._isFront = false;
	                            s._currentFrame = s._totalFrames;
	                            s._isLoop--;
	                        }
	                        else {
	                            Tween.kill(s.getInstanceId());
	                        }
	                    }
	                    if (cf) {
	                        cf.apply(null, pm);
	                    }
	                }
	            }
	            else {
	                s._currentFrame--;
	                if (s._currentFrame < 0) {
	                    if (s._isLoop > 0) {
	                        s._isFront = true;
	                        s._currentFrame = 1;
	                    }
	                    else {
	                        Tween.kill(s.getInstanceId());
	                    }
	                    if (cf) {
	                        cf.apply(null, pm);
	                    }
	                }
	            }
	        };
	        return TweenObj;
	    }(annie.AObject));
	    /**
	     * 全局静态单列类,不要实例化此类
	     * @class annie.Tween
	     * @public
	     * @since 1.0.0
	     */
	    var Tween = (function () {
	        function Tween() {
	        }
	        /**
	         * 将target对象的属性数值渐变到data中对应属性指定的数值
	         * @method to
	         * @static
	         * @param {Object} target
	         * @param {number} totalFrame 总时间长度 用帧数来表示时间
	         * @param {Object} data 包含target对象的各种数字类型属性及其他一些方法属性
	         * @param {number:boolean} data.yoyo 是否向摆钟一样来回循环,默认为false.设置为true则会无限循环,或想只运行指定的摆动次数,将此参数设置为数字就行了。
	         * @param {number:boolean} data.loop 是否循环播放。
	         * @param {Function} data.onComplete 完成函数. 默认为null
	         * @param {Array} data.completeParams 完成函数参数. 默认为null，可以给完成函数里传参数
	         * @param {Function} data.onUpdate 进入每帧后执行函数.默认为null
	         * @param {Function} data.ease 缓动类型方法
	         * @param {boolean} data.useFrame 为false用时间秒值;为true则是以帧为单位
	         * @param {number} data.delay 延时，useFrame为true以帧为单位 useFrame为false以秒为单位
	         * @public
	         * @since 1.0.0
	         */
	        Tween.to = function (target, totalFrame, data) {
	            return Tween.createTween(target, totalFrame, data, true);
	        };
	        /**
	         * 将target对象从data中指定的属性数值渐变到target属性当前的数值
	         * @method from
	         * @static
	         * @param {Object} target
	         * @param {number} totalFrame 总时间长度 用帧数来表示时间
	         * @param {Object} data 包含target对象的各种数字类型属性及其他一些方法属性
	         * @param {number:boolean} data.yoyo 是否向摆钟一样来回循环,默认为false.设置为true则会无限循环,或想只运行指定的摆动次数,将此参数设置为数字就行了。
	         * @param {number:boolean} data.loop 是否循环播放。
	         * @param {Function} data.onComplete 完成结束函数. 默认为null
	         * @param {Array} data.completeParams 完成函数参数. 默认为null，可以给完成函数里传参数
	         * @param {Function} data.onUpdate 进入每帧后执行函数.默认为null
	         * @param {Function} data.ease 缓动类型方法
	         * @param {boolean} data.useFrame 为false用时间秒值;为true则是以帧为单位
	         * @param {number} data.delay 延时，useFrame为true以帧为单位 useFrame为false以秒为单位
	         * @public
	         * @since 1.0.0
	         */
	        Tween.from = function (target, totalFrame, data) {
	            return Tween.createTween(target, totalFrame, data, false);
	        };
	        Tween.createTween = function (target, totalFrame, data, isTo) {
	            var tweenOjb;
	            var len = Tween._tweenList.length;
	            for (var i = 0; i < len; i++) {
	                if (target == Tween._tweenList[i].target) {
	                    tweenOjb = Tween._tweenList[i];
	                    break;
	                }
	            }
	            if (!tweenOjb) {
	                len = Tween._tweenPool.length;
	                if (len > 0) {
	                    tweenOjb = Tween._tweenPool[0];
	                    Tween._tweenPool.shift();
	                }
	                else {
	                    tweenOjb = new TweenObj();
	                }
	                Tween._tweenList.push(tweenOjb);
	            }
	            tweenOjb.init(target, totalFrame, data, isTo);
	            return tweenOjb.getInstanceId();
	        };
	        /**
	         * 销毁所有正在运行的Tween对象
	         * @method killAll
	         * @static
	         * @public
	         * @since 1.0.0
	         */
	        Tween.killAll = function () {
	            var len = Tween._tweenList.length;
	            for (var i = 0; i < len; i++) {
	                Tween._tweenList[i].target = null;
	                Tween._tweenList[i]._completeFun = null;
	                Tween._tweenList[i]._cParams = null;
	                Tween._tweenList[i]._update = null;
	                Tween._tweenList[i]._ease = null;
	                Tween._tweenList[i]._loop = false;
	                Tween._tweenPool.push(Tween._tweenList[i]);
	            }
	            Tween._tweenList.length = 0;
	        };
	        /**
	         * @通过创建Tween对象返回时的唯一id来销毁对应的Tween对象
	         * @method kill
	         * @static
	         * @public
	         * @param {annie.Tween} tween
	         * @since 1.0.0
	         */
	        Tween.kill = function (tweenId) {
	            var len = Tween._tweenList.length;
	            for (var i = 0; i < len; i++) {
	                if (Tween._tweenList[i].getInstanceId() == tweenId) {
	                    Tween._tweenList[i].target = null;
	                    Tween._tweenList[i]._completeFun = null;
	                    Tween._tweenList[i]._cParams = null;
	                    Tween._tweenList[i]._update = null;
	                    Tween._tweenList[i]._ease = null;
	                    Tween._tweenList[i]._loop = null;
	                    Tween._tweenPool.push(Tween._tweenList[i]);
	                    Tween._tweenList.splice(i, 1);
	                    break;
	                }
	            }
	        };
	        /**
	         * quadraticIn缓动类型
	         * @method quadraticIn
	         * @static
	         * @public
	         * @since 1.0.0
	         * @param {number}k
	         * @returns {number}
	         */
	        Tween.quadraticIn = function (k) {
	            return k * k;
	        };
	        /**
	         * quadraticOut 缓动类型
	         * @method quadraticOut
	         * @static
	         * @public
	         * @since 1.0.0
	         * @param {number}k
	         * @returns {number}
	         */
	        Tween.quadraticOut = function (k) {
	            return k * (2 - k);
	        };
	        /**
	         * quadraticInOut 缓动类型
	         * @method quadraticInOut
	         * @static
	         * @public
	         * @since 1.0.0
	         * @param {number}k
	         * @returns {number}
	         */
	        Tween.quadraticInOut = function (k) {
	            if ((k *= 2) < 1) {
	                return 0.5 * k * k;
	            }
	            return -0.5 * (--k * (k - 2) - 1);
	        };
	        /**
	         * cubicIn 缓动类型
	         * @method cubicIn
	         * @static
	         * @public
	         * @since 1.0.0
	         * @param {number}k
	         * @returns {number}
	         */
	        Tween.cubicIn = function (k) {
	            return k * k * k;
	        };
	        /**
	         * cubicOut 缓动类型
	         * @method cubicOut
	         * @static
	         * @public
	         * @since 1.0.0
	         * @param {number}k
	         * @returns {number}
	         */
	        Tween.cubicOut = function (k) {
	            return --k * k * k + 1;
	        };
	        /**
	         * cubicInOut 缓动类型
	         * @method cubicInOut
	         * @static
	         * @public
	         * @since 1.0.0
	         * @param {number}k
	         * @returns {number}
	         */
	        Tween.cubicInOut = function (k) {
	            if ((k *= 2) < 1) {
	                return 0.5 * k * k * k;
	            }
	            return 0.5 * ((k -= 2) * k * k + 2);
	        };
	        /**
	         * quarticIn 缓动类型
	         * @method quarticIn
	         * @static
	         * @public
	         * @since 1.0.0
	         * @param {number}k
	         * @returns {number}
	         */
	        Tween.quarticIn = function (k) {
	            return k * k * k * k;
	        };
	        /**
	         * quarticOut 缓动类型
	         * @method quarticOut
	         * @static
	         * @public
	         * @since 1.0.0
	         * @param {number}k
	         * @returns {number}
	         */
	        Tween.quarticOut = function (k) {
	            return 1 - (--k * k * k * k);
	        };
	        /**
	         * quarticInOut 缓动类型
	         * @method quarticInOut
	         * @static
	         * @public
	         * @since 1.0.0
	         * @param {number}k
	         * @returns {number}
	         */
	        Tween.quarticInOut = function (k) {
	            if ((k *= 2) < 1) {
	                return 0.5 * k * k * k * k;
	            }
	            return -0.5 * ((k -= 2) * k * k * k - 2);
	        };
	        /**
	         * quinticIn 缓动类型
	         * @method quinticIn
	         * @static
	         * @public
	         * @since 1.0.0
	         * @param {number}k
	         * @returns {number}
	         */
	        Tween.quinticIn = function (k) {
	            return k * k * k * k * k;
	        };
	        /**
	         * quinticOut 缓动类型
	         * @method quinticOut
	         * @static
	         * @public
	         * @since 1.0.0
	         * @param {number}k
	         * @returns {number}
	         */
	        Tween.quinticOut = function (k) {
	            return --k * k * k * k * k + 1;
	        };
	        /**
	         * quinticInOut 缓动类型
	         * @method quinticInOut
	         * @static
	         * @public
	         * @since 1.0.0
	         * @param {number}k
	         * @returns {number}
	         */
	        Tween.quinticInOut = function (k) {
	            if ((k *= 2) < 1) {
	                return 0.5 * k * k * k * k * k;
	            }
	            return 0.5 * ((k -= 2) * k * k * k * k + 2);
	        };
	        /**
	         * sinusoidalIn 缓动类型
	         * @method sinusoidalIn
	         * @static
	         * @public
	         * @since 1.0.0
	         * @param {number}k
	         * @returns {number}
	         */
	        Tween.sinusoidalIn = function (k) {
	            return 1 - Math.cos(k * Math.PI / 2);
	        };
	        /**
	         * sinusoidalOut 缓动类型
	         * @method sinusoidalOut
	         * @static
	         * @public
	         * @since 1.0.0
	         * @param {number}k
	         * @returns {number}
	         */
	        Tween.sinusoidalOut = function (k) {
	            return Math.sin(k * Math.PI / 2);
	        };
	        /**
	         * sinusoidalInOut 缓动类型
	         * @method sinusoidalInOut
	         * @static
	         * @public
	         * @since 1.0.0
	         * @param {number}k
	         * @returns {number}
	         */
	        Tween.sinusoidalInOut = function (k) {
	            return 0.5 * (1 - Math.cos(Math.PI * k));
	        };
	        /**
	         * exponentialIn 缓动类型
	         * @method exponentialIn
	         * @static
	         * @public
	         * @since 1.0.0
	         * @param {number}k
	         * @returns {number}
	         */
	        Tween.exponentialIn = function (k) {
	            return k === 0 ? 0 : Math.pow(1024, k - 1);
	        };
	        /**
	         * exponentialOut 缓动类型
	         * @method exponentialOut
	         * @static
	         * @public
	         * @since 1.0.0
	         * @param {number}k
	         * @returns {number}
	         */
	        Tween.exponentialOut = function (k) {
	            return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
	        };
	        /**
	         * exponentialInOut 缓动类型
	         * @method exponentialInOut
	         * @static
	         * @public
	         * @since 1.0.0
	         * @param {number}k
	         * @returns {number}
	         */
	        Tween.exponentialInOut = function (k) {
	            if (k === 0) {
	                return 0;
	            }
	            if (k === 1) {
	                return 1;
	            }
	            if ((k *= 2) < 1) {
	                return 0.5 * Math.pow(1024, k - 1);
	            }
	            return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
	        };
	        /**
	         * circularIn 缓动类型
	         * @method circularIn
	         * @static
	         * @public
	         * @since 1.0.0
	         * @param {number}k
	         * @returns {number}
	         */
	        Tween.circularIn = function (k) {
	            return 1 - Math.sqrt(1 - k * k);
	        };
	        /**
	         * circularOut 缓动类型
	         * @method circularOut
	         * @static
	         * @public
	         * @since 1.0.0
	         * @param {number}k
	         * @returns {number}
	         */
	        Tween.circularOut = function (k) {
	            return Math.sqrt(1 - (--k * k));
	        };
	        /**
	         * circularInOut 缓动类型
	         * @method circularInOut
	         * @static
	         * @public
	         * @since 1.0.0
	         * @param {number}k
	         * @returns {number}
	         */
	        Tween.circularInOut = function (k) {
	            if ((k *= 2) < 1) {
	                return -0.5 * (Math.sqrt(1 - k * k) - 1);
	            }
	            return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
	        };
	        /**
	         * elasticIn 缓动类型
	         * @method elasticIn
	         * @static
	         * @public
	         * @since 1.0.0
	         * @param {number}k
	         * @returns {number}
	         */
	        Tween.elasticIn = function (k) {
	            if (k === 0) {
	                return 0;
	            }
	            if (k === 1) {
	                return 1;
	            }
	            return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
	        };
	        /**
	         * elasticOut 缓动类型
	         * @method elasticOut
	         * @static
	         * @public
	         * @since 1.0.0
	         * @param {number}k
	         * @returns {number}
	         */
	        Tween.elasticOut = function (k) {
	            if (k === 0) {
	                return 0;
	            }
	            if (k === 1) {
	                return 1;
	            }
	            return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;
	        };
	        /**
	         * elasticInOut 缓动类型
	         * @method elasticInOut
	         * @static
	         * @public
	         * @since 1.0.0
	         * @param {number}k
	         * @returns {number}
	         */
	        Tween.elasticInOut = function (k) {
	            if (k === 0) {
	                return 0;
	            }
	            if (k === 1) {
	                return 1;
	            }
	            k *= 2;
	            if (k < 1) {
	                return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
	            }
	            return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;
	        };
	        /**
	         * backIn 缓动类型
	         * @method backIn
	         * @static
	         * @public
	         * @since 1.0.0
	         * @param {number}k
	         * @returns {number}
	         */
	        Tween.backIn = function (k) {
	            var s = 1.70158;
	            return k * k * ((s + 1) * k - s);
	        };
	        /**
	         * backOut 缓动类型
	         * @method backOut
	         * @static
	         * @public
	         * @since 1.0.0
	         * @param {number}k
	         * @returns {number}
	         */
	        Tween.backOut = function (k) {
	            var s = 1.70158;
	            return --k * k * ((s + 1) * k + s) + 1;
	        };
	        /**
	         * backInOut 缓动类型
	         * @method backInOut
	         * @static
	         * @public
	         * @since 1.0.0
	         * @param {number}k
	         * @returns {number}
	         */
	        Tween.backInOut = function (k) {
	            var s = 1.70158 * 1.525;
	            if ((k *= 2) < 1) {
	                return 0.5 * (k * k * ((s + 1) * k - s));
	            }
	            return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
	        };
	        /**
	         * bounceIn 缓动类型
	         * @method bounceIn
	         * @static
	         * @public
	         * @since 1.0.0
	         * @param {number}k
	         * @returns {number}
	         */
	        Tween.bounceIn = function (k) {
	            return 1 - Tween.bounceOut(1 - k);
	        };
	        /**
	         * bounceOut 缓动类型
	         * @method bounceOut
	         * @static
	         * @public
	         * @since 1.0.0
	         * @param {number}k
	         * @returns {number}
	         */
	        Tween.bounceOut = function (k) {
	            if (k < (1 / 2.75)) {
	                return 7.5625 * k * k;
	            }
	            else if (k < (2 / 2.75)) {
	                return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
	            }
	            else if (k < (2.5 / 2.75)) {
	                return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
	            }
	            else {
	                return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
	            }
	        };
	        /**
	         * bounceInOut 缓动类型
	         * @method bounceInOut
	         * @static
	         * @public
	         * @since 1.0.0
	         * @param {number}k
	         * @returns {number}
	         */
	        Tween.bounceInOut = function (k) {
	            if (k < 0.5) {
	                return Tween.bounceIn(k * 2) * 0.5;
	            }
	            return Tween.bounceOut(k * 2 - 1) * 0.5 + 0.5;
	        };
	        /**
	         * 这里之所有要独立运行,是因为可能存在多个stage，不能把这个跟其中任何一个stage放在一起update
	         * @method flush
	         * @private
	         * @since 1.0.0
	         */
	        Tween.flush = function () {
	            if (isUpdateTween) {
	                var len = Tween._tweenList.length;
	                for (var i = len - 1; i >= 0; i--) {
	                    Tween._tweenList[i].update();
	                }
	            }
	            isUpdateTween = !isUpdateTween;
	        };
	        Tween._tweenPool = [];
	        Tween._tweenList = [];
	        return Tween;
	    }());
	    annie.Tween = Tween;
	})(annie || (annie = {}));
	/**
	 * @class annie
	 */
	var annie;
	(function (annie) {
	    /**
	     * 是否开启调试模式
	     * @public
	     * @since 1.0.1
	     * @public
	     * @property debug
	     * @type {boolean}
	     * @example
	     *      //在初始化stage之前输入以下代码，将会在界面调出调度面板
	     *      annie.debug=true;
	     */
	    annie.debug = false;
	    /**
	     * annie引擎的版本号
	     * @public
	     * @since 1.0.1
	     * @property version
	     * @type {string}
	     * @example
	     *      //打印当前引擎的版本号
	     *      trace(annie.version);
	     */
	    annie.version = "1.0.2";
	    /**
	     * 设备的retina值,简单点说就是几个像素表示设备上的一个点
	     * @property annie.devicePixelRatio
	     * @type {number}
	     * @since 1.0.0
	     * @public
	     * @static
	     * @example
	     *      //打印当前设备的retina值
	     *      trace(annie.devicePixelRatio);
	     */
	    annie.devicePixelRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
	    /**
	     * 当前设备是否是移动端或或是pc端,移动端是ios 或者 android
	     * @property annie.osType
	     * @since 1.0.0
	     * @public
	     * @type {string|string}
	     * @static
	     * @example
	     *      //获取当前设备类型
	     *      trace(annie.osType);
	     */
	    annie.osType = (function () {
	        var n = navigator.userAgent.toLocaleLowerCase();
	        var reg1 = /android/;
	        var reg2 = /iphone|ipod|ipad/;
	        if (reg1.test(n)) {
	            return "android";
	        }
	        else if (reg2.test(n)) {
	            return "ios";
	        }
	        else {
	            return "pc";
	        }
	    })();
	    /**
	     * 一个 StageScaleMode 中指定要使用哪种缩放模式的值。以下是有效值：
	     * StageScaleMode.EXACT_FIT -- 整个应用程序在指定区域中可见，但不尝试保持原始高宽比。可能会发生扭曲，应用程序可能会拉伸或压缩显示。
	     * StageScaleMode.SHOW_ALL -- 整个应用程序在指定区域中可见，且不发生扭曲，同时保持应用程序的原始高宽比。应用程序的两侧可能会显示边框。
	     * StageScaleMode.NO_BORDER -- 整个应用程序填满指定区域，不发生扭曲，但有可能进行一些裁切，同时保持应用程序的原始高宽比。
	     * StageScaleMode.NO_SCALE -- 整个应用程序的大小固定，因此，即使播放器窗口的大小更改，它也会保持不变。如果播放器窗口比内容小，则可能进行一些裁切。
	     * StageScaleMode.FIXED_WIDTH -- 整个应用程序的宽固定，因此，即使播放器窗口的大小更改，它也会保持不变。如果播放器窗口比内容小，则可能进行一些裁切。
	     * StageScaleMode.FIXED_HEIGHT -- 整个应用程序的高固定，因此，即使播放器窗口的大小更改，它也会保持不变。如果播放器窗口比内容小，则可能进行一些裁切。
	     * @property annie.StageScaleMode
	     * @type {Object}
	     * @public
	     * @since 1.0.0
	     * @static
	     * @example
	     *      //动态更改stage的对齐方式示例
	     *      //以下代码放到一个舞台的显示对象的构造函数中
	     *      var s=this;
	     *      s.addEventListener(annie.Event.ADD_TO_STAGE,function(e){
	     *          var i=0;
	     *          s.stage.addEventListener(annie.MouseEvent.CLICK,function(e){
	     *              var aList=[annie.StageScaleMode.EXACT_FIT,annie.StageScaleMode.NO_BORDER,annie.StageScaleMode.NO_SCALE,annie.StageScaleMode.SHOW_ALL,annie.StageScaleMode.FIXED_WIDTH,annie.StageScaleMode.FIXED_HEIGHT]
	     *              var state=e.currentTarget;
	     *              state.scaleMode=aList[i];
	     *              state.resize();
	     *              if(i>5){i=0;}
	     *          }
	     *      }
	     *
	     */
	    annie.StageScaleMode = {
	        EXACT_FIT: "exactFit",
	        NO_BORDER: "noBorder",
	        NO_SCALE: "noScale",
	        SHOW_ALL: "showAll",
	        FIXED_WIDTH: "fixedWidth",
	        FIXED_HEIGHT: "fixedHeight"
	    };
	    /**
	     * 跳转到指定网址
	     * @method navigateToURL
	     * @public
	     * @since 1.0.0
	     * @param {string} url
	     * @static
	     * @example
	     *      annie.navigateToURL("http://www.annie2x.com");
	     */
	    function navigateToURL(url) {
	        window.location.href = url;
	    }
	    annie.navigateToURL = navigateToURL;
	    /**
	     * 向后台发送数据,但不会理会任何的后台反馈
	     * @method sendToURL
	     * @public
	     * @since 1.0.0
	     * @param {string} url
	     * @static
	     * @example
	     *      annie.sendToURL("http://www.annie2x.com");
	     */
	    function sendToURL(url) {
	        var req = new XMLHttpRequest();
	        req.open("get", url, true);
	        req.send();
	    }
	    annie.sendToURL = sendToURL;
	    /**
	     * 是否允许html页面接受滑动事件。如:有些时候需要叠加一些很长的div元素在canvas上面。
	     * 这个时候如果不开启这个允许滑动属性，则无法下拉div显示超出屏幕外的内容
	     * @property canTouchMove
	     * @type {boolean}
	     * @static
	     * @since 1.0.0
	     * @public
	     * @type{boolean}
	     * @default false
	     */
	    annie.canHTMLTouchMove = false;
	    // 作为将显示对象导出成图片的render渲染器
	    var _dRender = null;
	    /**
	     * 将显示对象转成base64的图片数据
	     * @method toDisplayDataURL
	     * @static
	     * @param {annie.DisplayObject} obj 显示对象
	     * @param {annie.Rectangle} rect 需要裁切的区域，默认不裁切
	     * @param {Object} typeInfo {type:"png"}  或者 {type:"jpeg",quality:100}  png格式不需要设置quality，jpeg 格式需要设置quality的值 从1-100
	     * @param {string} bgColor 颜色值如 #fff,rgba(255,23,34,44)等！默认值为空的情况下，jpeg格式的话就是黑色底，png格式的话就是透明底
	     * @return {string} base64格式数据
	     */
	    annie.toDisplayDataURL = function (obj, rect, typeInfo, bgColor) {
	        if (rect === void 0) { rect = null; }
	        if (typeInfo === void 0) { typeInfo = null; }
	        if (bgColor === void 0) { bgColor = ""; }
	        if (!_dRender) {
	            _dRender = new annie.CanvasRender(null);
	        }
	        _dRender._stage = obj;
	        _dRender.rootContainer = annie.DisplayObject["_canvas"];
	        //设置宽高,如果obj没有添加到舞台上就去截图的话,会出现宽高不准的时候，需要刷新一下。
	        if (!obj.stage) {
	            obj.update();
	        }
	        var whObj = obj.getBounds();
	        var w = rect ? rect.width : whObj.width;
	        var h = rect ? rect.height : whObj.height;
	        _dRender.rootContainer.width = w;
	        _dRender.rootContainer.height = h;
	        _dRender._ctx = _dRender.rootContainer["getContext"]('2d');
	        if (bgColor == "") {
	            _dRender._ctx.clearRect(0, 0, w, h);
	        }
	        else {
	            _dRender._ctx.fillStyle = bgColor;
	            _dRender._ctx.fillRect(0, 0, w, h);
	        }
	        var objInfo = { p: obj.parent, x: obj.x, y: obj.y, scX: obj.scaleX, scY: obj.scaleY, r: obj.rotation, skX: obj.skewX, skY: obj.skewY };
	        obj.parent = null;
	        obj.x = rect ? -rect.x : 0;
	        obj.y = rect ? -rect.y : 0;
	        obj.scaleX = obj.scaleY = 1;
	        obj.rotation = obj.skewX = obj.skewY = 0;
	        obj.update();
	        obj.render(_dRender);
	        obj.parent = objInfo.p;
	        obj.x = objInfo.x;
	        obj.y = objInfo.y;
	        obj.scaleX = objInfo.scX;
	        obj.scaleY = objInfo.scY;
	        obj.rotation = objInfo.r;
	        obj.skewX = objInfo.skX;
	        obj.skewY = objInfo.skY;
	        if (!typeInfo) {
	            typeInfo = { type: "png" };
	        }
	        return _dRender.rootContainer.toDataURL("image/" + typeInfo.type, typeInfo.quality);
	    };
	})(annie || (annie = {}));
	/**
	 * @class 全局
	 */
	/**
	 * 往控制台打印调试信息
	 * @method trace
	 * @param {Object} arg 任何个数,任意类型的参数
	 * @since 1.0.0
	 * @public
	 * @static
	 * @example
	 *      trace(1);
	 *      trace(1,"hello");
	 */
	var trace = function () {
	    var arg = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        arg[_i - 0] = arguments[_i];
	    }
	    for (var i in arguments) {
	        console.log(arguments[i]);
	    }
	};
	/**
	 * 全局事件触发器
	 * @static
	 * @property  globalDispatcher
	 * @type {annie.EventDispatcher}
	 * @public
	 * @since 1.0.0
	 * @example
	 *      //A代码放到任何合适的地方
	 *      globalDispatcher.addEventListener("myTest",function(e){
	 *          trace("收到了其他地方发来的消息:"+e.data);
	 *      });
	 *
	 *      //B代码放到任何一个可以点击的对象的构造函数中
	 *      this.addEventListener(annie.MouseEvent.CLICK,function(e){
	 *          globalDispatcher.dispatchEvent("myTest","我是小可");
	 *      });
	 *
	 */
	var globalDispatcher = new annie.EventDispatcher();
	//禁止页面滑动
	document.ontouchmove = function (e) {
	    if (!annie.canHTMLTouchMove || !annie.debug) {
	        e.preventDefault();
	    }
	};
	window.Flash2x = annie.RESManager;
	window.F2xContainer = annie.Sprite;
	window.F2xMovieClip = annie.MovieClip;
	window.F2xText = annie.TextField;
	window.F2xInputText = annie.InputText;
	window.F2xBitmap = annie.Bitmap;
	window.F2xShape = annie.Shape;
	annie.Stage["addUpdateObj"](annie.Tween);
	annie.Stage["flushAll"]();
	window.annie=annie;

	module.exports=annie;
	}.call(window));

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var async = __webpack_require__(18),
	    me = __webpack_require__(22),
	    printf = __webpack_require__(38),
	    etc = __webpack_require__(63);
	var wins = __webpack_require__(64);

	var Loader = laya.net.Loader;
	var Handler = laya.utils.Handler;
	var innerStage;

	function toMinuteStr(num) {
		return printf('%02d:%02d', Math.floor(num / 60), num % 60);
	}
	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	var HallUI = function () {
		function HallUI(opt) {
			_classCallCheck(this, HallUI);

			this.opt = opt;
		}

		_createClass(HallUI, [{
			key: 'msg',
			value: function msg(pack) {
				switch (pack.c) {
					case 'userin':
						this._view.getChild('log') && (this._view.getChild('log').text += '<br><a href="javascritp:showUser(' + pack.userid + ')">' + pack.nick + '</a> entered');
						break;
					case 'userout':
						this._view.getChild('log') && (this._view.getChild('log').text += '<br><a href="javascritp:showUser(' + pack.userid + ')">' + pack.nick + '</a> out');
						break;
					default:
						return false;
				}
				return true;
			}
		}, {
			key: 'active',
			value: function active() {
				Laya.SoundManager.playMusic(__webpack_require__(65));
			}
		}, {
			key: 'deactive',
			value: function deactive() {
				//me.removeAllListeners();
			}
		}], [{
			key: 'create',
			value: function create(opt, cb) {
				if (typeof opt === 'function') {
					cb = opt;opt = {};
				}
				Laya.loader.load([{ url: __webpack_require__(66), type: Loader.IMAGE }, { url: __webpack_require__(67), type: Loader.BUFFER }], Handler.create(null, function () {
					var hall = new HallUI(opt);
					fairygui.UIPackage.addPackage("majiang");
					var _view = fairygui.UIPackage.createObject("majiang", "Component3").asCom;
					hall._view = _view;

					_view.getChild('n0').onClick(null, function () {
						_socket.sendp({ c: 'join', code: _view.getChild('n4').text });
					});

					_view.getChild('n2').onClick(null, function () {
						_socket.sendp({ c: 'entergame', roomtype: 'mahjong' });
					});

					cb(null, hall);
				}));
			}
		}]);

		return HallUI;
	}();

	var uidefine = {
		'wechat_login': function wechat_login() {
			var args = arguments;
			var loader = __webpack_require__(68);
			loader(function (creator) {
				creator.apply(null, args);
			});
		},
		'hall': HallUI.create,
		'gamemahjong': function gamemahjong() {
			var args = arguments;
			var loader = __webpack_require__(75);
			loader(function (creator) {
				creator.apply(null, args);
			});
		}
	};
	var uiCreator = function uiCreator(name, opt, cb) {
		if (uidefine[name]) {
			return uidefine[name](opt, cb);
		}
		cb('no such view');
	};
	var ui = {
		views: {},
		current: null,
		get: function get(viewname, opt, cb) {
			var self = this;
			//if (this.views[viewname]) return cb(null, this.views[viewname]);
			uiCreator(viewname, opt, function (err, view) {
				console.log(viewname, 'created');
				if (err) return cb(err);
				//self.views[viewname]=view;
				cb(null, view);
			});
		},
		active: function active(viewname, opt, cb) {
			var self = this;
			this.get(viewname, opt, function (err, view) {
				if (err) return cb && cb(err);
				console.log('enter', viewname);
				if (view == self.current) return cb && cb(null, view);
				if (self.current) {
					self.current.deactive && self.current.deactive();
					fairygui.GRoot.inst.removeChild(self.current._view);
				}
				Laya.SoundManager.stopAll();
				view._view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
				view._view.addRelation(fairygui.GRoot.inst, fairygui.RelationType.Size);
				fairygui.GRoot.inst.addChild(view._view);
				self.current = view;
				cb && cb(null, view);
			});
		}
	};

	module.exports = ui;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	
	var util = __webpack_require__(39);

	var tokenize = function(/*String*/ str, /*RegExp*/ re, /*Function?*/ parseDelim, /*Object?*/ instance){
	  // summary:
	  //    Split a string by a regular expression with the ability to capture the delimeters
	  // parseDelim:
	  //    Each group (excluding the 0 group) is passed as a parameter. If the function returns
	  //    a value, it's added to the list of tokens.
	  // instance:
	  //    Used as the "this' instance when calling parseDelim
	  var tokens = [];
	  var match, content, lastIndex = 0;
	  while((match = re.exec(str))){
	    content = str.slice(lastIndex, re.lastIndex - match[0].length);
	    if(content.length){
	      tokens.push(content);
	    }
	    if(parseDelim){
	      var parsed = parseDelim.apply(instance, match.slice(1).concat(tokens.length));
	      if(typeof parsed != 'undefined'){
	        if(parsed.specifier === '%'){
	          tokens.push('%');
	        }else{
	          tokens.push(parsed);
	        }
	      }
	    }
	    lastIndex = re.lastIndex;
	  }
	  content = str.slice(lastIndex);
	  if(content.length){
	    tokens.push(content);
	  }
	  return tokens;
	};

	var Formatter = function(/*String*/ format){
	  this._mapped = false;
	  this._format = format;
	  this._tokens = tokenize(format, this._re, this._parseDelim, this);
	};

	Formatter.prototype._re = /\%(?:\(([\w_.]+)\)|([1-9]\d*)\$)?([0 +\-\#]*)(\*|\d+)?(\.)?(\*|\d+)?[hlL]?([\%bscdeEfFgGioOuxX])/g;
	Formatter.prototype._parseDelim = function(mapping, intmapping, flags, minWidth, period, precision, specifier){
	  if(mapping){
	    this._mapped = true;
	  }
	  return {
	    mapping: mapping,
	    intmapping: intmapping,
	    flags: flags,
	    _minWidth: minWidth, // May be dependent on parameters
	    period: period,
	    _precision: precision, // May be dependent on parameters
	    specifier: specifier
	  };
	};
	Formatter.prototype._specifiers = {
	  b: {
	    base: 2,
	    isInt: true
	  },
	  o: {
	    base: 8,
	    isInt: true
	  },
	  x: {
	    base: 16,
	    isInt: true
	  },
	  X: {
	    extend: ['x'],
	    toUpper: true
	  },
	  d: {
	    base: 10,
	    isInt: true
	  },
	  i: {
	    extend: ['d']
	  },
	  u: {
	    extend: ['d'],
	    isUnsigned: true
	  },
	  c: {
	    setArg: function(token){
	      if(!isNaN(token.arg)){
	        var num = parseInt(token.arg);
	        if(num < 0 || num > 127){
	          throw new Error('invalid character code passed to %c in printf');
	        }
	        token.arg = isNaN(num) ? '' + num : String.fromCharCode(num);
	      }
	    }
	  },
	  s: {
	    setMaxWidth: function(token){
	      token.maxWidth = (token.period == '.') ? token.precision : -1;
	    }
	  },
	  e: {
	    isDouble: true,
	    doubleNotation: 'e'
	  },
	  E: {
	    extend: ['e'],
	    toUpper: true
	  },
	  f: {
	    isDouble: true,
	    doubleNotation: 'f'
	  },
	  F: {
	    extend: ['f']
	  },
	  g: {
	    isDouble: true,
	    doubleNotation: 'g'
	  },
	  G: {
	    extend: ['g'],
	    toUpper: true
	  },
	  O: {
	    isObject: true
	  }
	};
	Formatter.prototype.format = function(/*mixed...*/ filler){
	  if(this._mapped && typeof filler != 'object'){
	    throw new Error('format requires a mapping');
	  }

	  var str = '';
	  var position = 0;
	  for(var i = 0, token; i < this._tokens.length; i++){
	    token = this._tokens[i];

	    if(typeof token == 'string'){
	      str += token;
	    }else{
	      if(this._mapped){
	        // Identify value of property defined in `token.mapping`
	        var tokens = token.mapping.split('.');
	        var value = filler;
	        for (var j = 0, c = tokens.length; j < c; j++) {
	          value = value[tokens[j]];
	          if (typeof value === 'undefined') {
	            break
	          }
	        }
	        if(typeof value == 'undefined'){
	          throw new Error('missing key ' + token.mapping);
	        }
	        token.arg = value;
	      }else{
	        if(token.intmapping){
	          position = parseInt(token.intmapping) - 1;
	        }
	        if(position >= arguments.length){
	          throw new Error('got ' + arguments.length + ' printf arguments, insufficient for \'' + this._format + '\'');
	        }
	        token.arg = arguments[position++];
	      }

	      if(!token.compiled){
	        token.compiled = true;
	        token.sign = '';
	        token.zeroPad = false;
	        token.rightJustify = false;
	        token.alternative = false;

	        var flags = {};
	        for(var fi = token.flags.length; fi--;){
	          var flag = token.flags.charAt(fi);
	          flags[flag] = true;
	          switch(flag){
	            case ' ':
	              token.sign = ' ';
	              break;
	            case '+':
	              token.sign = '+';
	              break;
	            case '0':
	              token.zeroPad = (flags['-']) ? false : true;
	              break;
	            case '-':
	              token.rightJustify = true;
	              token.zeroPad = false;
	              break;
	            case '#':
	              token.alternative = true;
	              break;
	            default:
	              throw Error('bad formatting flag \'' + token.flags.charAt(fi) + '\'');
	          }
	        }

	        token.minWidth = (token._minWidth) ? parseInt(token._minWidth) : 0;
	        token.maxWidth = -1;
	        token.toUpper = false;
	        token.isUnsigned = false;
	        token.isInt = false;
	        token.isDouble = false;
	        token.isObject = false;
	        token.precision = 1;
	        if(token.period == '.'){
	          if(token._precision){
	            token.precision = parseInt(token._precision);
	          }else{
	            token.precision = 0;
	          }
	        }

	        var mixins = this._specifiers[token.specifier];
	        if(typeof mixins == 'undefined'){
	          throw new Error('unexpected specifier \'' + token.specifier + '\'');
	        }
	        if(mixins.extend){
	          var s = this._specifiers[mixins.extend];
	          for(var k in s){
	            mixins[k] = s[k];
	          }
	          delete mixins.extend;
	        }
	        for(var l in mixins){
	          token[l] = mixins[l];
	        }
	      }

	      if(typeof token.setArg == 'function'){
	        token.setArg(token);
	      }

	      if(typeof token.setMaxWidth == 'function'){
	        token.setMaxWidth(token);
	      }

	      if(token._minWidth == '*'){
	        if(this._mapped){
	          throw new Error('* width not supported in mapped formats');
	        }
	        token.minWidth = parseInt(arguments[position++]);
	        if(isNaN(token.minWidth)){
	          throw new Error('the argument for * width at position ' + position + ' is not a number in ' + this._format);
	        }
	        // negative width means rightJustify
	        if (token.minWidth < 0) {
	          token.rightJustify = true;
	          token.minWidth = -token.minWidth;
	        }
	      }

	      if(token._precision == '*' && token.period == '.'){
	        if(this._mapped){
	          throw new Error('* precision not supported in mapped formats');
	        }
	        token.precision = parseInt(arguments[position++]);
	        if(isNaN(token.precision)){
	          throw Error('the argument for * precision at position ' + position + ' is not a number in ' + this._format);
	        }
	        // negative precision means unspecified
	        if (token.precision < 0) {
	          token.precision = 1;
	          token.period = '';
	        }
	      }
	      if(token.isInt){
	        // a specified precision means no zero padding
	        if(token.period == '.'){
	          token.zeroPad = false;
	        }
	        this.formatInt(token);
	      }else if(token.isDouble){
	        if(token.period != '.'){
	          token.precision = 6;
	        }
	        this.formatDouble(token);
	      }else if(token.isObject){
	        this.formatObject(token);
	      }
	      this.fitField(token);

	      str += '' + token.arg;
	    }
	  }

	  return str;
	};
	Formatter.prototype._zeros10 = '0000000000';
	Formatter.prototype._spaces10 = '          ';
	Formatter.prototype.formatInt = function(token) {
	  var i = parseInt(token.arg);
	  if(!isFinite(i)){ // isNaN(f) || f == Number.POSITIVE_INFINITY || f == Number.NEGATIVE_INFINITY)
	    // allow this only if arg is number
	    if(typeof token.arg != 'number'){
	      throw new Error('format argument \'' + token.arg + '\' not an integer; parseInt returned ' + i);
	    }
	    //return '' + i;
	    i = 0;
	  }

	  // if not base 10, make negatives be positive
	  // otherwise, (-10).toString(16) is '-a' instead of 'fffffff6'
	  if(i < 0 && (token.isUnsigned || token.base != 10)){
	    i = 0xffffffff + i + 1;
	  }

	  if(i < 0){
	    token.arg = (- i).toString(token.base);
	    this.zeroPad(token);
	    token.arg = '-' + token.arg;
	  }else{
	    token.arg = i.toString(token.base);
	    // need to make sure that argument 0 with precision==0 is formatted as ''
	    if(!i && !token.precision){
	      token.arg = '';
	    }else{
	      this.zeroPad(token);
	    }
	    if(token.sign){
	      token.arg = token.sign + token.arg;
	    }
	  }
	  if(token.base == 16){
	    if(token.alternative){
	      token.arg = '0x' + token.arg;
	    }
	    token.arg = token.toUpper ? token.arg.toUpperCase() : token.arg.toLowerCase();
	  }
	  if(token.base == 8){
	    if(token.alternative && token.arg.charAt(0) != '0'){
	      token.arg = '0' + token.arg;
	    }
	  }
	};
	Formatter.prototype.formatDouble = function(token) {
	  var f = parseFloat(token.arg);
	  if(!isFinite(f)){ // isNaN(f) || f == Number.POSITIVE_INFINITY || f == Number.NEGATIVE_INFINITY)
	    // allow this only if arg is number
	    if(typeof token.arg != 'number'){
	      throw new Error('format argument \'' + token.arg + '\' not a float; parseFloat returned ' + f);
	    }
	    // C99 says that for 'f':
	    //   infinity -> '[-]inf' or '[-]infinity' ('[-]INF' or '[-]INFINITY' for 'F')
	    //   NaN -> a string  starting with 'nan' ('NAN' for 'F')
	    // this is not commonly implemented though.
	    //return '' + f;
	    f = 0;
	  }

	  switch(token.doubleNotation) {
	    case 'e': {
	      token.arg = f.toExponential(token.precision);
	      break;
	    }
	    case 'f': {
	      token.arg = f.toFixed(token.precision);
	      break;
	    }
	    case 'g': {
	      // C says use 'e' notation if exponent is < -4 or is >= prec
	      // ECMAScript for toPrecision says use exponential notation if exponent is >= prec,
	      // though step 17 of toPrecision indicates a test for < -6 to force exponential.
	      if(Math.abs(f) < 0.0001){
	        //print('forcing exponential notation for f=' + f);
	        token.arg = f.toExponential(token.precision > 0 ? token.precision - 1 : token.precision);
	      }else{
	        token.arg = f.toPrecision(token.precision);
	      }

	      // In C, unlike 'f', 'gG' removes trailing 0s from fractional part, unless alternative format flag ('#').
	      // But ECMAScript formats toPrecision as 0.00100000. So remove trailing 0s.
	      if(!token.alternative){
	        //print('replacing trailing 0 in \'' + s + '\'');
	        token.arg = token.arg.replace(/(\..*[^0])0*e/, '$1e');
	        // if fractional part is entirely 0, remove it and decimal point
	        token.arg = token.arg.replace(/\.0*e/, 'e').replace(/\.0$/,'');
	      }
	      break;
	    }
	    default: throw new Error('unexpected double notation \'' + token.doubleNotation + '\'');
	  }

	  // C says that exponent must have at least two digits.
	  // But ECMAScript does not; toExponential results in things like '1.000000e-8' and '1.000000e+8'.
	  // Note that s.replace(/e([\+\-])(\d)/, 'e$10$2') won't work because of the '$10' instead of '$1'.
	  // And replace(re, func) isn't supported on IE50 or Safari1.
	  token.arg = token.arg.replace(/e\+(\d)$/, 'e+0$1').replace(/e\-(\d)$/, 'e-0$1');

	  // if alt, ensure a decimal point
	  if(token.alternative){
	    token.arg = token.arg.replace(/^(\d+)$/,'$1.');
	    token.arg = token.arg.replace(/^(\d+)e/,'$1.e');
	  }

	  if(f >= 0 && token.sign){
	    token.arg = token.sign + token.arg;
	  }

	  token.arg = token.toUpper ? token.arg.toUpperCase() : token.arg.toLowerCase();
	};
	Formatter.prototype.formatObject = function(token) {
	  // If no precision is specified, then reset it to null (infinite depth).
	  var precision = (token.period === '.') ? token.precision : null;
	  token.arg = util.inspect(token.arg, !token.alternative, precision);
	};
	Formatter.prototype.zeroPad = function(token, /*Int*/ length) {
	  length = (arguments.length == 2) ? length : token.precision;
	  var negative = false;
	  if(typeof token.arg != "string"){
	    token.arg = "" + token.arg;
	  }
	  if (token.arg.substr(0,1) === '-') {
	    negative = true;
	    token.arg = token.arg.substr(1);
	  }

	  var tenless = length - 10;
	  while(token.arg.length < tenless){
	    token.arg = (token.rightJustify) ? token.arg + this._zeros10 : this._zeros10 + token.arg;
	  }
	  var pad = length - token.arg.length;
	  token.arg = (token.rightJustify) ? token.arg + this._zeros10.substring(0, pad) : this._zeros10.substring(0, pad) + token.arg;
	  if (negative) token.arg = '-' + token.arg;
	};
	Formatter.prototype.fitField = function(token) {
	  if(token.maxWidth >= 0 && token.arg.length > token.maxWidth){
	    return token.arg.substring(0, token.maxWidth);
	  }
	  if(token.zeroPad){
	    this.zeroPad(token, token.minWidth);
	    return;
	  }
	  this.spacePad(token);
	};
	Formatter.prototype.spacePad = function(token, /*Int*/ length) {
	  length = (arguments.length == 2) ? length : token.minWidth;
	  if(typeof token.arg != 'string'){
	    token.arg = '' + token.arg;
	  }
	  var tenless = length - 10;
	  while(token.arg.length < tenless){
	    token.arg = (token.rightJustify) ? token.arg + this._spaces10 : this._spaces10 + token.arg;
	  }
	  var pad = length - token.arg.length;
	  token.arg = (token.rightJustify) ? token.arg + this._spaces10.substring(0, pad) : this._spaces10.substring(0, pad) + token.arg;
	};


	module.exports = function(){
	  var args = Array.prototype.slice.call(arguments),
	    stream, format;
	  if(args[0] instanceof __webpack_require__(42).Stream){
	    stream = args.shift();
	  }
	  format = args.shift();
	  var formatter = new Formatter(format);
	  var string = formatter.format.apply(formatter, args);
	  if(stream){
	    stream.write(string);
	  }else{
	    return string;
	  }
	};

	module.exports.Formatter = Formatter;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }

	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};


	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }

	  if (process.noDeprecation === true) {
	    return fn;
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	};


	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};


	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;


	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};

	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};


	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];

	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}


	function stylizeNoColor(str, styleType) {
	  return str;
	}


	function arrayToHash(array) {
	  var hash = {};

	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });

	  return hash;
	}


	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);

	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }

	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }

	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '', array = false, braces = ['{', '}'];

	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }

	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }

	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }

	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }

	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);

	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();

	  return reduceToSingleString(output, base, braces);
	}


	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}


	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}


	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}


	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}


	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}


	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = __webpack_require__(40);

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}


	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];

	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}


	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};


	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(41);

	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;

	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};

	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(9)))

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },
/* 41 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	module.exports = Stream;

	var EE = __webpack_require__(23).EventEmitter;
	var inherits = __webpack_require__(43);

	inherits(Stream, EE);
	Stream.Readable = __webpack_require__(44);
	Stream.Writable = __webpack_require__(59);
	Stream.Duplex = __webpack_require__(60);
	Stream.Transform = __webpack_require__(61);
	Stream.PassThrough = __webpack_require__(62);

	// Backwards-compat with node 0.4.x
	Stream.Stream = Stream;



	// old-style streams.  Note that the pipe method (the only relevant
	// part of this class) is overridden in the Readable class.

	function Stream() {
	  EE.call(this);
	}

	Stream.prototype.pipe = function(dest, options) {
	  var source = this;

	  function ondata(chunk) {
	    if (dest.writable) {
	      if (false === dest.write(chunk) && source.pause) {
	        source.pause();
	      }
	    }
	  }

	  source.on('data', ondata);

	  function ondrain() {
	    if (source.readable && source.resume) {
	      source.resume();
	    }
	  }

	  dest.on('drain', ondrain);

	  // If the 'end' option is not supplied, dest.end() will be called when
	  // source gets the 'end' or 'close' events.  Only dest.end() once.
	  if (!dest._isStdio && (!options || options.end !== false)) {
	    source.on('end', onend);
	    source.on('close', onclose);
	  }

	  var didOnEnd = false;
	  function onend() {
	    if (didOnEnd) return;
	    didOnEnd = true;

	    dest.end();
	  }


	  function onclose() {
	    if (didOnEnd) return;
	    didOnEnd = true;

	    if (typeof dest.destroy === 'function') dest.destroy();
	  }

	  // don't leave dangling pipes when there are errors.
	  function onerror(er) {
	    cleanup();
	    if (EE.listenerCount(this, 'error') === 0) {
	      throw er; // Unhandled stream error in pipe.
	    }
	  }

	  source.on('error', onerror);
	  dest.on('error', onerror);

	  // remove all the event listeners that were added.
	  function cleanup() {
	    source.removeListener('data', ondata);
	    dest.removeListener('drain', ondrain);

	    source.removeListener('end', onend);
	    source.removeListener('close', onclose);

	    source.removeListener('error', onerror);
	    dest.removeListener('error', onerror);

	    source.removeListener('end', cleanup);
	    source.removeListener('close', cleanup);

	    dest.removeListener('close', cleanup);
	  }

	  source.on('end', cleanup);
	  source.on('close', cleanup);

	  dest.on('close', cleanup);

	  dest.emit('pipe', source);

	  // Allow for unix-like usage: A.pipe(B).pipe(C)
	  return dest;
	};


/***/ },
/* 43 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var Stream = (function (){
	  try {
	    return __webpack_require__(42); // hack to fix a circular dependency issue when used with browserify
	  } catch(_){}
	}());
	exports = module.exports = __webpack_require__(45);
	exports.Stream = Stream || exports;
	exports.Readable = exports;
	exports.Writable = __webpack_require__(54);
	exports.Duplex = __webpack_require__(53);
	exports.Transform = __webpack_require__(57);
	exports.PassThrough = __webpack_require__(58);

	if (!process.browser && process.env.READABLE_STREAM === 'disable' && Stream) {
	  module.exports = Stream;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	module.exports = Readable;

	/*<replacement>*/
	var processNextTick = __webpack_require__(46);
	/*</replacement>*/

	/*<replacement>*/
	var isArray = __webpack_require__(47);
	/*</replacement>*/

	/*<replacement>*/
	var Duplex;
	/*</replacement>*/

	Readable.ReadableState = ReadableState;

	/*<replacement>*/
	var EE = __webpack_require__(23).EventEmitter;

	var EElistenerCount = function (emitter, type) {
	  return emitter.listeners(type).length;
	};
	/*</replacement>*/

	/*<replacement>*/
	var Stream;
	(function () {
	  try {
	    Stream = __webpack_require__(42);
	  } catch (_) {} finally {
	    if (!Stream) Stream = __webpack_require__(23).EventEmitter;
	  }
	})();
	/*</replacement>*/

	var Buffer = __webpack_require__(11).Buffer;
	/*<replacement>*/
	var bufferShim = __webpack_require__(48);
	/*</replacement>*/

	/*<replacement>*/
	var util = __webpack_require__(49);
	util.inherits = __webpack_require__(50);
	/*</replacement>*/

	/*<replacement>*/
	var debugUtil = __webpack_require__(51);
	var debug = void 0;
	if (debugUtil && debugUtil.debuglog) {
	  debug = debugUtil.debuglog('stream');
	} else {
	  debug = function () {};
	}
	/*</replacement>*/

	var BufferList = __webpack_require__(52);
	var StringDecoder;

	util.inherits(Readable, Stream);

	function prependListener(emitter, event, fn) {
	  // Sadly this is not cacheable as some libraries bundle their own
	  // event emitter implementation with them.
	  if (typeof emitter.prependListener === 'function') {
	    return emitter.prependListener(event, fn);
	  } else {
	    // This is a hack to make sure that our error handler is attached before any
	    // userland ones.  NEVER DO THIS. This is here only because this code needs
	    // to continue to work with older versions of Node.js that do not include
	    // the prependListener() method. The goal is to eventually remove this hack.
	    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
	  }
	}

	function ReadableState(options, stream) {
	  Duplex = Duplex || __webpack_require__(53);

	  options = options || {};

	  // object stream flag. Used to make read(n) ignore n and to
	  // make all the buffer merging and length checks go away
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

	  // the point at which it stops calling _read() to fill the buffer
	  // Note: 0 is a valid value, means "don't call _read preemptively ever"
	  var hwm = options.highWaterMark;
	  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

	  // cast to ints.
	  this.highWaterMark = ~ ~this.highWaterMark;

	  // A linked list is used to store data chunks instead of an array because the
	  // linked list can remove elements from the beginning faster than
	  // array.shift()
	  this.buffer = new BufferList();
	  this.length = 0;
	  this.pipes = null;
	  this.pipesCount = 0;
	  this.flowing = null;
	  this.ended = false;
	  this.endEmitted = false;
	  this.reading = false;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // whenever we return null, then we set a flag to say
	  // that we're awaiting a 'readable' event emission.
	  this.needReadable = false;
	  this.emittedReadable = false;
	  this.readableListening = false;
	  this.resumeScheduled = false;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // when piping, we only care about 'readable' events that happen
	  // after read()ing all the bytes and not getting any pushback.
	  this.ranOut = false;

	  // the number of writers that are awaiting a drain event in .pipe()s
	  this.awaitDrain = 0;

	  // if true, a maybeReadMore has been scheduled
	  this.readingMore = false;

	  this.decoder = null;
	  this.encoding = null;
	  if (options.encoding) {
	    if (!StringDecoder) StringDecoder = __webpack_require__(56).StringDecoder;
	    this.decoder = new StringDecoder(options.encoding);
	    this.encoding = options.encoding;
	  }
	}

	function Readable(options) {
	  Duplex = Duplex || __webpack_require__(53);

	  if (!(this instanceof Readable)) return new Readable(options);

	  this._readableState = new ReadableState(options, this);

	  // legacy
	  this.readable = true;

	  if (options && typeof options.read === 'function') this._read = options.read;

	  Stream.call(this);
	}

	// Manually shove something into the read() buffer.
	// This returns true if the highWaterMark has not been hit yet,
	// similar to how Writable.write() returns true if you should
	// write() some more.
	Readable.prototype.push = function (chunk, encoding) {
	  var state = this._readableState;

	  if (!state.objectMode && typeof chunk === 'string') {
	    encoding = encoding || state.defaultEncoding;
	    if (encoding !== state.encoding) {
	      chunk = bufferShim.from(chunk, encoding);
	      encoding = '';
	    }
	  }

	  return readableAddChunk(this, state, chunk, encoding, false);
	};

	// Unshift should *always* be something directly out of read()
	Readable.prototype.unshift = function (chunk) {
	  var state = this._readableState;
	  return readableAddChunk(this, state, chunk, '', true);
	};

	Readable.prototype.isPaused = function () {
	  return this._readableState.flowing === false;
	};

	function readableAddChunk(stream, state, chunk, encoding, addToFront) {
	  var er = chunkInvalid(state, chunk);
	  if (er) {
	    stream.emit('error', er);
	  } else if (chunk === null) {
	    state.reading = false;
	    onEofChunk(stream, state);
	  } else if (state.objectMode || chunk && chunk.length > 0) {
	    if (state.ended && !addToFront) {
	      var e = new Error('stream.push() after EOF');
	      stream.emit('error', e);
	    } else if (state.endEmitted && addToFront) {
	      var _e = new Error('stream.unshift() after end event');
	      stream.emit('error', _e);
	    } else {
	      var skipAdd;
	      if (state.decoder && !addToFront && !encoding) {
	        chunk = state.decoder.write(chunk);
	        skipAdd = !state.objectMode && chunk.length === 0;
	      }

	      if (!addToFront) state.reading = false;

	      // Don't add to the buffer if we've decoded to an empty string chunk and
	      // we're not in object mode
	      if (!skipAdd) {
	        // if we want the data now, just emit it.
	        if (state.flowing && state.length === 0 && !state.sync) {
	          stream.emit('data', chunk);
	          stream.read(0);
	        } else {
	          // update the buffer info.
	          state.length += state.objectMode ? 1 : chunk.length;
	          if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

	          if (state.needReadable) emitReadable(stream);
	        }
	      }

	      maybeReadMore(stream, state);
	    }
	  } else if (!addToFront) {
	    state.reading = false;
	  }

	  return needMoreData(state);
	}

	// if it's past the high water mark, we can push in some more.
	// Also, if we have no data yet, we can stand some
	// more bytes.  This is to work around cases where hwm=0,
	// such as the repl.  Also, if the push() triggered a
	// readable event, and the user called read(largeNumber) such that
	// needReadable was set, then we ought to push more, so that another
	// 'readable' event will be triggered.
	function needMoreData(state) {
	  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
	}

	// backwards compatibility.
	Readable.prototype.setEncoding = function (enc) {
	  if (!StringDecoder) StringDecoder = __webpack_require__(56).StringDecoder;
	  this._readableState.decoder = new StringDecoder(enc);
	  this._readableState.encoding = enc;
	  return this;
	};

	// Don't raise the hwm > 8MB
	var MAX_HWM = 0x800000;
	function computeNewHighWaterMark(n) {
	  if (n >= MAX_HWM) {
	    n = MAX_HWM;
	  } else {
	    // Get the next highest power of 2 to prevent increasing hwm excessively in
	    // tiny amounts
	    n--;
	    n |= n >>> 1;
	    n |= n >>> 2;
	    n |= n >>> 4;
	    n |= n >>> 8;
	    n |= n >>> 16;
	    n++;
	  }
	  return n;
	}

	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function howMuchToRead(n, state) {
	  if (n <= 0 || state.length === 0 && state.ended) return 0;
	  if (state.objectMode) return 1;
	  if (n !== n) {
	    // Only flow one buffer at a time
	    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
	  }
	  // If we're asking for more than the current hwm, then raise the hwm.
	  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
	  if (n <= state.length) return n;
	  // Don't have enough
	  if (!state.ended) {
	    state.needReadable = true;
	    return 0;
	  }
	  return state.length;
	}

	// you can override either this method, or the async _read(n) below.
	Readable.prototype.read = function (n) {
	  debug('read', n);
	  n = parseInt(n, 10);
	  var state = this._readableState;
	  var nOrig = n;

	  if (n !== 0) state.emittedReadable = false;

	  // if we're doing read(0) to trigger a readable event, but we
	  // already have a bunch of data in the buffer, then just trigger
	  // the 'readable' event and move on.
	  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
	    debug('read: emitReadable', state.length, state.ended);
	    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
	    return null;
	  }

	  n = howMuchToRead(n, state);

	  // if we've ended, and we're now clear, then finish it up.
	  if (n === 0 && state.ended) {
	    if (state.length === 0) endReadable(this);
	    return null;
	  }

	  // All the actual chunk generation logic needs to be
	  // *below* the call to _read.  The reason is that in certain
	  // synthetic stream cases, such as passthrough streams, _read
	  // may be a completely synchronous operation which may change
	  // the state of the read buffer, providing enough data when
	  // before there was *not* enough.
	  //
	  // So, the steps are:
	  // 1. Figure out what the state of things will be after we do
	  // a read from the buffer.
	  //
	  // 2. If that resulting state will trigger a _read, then call _read.
	  // Note that this may be asynchronous, or synchronous.  Yes, it is
	  // deeply ugly to write APIs this way, but that still doesn't mean
	  // that the Readable class should behave improperly, as streams are
	  // designed to be sync/async agnostic.
	  // Take note if the _read call is sync or async (ie, if the read call
	  // has returned yet), so that we know whether or not it's safe to emit
	  // 'readable' etc.
	  //
	  // 3. Actually pull the requested chunks out of the buffer and return.

	  // if we need a readable event, then we need to do some reading.
	  var doRead = state.needReadable;
	  debug('need readable', doRead);

	  // if we currently have less than the highWaterMark, then also read some
	  if (state.length === 0 || state.length - n < state.highWaterMark) {
	    doRead = true;
	    debug('length less than watermark', doRead);
	  }

	  // however, if we've ended, then there's no point, and if we're already
	  // reading, then it's unnecessary.
	  if (state.ended || state.reading) {
	    doRead = false;
	    debug('reading or ended', doRead);
	  } else if (doRead) {
	    debug('do read');
	    state.reading = true;
	    state.sync = true;
	    // if the length is currently zero, then we *need* a readable event.
	    if (state.length === 0) state.needReadable = true;
	    // call internal read method
	    this._read(state.highWaterMark);
	    state.sync = false;
	    // If _read pushed data synchronously, then `reading` will be false,
	    // and we need to re-evaluate how much data we can return to the user.
	    if (!state.reading) n = howMuchToRead(nOrig, state);
	  }

	  var ret;
	  if (n > 0) ret = fromList(n, state);else ret = null;

	  if (ret === null) {
	    state.needReadable = true;
	    n = 0;
	  } else {
	    state.length -= n;
	  }

	  if (state.length === 0) {
	    // If we have nothing in the buffer, then we want to know
	    // as soon as we *do* get something into the buffer.
	    if (!state.ended) state.needReadable = true;

	    // If we tried to read() past the EOF, then emit end on the next tick.
	    if (nOrig !== n && state.ended) endReadable(this);
	  }

	  if (ret !== null) this.emit('data', ret);

	  return ret;
	};

	function chunkInvalid(state, chunk) {
	  var er = null;
	  if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  return er;
	}

	function onEofChunk(stream, state) {
	  if (state.ended) return;
	  if (state.decoder) {
	    var chunk = state.decoder.end();
	    if (chunk && chunk.length) {
	      state.buffer.push(chunk);
	      state.length += state.objectMode ? 1 : chunk.length;
	    }
	  }
	  state.ended = true;

	  // emit 'readable' now to make sure it gets picked up.
	  emitReadable(stream);
	}

	// Don't emit readable right away in sync mode, because this can trigger
	// another read() call => stack overflow.  This way, it might trigger
	// a nextTick recursion warning, but that's not so bad.
	function emitReadable(stream) {
	  var state = stream._readableState;
	  state.needReadable = false;
	  if (!state.emittedReadable) {
	    debug('emitReadable', state.flowing);
	    state.emittedReadable = true;
	    if (state.sync) processNextTick(emitReadable_, stream);else emitReadable_(stream);
	  }
	}

	function emitReadable_(stream) {
	  debug('emit readable');
	  stream.emit('readable');
	  flow(stream);
	}

	// at this point, the user has presumably seen the 'readable' event,
	// and called read() to consume some data.  that may have triggered
	// in turn another _read(n) call, in which case reading = true if
	// it's in progress.
	// However, if we're not ended, or reading, and the length < hwm,
	// then go ahead and try to read some more preemptively.
	function maybeReadMore(stream, state) {
	  if (!state.readingMore) {
	    state.readingMore = true;
	    processNextTick(maybeReadMore_, stream, state);
	  }
	}

	function maybeReadMore_(stream, state) {
	  var len = state.length;
	  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
	    debug('maybeReadMore read 0');
	    stream.read(0);
	    if (len === state.length)
	      // didn't get any data, stop spinning.
	      break;else len = state.length;
	  }
	  state.readingMore = false;
	}

	// abstract method.  to be overridden in specific implementation classes.
	// call cb(er, data) where data is <= n in length.
	// for virtual (non-string, non-buffer) streams, "length" is somewhat
	// arbitrary, and perhaps not very meaningful.
	Readable.prototype._read = function (n) {
	  this.emit('error', new Error('_read() is not implemented'));
	};

	Readable.prototype.pipe = function (dest, pipeOpts) {
	  var src = this;
	  var state = this._readableState;

	  switch (state.pipesCount) {
	    case 0:
	      state.pipes = dest;
	      break;
	    case 1:
	      state.pipes = [state.pipes, dest];
	      break;
	    default:
	      state.pipes.push(dest);
	      break;
	  }
	  state.pipesCount += 1;
	  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

	  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

	  var endFn = doEnd ? onend : cleanup;
	  if (state.endEmitted) processNextTick(endFn);else src.once('end', endFn);

	  dest.on('unpipe', onunpipe);
	  function onunpipe(readable) {
	    debug('onunpipe');
	    if (readable === src) {
	      cleanup();
	    }
	  }

	  function onend() {
	    debug('onend');
	    dest.end();
	  }

	  // when the dest drains, it reduces the awaitDrain counter
	  // on the source.  This would be more elegant with a .once()
	  // handler in flow(), but adding and removing repeatedly is
	  // too slow.
	  var ondrain = pipeOnDrain(src);
	  dest.on('drain', ondrain);

	  var cleanedUp = false;
	  function cleanup() {
	    debug('cleanup');
	    // cleanup event handlers once the pipe is broken
	    dest.removeListener('close', onclose);
	    dest.removeListener('finish', onfinish);
	    dest.removeListener('drain', ondrain);
	    dest.removeListener('error', onerror);
	    dest.removeListener('unpipe', onunpipe);
	    src.removeListener('end', onend);
	    src.removeListener('end', cleanup);
	    src.removeListener('data', ondata);

	    cleanedUp = true;

	    // if the reader is waiting for a drain event from this
	    // specific writer, then it would cause it to never start
	    // flowing again.
	    // So, if this is awaiting a drain, then we just call it now.
	    // If we don't know, then assume that we are waiting for one.
	    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
	  }

	  // If the user pushes more data while we're writing to dest then we'll end up
	  // in ondata again. However, we only want to increase awaitDrain once because
	  // dest will only emit one 'drain' event for the multiple writes.
	  // => Introduce a guard on increasing awaitDrain.
	  var increasedAwaitDrain = false;
	  src.on('data', ondata);
	  function ondata(chunk) {
	    debug('ondata');
	    increasedAwaitDrain = false;
	    var ret = dest.write(chunk);
	    if (false === ret && !increasedAwaitDrain) {
	      // If the user unpiped during `dest.write()`, it is possible
	      // to get stuck in a permanently paused state if that write
	      // also returned false.
	      // => Check whether `dest` is still a piping destination.
	      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
	        debug('false write response, pause', src._readableState.awaitDrain);
	        src._readableState.awaitDrain++;
	        increasedAwaitDrain = true;
	      }
	      src.pause();
	    }
	  }

	  // if the dest has an error, then stop piping into it.
	  // however, don't suppress the throwing behavior for this.
	  function onerror(er) {
	    debug('onerror', er);
	    unpipe();
	    dest.removeListener('error', onerror);
	    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
	  }

	  // Make sure our error handler is attached before userland ones.
	  prependListener(dest, 'error', onerror);

	  // Both close and finish should trigger unpipe, but only once.
	  function onclose() {
	    dest.removeListener('finish', onfinish);
	    unpipe();
	  }
	  dest.once('close', onclose);
	  function onfinish() {
	    debug('onfinish');
	    dest.removeListener('close', onclose);
	    unpipe();
	  }
	  dest.once('finish', onfinish);

	  function unpipe() {
	    debug('unpipe');
	    src.unpipe(dest);
	  }

	  // tell the dest that it's being piped to
	  dest.emit('pipe', src);

	  // start the flow if it hasn't been started already.
	  if (!state.flowing) {
	    debug('pipe resume');
	    src.resume();
	  }

	  return dest;
	};

	function pipeOnDrain(src) {
	  return function () {
	    var state = src._readableState;
	    debug('pipeOnDrain', state.awaitDrain);
	    if (state.awaitDrain) state.awaitDrain--;
	    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
	      state.flowing = true;
	      flow(src);
	    }
	  };
	}

	Readable.prototype.unpipe = function (dest) {
	  var state = this._readableState;

	  // if we're not piping anywhere, then do nothing.
	  if (state.pipesCount === 0) return this;

	  // just one destination.  most common case.
	  if (state.pipesCount === 1) {
	    // passed in one, but it's not the right one.
	    if (dest && dest !== state.pipes) return this;

	    if (!dest) dest = state.pipes;

	    // got a match.
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;
	    if (dest) dest.emit('unpipe', this);
	    return this;
	  }

	  // slow case. multiple pipe destinations.

	  if (!dest) {
	    // remove all.
	    var dests = state.pipes;
	    var len = state.pipesCount;
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;

	    for (var i = 0; i < len; i++) {
	      dests[i].emit('unpipe', this);
	    }return this;
	  }

	  // try to find the right one.
	  var index = indexOf(state.pipes, dest);
	  if (index === -1) return this;

	  state.pipes.splice(index, 1);
	  state.pipesCount -= 1;
	  if (state.pipesCount === 1) state.pipes = state.pipes[0];

	  dest.emit('unpipe', this);

	  return this;
	};

	// set up data events if they are asked for
	// Ensure readable listeners eventually get something
	Readable.prototype.on = function (ev, fn) {
	  var res = Stream.prototype.on.call(this, ev, fn);

	  if (ev === 'data') {
	    // Start flowing on next tick if stream isn't explicitly paused
	    if (this._readableState.flowing !== false) this.resume();
	  } else if (ev === 'readable') {
	    var state = this._readableState;
	    if (!state.endEmitted && !state.readableListening) {
	      state.readableListening = state.needReadable = true;
	      state.emittedReadable = false;
	      if (!state.reading) {
	        processNextTick(nReadingNextTick, this);
	      } else if (state.length) {
	        emitReadable(this, state);
	      }
	    }
	  }

	  return res;
	};
	Readable.prototype.addListener = Readable.prototype.on;

	function nReadingNextTick(self) {
	  debug('readable nexttick read 0');
	  self.read(0);
	}

	// pause() and resume() are remnants of the legacy readable stream API
	// If the user uses them, then switch into old mode.
	Readable.prototype.resume = function () {
	  var state = this._readableState;
	  if (!state.flowing) {
	    debug('resume');
	    state.flowing = true;
	    resume(this, state);
	  }
	  return this;
	};

	function resume(stream, state) {
	  if (!state.resumeScheduled) {
	    state.resumeScheduled = true;
	    processNextTick(resume_, stream, state);
	  }
	}

	function resume_(stream, state) {
	  if (!state.reading) {
	    debug('resume read 0');
	    stream.read(0);
	  }

	  state.resumeScheduled = false;
	  state.awaitDrain = 0;
	  stream.emit('resume');
	  flow(stream);
	  if (state.flowing && !state.reading) stream.read(0);
	}

	Readable.prototype.pause = function () {
	  debug('call pause flowing=%j', this._readableState.flowing);
	  if (false !== this._readableState.flowing) {
	    debug('pause');
	    this._readableState.flowing = false;
	    this.emit('pause');
	  }
	  return this;
	};

	function flow(stream) {
	  var state = stream._readableState;
	  debug('flow', state.flowing);
	  while (state.flowing && stream.read() !== null) {}
	}

	// wrap an old-style stream as the async data source.
	// This is *not* part of the readable stream interface.
	// It is an ugly unfortunate mess of history.
	Readable.prototype.wrap = function (stream) {
	  var state = this._readableState;
	  var paused = false;

	  var self = this;
	  stream.on('end', function () {
	    debug('wrapped end');
	    if (state.decoder && !state.ended) {
	      var chunk = state.decoder.end();
	      if (chunk && chunk.length) self.push(chunk);
	    }

	    self.push(null);
	  });

	  stream.on('data', function (chunk) {
	    debug('wrapped data');
	    if (state.decoder) chunk = state.decoder.write(chunk);

	    // don't skip over falsy values in objectMode
	    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

	    var ret = self.push(chunk);
	    if (!ret) {
	      paused = true;
	      stream.pause();
	    }
	  });

	  // proxy all the other methods.
	  // important when wrapping filters and duplexes.
	  for (var i in stream) {
	    if (this[i] === undefined && typeof stream[i] === 'function') {
	      this[i] = function (method) {
	        return function () {
	          return stream[method].apply(stream, arguments);
	        };
	      }(i);
	    }
	  }

	  // proxy certain important events.
	  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
	  forEach(events, function (ev) {
	    stream.on(ev, self.emit.bind(self, ev));
	  });

	  // when we try to consume some more bytes, simply unpause the
	  // underlying stream.
	  self._read = function (n) {
	    debug('wrapped _read', n);
	    if (paused) {
	      paused = false;
	      stream.resume();
	    }
	  };

	  return self;
	};

	// exposed for testing purposes only.
	Readable._fromList = fromList;

	// Pluck off n bytes from an array of buffers.
	// Length is the combined lengths of all the buffers in the list.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function fromList(n, state) {
	  // nothing buffered
	  if (state.length === 0) return null;

	  var ret;
	  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
	    // read it all, truncate the list
	    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
	    state.buffer.clear();
	  } else {
	    // read part of list
	    ret = fromListPartial(n, state.buffer, state.decoder);
	  }

	  return ret;
	}

	// Extracts only enough buffered data to satisfy the amount requested.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function fromListPartial(n, list, hasStrings) {
	  var ret;
	  if (n < list.head.data.length) {
	    // slice is the same for buffers and strings
	    ret = list.head.data.slice(0, n);
	    list.head.data = list.head.data.slice(n);
	  } else if (n === list.head.data.length) {
	    // first chunk is a perfect match
	    ret = list.shift();
	  } else {
	    // result spans more than one buffer
	    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
	  }
	  return ret;
	}

	// Copies a specified amount of characters from the list of buffered data
	// chunks.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function copyFromBufferString(n, list) {
	  var p = list.head;
	  var c = 1;
	  var ret = p.data;
	  n -= ret.length;
	  while (p = p.next) {
	    var str = p.data;
	    var nb = n > str.length ? str.length : n;
	    if (nb === str.length) ret += str;else ret += str.slice(0, n);
	    n -= nb;
	    if (n === 0) {
	      if (nb === str.length) {
	        ++c;
	        if (p.next) list.head = p.next;else list.head = list.tail = null;
	      } else {
	        list.head = p;
	        p.data = str.slice(nb);
	      }
	      break;
	    }
	    ++c;
	  }
	  list.length -= c;
	  return ret;
	}

	// Copies a specified amount of bytes from the list of buffered data chunks.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function copyFromBuffer(n, list) {
	  var ret = bufferShim.allocUnsafe(n);
	  var p = list.head;
	  var c = 1;
	  p.data.copy(ret);
	  n -= p.data.length;
	  while (p = p.next) {
	    var buf = p.data;
	    var nb = n > buf.length ? buf.length : n;
	    buf.copy(ret, ret.length - n, 0, nb);
	    n -= nb;
	    if (n === 0) {
	      if (nb === buf.length) {
	        ++c;
	        if (p.next) list.head = p.next;else list.head = list.tail = null;
	      } else {
	        list.head = p;
	        p.data = buf.slice(nb);
	      }
	      break;
	    }
	    ++c;
	  }
	  list.length -= c;
	  return ret;
	}

	function endReadable(stream) {
	  var state = stream._readableState;

	  // If we get here before consuming all the bytes, then that is a
	  // bug in node.  Should never happen.
	  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

	  if (!state.endEmitted) {
	    state.ended = true;
	    processNextTick(endReadableNT, state, stream);
	  }
	}

	function endReadableNT(state, stream) {
	  // Check that we didn't get one last unshift.
	  if (!state.endEmitted && state.length === 0) {
	    state.endEmitted = true;
	    stream.readable = false;
	    stream.emit('end');
	  }
	}

	function forEach(xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

	function indexOf(xs, x) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    if (xs[i] === x) return i;
	  }
	  return -1;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	if (!process.version ||
	    process.version.indexOf('v0.') === 0 ||
	    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
	  module.exports = nextTick;
	} else {
	  module.exports = process.nextTick;
	}

	function nextTick(fn, arg1, arg2, arg3) {
	  if (typeof fn !== 'function') {
	    throw new TypeError('"callback" argument must be a function');
	  }
	  var len = arguments.length;
	  var args, i;
	  switch (len) {
	  case 0:
	  case 1:
	    return process.nextTick(fn);
	  case 2:
	    return process.nextTick(function afterTickOne() {
	      fn.call(null, arg1);
	    });
	  case 3:
	    return process.nextTick(function afterTickTwo() {
	      fn.call(null, arg1, arg2);
	    });
	  case 4:
	    return process.nextTick(function afterTickThree() {
	      fn.call(null, arg1, arg2, arg3);
	    });
	  default:
	    args = new Array(len - 1);
	    i = 0;
	    while (i < args.length) {
	      args[i++] = arguments[i];
	    }
	    return process.nextTick(function afterTick() {
	      fn.apply(null, args);
	    });
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 47 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var buffer = __webpack_require__(11);
	var Buffer = buffer.Buffer;
	var SlowBuffer = buffer.SlowBuffer;
	var MAX_LEN = buffer.kMaxLength || 2147483647;
	exports.alloc = function alloc(size, fill, encoding) {
	  if (typeof Buffer.alloc === 'function') {
	    return Buffer.alloc(size, fill, encoding);
	  }
	  if (typeof encoding === 'number') {
	    throw new TypeError('encoding must not be number');
	  }
	  if (typeof size !== 'number') {
	    throw new TypeError('size must be a number');
	  }
	  if (size > MAX_LEN) {
	    throw new RangeError('size is too large');
	  }
	  var enc = encoding;
	  var _fill = fill;
	  if (_fill === undefined) {
	    enc = undefined;
	    _fill = 0;
	  }
	  var buf = new Buffer(size);
	  if (typeof _fill === 'string') {
	    var fillBuf = new Buffer(_fill, enc);
	    var flen = fillBuf.length;
	    var i = -1;
	    while (++i < size) {
	      buf[i] = fillBuf[i % flen];
	    }
	  } else {
	    buf.fill(_fill);
	  }
	  return buf;
	}
	exports.allocUnsafe = function allocUnsafe(size) {
	  if (typeof Buffer.allocUnsafe === 'function') {
	    return Buffer.allocUnsafe(size);
	  }
	  if (typeof size !== 'number') {
	    throw new TypeError('size must be a number');
	  }
	  if (size > MAX_LEN) {
	    throw new RangeError('size is too large');
	  }
	  return new Buffer(size);
	}
	exports.from = function from(value, encodingOrOffset, length) {
	  if (typeof Buffer.from === 'function' && (!global.Uint8Array || Uint8Array.from !== Buffer.from)) {
	    return Buffer.from(value, encodingOrOffset, length);
	  }
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number');
	  }
	  if (typeof value === 'string') {
	    return new Buffer(value, encodingOrOffset);
	  }
	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    var offset = encodingOrOffset;
	    if (arguments.length === 1) {
	      return new Buffer(value);
	    }
	    if (typeof offset === 'undefined') {
	      offset = 0;
	    }
	    var len = length;
	    if (typeof len === 'undefined') {
	      len = value.byteLength - offset;
	    }
	    if (offset >= value.byteLength) {
	      throw new RangeError('\'offset\' is out of bounds');
	    }
	    if (len > value.byteLength - offset) {
	      throw new RangeError('\'length\' is out of bounds');
	    }
	    return new Buffer(value.slice(offset, offset + len));
	  }
	  if (Buffer.isBuffer(value)) {
	    var out = new Buffer(value.length);
	    value.copy(out, 0, 0, value.length);
	    return out;
	  }
	  if (value) {
	    if (Array.isArray(value) || (typeof ArrayBuffer !== 'undefined' && value.buffer instanceof ArrayBuffer) || 'length' in value) {
	      return new Buffer(value);
	    }
	    if (value.type === 'Buffer' && Array.isArray(value.data)) {
	      return new Buffer(value.data);
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ' + 'ArrayBuffer, Array, or array-like object.');
	}
	exports.allocUnsafeSlow = function allocUnsafeSlow(size) {
	  if (typeof Buffer.allocUnsafeSlow === 'function') {
	    return Buffer.allocUnsafeSlow(size);
	  }
	  if (typeof size !== 'number') {
	    throw new TypeError('size must be a number');
	  }
	  if (size >= MAX_LEN) {
	    throw new RangeError('size is too large');
	  }
	  return new SlowBuffer(size);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.

	function isArray(arg) {
	  if (Array.isArray) {
	    return Array.isArray(arg);
	  }
	  return objectToString(arg) === '[object Array]';
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = Buffer.isBuffer;

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11).Buffer))

/***/ },
/* 50 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 51 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Buffer = __webpack_require__(11).Buffer;
	/*<replacement>*/
	var bufferShim = __webpack_require__(48);
	/*</replacement>*/

	module.exports = BufferList;

	function BufferList() {
	  this.head = null;
	  this.tail = null;
	  this.length = 0;
	}

	BufferList.prototype.push = function (v) {
	  var entry = { data: v, next: null };
	  if (this.length > 0) this.tail.next = entry;else this.head = entry;
	  this.tail = entry;
	  ++this.length;
	};

	BufferList.prototype.unshift = function (v) {
	  var entry = { data: v, next: this.head };
	  if (this.length === 0) this.tail = entry;
	  this.head = entry;
	  ++this.length;
	};

	BufferList.prototype.shift = function () {
	  if (this.length === 0) return;
	  var ret = this.head.data;
	  if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
	  --this.length;
	  return ret;
	};

	BufferList.prototype.clear = function () {
	  this.head = this.tail = null;
	  this.length = 0;
	};

	BufferList.prototype.join = function (s) {
	  if (this.length === 0) return '';
	  var p = this.head;
	  var ret = '' + p.data;
	  while (p = p.next) {
	    ret += s + p.data;
	  }return ret;
	};

	BufferList.prototype.concat = function (n) {
	  if (this.length === 0) return bufferShim.alloc(0);
	  if (this.length === 1) return this.head.data;
	  var ret = bufferShim.allocUnsafe(n >>> 0);
	  var p = this.head;
	  var i = 0;
	  while (p) {
	    p.data.copy(ret, i);
	    i += p.data.length;
	    p = p.next;
	  }
	  return ret;
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// a duplex stream is just a stream that is both readable and writable.
	// Since JS doesn't have multiple prototypal inheritance, this class
	// prototypally inherits from Readable, and then parasitically from
	// Writable.

	'use strict';

	/*<replacement>*/

	var objectKeys = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) {
	    keys.push(key);
	  }return keys;
	};
	/*</replacement>*/

	module.exports = Duplex;

	/*<replacement>*/
	var processNextTick = __webpack_require__(46);
	/*</replacement>*/

	/*<replacement>*/
	var util = __webpack_require__(49);
	util.inherits = __webpack_require__(50);
	/*</replacement>*/

	var Readable = __webpack_require__(45);
	var Writable = __webpack_require__(54);

	util.inherits(Duplex, Readable);

	var keys = objectKeys(Writable.prototype);
	for (var v = 0; v < keys.length; v++) {
	  var method = keys[v];
	  if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
	}

	function Duplex(options) {
	  if (!(this instanceof Duplex)) return new Duplex(options);

	  Readable.call(this, options);
	  Writable.call(this, options);

	  if (options && options.readable === false) this.readable = false;

	  if (options && options.writable === false) this.writable = false;

	  this.allowHalfOpen = true;
	  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

	  this.once('end', onend);
	}

	// the no-half-open enforcer
	function onend() {
	  // if we allow half-open state, or if the writable side ended,
	  // then we're ok.
	  if (this.allowHalfOpen || this._writableState.ended) return;

	  // no more data can be written.
	  // But allow more writes to happen in this tick.
	  processNextTick(onEndNT, this);
	}

	function onEndNT(self) {
	  self.end();
	}

	function forEach(xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, setImmediate) {// A bit simpler than readable streams.
	// Implement an async ._write(chunk, encoding, cb), and it'll handle all
	// the drain event emission and buffering.

	'use strict';

	module.exports = Writable;

	/*<replacement>*/
	var processNextTick = __webpack_require__(46);
	/*</replacement>*/

	/*<replacement>*/
	var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : processNextTick;
	/*</replacement>*/

	/*<replacement>*/
	var Duplex;
	/*</replacement>*/

	Writable.WritableState = WritableState;

	/*<replacement>*/
	var util = __webpack_require__(49);
	util.inherits = __webpack_require__(50);
	/*</replacement>*/

	/*<replacement>*/
	var internalUtil = {
	  deprecate: __webpack_require__(55)
	};
	/*</replacement>*/

	/*<replacement>*/
	var Stream;
	(function () {
	  try {
	    Stream = __webpack_require__(42);
	  } catch (_) {} finally {
	    if (!Stream) Stream = __webpack_require__(23).EventEmitter;
	  }
	})();
	/*</replacement>*/

	var Buffer = __webpack_require__(11).Buffer;
	/*<replacement>*/
	var bufferShim = __webpack_require__(48);
	/*</replacement>*/

	util.inherits(Writable, Stream);

	function nop() {}

	function WriteReq(chunk, encoding, cb) {
	  this.chunk = chunk;
	  this.encoding = encoding;
	  this.callback = cb;
	  this.next = null;
	}

	function WritableState(options, stream) {
	  Duplex = Duplex || __webpack_require__(53);

	  options = options || {};

	  // object stream flag to indicate whether or not this stream
	  // contains buffers or objects.
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

	  // the point at which write() starts returning false
	  // Note: 0 is a valid value, means that we always return false if
	  // the entire buffer is not flushed immediately on write()
	  var hwm = options.highWaterMark;
	  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

	  // cast to ints.
	  this.highWaterMark = ~ ~this.highWaterMark;

	  // drain event flag.
	  this.needDrain = false;
	  // at the start of calling end()
	  this.ending = false;
	  // when end() has been called, and returned
	  this.ended = false;
	  // when 'finish' is emitted
	  this.finished = false;

	  // should we decode strings into buffers before passing to _write?
	  // this is here so that some node-core streams can optimize string
	  // handling at a lower level.
	  var noDecode = options.decodeStrings === false;
	  this.decodeStrings = !noDecode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // not an actual buffer we keep track of, but a measurement
	  // of how much we're waiting to get pushed to some underlying
	  // socket or file.
	  this.length = 0;

	  // a flag to see when we're in the middle of a write.
	  this.writing = false;

	  // when true all writes will be buffered until .uncork() call
	  this.corked = 0;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // a flag to know if we're processing previously buffered items, which
	  // may call the _write() callback in the same tick, so that we don't
	  // end up in an overlapped onwrite situation.
	  this.bufferProcessing = false;

	  // the callback that's passed to _write(chunk,cb)
	  this.onwrite = function (er) {
	    onwrite(stream, er);
	  };

	  // the callback that the user supplies to write(chunk,encoding,cb)
	  this.writecb = null;

	  // the amount that is being written when _write is called.
	  this.writelen = 0;

	  this.bufferedRequest = null;
	  this.lastBufferedRequest = null;

	  // number of pending user-supplied write callbacks
	  // this must be 0 before 'finish' can be emitted
	  this.pendingcb = 0;

	  // emit prefinish if the only thing we're waiting for is _write cbs
	  // This is relevant for synchronous Transform streams
	  this.prefinished = false;

	  // True if the error was already emitted and should not be thrown again
	  this.errorEmitted = false;

	  // count buffered requests
	  this.bufferedRequestCount = 0;

	  // allocate the first CorkedRequest, there is always
	  // one allocated and free to use, and we maintain at most two
	  this.corkedRequestsFree = new CorkedRequest(this);
	}

	WritableState.prototype.getBuffer = function getBuffer() {
	  var current = this.bufferedRequest;
	  var out = [];
	  while (current) {
	    out.push(current);
	    current = current.next;
	  }
	  return out;
	};

	(function () {
	  try {
	    Object.defineProperty(WritableState.prototype, 'buffer', {
	      get: internalUtil.deprecate(function () {
	        return this.getBuffer();
	      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')
	    });
	  } catch (_) {}
	})();

	// Test _writableState for inheritance to account for Duplex streams,
	// whose prototype chain only points to Readable.
	var realHasInstance;
	if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
	  realHasInstance = Function.prototype[Symbol.hasInstance];
	  Object.defineProperty(Writable, Symbol.hasInstance, {
	    value: function (object) {
	      if (realHasInstance.call(this, object)) return true;

	      return object && object._writableState instanceof WritableState;
	    }
	  });
	} else {
	  realHasInstance = function (object) {
	    return object instanceof this;
	  };
	}

	function Writable(options) {
	  Duplex = Duplex || __webpack_require__(53);

	  // Writable ctor is applied to Duplexes, too.
	  // `realHasInstance` is necessary because using plain `instanceof`
	  // would return false, as no `_writableState` property is attached.

	  // Trying to use the custom `instanceof` for Writable here will also break the
	  // Node.js LazyTransform implementation, which has a non-trivial getter for
	  // `_writableState` that would lead to infinite recursion.
	  if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
	    return new Writable(options);
	  }

	  this._writableState = new WritableState(options, this);

	  // legacy.
	  this.writable = true;

	  if (options) {
	    if (typeof options.write === 'function') this._write = options.write;

	    if (typeof options.writev === 'function') this._writev = options.writev;
	  }

	  Stream.call(this);
	}

	// Otherwise people can pipe Writable streams, which is just wrong.
	Writable.prototype.pipe = function () {
	  this.emit('error', new Error('Cannot pipe, not readable'));
	};

	function writeAfterEnd(stream, cb) {
	  var er = new Error('write after end');
	  // TODO: defer error events consistently everywhere, not just the cb
	  stream.emit('error', er);
	  processNextTick(cb, er);
	}

	// If we get something that is not a buffer, string, null, or undefined,
	// and we're not in objectMode, then that's an error.
	// Otherwise stream chunks are all considered to be of length=1, and the
	// watermarks determine how many objects to keep in the buffer, rather than
	// how many bytes or characters.
	function validChunk(stream, state, chunk, cb) {
	  var valid = true;
	  var er = false;
	  // Always throw error if a null is written
	  // if we are not in object mode then throw
	  // if it is not a buffer, string, or undefined.
	  if (chunk === null) {
	    er = new TypeError('May not write null values to stream');
	  } else if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  if (er) {
	    stream.emit('error', er);
	    processNextTick(cb, er);
	    valid = false;
	  }
	  return valid;
	}

	Writable.prototype.write = function (chunk, encoding, cb) {
	  var state = this._writableState;
	  var ret = false;

	  if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }

	  if (Buffer.isBuffer(chunk)) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

	  if (typeof cb !== 'function') cb = nop;

	  if (state.ended) writeAfterEnd(this, cb);else if (validChunk(this, state, chunk, cb)) {
	    state.pendingcb++;
	    ret = writeOrBuffer(this, state, chunk, encoding, cb);
	  }

	  return ret;
	};

	Writable.prototype.cork = function () {
	  var state = this._writableState;

	  state.corked++;
	};

	Writable.prototype.uncork = function () {
	  var state = this._writableState;

	  if (state.corked) {
	    state.corked--;

	    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
	  }
	};

	Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
	  // node::ParseEncoding() requires lower case.
	  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
	  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
	  this._writableState.defaultEncoding = encoding;
	  return this;
	};

	function decodeChunk(state, chunk, encoding) {
	  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
	    chunk = bufferShim.from(chunk, encoding);
	  }
	  return chunk;
	}

	// if we're already writing something, then just put this
	// in the queue, and wait our turn.  Otherwise, call _write
	// If we return false, then we need a drain event, so set that flag.
	function writeOrBuffer(stream, state, chunk, encoding, cb) {
	  chunk = decodeChunk(state, chunk, encoding);

	  if (Buffer.isBuffer(chunk)) encoding = 'buffer';
	  var len = state.objectMode ? 1 : chunk.length;

	  state.length += len;

	  var ret = state.length < state.highWaterMark;
	  // we must ensure that previous needDrain will not be reset to false.
	  if (!ret) state.needDrain = true;

	  if (state.writing || state.corked) {
	    var last = state.lastBufferedRequest;
	    state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
	    if (last) {
	      last.next = state.lastBufferedRequest;
	    } else {
	      state.bufferedRequest = state.lastBufferedRequest;
	    }
	    state.bufferedRequestCount += 1;
	  } else {
	    doWrite(stream, state, false, len, chunk, encoding, cb);
	  }

	  return ret;
	}

	function doWrite(stream, state, writev, len, chunk, encoding, cb) {
	  state.writelen = len;
	  state.writecb = cb;
	  state.writing = true;
	  state.sync = true;
	  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
	  state.sync = false;
	}

	function onwriteError(stream, state, sync, er, cb) {
	  --state.pendingcb;
	  if (sync) processNextTick(cb, er);else cb(er);

	  stream._writableState.errorEmitted = true;
	  stream.emit('error', er);
	}

	function onwriteStateUpdate(state) {
	  state.writing = false;
	  state.writecb = null;
	  state.length -= state.writelen;
	  state.writelen = 0;
	}

	function onwrite(stream, er) {
	  var state = stream._writableState;
	  var sync = state.sync;
	  var cb = state.writecb;

	  onwriteStateUpdate(state);

	  if (er) onwriteError(stream, state, sync, er, cb);else {
	    // Check if we're actually ready to finish, but don't emit yet
	    var finished = needFinish(state);

	    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
	      clearBuffer(stream, state);
	    }

	    if (sync) {
	      /*<replacement>*/
	      asyncWrite(afterWrite, stream, state, finished, cb);
	      /*</replacement>*/
	    } else {
	        afterWrite(stream, state, finished, cb);
	      }
	  }
	}

	function afterWrite(stream, state, finished, cb) {
	  if (!finished) onwriteDrain(stream, state);
	  state.pendingcb--;
	  cb();
	  finishMaybe(stream, state);
	}

	// Must force callback to be called on nextTick, so that we don't
	// emit 'drain' before the write() consumer gets the 'false' return
	// value, and has a chance to attach a 'drain' listener.
	function onwriteDrain(stream, state) {
	  if (state.length === 0 && state.needDrain) {
	    state.needDrain = false;
	    stream.emit('drain');
	  }
	}

	// if there's something in the buffer waiting, then process it
	function clearBuffer(stream, state) {
	  state.bufferProcessing = true;
	  var entry = state.bufferedRequest;

	  if (stream._writev && entry && entry.next) {
	    // Fast case, write everything using _writev()
	    var l = state.bufferedRequestCount;
	    var buffer = new Array(l);
	    var holder = state.corkedRequestsFree;
	    holder.entry = entry;

	    var count = 0;
	    while (entry) {
	      buffer[count] = entry;
	      entry = entry.next;
	      count += 1;
	    }

	    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

	    // doWrite is almost always async, defer these to save a bit of time
	    // as the hot path ends with doWrite
	    state.pendingcb++;
	    state.lastBufferedRequest = null;
	    if (holder.next) {
	      state.corkedRequestsFree = holder.next;
	      holder.next = null;
	    } else {
	      state.corkedRequestsFree = new CorkedRequest(state);
	    }
	  } else {
	    // Slow case, write chunks one-by-one
	    while (entry) {
	      var chunk = entry.chunk;
	      var encoding = entry.encoding;
	      var cb = entry.callback;
	      var len = state.objectMode ? 1 : chunk.length;

	      doWrite(stream, state, false, len, chunk, encoding, cb);
	      entry = entry.next;
	      // if we didn't call the onwrite immediately, then
	      // it means that we need to wait until it does.
	      // also, that means that the chunk and cb are currently
	      // being processed, so move the buffer counter past them.
	      if (state.writing) {
	        break;
	      }
	    }

	    if (entry === null) state.lastBufferedRequest = null;
	  }

	  state.bufferedRequestCount = 0;
	  state.bufferedRequest = entry;
	  state.bufferProcessing = false;
	}

	Writable.prototype._write = function (chunk, encoding, cb) {
	  cb(new Error('_write() is not implemented'));
	};

	Writable.prototype._writev = null;

	Writable.prototype.end = function (chunk, encoding, cb) {
	  var state = this._writableState;

	  if (typeof chunk === 'function') {
	    cb = chunk;
	    chunk = null;
	    encoding = null;
	  } else if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }

	  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

	  // .end() fully uncorks
	  if (state.corked) {
	    state.corked = 1;
	    this.uncork();
	  }

	  // ignore unnecessary end() calls.
	  if (!state.ending && !state.finished) endWritable(this, state, cb);
	};

	function needFinish(state) {
	  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
	}

	function prefinish(stream, state) {
	  if (!state.prefinished) {
	    state.prefinished = true;
	    stream.emit('prefinish');
	  }
	}

	function finishMaybe(stream, state) {
	  var need = needFinish(state);
	  if (need) {
	    if (state.pendingcb === 0) {
	      prefinish(stream, state);
	      state.finished = true;
	      stream.emit('finish');
	    } else {
	      prefinish(stream, state);
	    }
	  }
	  return need;
	}

	function endWritable(stream, state, cb) {
	  state.ending = true;
	  finishMaybe(stream, state);
	  if (cb) {
	    if (state.finished) processNextTick(cb);else stream.once('finish', cb);
	  }
	  state.ended = true;
	  stream.writable = false;
	}

	// It seems a linked list but it is not
	// there will be only 2 of these for each stream
	function CorkedRequest(state) {
	  var _this = this;

	  this.next = null;
	  this.entry = null;

	  this.finish = function (err) {
	    var entry = _this.entry;
	    _this.entry = null;
	    while (entry) {
	      var cb = entry.callback;
	      state.pendingcb--;
	      cb(err);
	      entry = entry.next;
	    }
	    if (state.corkedRequestsFree) {
	      state.corkedRequestsFree.next = _this;
	    } else {
	      state.corkedRequestsFree = _this;
	    }
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9), __webpack_require__(19).setImmediate))

/***/ },
/* 55 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/**
	 * Module exports.
	 */

	module.exports = deprecate;

	/**
	 * Mark that a method should not be used.
	 * Returns a modified function which warns once by default.
	 *
	 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
	 *
	 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
	 * will throw an Error when invoked.
	 *
	 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
	 * will invoke `console.trace()` instead of `console.error()`.
	 *
	 * @param {Function} fn - the function to deprecate
	 * @param {String} msg - the string to print to the console when `fn` is invoked
	 * @returns {Function} a new "deprecated" version of `fn`
	 * @api public
	 */

	function deprecate (fn, msg) {
	  if (config('noDeprecation')) {
	    return fn;
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (config('throwDeprecation')) {
	        throw new Error(msg);
	      } else if (config('traceDeprecation')) {
	        console.trace(msg);
	      } else {
	        console.warn(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	}

	/**
	 * Checks `localStorage` for boolean values for the given `name`.
	 *
	 * @param {String} name
	 * @returns {Boolean}
	 * @api private
	 */

	function config (name) {
	  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
	  try {
	    if (!global.localStorage) return false;
	  } catch (_) {
	    return false;
	  }
	  var val = global.localStorage[name];
	  if (null == val) return false;
	  return String(val).toLowerCase() === 'true';
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var Buffer = __webpack_require__(11).Buffer;

	var isBufferEncoding = Buffer.isEncoding
	  || function(encoding) {
	       switch (encoding && encoding.toLowerCase()) {
	         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
	         default: return false;
	       }
	     }


	function assertEncoding(encoding) {
	  if (encoding && !isBufferEncoding(encoding)) {
	    throw new Error('Unknown encoding: ' + encoding);
	  }
	}

	// StringDecoder provides an interface for efficiently splitting a series of
	// buffers into a series of JS strings without breaking apart multi-byte
	// characters. CESU-8 is handled as part of the UTF-8 encoding.
	//
	// @TODO Handling all encodings inside a single object makes it very difficult
	// to reason about this code, so it should be split up in the future.
	// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
	// points as used by CESU-8.
	var StringDecoder = exports.StringDecoder = function(encoding) {
	  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
	  assertEncoding(encoding);
	  switch (this.encoding) {
	    case 'utf8':
	      // CESU-8 represents each of Surrogate Pair by 3-bytes
	      this.surrogateSize = 3;
	      break;
	    case 'ucs2':
	    case 'utf16le':
	      // UTF-16 represents each of Surrogate Pair by 2-bytes
	      this.surrogateSize = 2;
	      this.detectIncompleteChar = utf16DetectIncompleteChar;
	      break;
	    case 'base64':
	      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
	      this.surrogateSize = 3;
	      this.detectIncompleteChar = base64DetectIncompleteChar;
	      break;
	    default:
	      this.write = passThroughWrite;
	      return;
	  }

	  // Enough space to store all bytes of a single character. UTF-8 needs 4
	  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
	  this.charBuffer = new Buffer(6);
	  // Number of bytes received for the current incomplete multi-byte character.
	  this.charReceived = 0;
	  // Number of bytes expected for the current incomplete multi-byte character.
	  this.charLength = 0;
	};


	// write decodes the given buffer and returns it as JS string that is
	// guaranteed to not contain any partial multi-byte characters. Any partial
	// character found at the end of the buffer is buffered up, and will be
	// returned when calling write again with the remaining bytes.
	//
	// Note: Converting a Buffer containing an orphan surrogate to a String
	// currently works, but converting a String to a Buffer (via `new Buffer`, or
	// Buffer#write) will replace incomplete surrogates with the unicode
	// replacement character. See https://codereview.chromium.org/121173009/ .
	StringDecoder.prototype.write = function(buffer) {
	  var charStr = '';
	  // if our last write ended with an incomplete multibyte character
	  while (this.charLength) {
	    // determine how many remaining bytes this buffer has to offer for this char
	    var available = (buffer.length >= this.charLength - this.charReceived) ?
	        this.charLength - this.charReceived :
	        buffer.length;

	    // add the new bytes to the char buffer
	    buffer.copy(this.charBuffer, this.charReceived, 0, available);
	    this.charReceived += available;

	    if (this.charReceived < this.charLength) {
	      // still not enough chars in this buffer? wait for more ...
	      return '';
	    }

	    // remove bytes belonging to the current character from the buffer
	    buffer = buffer.slice(available, buffer.length);

	    // get the character that was split
	    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

	    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	    var charCode = charStr.charCodeAt(charStr.length - 1);
	    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	      this.charLength += this.surrogateSize;
	      charStr = '';
	      continue;
	    }
	    this.charReceived = this.charLength = 0;

	    // if there are no more bytes in this buffer, just emit our char
	    if (buffer.length === 0) {
	      return charStr;
	    }
	    break;
	  }

	  // determine and set charLength / charReceived
	  this.detectIncompleteChar(buffer);

	  var end = buffer.length;
	  if (this.charLength) {
	    // buffer the incomplete character bytes we got
	    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
	    end -= this.charReceived;
	  }

	  charStr += buffer.toString(this.encoding, 0, end);

	  var end = charStr.length - 1;
	  var charCode = charStr.charCodeAt(end);
	  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	    var size = this.surrogateSize;
	    this.charLength += size;
	    this.charReceived += size;
	    this.charBuffer.copy(this.charBuffer, size, 0, size);
	    buffer.copy(this.charBuffer, 0, 0, size);
	    return charStr.substring(0, end);
	  }

	  // or just emit the charStr
	  return charStr;
	};

	// detectIncompleteChar determines if there is an incomplete UTF-8 character at
	// the end of the given buffer. If so, it sets this.charLength to the byte
	// length that character, and sets this.charReceived to the number of bytes
	// that are available for this character.
	StringDecoder.prototype.detectIncompleteChar = function(buffer) {
	  // determine how many bytes we have to check at the end of this buffer
	  var i = (buffer.length >= 3) ? 3 : buffer.length;

	  // Figure out if one of the last i bytes of our buffer announces an
	  // incomplete char.
	  for (; i > 0; i--) {
	    var c = buffer[buffer.length - i];

	    // See http://en.wikipedia.org/wiki/UTF-8#Description

	    // 110XXXXX
	    if (i == 1 && c >> 5 == 0x06) {
	      this.charLength = 2;
	      break;
	    }

	    // 1110XXXX
	    if (i <= 2 && c >> 4 == 0x0E) {
	      this.charLength = 3;
	      break;
	    }

	    // 11110XXX
	    if (i <= 3 && c >> 3 == 0x1E) {
	      this.charLength = 4;
	      break;
	    }
	  }
	  this.charReceived = i;
	};

	StringDecoder.prototype.end = function(buffer) {
	  var res = '';
	  if (buffer && buffer.length)
	    res = this.write(buffer);

	  if (this.charReceived) {
	    var cr = this.charReceived;
	    var buf = this.charBuffer;
	    var enc = this.encoding;
	    res += buf.slice(0, cr).toString(enc);
	  }

	  return res;
	};

	function passThroughWrite(buffer) {
	  return buffer.toString(this.encoding);
	}

	function utf16DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 2;
	  this.charLength = this.charReceived ? 2 : 0;
	}

	function base64DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 3;
	  this.charLength = this.charReceived ? 3 : 0;
	}


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// a transform stream is a readable/writable stream where you do
	// something with the data.  Sometimes it's called a "filter",
	// but that's not a great name for it, since that implies a thing where
	// some bits pass through, and others are simply ignored.  (That would
	// be a valid example of a transform, of course.)
	//
	// While the output is causally related to the input, it's not a
	// necessarily symmetric or synchronous transformation.  For example,
	// a zlib stream might take multiple plain-text writes(), and then
	// emit a single compressed chunk some time in the future.
	//
	// Here's how this works:
	//
	// The Transform stream has all the aspects of the readable and writable
	// stream classes.  When you write(chunk), that calls _write(chunk,cb)
	// internally, and returns false if there's a lot of pending writes
	// buffered up.  When you call read(), that calls _read(n) until
	// there's enough pending readable data buffered up.
	//
	// In a transform stream, the written data is placed in a buffer.  When
	// _read(n) is called, it transforms the queued up data, calling the
	// buffered _write cb's as it consumes chunks.  If consuming a single
	// written chunk would result in multiple output chunks, then the first
	// outputted bit calls the readcb, and subsequent chunks just go into
	// the read buffer, and will cause it to emit 'readable' if necessary.
	//
	// This way, back-pressure is actually determined by the reading side,
	// since _read has to be called to start processing a new chunk.  However,
	// a pathological inflate type of transform can cause excessive buffering
	// here.  For example, imagine a stream where every byte of input is
	// interpreted as an integer from 0-255, and then results in that many
	// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
	// 1kb of data being output.  In this case, you could write a very small
	// amount of input, and end up with a very large amount of output.  In
	// such a pathological inflating mechanism, there'd be no way to tell
	// the system to stop doing the transform.  A single 4MB write could
	// cause the system to run out of memory.
	//
	// However, even in such a pathological case, only a single written chunk
	// would be consumed, and then the rest would wait (un-transformed) until
	// the results of the previous transformed chunk were consumed.

	'use strict';

	module.exports = Transform;

	var Duplex = __webpack_require__(53);

	/*<replacement>*/
	var util = __webpack_require__(49);
	util.inherits = __webpack_require__(50);
	/*</replacement>*/

	util.inherits(Transform, Duplex);

	function TransformState(stream) {
	  this.afterTransform = function (er, data) {
	    return afterTransform(stream, er, data);
	  };

	  this.needTransform = false;
	  this.transforming = false;
	  this.writecb = null;
	  this.writechunk = null;
	  this.writeencoding = null;
	}

	function afterTransform(stream, er, data) {
	  var ts = stream._transformState;
	  ts.transforming = false;

	  var cb = ts.writecb;

	  if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));

	  ts.writechunk = null;
	  ts.writecb = null;

	  if (data !== null && data !== undefined) stream.push(data);

	  cb(er);

	  var rs = stream._readableState;
	  rs.reading = false;
	  if (rs.needReadable || rs.length < rs.highWaterMark) {
	    stream._read(rs.highWaterMark);
	  }
	}

	function Transform(options) {
	  if (!(this instanceof Transform)) return new Transform(options);

	  Duplex.call(this, options);

	  this._transformState = new TransformState(this);

	  var stream = this;

	  // start out asking for a readable event once data is transformed.
	  this._readableState.needReadable = true;

	  // we have implemented the _read method, and done the other things
	  // that Readable wants before the first _read call, so unset the
	  // sync guard flag.
	  this._readableState.sync = false;

	  if (options) {
	    if (typeof options.transform === 'function') this._transform = options.transform;

	    if (typeof options.flush === 'function') this._flush = options.flush;
	  }

	  // When the writable side finishes, then flush out anything remaining.
	  this.once('prefinish', function () {
	    if (typeof this._flush === 'function') this._flush(function (er, data) {
	      done(stream, er, data);
	    });else done(stream);
	  });
	}

	Transform.prototype.push = function (chunk, encoding) {
	  this._transformState.needTransform = false;
	  return Duplex.prototype.push.call(this, chunk, encoding);
	};

	// This is the part where you do stuff!
	// override this function in implementation classes.
	// 'chunk' is an input chunk.
	//
	// Call `push(newChunk)` to pass along transformed output
	// to the readable side.  You may call 'push' zero or more times.
	//
	// Call `cb(err)` when you are done with this chunk.  If you pass
	// an error, then that'll put the hurt on the whole operation.  If you
	// never call cb(), then you'll never get another chunk.
	Transform.prototype._transform = function (chunk, encoding, cb) {
	  throw new Error('_transform() is not implemented');
	};

	Transform.prototype._write = function (chunk, encoding, cb) {
	  var ts = this._transformState;
	  ts.writecb = cb;
	  ts.writechunk = chunk;
	  ts.writeencoding = encoding;
	  if (!ts.transforming) {
	    var rs = this._readableState;
	    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
	  }
	};

	// Doesn't matter what the args are here.
	// _transform does all the work.
	// That we got here means that the readable side wants more data.
	Transform.prototype._read = function (n) {
	  var ts = this._transformState;

	  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
	    ts.transforming = true;
	    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
	  } else {
	    // mark that we need a transform, so that any data that comes in
	    // will get processed, now that we've asked for it.
	    ts.needTransform = true;
	  }
	};

	function done(stream, er, data) {
	  if (er) return stream.emit('error', er);

	  if (data !== null && data !== undefined) stream.push(data);

	  // if there's nothing in the write buffer, then that means
	  // that nothing more will ever be provided
	  var ws = stream._writableState;
	  var ts = stream._transformState;

	  if (ws.length) throw new Error('Calling transform done when ws.length != 0');

	  if (ts.transforming) throw new Error('Calling transform done when still transforming');

	  return stream.push(null);
	}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// a passthrough stream.
	// basically just the most minimal sort of Transform stream.
	// Every written chunk gets output as-is.

	'use strict';

	module.exports = PassThrough;

	var Transform = __webpack_require__(57);

	/*<replacement>*/
	var util = __webpack_require__(49);
	util.inherits = __webpack_require__(50);
	/*</replacement>*/

	util.inherits(PassThrough, Transform);

	function PassThrough(options) {
	  if (!(this instanceof PassThrough)) return new PassThrough(options);

	  Transform.call(this, options);
	}

	PassThrough.prototype._transform = function (chunk, encoding, cb) {
	  cb(null, chunk);
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(54)


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(53)


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(57)


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(58)


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var printf = __webpack_require__(38);

	module.exports = {
	    toCoinStr: function toCoinStr(coin) {
	        if (!coin) return '0';
	        if (coin > 100000) return printf('%.2f万', coin / 100000);
	        return coin.toString();
	    },
	    _noop: function _noop() {}
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Loader = laya.net.Loader;
	var Handler = laya.utils.Handler;
	var me = __webpack_require__(22);

	var Win = function (_fairygui$Window) {
		_inherits(Win, _fairygui$Window);

		function Win(comName, packageName, closeHandler) {
			_classCallCheck(this, Win);

			var _this = _possibleConstructorReturn(this, (Win.__proto__ || Object.getPrototypeOf(Win)).call(this));

			if (typeof packageName == 'function') {
				closeHandler = packageName;packageName = null;
			}
			_this.comName = comName;_this.packageName = packageName || 'majiang';
			_this.closeHandler = closeHandler;
			return _this;
		}

		_createClass(Win, [{
			key: 'onInit',
			value: function onInit() {
				this.contentPane = fairygui.UIPackage.createObject(this.packageName, this.comName).asCom;
				this.assignAllBtns();

				this.center();

				//弹出窗口的动效已中心为轴心
				this.setPivot(0.5, 0.5);

				var self = this;
				var cls = this.contentPane.getChild('closeButton') || this.contentPane.getChild('close');
				if (cls instanceof fairygui.GButton) cls.asButton.onClick(this, function () {
					this.hide();
					if (typeof self.closeHandler == 'function') self.closeHandler();
				});

				var bg = this.contentPane.getChildAt(0);
				if (bg instanceof fairygui.GGraph) {
					bg.onClick(this, function () {
						this.hide();
						if (typeof self.closeHandler == 'function') self.closeHandler();
					});
				}
			}
		}, {
			key: 'doShowAnimation',
			value: function doShowAnimation() {
				this.alpha = 0.42;
				laya.utils.Tween.to(this, { alpha: 1 }, 300, laya.utils.Ease.quadOut, Handler.create(this, this.onShown));
			}
		}, {
			key: 'doHideAnimation',
			value: function doHideAnimation() {
				//laya.utils.Tween.to(this, { alpha: 0.2 },180, laya.utils.Ease.quadOut, Handler.create(this, this.hideImmediately));
				this.hideImmediately();
			}
		}, {
			key: 'assignAllBtns',
			value: function assignAllBtns() {
				'use strict';

				var _this2 = this;

				var cl = this.contentPane._children;
				for (var i = 0; i < cl.length; i++) {
					var btn = cl[i].asButton;
					if (btn instanceof fairygui.GButton) {
						(function () {
							var _n = btn.name.split('.');
							var _idx = _n[1] || 1;
							_n = _n[0];
							var ctrl = _this2.contentPane.getController(_n);
							if (ctrl) {
								btn.onClick(_this2, function () {
									ctrl.selectedIndex = _idx;
								});
								ctrl.setSelectedIndex(0);
							} else {
								var com = fairygui.UIPackage.createObject('majiang', _n);
								if (com) {
									btn.onClick(_this2, function () {
										var candiName = capitalizeFirstLetter(_n) + 'Win';
										if (wins[candiName]) {
											var win = new wins[candiName]();
										} else var win = new wins.Win(_n);
										win.show();
									});
								}
							}
						})();
					}
				}
			}
		}]);

		return Win;
	}(fairygui.Window);

	var CreateRoomWin = function (_Win) {
		_inherits(CreateRoomWin, _Win);

		function CreateRoomWin() {
			_classCallCheck(this, CreateRoomWin);

			return _possibleConstructorReturn(this, (CreateRoomWin.__proto__ || Object.getPrototypeOf(CreateRoomWin)).call(this, 'CreateRoom'));
		}

		_createClass(CreateRoomWin, [{
			key: 'onInit',
			value: function onInit() {
				_get(CreateRoomWin.prototype.__proto__ || Object.getPrototypeOf(CreateRoomWin.prototype), 'onInit', this).call(this);

				var now = new Date();
				if (me.freeExpire > now) {
					this.contentPane.getController('free').selectedIndex = 1;
					var freetime = me.freeExpire - now;
					var tip = this.contentPane.getChild('n51');
					if (freetime > 24 * 3600 * 1000) tip.text = '免费' + Math.ceil(freetime / (24 * 3600 * 1000)) + '天';else if (freetime > 3600 * 1000) tip.text = '免费' + Math.ceil(freetime / (3600 * 1000)) + '小时';else tip.text = '免费' + Math.ceil(freetime / (60 * 1000)) + '分钟';
				} else {
					this.contentPane.getController('free').selectedIndex = 0;
				}

				this.contentPane.getChild('n3').onClick(this, this.makeRoom);
				this.contentPane.getChild('n46').onClick(this, this.makeRoom);

				var pane = this.contentPane;
				var mainctrl = this.contentPane.getController('optionCard');
				var already_set = {};
				function setDefault() {
					var str = localStorage.getItem(mainctrl.selectedPage);
					if (!str) return;
					if (already_set[str] != null) return;
					already_set[str] = 1;
					try {
						var o = JSON.parse(str);
					} catch (e) {
						return console.log(str, e);
					}
					pane.getController('fangka').selectedPage = o.fangka.toString();
					pane.getController('dizhu').selectedPage = o.dizhu.toString();
					var _m = [10, 7, 5, 4];
					for (var i = 15; i < 19; i++) {
						pane.getChild('n' + i).asButton.selected = o.rule[_m[i - 15]];
					}
				}
				setDefault();
				mainctrl.on('fui_state_changed', null, setDefault);
			}
		}, {
			key: 'makeRoom',
			value: function makeRoom(type, opt) {
				var pane = this.contentPane;
				var type = pane.getController('optionCard').selectedPage;
				var opt = {
					fangka: Number(pane.getController('fangka').selectedPage),
					rule: [],
					dizhu: Number(pane.getController('dizhu').selectedPage)
				};
				if (type == 3) {
					opt.pan = [, 30, 50][opt.fangka];
				} else opt.pan = [, 15, 30][opt.fangka];
				var _m = [10, 7, 5, 4];
				for (var i = 15; i < 19; i++) {
					opt.rule[_m[i - 15]] = pane.getChild('n' + i).asButton.selected;
				}
				localStorage.setItem(type, JSON.stringify(opt));

				_socket.sendp({ c: 'entergame', roomtype: type, opt: opt });
				this.hide();
			}
		}]);

		return CreateRoomWin;
	}(Win);

	var JoinRoomWinInst = null;

	var JoinRoomWin = function (_Win2) {
		_inherits(JoinRoomWin, _Win2);

		function JoinRoomWin() {
			_classCallCheck(this, JoinRoomWin);

			return _possibleConstructorReturn(this, (JoinRoomWin.__proto__ || Object.getPrototypeOf(JoinRoomWin)).call(this, 'joinRoom'));
		}

		_createClass(JoinRoomWin, [{
			key: 'onInit',
			value: function onInit() {
				_get(JoinRoomWin.prototype.__proto__ || Object.getPrototypeOf(JoinRoomWin.prototype), 'onInit', this).call(this);
				var cont = this.contentPane;
				var roomcode = [];
				this.drawNum(roomcode);
				for (var i = 0; i < 10; i++) {
					cont.getChild('btn' + i).onClick(this, function (num) {
						if (roomcode.length < 5) {
							roomcode.push(num);
							this.drawNum(roomcode);
							if (roomcode.length == 5) {
								_socket.sendp({ c: 'join', code: JoinRoomWin.arrToNum(roomcode) });
								this.hide();
							}
						}
					}, [i]);
				}
				cont.getChild('btnBck').onClick(this, function () {
					roomcode.pop();
					this.drawNum(roomcode);
				});
				cont.getChild('btnClr').onClick(this, function () {
					roomcode = [];
					this.drawNum(roomcode);
				});
			}
		}, {
			key: 'drawNum',
			value: function drawNum(arr) {
				var cont = this.contentPane;
				for (var i = 0; i < arr.length; i++) {
					cont.getChild('num' + i).text = arr[i].toString();
				}
				for (; i < 5; i++) {
					cont.getChild('num' + i).text = ' ';
				}
			}
		}], [{
			key: 'arrToNum',
			value: function arrToNum(arr) {
				var x = 0;
				for (var i = 0; i < arr.length; i++) {
					x = x * 10 + arr[i];
				}
				return x;
			}
		}, {
			key: 'inst',
			get: function get() {
				if (JoinRoomWinInst) return JoinRoomWinInst;
				JoinRoomWinInst = new JoinRoomWin();
				return JoinRoomWinInst;
			}
		}]);

		return JoinRoomWin;
	}(Win);

	var TipWin = function (_Win3) {
		_inherits(TipWin, _Win3);

		function TipWin(str, opt) {
			_classCallCheck(this, TipWin);

			// super('TIP');
			var _this5 = _possibleConstructorReturn(this, (TipWin.__proto__ || Object.getPrototypeOf(TipWin)).call(this, '过场板', 'majiang'));

			if (typeof str == 'string') _this5._tip = str;else if (str instanceof Error) _this5._tip = str.message;
			if (opt) {
				if (opt instanceof Handler) {
					_this5._opt = { waitHandler: opt };
				} else _this5._opt = opt;
			} else _this5._opt = {};
			return _this5;
		}

		_createClass(TipWin, [{
			key: 'onInit',
			value: function onInit() {
				_get(TipWin.prototype.__proto__ || Object.getPrototypeOf(TipWin.prototype), 'onInit', this).call(this);
				this._inited = true;
				// this.contentPane.getChild('n3').getChild('n1').text=(this._tip||'something wrong').toString();
				// this.contentPane.getTransition('t0').play();
				this.contentPane.getChild('n76').text = (this._tip || 'something wrong').toString();
				// if (this._pop) {
				// 	var cb=this._pop.cb;
				// 	this.contentPane.getTransition('t0').play(cb?Handler.create(null, cb):null);
				// }
			}
		}, {
			key: 'popup',
			value: function popup(cb) {
				var self = this;
				this.modal = true;
				this.show();
				// setTimeout(function() {
				// self.hide();
				// },2000);


				var trans_show = self.contentPane.getTransition('t0'); //trans_hide=self.contentPane.getTransition('t1');
				this.setXY((Laya.stage.desginWidth - this.contentPane.getChild('n76').textWidth) / 2 - 30, 500);
				if (self._opt.waitHandler) {
					trans_show.play(Handler.create(null, function () {
						cb && cb();
						fairygui.GRoot.inst.getChildAt(1).onClick(null, function () {
							self.hide();
							if (typeof self._opt.waitHandler === 'function') self._opt.waitHandler();else if (self._opt.waitHandler instanceof Handler) self._opt.waitHandler.run();
						});
					}));
				} else {
					trans_show.play(Handler.create(null, function () {
						cb && cb();
						fairygui.GRoot.inst.getChildAt(1).onClick(null, function () {
							self.hide();
						});
						setTimeout(function () {
							self.hide();
						}, 1500);
					}));
					// trans_hide.play(Handler.create(null, function() {
					// 	self.hide();
					// 	cb &&cb();
					// }));
				}
			}
		}, {
			key: 'hide',
			value: function hide() {
				_get(TipWin.prototype.__proto__ || Object.getPrototypeOf(TipWin.prototype), 'hide', this).call(this);
				this.modal = false;
			}
		}]);

		return TipWin;
	}(Win);

	var wins = {
		Win: Win,
		CreateRoomWin: CreateRoomWin,
		TipWin: TipWin,
		JoinRoomWin: JoinRoomWin
	};
	module.exports = wins;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "bg-lobby.mp3?c6cc2921b41a2b3ddad15ea956d9e1f9";

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "majiang@atlas0.png?fa8db6d70975a68c1f7e8aed7a62134f";

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "majiang.fui?49539d40ea935356182d1700276d61e5";

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var cbs = [], 
		data;
	module.exports = function(cb) {
		if(cbs) cbs.push(cb);
		else cb(data);
	}
	__webpack_require__.e/* nsure */(5, function(require) {
		data = __webpack_require__(69);
		var callbacks = cbs;
		cbs = null;
		for(var i = 0, l = callbacks.length; i < l; i++) {
			callbacks[i](data);
		}
	});

/***/ },
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var cbs = [], 
		data;
	module.exports = function(cb) {
		if(cbs) cbs.push(cb);
		else cb(data);
	}
	__webpack_require__.e/* nsure */(6, function(require) {
		data = __webpack_require__(76);
		var callbacks = cbs;
		cbs = null;
		for(var i = 0, l = callbacks.length; i < l; i++) {
			callbacks[i](data);
		}
	});

/***/ }
]));