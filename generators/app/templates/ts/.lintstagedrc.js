module.exports = {
  '*.{ts,tsx,js,jsx}': ['eslint --fix', 'git add'],
  '*.scss': ['stylelint --fix', 'git add']
};
