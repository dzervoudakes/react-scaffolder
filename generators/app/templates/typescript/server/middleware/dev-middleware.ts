import webpack from 'webpack';
import webpackDev from 'webpack-dev-middleware';
import webpackHot from 'webpack-hot-middleware';
import ora from 'ora';
import open from 'open';
import webpackConfig from '../../build/webpack.config';

const port = process.env.port || 8080;

const spinner = ora('Compiling for development...');
spinner.start();

const compiler = webpack(webpackConfig);

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
  open(`http://localhost:${port}`);
});

export { devMiddleware, hotMiddleware };
