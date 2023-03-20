import '@testing-library/jest-native/extend-expect';
import 'jest-plugin-context/setup';
import 'givens/setup';

jest.mock('@dooboo-ui/theme/useColorScheme', () =>
  jest.fn().mockReturnValue('light'),
);

jest.mock('expo-font');
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

process.on('unhandledRejection', (err) => {
  // eslint-disable-next-line jest/no-jasmine-globals
  fail(err);
});
