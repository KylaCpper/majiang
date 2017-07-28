// [AIV] Build version: 3.1.0 
 var F2xExtend=__extends;
var win=win||{};
win.RootScene=function(onend){
	var s = this;
	this.onend=onend;
	F2xMovieClip.call(s);
	s.initUI();
};
F2xExtend(win.RootScene,F2xMovieClip);
win.RootScene.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new win.F2xAuto_17();
	s.a().b(65).c(_d0,{x:0.35,y:-1}).g("loop",0,0);
	//f2x_auto_created_init_end
	s.addEventListener(annie.Event.END_FRAME, function() {
		s.parent.removeAllChildren();
		if (typeof s.onend==='function') s.onend();
	})	
};
 