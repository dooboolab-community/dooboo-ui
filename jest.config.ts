import type {Config} from '@jest/types';
import expoPreset from 'jest-expo/jest-preset';

process.env.TZ = 'Asia/Seoul';

export default async (): Promise<Config.InitialOptions> => {
  return {
    automock: false,
    clearMocks: true,
    preset: 'jest-expo',
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    modulePaths: ['<rootDir>'],
    moduleDirectories: ['node_modules'],
    testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
    moduleFileExtensions: ['js', 'ts', 'tsx', 'svg', 'png', 'json'],
    globals: {
      'ts-jest': {tsconfig: 'tsconfig.spec.json'},
    },
    modulePathIgnorePatterns: [
      '<rootDir>/lib/',
      '<rootDir>/node_modules/',
      '<rootDir>/.history/',
    ],
    moduleNameMapper: {
      '\\.svg': '<rootDir>/__mocks__/svgMock.js',
      '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'babel-jest',
    },
    setupFiles: [
      ...expoPreset.setupFiles,
      '<rootDir>/test/jestSetup.ts',
      './node_modules/react-native-gesture-handler/jestSetup.js',
    ],
    cacheDirectory: '.jest/cache',
    setupFilesAfterEnv: ['./test/setupTest.ts'],
    haste: {
      defaultPlatform: 'ios',
      platforms: ['android', 'ios', 'native'],
    },
    transformIgnorePatterns: [
      // eslint-disable-next-line max-len
      'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|dooboo-ui|@dooboo-ui)',
    ],
    coveragePathIgnorePatterns: [
      '.example.',
      '__assets__',
      './main/theme',
      'stories',
      '/node_modules/',
    ],
  };
};
