function fun(){
console.log(11111)
}
fun.prototype.create=function(name){
		return fairygui.UIPackage.createObject("mojiang",name).asCom
}

// class fun{1
// 	constructor(){

// 	}
// 	a(){
// 		console.log(11111111)
// 	}
// }
module.exports=new fun();