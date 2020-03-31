/**
 * @fileoverview Webpack development configuration.
 */
const path = require('path');
const webpack = require('webpack');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const HardSourcePlugin = require('hard-source-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const config = require('../config');

const {
  directories: { public: PUBLIC_DIR }
} = config;

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.EnvironmentPlugin(config.env.development),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsPlugin(),
    new HardSourcePlugin(),
    new WatchMissingNodeModulesPlugin(path.resolve(__dirname, '../node_modules'))
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  optimization: {
    noEmitOnErrors: true,
    namedModules: true,
    runtimeChunk: true
  },
  output: {
    path: PUBLIC_DIR,
    filename: 'js/[name].js'
  }
};
