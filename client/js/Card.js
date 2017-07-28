var fun=require('./function.js')
var Ani=require('./Ani.js')
var config=require('../config.js')
function Card(){

}
Card.prototype.init=function(Mahjong){
    var row=0
    var offset=0
    var y=5
    for(var i=0;i<144;i++){
            if(y==0)
                y=5
            else
                y=0
                
            if(i!=0&&!fun.isInteger(i/2)){
                offset-=7
            }
            
        //10个一row
        if(i/18-1==row){
            row++
            if(fun.isInteger(row/2)){
                offset-=18*7

            }

            
        }
        if(row<2&&row>=0){
            //设置位置
            Mahjong[i].transform.localPosition=new Laya.Vector3(-config.offset.left_x,y,-config.offset.left_z+offset+i*config.offset.interval)
            //Mahjong[i].transform.rotate(new Laya.Vector3(-90, 90, 0), true, false);
            Mahjong[i].transform.rotate(new Laya.Vector3(0, 90, 180), true, false)
            // Mahjong[key].transform.lookAt(camera.position,camera.position,false)
            // Mahjong[key].transform.localScale=new Laya.Vector3(2, 2, 2);
        }
        if(row<4&&row>=2){
            Mahjong[i].transform.localPosition=new Laya.Vector3(-config.offset.left_z+offset+i*config.offset.interval,y,-config.offset.left_x)
            //Mahjong[i].transform.rotate(new Laya.Vector3(-90, 90, 0), true, false);
            Mahjong[i].transform.rotate(new Laya.Vector3(0, 0, 180), true, false)   
        }
        if(row<6&&row>=4){
            Mahjong[i].transform.localPosition=new Laya.Vector3(config.offset.left_x,y,-config.offset.left_z+offset+i*config.offset.interval)
            //Mahjong[i].transform.rotate(new Laya.Vector3(-90, 90, 0), true, false);
            Mahjong[i].transform.rotate(new Laya.Vector3(0, 0, 180), true, false)   
        }
        if(row<8&&row>=6){
            Mahjong[i].transform.localPosition=new Laya.Vector3(-config.offset.left_z+offset+i*config.offset.interval,y,config.offset.left_x)
            //Mahjong[i].transform.rotate(new Laya.Vector3(-90, 90, 0), true, false);
            Mahjong[i].transform.rotate(new Laya.Vector3(0, 0, 180), true, false) 
        }
    }

}

Card.prototype.init_touch=function(i,Mahjong,scene){
    var loop=new Laya.Timer()
    var i1=0
    var seat=0
    var ma=[]

    loop.frameLoop(10, this, function () {
        ma=[]
        for(var i2=0;i2<4;i2++)
            ma[i2]=Mahjong[i-i2]
        i-=4
        seat==0?this.add4("left",ma,scene):0
        seat==1?this.add4("up",ma,scene):0
        seat==2?this.add4("right",ma,scene):0
        seat==3?this.add4("down",ma,scene):0
        seat++
        if(seat==4){
            seat=0
        }
        
        if(i1==11){
            this.adds("left",Mahjong[i],scene)
            this.adds("up",Mahjong[i-1],scene)
            this.adds("right",Mahjong[i-2],scene)
            this.adds("down",Mahjong[i-3],scene)
            i-=4
            Laya.timer.clearAll(loop) 
        }
        i1++


    })   
}


