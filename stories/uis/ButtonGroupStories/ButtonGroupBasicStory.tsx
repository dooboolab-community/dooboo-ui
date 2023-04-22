// Caveat: Expo web needs React to be imported
import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {useTheme} from '@dooboo-ui/theme';

import CustomButton from './common/CustomButton';
import CustomData from './common/CustomData';
import SingleSelect from './common/SingleSelect';
import Vertical from './common/Vertical';

const ButtonGroupBasic = (): React.ReactElement => {
  const {theme} = useTheme();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.bg.basic}}>
      <ScrollView contentContainerStyle={{flexDirection: 'column'}}>
        <SingleSelect />
        <Vertical />
        <CustomData />
        <CustomButton />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ButtonGroupBasic;
