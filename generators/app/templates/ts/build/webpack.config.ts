/**
 * Configuration file for Webpack development and production builds.
 * @packageDocumentation
 */
import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import baseConfig from './webpack.base';

const getAddons = (addonsArgs: string[]): webpack.Configuration[] => {
  const addons = Array.isArray(addonsArgs) ? addonsArgs : [addonsArgs];

  return addons.filter(Boolean).map((name) => require(`./addons/webpack.${name}.ts`));
};

const buildConfig = ((): webpack.Configuration => {
  const argv = process.argv.slice(2);

  const envs = {
    development: 'dev',
    production: 'prod'
  };

  const env = envs[process.env.NODE_ENV || 'development'];

  const addons = argv
    .filter((item) => item.includes('--addon='))
    .map((item) => item.substring(item.indexOf('=') + 1, item.length));

  if (env === 'dev' && baseConfig?.entry) {
    Object.keys(baseConfig.entry).forEach((name) => {
      // extra 'if' check here is a side effect of TypeScript enforcing strict null checks on the 'webpack.Configuration' type
      // https://github.com/Microsoft/TypeScript/issues/10642
      if (baseConfig?.entry) {
        baseConfig.entry[name] = ['./build/dev-client'].concat(baseConfig.entry[name]);
      }
    });
  }

  const envConfig = require(`./webpack.${env}.ts`);
  return webpackMerge(baseConfig, envConfig, ...getAddons(addons));
})();

export default buildConfig;
