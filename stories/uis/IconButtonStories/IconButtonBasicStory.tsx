// Caveat: Expo web needs React to be imported
import React from 'react';
import {css} from '@emotion/native';
import {action} from '@storybook/addon-actions';
import {boolean, number} from '@storybook/addon-knobs';

import type {ButtonType} from '../../../main';
import {IconButton} from '../../../main';
import {StoryContainer, StorySection, StoryTitle} from '../../GlobalStyles';

function IconButtonBasicStory(): JSX.Element {
  const types: ButtonType[] = ['text', 'solid', 'outlined'];

  return (
    <StoryContainer>
      <StoryTitle>Basic</StoryTitle>
      <StorySection>
        {types.map((type) => (
          <IconButton
            disabled={boolean('disabled', false)}
            icon="Hamburger"
            key={type}
            loading={boolean('loading', false)}
            onPress={action('onPress')}
            size={number('size', 14)}
            style={css`
              margin: 4px;
            `}
            type={type}
          />
        ))}
      </StorySection>
    </StoryContainer>
  );
}

export default IconButtonBasicStory;
