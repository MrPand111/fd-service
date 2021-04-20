const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const BasicWebpackConfig = require('./webpack.config.base');
const { merge } = require('webpack-merge');

module.exports = merge(BasicWebpackConfig, {
    mode: 'development',
    entry: path.resolve(__dirname, '../src/index.ts'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'index.js'
    },
    devServer: {
        hot: true,
        historyApiFallback: true,
        noInfo: true
    },
    devtool: 'inline-source-map',
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ]
});