webpackJsonp([6],{

/***/ 80:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	//////////////////////////////////////////////////
	//         Y
	//         ^
	//         ¦
	//         ¦
	//         ¦(0,0)
	//  --------------->X  正交视图下的3D坐标系统
	//         ¦
	//         ¦
	//         ¦
	//         ¦
	//
	//
	//  (0,0)
	//  --------------->X  2D坐标系统
	// ¦
	// ¦
	// ¦
	// ¦
	// ¦
	// ¦
	// ¦
	// ˇ
	// Y
	/////////////////////////////////////////////////
	var config = __webpack_require__(81);
	var fun = __webpack_require__(82);
	var Card = __webpack_require__(83);
	var Ani = __webpack_require__(84);
	var Event = Laya.Event;
	var seat = 0;
	var seat1 = 0;
	var seat3 = 0;
	var ready = 0;
	// var CameraMoveScript=require('./js/CameraMoveScript.js')
	var idealRatio = 960 / 540,
	    realRatio = window.innerHeight / window.innerWidth;
	// Laya.init(window.innerWidth, window.innerHeight, laya.webgl.WebGL);
	if (idealRatio < realRatio) {
	    Laya3D.init(540, 540 * realRatio, laya.webgl.WebGL);
	} else Laya3D.init(960 / realRatio, 960, laya.webgl.WebGL);
	var Loader = laya.net.Loader;
	var Handler = laya.utils.Handler;

	// var fun=new fun()
	// var Card=new Card()
	// var Ani=new Ani()
	//设置全屏
	Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
	Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
	Laya.stage.bgColor = null;
	Laya.Stat.show();
	//给舞台添加laya3d场景
	var scene = Laya.stage.addChild(new Laya.Scene());
	scene.on('click', undefined, qw);
	function qw() {
	    console.log('qw');
	}
	var ui = {};
	//mouse display
	// Laya.Mouse.hide()

	//****************************2D背景************************

	// var dialog = new Laya.Image("./assets/Assets/Assets/MahjongTiles/Textures/MahjongTile.png");
	// dialog.pos(100, 0);
	// var d2=Laya.stage.addChild(dialog);
	// d2.transform.translate(offset0);
	// var cure=new Laya.QuadMesh(50,50)
	// Laya.stage.addChild(cure);
	// var render=new Laya.RenderState()
	// render.owner=new Laya.Sprite3D(new Laya.Box(300,150,0.001))
	// render.camera=camera
	// console.log(render)
	//****************************3D场景***************************

	//初始化照相机
	var camera = scene.addChild(new Laya.Camera());
	camera.transform.position = new Laya.Vector3(config.camera.px, config.camera.py, config.camera.pz);
	camera.transform.rotate(new Laya.Vector3(config.camera.rx, config.camera.ry, config.camera.rz), true, false);
	camera.addComponent(CameraMoveScript);

	//生成平面，一个box
	var plane = scene.addChild(new Laya.MeshSprite3D(new Laya.BoxMesh(450, 280, 0.001)));
	var material = new Laya.StandardMaterial.load("./assets/Assets/Assets/MahjongTiles/majiangzuo.lmat");
	plane.meshRender.material = material;
	plane.transform.localPosition = new Laya.Vector3(-14, -5, 0);

	//生成方体

	var Mahjong = [];
	var row = 0;
	var offset = 0;
	var i = 0;
	var y = 0;
	//便利总类
	for (var i = 0; i < 144; i++) {
	    //便利每个总类牌数

	    //初始化  加载  
	    Mahjong[i] = scene.addChild(new Laya.MeshSprite3D(Laya.Mesh.load("./assets/Assets/Assets/MahjongTiles/Models/MahjongTiles-Dragon_Blank.lm")));
	}

	// var a=scene.addChild(Laya.Sprite3D.load("assets/123.lh"))
	// a.transform.localPosition=new Laya.Vector3(100,100,100)
	// var cloneSprite3D = Laya.Sprite3D.instantiate(a);
	// var b=scene.addChild(cloneSprite3D)
	//生成长城
	Card.init(Mahjong);
	// console.log(Mahjong[100].transform.localPosition.x=200)
	// fun.clear([1,2,3.4],Mahjong)

	// Mahjong[100].destroy()

	// hand_left(147,147-14)
	// hand_right(147-14,147-13-14)
	// hand_up(147-14-13,147-14-13*2)
	// center_down(147-14-13*2,147-14-13*4)
	// center_left(147-14-13*4,147-14-13*6)
	// center_up(147-14-13*6,147-14-13*8)
	// center_right(147-14-13*8,147-14-13*10)


	Laya.loader.load(["./assets/Assets/Assets/MahjongTiles/Textures/MahjongTile.png"], Laya.Handler.create(null, function () {
	    var btn = new Laya.Button();
	    btn.skin = "./assets/Assets/Assets/MahjongTiles/Textures/MahjongTile.png";
	    btn.label = "cardinfo";
	    btn.labelBold = true;
	    btn.labelSize = 20;
	    btn.sizeGrid = "4,4,4,4";
	    btn.size(40, 30);
	    btn.scale(Laya.Browser.pixelRatio, Laya.Browser.pixelRatio);
	    btn.pos(0, Laya.stage.height - 50 * Laya.Browser.pixelRatio);
	    btn.on(Laya.Event.CLICK, this, cardinfo);
	    Laya.stage.addChild(btn);
	    Laya.stage.on(Laya.Event.RESIZE, null, function () {
	        btn.pos(Laya.stage.width / 2 - btn.width * Laya.Browser.pixelRatio / 2, Laya.stage.height - 50 * Laya.Browser.pixelRatio);
	    });
	}));
	Laya.loader.load(["./assets/Assets/Assets/MahjongTiles/Textures/MahjongTile.png"], Laya.Handler.create(null, function () {
	    var btn = new Laya.Button();
	    btn.skin = "./assets/Assets/Assets/MahjongTiles/Textures/MahjongTile.png";
	    btn.label = "updateThrowCards";
	    btn.labelBold = true;
	    btn.labelSize = 20;
	    btn.sizeGrid = "4,4,4,4";
	    btn.size(40, 30);
	    btn.scale(Laya.Browser.pixelRatio, Laya.Browser.pixelRatio);
	    btn.pos(50, Laya.stage.height - 50 * Laya.Browser.pixelRatio);
	    btn.on(Laya.Event.CLICK, this, updateThrowCards);
	    Laya.stage.addChild(btn);
	    Laya.stage.on(Laya.Event.RESIZE, null, function () {
	        btn.pos(Laya.stage.width / 2 - btn.width * Laya.Browser.pixelRatio / 2, Laya.stage.height - 50 * Laya.Browser.pixelRatio);
	    });
	}));
	Laya.loader.load(["./assets/Assets/Assets/MahjongTiles/Textures/MahjongTile.png"], Laya.Handler.create(null, function () {
	    var btn = new Laya.Button();
	    btn.skin = "./assets/Assets/Assets/MahjongTiles/Textures/MahjongTile.png";
	    btn.label = "table.ask";
	    btn.labelBold = true;
	    btn.labelSize = 20;
	    btn.sizeGrid = "4,4,4,4";
	    btn.size(40, 30);
	    btn.scale(Laya.Browser.pixelRatio, Laya.Browser.pixelRatio);
	    btn.pos(100, Laya.stage.height - 50 * Laya.Browser.pixelRatio);
	    btn.on(Laya.Event.CLICK, this, table);
	    Laya.stage.addChild(btn);
	    Laya.stage.on(Laya.Event.RESIZE, null, function () {
	        btn.pos(Laya.stage.width / 2 - btn.width * Laya.Browser.pixelRatio / 2, Laya.stage.height - 50 * Laya.Browser.pixelRatio);
	    });
	}));
	Laya.loader.load(["./assets/Assets/Assets/MahjongTiles/Textures/MahjongTile.png"], Laya.Handler.create(null, function () {
	    var btn = new Laya.Button();
	    btn.skin = "./assets/Assets/Assets/MahjongTiles/Textures/MahjongTile.png";
	    btn.label = "side";
	    btn.labelBold = true;
	    btn.labelSize = 20;
	    btn.sizeGrid = "4,4,4,4";
	    btn.size(40, 30);
	    btn.scale(Laya.Browser.pixelRatio, Laya.Browser.pixelRatio);
	    btn.pos(150, Laya.stage.height - 50 * Laya.Browser.pixelRatio);
	    btn.on(Laya.Event.CLICK, this, gang);
	    Laya.stage.addChild(btn);
	    Laya.stage.on(Laya.Event.RESIZE, null, function () {
	        btn.pos(Laya.stage.width / 2 - btn.width * Laya.Browser.pixelRatio / 2, Laya.stage.height - 50 * Laya.Browser.pixelRatio);
	    });
	}));
	Laya.loader.load(["./assets/Assets/Assets/MahjongTiles/Textures/MahjongTile.png"], Laya.Handler.create(null, function () {
	    var btn = new Laya.Button();
	    btn.skin = "./assets/Assets/Assets/MahjongTiles/Textures/MahjongTile.png";
	    btn.label = "add";
	    btn.labelBold = true;
	    btn.labelSize = 20;
	    btn.sizeGrid = "4,4,4,4";
	    btn.size(40, 30);
	    btn.scale(Laya.Browser.pixelRatio, Laya.Browser.pixelRatio);
	    btn.pos(200, Laya.stage.height - 50 * Laya.Browser.pixelRatio);
	    btn.on(Laya.Event.CLICK, this, lesss);
	    Laya.stage.addChild(btn);
	    Laya.stage.on(Laya.Event.RESIZE, null, function () {
	        btn.pos(Laya.stage.width / 2 - btn.width * Laya.Browser.pixelRatio / 2, Laya.stage.height - 50 * Laya.Browser.pixelRatio);
	    });
	}));
	//骰子
	// var dice=scene.addChild(new Laya.MeshSprite3D(Laya.Mesh.load("assets/Assets/Assets/MahjongTiles/Models/MahjongTiles-Dice.lm")))
	// dice.transform.localPosition=new Laya.Vector3(50,0,60);
	i = 143;
	var a = 0;
	var hand_cards = [];
	function test() {
	    var names = [102, 103, 104, 105, 106, 107];
	    fun.clean_all(hand_cards);
	    for (var i = 0; i < names.length; i++) {
	        hand_cards[i] = scene.addChild(new Laya.MeshSprite3D(Laya.Mesh.load("assets/Assets/Assets/MahjongTiles/Models/" + config.Mahjong[names[i]] + ".lm")));
	        hand_cards[i].transform.localPosition = new Laya.Vector3(-config.offset.hand_z + i * config.offset.hand_interval, 20, config.offset.hand_x);
	        hand_cards[i].transform.rotate(new Laya.Vector3(-90, 90, 90), true, false);
	        hand_cards[i].addComponent(Laya.SphereCollider);
	    }
	}
	function hands(names) {

	    fun.clean_all(hand_cards);

	    for (var i = 0; i < names.length; i++) {
	        hand_cards[i] = scene.addChild(new Laya.MeshSprite3D(Laya.Mesh.load("assets/Assets/Assets/MahjongTiles/Models/" + config.Mahjong[names[i]] + ".lm")));
	        hand_cards[i].transform.localPosition = new Laya.Vector3(-config.offset.hand_z + i * config.offset.hand_interval, 20, config.offset.hand_x);
	        hand_cards[i].transform.rotate(new Laya.Vector3(-90, 90, 90), true, false);
	        hand_cards[i].addComponent(Laya.BoxCollider);
	        hand_cards[i].name = i;
	    }
	}

	//射线检测,射线相交的<最近物体>,最大检测距离30米,只检测第13层


	function prtMatrix(mat) {
	    var str = '';
	    for (var i = 0; i < mat.elements.length; i++) {
	        str += mat.elements[i] + ' ';
	    }
	    return str;
	}

	function out_card(e) {
	    console.log(222);
	    // var loop=new Laya.Timer()


	    // var i=0

	    // loop.frameLoop(1, this, function () {


	    // })   
	    console.log(e);
	}

	Card.init_touch(i, Mahjong, scene);
	i -= 13 * 4;

	function add(seat) {
	    var be;
	    seat == 1 ? be = 'left' : 0;
	    seat == 2 ? be = 'up' : 0;
	    seat == 3 ? be = 'right' : 0;
	    seat == 0 ? be = 'down' : 0;

	    Card.add(be, Mahjong[i], scene);
	}
	function less(seat, less) {
	    var be;
	    seat == 1 ? be = 'left' : 0;
	    seat == 2 ? be = 'up' : 0;
	    seat == 3 ? be = 'right' : 0;
	    seat == 0 ? be = 'down' : 0;

	    Card.out_card(be, config.Mahjong[less], scene);
	}
	function less1(seat, less) {
	    var be;
	    seat == 1 ? be = 'left' : 0;
	    seat == 2 ? be = 'up' : 0;
	    seat == 3 ? be = 'right' : 0;
	    seat == 0 ? be = 'down' : 0;

	    for (var i = 0; i < less.length; i++) {
	        Card.out_card(be, config.Mahjong[less[i]], scene, 1);
	    }
	}

	function side(seat, hands) {
	    var be;
	    seat == 1 ? be = 'left' : 0;
	    seat == 2 ? be = 'up' : 0;
	    seat == 3 ? be = 'right' : 0;
	    seat == 0 ? be = 'down' : 0;
	    Card.side(be, hands, scene);
	}

	function lesss() {}

	var async = __webpack_require__(18),
	    merge = __webpack_require__(21),
	    EventEmitter = __webpack_require__(23);
	var me = __webpack_require__(22); //, ani=require('./embedani.js');
	//var cardImg=require('./cardImg.js');
	//var parseR=require('./rule.js').parseR;
	//var WaitableEvent=require('./waitableEvent.js');


	var mahjong = function () {
	    function mahjong(opt, view) {
	        _classCallCheck(this, mahjong);

	        this.opt = opt;
	        this._view = view;
	    }

	    _createClass(mahjong, [{
	        key: 'msg',
	        //_socket.sendp({c:'table.ans',cardInfo:0})

	        value: function msg(pack) {
	            console.log(pack, me);
	            //接受服务端信息
	            var self = this;
	            switch (pack.c) {
	                case 'cardInfo':
	                    //发牌
	                    this.my_card = pack.handCards;
	                    hands(pack.handCards);
	                    break;
	                case 'anGang':
	                    //暗杠

	                    break;
	                case 'throwCards':
	                    //出牌

	                    break;
	                case 'updateShowCards':
	                    //吃碰明杠

	                    break;
	                case 'over':

	                    break;
	                case 'updateThrowCards':

	                    //throwCards[]   curCard[]
	                    add(pack.pos, pack.curCard);
	                    less(pack.pos, pack.throwCards[pack.throwCards.length - 1]);
	                    break;
	                case 'updateTime':

	                    break;
	                case 'table.ask':
	                    var event = [];
	                    var pass;
	                    if (pack.v[0] != 0) {
	                        pass = this._view.addChild(fun.create('过'));
	                        pass.x = 100;
	                        pass.onClick(null, function () {
	                            //_socket  
	                            console.log(pass);
	                            _socket.sendp({ c: 'table.ans', ans: 0 });
	                            self._view.removeChild(pass);
	                            for (var i = 0; i < event.length; i++) {
	                                self._view.removeChild(event[i]);
	                            }
	                        });

	                        for (var i = 0; i < pack.v.length; i++) {
	                            event[i] = this._view.addChild(fun.create(config.event[pack.v[i]]));
	                            event[i].x = (i + 2) * 100;
	                            event[i].onClick(pack.v[i], function () {
	                                //_socket this
	                                _socket.sendp({ c: 'table.ans', ans: this });
	                                self._view.removeChild(pass);
	                                for (var i = 0; i < event.length; i++) {
	                                    self._view.removeChild(event[i]);
	                                }
	                            });
	                        }
	                    } else {
	                        ready = 1;
	                    }
	                    break;
	                case 'roomInfo':

	                    break;

	            }
	        }
	    }], [{
	        key: 'create',
	        value: function create(opt, cb) {
	            if (typeof opt === 'function') {
	                cb = opt;opt = {};
	            }
	            console.log(2222);

	            Laya.loader.load([{ url: __webpack_require__(72), type: Loader.IMAGE },
	            // { url: require("./res/mahjong@atlas1.png"), type: Loader.IMAGE },
	            // { url: require("./res/mahjong@atlas_hy39cl.png"), type: Loader.IMAGE },
	            // { url: require("./res/mahjong@atlas_x4wy1a.png"), type: Loader.IMAGE },
	            // { url: require("./res/mahjong@atlas_x4wyz.jpg"), type: Loader.IMAGE },
	            { url: __webpack_require__(73), type: Loader.BUFFER }], Handler.create(null, function () {
	                fairygui.UIPackage.addPackage('mahjong');
	                var _view = fairygui.UIPackage.createObject("mahjong", "游戏开始").asCom;
	                _view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
	                _view.addRelation(fairygui.GRoot.inst, fairygui.RelationType.Size);
	                fairygui.GRoot.inst.addChild(_view);
	                var room = new mahjong(opt, _view);
	                room._view = _view;
	                //console.log(scene.zOrder=-1)
	                // Laya.stage.addChild(_view);
	                // var d2=Laya.stage.addChild(_view);

	                // _view.getChild('n30').url=me.face
	                // _view.getChild('n29').url=me.face
	                // _view.getChild('n28').url=me.face
	                // _view.getChild('n27').url=me.face


	                // Laya.SoundManager.playMusic(require('./res/snd/only_railgun.mp3'));
	                setTimeout(function () {
	                    Laya.SoundManager.playMusic(__webpack_require__(85), 0, 0);

	                    Laya.SoundManager.setMusicVolume(0);
	                    Laya.SoundManager.setSoundVolume(0);
	                }, 1000);

	                var loop = new Laya.Timer();
	                var collision = false;
	                loop.frameLoop(1, this, function () {
	                    var point = new Laya.Vector2();
	                    var ray = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0));
	                    point.elements[0] = Laya.stage.mouseX;
	                    point.elements[1] = Laya.stage.mouseY;
	                    camera.viewportPointToRay(point, ray);
	                    var _outHitInfo = new Laya.RaycastHit();

	                    Laya.Physics.rayCast(ray, _outHitInfo);

	                    if (_outHitInfo.distance !== -1) {
	                        collision = _outHitInfo.sprite3D.name;
	                    } else collision = false;
	                });

	                _view.onClick(null, function () {
	                    if (collision !== false) {
	                        _socket.sendp({ c: 'table.ans', cardInfo: my_card[collision] });
	                    }
	                });

	                /*ui event---------------------------------*/
	                //back
	                _view.getChild('n2').onClick(null, function () {

	                    ui.back = _view.addChild(fun.create('离开房间'));
	                    scene.zOrder = -1;
	                    //no
	                    ui.back.getChild('n5').onClick(null, function () {
	                        _view.removeChild(ui.back);
	                        scene.zOrder = 1;
	                    });
	                    //yes
	                    ui.back.getChild('n6').onClick(null, function () {});
	                });
	                //help
	                _view.getChild('n4').onClick(null, function () {
	                    ui.help = _view.addChild(fun.create('帮助'));
	                    scene.zOrder = -1;
	                    //close
	                    ui.help.getChild('n2').onClick(null, function () {
	                        _view.removeChild(ui.help);
	                        scene.zOrder = 1;
	                    });
	                    //
	                });
	                //set
	                _view.getChild('n6').onClick(null, function () {
	                    if (!ui.set) {
	                        ui.set = _view.addChild(fun.create("设置"));
	                        scene.zOrder = -1;
	                    } else {
	                        ui.set.visible = !ui.set.visible;
	                        scene.zOrder == 1 ? scene.zOrder = -1 : scene.zOrder = 1;
	                    }
	                    //close
	                    ui.set.getChild('n4').onClick(null, function () {
	                        //_view.displayObject.on("display",null,ui.option);
	                        ui.set.visible = false;
	                        scene.zOrder = 1;
	                        // _view.removeChild(ui.option)
	                        // ui.option=null
	                    });
	                    //普通话
	                    ui.set.getChild('n7').onClick(null, function () {});
	                    //上海话
	                    ui.set.getChild('n8').onClick(null, function () {});
	                    //音效
	                    ui.set.getChild('n16').on("mouseup", null, function () {
	                        var be = ui.set.getChild('n16')._value;
	                        Laya.SoundManager.setMusicVolume(be / 100);
	                    });
	                    //音乐
	                    ui.set.getChild('n17').on("mouseup", null, function () {
	                        var be = ui.set.getChild('n17')._value;
	                        Laya.SoundManager.setSoundVolume(be / 100);
	                    });
	                    //屏蔽语音
	                    ui.set.getChild('n20').onClick(null, function () {});
	                    //关闭聊天
	                    ui.set.getChild('n23').onClick(null, function () {});
	                });
	                //统计
	                _view.getChild('n7').onClick(null, function () {});
	                //托管
	                _view.getChild('n8').onClick(null, function () {
	                    _view.getController('tuoguan').selectedIndex = 1;
	                });
	                //取消托管
	                _view.getChild('n32').onClick(null, function () {
	                    _view.getController('tuoguan').selectedIndex = 0;
	                });
	                _view.getController('start').selectedIndex = 1;
	                //开始
	                _view.getChild('n33').onClick(null, function () {
	                    _socket.sendp({ c: 'gamestart' });
	                    _view.getController('start').selectedIndex = 0;
	                });
	                //语音
	                _view.getChild('n9').onClick(null, function () {});

	                cb(null, room);
	            }));
	        }
	    }]);

	    return mahjong;
	}();

	var my_card = [];
	function msg(pack) {
	    console.log(pack);
	    switch (pack.c) {
	        case 'cardInfo':
	            //发牌
	            my_card = pack.handCards;
	            hands(pack.handCards);
	            break;
	        case 'anGang':
	            //暗杠

	            break;
	        case 'throwCards':
	            //出牌

	            break;
	        case 'updateShowCards':
	            //吃碰明杠

	            break;
	        case 'over':

	            break;
	        case 'updateThrowCards':

	            //throwCards[]   curCard[]
	            add(pack.pos, pack.curCard);
	            less(pack.pos, pack.throwCards[pack.throwCards.length - 1]);
	            break;
	        case 'updateTime':

	            break;
	        case 'table.ask':
	            break;
	        case 'roomInfo':

	            break;
	    }
	}
	function cardinfo() {

	    msg({ "c": "cardInfo", "handCards": [101, 102, 103, 104, 105] });
	}
	function updateThrowCards() {
	    msg({ "c": "updateThrowCards", "pos": 0, "throwCards": [101, 102, 103, 104, 105] });
	}
	function table() {}
	function gang() {
	    side(0, ['201', '202']);
	}
	module.exports = mahjong.create;
	//_socket.sendp({c:'gamestart'})
	//打出去的牌
	// throwCards:[],
	// //手上的牌
	// handCards:[],
	// //碰或者杠牌
	// showCards:[],
	// //暗杠
	// showAnGangCards:[],
	// //花
	// huaCard:[],
	// //刚抽到的一张牌
	// curCard:0


	// for(var i=0;i<config.Mahjong.length;i++){
	//     Mahjong["MahjongTiles-Bam_1"].transform.localRotation=new Laya.Vector4(0,0,0,1)
	// }


	// var mesh = scene.addChild(new Laya.MeshSprite3D(Laya.Mesh.load("./assets/Models/MahjongTiles-Bam_1.lm")));

	// Laya.Utils3D.convert3DCoordTo2DScreenCoord(translate, convertTranslate);
	// mesh.transform.localPosition = convertTranslate;
	// mesh.transform.localScale = new Laya.Vector3(100, 100, 100);//球的直径在三维空间中为1米（放大100倍，此时为100米），当正交投影矩阵的宽高等同于像素宽高时，一米可认为一个像素，所以球等于200个像素,可与2D直接混合。
	// // //窗口尺寸变化相关属性重置。
	// Laya.stage.on(Laya.Event.RESIZE, null, function () {
	//     camera.orthographicVerticalSize = Laya.RenderState.clientHeight;
	//     Laya.Utils3D.convert3DCoordTo2DScreenCoord(translate, convertTranslate);
	//     mesh.transform.localPosition = convertTranslate;
	// });
	//************************************************************

	// var skin = "./assets/Mahjong.jpg";
	// //****************************2D UI***************************
	// Laya.loader.load(skin, Laya.Handler.create(this, onLoadComplete));
	// //************************************************************


	var Scene = function (_EventEmitter) {
	    _inherits(Scene, _EventEmitter);

	    function Scene() {
	        _classCallCheck(this, Scene);

	        return _possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).call(this));
	        // this.on('newListener', function(event, listener) {
	        //  listener.call(this, this);
	        // });
	    }

	    _createClass(Scene, [{
	        key: '_update',
	        value: function _update(obj) {
	            if (obj.$) {
	                if (obj.$.init) {
	                    for (var k in this) {
	                        if (typeof this[k] == 'function' || k.indexOf('_') == 0) continue;
	                        delete this[k];
	                    }
	                    merge.recursive(this, obj);
	                    this.emit('inited', this);
	                    for (var k in this) {
	                        if (typeof this[k] == 'function' || k.indexOf('_') == 0) continue;
	                        this.emit('' + k + 'chgd', this);
	                    }
	                    return;
	                } else if (obj.$.delete) {
	                    var delCmd = obj.$.delete;
	                    for (var i = 0; i < delCmd.length; i++) {
	                        var p = delCmd[i].split('.');
	                        this.ensuredelete(p);
	                        this.emit(p[0] + 'chgd', this);
	                    }
	                } else if (obj.$.set) {
	                    var delCmd = obj.$.set;
	                    for (var i = 0; i < delCmd.length; i++) {
	                        var p = delCmd[i].split('.');
	                        this.ensuredelete(p);
	                    }
	                }
	            }
	            merge.recursive(this, obj);
	            for (var ele in obj) {
	                this.emit('' + ele + 'chgd', this);
	            }
	        }
	    }, {
	        key: 'ensuredelete',
	        value: function ensuredelete(p) {
	            var o = this;
	            for (var i = 0; i < p.length - 1; i++) {
	                if (o[p[i]]) o = o[p[i]];else return false;
	            }
	            if (o[p[p.length - 1]]) delete o[p[p.length - 1]];
	        }
	    }]);

	    return Scene;
	}(EventEmitter);

