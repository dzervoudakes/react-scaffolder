/**
 * @fileoverview Webpack production configuration.
 * - Default config: https://github.com/dzervoudakes/dztools/blob/master/packages/bundlers/webpack-config-react/config/webpack.prod.js
 * - Notes on customizing/extending: https://github.com/dzervoudakes/dztools/tree/master/packages/bundlers/webpack-config-react
 */
const { webpackProdConfig } = require('@dztools/webpack-config-react');

module.exports = webpackProdConfig(__dirname);
