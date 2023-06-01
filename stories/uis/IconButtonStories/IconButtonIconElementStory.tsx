import type {ReactElement} from 'react';
// Caveat: Expo web needs React to be imported
import React from 'react';
import {action} from '@storybook/addon-actions';
import {boolean, number} from '@storybook/addon-knobs';

import {Icon, IconButton} from '../../../main';
import {StoryContainer, StorySection, StoryTitle} from '../../GlobalStyles';

function IconButtonIconElementStory(): ReactElement {
  return (
    <StoryContainer>
      <StoryTitle>IconElement</StoryTitle>
      <StorySection>
        <IconButton
          disabled={boolean('disabled', false)}
          activeOpacity={number('activeOpacity', 0.8)}
          loading={boolean('loading', false)}
          onPress={action('onPress')}
          iconElement={<Icon size={24} color="pink" name="MagnifyingGlass" />}
        />
      </StorySection>
    </StoryContainer>
  );
}

export default IconButtonIconElementStory;
