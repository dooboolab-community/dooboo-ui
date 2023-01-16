import {Checkbox, LoadingIndicator} from 'dooboo-ui';
import React, {useState} from 'react';
import {ThemeProvider, useTheme} from '@dooboo-ui/theme';

import type {FC} from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
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
        backgroundColor: theme.bg.basic,
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 5,
      }}
    >
      <Checkbox
        checked={checked}
        onPress={() => setChecked(!checked)}
        type="primary"
      />
      <View style={{width: 8}} />
      <Checkbox
        checked={checked}
        onPress={() => setChecked(!checked)}
        type="secondary"
      />
      <View style={{width: 8}} />
      <Checkbox
        checked={checked}
        onPress={() => setChecked(!checked)}
        type="success"
      />
      <View style={{width: 8}} />
      <Checkbox
        checked={checked}
        onPress={() => setChecked(!checked)}
        type="warning"
      />
      <View style={{width: 8}} />
      <Checkbox
        checked={checked}
        onPress={() => setChecked(!checked)}
        type="info"
      />
      <View style={{width: 8}} />
      <Checkbox
        checked={checked}
        onPress={() => setChecked(!checked)}
        type="danger"
      />
    </View>
  );
};

export const Solid: FC<{themeType: ThemeType}> = ({themeType}) => {
  return (
    <ThemeProvider initialThemeType={themeType}>
      <Component />
    </ThemeProvider>
  );
};
