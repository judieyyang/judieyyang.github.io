const path = require('path');

module.exports = {
	publicPath: '/',
	runtimeCompiler: true,
	css: {
		modules: true,
	},
	configureWebpack: {
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
			},
			extensions: ['.js', '.vue', '.json'],
		},
	},
};
