/**
 * Webpack development configuration.
 * @packageDocumentation
 */
import path from 'path';
import webpack from 'webpack';
import HtmlPlugin from 'html-webpack-plugin';
import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin';
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
    new HtmlPlugin({
      favicon: `${PUBLIC_DIR}/favicon.ico`,
      filename: 'index.html',
      template: `${PUBLIC_DIR}/index.html`
    }),
    new webpack.HotModuleReplacementPlugin(),
    new WatchMissingNodeModulesPlugin(path.resolve(__dirname, '../node_modules')),
    new FriendlyErrorsPlugin()
  ],
  optimization: {
    noEmitOnErrors: true,
    namedModules: true,
    runtimeChunk: true
  },
  output: {
    path: PUBLIC_DIR,
    filename: 'js/[name].js'
  }
};
