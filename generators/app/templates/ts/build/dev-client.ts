/**
 * Wires up the Webpack hot middleware client for hot module loading/replacement.
 * @packageDocumentation
 */
import devClient from 'webpack-hot-middleware/client';

devClient.setOptionsAndConnect({
  path: '/__webpack_hmr',
  noInfo: true,
  reload: true,
  timeout: 20000
});
