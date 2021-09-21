import {RadioGroup, ThemeProvider, ThemeType, useTheme} from 'dooboo-ui';
import React, {FC} from 'react';
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
      <RadioGroup title="Title" data={data} selectedValue={data[0]} />
    </View>
  );
};

export const WithTitle: FC<{theme: ThemeType}> = ({theme}) => (
  <ThemeProvider initialThemeType={theme}>
    <RadioGroupStory />
  </ThemeProvider>
);
