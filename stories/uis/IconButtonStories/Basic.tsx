import {StoryContainer, StorySection, StoryTitle} from '../../GlobalStyles';
import {boolean, number} from '@storybook/addon-knobs';

import type {ButtonType} from '../../../main';
import {IconButton} from '../../../main';
// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';
import {action} from '@storybook/addon-actions';

function Basic(): ReactElement {
  const types: ButtonType[] = ['text', 'solid', 'outlined'];

  return (
    <StoryContainer>
      <StoryTitle>Basic</StoryTitle>
      <StorySection>
        {types.map((type) => (
          <IconButton
            disabled={boolean('disabled', false)}
            activeOpacity={number('activeOpacity', 0.8)}
            loading={boolean('loading', false)}
            onPress={action('onPress')}
            key={type}
            type={type}
            icon="tile-light"
            style={{margin: 4}}
          />
        ))}
      </StorySection>
    </StoryContainer>
  );
}

export default Basic;
