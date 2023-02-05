import {DoobooProvider, RadioGroup, useDooboo} from 'dooboo-ui';
import React, {useState} from 'react';

import type {ReactElement} from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
import {View} from 'react-native';

const data = ['one', 'two', 'three', 'four'];
const labels = ['One', 'Two', 'Three', 'Four'];

function RadioGroupStory(): ReactElement {
  const [selectedValue, setSelectedValue] = useState<string>(data[0]);
  const {theme} = useDooboo();

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
  );
}

export function SelectValue({theme}: {theme: ThemeType}): ReactElement {
  return (
    <DoobooProvider themeConfig={{initialThemeType: theme}}>
      <RadioGroupStory />
    </DoobooProvider>
  );
}
