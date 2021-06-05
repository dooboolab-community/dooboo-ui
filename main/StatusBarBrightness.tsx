import React, {FC} from 'react';
import {useTheme, withTheme} from './theme';

import {StatusBar} from 'react-native';
import type {StatusBarStyle} from 'react-native';

/**
 * This component should be rendered inside `ThemeProvider` provided by `dooboo-ui`.
 */

const Component: FC = () => {
  const {themeType} = useTheme();

  const statusColor: StatusBarStyle =
    themeType === 'light' ? 'dark-content' : 'light-content';

  return <StatusBar barStyle={statusColor} />;
};

export const StatusBarBrightness = withTheme(Component);
