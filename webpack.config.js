'use strict'
var webpack = require('webpack');;
var CopyWebpackPlugin = require('copy-webpack-plugin');
var WebpackAutoInject = require('webpack-auto-inject-version');
var ManifestPlugin = require('webpack-manifest-plugin');
var path=require('path');
var argv=require('yargs')
	.boolean('dev')
	.boolean('pub')
	.boolean('dist')
	.boolean('compress')
	.argv;
var conf = {
	entry: {entry:'./client/entry.js', loader:'./client/loader.js'},
	output: {
		path: './bin',
		filename: '[name].js?[chunkhash]',
		publicPath:'',
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /(node_modules|libs)/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		},
		{
			test: /\.(png|jpg|mp3|ogg|fui)$/, loader: 'file-loader', query:{name:'[name].[ext]?[hash]'}
		}]
	},
	context: __dirname,
    plugins: [
		new CopyWebpackPlugin([
		{ from: {glob:path.join(__dirname, 'client/res/hall*.+(ogg|mp3)')}, to:'', flatten:true },
		{ from: path.join(__dirname, 'client/res/logo.png'), to:'', flatten:true },
		{ from: path.join(__dirname, 'client/resource/'), to:'resource'},
		{ from: path.join(__dirname, 'client/src/'), to:'src'},
		{ from: path.join(__dirname, 'client/js/'), to:'js'},
		{ from: path.join(__dirname, 'client/index.*'), to:'', flatten:true},

		]),
		new WebpackAutoInject({injectByTagFileRegex:/^(.){1,}.js$/}),
		new ManifestPlugin(),
	]
};

if (argv.dev) {
	let FaviconsWebpackPlugin = require('favicons-webpack-plugin');
	conf.plugins.push(new FaviconsWebpackPlugin(path.join(__dirname, 'bin/res/logo.png')));
} 
if (argv.dist) {
	var WebpackShellPlugin = require('webpack-shell-plugin');
	var os=require('os').platform();
	//conf.plugins.push(new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}));
}
if (argv.compress) conf.plugins.push(new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}));
	// conf.plugins.push();
if (argv.pub || argv.dist) {
	var copyfileCmds=[];
	switch(os) {
		case 'win32':
		copyfileCmds.push(path.join(__dirname, './copytodist.bat'));
		break;
		case 'linux':
		case 'darwin':
		copyfileCmds.push('./copytodist.sh');
		// copyfileCmds.push('pwd');
		// copyfileCmds.push('rsync --delete -vzrtopgq -aP --exclude=.* bin/ ../dist/bin/');
		// copyfileCmds.push('rsync --delete -vzrtopgq -aP --exclude=.* server/ ../dist/server/');
		// copyfileCmds.push('cp ./app.js ../dist');
		// copyfileCmds.push('cp ./package.json ../dist');
		// copyfileCmds.push('rsync --delete -vzrtopgq -aP --exclude=.* bin/ app/www/');
		// copyfileCmds.push('if [ -d "./app/platforms/ios/www" ]; then cp -fr app/www/ app/platforms/ios/www/; fi');
		// //copyfileCmds.push('svn ci app/www -m ""');
		// copyfileCmds.push('echo file copied');
		// copyfileCmds.push('cd ../dist');
		// copyfileCmds.push('svn ci -m ""');
		// copyfileCmds.push('cd ../niuniu/app/www');
		// copyfileCmds.push('svn ci -m ""');

		//copyfileCmds.push('svn ci ../dist -m ""');
		//copyfileCmds.push('svn ci ../app -m ""');
		break;
	}
	conf.plugins.push(new WebpackShellPlugin({
		onBuildEnd:copyfileCmds,
		dev:false
	}))
}

module.exports=conf;