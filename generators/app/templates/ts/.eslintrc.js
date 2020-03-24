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
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint'
  ],
  overrides: [
    {
      files: ['build/**/*.ts', 'config/**/*.ts', 'scripts/*.ts', 'server/**/*.ts'],
      rules: {
        '@typescript-eslint/no-var-requires': OFF
      }
    },
    {
      files: ['server/index.ts', 'scripts/*.ts'],
      rules: {
        'no-console': OFF
      }
    },
    {
      files: ['scripts/test.ts'],
      rules: {
        'jest/no-jest-import': OFF
      }
    },
    {
      files: ['build/webpack.config.ts'],
      rules: {
        'global-require': OFF
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['@typescript-eslint', 'react', 'import', 'jsx-a11y', 'react-hooks', 'prettier'],
  rules: {
    'class-methods-use-this': OFF,
    'comma-dangle': [ERROR, 'never'],
    'comma-spacing': [ERROR, { 'before': false, 'after': true }],
    'consistent-return': OFF,
    'curly': ERROR,
    'eol-last': [ERROR, 'always'],
    'import/dynamic-import-chunkname': ERROR,
    'import/extensions': [ERROR, 'always', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never'
    }],
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
    'linebreak-style': OFF,
    'no-console': WARN,
    'no-param-reassign': ERROR,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-unused-vars': ERROR,
    'no-var': ERROR,
    'prefer-const': ERROR,
    'prefer-template': ERROR,
    'quotes': [ERROR, 'single', { avoidEscape: true }],
    'react/forbid-prop-types': ERROR,
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': WARN,
    'react/jsx-closing-bracket-location': [ERROR, 'line-aligned'],
    'react/jsx-curly-brace-presence': [ERROR, 'never'],
    'react/jsx-curly-spacing': [ERROR, { when: 'never', children: true }],
    'react/jsx-filename-extension': [ERROR, { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-props-no-spreading': OFF,
    'react/no-array-index-key': ERROR,
    'react/no-unused-prop-types': ERROR,
    'react/no-unused-state': ERROR,
    'react/prefer-stateless-function': ERROR,
    'react/prop-types': OFF,
    'react/require-default-props': OFF,
    'react/sort-comp': ERROR,
    'react/static-property-placement': OFF,
    'require-await': ERROR,
    '@typescript-eslint/explicit-function-return-type': ERROR,
    '@typescript-eslint/no-unused-vars': ERROR
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.ts'
      }
    },
    react: {
      version: 'detect'
    }
  }
};
