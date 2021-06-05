import React, {FC} from 'react';
import {ThemeType, useTheme, withTheme} from './theme';

import {StatusBar} from 'react-native';
import type {StatusBarStyle} from 'react-native';

type Props = {
  themeType?: ThemeType;
};

const Component: FC<Props> = ({themeType}) => {
  const {themeType: currentThemeType} = useTheme();

  const statusColor: StatusBarStyle =
    (themeType || currentThemeType) === 'light'
      ? 'dark-content'
      : 'light-content';

  return <StatusBar barStyle={statusColor} />;
};

export const StatusBarBrightness = withTheme(Component);
