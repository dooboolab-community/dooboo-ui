import type {ReactElement, ReactNode} from 'react';
import {StatusBar, View} from 'react-native';
import {SwitchToggle, Typography, useDooboo} from '../main';

import {StoryContainer} from './GlobalStyles';
import {useFonts} from 'expo-font';
import {useState} from 'react';

type ContainerProps = {
  children: ReactNode;
};

export function StoryWrapper({children}: ContainerProps): ReactElement {
  const {themeType, changeThemeType} = useDooboo();
  const [on, off] = useState(false);
  const [fontsLoaded] = useFonts({
    IcoMoon: require('../main/components/Icon/doobooui.ttf'),
  });

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <StoryContainer>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          marginBottom: 8,

          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <Typography.Heading3>{themeType}</Typography.Heading3>
        <SwitchToggle
          size="small"
          isOn={on}
          onPress={() => {
            off(!on);
            changeThemeType();
          }}
          style={{padding: 8}}
        />
      </View>
      {children}
    </StoryContainer>
  );
}
