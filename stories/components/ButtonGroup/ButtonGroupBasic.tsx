import {SafeAreaView, ScrollView} from 'react-native';

import CustomButton from './components/CustomButton';
import CustomData from './components/CustomData';
import React from 'react';
import SingleSelect from './components/SingleSelect';
import Vertical from './components/Vertical';
import {useTheme} from '@dooboo-ui/theme';

const ButtonGroupBasic = (): React.ReactElement => {
  const {theme} = useTheme();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.bg.basic}}>
      <ScrollView
        contentContainerStyle={{
          paddingVertical: 40,
          flexDirection: 'column',
        }}
      >
        <SingleSelect />
        <Vertical />
        <CustomData />
        <CustomButton />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ButtonGroupBasic;
