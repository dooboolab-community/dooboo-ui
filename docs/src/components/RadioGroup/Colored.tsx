import type {ReactElement} from 'react';
import {useState} from 'react';
import {View} from 'react-native';
import type {RadioButtonType} from 'dooboo-ui';
import {RadioGroup} from 'dooboo-ui';

import {StoryProvider} from './index';

const data = ['one', 'two', 'three', 'four'];

export default function Colored(): ReactElement {
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
            selectedValue={selectedValue}
            selectValue={setSelectedValue}
          />
        ))}
      </View>
    </StoryProvider>
  );
}
