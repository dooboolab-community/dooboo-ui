import type {FC, ReactElement} from 'react';
import {SafeAreaView, View} from 'react-native';
import {ThemeProvider, withTheme} from '@dooboo-ui/theme';

import {FAB} from 'dooboo-ui';
import styled from '@emotion/native';
import {useFonts} from 'expo-font';
import {useState} from 'react';

const StoryContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 300px;
  align-self: stretch;
  background-color: ${({theme}) => theme.bg.default};
`;

const FABContainer: FC = () => {
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
};

const FABStory = withTheme(FABContainer);

export const Light = (): ReactElement => (
  <ThemeProvider initialThemeType="light">
    <FABStory />
  </ThemeProvider>
);

export const Dark = (): ReactElement => (
  <ThemeProvider initialThemeType="dark">
    <FABStory />
  </ThemeProvider>
);
