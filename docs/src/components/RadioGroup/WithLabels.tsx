import {RadioGroup} from 'dooboo-ui';

import type {ReactElement} from 'react';
import {View} from 'react-native';
import {useState} from 'react';
import {StoryProvider} from './index';

const data = ['one', 'two', 'three', 'four'];
const labels = ['One', 'Two', 'Three', 'Four'];

type WithLabelsProps = {labelPosition: 'left' | 'right'};

export default function WithLabels({
  labelPosition,
}: WithLabelsProps): ReactElement {
  const [selectedValue, setSelectedValue] = useState<string>(data[0]);

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
          labels={labels}
          labelPosition={labelPosition}
          selectedValue={selectedValue}
          selectValue={setSelectedValue}
        />
      </View>
    </StoryProvider>
  );
}
