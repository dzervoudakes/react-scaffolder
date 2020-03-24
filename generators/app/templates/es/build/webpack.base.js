/**
 * @fileoverview Base Webpack configuration, shared between development and production builds.
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('../config');

const {
  directories: { app: APP_DIR }
} = config;

module.exports = {
  entry: {
    app: [`${APP_DIR}/polyfills.js`, `${APP_DIR}/index.jsx`]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        include: APP_DIR,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.s?css$/,
        include: APP_DIR,
        use: [
          config.isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.mjs', '.json', '.scss', '.css'],
    alias: {
      '@src': APP_DIR,
      '@shared': `${APP_DIR}/components/shared`,
      'react-dom': '@hot-loader/react-dom'
    }
  }
};
