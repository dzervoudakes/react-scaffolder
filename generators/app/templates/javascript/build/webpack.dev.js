/**
 * @fileoverview Webpack development configuration.
 * - Default config: https://github.com/dzervoudakes/dztools/blob/master/packages/bundlers/webpack-config-react/config/webpack.dev.js
 * - Notes on customizing/extending: https://github.com/dzervoudakes/dztools/tree/master/packages/bundlers/webpack-config-react#readme
 */
const { webpackDevConfig } = require('@dztools/webpack-config-react');

module.exports = webpackDevConfig(__dirname);
