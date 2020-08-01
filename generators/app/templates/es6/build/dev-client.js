/**
 * @fileoverview Wire up the Webpack hot middleware client for hot module loading/replacement.
 */
const devClient = require('webpack-hot-middleware/client');

devClient.setOptionsAndConnect({
  path: '/__webpack_hmr',
  noInfo: true,
  reload: true,
  timeout: 20000
});
