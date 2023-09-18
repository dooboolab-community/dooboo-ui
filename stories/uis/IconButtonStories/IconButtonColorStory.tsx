// Caveat: Expo web needs React to be imported
import React from 'react';
import {action} from '@storybook/addon-actions';
import {boolean, number} from '@storybook/addon-knobs';

import type {ButtonColorType} from '../../../main';
import {IconButton} from '../../../main';
import {StoryContainer, StorySection, StoryTitle} from '../../GlobalStyles';

function IconButtonColorStory(): JSX.Element {
  const colors: ButtonColorType[] = [
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'info',
    'light',
  ];

  return (
    <StoryContainer>
      <StoryTitle>Color</StoryTitle>
      <StorySection>
        {colors.map((color) => (
          <IconButton
            activeOpacity={number('activeOpacity', 0.8)}
            color={color}
            disabled={boolean('disabled', false)}
            icon="Eraser"
            key={color}
            loading={boolean('loading', false)}
            onPress={action('onPress')}
            size="small"
            style={{margin: 4}}
          />
        ))}
      </StorySection>
    </StoryContainer>
  );
}

export default IconButtonColorStory;
