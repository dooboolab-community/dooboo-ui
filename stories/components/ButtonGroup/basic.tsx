import React from 'react';
import {useTheme} from '@dooboo-ui/theme';
import {SafeAreaView, ScrollView} from 'react-native';
import SingleSelect from './components/SingleSelect';
import CustomData from './components/CustomData';
import Vertical from './components/Vertical';
import CustomButton from './components/CustomButton';

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
