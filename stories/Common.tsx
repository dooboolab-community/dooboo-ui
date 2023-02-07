import {
  DoobooProvider,
  LoadingIndicator,
  SwitchToggle,
  Typography,
  useDooboo,
} from '../main';
// Caveat: Expo web needs React to be imported
import React, {useState} from 'react';
import type {ReactElement, ReactNode} from 'react';
import {StatusBar, View} from 'react-native';

import {StoryContainer} from './GlobalStyles';
import {useFonts} from 'expo-font';

type ContainerProps = {
  children: ReactNode;
};

export function StoryWrapper({children}: ContainerProps): ReactElement {
  const {themeType, changeThemeType} = useDooboo();
  const [on, off] = useState(themeType === 'dark');
  const [fontsLoaded] = useFonts({
    IcoMoon: require('../main/uis/Icon/doobooui.ttf'),
  });

  if (!fontsLoaded) {
    return <LoadingIndicator />;
  }

  return (
    <StoryContainer>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <Typography.Heading3>{themeType}</Typography.Heading3>
        <SwitchToggle
          size="small"
          isOn={on}
          onPress={() => {
            off(!on);
            changeThemeType();
          }}
          style={{padding: 8}}
        />
      </View>
      {children}
    </StoryContainer>
  );
}

export function renderStory(el: ReactElement): ReactElement {
  return (
    <DoobooProvider>
      <StoryWrapper>{el}</StoryWrapper>
    </DoobooProvider>
  );
}
