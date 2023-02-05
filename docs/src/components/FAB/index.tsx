import {DoobooProvider, FAB} from 'dooboo-ui';
import {SafeAreaView, View} from 'react-native';

import type {ReactElement} from 'react';
import styled from '@emotion/native';
import {useFonts} from 'expo-font';
import {useState} from 'react';

const StoryContainer = styled.View`
  flex: 1;
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
      <SafeAreaView style={{display: 'flex', width: '100%', height: '100%'}}>
        <FAB
          styles={{buttonSize: 'medium'}}
          isActive={active}
          FABItems={[
            {id: 'search', icon: 'home-light'},
            {id: 'like', icon: 'like-light'},
          ]}
          onPressFAB={() => setActive((prev) => !prev)}
          onPressFABItem={() => {}}
        />
      </SafeAreaView>
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
