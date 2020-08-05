module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx,js,jsx,mjs}',
    '!<rootDir>/src/**/*.d.ts',
    '!<rootDir>/src/components/**/index.ts'
  ],
  coveragePathIgnorePatterns: ['<rootDir>/src/index.tsx', '<rootDir>/src/polyfills.ts'],
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
  setupFiles: ['jest-localstorage-mock'],
  setupFilesAfterEnv: ['<rootDir>/jest/test-setup.ts'],
  testEnvironment: 'jest-environment-jsdom-global',
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*(*.)@(spec|test).{js,jsx,ts,tsx}'
  ],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(ts|tsx|js|jsx|mjs)$': 'ts-jest',
    '^.+\\.s?css$': '<rootDir>/jest/style-transform.ts',
    '^.+\\.(png|jpg|jpeg|git|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/file-transform.ts'
  },
  moduleDirectories: ['node_modules']
};
