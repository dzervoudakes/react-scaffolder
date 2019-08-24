/**
 * @fileoverview Webpack development configuration.
 */
const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
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
    new HtmlPlugin({
      favicon: `${PUBLIC_DIR}/favicon.ico`,
      filename: 'index.html',
      template: `${PUBLIC_DIR}/index.html`,
      title: config.title
    }),
    new webpack.HotModuleReplacementPlugin(),
    new WatchMissingNodeModulesPlugin(path.resolve(__dirname, '../node_modules')),
    new FriendlyErrorsPlugin()
  ],
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
