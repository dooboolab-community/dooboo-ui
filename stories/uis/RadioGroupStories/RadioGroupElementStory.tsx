// Caveat: Expo web needs React to be imported
import React, {useState} from 'react';
import {View} from 'react-native';

import {RadioGroup} from '../../../main';
import type {RadioButtonType} from '../../../main/uis/RadioGroup';
import {ScrollContainer, StoryContainer, StoryTitle} from '../../GlobalStyles';

const types = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];
const data = ['Person', 'Animal', 'Bird', 'Other'];

function RadioButtonElementStory(): JSX.Element {
  const [selectedValue, setSelectedValue] = useState<string>(data[0]);

  return (
    <ScrollContainer>
      <StoryContainer>
        <StoryTitle>Element</StoryTitle>
        {types.map((el, i) => {
          return (
            <View
              key={`${el}-${i}`}
              style={{flexDirection: 'row', marginTop: 24}}
            >
              <RadioGroup
                data={data}
                labels={data}
                selectValue={(value) => setSelectedValue(value)}
                selectedValue={selectedValue}
                title={el}
                type={el as RadioButtonType}
              />
            </View>
          );
        })}
      </StoryContainer>
    </ScrollContainer>
  );
}

export default RadioButtonElementStory;
