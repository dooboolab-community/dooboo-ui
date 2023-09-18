// Caveat: Expo web needs React to be imported
import React from 'react';
import {action} from '@storybook/addon-actions';
import {boolean, number} from '@storybook/addon-knobs';

import {Icon, IconButton} from '../../../main';
import {StoryContainer, StorySection, StoryTitle} from '../../GlobalStyles';

function IconButtonIconElementStory(): JSX.Element {
  return (
    <StoryContainer>
      <StoryTitle>IconElement</StoryTitle>
      <StorySection>
        <IconButton
          activeOpacity={number('activeOpacity', 0.8)}
          disabled={boolean('disabled', false)}
          iconElement={<Icon color="pink" name="MagnifyingGlass" size={24} />}
          loading={boolean('loading', false)}
          onPress={action('onPress')}
        />
      </StorySection>
    </StoryContainer>
  );
}

export default IconButtonIconElementStory;
