// [AIV] Build version: 3.1.0 
 var config=require('../config.js')
function fun(){

}
fun.prototype.cleans=function (arr,Mahjong){
    for(var i=0;i<arr.length;i++){
        Mahjong[arr[i]].destroy()
    }
}
fun.prototype.clean_all=function(Mahjongs){
    for(var i=0;i<Mahjongs.length;i++){
        Mahjongs[i].destroy()
    }
}
fun.prototype.clean=function(Mahjong){
    Mahjong.destroy()
}
fun.prototype.isInteger=function(obj) {
    return obj%1 === 0
}
fun.prototype.create=function(name){
    return fairygui.UIPackage.createObject("mahjong",name).asCom
}

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

fun.prototype.randomNum=function(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
} 





module.exports =new fun(); 