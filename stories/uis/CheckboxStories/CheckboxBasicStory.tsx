import {Checkbox, Typography} from '../../../main';
import type {FC, ReactElement, ReactNode} from 'react';
// Caveat: Expo web needs React to be imported
import React, {useState} from 'react';
import {ScrollContainer, StoryContainer, StoryTitle} from '../../GlobalStyles';

import type {CheckboxColor} from '../../../main';
import {View} from 'react-native';
import {boolean} from '@storybook/addon-knobs';

const types: CheckboxColor[] = [
  'primary',
  'secondary',
  'success',
  'warning',
  'info',
  'danger',
];

const LabelWrapper: FC<{
  label: string;
  children: ReactNode;
}> = ({label, children}) => (
  <View
    style={{
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <>
      <Typography.Body1>{label}</Typography.Body1>
      {children}
    </>
  </View>
);

type CheckBoxProps = {
  setChecked: (checked: boolean) => void;
  checked: boolean;
};

const Checkboxes: FC<CheckBoxProps> = ({setChecked, checked}) => (
  <View
    style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    }}
  >
    {types.map((type, i) => (
      <LabelWrapper key={`${type}_${i}`} label={type}>
        <Checkbox
          style={{margin: 25}}
          checked={checked}
          disabled={boolean('disabled', false)}
          onPress={() => setChecked(!checked)}
          color={type}
        />
      </LabelWrapper>
    ))}

    <LabelWrapper label="disabled">
      <Checkbox
        style={{margin: 25}}
        checked={boolean('checked', checked)}
        disabled={boolean('disabled', false)}
        onPress={() => setChecked(!checked)}
      />
    </LabelWrapper>
  </View>
);

function CheckboxBasicStory(): ReactElement {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <ScrollContainer
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <StoryContainer>
        <StoryTitle>Basic</StoryTitle>
        <Checkboxes setChecked={setChecked} checked={checked} />
      </StoryContainer>
    </ScrollContainer>
  );
}

export default CheckboxBasicStory;
