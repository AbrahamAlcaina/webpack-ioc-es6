var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

var isDirectory = function (file) {
	return fs.statSync(path.join('./src/games/', file)).isDirectory();
};

var games = [];
var entries = {
	'vendor': [
		'consolePolyfill',
		'bluebird',
		'httpplease',
		'jquery',
		'phaser'
	]
};

fs.readdirSync('./src/games/').filter(isDirectory).forEach(function (game) {
	games.push(game);
	entries['games/' + game] = './games/' + game + '/main.js';
});

module.exports = {
	cache: false,
	context: path.join(__dirname, 'src'),
	entry: entries,
	output: {
		path: path.join(__dirname, '/dist'),
		publicPath: '/',
		filename: '[name]/game.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/i, exclude: /node_modules/i, loader: 'traceur?experimental&arrayComprehension&runtime' },
			{ test: /(phaser-arcade-physics|phaser-debug|jquery|query.signalR.min)\.js$/i, loader: 'script' },
			{ test: /\.json$/i, exclude: /\.audiosprite\.json$/i, loader: 'json' },
			{ test: /\.css$/i, loader: 'style!css' },
			{ test: /\.less$/i, loader: 'style!css!less' },
			{ test: /\.(jpe?g|png|gif)$/i, loader: 'file?name=[path][name].[ext]?[hash]' },
			{ test: /\.(mp3|ac3|ogg|m4a)$/i, loader: 'file?name=[path][name].[ext]?[hash]' },
			{ test: /\.(ttf|woff|eot)$/i, loader: 'file?name=[path][name].[ext]?[hash]' },
			{ test: /\.audiosprite\.json$/i, loader: 'file?name=[path][name].[ext]?[hash]' }
		]
	},
	node: {
		console: true
	},
	resolve: {
		alias: {
			'jquery': path.join(__dirname, 'node_modules/jquery/dist/jquery.js'),
			'phaser': path.join(__dirname, 'node_modules/phaser/dist/phaser-arcade-physics.js'),
			'phaser-debug': path.join(__dirname, 'node_modules/phaser-debug/dist/phaser-debug.js')
		},
		extensions: ['', '.js']
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendor', 'libs/phasersito.vendor.js'),
		new webpack.ProvidePlugin({
			Promise: 'bluebird'
		}),
		function() {
			this.plugin('done', function(stats) {
				require('fs').writeFileSync(
					path.join(__dirname, '.work/stats.json'),
					JSON.stringify(stats.toJson()));
				});
		}
	]
};
