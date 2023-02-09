import {DoobooProvider, FAB} from 'dooboo-ui';

import type {ReactElement} from 'react';
import {View} from 'react-native';
import styled from '@emotion/native';
import {useFonts} from 'expo-font';
import {useState} from 'react';

const StoryContainer = styled.View`
  width: 100%;
  height: 300px;
  align-self: stretch;
  background-color: ${({theme}) => theme.bg.basic};
`;

function FABStory(): ReactElement {
  const [active, setActive] = useState<boolean>(false);

  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../assets/doobooui.ttf'),
  });

  if (!fontsLoaded) {
    return <View />;
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

export const Light = (): ReactElement => (
  <DoobooProvider themeConfig={{initialThemeType: 'light'}}>
    <FABStory />
  </DoobooProvider>
);

export const Dark = (): ReactElement => (
  <DoobooProvider themeConfig={{initialThemeType: 'dark'}}>
    <FABStory />
  </DoobooProvider>
);
