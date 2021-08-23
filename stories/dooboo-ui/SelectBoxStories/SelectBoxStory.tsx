import React, {useState} from 'react';
import {View, useWindowDimensions} from 'react-native';

import type {FC} from 'react';
import {SelectBox} from '../../../main/SelectBox';
import styled from '@emotion/native';
import {useFonts} from 'expo-font';
import {useTheme} from '../../../main';

const data = ['Item1', 'Item2', 'Item3', 'Item4'];

const Container = styled.View<{width: number}>`
  flex: 1;
  align-self: stretch;

  flex-direction: ${({width}) => (width < 767 ? 'column' : 'row')};
  align-items: center;
  justify-content: center;
`;

const Divider = styled.View`
  height: 50px;
  width: 50px;
`;

const SelectBoxStory: FC = () => {
  const {theme} = useTheme();
  const {width} = useWindowDimensions();
  const [value1, setValue1] = useState<number>(0);
  const [value2, setValue2] = useState<number>(0);
  const [value3, setValue3] = useState<number>(0);

  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../../main/Icon/doobooui.ttf'),
  });

  if (!fontsLoaded) return <View />;

  return (
    <Container width={width}>
      <SelectBox
        data={data}
        style={{zIndex: 999}}
        onPress={(index: number) => setValue1(index)}
        selectedIndex={value1}
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
      <Divider />
      <SelectBox
        data={data}
        style={{zIndex: 998}}
        onPress={(index: number) => setValue2(index)}
        selectedIndex={value2}
        isRotate={false}
        styles={{
          titleContainer: {
            backgroundColor: theme.info,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
          },
          itemContainer: {
            backgroundColor: theme.secondary,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
          },
        }}
      />
      <Divider />
      <SelectBox
        data={data}
        style={{zIndex: 997}}
        onPress={(index: number) => setValue3(index)}
        selectedIndex={value3}
        rightElement={null}
      />
    </Container>
  );
};

export default SelectBoxStory;
