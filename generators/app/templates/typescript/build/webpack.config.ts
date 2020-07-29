/**
 * Configuration file for Webpack development and production builds.
 * @packageDocumentation
 */
import { merge } from 'webpack-merge';
import baseConfig from './webpack.base';

const envs = {
  development: 'dev',
  production: 'prod'
};

const env = envs[process.env.NODE_ENV || 'development'];

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

export default merge(baseConfig, envConfig);
