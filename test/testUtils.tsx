import 'react-native';

import React from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
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

export const createComponent = (
  children: JSX.Element,
  themeType?: ThemeType,
): JSX.Element => {
  return <ThemeProvider initialThemeType={themeType}>{children}</ThemeProvider>;
};