/***/ },

/***/ 81:
/***/ function(module, exports) {

	"use strict";

	var config = {
		"Mahjong": {
			"301": "MahjongTiles-Bam_1",
			"302": "MahjongTiles-Bam_2",
			"303": "MahjongTiles-Bam_3",
			"304": "MahjongTiles-Bam_4",
			"305": "MahjongTiles-Bam_5",
			"306": "MahjongTiles-Bam_6",
			"307": "MahjongTiles-Bam_7",
			"308": "MahjongTiles-Bam_8",
			"309": "MahjongTiles-Bam_9",
			"101": "MahjongTiles-Crak_1",
			"102": "MahjongTiles-Crak_2",
			"103": "MahjongTiles-Crak_3",
			"104": "MahjongTiles-Crak_4",
			"105": "MahjongTiles-Crak_5",
			"106": "MahjongTiles-Crak_6",
			"107": "MahjongTiles-Crak_7",
			"108": "MahjongTiles-Crak_8",
			"109": "MahjongTiles-Crak_9",
			//"":"MahjongTiles-Dice":4,
			"201": "MahjongTiles-Dot_1",
			"202": "MahjongTiles-Dot_2",
			"203": "MahjongTiles-Dot_3",
			"204": "MahjongTiles-Dot_4",
			"205": "MahjongTiles-Dot_5",
			"206": "MahjongTiles-Dot_6",
			"207": "MahjongTiles-Dot_7",
			"208": "MahjongTiles-Dot_8",
			"209": "MahjongTiles-Dot_9",
			"0": "MahjongTiles-Dragon_Blank",
			"406": "MahjongTiles-Dragon_Green",
			"405": "MahjongTiles-Dragon_Red",
			"407": "MahjongTiles-Dragon_White",
			"501": "MahjongTiles-Flower_1",
			"502": "MahjongTiles-Flower_2",
			"503": "MahjongTiles-Flower_3",
			"504": "MahjongTiles-Flower_4",
			"505": "MahjongTiles-Season_1",
			"506": "MahjongTiles-Season_2",
			"507": "MahjongTiles-Season_3",
			"508": "MahjongTiles-Season_4",
			"401": "MahjongTiles-Wind_East",
			"402": "MahjongTiles-Wind_North",
			"403": "MahjongTiles-Wind_South",
			"404": "MahjongTiles-Wind_West"

		},
		"event": {
			"0": "",
			"1": "吃",
			"2": "碰",
			"3": "杠",
			"4": "胡"

		},
		"camera": {
			"rx": -50,
			"ry": 0,
			"rz": 0,
			"px": 0,
			"py": 150,
			"pz": 150
		},
		"offset": {
			"left_x": 75,
			"left_z": 60,
			"hand_x": 100,
			"hand_z": 60,
			"center_x": 30,
			"center_z": 20,
			"center_row": 6,
			"interval": 7,
			"row_interval": 10,
			"hand_interval": 8

		},
		"side": {
			"x": 80,
			"z": 90
		}

	};
	module.exports = config;

/***/ },

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var config = __webpack_require__(81);
	function fun() {}
	fun.prototype.cleans = function (arr, Mahjong) {
	    for (var i = 0; i < arr.length; i++) {
	        Mahjong[arr[i]].destroy();
	    }
	};
	fun.prototype.clean_all = function (Mahjongs) {
	    for (var i = 0; i < Mahjongs.length; i++) {
	        Mahjongs[i].destroy();
	    }
	};
	fun.prototype.clean = function (Mahjong) {
	    Mahjong.destroy();
	};
	fun.prototype.isInteger = function (obj) {
	    return obj % 1 === 0;
	};
	fun.prototype.create = function (name) {
	    return fairygui.UIPackage.createObject("mahjong", name).asCom;
	};

	// fun.prototype.hand_right=function(num,count){
	// var right=0
	//     for(var i=num;i>count;i--){
	//         Mahjong[i].transform.localPosition=new Laya.Vector3(config.offset.hand_x,0,-config.offset.hand_z+right*config.offset.hand_interval)
	// //         new Laya.Quaternion("0.7071067690849304","0.7071067690849304",
	// // "-4.636292771920125e-8","-1.5454313384566376e-8")
	//         Mahjong[i].transform.rotate(new Laya.Vector3(90, 90, 180), true, false)
	//         right++
	//     }

	// }
	// fun.prototype.hand_up=function(num,count){
	// var up=0
	//     for(var i=num;i>count;i--){
	//         Mahjong[i].transform.localPosition=new Laya.Vector3(-config.offset.hand_z+up*config.offset.hand_interval,0,-config.offset.hand_x)

	//         Mahjong[i].transform.rotate(new Laya.Vector3(90, 90, -90), true, false)
	//         console.log(Mahjong[i].transform.rotation)
	//         up++
	//     }
	// }
	// fun.prototype.hand_down=function(name,){
	// var down=0
	//     for(var i=147-14-13*2;i>147-14-13*3;i--){
	//         Mahjong[i].transform.localPosition=new Laya.Vector3(-config.offset.hand_z+down*config.offset.hand_interval,0,config.offset.hand_x)
	//         Mahjong[i].transform.rotate(new Laya.Vector3(90, 90, 90), true, false)
	//         down++
	//     }

	// }
	// fun.prototype.center_left=function(num,count){
	// var left=0
	// var offset_left=0
	// var center_left=0
	//     for(var i=num;i>count;i--){
	//         if(left/6-1==center_left){
	//             center_left++
	//             offset_left=-left*7
	//         }
	//         Mahjong[i].transform.localPosition=new Laya.Vector3(-30-center_left*10,0,-20+offset_left+left*7)
	//         Mahjong[i].transform.rotate(new Laya.Vector3(0, -90, 180), true, false)
	//         left++
	//     }
	// }
	// fun.prototype.center_up=function(num,count){
	// var up=0
	// var offset_up=0
	// var center_up=0
	//     for(var i=num;i>count;i--){
	//         if(up/6-1==center_up){
	//             center_up++
	//             offset_up=-up*7
	//         }
	//         Mahjong[i].transform.localPosition=new Laya.Vector3(-20+offset_up+up*7,0,-30-center_up*10)
	//         Mahjong[i].transform.rotate(new Laya.Vector3(0, 0, 180), true, false)
	//         up++
	//     }
	// }
	// fun.prototype.center_right=function(num,count){
	// var right=0
	// var offset_right=0
	// var center_right=0
	//     for(var i=num;i>count;i--){
	//         if(right/6-1==center_right){
	//             center_right++
	//             offset_right=-right*7
	//         }
	//         Mahjong[i].transform.localPosition=new Laya.Vector3(30+center_right*10,0,-20+offset_right+right*7)
	//         Mahjong[i].transform.rotate(new Laya.Vector3(0, 90, 180), true, false)
	//         right++
	//     }


	// }
	// fun.prototype.center_down=function(num,count){
	// var down=0
	// var offset_down=0
	// var center_down=0
	//     for(var i=num;i>count;i--){
	//         if(down/6-1==center_down){
	//             center_down++
	//             offset_down=-down*7
	//         }
	//         Mahjong[i].transform.localPosition=new Laya.Vector3(-20+offset_down+down*7,0,30+center_down*10)
	//         Mahjong[i].transform.rotate(new Laya.Vector3(0, 180, 180), true, false)
	//         down++
	//     }

	// }

	fun.prototype.randomNum = function (minNum, maxNum) {
	    switch (arguments.length) {
	        case 1:
	            return parseInt(Math.random() * minNum + 1, 10);
	            break;
	        case 2:
	            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
	            break;
	        default:
	            return 0;
	            break;
	    }
	};

	module.exports = new fun();

