const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
	// watch: true,

	mode: 'development',
	// mode: 'production',
	entry: path.resolve(__dirname, 'src', 'app.js'),
	output: {
		filename: 'app.js'
	},
	resolve: {
		modules: [path.join(__dirname, 'src'), 'node_modules'],
		extensions: ['.js', '.vue'],
		alias: {
		  'vue$': 'vue/dist/vue.esm.js' // for es module
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'sass-loader'
				]
			},
		]
	},
	plugins: [
		new VueLoaderPlugin(),
	]
}
