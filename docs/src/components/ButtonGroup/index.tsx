import React, {useState} from 'react';

import {DoobooProvider} from 'dooboo-ui';
import type {ReactElement} from 'react';
import {View} from 'react-native';
import styled from '@emotion/native';

const Container = styled.SafeAreaView`
  flex: 1;
  align-self: stretch;
  background-color: ${({theme}) => theme.bg.basic};
  align-self: stretch;
  padding: 0 24px;

  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  color: ${({theme}) => theme.text.basic};
  font-size: 32px;
`;

const ButtonGroupStory = (): React.ReactElement => {
  const data = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  const [selectedIndex] = useState(0);

  return (
    <Container>
      {/* <ButtonGroup
        style={{marginTop: 40, marginHorizontal: 20}}
        onPress={(index: number): void => setSelectedIndex(index)}
        data={data}
        selectedIndex={selectedIndex}
      /> */}
      <View
        style={{
          height: 120,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <StyledText>{data[selectedIndex]}</StyledText>
      </View>
    </Container>
  );
};

export const Light = (): ReactElement => (
  <DoobooProvider themeConfig={{initialThemeType: 'light'}}>
    <ButtonGroupStory />
  </DoobooProvider>
);

export const Dark = (): ReactElement => (
  <DoobooProvider themeConfig={{initialThemeType: 'dark'}}>
    <ButtonGroupStory />
  </DoobooProvider>
);
