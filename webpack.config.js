var webpack = require('webpack');


module.exports = {
	entry: [
	'script!jquery/dist/jquery.min.js',
	'script!tether/dist/js/tether.min.js',
	// 'script!react-bootstrap/dist/react-bootstrap.js',

	'./app/app.jsx',

	// 'script!./assets/js/material-kit.js'
	],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		}),
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
		},
		resolve: {
			root: __dirname,
			modulesDirectories: [
				'node_modules',
				'./app/components',
				'./app/api',
			],
			alias : {
				Main: 'app/components/Main.jsx',
				Nav: 'app/components/Nav.jsx',
				materialJS: 'public/assets/js/material.min.js',
				materialTomJS: 'public/assets/js/material-kit.js',
				'react-bootstrap': 'react-bootstrap/dist/react-bootstrap.js',
				'bootstrapjs': 'bootstrap/dist/js/bootstrap.js',
				'tetherjs': 'node_modules/tether/dist/js/tether.min.js',
				'appStyle': 'public/assets/scss/main.scss',
				'actions': 'app/actions/actions.jsx',
				'reducers': 'app/reducers/reducers.jsx',
				'configureStore': 'app/store/configureStore.jsx',
			},
			extensions: ['', '.js', '.jsx']
		},
		module: {
			loaders: [
				{
					loader: 'babel-loader',
					query: {
						presets: ['es2015', 'react', 'stage-0']
					},
					test: /\.jsx?$/, 
					exclude: /(node_modules|bower_components|assets\/img)/
				},
				{
	                test: /\.css$/,
	                loader:'style!css!'
				},
			    {
			        test: /\.(jpe?g|png|gif|svg|cur)$/i,
			        loaders: [
			            'file?hash=sha512&digest=hex&name=[hash].[ext]',
			            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
			        ]
			    }
			]
		},
		devtool: 'cheap-module-eval-source-map'
};