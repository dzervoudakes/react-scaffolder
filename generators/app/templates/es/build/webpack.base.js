/**
 * @fileoverview Base Webpack configuration, shared between development and production builds.
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const config = require('../config');

const {
  directories: { app: APP_DIR, public: PUBLIC_DIR }
} = config;

const defineStyleRule = (options = {}) => [
  process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
  { loader: 'css-loader', options },
  'postcss-loader',
  'sass-loader'
];

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
        test: /\.(js|jsx|mjs)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.(css|scss)$/,
        exclude: /\.module\.(css|scss)$/,
        use: defineStyleRule()
      },
      {
        test: /\.module\.(css|scss)$/,
        use: defineStyleRule({
          url: false,
          localsConvention: 'camelCase',
          importLoaders: 2,
          modules: {
            localIdentName: '[name]__[local]--[hash:base64:5]'
          }
        })
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
  plugins: [
    new CaseSensitivePathsPlugin(),
    new HtmlPlugin({
      favicon: `${PUBLIC_DIR}/favicon.ico`,
      filename: 'index.html',
      template: `${PUBLIC_DIR}/index.html`,
      minify: process.env.NODE_ENV === 'production' && {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.mjs', '.json', '.scss', '.css'],
    alias: {
      '@src': APP_DIR,
      '@shared': `${APP_DIR}/components/shared`
    }
  }
};
