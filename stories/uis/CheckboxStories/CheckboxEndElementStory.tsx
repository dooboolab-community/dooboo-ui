// Caveat: Expo web needs React to be imported
import React, {useState} from 'react';
import {View} from 'react-native';
import {boolean} from '@storybook/addon-knobs';

import {Checkbox, Typography} from '../../../main';
import {ScrollContainer, StoryContainer, StoryTitle} from '../../GlobalStyles';

type CheckBoxProps = {
  setChecked: (checked: boolean) => void;
  checked: boolean;
};

function CheckboxWithEndElementStory({
  setChecked,
  checked,
}: CheckBoxProps): JSX.Element {
  return (
    <View style={{flexDirection: 'column'}}>
      {[1, 2, 3].map((i) => (
        <Checkbox
          checked={checked}
          disabled={boolean('disabled', false)}
          endElement={
            <Typography.Body2>Hello this is a checkbox</Typography.Body2>
          }
          key={i}
          onPress={() => setChecked(!checked)}
        />
      ))}
    </View>
  );
}

function CheckboxEndElement(): JSX.Element {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <ScrollContainer
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <StoryContainer>
        <StoryTitle>End Element</StoryTitle>
        <CheckboxWithEndElementStory
          checked={checked}
          setChecked={setChecked}
        />
      </StoryContainer>
    </ScrollContainer>
  );
}

export default CheckboxEndElement;
