import '@testing-library/jest-native/extend-expect';
import 'jest-plugin-context/setup';
import 'givens/setup';

jest.mock('expo-font');
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

process.on('unhandledRejection', (err) => {
  // eslint-disable-next-line jest/no-jasmine-globals
  fail(err);
});

beforeAll(() => {
  // we're using fake timers because we don't want to
  // wait a full second for this test to run.
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});
