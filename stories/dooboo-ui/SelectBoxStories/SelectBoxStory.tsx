import React, {FC} from 'react';

import {SelectBox} from '../../../main/SelectBox';
import {View} from 'react-native';
import styled from '@emotion/native';
import {useFonts} from 'expo-font';

const data = ['Item1', 'Item2', 'Item3', 'Item4'];

const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({theme}) => theme.background};

  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SelectBoxStory: FC = () => {
  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../../main/Icon/doobooui.ttf'),
  });

  if (!fontsLoaded) return <View />;

  return (
    <Container>
      <SelectBox data={data} />
    </Container>
  );
};

export default SelectBoxStory;
