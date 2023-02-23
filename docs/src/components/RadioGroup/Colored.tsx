import {RadioGroup} from 'dooboo-ui';

import type {ReactElement} from 'react';
import {View} from 'react-native';
import {useState} from 'react';
import {StoryProvider} from './index';

const data = ['one', 'two', 'three', 'four'];

export default function Colored(): ReactElement {
  const [curValue, setCurValue] = useState<string>(data[0]);

  return (
    <StoryProvider>
      <View
        style={{
          flex: 1,
          alignSelf: 'stretch',
          alignItems: 'center',
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
    </StoryProvider>
  );
}
