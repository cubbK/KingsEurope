var path = require('path');
var srcPath = path.join(__dirname, 'src');
var buildPath = path.join(__dirname, 'dist');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	context: srcPath,
	entry: path.join(srcPath, 'index.jsx'),
	devtool: 'source-map',
	output: {
		path: buildPath,
		filename: "bundle.js",
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
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
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('bundle.css'),
	]
};