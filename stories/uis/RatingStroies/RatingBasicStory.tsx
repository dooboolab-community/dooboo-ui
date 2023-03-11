import {StoryContainer, StorySection, StoryTitle} from '../../GlobalStyles';
import {boolean, number, select, text} from '@storybook/addon-knobs';

import Rating from '../../../main/uis/Rating';
// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';
import {action} from '@storybook/addon-actions';

function RatingBasicStory(): ReactElement {
  const disabled = boolean('disabled', false);
  const allowHalfRating = boolean('allowHalfRating', true);
  const color = text('color', '#000000');
  const size = number('size', 24);
  const direction = select<'horizontal' | 'vertical'>(
    'horizontal',
    ['horizontal', 'vertical'],
    'horizontal',
  );

  return (
    <StoryContainer>
      <StoryTitle>Basic</StoryTitle>
      <StorySection style={{flexDirection: 'column'}}>
        <Rating
          disabled={disabled}
          size={size}
          direction={direction}
          onRatingUpdate={action(`score`)}
          allowHalfRating={allowHalfRating}
          color={color}
        />
      </StorySection>
    </StoryContainer>
  );
}

export default RatingBasicStory;
