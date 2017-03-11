var webpack = require("webpack"),
    path = require('path'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    lessLoader = ExtractTextPlugin.extract("css-loader!less-loader");

module.exports = {
    entry: [
        'babel-polyfill',
        __dirname + '/src' + '/index.js'
    ],
    output: {
        path: __dirname + '/public/js',
        publicPath: 'js/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot-loader', 'babel-loader']},
            {test: /\.less$/, exclude: /node_modules/, loader: lessLoader},
            {test: /\.css$/, exclude: /node_modules/, loader: ['style-loader', 'css-loader']}
        ]
    },
    devServer: {
        contentBase: __dirname + '/public'
    },
    plugins: [
        new CleanWebpackPlugin(['css/main.css', 'js/bundle.js'], {
            root: __dirname + '/public',
            verbose: true,
            dry: false
        }),
        new ExtractTextPlugin('../css/main.css')
    ]
};