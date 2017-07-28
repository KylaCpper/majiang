var easym=require('easy-mongo')
  , argv =require('yargs')
	.demand('mongo')
	.describe('mongo', '--mongo=[mongodb://][usr:pwd@]ip[:port][,[usr:pwd@]ip[:port]]/db, 参考https://docs.mongodb.com/manual/reference/connection-string/')
	.argv;

var g_db=null;
module.exports=function (cb) {
	if (g_db) return cb(null, g_db, easym);
	else new easym.DbProvider().init(argv.mongo, {exists:[
																												{users:{index:['nickname', 'coin', 'diamond', 'showId']}},
																												{bills:{capped:true, size:100*1024, max:1000}},
																												{mails:{index:['to', 'from', 'used'], size:100*1024, max:1000}}
																												// {record:{index:['win','role','time','gametype','content']}}
																												]}, function(err, db) {
		if (err) return cb(err);
		g_db=db;
		cb(null, db, easym);
	});
}