/***/ },

/***/ 83:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var fun = __webpack_require__(82);
	var Ani = __webpack_require__(84);
	var config = __webpack_require__(81);
	function Card() {}
	Card.prototype.init = function (Mahjong) {
	    var row = 0;
	    var offset = 0;
	    var y = 5;
	    for (var i = 0; i < 144; i++) {
	        if (y == 0) y = 5;else y = 0;

	        if (i != 0 && !fun.isInteger(i / 2)) {
	            offset -= 7;
	        }

	        //10个一row
	        if (i / 18 - 1 == row) {
	            row++;
	            if (fun.isInteger(row / 2)) {
	                offset -= 18 * 7;
	            }
	        }
	        if (row < 2 && row >= 0) {
	            //设置位置
	            Mahjong[i].transform.localPosition = new Laya.Vector3(-config.offset.left_x, y, -config.offset.left_z + offset + i * config.offset.interval);
	            //Mahjong[i].transform.rotate(new Laya.Vector3(-90, 90, 0), true, false);
	            Mahjong[i].transform.rotate(new Laya.Vector3(0, 90, 180), true, false);
	            // Mahjong[key].transform.lookAt(camera.position,camera.position,false)
	            // Mahjong[key].transform.localScale=new Laya.Vector3(2, 2, 2);
	        }
	        if (row < 4 && row >= 2) {
	            Mahjong[i].transform.localPosition = new Laya.Vector3(-config.offset.left_z + offset + i * config.offset.interval, y, -config.offset.left_x);
	            //Mahjong[i].transform.rotate(new Laya.Vector3(-90, 90, 0), true, false);
	            Mahjong[i].transform.rotate(new Laya.Vector3(0, 0, 180), true, false);
	        }
	        if (row < 6 && row >= 4) {
	            Mahjong[i].transform.localPosition = new Laya.Vector3(config.offset.left_x, y, -config.offset.left_z + offset + i * config.offset.interval);
	            //Mahjong[i].transform.rotate(new Laya.Vector3(-90, 90, 0), true, false);
	            Mahjong[i].transform.rotate(new Laya.Vector3(0, 0, 180), true, false);
	        }
	        if (row < 8 && row >= 6) {
	            Mahjong[i].transform.localPosition = new Laya.Vector3(-config.offset.left_z + offset + i * config.offset.interval, y, config.offset.left_x);
	            //Mahjong[i].transform.rotate(new Laya.Vector3(-90, 90, 0), true, false);
	            Mahjong[i].transform.rotate(new Laya.Vector3(0, 0, 180), true, false);
	        }
	    }
	};

	Card.prototype.init_touch = function (i, Mahjong, scene) {
	    var loop = new Laya.Timer();
	    var i1 = 0;
	    var seat = 0;
	    var ma = [];

	    loop.frameLoop(10, this, function () {
	        ma = [];
	        for (var i2 = 0; i2 < 4; i2++) {
	            ma[i2] = Mahjong[i - i2];
	        }i -= 4;
	        seat == 0 ? this.add4("left", ma, scene) : 0;
	        seat == 1 ? this.add4("up", ma, scene) : 0;
	        seat == 2 ? this.add4("right", ma, scene) : 0;
	        seat == 3 ? this.add4("down", ma, scene) : 0;
	        seat++;
	        if (seat == 4) {
	            seat = 0;
	        }

	        if (i1 == 11) {
	            this.adds("left", Mahjong[i], scene);
	            this.adds("up", Mahjong[i - 1], scene);
	            this.adds("right", Mahjong[i - 2], scene);
	            this.adds("down", Mahjong[i - 3], scene);
	            i -= 4;
	            Laya.timer.clearAll(loop);
	        }
	        i1++;
	    });
	};

	//摸牌
	Card.prototype.add = function (seat, old_card, scene) {
	    var card = scene.addChild(new Laya.MeshSprite3D(Laya.Mesh.load("assets/Assets/Assets/MahjongTiles/Models/" + config.Mahjong["0"] + ".lm")));
	    var vector = old_card.transform.localPosition;
	    card.transform.rotate(new Laya.Vector3(0, 0, 180), true, false);
	    fun.clean(old_card);
	    if (seat == "left") {
	        //设置位置
	        Ani.ani_get(vector, new Laya.Vector3(-config.offset.hand_x, 0, -config.offset.hand_z + 14 * config.offset.hand_interval), new Laya.Vector3(90, 90, 0), card);
	        //card.transform.localPosition=new Laya.Vector3(-config.offset.hand_x,0,-config.offset.hand_z+this.hand_left*config.offset.interval)

	        //card.transform.rotate(new Laya.Vector3(90, 90, 180), true, false)
	        this.hand_left_card[this.hand_left] = card;
	        this.hand_left++;
	    }
	    if (seat == "right") {
	        Ani.ani_get(vector, new Laya.Vector3(config.offset.hand_x, 0, -config.offset.hand_z + 14 * config.offset.hand_interval), new Laya.Vector3(90, -90, 0), card);
	        //card.transform.localPosition=new Laya.Vector3(config.offset.hand_x,0,-config.offset.hand_z+this.hand_right*config.offset.hand_interval)
	        //card.transform.rotate(new Laya.Vector3(90, -90, 180), true, false)
	        this.hand_right_card[this.hand_right] = card;
	        this.hand_right++;
	    }
	    if (seat == "up") {
	        Ani.ani_get(vector, new Laya.Vector3(-config.offset.hand_z + 14 * config.offset.hand_interval, 0, -config.offset.hand_x), new Laya.Vector3(90, 90, -90), card);
	        //card.transform.localPosition=new Laya.Vector3(-config.offset.hand_z+this.hand_up*config.offset.hand_interval,0,-config.offset.hand_x)
	        //card.transform.rotate(new Laya.Vector3(90, 90, -90), true, false)
	        this.hand_up_card[this.hand_up] = card;
	        this.hand_up++;
	    }
	    if (seat == "down") {
	        Ani.ani_get(vector, new Laya.Vector3(-config.offset.hand_z + 14 * config.offset.hand_interval, 0, config.offset.hand_x), new Laya.Vector3(90, 90, 90), card);
	        //card.transform.localPosition=new Laya.Vector3(-config.offset.hand_z+this.hand_down*config.offset.hand_interval,0,config.offset.hand_x)
	        //card.transform.rotate(new Laya.Vector3(90, 90, 90), true, false)
	        this.hand_down_card[this.hand_down] = card;
	        this.hand_down++;
	    }
	};

	//开具手牌
	Card.prototype.adds = function (seat, old_card, scene) {
	    //创建牌
	    var card = scene.addChild(new Laya.MeshSprite3D(Laya.Mesh.load("assets/Assets/Assets/MahjongTiles/Models/" + config.Mahjong["0"] + ".lm")));
	    var vector = old_card.transform.localPosition;
	    card.transform.rotate(new Laya.Vector3(0, 0, 180), true, false);
	    fun.clean(old_card);
	    if (seat == "left") {
	        //设置位置

	        Ani.ani_get(vector, new Laya.Vector3(-config.offset.hand_x, 0, -config.offset.hand_z + this.hand_left * config.offset.hand_interval), new Laya.Vector3(90, 90, 0), card);
	        //card.transform.localPosition=new Laya.Vector3(-config.offset.hand_x,0,-config.offset.hand_z+this.hand_left*config.offset.interval)

	        //card.transform.rotate(new Laya.Vector3(90, 90, 180), true, false)
	        this.hand_left_card[this.hand_left] = card;
	        this.hand_left++;
	    }
	    if (seat == "right") {
	        Ani.ani_get(vector, new Laya.Vector3(config.offset.hand_x, 0, -config.offset.hand_z + this.hand_right * config.offset.hand_interval), new Laya.Vector3(90, -90, 0), card);
	        //card.transform.localPosition=new Laya.Vector3(config.offset.hand_x,0,-config.offset.hand_z+this.hand_right*config.offset.hand_interval)
	        //card.transform.rotate(new Laya.Vector3(90, -90, 180), true, false)
	        this.hand_right_card[this.hand_right] = card;
	        this.hand_right++;
	    }
	    if (seat == "up") {
	        Ani.ani_get(vector, new Laya.Vector3(-config.offset.hand_z + this.hand_up * config.offset.hand_interval, 0, -config.offset.hand_x), new Laya.Vector3(90, 90, -90), card);
	        //card.transform.localPosition=new Laya.Vector3(-config.offset.hand_z+this.hand_up*config.offset.hand_interval,0,-config.offset.hand_x)
	        //card.transform.rotate(new Laya.Vector3(90, 90, -90), true, false)
	        this.hand_up_card[this.hand_up] = card;
	        this.hand_up++;
	    }
	    if (seat == "down") {
	        Ani.ani_get(vector, new Laya.Vector3(-config.offset.hand_z + this.hand_down * config.offset.hand_interval, 0, config.offset.hand_x), new Laya.Vector3(90, 90, 90), card);
	        //card.transform.localPosition=new Laya.Vector3(-config.offset.hand_z+this.hand_down*config.offset.hand_interval,0,config.offset.hand_x)
	        //card.transform.rotate(new Laya.Vector3(90, 90, 90), true, false)
	        this.hand_down_card[this.hand_down] = card;
	        this.hand_down++;
	    }

	    // var left=0
	    //     for(var i=num;i>count;i--){
	    //         Mahjong[i].transform.localPosition=new Laya.Vector3(-config.offset.hand_x,0,-config.offset.hand_z+left*config.offset.hand_interval)
	    //         Mahjong[i].transform.rotate(new Laya.Vector3(90, -90, 180), true, false)
	    //         left++
	    //     }

	};
	//4次 手牌
	Card.prototype.add4 = function (seat, Mahjongs, scene) {
	    for (var i = 0; i < 4; i++) {
	        this.adds(seat, Mahjongs[i], scene);
	    }
	};
	//减少手牌
	Card.prototype.less = function (seat) {
	    if (seat == "left") {
	        //查找数组里是否有值
	        if (this.hand_left_card[0]) {
	            //是否已被销毁
	            if (!this.hand_left_card[0].destroyed) {
	                fun.cleans([this.hand_left - 1], this.hand_left_card);
	                this.hand_left--;
	            }
	        }
	    }
	    if (seat == "right") {
	        if (this.hand_right_card[0]) {
	            if (!this.hand_right_card[0].destroyed) {
	                fun.cleans([this.hand_right - 1], this.hand_right_card);
	                this.hand_right--;
	            }
	        }
	    }
	    if (seat == "up") {
	        if (this.hand_up_card[0]) {
	            if (!this.hand_up_card[0].destroyed) {
	                fun.cleans([this.hand_up - 1], this.hand_up_card);
	                this.hand_up--;
	            }
	        }
	    }

	    // var left=0
	    //     for(var i=num;i>count;i--){
	    //         Mahjong[i].transform.localPosition=new Laya.Vector3(-config.offset.hand_x,0,-config.offset.hand_z+left*config.offset.hand_interval)
	    //         Mahjong[i].transform.rotate(new Laya.Vector3(90, -90, 180), true, false)
	    //         left++
	    //     }

	};
	//出牌
	Card.prototype.out_card = function (seat, name, scene, less) {
	    var card = scene.addChild(new Laya.MeshSprite3D(Laya.Mesh.load("assets/Assets/Assets/MahjongTiles/Models/" + name + ".lm")));
	    // var test=scene.addChild(new Laya.MeshSprite3D(Laya.Mesh.load("1/1.lm")));
	    // test.transform.localScale=new Laya.Vector3(100, 100, 100);
	    //偏移量init
	    var offset = 0;
	    var row = 0;
	    var row_offset = config.offset.center_row * config.offset.interval;
	    var ran = 0;
	    if (seat == "left") {
	        //查找数组里是否有值
	        if (this.hand_left_card[0]) {
	            //是否已被销毁
	            if (!this.hand_left_card[0].destroyed) {

	                var ran = fun.randomNum(0, this.hand_left - 2);
	                //获取打出牌位置
	                var vector = this.hand_left_card[ran].transform.localPosition;
	                //清除老手牌
	                fun.cleans([ran], this.hand_left_card);
	                this.hand_left--;
	                //Laya.timer.clear(a)
	                // Laya.TimeLine.to(card,card,60,null,null)
	                //计算偏移量
	                row = Math.floor(this.center_left / config.offset.center_row);
	                offset = row * row_offset;
	                //增加中心四方形牌
	                card.transform.localPosition = vector;
	                Ani.ani_out(vector, new Laya.Vector3(-config.offset.center_x - row * config.offset.row_interval, 0, -config.offset.center_z - offset + this.center_left * config.offset.interval), card);
	                //card.transform.lookAt(new Laya.Vector3(-config.offset.center_x-row*config.offset.row_interval,0,-config.offset.center_z-offset+this.center_left*config.offset.interval),new Laya.Vector3(0,0,0))
	                //card.transform.localPosition=new Laya.Vector3(-config.offset.center_x-row*config.offset.row_interval,0,-config.offset.center_z-offset+this.center_left*config.offset.interval)
	                card.transform.rotate(new Laya.Vector3(0, 90, 0), true, false);
	                this.center_left_card[this.center_left] = card;
	                this.center_left++;

	                this.sort(seat, ran, this.hand_left, less);
	                return;
	            }
	        }
	    }
	    if (seat == "right") {
	        if (this.hand_right_card[0]) {
	            if (!this.hand_right_card[0].destroyed) {
	                var ran = fun.randomNum(0, this.hand_right - 2);
	                var vector = this.hand_right_card[ran].transform.localPosition;
	                fun.cleans([ran], this.hand_right_card);
	                this.hand_right--;
	                //计算偏移量
	                row = Math.floor(this.center_right / config.offset.center_row);
	                offset = row * row_offset;
	                card.transform.localPosition = vector;
	                Ani.ani_out(vector, new Laya.Vector3(config.offset.center_x + row * config.offset.row_interval, 0, -config.offset.center_z + row_offset + offset - this.center_right * config.offset.interval), card);
	                //card.transform.localPosition=new Laya.Vector3(config.offset.center_x+row*config.offset.row_interval,0,-config.offset.center_z+row_offset+offset-this.center_right*config.offset.interval)
	                card.transform.rotate(new Laya.Vector3(0, -90, 0), true, false);
	                this.center_right_card[this.center_right] = card;
	                this.center_right++;
	                this.sort(seat, ran, this.hand_right, less);
	                return;
	            }
	        }
	    }
	    if (seat == "up") {
	        if (this.hand_up_card[0]) {
	            if (!this.hand_up_card[0].destroyed) {
	                var ran = fun.randomNum(0, this.hand_up - 2);
	                var vector = this.hand_up_card[ran].transform.localPosition;
	                fun.cleans([ran], this.hand_up_card);
	                this.hand_up--;
	                //计算偏移量
	                row = Math.floor(this.center_up / config.offset.center_row);
	                offset = row * row_offset;
	                card.transform.localPosition = vector;
	                Ani.ani_out(vector, new Laya.Vector3(-config.offset.center_z + row_offset + offset - this.center_up * config.offset.interval, 0, -config.offset.center_x - row * config.offset.row_interval), card);
	                //card.transform.localPosition=new Laya.Vector3(-config.offset.center_z+row_offset+offset-this.center_up*config.offset.interval,0,-config.offset.center_x-row*config.offset.row_interval)
	                card.transform.rotate(new Laya.Vector3(0, 0, 0), true, false);

	                this.center_up_card[this.center_up] = card;
	                this.center_up++;
	                this.sort(seat, ran, this.hand_up, less);
	                return;
	            }
	        }
	    }
	    if (seat == "down") {
	        if (this.hand_down_card[0]) {
	            if (!this.hand_down_card[0].destroyed) {
	                var ran = fun.randomNum(0, this.hand_down - 2);
	                var vector = this.hand_down_card[ran].transform.localPosition;
	                fun.cleans([ran], this.hand_down_card);
	                this.hand_down--;
	                //计算偏移量
	                row = Math.floor(this.center_down / config.offset.center_row);
	                offset = row * row_offset;
	                card.transform.localPosition = vector;
	                Ani.ani_out(vector, new Laya.Vector3(-config.offset.center_z - offset + this.center_down * config.offset.interval, 0, config.offset.center_x + row * config.offset.row_interval), card);
	                //card.transform.localPosition=new Laya.Vector3(-config.offset.center_z-offset+this.center_down*config.offset.interval,0,config.offset.center_x+row*config.offset.row_interval)
	                card.transform.rotate(new Laya.Vector3(0, 180, 0), true, false);

	                this.center_down_card[this.center_down] = card;
	                this.center_down++;
	                this.sort(seat, ran, this.hand_down, less);
	                return;
	            }
	        }

	        // if(this.hand_up_card[0]){
	        //     if(!this.hand_up_card[0].destroyed){
	        //         this.cleans([this.hand_up-1],this.hand_up_card)
	        //         this.hand_up--
	        //     }
	        // }
	    }

	    //card.destroy()
	};

	Card.prototype.tied = function (seat, ran, vector) {
	    if (seat == "left") {
	        for (var i = 0; i < this.hand_left; i++) {
	            if (i >= ran) {
	                Ani.ani_move(vector, this.hand_left_card[i]);
	                //this.hand_left_card[i].transform.translate(new Laya.Vector3(0,0,-8),false)
	            }
	        }
	    }
	    if (seat == "up") {
	        for (var i = 0; i < this.hand_up; i++) {
	            if (i >= ran) {
	                Ani.ani_move(vector, this.hand_up_card[i]);
	                //this.hand_left_card[i].transform.translate(new Laya.Vector3(0,0,-8),false)
	            }
	        }
	    }
	    if (seat == "right") {
	        for (var i = 0; i < this.hand_right; i++) {
	            if (i >= ran) {
	                Ani.ani_move(vector, this.hand_right_card[i]);
	                //this.hand_left_card[i].transform.translate(new Laya.Vector3(0,0,-8),false)
	            }
	        }
	    }
	    if (seat == "down") {
	        for (var i = 0; i < this.hand_down; i++) {
	            if (i >= ran) {
	                Ani.ani_move(vector, this.hand_down_card[i]);
	                //this.hand_left_card[i].transform.translate(new Laya.Vector3(0,0,-8),false)
	            }
	        }
	    }
	};

	//整理卡牌
	Card.prototype.sort = function (seat, ran_out, num, less) {
	    var ran_get = 0;
	    var offset = 0;
	    var length = 0;
	    while (1) {

	        ran_get = fun.randomNum(0, num);
	        if (ran_get != ran_out) {
	            break;
	        }
	    }
	    if (ran_get < ran_out) {
	        offset = 1;
	        length = 1;
	    } else {
	        offset = 1;
	        length = 0;
	    }
	    if (ran_out == num) {
	        offset = 0;
	    }
	    if (ran_get == num) {}

	    if (seat == "left") {
	        //整理数组        
	        //console.log(this.hand_left_card.length)
	        // for(var i=0;i<this.hand_left_card.length;i++){
	        //     if(i>=ran_out){
	        //         this.hand_left_card[i-1]=this.hand_left_card[i]
	        //     }
	        // }
	        this.hand_left_card.splice(ran_out, 1);

	        // this.hand_left_card[i].transform.translate(new Laya.Vector3(0,0,-7),false)
	        // //并列进牌空隙
	        // for(var i=0;i<this.hand_left_card.length;i++){
	        //     if(i>=ran_get){
	        //         Ani.ani_move(new Laya.Vector3(0,0,-8),this.hand_left_card[i])
	        //        // this.hand_left_card[i].transform.translate(new Laya.Vector3(0,0,-7),false)
	        //     }
	        // } 
	        //console.log(ran_out,this.hand_left_card[ran_out])
	        //并列出牌空隙
	        this.tied(seat, ran_out, new Laya.Vector3(0, 0, -8));

	        if (!less) {
	            this.hand_left_card.splice(ran_get, 0, this.hand_left_card[this.hand_left - 1]);
	            //空出 进牌空隙 0123  1233
	            for (var i = 0; i < this.hand_left; i++) {

	                if (i >= ran_get) {
	                    Ani.ani_move(new Laya.Vector3(0, 0, 8), this.hand_left_card[i]);
	                    //this.hand_left_card[i].transform.translate(new Laya.Vector3(0,0,8),false)
	                }
	            }
	            //插入进牌空隙
	            Ani.ani_insert(new Laya.Vector3(0, 0, 8 * (-this.hand_left - (13 - this.hand_left) - offset + ran_get)), this.hand_left_card[ran_get]);
	        }
	        console.log("left");
	        console.log(ran_get, ran_out);
	        console.log(-this.hand_left - offset + ran_get);
	    }
	    if (seat == "up") {

	        this.hand_up_card.splice(ran_out, 1);

	        // this.hand_left_card[i].transform.translate(new Laya.Vector3(0,0,-7),false)

	        //并列出牌空隙
	        this.tied(seat, ran_out, new Laya.Vector3(-8, 0, 0));
	        if (!less) {
	            this.hand_up_card.splice(ran_get, 0, this.hand_up_card[this.hand_up - 1]);
	            //空出 进牌空隙 0123  1233
	            for (var i = 0; i < this.hand_up; i++) {
	                if (i >= ran_get) {
	                    Ani.ani_move(new Laya.Vector3(8, 0, 0), this.hand_up_card[i]);
	                    //this.hand_left_card[i].transform.translate(new Laya.Vector3(0,0,8),false)
	                }
	            }
	            //插入进牌空隙
	            Ani.ani_insert(new Laya.Vector3(8 * (-this.hand_up - (13 - this.hand_up) - offset + ran_get), 0, 0), this.hand_up_card[ran_get]);
	        }
	        console.log("up");
	        console.log(ran_get, ran_out);
	    }
	    if (seat == "right") {
	        this.hand_right_card.splice(ran_out, 1);

	        // this.hand_left_card[i].transform.translate(new Laya.Vector3(0,0,-7),false)
	        //并列进牌空隙
	        // for(var i=0;i<this.hand_up_card.length;i++){
	        //     if(i>=ran_get){
	        //         Ani.ani_move(new Laya.Vector3(8,0,0),this.hand_up_card[i])
	        //        // this.hand_left_card[i].transform.translate(new Laya.Vector3(0,0,-7),false)
	        //     }
	        // } 
	        //console.log(ran_out,this.hand_left_card[ran_out])
	        //并列出牌空隙
	        this.tied(seat, ran_out, new Laya.Vector3(0, 0, -8));

	        if (!less) {
	            this.hand_right_card.splice(ran_get, 0, this.hand_right_card[this.hand_right - 1]);
	            //空出 进牌空隙 0123  1233
	            for (var i = 0; i < this.hand_right; i++) {
	                if (i >= ran_get) {
	                    Ani.ani_move(new Laya.Vector3(0, 0, 8), this.hand_right_card[i]);
	                    //this.hand_left_card[i].transform.translate(new Laya.Vector3(0,0,8),false)
	                }
	            }
	            //插入进牌空隙
	            Ani.ani_insert(new Laya.Vector3(0, 0, 8 * (-this.hand_right - (13 - this.hand_right) - offset + ran_get)), this.hand_right_card[ran_get]);
	        }
	        console.log("right");
	        console.log(ran_get, ran_out);
	    }
	    if (seat == "down") {
	        this.hand_down_card.splice(ran_out, 1);

	        // this.hand_left_card[i].transform.translate(new Laya.Vector3(0,0,-7),false)
	        //并列进牌空隙
	        // for(var i=0;i<this.hand_up_card.length;i++){
	        //     if(i>=ran_get){
	        //         Ani.ani_move(new Laya.Vector3(8,0,0),this.hand_up_card[i])
	        //        // this.hand_left_card[i].transform.translate(new Laya.Vector3(0,0,-7),false)
	        //     }
	        // } 
	        //console.log(ran_out,this.hand_left_card[ran_out])
	        //并列出牌空隙
	        this.tied(seat, ran_out, new Laya.Vector3(-8, 0, 0));
	        if (!less) {
	            this.hand_down_card.splice(ran_get, 0, this.hand_down_card[this.hand_down - 1]);
	            //空出 进牌空隙 0123  1233
	            for (var i = 0; i < this.hand_down; i++) {
	                if (i >= ran_get) {
	                    Ani.ani_move(new Laya.Vector3(8, 0, 0), this.hand_down_card[i]);
	                    //this.hand_left_card[i].transform.translate(new Laya.Vector3(0,0,8),false)
	                }
	            }
	            //插入进牌空隙
	            Ani.ani_insert(new Laya.Vector3(8 * (-this.hand_down - (13 - this.hand_down) - offset + ran_get), 0, 0), this.hand_down_card[ran_get]);
	        }
	        console.log("down");
	        console.log(ran_get, ran_out);
	    }
	};
	Card.prototype.side = function (seat, hands, scene) {

	    for (var i = 0; i < hands.length; i++) {
	        this.side_sort(seat, "hand", config.Mahjong[hands[i]], scene);
	    }
	    this.side_center(seat);

	    //this.side_sort(seat,"center",config.Mahjong[centers[i]],scene)
	};
	Card.prototype.side_center = function (seat) {
	    var card;
	    if (seat == "left") {
	        card = this.center_left_card[this.center_left - 1];
	        Ani.ani_side_center(card.transform.position, new Laya.Vector3(-config.side.z, 0, config.side.x - this.side_left), new Laya.Vector3(0, 90, 0), card);
	        this.center_left--;
	        this.side_left += 7;
	    }
	    if (seat == "up") {
	        card = this.center_up_card[this.center_up - 1];
	        Ani.ani_side_center(card.transform.position, new Laya.Vector3(-config.side.x - this.side_up, 0, -config.side.z), new Laya.Vector3(0, 0, 0), card);
	        this.center_up--;
	        this.side_up += 7;
	    }
	    if (seat == "right") {
	        card = this.center_right_card[this.center_right - 1];
	        Ani.ani_side_center(card.transform.position, new Laya.Vector3(config.side.z, 0, -config.side.x - this.side_right), new Laya.Vector3(0, 90, 0), card);
	        this.center_right--;
	        this.side_right += 7;
	    }
	    if (seat == "down") {
	        card = this.center_down_card[this.center_down - 1];
	        console.log(this.center_down_card);
	        Ani.ani_side_center(card.transform.position, new Laya.Vector3(config.side.x - this.side_down, 0, config.side.z), new Laya.Vector3(0, 0, 0), card);
	        this.center_down--;
	        this.side_down += 7;
	    }
	};

	//边缘牌
	Card.prototype.side_sort = function (seat, option, name, scene) {

	    var card = scene.addChild(new Laya.MeshSprite3D(Laya.Mesh.load("assets/Assets/Assets/MahjongTiles/Models/" + name + ".lm")));
	    var ran;
	    var vector;
	    if (seat == "left") {
	        //hand card move side
	        if (option == "hand") {
	            ran = this.hand_left - 1;
	            vector = this.hand_left_card[ran].transform.localPosition;
	            Ani.ani_side(vector, new Laya.Vector3(-config.side.z, 0, config.side.x - this.side_left), new Laya.Vector3(0, 90, 0), card);
	            this.side_left += 7;
	            fun.clean(this.hand_left_card[ran]);
	            this.hand_left_card.splice(ran, 1);
	            this.hand_left--;
	            this.tied(seat, ran, new Laya.Vector3(0, 0, -8));
	        }
	        //center card move side
	        if (option == "center") {
	            //this.center_down_card[2].transform.localPosition
	            Ani.ani_side(new Laya.Vector3(0, 0, 0), new Laya.Vector3(-config.side.z, 0, config.side.x - this.side_left), new Laya.Vector3(0, 90, 0), card);
	            this.side_left += 7;
	        }
	    }
	    if (seat == "up") {
	        if (option == "hand") {
	            ran = this.hand_up - 1;
	            vector = this.hand_up_card[ran].transform.localPosition;
	            Ani.ani_side(vector, new Laya.Vector3(-config.side.x - this.side_up, 0, -config.side.z), new Laya.Vector3(0, 0, 0), card);
	            this.side_up += 7;
	            fun.clean(this.hand_up_card[ran]);
	            this.hand_up_card.splice(ran, 1);
	            this.hand_up--;
	            this.tied(seat, ran, new Laya.Vector3(-8, 0, 0));
	        }
	        //center card move side
	        if (option == "center") {
	            //this.center_down_card[2].transform.localPosition
	            Ani.ani_side(new Laya.Vector3(0, 0, 0), new Laya.Vector3(-config.side.x - this.side_up, 0, -config.side.z), new Laya.Vector3(0, 0, 0), card);
	            this.side_up += 7;
	        }
	    }
	    if (seat == "right") {
	        if (option == "hand") {
	            ran = this.hand_right - 1;
	            vector = this.hand_right_card[ran].transform.localPosition;
	            Ani.ani_side(vector, new Laya.Vector3(config.side.z, 0, -config.side.x - this.side_right), new Laya.Vector3(0, 90, 0), card);
	            this.side_right += 7;
	            fun.clean(this.hand_right_card[ran]);
	            this.hand_right_card.splice(ran, 1);
	            this.hand_right--;
	            this.tied(seat, ran, new Laya.Vector3(0, 0, -8));
	        }
	        //center card move side
	        if (option == "center") {
	            //this.center_down_card[2].transform.localPosition
	            Ani.ani_side(new Laya.Vector3(0, 0, 0), new Laya.Vector3(config.side.z, 0, -config.side.x - this.side_right), new Laya.Vector3(0, 90, 0), card);
	            this.side_right += 7;
	        }
	    }
	    if (seat == "down") {
	        if (option == "hand") {
	            ran = this.hand_down - 1;
	            vector = this.hand_down_card[ran].transform.localPosition;
	            Ani.ani_side(vector, new Laya.Vector3(config.side.x - this.side_down, 0, config.side.z), new Laya.Vector3(0, 0, 0), card);
	            this.side_down += 7;
	            fun.clean(this.hand_down_card[ran]);
	            this.hand_down_card.splice(ran, 1);
	            this.hand_down--;
	            this.tied(seat, ran, new Laya.Vector3(-8, 0, 0));
	        }
	        //center card move side
	        if (option == "center") {
	            //this.center_down_card[2].transform.localPosition
	            Ani.ani_side(new Laya.Vector3(0, 0, 0), new Laya.Vector3(config.side.x - this.side_down, 0, config.side.z), new Laya.Vector3(0, 0, 0), card);
	            this.side_down += 7;
	        }
	    }
	};
	Card.prototype.hand_left = 0;
	Card.prototype.hand_right = 0;
	Card.prototype.hand_up = 0;
	Card.prototype.hand_down = 0;
	Card.prototype.hand_left_card = [];
	Card.prototype.hand_right_card = [];
	Card.prototype.hand_up_card = [];
	Card.prototype.hand_down_card = [];

	Card.prototype.center_left = 0;
	Card.prototype.center_up = 0;
	Card.prototype.center_right = 0;
	Card.prototype.center_down = 0;
	Card.prototype.center_left_card = [];
	Card.prototype.center_up_card = [];
	Card.prototype.center_right_card = [];
	Card.prototype.center_down_card = [];

	Card.prototype.side_left = 0;
	Card.prototype.side_up = 0;
	Card.prototype.side_right = 0;
	Card.prototype.side_down = 0;
	Card.prototype.side_left_card = [];
	Card.prototype.side_up_card = [];
	Card.prototype.side_right_card = [];
	Card.prototype.side_down_card = [];

	module.exports = new Card();

