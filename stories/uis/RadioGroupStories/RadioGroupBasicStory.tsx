// Caveat: Expo web needs React to be imported
import React, {useState} from 'react';
import {ScrollContainer, StoryContainer, StoryTitle} from '../../GlobalStyles';

import type {RadioButtonType} from '../../../main/uis/RadioGroup';
import {RadioGroup} from '../../../main';
import type {ReactElement} from 'react';
import {View} from 'react-native';

const types = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];
const data = ['Person', 'Animal', 'Bird', 'Other'];

function RadioButtonBasicStory(): ReactElement {
  const [selectedValue, setSelectedValue] = useState<string>(data[0]);

  return (
    <ScrollContainer>
      <StoryContainer>
        <StoryTitle>Basic</StoryTitle>
        {types.map((el, i) => {
          return (
            <View
              key={`${el}-${i}`}
              style={{flexDirection: 'row', marginTop: 24}}
            >
              <RadioGroup
                title={el}
                data={data}
                type={el as RadioButtonType}
                selectedValue={selectedValue}
                selectValue={(value) => setSelectedValue(value)}
              />
            </View>
          );
        })}
      </StoryContainer>
    </ScrollContainer>
  );
}

export default RadioButtonBasicStory;
