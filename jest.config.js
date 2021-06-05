const expoPreset = require('jest-expo/jest-preset');

process.env.TZ = 'Asia/Seoul';

module.exports = {
  clearMocks: true,
  preset: 'jest-expo',
  transform: {
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  transformIgnorePatterns: [
    // eslint-disable-next-line max-len
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)',
  ],
  modulePaths: ['<rootDir>'],
  moduleDirectories: ['node_modules'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsconfig: {
        jsx: 'react',
      },
      diagnostics: false,
    },
  },
  cacheDirectory: '.jest/cache',
  setupFiles: [...expoPreset.setupFiles],
  setupFilesAfterEnv: ['./test/setupTest.ts'],
  coveragePathIgnorePatterns: [
    '.example.',
    '__assets__',
    './main/theme',
    'stories',
    '/node_modules/',
  ],
};
