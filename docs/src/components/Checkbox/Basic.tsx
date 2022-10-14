import {Checkbox, LoadingIndicator} from 'dooboo-ui';
import type {FC} from 'react';
import React, {useState} from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
import {ThemeProvider, useTheme} from '@dooboo-ui/theme';

import {View} from 'react-native';
import {useFonts} from 'expo-font';

const Component: FC = () => {
  const [checked, setChecked] = useState<boolean>(false);
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
      <Checkbox checked={checked} onPress={() => setChecked(!checked)} />
    </View>
  );
};

export const Basic: FC<{themeType: ThemeType}> = ({themeType}) => {
  return (
    <ThemeProvider initialThemeType={themeType}>
      <Component />
    </ThemeProvider>
  );
};
