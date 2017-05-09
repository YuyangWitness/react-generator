/**
 * Created by xingxiao05 on 17/5/8.
 */
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname + 'dist'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        hot: true,
        inline: true,
        open: true,
        historyApiFallback: true,
        contentBase: path.resolve(__dirname + 'app'),
        compress: true,
        proxy: {
            '/api': {
                target: "http://localhost:3000",
                secure: false
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|gif|jpg|jpeg|bmp)$/i,
                use: ['url-loader?limit=10000']
            },
            {
                test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
                use: ['url-loader?limit=5000']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname + '/app/index.html')
        })
    ]
}