//摸牌
Card.prototype.add=function(seat,old_card,scene){
     var card= scene.addChild(new Laya.MeshSprite3D(Laya.Mesh.load("assets/Assets/Assets/MahjongTiles/Models/"+config.Mahjong["0"]+".lm")));
     var vector=old_card.transform.localPosition  
     card.transform.rotate(new Laya.Vector3(0, 0,180), true, false)
     fun.clean(old_card)
        if(seat=="left"){
            //设置位置
            Ani.ani_get(vector,new Laya.Vector3(-config.offset.hand_x,0,-config.offset.hand_z+14*config.offset.hand_interval),new Laya.Vector3(90, 90, 0),card)
            //card.transform.localPosition=new Laya.Vector3(-config.offset.hand_x,0,-config.offset.hand_z+this.hand_left*config.offset.interval)
            
            //card.transform.rotate(new Laya.Vector3(90, 90, 180), true, false)
            this.hand_left_card[this.hand_left]=card
            this.hand_left++
        }
        if(seat=="right"){
            Ani.ani_get(vector,new Laya.Vector3(config.offset.hand_x,0,-config.offset.hand_z+14*config.offset.hand_interval),new Laya.Vector3(90, -90, 0),card)
            //card.transform.localPosition=new Laya.Vector3(config.offset.hand_x,0,-config.offset.hand_z+this.hand_right*config.offset.hand_interval)
            //card.transform.rotate(new Laya.Vector3(90, -90, 180), true, false)
            this.hand_right_card[this.hand_right]=card
            this.hand_right++
        }
        if(seat=="up"){
            Ani.ani_get(vector,new Laya.Vector3(-config.offset.hand_z+14*config.offset.hand_interval,0,-config.offset.hand_x),new Laya.Vector3(90, 90, -90),card)
            //card.transform.localPosition=new Laya.Vector3(-config.offset.hand_z+this.hand_up*config.offset.hand_interval,0,-config.offset.hand_x)
            //card.transform.rotate(new Laya.Vector3(90, 90, -90), true, false)
            this.hand_up_card[this.hand_up]=card
            this.hand_up++
        }
        if(seat=="down"){
            Ani.ani_get(vector,new Laya.Vector3(-config.offset.hand_z+14*config.offset.hand_interval,0,config.offset.hand_x),new Laya.Vector3(90, 90, 90),card)
            //card.transform.localPosition=new Laya.Vector3(-config.offset.hand_z+this.hand_down*config.offset.hand_interval,0,config.offset.hand_x)
            //card.transform.rotate(new Laya.Vector3(90, 90, 90), true, false)
            this.hand_down_card[this.hand_down]=card
            this.hand_down++
        }


}

