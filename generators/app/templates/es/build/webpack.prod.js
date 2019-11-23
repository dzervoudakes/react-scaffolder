/**
 * @fileoverview Webpack production configuration.
 */
const webpack = require('webpack');
const { CleanWebpackPlugin: CleanPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const config = require('../config');

const {
  directories: { build: BUILD_DIR, public: PUBLIC_DIR, root: ROOT_DIR }
} = config;

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  performance: {
    hints: false
  },
  plugins: [
    new webpack.EnvironmentPlugin(config.env.production),
    new CleanPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash].min.css'
    }),
    new OptimizeCssAssetsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CopyPlugin([
      { from: `${ROOT_DIR}/public`, to: `${BUILD_DIR}/public`, ignore: ['.*'] }
    ]),
    new HtmlPlugin({
      favicon: `${PUBLIC_DIR}/favicon.ico`,
      filename: 'index.html',
      template: `${PUBLIC_DIR}/index.html`,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        extractComments: true,
        parallel: true,
        sourceMap: true
      })
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    },
    runtimeChunk: {
      name: 'manifest'
    }
  },
  output: {
    path: `${BUILD_DIR}/public`,
    filename: 'js/[name].[chunkhash].min.js',
    sourceMapFilename: 'js/[name].[chunkhash].min.map',
    chunkFilename: 'js/[name].[chunkhash].min.js'
  }
};
