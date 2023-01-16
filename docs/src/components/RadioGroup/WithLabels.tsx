import type {FC} from 'react';
import {useState} from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
import {ThemeProvider, useTheme} from '@dooboo-ui/theme';

import {RadioGroup} from 'dooboo-ui';
import {View} from 'react-native';

const data = ['one', 'two', 'three', 'four'];
const labels = ['One', 'Two', 'Three', 'Four'];

const RadioGroupStory: FC<{labelPosition: 'left' | 'right'}> = ({
  labelPosition,
}) => {
  const {theme} = useTheme();
  const [curValue, setCurValue] = useState<string>(data[0]);

  return (
    <View
      style={{
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        backgroundColor: theme.bg.basic,
        padding: 15,
      }}
    >
      <RadioGroup
        data={data}
        labels={labels}
        labelPosition={labelPosition}
        selectedValue={curValue}
        selectValue={setCurValue}
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
