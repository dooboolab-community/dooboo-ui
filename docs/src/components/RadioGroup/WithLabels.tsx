import {DoobooProvider, RadioGroup, useDooboo} from 'dooboo-ui';

import type {ReactElement} from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
import {View} from 'react-native';
import {useState} from 'react';

const data = ['one', 'two', 'three', 'four'];
const labels = ['One', 'Two', 'Three', 'Four'];

type RadioGroupStoryProps = {labelPosition: 'left' | 'right'};

function RadioGroupStory({labelPosition}: RadioGroupStoryProps): ReactElement {
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
        labels={labels}
        labelPosition={labelPosition}
        selectedValue={curValue}
        selectValue={setCurValue}
      />
    </View>
  );
}

type WithLabelsProps = {theme: ThemeType; labelPosition: 'left' | 'right'};

export function WithLabels({
  theme,
  labelPosition,
}: WithLabelsProps): ReactElement {
  return (
    <DoobooProvider themeConfig={{initialThemeType: theme}}>
      <RadioGroupStory labelPosition={labelPosition} />
    </DoobooProvider>
  );
}
