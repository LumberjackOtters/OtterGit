
// module.exports = {
//   /**
//    * This is the main entry point for your application, it's the first file
//    * that runs in the main process.
//    */
//   entry: './src/main.js',
//   // Put your normal webpack config below here
//   module: {
//     rules: require('./webpack.rules'),
//     // plugins: [
//     // // make sure to include the plugin!
//     //   new VueLoaderPlugin()
//     // ]
//   },
// };


'use strict';

const webpack              = require('webpack');
const merge                = require('webpack-merge');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const helpers              = require('./helpers');
const commonConfig         = require('./webpack.config.common');
const environment          = require('./env/dev.env');

const webpackConfig = merge(commonConfig, {
    mode: 'development',
    entry: {
        polyfill: '@babel/polyfill',
        main: helpers.root('src', 'main'),
    },

    // devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.EnvironmentPlugin(environment),
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsPlugin()
    ],
    devServer: {
        compress: true,
        historyApiFallback: true,
        hot: true,
        open: true,
        overlay: true,
        port: 8000,
        stats: {
            normal: true
        }
    }
});

module.exports = webpackConfig;