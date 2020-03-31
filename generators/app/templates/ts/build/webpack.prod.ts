/**
 * Webpack production configuration.
 * @packageDocumentation
 */
import webpack from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import config from '../config';

const {
  directories: { build: BUILD_DIR }
} = config;

const plugins = [
  new webpack.EnvironmentPlugin(config.env.production),
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[chunkhash].min.css'
  }),
  new OptimizeCssAssetsPlugin(),
  new webpack.optimize.AggressiveMergingPlugin()
];

if (process.argv.indexOf('--report') !== -1) {
  plugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  performance: {
    hints: false
  },
  plugins,
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
    path: BUILD_DIR,
    filename: 'js/[name].[chunkhash].min.js',
    sourceMapFilename: 'js/[name].[chunkhash].min.map',
    chunkFilename: 'js/[name].[chunkhash].min.js'
  }
};
