/**
 * @fileoverview Build script that compiles the application for production.
 */
const webpack = require('webpack');
const chalk = require('chalk');
const ora = require('ora');
const webpackConfig = require('../webpack.config');

process.on('unhandledRejection', (err) => {
  throw err;
});

const spinner = ora('Building for production...');
spinner.start();

process.env.BABEL_ENV = 'production';

webpack(webpackConfig, (err, stats) => {
  spinner.stop();

  if (err) {
    throw err;
  }

  process.stdout.write(
    `${stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    })}\n\n`
  );

  if (stats.hasErrors()) {
    console.log(chalk.red('Build failed with errors.\n'));
    process.exit(1);
  }

  console.log(
    chalk.cyan(
      'The application has been bundled successfully and is ready for distribution.\n'
    )
  );
});
