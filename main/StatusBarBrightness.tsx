import {DoobooTheme, useTheme, withTheme} from './theme';

import type {FC} from 'react';
import React from 'react';
import {StatusBar} from 'react-native';
import type {StatusBarStyle} from 'react-native';

type Props = {};

/**
 * This component should be rendered inside `ThemeProvider` provided by `dooboo-ui`.
 */

const Component: FC<
  Props & {theme?: DoobooTheme; themeType?: 'light' | 'dark'}
> = ({themeType}) => {
  const {themeType: currentThemeType} = useTheme();

  const statusColor: StatusBarStyle =
    (themeType || currentThemeType) === 'light'
      ? 'dark-content'
      : 'light-content';

  return <StatusBar barStyle={statusColor} />;
};

Component.defaultProps = {themeType: 'light'};

export const StatusBarBrightness = withTheme(Component);
