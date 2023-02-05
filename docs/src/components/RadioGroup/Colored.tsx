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
        title="Primary"
        type="primary"
        data={data}
        selectedValue={curValue}
        selectValue={setCurValue}
      />
      <RadioGroup
        title="Secondary"
        type="secondary"
        data={data}
        selectedValue={curValue}
        selectValue={setCurValue}
      />
      <RadioGroup
        title="Success"
        type="success"
        data={data}
        selectedValue={curValue}
        selectValue={setCurValue}
      />
      <RadioGroup
        title="Warning"
        type="warning"
        data={data}
        selectedValue={curValue}
        selectValue={setCurValue}
      />

      <RadioGroup
        title="Info"
        type="info"
        data={data}
        selectedValue={curValue}
        selectValue={setCurValue}
      />
      <RadioGroup
        title="Danger"
        type="danger"
        data={data}
        selectedValue={curValue}
        selectValue={setCurValue}
      />
    </View>
  );
}

export function Colored({theme}): ReactElement {
  return (
    <DoobooProvider themeConfig={{initialThemeType: theme}}>
      <RadioGroupStory />
    </DoobooProvider>
  );
}
