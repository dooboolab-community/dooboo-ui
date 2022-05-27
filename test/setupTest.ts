import '@testing-library/jest-native/extend-expect';
import 'jest-plugin-context/setup';
import 'givens/setup';

import {cleanup} from '@testing-library/react-native';

jest.mock('@dooboo-ui/theme/useColorScheme', () => jest.fn());
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// Cleanup after each case.
afterEach(cleanup);

process.on('unhandledRejection', (err) => {
  fail(err);
});
