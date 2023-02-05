import {Checkbox, DoobooProvider, LoadingIndicator, useDooboo} from 'dooboo-ui';

import type {ReactElement} from 'react';
import {View} from 'react-native';
import {useFonts} from 'expo-font';
import {useState} from 'react';

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
}

export function Solid({themeType}): ReactElement {
  return (
    <DoobooProvider themeConfig={{initialThemeType: themeType}}>
      <Component />
    </DoobooProvider>
  );
}
