/**
 * Transforms file imports into filenames for Jest.
 * @packageDocumentation
 */
import path from 'path';

export default {
  process(_: undefined, filename: string): string {
    return `module.exports = ${JSON.stringify(path.basename(filename))};`;
  }
};
