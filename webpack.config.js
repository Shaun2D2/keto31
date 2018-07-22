const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, './client/js/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
	module: {
		rules: [
			{
				test: /\.js(x?)$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'client/templates/index.html',
			title: 'Keto31',
			hash: true
		})
	],
	resolve: {
		extensions: ['.js', '.jsx']
	}
}
