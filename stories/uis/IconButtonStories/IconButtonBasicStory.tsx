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
            loading={boolean('loading', false)}
            onPress={action('onPress')}
            size={number('size', 14)}
            key={type}
            type={type}
            icon="Hamburger"
            style={css`
              margin: 4px;
            `}
            // styles={{
            //   container: css`
            //     padding: 4px;
            //   `,
            // }}
          />
        ))}
      </StorySection>
    </StoryContainer>
  );
}

export default IconButtonBasicStory;
