var gulp = require("gulp");
var gutil = require("gulp-util");
var zip = require('gulp-zip');
var path = require("path");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");
var karma = require('karma').server;
var plato = require('gulp-plato');

gulp.task("default", ["tdd"]);

gulp.task("build", function(callback) {
	var myConfig = Object.create(webpackConfig);
	myConfig.plugins = myConfig.plugins.concat(
		new webpack.DefinePlugin({
			"process.env": {
				"NODE_ENV": JSON.stringify("production")
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	);

	webpack(myConfig, function(err, stats) {
		if (err) throw new gutil.PluginError("webpack:build", err);
		gutil.log("[webpack:build]", stats.toString({
			colors: true
		}));
		callback();
	});
});

gulp.task('test', function(done) {
	karma.start({
		configFile: __dirname + '/karma.conf.js',
		singleRun: true
	}, done);
});

gulp.task('tdd', function(done) {
	karma.start({
		configFile: __dirname + '/karma.conf.js',
		singleRun: false,
		autoWatch: true
	}, done);
});

gulp.task('plato', function() {
	return gulp.src('src/**/*.js')
		.pipe(plato('reports/plato', {
			jshint: {
				options: {
					strict: true
				}
			},
			complexity: {
				trycatch: true
			}
		}));
});
