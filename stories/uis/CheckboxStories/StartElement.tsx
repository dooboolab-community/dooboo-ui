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

const CheckboxWithStartElement: FC<CheckBoxProps> = ({setChecked, checked}) => (
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

function CheckboxStartElement(): ReactElement {
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
        <CheckboxWithStartElement setChecked={setChecked} checked={checked} />
      </StoryContainer>
    </ScrollContainer>
  );
}

export default CheckboxStartElement;
