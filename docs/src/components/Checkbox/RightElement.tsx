import {Checkbox, LoadingIndicator} from 'dooboo-ui';
import type {FC} from 'react';
import React, {useState} from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
import {ThemeProvider, useTheme} from '@dooboo-ui/theme';

import {View} from 'react-native';
import styled from '@emotion/native';
import {useFonts} from 'expo-font';

const StyledText = styled.Text`
  color: ${({theme}) => theme.text};
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
        backgroundColor: theme.background,
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
          rightElement={<StyledText>Hello this is a checkbox</StyledText>}
        />
        <Checkbox
          checked={checked}
          onPress={() => setChecked(!checked)}
          rightElement={<StyledText>Hello this is a checkbox</StyledText>}
        />
        <Checkbox
          checked={checked}
          onPress={() => setChecked(!checked)}
          rightElement={<StyledText>Hello this is a checkbox</StyledText>}
        />
      </View>
    </View>
  );
};

export const RightElement: FC<{themeType: ThemeType}> = ({themeType}) => {
  return (
    <ThemeProvider initialThemeType={themeType}>
      <Component />
    </ThemeProvider>
  );
};
