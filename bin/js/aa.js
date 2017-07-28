// [AIV] Build version: 3.1.0 
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
var fun=new fun()
//初始化3d
Laya3D.init(0, 0,true);
//设置全屏
Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
Laya.stage.bgColor=null
Laya.Stat.show();

var translate = new Laya.Vector3(200, 100, 0);//理解为屏幕坐标，左上角为（0，0）
var convertTranslate = new Laya.Vector3(0, 0, 0);
//给舞台添加laya3d场景
var scene = Laya.stage.addChild(new Laya.Scene());
//mouse display
// Laya.Mouse.hide()



var translate = new Laya.Vector3(0, 0, 0);//理解为屏幕坐标，左上角为（0，0）
var convertTranslate = new Laya.Vector3(0, 0, 0);





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
var material = new Laya.StandardMaterial.load("assets/Assets/Assets/MahjongTiles/majiangzuo.lmat");
plane.meshRender.material = material;
plane.transform.localPosition=new Laya.Vector3(-14,-5,0)

//生成方体

var Mahjong=[]
var row=0
var offset=0
var i=0
var y=0
//便利总类
for(var i=0;i<148;i++){
//便利每个总类牌数

        //初始化  加载  
        Mahjong[i]= scene.addChild(new Laya.MeshSprite3D(Laya.Mesh.load("assets/Assets/Assets/MahjongTiles/Models/MahjongTiles-Dragon_Blank.lm")));
        
        


}

// var a=scene.addChild(Laya.Sprite3D.load("assets/123.lh"))
// a.transform.localPosition=new Laya.Vector3(100,100,100)
// var cloneSprite3D = Laya.Sprite3D.instantiate(a);
// var b=scene.addChild(cloneSprite3D)
//生成长城
fun.init()
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
        btn.label = "add";
        btn.labelBold = true;
        btn.labelSize = 20;
        btn.sizeGrid = "4,4,4,4";
        btn.size(40, 30);
        btn.scale(Laya.Browser.pixelRatio, Laya.Browser.pixelRatio);
        btn.pos(0,Laya.stage.height - 50 * Laya.Browser.pixelRatio);
        btn.on(Laya.Event.CLICK, this, add)
        Laya.stage.addChild(btn);
        Laya.stage.on(Laya.Event.RESIZE, null, function (){
            btn.pos(Laya.stage.width / 2 - btn.width * Laya.Browser.pixelRatio / 2, Laya.stage.height - 50 * Laya.Browser.pixelRatio);
        });
    }));
    Laya.loader.load(["./assets/Assets/Assets/MahjongTiles/Textures/MahjongTile.png"], Laya.Handler.create(null, function(){
        var btn = new Laya.Button();
        btn.skin = "./assets/Assets/Assets/MahjongTiles/Textures/MahjongTile.png";
        btn.label = "less";
        btn.labelBold = true;
        btn.labelSize = 20;
        btn.sizeGrid = "4,4,4,4";
        btn.size(40, 30);
        btn.scale(Laya.Browser.pixelRatio, Laya.Browser.pixelRatio);
        btn.pos(50, Laya.stage.height - 50 * Laya.Browser.pixelRatio);
        btn.on(Laya.Event.CLICK, this, less)
        Laya.stage.addChild(btn);
        Laya.stage.on(Laya.Event.RESIZE, null, function (){
            btn.pos(Laya.stage.width / 2 - btn.width * Laya.Browser.pixelRatio / 2, Laya.stage.height - 50 * Laya.Browser.pixelRatio);
        });
    }));


//骰子
// var dice=scene.addChild(new Laya.MeshSprite3D(Laya.Mesh.load("assets/Assets/Assets/MahjongTiles/Models/MahjongTiles-Dice.lm")))
// dice.transform.localPosition=new Laya.Vector3(50,0,60);
i=147
var seat=0
var seat1=0
function add(){
    fun.clean([i],Mahjong)
    seat==0?fun.add("left"):0
    seat==1?fun.add("up"):0
    seat==2?fun.add("right"):0

    seat++
    if(seat==3){
        seat=0
    }
    i--
}
function less(){
    seat1==0?fun.less("left"):0
    seat1==1?fun.less("up"):0
    seat1==2?fun.less("right"):0

    seat1++
    if(seat1==3){
        seat1=0
    }
    
}

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










 