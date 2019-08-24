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
    'airbnb',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react'
  ],
  overrides: [
    {
      files: ['index.js', 'scripts/*.js'],
      rules: {
        'no-console': OFF
      }
    },
    {
      files: ['scripts/test.js'],
      rules: {
        'jest/no-jest-import': OFF
      }
    },
    {
      files: ['build/webpack.config.js'],
      rules: {
        'global-require': OFF
      }
    }
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react', 'import', 'react-hooks', 'prettier'],
  rules: {
    'arrow-parens': [ERROR, 'as-needed'],
    'class-methods-use-this': OFF,
    'comma-dangle': [ERROR, 'never'],
    'comma-spacing': [ERROR, { 'before': false, 'after': true }],
    'consistent-return': OFF,
    'curly': ERROR,
    'eol-last': [ERROR, 'always'],
    'import/dynamic-import-chunkname': ERROR,
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
    'no-undef': ERROR,
    'no-unused-vars': ERROR,
    'prefer-const': ERROR,
    'prefer-template': ERROR,
    'react/forbid-prop-types': ERROR,
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': WARN,
    'react/jsx-closing-bracket-location': [ERROR, 'line-aligned'],
    'react/jsx-curly-brace-presence': [ERROR, 'never'],
    'react/jsx-curly-spacing': [ERROR, { when: 'never', children: true }],
    'react/jsx-filename-extension': ERROR,
    'react/jsx-props-no-spreading': OFF,
    'react/no-array-index-key': ERROR,
    'react/no-unused-prop-types': ERROR,
    'react/no-unused-state': ERROR,
    'react/prefer-stateless-function': ERROR,
    'react/sort-comp': [ERROR, {
      order: [
        'props',
        'static-methods',
        'lifecycle',
        'everything-else',
        'handlers',
        'rendering',
      ],
      groups: {
        props: [
          'propTypes',
          'defaultProps',
        ],
        lifecycle: [
          'statics',
          'constructor',
          'getDerivedStateFromProps',
          'componentWillMount',
          'UNSAFE_componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'UNSAFE_componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'UNSAFE_componentWillUpdate',
          'getSnapshotBeforeUpdate',
          'componentDidUpdate',
          'componentDidCatch',
          'componentWillUnmount',
        ],
        handlers: [
          '/^on.+$/',
          '/^handle.+$/',
        ],
        rendering: [
          '/^render.+$/',
          'render',
        ],
      }
    }],
    'react/static-property-placement': OFF,
    'require-await': ERROR
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.js'
      }
    },
    react: {
      version: 'detect'
    }
  }
};
