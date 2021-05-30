const expoPreset = require('jest-expo/jest-preset');

process.env.TZ = 'Asia/Seoul';

module.exports = {
  clearMocks: true,
  preset: 'react-native',
  transform: {
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  transformIgnorePatterns: ['node_modules/(?!(.*-)?react-(.*-)?native(-.*)?)'],
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
  setupFiles: [...expoPreset.setupFiles, '<rootDir>/test/setupTest.ts'],
  coveragePathIgnorePatterns: [
    '.example.',
    '__assets__',
    '__tests__',
    './main/theme',
    '/node_modules/',
  ],
};
