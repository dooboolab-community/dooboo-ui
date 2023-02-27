import {DoobooProvider, Icon, IconButton, useDooboo} from 'dooboo-ui';
import React, {useEffect} from 'react';

import type {ReactElement} from 'react';
import {View} from 'react-native';
import styled from '@emotion/native';
import {useDarkMode} from 'storybook-dark-mode';
import {useFonts} from 'expo-font';

const StyledIcon = styled(Icon)`
  color: ${({theme}) => theme.text.contrast};
`;

const StoryContainer = styled.View`
  background-color: ${({theme}) => theme.bg.basic};
  justify-content: center;
  align-items: center;
`;

export function StoryWrapper(): ReactElement {
  const {themeType, changeThemeType} = useDooboo();
  const isDark = useDarkMode();
  const storybookTheme = isDark ? 'dark' : 'light';

  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../assets/doobooui.ttf'),
  });

  useEffect(() => {
    if (storybookTheme !== themeType) {
      changeThemeType();
    }
  }, [changeThemeType, storybookTheme, themeType]);

  if (!fontsLoaded) {
    return (
      <StoryContainer>
        <View />
      </StoryContainer>
    );
  }

  return (
    <StoryContainer>
      <View
        style={{
          width: '100%',
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconButton iconElement={<StyledIcon size={24} name="DoobooAlt" />} />
        <View style={{width: 8}} />
        <IconButton iconElement={<StyledIcon size={24} name="AddAlt" />} />
        <View style={{width: 8}} />
        <IconButton
          iconElement={<StyledIcon size={24} name="ChevronRight" />}
        />
      </View>
    </StoryContainer>
  );
}

export default function StoryProvider(): ReactElement {
  const isDark = useDarkMode();

  return (
    <DoobooProvider themeConfig={{initialThemeType: isDark ? 'dark' : 'light'}}>
      <StoryWrapper />
    </DoobooProvider>
  );
}
