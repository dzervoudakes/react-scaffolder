/**
 * @fileoverview Defines common configuration for use within Webpack builds.
 */
import path from 'path';

interface ProcessVars {
  BABEL_ENV: string;
  NODE_ENV: string;
}

const resolve = (dir): string => path.resolve(__dirname, '..', dir);

const setProcessVars = (env): ProcessVars => ({
  BABEL_ENV: env,
  NODE_ENV: env
});

export default {
  directories: {
    app: resolve('src'),
    build: resolve('dist'),
    public: resolve('public'),
    root: resolve('')
  },
  env: {
    development: setProcessVars('development'),
    production: setProcessVars('production')
  },
  isDevelopment: process.argv.indexOf('--env=dev') !== -1
};
