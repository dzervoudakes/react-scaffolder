/**
 * @fileoverview Base Webpack configuration, shared between development and production builds.
 * - Default config: https://github.com/dzervoudakes/dztools/blob/main/packages/bundling/webpack-config-react/config/webpack.base.js
 * - Notes on customizing/extending: https://github.com/dzervoudakes/dztools/tree/main/packages/bundling/webpack-config-react#readme
 */
const { webpackBaseConfig } = require('@dztools/webpack-config-react');

module.exports = webpackBaseConfig;
