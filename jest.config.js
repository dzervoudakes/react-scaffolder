module.exports = {
  testMatch: ['<rootDir>/test/*(*.)@(spec|test).[jt]s?(x)'],
  moduleDirectories: ['node_modules'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
