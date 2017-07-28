

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
var config=require('./config.js')
var fun=require('./js/function.js')
var Card=require('./js/Card.js')
var Ani=require('./js/Ani.js')
var Event=Laya.Event
var seat=0
var seat1=0
var seat3=0
var ready=0
// var CameraMoveScript=require('./js/CameraMoveScript.js')
var idealRatio=960/540, realRatio=window.innerHeight/window.innerWidth;
// Laya.init(window.innerWidth, window.innerHeight, laya.webgl.WebGL);
if (idealRatio<realRatio) {
    Laya3D.init(540, 540*realRatio, laya.webgl.WebGL);
}
else Laya3D.init(960/realRatio, 960, laya.webgl.WebGL);
var Loader = laya.net.Loader;
var Handler = laya.utils.Handler;

// var fun=new fun()
// var Card=new Card()
// var Ani=new Ani()
//设置全屏
Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
Laya.stage.bgColor=null
Laya.Stat.show();
//给舞台添加laya3d场景
var scene = Laya.stage.addChild(new Laya.Scene());
scene.on('click',this,qw)
function qw(){
    console.log('qw')
}
var ui={};
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
var camera = (scene.addChild(new Laya.Camera()));
camera.transform.position=new Laya.Vector3(config.camera.px, config.camera.py, config.camera.pz);
camera.transform.rotate(new Laya.Vector3(config.camera.rx,config.camera.ry,config.camera.rz),true,false)
camera.addComponent(CameraMoveScript)
    


//生成平面，一个box
var plane = scene.addChild(new Laya.MeshSprite3D(new Laya.BoxMesh(450,280,0.001)))
var material = new Laya.StandardMaterial.load("./assets/Assets/Assets/MahjongTiles/majiangzuo.lmat");
plane.meshRender.material = material;
plane.transform.localPosition=new Laya.Vector3(-14,-5,0)

//生成方体

var Mahjong=[]
var row=0
var offset=0
var i=0
var y=0
//便利总类
for(var i=0;i<144;i++){
//便利每个总类牌数

        //初始化  加载  
        Mahjong[i]= scene.addChild(new Laya.MeshSprite3D(Laya.Mesh.load("./assets/Assets/Assets/MahjongTiles/Models/MahjongTiles-Dragon_Blank.lm")));
        
        


}

