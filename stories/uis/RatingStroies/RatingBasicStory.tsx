import {StoryContainer, StorySection, StoryTitle} from '../../GlobalStyles';
import {boolean, number, select, text} from '@storybook/addon-knobs';

import Rating from '../../../main/uis/Rating';
import type {ReactElement} from 'react';
import {action} from '@storybook/addon-actions';

function RatingBasicStory(): ReactElement {
  const disabled = boolean('disabled', false);
  const allowHalfRating = boolean('allowHalfRating', true);
  const color = text('color', '#000000');
  const initialRating = number('size', 3);
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
          onRatingUpdate={(score) => action(`score ${score}`)}
          allowHalfRating={allowHalfRating}
          color={color}
          initialRating={initialRating}
        />
      </StorySection>
    </StoryContainer>
  );
}

export default RatingBasicStory;
