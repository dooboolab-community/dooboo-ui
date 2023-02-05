import {Checkbox, DoobooProvider, LoadingIndicator, useDooboo} from 'dooboo-ui';
import React, {useState} from 'react';

import type {ReactElement} from 'react';
import {View} from 'react-native';
import {useFonts} from 'expo-font';

function Component(): ReactElement {
  const [checked, setChecked] = useState<boolean>(false);
  const {theme} = useDooboo();

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
      <Checkbox checked={checked} onPress={() => setChecked(!checked)} />
    </View>
  );
}

export function Basic({themeType}): ReactElement {
  return (
    <DoobooProvider themeConfig={{initialThemeType: themeType}}>
      <Component />
    </DoobooProvider>
  );
}
