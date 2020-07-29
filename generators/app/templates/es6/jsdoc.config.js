/**
 * @fileoverview Defines configuration for documentation output.
 */
module.exports = {
  opts: {
    destination: './docs',
    encoding: 'utf8',
    template: './node_modules/docdash'
  },
  source: {
    include: ['./README.md', './build', './jest', './scripts', './src']
  }
};
