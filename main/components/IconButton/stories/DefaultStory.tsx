import {
  Basic,
  Colors,
  Disabled,
  IconElement,
  Loading,
  LoadingElement,
  Sizes,
} from './components';
import {
  Description,
  ScrollContainer,
  StoryContainer,
  Title,
} from '../../../GlobalStyles';

import type {FC} from 'react';
import React from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
import {View} from 'react-native';
import {useFonts} from 'expo-font';

const IconButtonStory: FC<{themeType: ThemeType}> = ({themeType}) => {
  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../Icon/doobooui.ttf'),
  });

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <StoryContainer>
      <ScrollContainer
        style={{flex: 1}}
        contentContainerStyle={{
          paddingVertical: 60,
          paddingHorizontal: 10,
        }}
      >
        <Title>Basic</Title>
        <Basic themeType={themeType} />

        <Title>Colors</Title>
        <Colors themeType={themeType} />

        <Title>Disabled</Title>
        <Disabled themeType={themeType} />

        <Title>Sizes</Title>
        <Sizes themeType={themeType} />

        <Title>Loading</Title>
        <Loading themeType={themeType} />
        <Description>
          If you want to change the loading indicator you can use the
          loadingElement property
        </Description>
        <LoadingElement themeType={themeType} />

        <Title>IconElement</Title>
        <IconElement themeType={themeType} />
      </ScrollContainer>
    </StoryContainer>
  );
};

export default IconButtonStory;
