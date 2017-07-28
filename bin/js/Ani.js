// [AIV] Build version: 3.1.0 
 var config=require('../config.js')
function Ani(){
    
}
Ani.prototype.ani_get=function(now,aims,rotate,card){
    var loop=new Laya.Timer()
    var vector=new Laya.Vector3((aims.x-now.x)/10,(15-now.y)/10,(aims.z-now.z)/10)
    var i=0
    // console.log(vector1)
     // for(var a=0;a<60;a++)
     //    card.transform.translate(new Laya.Vector3(1.16666666,0,0.6666666))
    card.transform.translate(now,false)

    loop.frameLoop(1, this, function () {
        if(i<10)
            card.transform.translate(vector,false) 
        else
            card.transform.translate(new Laya.Vector3(0,-15/10,0),false)
            //card.transform.translate(vector1)    
        //console.log(card.transform.localPosition)
        
        if(i==19){
            Laya.timer.clearAll(loop)
            card.transform.rotate(rotate, true, false)          
        }
        i++
            //Laya.timer.clearAll(loop)a

    })
}
Ani.prototype.ani_side_center=function(now,aims,rotate,card){
    var loop=new Laya.Timer()
    var vector=new Laya.Vector3((aims.x-now.x)/10,0,(aims.z-now.z)/10)
    
    var i=0
    // console.log(vector1)
     // for(var a=0;a<60;a++)
     //    card.transform.translate(new Laya.Vector3(1.16666666,0,0.6666666))

    loop.frameLoop(1, this, function () {
        if(i<10)
            card.transform.translate(vector,false) 
        
            //card.transform.translate(vector1)    
        //console.log(card.transform.localPosition)
        
        if(i==9){
            Laya.timer.clearAll(loop)
            card.transform.rotate(rotate, true, false)          
        }
        i++
            //Laya.timer.clearAll(loop)a

    })

}
Ani.prototype.ani_side=function(now,aims,rotate,card){
    var loop=new Laya.Timer()
    var vector=new Laya.Vector3((aims.x-now.x)/10,0,(aims.z-now.z)/10)
    
    var i=0
    // console.log(vector1)
     // for(var a=0;a<60;a++)
     //    card.transform.translate(new Laya.Vector3(1.16666666,0,0.6666666))
    card.transform.translate(now,false)

    loop.frameLoop(1, this, function () {
        if(i<10)
            card.transform.translate(vector,false) 
        
            //card.transform.translate(vector1)    
        //console.log(card.transform.localPosition)
        
        if(i==9){
            Laya.timer.clearAll(loop)
            card.transform.rotate(rotate, true, false)          
        }
        i++
            //Laya.timer.clearAll(loop)a

    })
}
Ani.prototype.ani_out=function(now,aims,card){
    var loop=new Laya.Timer()
    var vector=new Laya.Vector3((aims.x-now.x)/25,-15/25,(aims.z-now.z)/25)
    // var vector1=new Laya.Vector3(vector.z,vector.y,vector.x)
    var i=0
    // console.log(vector1)
     // for(var a=0;a<60;a++)
     //    card.transform.translate(new Laya.Vector3(1.16666666,0,0.6666666))   
    loop.frameLoop(1, this, function () {

        // if(i==0)
        if(i<5)
            card.transform.translate(new Laya.Vector3(0,15/5,0))
        else
            card.transform.translate(vector,false) 
            //card.transform.translate(vector1)    
        //console.log(card.transform.localPosition)
        
        if(i==29){
            Laya.timer.clearAll(loop)
            card.transform.localPosition=aims 
        }
        i++
            //Laya.timer.clearAll(loop)

    })   
}
Ani.prototype.ani_move=function(vector3,card){
    var loop=new Laya.Timer()
    var vector=new Laya.Vector3(vector3.x/30,vector3.y/30,vector3.z/30)
    // var vector1=new Laya.Vector3(vector.z,vector.y,vector.x)
    var i=0
    // console.log(vector1)
     // for(var a=0;a<60;a++)
     //    card.transform.translate(new Laya.Vector3(1.16666666,0,0.6666666))   
    loop.frameLoop(1, this, function () {

        // if(i==0)
        card.transform.translate(vector,false) 
            //card.transform.translate(vector1)    
        //console.log(card.transform.localPosition)
        
        if(i==29){
            Laya.timer.clearAll(loop)
        
        }
        i++
            //Laya.timer.clearAll(loop)

    })   

}
Ani.prototype.ani_insert=function(vector3,card){
    var loop=new Laya.Timer()
    var vector=new Laya.Vector3(vector3.x/20,vector3.y/20,vector3.z/20)
    // var vector1=new Laya.Vector3(vector.z,vector.y,vector.x)
    var i=0
    // console.log(vector1)
     // for(var a=0;a<60;a++)
     //    card.transform.translate(new Laya.Vector3(1.16666666,0,0.6666666))   
    loop.frameLoop(1, this, function () {
        if(i<5){
            card.transform.translate(new Laya.Vector3(0,15/5,0),false)
        }
        if(i>=5&&i<25){
            card.transform.translate(vector,false)   
        }
        if(i>=25&&i<30){
            card.transform.translate(new Laya.Vector3(0,-15/5,0),false)
        }
        // if(i==0)
        //card.transform.translate(vector,false) 
            //card.transform.translate(vector1)    
        //console.log(card.transform.localPosition)
        
        if(i==29){
            Laya.timer.clearAll(loop)
        }
        i++
            //Laya.timer.clearAll(loop)

    })  
}

module.exports = new Ani(); 