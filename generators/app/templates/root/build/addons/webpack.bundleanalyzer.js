/**
 * @fileoverview Appends the BundleAnalyzerPlugin to the list of Webpack plugins at compile time.
 */
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  plugins: [new BundleAnalyzerPlugin()]
};
