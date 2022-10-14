import type {FC} from 'react';
import {useState} from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
import {ThemeProvider, useTheme} from '@dooboo-ui/theme';

import {RadioGroup} from 'dooboo-ui';
import {View} from 'react-native';

const data = ['one', 'two', 'three', 'four'];

const RadioGroupStory: FC = () => {
  const {theme} = useTheme();
  const [curValue, setCurValue] = useState<string>(data[0]);

  return (
    <View
      style={{
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        backgroundColor: theme.bg.default,
        padding: 15,
      }}
    >
      <RadioGroup
        title="Title"
        data={data}
        selectedValue={curValue}
        selectValue={setCurValue}
      />
    </View>
  );
};

export const WithTitle: FC<{theme: ThemeType}> = ({theme}) => (
  <ThemeProvider initialThemeType={theme}>
    <RadioGroupStory />
  </ThemeProvider>
);
