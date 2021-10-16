import 'react-native';

import React, {ReactElement} from 'react';

import {ThemeProvider} from '@dooboo-ui/theme';

export const createTestProps = (
  obj?: Record<string, unknown>,
): Record<string, unknown> | unknown | any => ({
  navigation: {
    navigate: jest.fn(),
    goBack: jest.fn(),
  },
  ...obj,
});

export const createComponent = (children?: ReactElement): ReactElement => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
