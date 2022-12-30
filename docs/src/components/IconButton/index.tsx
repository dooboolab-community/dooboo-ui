import {Icon, IconButton} from 'dooboo-ui';
import type {ReactElement} from 'react';
import React from 'react';

import {ThemeProvider} from '@dooboo-ui/theme';
import {View} from 'react-native';
import styled from '@emotion/native';
import {useFonts} from 'expo-font';

const StyledIcon = styled(Icon)`
  color: ${({theme}) => theme.text.contrastBasic};
`;

const IconButtonStory = (): React.ReactElement => {
  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../../../main/Icon/doobooui.ttf'),
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
      <IconButton icon={<StyledIcon size={24} name="moment-solid" />} />
      <View style={{width: 8}} />
      <IconButton icon={<StyledIcon size={24} name="add-light" />} />
      <View style={{width: 8}} />
      <IconButton icon={<StyledIcon size={24} name="chevron-right" />} />
    </View>
  );
};

export const Light = (): ReactElement => (
  <ThemeProvider initialThemeType="light">
    <IconButtonStory />
  </ThemeProvider>
);

export const Dark = (): ReactElement => (
  <ThemeProvider initialThemeType="dark">
    <IconButtonStory />
  </ThemeProvider>
);
