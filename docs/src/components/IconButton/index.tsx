import {ThemeProvider, IconButton, Icon} from 'dooboo-ui';
import React, {ReactElement} from 'react';

import {View} from 'react-native';
import styled from '@emotion/native';
import {useFonts} from 'expo-font';

const StyledIcon = styled(Icon)`
  color: ${({theme}) => theme.textContrast};
`;

const IconButtonStory = (): React.ReactElement => {
  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../../../main/Icon/doobooui.ttf'),
  });

  if (!fontsLoaded) return <View />;

  return (
    <View
      style={{
        width: '100%',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
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
