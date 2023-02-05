import {DoobooProvider, RadioGroup, useDooboo} from 'dooboo-ui';

import type {ReactElement} from 'react';
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
        data={data}
        selectedValue={curValue}
        selectValue={setCurValue}
      />
    </View>
  );
}

export function Basic({theme}): ReactElement {
  return (
    <DoobooProvider themeConfig={{initialThemeType: theme}}>
      <RadioGroupStory />
    </DoobooProvider>
  );
}
