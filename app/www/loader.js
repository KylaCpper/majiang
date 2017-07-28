/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var back = __webpack_require__(84);
	var splash = window.splash = $('<div/>');
	splash.width($(window).width());
	splash.height($(window).height());
	splash.css('background-color', '#fff');
	splash.css('text-align', 'center');
	splash.css('display', 'table-cell');
	splash.css('vertical-align', 'middle');
	var inner = $('<img src="' + back + '"/>');
	inner.css('width', '80%');
	splash.append(inner);

	$('body').append(splash);

	var loadScript = window.loadScript = function (src, callback) {
		jQuery.ajax({
			crossDomain: true,
			dataType: "script",
			url: src,
			cache: true,
			success: function success() {
				typeof callback === 'function' && callback();
			},
			error: function error(e) {
				typeof callback === 'function' && callback(e);
			}
		});
	};
	$.get('manifest.json?t=' + new Date().getTime(), function (data) {
		loadScript(data['entry.js']);
	}, 'json');

/***/ },

/***/ 84:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "company.png?b63d0885a3db4afe7c6c3477bdedf7ad";

/***/ }

/******/ });