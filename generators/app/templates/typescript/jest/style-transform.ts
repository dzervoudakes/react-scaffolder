/**
 * Transform style imports into empty objects for Jest.
 * @packageDocumentation
 */
export default {
  process(): string {
    return 'module.exports = {}';
  },

  getCacheKey(): string {
    return 'cssTransform';
  }
};
