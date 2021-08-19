import React, {FC} from 'react';

import {SelectBox} from '../../../main/SelectBox';
import {View} from 'react-native';
import styled from '@emotion/native';
import {useFonts} from 'expo-font';
import {useTheme} from '../../../main';

const data = ['Item1', 'Item2', 'Item3', 'Item4'];

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Divider = styled.View`
  width: 50px;
`;

const SelectBoxStory: FC = () => {
  const {theme} = useTheme();

  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../../main/Icon/doobooui.ttf'),
  });

  if (!fontsLoaded) return <View />;

  return (
    <Container>
      <SelectBox
        data={data}
        styles={{
          titleContainer: {
            backgroundColor: theme.success,
            borderWidth: 0,
            borderRadius: 40,
            height: 40,
          },
          itemContainer: {
            borderWidth: 0,
            backgroundColor: theme.paper,
          },
          rightElementContainer: {
            right: 15,
          },
        }}
        itemHeight={40}
      />
      <Divider />
      <SelectBox data={data} hasRightElement={false} />
      <Divider />
      <SelectBox
        data={data}
        isRotate={false}
        styles={{
          titleContainer: {
            backgroundColor: theme.info,
            borderWidth: 0,
          },
          itemContainer: {
            backgroundColor: theme.secondary,
            borderWidth: 0,
          },
        }}
      />
    </Container>
  );
};

export default SelectBoxStory;
