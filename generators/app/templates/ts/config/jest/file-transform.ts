/**
 * @fileoverview Transforms file imports into filenames for Jest.
 */
import path from 'path';

module.exports = {
  process(_, filename): string {
    return `module.exports = ${JSON.stringify(path.basename(filename))};`;
  }
};