//开具手牌
Card.prototype.adds=function(seat,old_card,scene){
    //创建牌
     var card= scene.addChild(new Laya.MeshSprite3D(Laya.Mesh.load("assets/Assets/Assets/MahjongTiles/Models/"+config.Mahjong["0"]+".lm")));
     var vector=old_card.transform.localPosition  
     card.transform.rotate(new Laya.Vector3(0, 0,180), true, false)
     fun.clean(old_card)
        if(seat=="left"){
            //设置位置

            Ani.ani_get(vector,new Laya.Vector3(-config.offset.hand_x,0,-config.offset.hand_z+this.hand_left*config.offset.hand_interval),new Laya.Vector3(90, 90, 0),card)
            //card.transform.localPosition=new Laya.Vector3(-config.offset.hand_x,0,-config.offset.hand_z+this.hand_left*config.offset.interval)
            
            //card.transform.rotate(new Laya.Vector3(90, 90, 180), true, false)
            this.hand_left_card[this.hand_left]=card
            this.hand_left++
        }
        if(seat=="right"){
            Ani.ani_get(vector,new Laya.Vector3(config.offset.hand_x,0,-config.offset.hand_z+this.hand_right*config.offset.hand_interval),new Laya.Vector3(90, -90, 0),card)
            //card.transform.localPosition=new Laya.Vector3(config.offset.hand_x,0,-config.offset.hand_z+this.hand_right*config.offset.hand_interval)
            //card.transform.rotate(new Laya.Vector3(90, -90, 180), true, false)
            this.hand_right_card[this.hand_right]=card
            this.hand_right++
        }
        if(seat=="up"){
            Ani.ani_get(vector,new Laya.Vector3(-config.offset.hand_z+this.hand_up*config.offset.hand_interval,0,-config.offset.hand_x),new Laya.Vector3(90, 90, -90),card)
            //card.transform.localPosition=new Laya.Vector3(-config.offset.hand_z+this.hand_up*config.offset.hand_interval,0,-config.offset.hand_x)
            //card.transform.rotate(new Laya.Vector3(90, 90, -90), true, false)
            this.hand_up_card[this.hand_up]=card
            this.hand_up++
        }
        if(seat=="down"){
            Ani.ani_get(vector,new Laya.Vector3(-config.offset.hand_z+this.hand_down*config.offset.hand_interval,0,config.offset.hand_x),new Laya.Vector3(90, 90, 90),card)
            //card.transform.localPosition=new Laya.Vector3(-config.offset.hand_z+this.hand_down*config.offset.hand_interval,0,config.offset.hand_x)
            //card.transform.rotate(new Laya.Vector3(90, 90, 90), true, false)
            this.hand_down_card[this.hand_down]=card
            this.hand_down++
        }



// var left=0
//     for(var i=num;i>count;i--){
//         Mahjong[i].transform.localPosition=new Laya.Vector3(-config.offset.hand_x,0,-config.offset.hand_z+left*config.offset.hand_interval)
//         Mahjong[i].transform.rotate(new Laya.Vector3(90, -90, 180), true, false)
//         left++
//     }





}
//4次 手牌
Card.prototype.add4=function(seat,Mahjongs,scene){
    for(var i=0;i<4;i++){
        this.adds(seat,Mahjongs[i],scene)
    }
}
//减少手牌
Card.prototype.less=function(seat){
        if(seat=="left"){
            //查找数组里是否有值
            if(this.hand_left_card[0]){
                //是否已被销毁
                if(!this.hand_left_card[0].destroyed){
                    fun.cleans([this.hand_left-1],this.hand_left_card)
                    this.hand_left--
                }
            }
        }
        if(seat=="right"){
            if(this.hand_right_card[0]){
                if(!this.hand_right_card[0].destroyed){
                    fun.cleans([this.hand_right-1],this.hand_right_card)
                    this.hand_right--
                }
            }
        }
        if(seat=="up"){
            if(this.hand_up_card[0]){
                if(!this.hand_up_card[0].destroyed){
                    fun.cleans([this.hand_up-1],this.hand_up_card)
                    this.hand_up--
                }
            }
        }




// var left=0
//     for(var i=num;i>count;i--){
//         Mahjong[i].transform.localPosition=new Laya.Vector3(-config.offset.hand_x,0,-config.offset.hand_z+left*config.offset.hand_interval)
//         Mahjong[i].transform.rotate(new Laya.Vector3(90, -90, 180), true, false)
//         left++
//     }





}
//出牌
Card.prototype.out_card=function(seat,name,scene,less){
        var card=scene.addChild(new Laya.MeshSprite3D(Laya.Mesh.load("assets/Assets/Assets/MahjongTiles/Models/"+name+".lm")));
        // var test=scene.addChild(new Laya.MeshSprite3D(Laya.Mesh.load("1/1.lm")));
        // test.transform.localScale=new Laya.Vector3(100, 100, 100);
        //偏移量init
        var offset=0
        var row=0
        var row_offset=config.offset.center_row*config.offset.interval
        var ran=0
        if(seat=="left"){
            //查找数组里是否有值
            if(this.hand_left_card[0]){
                //是否已被销毁
                if(!this.hand_left_card[0].destroyed){
                   
                    var ran=fun.randomNum(0,this.hand_left-2)
                    //获取打出牌位置
                    var vector=this.hand_left_card[ran].transform.localPosition
                     //清除老手牌
                    fun.cleans([ran],this.hand_left_card)
                    this.hand_left--
                    //Laya.timer.clear(a)
                    // Laya.TimeLine.to(card,card,60,null,null)
                    //计算偏移量
                    row=Math.floor(this.center_left/config.offset.center_row)
                    offset=row*row_offset
                    //增加中心四方形牌
                    card.transform.localPosition=vector
                    Ani.ani_out(vector,new Laya.Vector3(-config.offset.center_x-row*config.offset.row_interval,0,-config.offset.center_z-offset+this.center_left*config.offset.interval),card)
                    //card.transform.lookAt(new Laya.Vector3(-config.offset.center_x-row*config.offset.row_interval,0,-config.offset.center_z-offset+this.center_left*config.offset.interval),new Laya.Vector3(0,0,0))
                    //card.transform.localPosition=new Laya.Vector3(-config.offset.center_x-row*config.offset.row_interval,0,-config.offset.center_z-offset+this.center_left*config.offset.interval)
                    card.transform.rotate(new Laya.Vector3(0,90,0),true,false)
                    this.center_left_card[this.center_left]=card
                    this.center_left++

                    this.sort(seat,ran,this.hand_left,less)
                    return
                }
            }
        }
        if(seat=="right"){
            if(this.hand_right_card[0]){
                if(!this.hand_right_card[0].destroyed){
                    var ran=fun.randomNum(0,this.hand_right-2)  
                    var vector=this.hand_right_card[ran].transform.localPosition
                    fun.cleans([ran],this.hand_right_card)
                    this.hand_right--
                    //计算偏移量
                    row=Math.floor(this.center_right/config.offset.center_row)
                    offset=row*row_offset
                    card.transform.localPosition=vector
                    Ani.ani_out(vector,new Laya.Vector3(config.offset.center_x+row*config.offset.row_interval,0,-config.offset.center_z+row_offset+offset-this.center_right*config.offset.interval),card)
                    //card.transform.localPosition=new Laya.Vector3(config.offset.center_x+row*config.offset.row_interval,0,-config.offset.center_z+row_offset+offset-this.center_right*config.offset.interval)
                    card.transform.rotate(new Laya.Vector3(0, -90, 0), true, false)
                    this.center_right_card[this.center_right]=card
                    this.center_right++
                    this.sort(seat,ran,this.hand_right,less)
                    return
                }
            }
        }
        if(seat=="up"){
            if(this.hand_up_card[0]){
                if(!this.hand_up_card[0].destroyed){
                    var ran=fun.randomNum(0,this.hand_up-2) 
                    var vector=this.hand_up_card[ran].transform.localPosition
                    fun.cleans([ran],this.hand_up_card)
                    this.hand_up--
                    //计算偏移量
                    row=Math.floor(this.center_up/config.offset.center_row)
                    offset=row*row_offset
                    card.transform.localPosition=vector
                    Ani.ani_out(vector,new Laya.Vector3(-config.offset.center_z+row_offset+offset-this.center_up*config.offset.interval,0,-config.offset.center_x-row*config.offset.row_interval),card)
                    //card.transform.localPosition=new Laya.Vector3(-config.offset.center_z+row_offset+offset-this.center_up*config.offset.interval,0,-config.offset.center_x-row*config.offset.row_interval)
                    card.transform.rotate(new Laya.Vector3(0, 0, 0), true, false)

                    this.center_up_card[this.center_up]=card
                    this.center_up++
                    this.sort(seat,ran,this.hand_up,less)
                    return
                }
            }
        }
        if(seat=="down"){
            if(this.hand_down_card[0]){
                if(!this.hand_down_card[0].destroyed){
                    var ran=fun.randomNum(0,this.hand_down-2) 
                    var vector=this.hand_down_card[ran].transform.localPosition
                    fun.cleans([ran],this.hand_down_card)
                    this.hand_down--
                    //计算偏移量
                    row=Math.floor(this.center_down/config.offset.center_row)
                    offset=row*row_offset
                    card.transform.localPosition=vector
                    Ani.ani_out(vector,new Laya.Vector3(-config.offset.center_z-offset+this.center_down*config.offset.interval,0,config.offset.center_x+row*config.offset.row_interval),card)
                    //card.transform.localPosition=new Laya.Vector3(-config.offset.center_z-offset+this.center_down*config.offset.interval,0,config.offset.center_x+row*config.offset.row_interval)
                    card.transform.rotate(new Laya.Vector3(0, 180, 0), true, false)

                    this.center_down_card[this.center_down]=card
                    this.center_down++
                    this.sort(seat,ran,this.hand_down,less)
                    return
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
}

Card.prototype.tied=function(seat,ran,vector){
    if(seat=="left"){
        for(var i=0;i<this.hand_left;i++){
            if(i>=ran){
               Ani.ani_move(vector,this.hand_left_card[i])
                //this.hand_left_card[i].transform.translate(new Laya.Vector3(0,0,-8),false)
            }
        }
    }
    if(seat=="up"){
        for(var i=0;i<this.hand_up;i++){
            if(i>=ran){
               Ani.ani_move(vector,this.hand_up_card[i])
                //this.hand_left_card[i].transform.translate(new Laya.Vector3(0,0,-8),false)
            }
        }
    }
    if(seat=="right"){
        for(var i=0;i<this.hand_right;i++){
            if(i>=ran){
               Ani.ani_move(vector,this.hand_right_card[i])
                //this.hand_left_card[i].transform.translate(new Laya.Vector3(0,0,-8),false)
            }
        }
    }
    if(seat=="down"){
        for(var i=0;i<this.hand_down;i++){
            if(i>=ran){
               Ani.ani_move(vector,this.hand_down_card[i])
                //this.hand_left_card[i].transform.translate(new Laya.Vector3(0,0,-8),false)
            }
        }
    }
        
}

//整理卡牌
Card.prototype.sort=function(seat,ran_out,num,less){
    var ran_get=0
    var offset=0
    var length=0
    while(1){
        
        ran_get=fun.randomNum(0,num)
        if(ran_get!=ran_out){
            break
        }
        
    }
    if(ran_get<ran_out){
        offset=1
        length=1
    }
    else{
        offset=1
        length=0
    }
    if(ran_out==num){
        offset=0
    }
    if(ran_get==num){

    }

    if(seat=="left"){
        //整理数组        
        //console.log(this.hand_left_card.length)
        // for(var i=0;i<this.hand_left_card.length;i++){
        //     if(i>=ran_out){
        //         this.hand_left_card[i-1]=this.hand_left_card[i]
        //     }
        // }
        this.hand_left_card.splice(ran_out,1)
        
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
        this.tied(seat,ran_out,new Laya.Vector3(0,0,-8))

        if(!less){
            this.hand_left_card.splice(ran_get,0,this.hand_left_card[this.hand_left-1])
            //空出 进牌空隙 0123  1233
            for(var i=0;i<this.hand_left;i++){
          
                if(i>=ran_get){
                   Ani.ani_move(new Laya.Vector3(0,0,8),this.hand_left_card[i])         
                   //this.hand_left_card[i].transform.translate(new Laya.Vector3(0,0,8),false)
                }
            }
            //插入进牌空隙
            Ani.ani_insert(new Laya.Vector3(0,0,8*(-this.hand_left-(13-this.hand_left)-offset+ran_get)),this.hand_left_card[ran_get])
        }
        console.log("left")
        console.log(ran_get,ran_out)
        console.log(-this.hand_left-offset+ran_get)

    }
    if(seat=="up"){

        this.hand_up_card.splice(ran_out,1)
        
        // this.hand_left_card[i].transform.translate(new Laya.Vector3(0,0,-7),false)

        //并列出牌空隙
        this.tied(seat,ran_out,new Laya.Vector3(-8,0,0))
        if(!less){
            this.hand_up_card.splice(ran_get,0,this.hand_up_card[this.hand_up-1])
            //空出 进牌空隙 0123  1233
            for(var i=0;i<this.hand_up;i++){      
                if(i>=ran_get){
                    Ani.ani_move(new Laya.Vector3(8,0,0),this.hand_up_card[i])         
                   //this.hand_left_card[i].transform.translate(new Laya.Vector3(0,0,8),false)
                }
            }
            //插入进牌空隙
            Ani.ani_insert(new Laya.Vector3(8*(-this.hand_up-(13-this.hand_up)-offset+ran_get),0,0),this.hand_up_card[ran_get])
        }
        console.log("up")
        console.log(ran_get,ran_out)
    }
    if(seat=="right"){
        this.hand_right_card.splice(ran_out,1)
        
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
        this.tied(seat,ran_out,new Laya.Vector3(0,0,-8))

        if(!less){
            this.hand_right_card.splice(ran_get,0,this.hand_right_card[this.hand_right-1])
            //空出 进牌空隙 0123  1233
            for(var i=0;i<this.hand_right;i++){      
                if(i>=ran_get){
                    Ani.ani_move(new Laya.Vector3(0,0,8),this.hand_right_card[i])         
                   //this.hand_left_card[i].transform.translate(new Laya.Vector3(0,0,8),false)
                }
            }
            //插入进牌空隙
            Ani.ani_insert(new Laya.Vector3(0,0,8*(-this.hand_right-(13-this.hand_right)-offset+ran_get)),this.hand_right_card[ran_get])
       }
        console.log("right")
        console.log(ran_get,ran_out)
    }
    if(seat=="down"){
        this.hand_down_card.splice(ran_out,1)
       
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
        this.tied(seat,ran_out,new Laya.Vector3(-8,0,0))
        if(!less){
           this.hand_down_card.splice(ran_get,0,this.hand_down_card[this.hand_down-1])
            //空出 进牌空隙 0123  1233
            for(var i=0;i<this.hand_down;i++){      
                if(i>=ran_get){
                    Ani.ani_move(new Laya.Vector3(8,0,0),this.hand_down_card[i])         
                   //this.hand_left_card[i].transform.translate(new Laya.Vector3(0,0,8),false)
                }
            }
            //插入进牌空隙
            Ani.ani_insert(new Laya.Vector3(8*(-this.hand_down-(13-this.hand_down)-offset+ran_get),0,0),this.hand_down_card[ran_get])
        }
        console.log("down")
        console.log(ran_get,ran_out)
    }

}
Card.prototype.side=function(seat,hands,scene){

    for(var i=0;i<hands.length;i++){
        this.side_sort(seat,"hand",config.Mahjong[hands[i]],scene)
                

    }
    this.side_center(seat)

        //this.side_sort(seat,"center",config.Mahjong[centers[i]],scene)

}
Card.prototype.side_center=function(seat){
    var card
    if(seat=="left"){
        card=this.center_left_card[this.center_left-1]
             Ani.ani_side_center(card.transform.position,new Laya.Vector3(-config.side.z,0,config.side.x-this.side_left),new Laya.Vector3(0, 90, 0),card)
             this.center_left--
             this.side_left+=7
    }
    if(seat=="up"){
        card=this.center_up_card[this.center_up-1]
             Ani.ani_side_center(card.transform.position,new Laya.Vector3(-config.side.x-this.side_up,0,-config.side.z),new Laya.Vector3(0, 0, 0),card)
             this.center_up--
             this.side_up+=7
    }
    if(seat=="right"){
        card=this.center_right_card[this.center_right-1]
             Ani.ani_side_center(card.transform.position,new Laya.Vector3(config.side.z,0,-config.side.x-this.side_right),new Laya.Vector3(0, 90, 0),card)
             this.center_right--
             this.side_right+=7
    }
    if(seat=="down"){
        card=this.center_down_card[this.center_down-1]
        console.log(this.center_down_card)
             Ani.ani_side_center(card.transform.position,new Laya.Vector3(config.side.x-this.side_down,0,config.side.z),new Laya.Vector3(0, 0, 0),card)
             this.center_down--
             this.side_down+=7
    }

}

//边缘牌
Card.prototype.side_sort=function(seat,option,name,scene){

   var card=scene.addChild(new Laya.MeshSprite3D(Laya.Mesh.load("assets/Assets/Assets/MahjongTiles/Models/"+name+".lm")));
   var ran
   var vector
    if(seat=="left"){
        //hand card move side
        if(option=="hand"){
            ran=this.hand_left-1;
            vector=this.hand_left_card[ran].transform.localPosition
            Ani.ani_side(vector,new Laya.Vector3(-config.side.z,0,config.side.x-this.side_left),new Laya.Vector3(0, 90, 0),card)
            this.side_left+=7
            fun.clean(this.hand_left_card[ran])
            this.hand_left_card.splice(ran,1)
            this.hand_left--
            this.tied(seat,ran,new Laya.Vector3(0,0,-8))
            
            

        }
        //center card move side
        if(option=="center"){//this.center_down_card[2].transform.localPosition
             Ani.ani_side(new Laya.Vector3(0,0,0),new Laya.Vector3(-config.side.z,0,config.side.x-this.side_left),new Laya.Vector3(0, 90, 0),card)
             this.side_left+=7
        }
            
             

    }
    if(seat=="up"){
        if(option=="hand"){
             ran=this.hand_up-1;
            vector=this.hand_up_card[ran].transform.localPosition
            Ani.ani_side(vector,new Laya.Vector3(-config.side.x-this.side_up,0,-config.side.z),new Laya.Vector3(0, 0, 0),card)
            this.side_up+=7
            fun.clean(this.hand_up_card[ran])
            this.hand_up_card.splice(ran,1)
            this.hand_up--
            this.tied(seat,ran,new Laya.Vector3(-8,0,0))
        }
        //center card move side
        if(option=="center"){//this.center_down_card[2].transform.localPosition
             Ani.ani_side(new Laya.Vector3(0,0,0),new Laya.Vector3(-config.side.x-this.side_up,0,-config.side.z),new Laya.Vector3(0, 0, 0),card)
             this.side_up+=7
        }
    }
    if(seat=="right"){
        if(option=="hand"){
             ran=this.hand_right-1;
            vector=this.hand_right_card[ran].transform.localPosition
            Ani.ani_side(vector,new Laya.Vector3(config.side.z,0,-config.side.x-this.side_right),new Laya.Vector3(0, 90, 0),card)
            this.side_right+=7
            fun.clean(this.hand_right_card[ran])
            this.hand_right_card.splice(ran,1)
            this.hand_right--
            this.tied(seat,ran,new Laya.Vector3(0,0,-8))
        }
        //center card move side
        if(option=="center"){//this.center_down_card[2].transform.localPosition
             Ani.ani_side(new Laya.Vector3(0,0,0),new Laya.Vector3(config.side.z,0,-config.side.x-this.side_right),new Laya.Vector3(0, 90, 0),card)
             this.side_right+=7
        }
    }
    if(seat=="down"){
        if(option=="hand"){
             ran=this.hand_down-1;
            vector=this.hand_down_card[ran].transform.localPosition
            Ani.ani_side(vector,new Laya.Vector3(config.side.x-this.side_down,0,config.side.z),new Laya.Vector3(0, 0, 0),card)
            this.side_down+=7
            fun.clean(this.hand_down_card[ran])
            this.hand_down_card.splice(ran,1)
            this.hand_down--
            this.tied(seat,ran,new Laya.Vector3(-8,0,0))
        }
        //center card move side
        if(option=="center"){//this.center_down_card[2].transform.localPosition
             Ani.ani_side(new Laya.Vector3(0,0,0),new Laya.Vector3(config.side.x-this.side_down,0,config.side.z),new Laya.Vector3(0, 0, 0),card)
             this.side_down+=7
        }

    }

}
Card.prototype.hand_left=0
Card.prototype.hand_right=0
Card.prototype.hand_up=0
Card.prototype.hand_down=0
Card.prototype.hand_left_card=[]
Card.prototype.hand_right_card=[]
Card.prototype.hand_up_card=[]
Card.prototype.hand_down_card=[]

Card.prototype.center_left=0
Card.prototype.center_up=0
Card.prototype.center_right=0
Card.prototype.center_down=0
Card.prototype.center_left_card=[]
Card.prototype.center_up_card=[]
Card.prototype.center_right_card=[]
Card.prototype.center_down_card=[]

Card.prototype.side_left=0
Card.prototype.side_up=0
Card.prototype.side_right=0
Card.prototype.side_down=0
Card.prototype.side_left_card=[]
Card.prototype.side_up_card=[]
Card.prototype.side_right_card=[]
Card.prototype.side_down_card=[]

module.exports =new Card();