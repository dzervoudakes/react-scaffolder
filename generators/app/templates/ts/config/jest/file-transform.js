/**
 * @fileoverview Transforms file imports into filenames for Jest.
 */
const path = require('path');

module.exports = {
  process(_, filename) {
    return `module.exports = ${JSON.stringify(path.basename(filename))};`;
  }
};
