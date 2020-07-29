module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx,mjs}',
    '!**/index.js',
    '!<rootDir>/src/index.jsx',
    '!<rootDir>/src/polyfills.js',
    '!<rootDir>/src/routes/**'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '^@src[/](.+)': '<rootDir>/src/$1',
    '^@shared[/](.+)': '<rootDir>/src/components/shared/$1',
    '^node_modules[/](.+)': '<rootDir>/node_modules/$1'
  },
  setupFiles: ['jest-localstorage-mock', 'jest-prop-type-error'],
  setupFilesAfterEnv: ['<rootDir>/jest/test-setup.js'],
  testEnvironment: 'jest-environment-jsdom-global',
  testMatch: ['<rootDir>/src/**/*(*.)@(spec|test).[jt]s?(x)'],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx|mjs)$': 'babel-jest',
    '^.+\\.s?css$': '<rootDir>/jest/style-transform.js',
    '^.+\\.(png|jpg|jpeg|git|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/file-transform.js'
  },
  moduleDirectories: ['node_modules']
};
