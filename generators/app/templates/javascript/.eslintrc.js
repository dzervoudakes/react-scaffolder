// Default config: https://github.com/dzervoudakes/dztools/blob/main/packages/formatting/eslint-config-react/index.js
const OFF = 0;
const ERROR = 2;

module.exports = {
  extends: ['@dztools/eslint-config-react'],
  overrides: [
    {
      files: ['scripts/*.js'],
      rules: {
        'no-console': OFF,
        'import/dynamic-import-chunkname': OFF,
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
          'scripts/**',
          '**/*.test.*',
          '**/*.spec.*'
        ]
      }
    ],
    // jsx transform is enabled in this application: no need to enforce 'react-in-jsx-scope'
    'react/react-in-jsx-scope': OFF
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.js'
      }
    }
  }
};
