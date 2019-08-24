const webpack = require('webpack');
const webpackDev = require('webpack-dev-middleware');
const webpackHot = require('webpack-hot-middleware');
const ora = require('ora');
const open = require('open');
const webpackConfig = require('../../build/webpack.config');

const port = process.env.port || 8080;

const spinner = ora('Compiling for development...');
spinner.start();

const compiler = webpack(webpackConfig);
compiler.apply(new webpack.ProgressPlugin());

const devMiddleware = webpackDev(compiler, {
  logLevel: 'warn',
  publicPath: '/'
});

const hotMiddleware = webpackHot(compiler, {
  log: false,
  heartbeat: 2000
});

devMiddleware.waitUntilValid(() => {
  spinner.stop();
  const url = `http://localhost:${port}`;
  open(url);
});

module.exports = {
  devMiddleware,
  hotMiddleware
};
