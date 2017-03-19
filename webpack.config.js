var webpack = require("webpack"),
    path = require('path'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    lessLoader = ExtractTextPlugin.extract("css-loader!less-loader");

module.exports = {
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        __dirname + '/src' + '/index.js'
    ],
    output: {
        path: __dirname + '/public/js',
        publicPath: 'js/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.less$/, exclude: /node_modules/, loader: lessLoader},
            {test: /\.css$/, exclude: /node_modules/, loader: ['style-loader', 'css-loader']},
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'react-hot-loader/webpack'
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            'plugins': [
                                'lodash',
                                'transform-class-properties'
                            ],
                            'presets': [
                                "es2015",
                                "react",
                                "stage-3"
                            ]
                        }
                    }]
            }]
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