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

const StyledText = styled.Text`
  color: ${({theme}) => theme.text};
  font-size: 16px;
  margin: 20px;
`;

function SelectBoxStory(): React.ReactElement {
  const data = ['Item1', 'Item2', 'Item3', 'Item4'];
  const {
    theme,
    media: {isMobile},
  } = useTheme();

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../assets/doobooui.ttf'),
  });

  const handlePressIncrease = () => {
    setCount(count + 1);
  };

  if (!fontsLoaded) return <View />;

  return (
    <Container style={{flexDirection: isMobile ? 'column' : 'row'}}>
      <View
        style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            margin: 10
          }}>
        <SelectBox
          data={data}
          onSelect={(_, index) => setSelectedIndex(index)}
          selectedIndex={selectedIndex}
          rotateAnimDuration={1000}
          onPress={handlePressIncrease}
          style={{padding: 15}}
        />
        <StyledText>press count : {count}</StyledText>
      </View>
    </Container>
  );
}

export const Animation: FC<{themeType: ThemeType}> = ({themeType}) => {
  return (
    <ThemeProvider initialThemeType={themeType}>
      <SelectBoxStory />
    </ThemeProvider>
  );
};
