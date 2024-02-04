// Caveat: Expo web needs React to be imported
import type {ComponentProps} from 'react';
import React, {useState} from 'react';
import {View} from 'react-native';

import {RadioGroup} from '../../../main';
import {ScrollContainer, StoryContainer} from '../../GlobalStyles';

function RadioButtonBasicStory({
  type,
  data = [],
  title,
}: ComponentProps<typeof RadioGroup>): JSX.Element {
  // @ts-ignore
  const [selectedValue, setSelectedValue] = useState<string>(data?.[0]);

  return (
    <StoryContainer>
      <ScrollContainer>
        <View style={{flexDirection: 'row', marginTop: 24}}>
          <RadioGroup
            data={data}
            selectValue={(value) =>
              setSelectedValue(value as unknown as string)
            }
            selectedValue={selectedValue}
            title={title}
            type={type}
          />
        </View>
      </ScrollContainer>
    </StoryContainer>
  );
}

export default RadioButtonBasicStory;
