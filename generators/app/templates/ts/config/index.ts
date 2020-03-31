/**
 * Defines common configuration for use within Webpack builds.
 * @packageDocumentation
 */
import path from 'path';

interface ProcessVars {
  NODE_ENV: string;
}

const resolve = (dir: string): string => path.resolve(__dirname, '..', dir);

const setProcessVars = (env: string): ProcessVars => ({
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
  }
};
