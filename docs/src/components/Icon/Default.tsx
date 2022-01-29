import {Icon, IconName} from 'dooboo-ui';
import {ThemeProvider, ThemeType} from '@dooboo-ui/theme';

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
      }}
    >
      <StyledIcon size={16} name={name} />
      <StyledText>{name}</StyledText>
    </View>
  );
};

const IconStory: FC = () => {
  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../assets/doobooui.ttf'),
  });

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <StoryContainer>
      <IconWithLabel name="puzz-light" />
      <IconWithLabel name="dooboolab-solid" />
      <IconWithLabel name="artifacts-solid" />
      <IconWithLabel name="android-solid" />
      <IconWithLabel name="apple-solid" />
      <IconWithLabel name="tick-circle-light" />
      <IconWithLabel name="ban-light" />
      <IconWithLabel name="bookmark-light" />
      <IconWithLabel name="brightness-minus-light" />
      <IconWithLabel name="brightness-plus-light" />
      <IconWithLabel name="tick-circle-solid" />
      <IconWithLabel name="coin-light" />
      <IconWithLabel name="collect-light" />
      <IconWithLabel name="download-light" />
      <IconWithLabel name="facebook-solid" />
      <IconWithLabel name="fastforward-light" />
      <IconWithLabel name="google-solid" />
      <IconWithLabel name="happy-light" />
      <IconWithLabel name="instagram_reel-solid" />
      <IconWithLabel name="instagram-solid" />
      <IconWithLabel name="ios-solid" />
      <IconWithLabel name="location-light" />
      <IconWithLabel name="lock-light" />
      <IconWithLabel name="mail-light" />
      <IconWithLabel name="mobile-light" />
      <IconWithLabel name="paper-plane-light" />
      <IconWithLabel name="pause-light" />
      <IconWithLabel name="play-light" />
      <IconWithLabel name="puzz-solid" />
      <IconWithLabel name="rewind-light" />
      <IconWithLabel name="sad-light" />
      <IconWithLabel name="save-light" />
      <IconWithLabel name="speaker-light" />
      <IconWithLabel name="stop-light" />
      <IconWithLabel name="thumb-down-light" />
      <IconWithLabel name="thumb-up-light" />
      <IconWithLabel name="tiktok-solid" />
      <IconWithLabel name="unlock-light" />
      <IconWithLabel name="upload-light" />
      <IconWithLabel name="vimeo-solid" />
      <IconWithLabel name="volume-down-light" />
      <IconWithLabel name="volume-up-light" />
      <IconWithLabel name="youtube-solid" />
      <IconWithLabel name="info-light" />
      <IconWithLabel name="dooboo-shape" />
      <IconWithLabel name="burger-shape" />
      <IconWithLabel name="pen-light" />
      <IconWithLabel name="trash-light" />
      <IconWithLabel name="chevron-up-shape" />
      <IconWithLabel name="chevron-down-shape" />
      <IconWithLabel name="chevron-left-shape" />
      <IconWithLabel name="chevron-right-shape" />
      <IconWithLabel name="follow-light" />
      <IconWithLabel name="mic-shape" />
      <IconWithLabel name="mic-light" />
      <IconWithLabel name="phone-shape" />
      <IconWithLabel name="phone-light" />
      <IconWithLabel name="clip-shape" />
      <IconWithLabel name="clip-light" />
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
      <IconWithLabel name="chevron-left-light" />
      <IconWithLabel name="chevron-up-light" />
      <IconWithLabel name="comment-light" />
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
      <IconWithLabel name="chevron-down-light" />
      <IconWithLabel name="search-light" />
      <IconWithLabel name="bell-light" />
      <IconWithLabel name="home-light" />
      <IconWithLabel name="camera-light" />
      <IconWithLabel name="dots-light" />
      <IconWithLabel name="follow-shape" />
      <IconWithLabel name="wifi-unable-light" />
      <IconWithLabel name="wifi-light" />
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
