import {cleanup} from '@testing-library/react-native';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

// Cleanup after each case.
afterEach(cleanup);

// Use fake system time.
// Required for consistent snapshot testing.
/**
 * TODO: `jest-expo` version 40 depends on `jest` version 25.
 * `jest.setSystemTime` function is added in `jest` version 26.
 * When `jest-expo` updates its dependency to `jest@26`,
 * change `Date.now = jest.fn()` to a `jest.setSystemTime` call.
 */
jest.useFakeTimers('modern');
Date.now = jest.fn(() => new Date('2021-03-19T04:30:54.591Z').valueOf());

jest.setTimeout(30000);

process.on('unhandledRejection', (err) => {
  fail(err);
});