// var a=scene.addChild(Laya.Sprite3D.load("assets/123.lh"))
// a.transform.localPosition=new Laya.Vector3(100,100,100)
// var cloneSprite3D = Laya.Sprite3D.instantiate(a);
// var b=scene.addChild(cloneSprite3D)
//生成长城
Card.init(Mahjong)
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


    Laya.loader.load(["./assets/Assets/Assets/MahjongTiles/Textures/MahjongTile.png"], Laya.Handler.create(null, function(){
        var btn = new Laya.Button();
        btn.skin = "./assets/Assets/Assets/MahjongTiles/Textures/MahjongTile.png";
        btn.label = "cardinfo";
        btn.labelBold = true;
        btn.labelSize = 20;
        btn.sizeGrid = "4,4,4,4";
        btn.size(40, 30);
        btn.scale(Laya.Browser.pixelRatio, Laya.Browser.pixelRatio);
        btn.pos(0,Laya.stage.height - 50 * Laya.Browser.pixelRatio);
        btn.on(Laya.Event.CLICK, this, cardinfo)
        Laya.stage.addChild(btn);
        Laya.stage.on(Laya.Event.RESIZE, null, function (){
            btn.pos(Laya.stage.width / 2 - btn.width * Laya.Browser.pixelRatio / 2, Laya.stage.height - 50 * Laya.Browser.pixelRatio);
        });
    }));
    Laya.loader.load(["./assets/Assets/Assets/MahjongTiles/Textures/MahjongTile.png"], Laya.Handler.create(null, function(){
        var btn = new Laya.Button();
        btn.skin = "./assets/Assets/Assets/MahjongTiles/Textures/MahjongTile.png";
        btn.label = "updateThrowCards";
        btn.labelBold = true;
        btn.labelSize = 20;
        btn.sizeGrid = "4,4,4,4";
        btn.size(40, 30);
        btn.scale(Laya.Browser.pixelRatio, Laya.Browser.pixelRatio);
        btn.pos(50, Laya.stage.height - 50 * Laya.Browser.pixelRatio);
        btn.on(Laya.Event.CLICK, this, updateThrowCards)
        Laya.stage.addChild(btn);
        Laya.stage.on(Laya.Event.RESIZE, null, function (){
            btn.pos(Laya.stage.width / 2 - btn.width * Laya.Browser.pixelRatio / 2, Laya.stage.height - 50 * Laya.Browser.pixelRatio);
        });
    }));
    Laya.loader.load(["./assets/Assets/Assets/MahjongTiles/Textures/MahjongTile.png"], Laya.Handler.create(null, function(){
        var btn = new Laya.Button();
        btn.skin = "./assets/Assets/Assets/MahjongTiles/Textures/MahjongTile.png";
        btn.label = "table.ask";
        btn.labelBold = true;
        btn.labelSize = 20;
        btn.sizeGrid = "4,4,4,4";
        btn.size(40, 30);
        btn.scale(Laya.Browser.pixelRatio, Laya.Browser.pixelRatio);
        btn.pos(100, Laya.stage.height - 50 * Laya.Browser.pixelRatio);
        btn.on(Laya.Event.CLICK, this, table)
        Laya.stage.addChild(btn);
        Laya.stage.on(Laya.Event.RESIZE, null, function (){
            btn.pos(Laya.stage.width / 2 - btn.width * Laya.Browser.pixelRatio / 2, Laya.stage.height - 50 * Laya.Browser.pixelRatio);
        });
    }));
    Laya.loader.load(["./assets/Assets/Assets/MahjongTiles/Textures/MahjongTile.png"], Laya.Handler.create(null, function(){
        var btn = new Laya.Button();
        btn.skin = "./assets/Assets/Assets/MahjongTiles/Textures/MahjongTile.png";
        btn.label = "side";
        btn.labelBold = true;
        btn.labelSize = 20;
        btn.sizeGrid = "4,4,4,4";
        btn.size(40, 30);
        btn.scale(Laya.Browser.pixelRatio, Laya.Browser.pixelRatio);
        btn.pos(150, Laya.stage.height - 50 * Laya.Browser.pixelRatio);
        btn.on(Laya.Event.CLICK, this, gang)
        Laya.stage.addChild(btn);
        Laya.stage.on(Laya.Event.RESIZE, null, function (){
            btn.pos(Laya.stage.width / 2 - btn.width * Laya.Browser.pixelRatio / 2, Laya.stage.height - 50 * Laya.Browser.pixelRatio);
        });
    }));
    Laya.loader.load(["./assets/Assets/Assets/MahjongTiles/Textures/MahjongTile.png"], Laya.Handler.create(null, function(){
        var btn = new Laya.Button();
        btn.skin = "./assets/Assets/Assets/MahjongTiles/Textures/MahjongTile.png";
        btn.label = "add";
        btn.labelBold = true;
        btn.labelSize = 20;
        btn.sizeGrid = "4,4,4,4";
        btn.size(40, 30);
        btn.scale(Laya.Browser.pixelRatio, Laya.Browser.pixelRatio);
        btn.pos(200, Laya.stage.height - 50 * Laya.Browser.pixelRatio);
        btn.on(Laya.Event.CLICK, this, lesss)
        Laya.stage.addChild(btn);
        Laya.stage.on(Laya.Event.RESIZE, null, function (){
            btn.pos(Laya.stage.width / 2 - btn.width * Laya.Browser.pixelRatio / 2, Laya.stage.height - 50 * Laya.Browser.pixelRatio);
        });
    }));
//骰子
// var dice=scene.addChild(new Laya.MeshSprite3D(Laya.Mesh.load("assets/Assets/Assets/MahjongTiles/Models/MahjongTiles-Dice.lm")))
// dice.transform.localPosition=new Laya.Vector3(50,0,60);
i=143
var a=0
var hand_cards=[]
function test(){
    var names=[102,103,104,105,106,107]
        fun.clean_all(hand_cards)        
        for(var i=0;i<names.length;i++){
            hand_cards[i]=scene.addChild(new Laya.MeshSprite3D(Laya.Mesh.load("assets/Assets/Assets/MahjongTiles/Models/"+config.Mahjong[names[i]]+".lm")));
            hand_cards[i].transform.localPosition=new Laya.Vector3(-config.offset.hand_z+i*config.offset.hand_interval,20,config.offset.hand_x)
            hand_cards[i].transform.rotate(new Laya.Vector3(-90,90,90),true,false)
           hand_cards[i].addComponent(Laya.SphereCollider);
        }
        
}
function hands(names){
        
        fun.clean_all(hand_cards)        

        for(var i=0;i<names.length;i++){
            hand_cards[i]=scene.addChild(new Laya.MeshSprite3D(Laya.Mesh.load("assets/Assets/Assets/MahjongTiles/Models/"+config.Mahjong[names[i]]+".lm")));
            hand_cards[i].transform.localPosition=new Laya.Vector3(-config.offset.hand_z+i*config.offset.hand_interval,20,config.offset.hand_x)
            hand_cards[i].transform.rotate(new Laya.Vector3(-90,90,90),true,false)
            hand_cards[i].addComponent(Laya.BoxCollider);
            hand_cards[i].name=i
        }
        


}



        //射线检测,射线相交的<最近物体>,最大检测距离30米,只检测第13层
       






