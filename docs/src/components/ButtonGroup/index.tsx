import {ButtonGroup, ThemeProvider} from 'dooboo-ui';
import React, {ReactElement, useState} from 'react';

import {View} from 'react-native';
import styled from '@emotion/native';

const Container = styled.SafeAreaView`
  flex: 1;
  align-self: stretch;
  background-color: ${({theme}) => theme.background};
  align-self: stretch;
  padding: 0 24px;

  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  color: ${({theme}) => theme.text};
  font-size: 32px;
`;

const ButtonGroupStory = (): React.ReactElement => {
  const data = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  const [selected, setSelected] = useState(0);

  return (
    <Container>
      <ButtonGroup
        style={{marginTop: 40, marginHorizontal: 20}}
        onPress={(index: number): void => setSelected(index)}
        data={data}
        selected={selected}
      />
      <View
        style={{
          height: 120,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <StyledText>{data[selected]}</StyledText>
      </View>
    </Container>
  );
};

export const Light = (): ReactElement => (
  <ThemeProvider initialThemeType="light">
    <ButtonGroupStory />
  </ThemeProvider>
);

export const Dark = (): ReactElement => (
  <ThemeProvider initialThemeType="dark">
    <ButtonGroupStory />
  </ThemeProvider>
);
