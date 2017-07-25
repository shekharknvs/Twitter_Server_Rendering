var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry:[
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.DedupePlugin(),
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
};