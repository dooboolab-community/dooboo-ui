import {DoobooProvider, Icon, IconButton} from 'dooboo-ui';

import React from 'react';
import type {ReactElement} from 'react';
import {View} from 'react-native';
import styled from '@emotion/native';
import {useFonts} from 'expo-font';

const StyledIcon = styled(Icon)`
  color: ${({theme}) => theme.text.contrast};
`;

const IconButtonStory = (): React.ReactElement => {
  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../assets/doobooui.ttf'),
  });

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <View
      style={{
        width: '100%',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <IconButton iconElement={<StyledIcon size={24} name="moment-solid" />} />
      <View style={{width: 8}} />
      <IconButton iconElement={<StyledIcon size={24} name="add-light" />} />
      <View style={{width: 8}} />
      <IconButton iconElement={<StyledIcon size={24} name="chevron-right" />} />
    </View>
  );
};

export const Light = (): ReactElement => (
  <DoobooProvider themeConfig={{initialThemeType: 'light'}}>
    <IconButtonStory />
  </DoobooProvider>
);

export const Dark = (): ReactElement => (
  <DoobooProvider themeConfig={{initialThemeType: 'dark'}}>
    <IconButtonStory />
  </DoobooProvider>
);
