var back=require('./company.png');
var splash=window.splash=$('<div/>');
splash.width($(window).width());
splash.height($(window).height());
splash.css('background-color', '#fff');
splash.css('text-align', 'center');
splash.css('display', 'table-cell');
splash.css('vertical-align', 'middle');
var inner=$('<img src="'+back+'"/>');
inner.css('width', '80%');
splash.append(inner);

$('body').append(splash);

var loadScript=window.loadScript=function(src, callback) {
	jQuery.ajax({
		crossDomain: true,
		dataType: "script",
		url: src,
		cache:true,
		success: function(){
			typeof callback === 'function' && callback();
		},
		error: function(e){
			typeof callback === 'function' && callback(e);
		}
	})
}
$.get('manifest.json?t='+new Date().getTime(), function(data) {
	loadScript(data['entry.js']);
}, 'json');

