/**
 * Appends the BundleAnalyzerPlugin to the list of Webpack plugins at compile time.
 * @packageDocumentation
 */
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

module.exports = {
  plugins: [new BundleAnalyzerPlugin()]
};
