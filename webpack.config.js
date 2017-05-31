var path = require('path');
var srcPath = path.join(__dirname, 'src');
var buildPath = path.join(__dirname, 'dist');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	context: srcPath,
	entry: ['babel-polyfill',path.join(srcPath, 'index.jsx') ],
	devtool: 'source-map',
	output: {
		path: buildPath,
		filename: "bundle.js",
	},
	node: {
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		dns: 'empty'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'env']
				}
			},
			{
				test: /\.scss/,
				//exclude: /\rules.scss$/, not working, 
				loader: ExtractTextPlugin.extract('css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass'),
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'file-loader?name=/img/[name].[ext]&publicPath=.',
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('bundle.css'),
	],
	externals: {
		"isomorphic-fetch": "fetch"
	}
};