import {Checkbox, LoadingIndicator} from 'dooboo-ui';

import type {ReactElement} from 'react';
import {View} from 'react-native';
import {useFonts} from 'expo-font';
import {useState} from 'react';
import {StoryProvider} from './index';

export default function Solid(): ReactElement {
  const [checked, setChecked] = useState<boolean>(false);

  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../assets/doobooui.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <StoryProvider>
        <View
          style={{
            flex: 1,
            alignSelf: 'stretch',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 10,
          }}
        >
          <LoadingIndicator />
        </View>
      </StoryProvider>
    );
  }

  return (
    <StoryProvider>
      <View
        style={{
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
          color="primary"
        />
        <View style={{width: 8}} />
        <Checkbox
          checked={checked}
          onPress={() => setChecked(!checked)}
          color="secondary"
        />
        <View style={{width: 8}} />
        <Checkbox
          checked={checked}
          onPress={() => setChecked(!checked)}
          color="success"
        />
        <View style={{width: 8}} />
        <Checkbox
          checked={checked}
          onPress={() => setChecked(!checked)}
          color="warning"
        />
        <View style={{width: 8}} />
        <Checkbox
          checked={checked}
          onPress={() => setChecked(!checked)}
          color="info"
        />
        <View style={{width: 8}} />
        <Checkbox
          checked={checked}
          onPress={() => setChecked(!checked)}
          color="danger"
        />
      </View>
    </StoryProvider>
  );
}
