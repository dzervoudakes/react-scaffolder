/**
 * @fileoverview Configuration file for Webpack development and production builds.
 */
import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import baseConfig from './webpack.base';

const getAddons = (addonsArgs): webpack.Configuration[] => {
  const addons = Array.isArray(addonsArgs) ? addonsArgs : [addonsArgs];

  return addons.filter(Boolean).map(name => require(`./addons/webpack.${name}.ts`));
};

const buildConfig = ((): webpack.Configuration => {
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

  const envConfig = require(`./webpack.${env}.ts`);
  return webpackMerge(baseConfig, envConfig, ...getAddons(addons));
})();

export default buildConfig;
