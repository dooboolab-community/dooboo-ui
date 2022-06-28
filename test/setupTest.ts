import '@testing-library/jest-native/extend-expect';
import 'jest-plugin-context/setup';
import 'givens/setup';

jest.mock('@dooboo-ui/theme/useColorScheme', () => jest.fn());
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

process.on('unhandledRejection', (err) => {
  fail(err);
});
