import {Icon, IconName, ThemeProvider, ThemeType} from 'dooboo-ui';

import type {FC} from 'react';
import {View} from 'react-native';
import styled from '@emotion/native';
import {useFonts} from 'expo-font';

const StoryContainer = styled.View`
  flex-wrap: wrap;
  background-color: ${({theme}) => theme.background};
  padding: 20px;

  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

const StyledIcon = styled(Icon)`
  padding: 8px;
`;

const StyledText = styled.Text`
  text-align: center;
  color: ${({theme}) => theme.text};
`;

const IconWithLabel: FC<{name: IconName}> = ({name}) => {
  return (
    <View
      style={{
        width: 80,
        flexWrap: 'wrap',
        padding: 8,

        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StyledIcon size={16} name={name} />
      <StyledText>{name}</StyledText>
    </View>
  );
};

const IconStory: FC = () => {
  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../assets/doobooui.ttf'),
  });

  if (!fontsLoaded) return <View />;

  return (
    <StoryContainer>
      <IconWithLabel name="cog-light" />
      <IconWithLabel name="picture-light" />
      <IconWithLabel name="moment-solid" />
      <IconWithLabel name="moment-light" />
      <IconWithLabel name="cross-light" />
      <IconWithLabel name="tile-light" />
      <IconWithLabel name="list-light" />
      <IconWithLabel name="setting-light" />
      <IconWithLabel name="tick-light" />
      <IconWithLabel name="chevron-right" />
      <IconWithLabel name="chevron-down-light" />
      <IconWithLabel name="chevron-up-light" />
      <IconWithLabel name="chevron-left-light" />
      <IconWithLabel name="share-solid" />
      <IconWithLabel name="add-solid" />
      <IconWithLabel name="like-solid" />
      <IconWithLabel name="discover-solid" />
      <IconWithLabel name="account-solid" />
      <IconWithLabel name="collection-solid" />
      <IconWithLabel name="search-solid" />
      <IconWithLabel name="bell-solid" />
      <IconWithLabel name="home-solid" />
      <IconWithLabel name="camera-solid" />
      <IconWithLabel name="share-light" />
      <IconWithLabel name="add-light" />
      <IconWithLabel name="like-light" />
      <IconWithLabel name="discover-light" />
      <IconWithLabel name="account-light" />
      <IconWithLabel name="collection-light" />
      <IconWithLabel name="search-light" />
      <IconWithLabel name="bell-light" />
      <IconWithLabel name="home-light" />
      <IconWithLabel name="camera-light" />
    </StoryContainer>
  );
};

export const Default: FC<{themeType: ThemeType}> = ({themeType}) => {
  return (
    <ThemeProvider initialThemeType={themeType}>
      <IconStory />
    </ThemeProvider>
  );
};
