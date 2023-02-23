import {Checkbox, LoadingIndicator} from 'dooboo-ui';

import type {ReactElement} from 'react';
import {View} from 'react-native';
import {useFonts} from 'expo-font';
import {StoryProvider} from './index';
import React from 'react';

export default function Disabled(): ReactElement {
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
        <Checkbox disabled />
      </View>
    </StoryProvider>
  );
}
