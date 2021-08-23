import React, {FC} from 'react';
import {SafeAreaView, View} from 'react-native';
import {useTheme, withTheme} from '../../../main/theme/ThemeProvider';

import {FAB} from '../../../main';
import styled from '@emotion/native';
import {useFonts} from 'expo-font';

const StoryContainer = styled.View`
  flex: 1;
  align-self: stretch;
  background-color: ${({theme}) => theme.background};
`;

const FABContainer: FC = () => {
  const {theme} = useTheme();

  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../../main/Icon/doobooui.ttf'),
  });

  if (!fontsLoaded) return <View />;

  return (
    <StoryContainer>
      <SafeAreaView style={{width: '100%', height: '100%'}}>
        <FAB
          size="medium"
          theme={theme}
          FABList={[
            {id: 'search', icon: 'home-light'},
            {id: 'search', icon: 'like-light'},
          ]}
          onPressFABItem={(item) => {
            console.log(item.id);
          }}
        />
      </SafeAreaView>
    </StoryContainer>
  );
};

export const FABStory = withTheme(FABContainer);
