// Caveat: Expo web needs React to be imported
import React, {useState} from 'react';
import {ScrollContainer, StoryContainer, StoryTitle} from '../../GlobalStyles';

import type {ReactElement} from 'react';
import {SwitchToggle} from '../../../main';
import {View} from 'react-native';
import {number} from '@storybook/addon-knobs';
import {useTheme} from '@dooboo-ui/theme';

function SwitchToggleBasic(): ReactElement {
  const [on, off] = useState<boolean>(false);
  const {theme} = useTheme();

  return (
    <ScrollContainer>
      <StoryContainer>
        <StoryTitle>Basic</StoryTitle>
        <SwitchToggle isOn={on} onPress={() => off(!on)} />

        <View style={{height: 40}} />
        <StoryTitle>Custom</StoryTitle>
        <SwitchToggle
          isOn={on}
          onPress={() => off(!on)}
          duration={number('duration', 500)}
          styles={{
            circleColorOff: theme.text.disabled,
            circleColorOn: theme.text.basic,
            backgroundColorOn: theme.bg.paper,
            backgroundColorOff: theme.bg.disabled,
          }}
        />

        <View style={{height: 40}} />
        <StoryTitle>Size</StoryTitle>
        <SwitchToggle
          isOn={on}
          onPress={() => off(!on)}
          styles={{
            container: {
              width: 106,
              height: 48,
              borderRadius: 25,
              padding: 5,
            },
            circle: {
              width: 40,
              height: 40,
              borderRadius: 20,
            },
          }}
        />
      </StoryContainer>
    </ScrollContainer>
  );
}

export default SwitchToggleBasic;
