module.exports = {
  '*.{js,jsx}': ['eslint --fix', 'git add'],
  '*.scss': ['stylelint --fix', 'git add']
};
