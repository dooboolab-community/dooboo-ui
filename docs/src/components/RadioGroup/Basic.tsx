import {RadioGroup} from 'dooboo-ui';

import type {ReactElement} from 'react';
import {View} from 'react-native';
import {useState} from 'react';
import {StoryProvider} from './index';

const data = ['one', 'two', 'three', 'four'];

export default function Basic(): ReactElement {
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
          data={data}
          selectedValue={curValue}
          selectValue={setCurValue}
        />
      </View>
    </StoryProvider>
  );
}
