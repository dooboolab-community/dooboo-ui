// Caveat: Expo web needs React to be imported
import React, {useState} from 'react';
import {View} from 'react-native';
import {useTheme} from '@dooboo-ui/theme';
import {number} from '@storybook/addon-knobs';

import {SwitchToggle} from '../../../main';
import {ScrollContainer, StoryContainer, StoryTitle} from '../../GlobalStyles';

function SwitchToggleBasicStory(): JSX.Element {
  const [on, off] = useState<boolean>(false);
  const {theme} = useTheme();

  return (
    <StoryContainer>
      <StoryTitle>Basic</StoryTitle>
      <ScrollContainer>
        <SwitchToggle isOn={on} onPress={() => off(!on)} />

        <View style={{height: 40}} />
        <StoryTitle>Custom</StoryTitle>
        <SwitchToggle
          duration={number('duration', 500)}
          isOn={on}
          onPress={() => off(!on)}
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
      </ScrollContainer>
    </StoryContainer>
  );
}

export default SwitchToggleBasicStory;
