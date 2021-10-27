import {Hr, IconButton} from '../..';
import {Text, View} from 'react-native';

import React from 'react';
import type {FC} from 'react';
import {Icon} from '../../Icon';
import styled from '@emotion/native';
import {useFonts} from 'expo-font';
import {useTheme} from '@dooboo-ui/theme';

const StoryContainer = styled.View`
  flex: 1;
  align-self: stretch;
  background-color: ${({theme}) => theme.background};
`;

const ScrollContainer = styled.ScrollView`
  width: 100%;
`;

const StyledIcon = styled(Icon)`
  color: ${({theme}) => theme.textContrast};
`;

const IconButtonStory: FC = () => {
  const {theme} = useTheme();

  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../../main/Icon/doobooui.ttf'),
  });

  if (!fontsLoaded) return <View />;

  return (
    <StoryContainer>
      <ScrollContainer
        style={{flex: 1}}
        contentContainerStyle={{
          paddingVertical: 60,
          paddingHorizontal: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 18,
            marginTop: 24,
            marginBottom: 8,
            color: theme.text,
          }}
        >
          Medium IconButton (default)
        </Text>
        <View
          style={{
            width: '100%',
            marginTop: 40,

            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IconButton icon={<StyledIcon size={24} name="moment-solid" />} />
          <View style={{width: 8}} />
          <IconButton icon={<StyledIcon size={24} name="add-light" />} />
          <View style={{width: 8}} />
          <IconButton icon={<StyledIcon size={24} name="chevron-right" />} />
        </View>
        <Hr style={{marginTop: 40}} />
        <Text
          style={{
            fontSize: 18,
            marginTop: 24,
            marginBottom: 8,
            color: theme.text,
          }}
        >
          Large IconButton
        </Text>
        <View
          style={{
            marginTop: 40,
            width: '100%',

            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IconButton
            size="large"
            icon={<StyledIcon size={32} name="cross-light" />}
          />
          <View style={{width: 8}} />
          <IconButton
            size="large"
            icon={<StyledIcon size={32} name="tile-light" />}
          />
        </View>
        <Hr style={{marginTop: 40}} />
        <Text
          style={{
            fontSize: 18,
            marginTop: 24,
            marginBottom: 8,
            color: theme.text,
          }}
        >
          Small IconButton
        </Text>
        <View
          style={{
            marginTop: 40,
            marginBottom: 100,
            width: '100%',

            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IconButton
            size="small"
            icon={<StyledIcon size={16} name="cross-light" />}
          />
          <View style={{width: 8}} />
          <IconButton
            size="small"
            icon={<StyledIcon size={16} name="tile-light" />}
          />
        </View>
      </ScrollContainer>
    </StoryContainer>
  );
};

export default IconButtonStory;
