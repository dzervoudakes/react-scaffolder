const OFF = 0;
const ERROR = 2;

module.exports = {
  extends: ['@dztools/eslint-config-react'],
  overrides: [
    {
      files: ['server/index.js', 'scripts/*.js'],
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
