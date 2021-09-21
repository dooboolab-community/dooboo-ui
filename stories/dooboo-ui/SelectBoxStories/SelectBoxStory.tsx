import React, {useState} from 'react';
import {SelectBox, useTheme} from '../../../main';

import type {FC} from 'react';
import {View} from 'react-native';
import styled from '@emotion/native';
import {useFonts} from 'expo-font';

const fakeData1 = ['Item1', 'Item2', 'Item3', 'Item4'];

const fakeDate2 = [
  {index: 1, value: 'Item1'},
  {index: 2, value: 'Item2'},
  {index: 3, value: 'Item3'},
  {index: 4, value: 'Item4'},
];

const Container = styled.View`
  flex: 1;
  align-self: stretch;

  align-items: center;
  justify-content: center;
`;

const Divider = styled.View`
  height: 50px;
  width: 50px;
`;

const SelectBoxStory: FC = () => {
  const {
    theme,
    media: {isMobile},
  } = useTheme();

  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);

  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../../main/Icon/doobooui.ttf'),
  });

  if (!fontsLoaded) return <View />;

  return (
    <Container style={{flexDirection: isMobile ? 'column' : 'row'}}>
      <SelectBox
        data={fakeData1}
        style={{zIndex: 999}}
        onSelect={(_, index) => setValue1(index)}
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
        data={fakeData1}
        style={{zIndex: 998}}
        onSelect={(_, index) => setValue2(index)}
        selectedIndex={value2}
        isRightElemAnimated={false}
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
        data={fakeDate2}
        style={{zIndex: 997}}
        onSelect={(_, index) => setValue3(index)}
        selectedIndex={value3}
        rightElement={null}
      />
    </Container>
  );
};

export default SelectBoxStory;
