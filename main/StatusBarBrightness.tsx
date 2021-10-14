import React, {FC} from 'react';
import {useTheme} from './theme';

import {StatusBar} from 'react-native';
import type {StatusBarStyle} from 'react-native';

export const StatusBarBrightness: FC = () => {
  const {themeType} = useTheme();

  const statusColor: StatusBarStyle =
    themeType === 'light' ? 'dark-content' : 'light-content';

  return <StatusBar barStyle={statusColor} />;
};
