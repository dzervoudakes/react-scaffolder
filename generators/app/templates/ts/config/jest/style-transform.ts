/**
 * @fileoverview Transforms style imports into empty objects for Jest.
 */
module.exports = {
  process(): string {
    return 'module.exports = {}';
  },

  getCacheKey(): string {
    return 'cssTransform';
  }
};
