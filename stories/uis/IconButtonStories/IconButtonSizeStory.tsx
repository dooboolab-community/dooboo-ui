// Caveat: Expo web needs React to be imported
import React from 'react';
import {action} from '@storybook/addon-actions';
import {boolean, number} from '@storybook/addon-knobs';

import type {ButtonSizeType} from '../../../main';
import {IconButton} from '../../../main';
import {StoryContainer, StorySection, StoryTitle} from '../../GlobalStyles';

function IconButtonSizeStory(): JSX.Element {
  const sizes: ButtonSizeType[] = ['small', 'medium', 'large'];

  return (
    <StoryContainer>
      <StoryTitle>Sizes</StoryTitle>
      <StorySection>
        {sizes.map((size) => (
          <IconButton
            activeOpacity={number('activeOpacity', 0.8)}
            disabled={boolean('disabled', false)}
            icon="MagnifyingGlass"
            key={size}
            loading={boolean('loading', false)}
            onPress={action('onPress')}
            size={size}
            style={{margin: 4}}
          />
        ))}
      </StorySection>
    </StoryContainer>
  );
}

export default IconButtonSizeStory;