function prtMatrix(mat) {
    var str='';
    for (var i=0 ;i<mat.elements.length; i++) {
        str+=mat.elements[i]+' ';
    }
    return str;
}


function out_card(e){console.log(222)
    // var loop=new Laya.Timer()


    // var i=0

    // loop.frameLoop(1, this, function () {



    // })   
console.log(e)

}

Card.init_touch(i,Mahjong,scene)
i-=13*4


function add(seat){
    var be;
    seat==1?be='left':0
    seat==2?be='up':0
    seat==3?be='right':0
    seat==0?be='down':0  

    Card.add(be,Mahjong[i],scene)


}
function less(seat,less){
    var be
    seat==1?be='left':0
    seat==2?be='up':0
    seat==3?be='right':0
    seat==0?be='down':0
    
        Card.out_card(be,config.Mahjong[less],scene)
    
    
}
function less1(seat,less){
    var be
    seat==1?be='left':0
    seat==2?be='up':0
    seat==3?be='right':0
    seat==0?be='down':0

    for(var i=0;i<less.length;i++){
        Card.out_card(be,config.Mahjong[less[i]],scene,1)
    }


    
}

function side(seat,hands){
    var be
    seat==1?be='left':0
    seat==2?be='up':0
    seat==3?be='right':0
    seat==0?be='down':0
    Card.side(be,hands,scene)


    
} 

function lesss(){

}

var async=require('async'), merge=require('merge'), EventEmitter=require('events');
var me=require('./myself.js');//, ani=require('./embedani.js');
//var cardImg=require('./cardImg.js');
//var parseR=require('./rule.js').parseR;
//var WaitableEvent=require('./waitableEvent.js');



