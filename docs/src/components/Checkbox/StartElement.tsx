import {Checkbox, LoadingIndicator} from 'dooboo-ui';

import type {ReactElement} from 'react';
import {StoryProvider} from './index';
import {View} from 'react-native';
import styled from '@emotion/native';
import {useFonts} from 'expo-font';
import {useState} from 'react';

const StyledText = styled.Text`
  color: ${({theme}) => theme.text.basic};
`;

export default function StartElement(): ReactElement {
  const [checked, setChecked] = useState<boolean>(false);

  const [fontsLoaded] = useFonts({
    doobooui: require('../../assets/doobooui.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <StoryProvider>
        <View
          style={{
            flex: 1,
            alignSelf: 'stretch',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 10,
          }}
        >
          <LoadingIndicator />
        </View>
      </StoryProvider>
    );
  }

  return (
    <StoryProvider>
      <View
        style={{
          flex: 1,
          alignSelf: 'stretch',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <Checkbox
          checked={checked}
          onPress={() => setChecked(!checked)}
          startElement={<StyledText>Hello this is a checkbox</StyledText>}
        />
      </View>
    </StoryProvider>
  );
}
