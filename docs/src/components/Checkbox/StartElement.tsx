import {Checkbox, LoadingIndicator} from 'dooboo-ui';
import React, {useState} from 'react';
import {ThemeProvider, useTheme} from '@dooboo-ui/theme';

import type {FC} from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
import {View} from 'react-native';
import styled from '@emotion/native';
import {useFonts} from 'expo-font';

const StyledText = styled.Text`
  color: ${({theme}) => theme.text.basic};
`;

const Component: FC = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const {theme} = useTheme();

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
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
      }}
    >
      <Checkbox
        checked={checked}
        onPress={() => setChecked(!checked)}
        startElement={<StyledText>Hello this is a checkbox</StyledText>}
      />
      <Checkbox
        checked={checked}
        onPress={() => setChecked(!checked)}
        startElement={<StyledText>Hello this is a checkbox</StyledText>}
      />
      <Checkbox
        checked={checked}
        onPress={() => setChecked(!checked)}
        startElement={<StyledText>Hello this is a checkbox</StyledText>}
      />
    </View>
  );
};

export const startElement: FC<{themeType: ThemeType}> = ({themeType}) => {
  return (
    <ThemeProvider initialThemeType={themeType}>
      <Component />
    </ThemeProvider>
  );
};