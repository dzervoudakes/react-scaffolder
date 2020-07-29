/**
 * Webpack production configuration.
 * @packageDocumentation
 */
import path from 'path';
import webpack from 'webpack';
import { CleanWebpackPlugin as CleanPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const BUILD_DIR = path.resolve(__dirname, '..', 'dist');

const plugins = [
  new webpack.EnvironmentPlugin({
    NODE_ENV: 'production'
  }),
  new CleanPlugin(),
  new MiniCssExtractPlugin({
    filename: path.join('css', '[name].[chunkhash].min.css')
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
    publicPath: '/',
    filename: path.join('js', '[name].[chunkhash].min.js'),
    sourceMapFilename: path.join('js', '[name].[chunkhash].min.map'),
    chunkFilename: path.join('js', '[name].[chunkhash].min.js')
  }
};
