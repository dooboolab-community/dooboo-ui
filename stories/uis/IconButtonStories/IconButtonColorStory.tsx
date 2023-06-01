import type {ReactElement} from 'react';
// Caveat: Expo web needs React to be imported
import React from 'react';
import {action} from '@storybook/addon-actions';
import {boolean, number} from '@storybook/addon-knobs';

import type {ButtonColorType} from '../../../main';
import {IconButton} from '../../../main';
import {StoryContainer, StorySection, StoryTitle} from '../../GlobalStyles';

function IconButtonColorStory(): ReactElement {
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
            disabled={boolean('disabled', false)}
            activeOpacity={number('activeOpacity', 0.8)}
            loading={boolean('loading', false)}
            onPress={action('onPress')}
            key={color}
            color={color}
            size="small"
            icon="Eraser"
            style={{margin: 4}}
          />
        ))}
      </StorySection>
    </StoryContainer>
  );
}

export default IconButtonColorStory;
