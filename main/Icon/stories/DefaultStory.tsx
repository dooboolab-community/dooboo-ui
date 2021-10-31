import type {FC} from 'react';
import {Icon} from '..';
import {View} from 'react-native';
import styled from '@emotion/native';
import {useFonts} from 'expo-font';
import React from 'react';

const StoryContainer = styled.View`
  flex: 1;
  align-self: stretch;
  background-color: ${({theme}) => theme.background};
`;

const ScrollContainer = styled.ScrollView`
  width: 100%;
`;

const Container = styled.View`
  flex: 1;
  align-self: stretch;
  flex-wrap: wrap;
  background-color: ${({theme}) => theme.background};
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0 16px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledIcon = styled(Icon)`
  padding: 8px;
`;

const IconStory: FC = () => {
  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../../main/Icon/doobooui.ttf'),
  });

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <StoryContainer>
      <ScrollContainer
        contentContainerStyle={{
          flex: 1,
          alignSelf: 'stretch',
        }}
      >
        <Container style={{paddingVertical: 60}}>
          <StyledIcon size={16} name="chevron-right-shape" />
          <StyledIcon size={16} name="chevron-left-shape" />
          <StyledIcon size={16} name="chevron-down-shape" />
          <StyledIcon size={16} name="chevron-up-shape" />
          <StyledIcon size={16} name="trash-light" />
          <StyledIcon size={16} name="pen-light" />
          <StyledIcon size={16} name="burger-shape" />
          <StyledIcon size={16} name="dots-light" />
          <StyledIcon size={16} name="wifi-unable-light" />
          <StyledIcon size={16} name="wifi-light" />
          <StyledIcon size={16} name="wifi-light" />
          <StyledIcon size={16} name="mic-shape" />
          <StyledIcon size={16} name="mic-light" />
          <StyledIcon size={16} name="phone-shape" />
          <StyledIcon size={16} name="phone-light" />
          <StyledIcon size={16} name="clip-shape" />
          <StyledIcon size={16} name="clip-light" />
          <StyledIcon size={16} name="cog-light" />
          <StyledIcon size={16} name="picture-light" />
          <StyledIcon size={16} name="moment-solid" />
          <StyledIcon size={16} name="moment-light" />
          <StyledIcon size={16} name="cross-light" />
          <StyledIcon size={16} name="tile-light" />
          <StyledIcon size={16} name="list-light" />
          <StyledIcon size={16} name="setting-light" />
          <StyledIcon size={16} name="tick-light" />
          <StyledIcon size={16} name="chevron-right" />
          <StyledIcon size={16} name="chevron-down-light" />
          <StyledIcon size={16} name="chevron-up-light" />
          <StyledIcon size={16} name="chevron-left-light" />
          <StyledIcon size={16} name="comment-light" />
          <StyledIcon size={16} name="share-solid" />
          <StyledIcon size={16} name="add-solid" />
          <StyledIcon size={16} name="like-solid" />
          <StyledIcon size={16} name="discover-solid" />
          <StyledIcon size={16} name="account-solid" />
          <StyledIcon size={16} name="collection-solid" />
          <StyledIcon size={16} name="search-solid" />
          <StyledIcon size={16} name="bell-solid" />
          <StyledIcon size={16} name="home-solid" />
          <StyledIcon size={16} name="camera-solid" />
          <StyledIcon size={16} name="share-light" />
          <StyledIcon size={16} name="add-light" />
          <StyledIcon size={16} name="like-light" />
          <StyledIcon size={16} name="discover-light" />
          <StyledIcon size={16} name="account-light" />
          <StyledIcon size={16} name="collection-light" />
          <StyledIcon size={16} name="search-light" />
          <StyledIcon size={16} name="bell-light" />
          <StyledIcon size={16} name="home-light" />
          <StyledIcon size={16} name="camera-light" />
        </Container>
      </ScrollContainer>
    </StoryContainer>
  );
};

export default IconStory;
