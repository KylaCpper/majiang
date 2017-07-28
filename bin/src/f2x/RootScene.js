// [AIV] Build version: 3.1.0 
 var F2xExtend=__extends;
var f2x=f2x||{};
f2x.RootScene=function(onend){
	var s = this;
	this.onend=onend;
	F2xMovieClip.call(s);
	s.initUI();
};
F2xExtend(f2x.RootScene,F2xMovieClip);
f2x.RootScene.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new f2x.F2xAuto_1();
	s.a().b(40).c(_d0,{x:249.5,y:104}).g('loop', 0,0);
	//f2x_auto_created_init_end
	s.addEventListener(annie.Event.END_FRAME, function() {
		s.parent.removeAllChildren();
		if (typeof s.onend==='function') s.onend();
	})
	
};
 