// Caveat: Expo web needs React to be imported
import React, {useState} from 'react';
import {View} from 'react-native';
import {boolean} from '@storybook/addon-knobs';

import {Checkbox, Typography} from '../../../main';
import {ScrollContainer, StoryContainer, StoryTitle} from '../../GlobalStyles';
import {checkboxColors} from '../const';

function LabelWrapper({
  label,
  children,
}: {
  label: string;
  children: JSX.Element;
}): JSX.Element {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <>
        {children}
        <Typography.Body1>{label}</Typography.Body1>
      </>
    </View>
  );
}

function Checkboxes({
  setChecked,
  checked,
}: {
  setChecked: (checked: boolean) => void;
  checked: boolean;
}): JSX.Element {
  return (
    <View style={{flexWrap: 'wrap'}}>
      {checkboxColors.map((color, i) => (
        <LabelWrapper key={`${color}_${i}`} label={color}>
          <Checkbox
            checked={checked}
            color={color}
            disabled={boolean('disabled', false)}
            onPress={() => setChecked(!checked)}
            style={{margin: 12, width: 24}}
          />
        </LabelWrapper>
      ))}

      <LabelWrapper label="disabled">
        <Checkbox
          checked={boolean('checked', checked)}
          disabled={boolean('disabled', false)}
          onPress={() => setChecked(!checked)}
          style={{margin: 12, width: 24}}
        />
      </LabelWrapper>
    </View>
  );
}

function CheckboxBasicStory(): JSX.Element {
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
        <Checkboxes checked={checked} setChecked={setChecked} />
      </StoryContainer>
    </ScrollContainer>
  );
}

export default CheckboxBasicStory;