class mahjong {
    constructor(opt,view){
        this.opt=opt;
        this._view=view

    }
    static create(opt, cb) {
        if (typeof opt==='function') {cb=opt; opt={}}
        console.log(2222)

        Laya.loader.load([
            { url: require("./res/mahjong@atlas0.png"), type: Loader.IMAGE },
            // { url: require("./res/mahjong@atlas1.png"), type: Loader.IMAGE },
            // { url: require("./res/mahjong@atlas_hy39cl.png"), type: Loader.IMAGE },
            // { url: require("./res/mahjong@atlas_x4wy1a.png"), type: Loader.IMAGE },
            // { url: require("./res/mahjong@atlas_x4wyz.jpg"), type: Loader.IMAGE },
            { url: require("./res/mahjong.fui"), type: Loader.BUFFER }
        ], Handler.create(null, function() {
            fairygui.UIPackage.addPackage('mahjong');            
            var _view = fairygui.UIPackage.createObject("mahjong", "游戏开始").asCom;
            _view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
            _view.addRelation(fairygui.GRoot.inst, fairygui.RelationType.Size);
            fairygui.GRoot.inst.addChild(_view);
            var room=new mahjong(opt,_view)
            room._view=_view
            //console.log(scene.zOrder=-1)
         // Laya.stage.addChild(_view);
         // var d2=Laya.stage.addChild(_view);

            // _view.getChild('n30').url=me.face
            // _view.getChild('n29').url=me.face
            // _view.getChild('n28').url=me.face
            // _view.getChild('n27').url=me.face



       // Laya.SoundManager.playMusic(require('./res/snd/only_railgun.mp3'));
       setTimeout(function() {
        Laya.SoundManager.playMusic(require('./res/snd/bad_apple.mp3'),0,0);

        Laya.SoundManager.setMusicVolume(0);
        Laya.SoundManager.setSoundVolume(0);
        }, 1000);


        var loop=new Laya.Timer()
        var collision=false
        loop.frameLoop(1, this, function () {
        var point = new Laya.Vector2();
        var ray = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0));
        point.elements[0] = Laya.stage.mouseX;
        point.elements[1] = Laya.stage.mouseY;
        camera.viewportPointToRay(point, ray);
        var _outHitInfo = new Laya.RaycastHit();

            Laya.Physics.rayCast(ray, _outHitInfo);

                if (_outHitInfo.distance !== -1){
                    collision=_outHitInfo.sprite3D.name
                }
                else
                    collision=false


        })    

        _view.onClick(null,function(){
            if(collision!==false){
                   _socket.sendp({c:'table.ans',cardInfo:my_card[collision]});
            }

        })


    /*ui event---------------------------------*/
         //back
         _view.getChild('n2').onClick(null,function(){

            ui.back=_view.addChild(fun.create('离开房间'))
            scene.zOrder=-1
            //no
            ui.back.getChild('n5').onClick(null,function(){
                _view.removeChild(ui.back)
                scene.zOrder=1
            })
            //yes
            ui.back.getChild('n6').onClick(null,function(){

            })
         })
         //help
         _view.getChild('n4').onClick(null,function(){
              ui.help=_view.addChild(fun.create('帮助'))
              scene.zOrder=-1
              //close
              ui.help.getChild('n2').onClick(null,function(){
                _view.removeChild(ui.help)
                scene.zOrder=1  
              })
              //

         })
         //set
            _view.getChild('n6').onClick(null, function() {
                if(!ui.set){
                    ui.set=_view.addChild(fun.create("设置"))
                    scene.zOrder=-1
                }
                else{
                    ui.set.visible=!ui.set.visible
                    scene.zOrder==1?scene.zOrder=-1:scene.zOrder=1
                }
                //close
                ui.set.getChild('n4').onClick(null,function(){
                    //_view.displayObject.on("display",null,ui.option);
                    ui.set.visible=false
                    scene.zOrder=1
                        // _view.removeChild(ui.option)
                        // ui.option=null
                })
                //普通话
                ui.set.getChild('n7').onClick(null,function(){

                })
                //上海话
                ui.set.getChild('n8').onClick(null,function(){

                })
                //音效
                ui.set.getChild('n16').on("mouseup",null,function(){
                    var be=ui.set.getChild('n16')._value
                    Laya.SoundManager.setMusicVolume(be/100);
                })
                //音乐
                ui.set.getChild('n17').on("mouseup",null,function(){
                    var be =ui.set.getChild('n17')._value
                     Laya.SoundManager.setSoundVolume(be/100);
                })
                //屏蔽语音
                ui.set.getChild('n20').onClick(null,function(){

                })
                //关闭聊天
                ui.set.getChild('n23').onClick(null,function(){

                })

            });
         //统计
         _view.getChild('n7').onClick(null,function(){

         })
         //托管
         _view.getChild('n8').onClick(null,function(){
            _view.getController('tuoguan').selectedIndex=1
         })
         //取消托管
         _view.getChild('n32').onClick(null,function(){
            _view.getController('tuoguan').selectedIndex=0
         })
         _view.getController('start').selectedIndex=1
         //开始
         _view.getChild('n33').onClick(null,function(){
            _socket.sendp({c:'gamestart'})
            _view.getController('start').selectedIndex=0
         })
         //语音
         _view.getChild('n9').onClick(null,function(){

         })



         cb(null,room)

        }))


    }//_socket.sendp({c:'table.ans',cardInfo:0})

    msg(pack){console.log(pack,me)
         //接受服务端信息
         var self = this;
        switch(pack.c) {
            case 'cardInfo':
                //发牌
                this.my_card=pack.handCards
                hands(pack.handCards) 
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
                add(pack.pos,pack.curCard)
                less(pack.pos,pack.throwCards[pack.throwCards.length-1])
                break;
            case 'updateTime':
          
                break;
            case 'table.ask':
            var event=[]
            var pass
                if(pack.v[0]!=0){
                    pass=this._view.addChild(fun.create('过'))
                    pass.x=100
                    pass.onClick(null,function(){
                          //_socket  
                          console.log(pass)
                          _socket.sendp({c:'table.ans',ans:0})
                          self._view.removeChild(pass)
                          for(var i=0;i<event.length;i++){
                            self._view.removeChild(event[i])
                          }
                    })
                    
                    for(var i=0;i<pack.v.length;i++){
                        event[i]=this._view.addChild(fun.create(config.event[pack.v[i]]))
                        event[i].x=(i+2)*100
                        event[i].onClick(pack.v[i],function(){
                            //_socket this
                                _socket.sendp({c:'table.ans',ans:this})
                                self._view.removeChild(pass)
                                for(var i=0;i<event.length;i++){
                                    self._view.removeChild(event[i])
                                }
                            })
                    }

                }
                else{
                    ready=1
                }
                break;
            case 'roomInfo':

                break;

        }
    }
}
var my_card=[]
function msg(pack){console.log(pack)
switch(pack.c) {
            case 'cardInfo':
                //发牌
                my_card=pack.handCards
                hands(pack.handCards) 
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
                add(pack.pos,pack.curCard)
                less(pack.pos,pack.throwCards[pack.throwCards.length-1])
                break;
            case 'updateTime':
          
                break;
            case 'table.ask':
                break;
            case 'roomInfo':

                break;
        }

}
function cardinfo(){
    
    msg({"c":"cardInfo","handCards":[101,102,103,104,105]})
}
function updateThrowCards(){
    msg({"c":"updateThrowCards","pos":0,"throwCards":[101,102,103,104,105]})
}
function table(){

}
function gang(){
    side(0,['201','202'])
}
module.exports=mahjong.create;
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
















class Scene extends EventEmitter {
    constructor() {
        super();
        // this.on('newListener', function(event, listener) {
        //  listener.call(this, this);
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

















