/**
 * @fileoverview Base Webpack configuration, shared between development and production builds.
 * - Default config: https://github.com/dzervoudakes/dztools/blob/master/packages/bundlers/webpack-config-react/config/webpack.base.js
 * - Notes on customizing/extending: https://github.com/dzervoudakes/dztools/tree/master/packages/bundlers/webpack-config-react#readme
 */
const { webpackBaseConfig } = require('@dztools/webpack-config-react');

module.exports = webpackBaseConfig(__dirname);
