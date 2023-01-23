import type {FC} from 'react';
import React from 'react';

import {StatusBar} from 'react-native';
import type {StatusBarStyle} from 'react-native';
import {useTheme} from '@dooboo-ui/theme';

export const StatusBarBrightness: FC = () => {
  const {themeType} = useTheme();

  const statusColor: StatusBarStyle =
    themeType === 'light' ? 'dark-content' : 'light-content';

  return <StatusBar barStyle={statusColor} />;
};
