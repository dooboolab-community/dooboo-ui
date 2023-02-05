import {Checkbox, DoobooProvider, LoadingIndicator, useDooboo} from 'dooboo-ui';

import type {ReactElement} from 'react';
import {View} from 'react-native';
import {useFonts} from 'expo-font';

function Component(): ReactElement {
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
      <Checkbox disabled />
    </View>
  );
}

export function Disabled({themeType}): ReactElement {
  return (
    <DoobooProvider themeConfig={{initialThemeType: themeType}}>
      <Component />
    </DoobooProvider>
  );
}
