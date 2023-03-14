import {Checkbox, LoadingIndicator} from 'dooboo-ui';
import React, {useState} from 'react';

import type {ReactElement} from 'react';
import {StoryProvider} from './index';
import {View} from 'react-native';
import {useFonts} from 'expo-font';

export default function Basic(): ReactElement {
  const [checked, setChecked] = useState<boolean>(false);

  const [fontsLoaded] = useFonts({
    doobooui: require('../../assets/doobooui.ttf'),
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
        <Checkbox checked={checked} onPress={() => setChecked(!checked)} />
      </View>
    </StoryProvider>
  );
}
