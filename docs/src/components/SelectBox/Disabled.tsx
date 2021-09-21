import React, {useState} from 'react';
import {SelectBox, ThemeProvider, ThemeType, useTheme} from 'dooboo-ui';

import type {FC} from 'react';
import {View} from 'react-native';
import styled from '@emotion/native';
import {useFonts} from 'expo-font';

const Container = styled.View`
  flex: 1;
  align-self: stretch;
  background-color: ${({theme}) => theme.background};

  align-items: center;
  justify-content: center;
`;

function SelectBoxStory(): React.ReactElement {
  const data = ['Item1', 'Item2', 'Item3', 'Item4'];

  const {
    media: {isMobile},
  } = useTheme();

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../assets/doobooui.ttf'),
  });

  if (!fontsLoaded) return <View />;

  return (
    <Container style={{flexDirection: isMobile ? 'column' : 'row'}}>
      <SelectBox
        data={data}
        onSelect={(_, index) => setSelectedIndex(index)}
        selectedIndex={selectedIndex}
        disabled={true}
        style={{margin: 10}}
      />
    </Container>
  );
}

export const Disabled: FC<{themeType: ThemeType}> = ({themeType}) => {
  return (
    <ThemeProvider initialThemeType={themeType}>
      <SelectBoxStory />
    </ThemeProvider>
  );
};
