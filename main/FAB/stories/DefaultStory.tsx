import React, {FC, useState} from 'react';
import {SafeAreaView, View} from 'react-native';

import {FAB} from '../..';
import styled from '@emotion/native';
import {useFonts} from 'expo-font';
import {withTheme} from '../../theme/ThemeProvider';

const StoryContainer = styled.View`
  flex: 1;
  align-self: stretch;
  background-color: ${({theme}) => theme.background};
`;

const FABContainer: FC = () => {
  const [active, setActive] = useState<boolean>(false);

  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../../main/Icon/doobooui.ttf'),
  });

  if (!fontsLoaded) return <View />;

  return (
    <StoryContainer>
      <SafeAreaView style={{display: 'flex', width: '100%', height: '100%'}}>
        <FAB
          isActive={active}
          styles={{buttonSize: 'medium', iconSize: 25}}
          FABItems={[
            {id: 'search', icon: 'home-light'},
            {id: 'like', icon: 'like-light'},
          ]}
          onPressFAB={() => setActive((prev) => !prev)}
          onPressFABItem={(item) => {
            console.log(item);
          }}
        />
      </SafeAreaView>
    </StoryContainer>
  );
};

export const FABStory = withTheme(FABContainer);
