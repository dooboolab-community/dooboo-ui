import type {RadioButtonType} from 'dooboo-ui';
import {RadioGroup} from 'dooboo-ui';
import React, {useState} from 'react';

import type {ReactElement} from 'react';
import {View} from 'react-native';
import {StoryProvider} from './index';

const data = ['one', 'two', 'three', 'four'];
const labels = ['One', 'Two', 'Three', 'Four'];

export default function SelectValue(): ReactElement {
  const [selectedValue, setSelectedValue] = useState<string>(data[0]);

  const colors: RadioButtonType = [
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'info',
    'light',
  ];

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
        {colors.map((color) => (
          <RadioGroup
            title={color}
            type={color}
            data={data}
            labels={labels}
            selectedValue={selectedValue}
            selectValue={(value) => setSelectedValue(value)}
            styles={{container: {paddingBottom: 5}}}
          />
        ))}
      </View>
    </StoryProvider>
  );
}
