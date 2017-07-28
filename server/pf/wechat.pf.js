var express = require('express');
var crypto = require('crypto'),argv=require('yargs').argv, debugout=require('debugout')(argv.debugout);;
var router = express.Router();
var qs=require('querystring').stringify, url=require('url');
var httpf=require('httpf');
var getDB=require('../db.js'), ObjectID = require('mongodb').ObjectID;
var User=require('../User.js');

getDB(function(err, db) {
	if (err) return router.use(function(req,res) {
		res.send({err:err});
	});
	router.all('/pay', httpf({orderid:'string', money:'number', callback:true}, function(orderid, money, callback) {
		if (!argv.debugout) return callback('only availble in debugout mode');
		var self=this;
		var key={_id:ObjectID(orderid)};
		db.bills.find(key).limit(1).next(function(err, order) {
			if (err) return callback(err);
			if (order==null) return callback('无此订单'+orderid);
			if (order.pack.rmb!=money) return callback('订单支付金额无效');
			if (order.used) return callback({msg:'订单已使用@', used:order.used});
			db.bills.update(key, {$set:{used:{time:new Date(), ip:self.req.ip}}});
			User.formID(order.user, function(err, user) {
				if (err) return callback(err);
				user.addPackage(order.pack);
				callback(null, 'success');
			});
		})
	}));

});
module.exports=router;