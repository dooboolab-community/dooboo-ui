import 'react-native';

import React from 'react';
import type {ReactElement} from 'react';
import {ThemeProvider} from '@dooboo-ui/theme';
import type {ThemeType} from '@dooboo-ui/theme';

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
  children: ReactElement,
  themeType?: ThemeType,
): ReactElement => {
  return <ThemeProvider initialThemeType={themeType}>{children}</ThemeProvider>;
};
