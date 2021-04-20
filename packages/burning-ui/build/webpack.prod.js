'use strict'
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const BasicWebpackConfig = require('./webpack.config.base');
const { merge } = require('webpack-merge');

module.exports = merge(BasicWebpackConfig, {
    mode: 'production',
    entry: {
        'burning-ui': './src/components/index.ts'
    },
    output: {
        path: path.resolve(__dirname, '../lib'),
        publicPath: '/lib/',
        library: 'burning-ui',
        libraryTarget: 'umd',
        umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
    },
    externals: {
        vue: {
          root: 'Vue',
          commonjs: 'vue',
          commonjs2: 'vue',
          amd: 'vue'
        }
    },
    optimization: {
        splitChunks: {
          cacheGroups: {
            commons: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendor',
              chunks: 'all'
            }
          }
        }
    },
    plugins: [
        new VueLoaderPlugin()
    ]
});