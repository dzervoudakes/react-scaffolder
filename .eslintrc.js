const OFF = 0;
const ERROR = 2;

module.exports = {
  extends: ['@dztools/eslint-config-base'],
  overrides: [
    {
      files: ['generators/app/index.js'],
      rules: {
        'no-underscore-dangle': OFF
      }
    },
    {
      files: ['scripts/*.js'],
      rules: {
        'no-console': OFF,
        'jest/no-jest-import': OFF
      }
    }
  ],
  rules: {
    'import/no-extraneous-dependencies': [
      ERROR,
      {
        devDependencies: ['scripts/**', '**/*.test.*']
      }
    ],

    // test assertions made with via 'yeoman-assert' instead of 'expect'
    'jest/expect-expect': OFF
  }
};
