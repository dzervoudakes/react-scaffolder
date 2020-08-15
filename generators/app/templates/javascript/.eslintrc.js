// Default config: https://github.com/dzervoudakes/dztools/blob/master/packages/formatting/eslint-config-react/index.js
const OFF = 0;
const ERROR = 2;

module.exports = {
  extends: ['@dztools/eslint-config-react'],
  overrides: [
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
        devDependencies: [
          'webpack.config.js',
          'build/**',
          'jest/**',
          'scripts/**',
          '**/*.test.*',
          '**/*.spec.*'
        ]
      }
    ]
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.js'
      }
    }
  }
};
