var args=require('yargs')
	.default('ss', '')
	.argv;
var jrpc=new (require('jrpc-client'))()
	.connect(args.ss);

module.exports = function ss(name, obj) {
	obj.productName=obj.productName||'wangpainiuniu';
	obj.platformID=obj.platformID||0;
	obj.serverID=obj.serverID||0;
	obj.time=obj.time||new Date();

	jrpc.call(name, obj);
}