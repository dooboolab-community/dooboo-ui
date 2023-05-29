import type {ReactElement, ReactNode} from 'react';
// Caveat: Expo web needs React to be imported
import React, {useState} from 'react';
import {StatusBar, View} from 'react-native';

import {DoobooProvider, SwitchToggle, Typography, useDooboo} from '../main';

import {StoryContainer} from './GlobalStyles';

type ContainerProps = {
  children: ReactNode;
};

export function StoryWrapper({children}: ContainerProps): ReactElement {
  const {themeType, changeThemeType} = useDooboo();
  const [on, off] = useState(themeType === 'dark');

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
