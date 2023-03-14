import {DoobooProvider, FAB, useDooboo} from 'dooboo-ui';
import React, {useEffect, useState} from 'react';

import type {ReactElement} from 'react';
import {View} from 'react-native';
import styled from '@emotion/native';
import {useDarkMode} from 'storybook-dark-mode';
import {useFonts} from 'expo-font';

const StoryContainer = styled.View`
  width: 100%;
  height: 300px;
  align-self: stretch;
  background-color: ${({theme}) => theme.bg.basic};
`;

function StoryWrapper(): ReactElement {
  const [active, setActive] = useState<boolean>(false);
  const {themeType, changeThemeType} = useDooboo();
  const isDark = useDarkMode();
  const storybookTheme = isDark ? 'dark' : 'light';

  const [fontsLoaded] = useFonts({
    doobooui: require('../../assets/doobooui.ttf'),
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
      <FAB
        styles={{buttonSize: 'medium'}}
        isActive={active}
        items={[
          {id: 'search', icon: 'HomeAlt'},
          {id: 'like', icon: 'FavoriteAlt'},
        ]}
        onPressFAB={() => setActive((prev) => !prev)}
        onPressItem={() => {}}
      />
    </StoryContainer>
  );
}

export default function Fab(): ReactElement {
  const isDark = useDarkMode();

  return (
    <DoobooProvider themeConfig={{initialThemeType: isDark ? 'dark' : 'light'}}>
      <StoryWrapper />
    </DoobooProvider>
  );
}
