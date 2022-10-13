import {Checkbox, LoadingIndicator} from 'dooboo-ui';
import {ThemeProvider, useTheme} from '@dooboo-ui/theme';

import type {FC} from 'react';
import React from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
import {View} from 'react-native';
import {useFonts} from 'expo-font';

const Component: FC = () => {
  const {theme} = useTheme();

  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../assets/doobooui.ttf'),
  });

  if (!fontsLoaded) {
    return <LoadingIndicator />;
  }

  return (
    <View
      style={{
        backgroundColor: theme.bg.default,
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 5,
      }}
    >
      <Checkbox disabled />
    </View>
  );
};

export const Disabled: FC<{themeType: ThemeType}> = ({themeType}) => {
  return (
    <ThemeProvider initialThemeType={themeType}>
      <Component />
    </ThemeProvider>
  );
};
