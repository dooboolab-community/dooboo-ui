// Caveat: Expo web needs React to be imported
import React, {useState} from 'react';
import {View} from 'react-native';
import {boolean} from '@storybook/addon-knobs';

import {Checkbox, Typography} from '../../../main';
import {ScrollContainer, StoryContainer, StoryTitle} from '../../GlobalStyles';

function CheckboxWithStartElementStory({
  setChecked,
  checked,
}: {
  setChecked: (checked: boolean) => void;
  checked: boolean;
}): JSX.Element {
  return (
    <View style={{flexDirection: 'column'}}>
      {[1, 2, 3].map((i) => (
        <Checkbox
          key={i}
          checked={checked}
          disabled={boolean('disabled', false)}
          onPress={() => setChecked(!checked)}
          startElement={
            <Typography.Body2>Hello this is a checkbox</Typography.Body2>
          }
        />
      ))}
    </View>
  );
}

function CheckboxStartElement(): JSX.Element {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <ScrollContainer
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <StoryContainer>
        <StoryTitle>Start Element</StoryTitle>
        <CheckboxWithStartElementStory
          setChecked={setChecked}
          checked={checked}
        />
      </StoryContainer>
    </ScrollContainer>
  );
}

export default CheckboxStartElement;
