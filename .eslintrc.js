const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      files: ['scripts/*.js', 'generators/app/index.js'],
      rules: {
        'no-console': OFF
      }
    },
    {
      files: ['scripts/test.js'],
      rules: {
        'jest/no-jest-import': OFF
      }
    }
  ],
  plugins: ['import', 'prettier'],
  rules: {
    'class-methods-use-this': OFF,
    'comma-dangle': [ERROR, 'never'],
    'comma-spacing': [ERROR, { 'before': false, 'after': true }],
    'consistent-return': OFF,
    'curly': ERROR,
    'eol-last': [ERROR, 'always'],
    'import/extensions': [ERROR, 'always', { js: 'never' }],
    'import/no-extraneous-dependencies': OFF,
    'import/no-dynamic-require': OFF,
    'import/no-unresolved': ERROR,
    'import/order': [ERROR, {
      groups: [
        'builtin',
        'external',
        'internal',
        ['parent', 'sibling'],
        'index'
      ],
      'newlines-between': 'never'
    }],
    'jest/expect-expect': OFF, // assertions via 'yeoman-assert'
    'linebreak-style': OFF,
    'no-console': WARN,
    'no-param-reassign': ERROR,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-undef': ERROR,
    'no-unused-vars': ERROR,
    'no-var': ERROR,
    'prefer-const': ERROR,
    'prefer-template': ERROR,
    'quotes': [ERROR, 'single', { avoidEscape: true }],
    'require-await': ERROR
  }
};
