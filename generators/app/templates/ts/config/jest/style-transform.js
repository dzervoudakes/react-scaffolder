/**
 * @fileoverview Transforms style imports into empty objects for Jest.
 */
module.exports = {
  process() {
    return 'module.exports = {}';
  },

  getCacheKey() {
    return 'cssTransform';
  }
};
