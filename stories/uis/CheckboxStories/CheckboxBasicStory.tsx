import {Checkbox, Typography} from '../../../main';
import type {FC, ReactElement, ReactNode} from 'react';
// Caveat: Expo web needs React to be imported
import React, {useState} from 'react';
import {ScrollContainer, StoryContainer, StoryTitle} from '../../GlobalStyles';

import {View} from 'react-native';
import {boolean} from '@storybook/addon-knobs';
import {checkboxColors} from '../const';

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
    {checkboxColors.map((color, i) => (
      <LabelWrapper key={`${color}_${i}`} label={color}>
        <Checkbox
          style={{margin: 25}}
          checked={checked}
          disabled={boolean('disabled', false)}
          onPress={() => setChecked(!checked)}
          color={color}
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
