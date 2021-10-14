import React, {FC} from 'react';
import {ThemeProvider, ThemeType, useTheme} from '@dooboo-ui/theme';

import {RadioGroup} from 'dooboo-ui';
import {View} from 'react-native';

const data = ['one', 'two', 'three', 'four'];

const RadioGroupStory: FC = () => {
  const {theme} = useTheme();
  const selectedValue = data[0];

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
      <RadioGroup
        title="Primary"
        type="primary"
        data={data}
        selectedValue={selectedValue}
      />
      <RadioGroup
        title="Secondary"
        type="secondary"
        data={data}
        selectedValue={selectedValue}
      />
      <RadioGroup
        title="Success"
        type="success"
        data={data}
        selectedValue={selectedValue}
      />
      <RadioGroup
        title="Warning"
        type="warning"
        data={data}
        selectedValue={selectedValue}
      />

      <RadioGroup
        title="Info"
        type="info"
        data={data}
        selectedValue={selectedValue}
      />
      <RadioGroup
        title="Danger"
        type="danger"
        data={data}
        selectedValue={selectedValue}
      />
    </View>
  );
};

export const Colored: FC<{theme: ThemeType}> = ({theme}) => (
  <ThemeProvider initialThemeType={theme}>
    <RadioGroupStory />
  </ThemeProvider>
);
