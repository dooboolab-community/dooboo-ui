import {DoobooProvider, RadioGroup, useDooboo} from 'dooboo-ui';

import type {ReactElement} from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
import {View} from 'react-native';
import {useState} from 'react';

const data = ['one', 'two', 'three', 'four'];

function RadioGroupStory(): ReactElement {
  const {theme} = useDooboo();
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
        title="Title"
        data={data}
        selectedValue={curValue}
        selectValue={setCurValue}
      />
    </View>
  );
}

type WithTitleProps = {theme: ThemeType};

export function WithTitle({theme}: WithTitleProps): ReactElement {
  return (
    <DoobooProvider themeConfig={{initialThemeType: theme}}>
      <RadioGroupStory />
    </DoobooProvider>
  );
}
