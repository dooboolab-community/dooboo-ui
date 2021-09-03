import {RadioGroup, ThemeProvider, ThemeType, useTheme} from 'dooboo-ui';
import React, {FC} from 'react';
import {View} from 'react-native';

const data = ['one', 'two', 'three', 'four'];
const labels = ['One', 'Two', 'Three', 'Four'];

const RadioGroupStory: FC<{labelPosition: 'left' | 'right'}> = ({
  labelPosition,
}) => {
  const {theme} = useTheme();

  return (
    <View
      style={{
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        backgroundColor: theme.background,
        padding: 15,
      }}>
      <RadioGroup
        data={data}
        labels={labels}
        selectedValue={data[0]}
        labelPosition={labelPosition}
      />
    </View>
  );
};

export const WithLabels: FC<{
  theme: ThemeType;
  labelPosition: 'left' | 'right';
}> = ({theme, labelPosition}) => (
  <ThemeProvider initialThemeType={theme}>
    <RadioGroupStory labelPosition={labelPosition} />
  </ThemeProvider>
);
