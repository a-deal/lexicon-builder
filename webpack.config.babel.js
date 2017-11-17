/* global __dirname */

import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
	entry: resolve(__dirname, 'app/index.jsx'),
	output: {
		path: resolve(__dirname, 'dist'),
		filename: 'app.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './app/assets/index.html',
			favicon: './app/assets/favicon.png'
		})
	],
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devServer: {
		contentBase: resolve(__dirname, 'dist'),
		port: 9000
	}
};
