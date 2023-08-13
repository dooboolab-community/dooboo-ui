// Caveat: Expo web needs React to be imported
import React from 'react';
import {action} from '@storybook/addon-actions';
import {boolean, number} from '@storybook/addon-knobs';

import type {ButtonType} from '../../../main';
import {IconButton} from '../../../main';
import {StoryContainer, StorySection, StoryTitle} from '../../GlobalStyles';

function IconButtonDisabledStory(): JSX.Element {
  const types: ButtonType[] = ['text', 'solid', 'outlined'];

  return (
    <StoryContainer>
      <StoryTitle>Disabled</StoryTitle>
      <StorySection>
        {types.map((type) => (
          <IconButton
            activeOpacity={number('activeOpacity', 0.8)}
            loading={boolean('loading', false)}
            onPress={action('onPress')}
            key={type}
            type={type}
            disabled
            icon="Hamburger"
            style={{margin: 4}}
          />
        ))}
      </StorySection>
    </StoryContainer>
  );
}

export default IconButtonDisabledStory;
