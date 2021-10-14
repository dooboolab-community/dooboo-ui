import React, {FC} from 'react';
import {ThemeProvider, ThemeType, useTheme} from '@dooboo-ui/theme';

import {RadioGroup} from 'dooboo-ui';
import {View} from 'react-native';

const data = ['one', 'two', 'three', 'four'];

const RadioGroupStory: FC = () => {
  const {theme} = useTheme();

  return (
    <View
      style={{
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        backgroundColor: theme.background,
        padding: 15,
      }}
    >
      <RadioGroup data={data} selectedValue={data[0]} />
    </View>
  );
};

export const Basic: FC<{theme: ThemeType}> = ({theme}) => (
  <ThemeProvider initialThemeType={theme}>
    <RadioGroupStory />
  </ThemeProvider>
);
