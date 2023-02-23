import {RadioGroup} from 'dooboo-ui';
import React, {useState} from 'react';

import type {ReactElement} from 'react';
import {View} from 'react-native';
import {StoryProvider} from './index';

const data = ['one', 'two', 'three', 'four'];
const labels = ['One', 'Two', 'Three', 'Four'];

export default function SelectValue(): ReactElement {
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
          title="Primary"
          type="primary"
          data={data}
          labels={labels}
          selectedValue={selectedValue}
          selectValue={(value) => setSelectedValue(value)}
          styles={{container: {paddingBottom: 5}}}
        />
        <RadioGroup
          title="Secondary"
          type="secondary"
          data={data}
          labels={labels}
          selectedValue={selectedValue}
          selectValue={(value) => setSelectedValue(value)}
          styles={{container: {paddingBottom: 5}}}
        />
        <RadioGroup
          title="Success"
          type="success"
          data={data}
          labels={labels}
          selectedValue={selectedValue}
          selectValue={(value) => setSelectedValue(value)}
          styles={{container: {paddingBottom: 5}}}
        />
        <RadioGroup
          title="Warning"
          type="warning"
          data={data}
          labels={labels}
          selectedValue={selectedValue}
          selectValue={(value) => setSelectedValue(value)}
          styles={{container: {paddingBottom: 5}}}
        />

        <RadioGroup
          title="Info"
          type="info"
          data={data}
          labels={labels}
          selectedValue={selectedValue}
          selectValue={(value) => setSelectedValue(value)}
          styles={{container: {paddingBottom: 5}}}
        />
        <RadioGroup
          title="Danger"
          type="danger"
          data={data}
          labels={labels}
          selectedValue={selectedValue}
          selectValue={(value) => setSelectedValue(value)}
          styles={{container: {paddingBottom: 5}}}
        />
      </View>
    </StoryProvider>
  );
}
