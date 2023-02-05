import {Checkbox, DoobooProvider, LoadingIndicator, useDooboo} from 'dooboo-ui';
import React, {useState} from 'react';

import type {ReactElement} from 'react';
import {View} from 'react-native';
import styled from '@emotion/native';
import {useFonts} from 'expo-font';

const StyledText = styled.Text`
  color: ${({theme}) => theme.text.basic};
`;

function Component(): ReactElement {
  const [checked, setChecked] = useState<boolean>(false);
  const {theme} = useDooboo();

  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../assets/doobooui.ttf'),
  });

  if (!fontsLoaded) {
    return <LoadingIndicator />;
  }

  return (
    <View
      style={{
        backgroundColor: theme.bg.basic,
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 10,
      }}
    >
      <View style={{flexDirection: 'column'}}>
        <Checkbox
          checked={checked}
          onPress={() => setChecked(!checked)}
          endElement={<StyledText>Hello this is a checkbox</StyledText>}
        />
        <Checkbox
          checked={checked}
          onPress={() => setChecked(!checked)}
          endElement={<StyledText>Hello this is a checkbox</StyledText>}
        />
        <Checkbox
          checked={checked}
          onPress={() => setChecked(!checked)}
          endElement={<StyledText>Hello this is a checkbox</StyledText>}
        />
      </View>
    </View>
  );
}

export function EndElement({themeType}): ReactElement {
  return (
    <DoobooProvider themeConfig={{initialThemeType: themeType}}>
      <Component />
    </DoobooProvider>
  );
}
