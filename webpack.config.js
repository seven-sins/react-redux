var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        //'webpack-hot-middleware/client',
        main: './index.js',
        index: './src/frontend/app.js',
        login: './src/login/login.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
		publicPath: '/dist/',
        filename: '[name].js',
        chunkFilename: "[name].js"
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
        	output: {
				comments: false  // remove all comments
			},
			compress: {
				warnings: false
			}
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
        //new webpack.optimize.CommonsChunkPlugin("common.js", ["main", "index"])
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(woff2|woff|ttf).*$/,
                loader: "file-loader"
            },
            {
                test: /\.(eot|svg).*$/,
                loader: 'file'
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: "url?limit=8192"
            }
        ]
    }
};