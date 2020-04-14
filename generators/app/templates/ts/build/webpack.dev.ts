/**
 * Webpack development configuration.
 * @packageDocumentation
 */
import path from 'path';
import webpack from 'webpack';
import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin';
import HardSourcePlugin from 'hard-source-webpack-plugin';
import WatchMissingNodeModulesPlugin from 'react-dev-utils/WatchMissingNodeModulesPlugin';
import config from '../config';

const {
  directories: { public: PUBLIC_DIR }
} = config;

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.EnvironmentPlugin(config.env.development),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsPlugin(),
    new HardSourcePlugin(),
    new WatchMissingNodeModulesPlugin(path.resolve(__dirname, '..', 'node_modules'))
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  optimization: {
    noEmitOnErrors: true,
    namedModules: true,
    runtimeChunk: true
  },
  output: {
    path: PUBLIC_DIR,
    filename: path.join('js', '[name].js'),
    chunkFilename: path.join('js', '[name].js')
  }
};
