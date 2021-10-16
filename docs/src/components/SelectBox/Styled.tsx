import React, {useState} from 'react';
import {ThemeProvider, ThemeType, useTheme} from '@dooboo-ui/theme';

import type {FC} from 'react';
import {SelectBox} from 'dooboo-ui';
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
    theme,
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
        style={{margin: 10}}
        styles={{
          titleContainer: {
            backgroundColor: theme.success,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderRadius: 40,
            height: 40,
          },
          itemContainer: {
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            backgroundColor: theme.paper,
            height: 40,
          },
          rightElementContainer: {
            right: 15,
          },
        }}
      />
    </Container>
  );
}

export const Styled: FC<{themeType: ThemeType}> = ({themeType}) => {
  return (
    <ThemeProvider initialThemeType={themeType}>
      <SelectBoxStory />
    </ThemeProvider>
  );
};
