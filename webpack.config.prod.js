import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';

export default {
	devtool: 'source-map',
	entry: {
		main: path.resolve(__dirname, 'src/index'),
		vendor: path.resolve(__dirname, 'src/vendor'),
	},
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].[chunkhash].js'
	},
	mode: 'development',
	plugins: [
		new webpack.LoaderOptionsPlugin({
			debug: true,
			noInfo: false,
		}),
		new WebpackMd5Hash(),
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minimize: true,
			},
			inject: true,
		}),
	],
	optimization: {
		minimize: true,
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: 'vendor',
					chunks: 'all',
				},
			}
		}
	},
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
			{ test: /\.css$/, loaders: ['style-loader', 'css-loader'] }
		]
	}
}
