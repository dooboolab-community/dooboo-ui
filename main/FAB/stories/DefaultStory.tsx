import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';

import {FAB} from '../..';
import type {FC} from 'react';
import styled from '@emotion/native';
import {useFonts} from 'expo-font';
import {withTheme} from '@dooboo-ui/theme';

const StoryContainer = styled.View`
  flex: 1;
  align-self: stretch;
  background-color: ${({theme}) => theme.bg.default};
`;

const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ItemText = styled.Text`
  font-size: 24px;
`;

const FABContainer: FC = () => {
  const [selectItem, setSelectItem] = useState<string>('none');
  const [active, setActive] = useState<boolean>(false);

  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../Icon/doobooui.ttf'),
  });

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <StoryContainer>
      <SafeAreaView style={{display: 'flex', width: '100%', height: '100%'}}>
        <ContentContainer>
          <ItemText>{`clicked item: ${selectItem}`}</ItemText>
        </ContentContainer>
        <FAB
          isActive={active}
          styles={{buttonSize: 'medium', iconSize: 25}}
          FABItems={[
            {id: 'search', icon: 'home-light'},
            {id: 'like', icon: 'like-light'},
          ]}
          onPressFAB={() => setActive((prev) => !prev)}
          onPressFABItem={(item) => {
            if (!item) {
              return;
            }

            setSelectItem(item.id);
          }}
        />
      </SafeAreaView>
    </StoryContainer>
  );
};

export const FABStory = withTheme(FABContainer);