/***/ },

/***/ 84:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var config = __webpack_require__(81);
	function Ani() {}
	Ani.prototype.ani_get = function (now, aims, rotate, card) {
	    var loop = new Laya.Timer();
	    var vector = new Laya.Vector3((aims.x - now.x) / 10, (15 - now.y) / 10, (aims.z - now.z) / 10);
	    var i = 0;
	    // console.log(vector1)
	    // for(var a=0;a<60;a++)
	    //    card.transform.translate(new Laya.Vector3(1.16666666,0,0.6666666))
	    card.transform.translate(now, false);

	    loop.frameLoop(1, this, function () {
	        if (i < 10) card.transform.translate(vector, false);else card.transform.translate(new Laya.Vector3(0, -15 / 10, 0), false);
	        //card.transform.translate(vector1)    
	        //console.log(card.transform.localPosition)

	        if (i == 19) {
	            Laya.timer.clearAll(loop);
	            card.transform.rotate(rotate, true, false);
	        }
	        i++;
	        //Laya.timer.clearAll(loop)a
	    });
	};
	Ani.prototype.ani_side_center = function (now, aims, rotate, card) {
	    var loop = new Laya.Timer();
	    var vector = new Laya.Vector3((aims.x - now.x) / 10, 0, (aims.z - now.z) / 10);

	    var i = 0;
	    // console.log(vector1)
	    // for(var a=0;a<60;a++)
	    //    card.transform.translate(new Laya.Vector3(1.16666666,0,0.6666666))

	    loop.frameLoop(1, this, function () {
	        if (i < 10) card.transform.translate(vector, false);

	        //card.transform.translate(vector1)    
	        //console.log(card.transform.localPosition)

	        if (i == 9) {
	            Laya.timer.clearAll(loop);
	            card.transform.rotate(rotate, true, false);
	        }
	        i++;
	        //Laya.timer.clearAll(loop)a
	    });
	};
	Ani.prototype.ani_side = function (now, aims, rotate, card) {
	    var loop = new Laya.Timer();
	    var vector = new Laya.Vector3((aims.x - now.x) / 10, 0, (aims.z - now.z) / 10);

	    var i = 0;
	    // console.log(vector1)
	    // for(var a=0;a<60;a++)
	    //    card.transform.translate(new Laya.Vector3(1.16666666,0,0.6666666))
	    card.transform.translate(now, false);

	    loop.frameLoop(1, this, function () {
	        if (i < 10) card.transform.translate(vector, false);

	        //card.transform.translate(vector1)    
	        //console.log(card.transform.localPosition)

	        if (i == 9) {
	            Laya.timer.clearAll(loop);
	            card.transform.rotate(rotate, true, false);
	        }
	        i++;
	        //Laya.timer.clearAll(loop)a
	    });
	};
	Ani.prototype.ani_out = function (now, aims, card) {
	    var loop = new Laya.Timer();
	    var vector = new Laya.Vector3((aims.x - now.x) / 25, -15 / 25, (aims.z - now.z) / 25);
	    // var vector1=new Laya.Vector3(vector.z,vector.y,vector.x)
	    var i = 0;
	    // console.log(vector1)
	    // for(var a=0;a<60;a++)
	    //    card.transform.translate(new Laya.Vector3(1.16666666,0,0.6666666))   
	    loop.frameLoop(1, this, function () {

	        // if(i==0)
	        if (i < 5) card.transform.translate(new Laya.Vector3(0, 15 / 5, 0));else card.transform.translate(vector, false);
	        //card.transform.translate(vector1)    
	        //console.log(card.transform.localPosition)

	        if (i == 29) {
	            Laya.timer.clearAll(loop);
	            card.transform.localPosition = aims;
	        }
	        i++;
	        //Laya.timer.clearAll(loop)
	    });
	};
	Ani.prototype.ani_move = function (vector3, card) {
	    var loop = new Laya.Timer();
	    var vector = new Laya.Vector3(vector3.x / 30, vector3.y / 30, vector3.z / 30);
	    // var vector1=new Laya.Vector3(vector.z,vector.y,vector.x)
	    var i = 0;
	    // console.log(vector1)
	    // for(var a=0;a<60;a++)
	    //    card.transform.translate(new Laya.Vector3(1.16666666,0,0.6666666))   
	    loop.frameLoop(1, this, function () {

	        // if(i==0)
	        card.transform.translate(vector, false);
	        //card.transform.translate(vector1)    
	        //console.log(card.transform.localPosition)

	        if (i == 29) {
	            Laya.timer.clearAll(loop);
	        }
	        i++;
	        //Laya.timer.clearAll(loop)
	    });
	};
	Ani.prototype.ani_insert = function (vector3, card) {
	    var loop = new Laya.Timer();
	    var vector = new Laya.Vector3(vector3.x / 20, vector3.y / 20, vector3.z / 20);
	    // var vector1=new Laya.Vector3(vector.z,vector.y,vector.x)
	    var i = 0;
	    // console.log(vector1)
	    // for(var a=0;a<60;a++)
	    //    card.transform.translate(new Laya.Vector3(1.16666666,0,0.6666666))   
	    loop.frameLoop(1, this, function () {
	        if (i < 5) {
	            card.transform.translate(new Laya.Vector3(0, 15 / 5, 0), false);
	        }
	        if (i >= 5 && i < 25) {
	            card.transform.translate(vector, false);
	        }
	        if (i >= 25 && i < 30) {
	            card.transform.translate(new Laya.Vector3(0, -15 / 5, 0), false);
	        }
	        // if(i==0)
	        //card.transform.translate(vector,false) 
	        //card.transform.translate(vector1)    
	        //console.log(card.transform.localPosition)

	        if (i == 29) {
	            Laya.timer.clearAll(loop);
	        }
	        i++;
	        //Laya.timer.clearAll(loop)
	    });
	};

	module.exports = new Ani();

/***/ },

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "bad_apple.mp3?ea42daf6f36253e570cb7fa150f8794b";

/***/ }

});