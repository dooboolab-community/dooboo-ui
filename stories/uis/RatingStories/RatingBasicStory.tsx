// Caveat: Expo web needs React to be imported
import React from 'react';
import {action} from '@storybook/addon-actions';
import {boolean, number, select, text} from '@storybook/addon-knobs';

import {Rating} from '../../../main';
import {StoryContainer, StorySection, StoryTitle} from '../../GlobalStyles';

function RatingBasicStory(): JSX.Element {
  const disabled = boolean('disabled', false);
  const allowHalfRating = boolean('allowHalfRating', true);
  const color = text('color', '#000000');
  const size = number('size', 24);
  const iconType = select<'star' | 'dooboo'>(
    'iconType',
    ['star', 'dooboo'],
    'star',
  );

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
          allowHalfRating={allowHalfRating}
          color={color}
          direction={direction}
          disabled={disabled}
          iconType={iconType}
          onRatingUpdate={action(`score`)}
          size={size}
        />
      </StorySection>
    </StoryContainer>
  );
}

export default RatingBasicStory;
