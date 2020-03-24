/**
 * @fileoverview Configuration file for Webpack development and production builds.
 */
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const envs = {
  development: 'dev',
  production: 'prod'
};

const env = envs[process.env.NODE_ENV || 'development'];

if (env === 'dev') {
  Object.keys(baseConfig.entry).forEach((name) => {
    baseConfig.entry[name] = ['./build/dev-client'].concat(baseConfig.entry[name]);
  });
}

const envConfig = require(`./webpack.${env}.js`);

module.exports = webpackMerge(baseConfig, envConfig);
