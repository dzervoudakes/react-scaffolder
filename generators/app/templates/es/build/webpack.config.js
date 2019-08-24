/**
 * @fileoverview Configuration file for Webpack development and production builds.
 */
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const getAddons = addonsArgs => {
  const addons = Array.isArray(addonsArgs) ? addonsArgs : [addonsArgs];

  return addons.filter(Boolean).map(name => require(`./addons/webpack.${name}.js`));
};

module.exports = (() => {
  const argv = process.argv.slice(2);

  let env = argv.filter(item => item.includes('--env='))[0];
  env = env.substring(env.indexOf('=') + 1, env.length);

  const addons = argv
    .filter(item => item.includes('--addon='))
    .map(item => item.substring(item.indexOf('=') + 1, item.length));

  if (env === 'dev') {
    Object.keys(baseConfig.entry).forEach(name => {
      baseConfig.entry[name] = ['./build/dev-client'].concat(baseConfig.entry[name]);
    });
  }

  const envConfig = require(`./webpack.${env}.js`);
  return webpackMerge(baseConfig, envConfig, ...getAddons(addons));
})();
