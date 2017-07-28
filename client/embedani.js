window.F2xExtend=__extends;

var aniDiv=$('<div id="annie" style="position:absolute; left=0px; top:0px;display:none"/>');
$('body').append(aniDiv);
var stage=new annie.Stage("annie",640,360,24,annie.StageScaleMode.SHOW_ALL,0);
stage.autoSteering=true;

function playStarting(onend) {
	if (!f2x) return onend('ani starting is not defined');
	aniDiv.show();
	stage.addChild(new f2x.RootScene(function() {
		aniDiv.hide();
		if (typeof onend=='function') onend();
	}));
}

function playWin(onend) {
	if (!f2x) return onend('ani win is not defined');
	aniDiv.show();
	stage.addChild(new win.RootScene(function() {
		aniDiv.hide();
		if (typeof onend=='function') onend();
	}));	
}

module.exports={
	playStarting:playStarting,
	playWin:playWin
}