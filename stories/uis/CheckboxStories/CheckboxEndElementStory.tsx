import {Checkbox, Typography} from '../../../main';
import type {FC, ReactElement} from 'react';
// Caveat: Expo web needs React to be imported
import React, {useState} from 'react';
import {ScrollContainer, StoryContainer, StoryTitle} from '../../GlobalStyles';

import {View} from 'react-native';
import {boolean} from '@storybook/addon-knobs';

type CheckBoxProps = {
  setChecked: (checked: boolean) => void;
  checked: boolean;
};

const CheckboxWithEndElementStory: FC<CheckBoxProps> = ({
  setChecked,
  checked,
}) => (
  <View style={{flexDirection: 'column'}}>
    {[1, 2, 3].map((i) => (
      <Checkbox
        key={i}
        checked={checked}
        disabled={boolean('disabled', false)}
        onPress={() => setChecked(!checked)}
        endElement={
          <Typography.Body2>Hello this is a checkbox</Typography.Body2>
        }
      />
    ))}
  </View>
);

function CheckboxEndElement(): ReactElement {
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
          setChecked={setChecked}
          checked={checked}
        />
      </StoryContainer>
    </ScrollContainer>
  );
}

export default CheckboxEndElement;
