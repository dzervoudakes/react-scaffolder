const OFF = 0;
const ERROR = 2;

module.exports = {
  extends: ['@dztools/eslint-config-react-typescript'],
  overrides: [
    {
      files: ['build/**/*.ts', 'scripts/*.ts', 'server/**/*.ts'],
      rules: {
        '@typescript-eslint/no-var-requires': OFF,
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
        config: 'build/webpack.base.ts'
      }
    }
  }
};
