import {action} from '@storybook/addon-actions';
import {boolean, number, select, text} from '@storybook/addon-knobs';

import {Rating} from '../../../main';
import {StoryWrapper} from '../../Common';

export default function RatingBasicStory(): JSX.Element {
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
    <StoryWrapper>
      <Rating
        allowHalfRating={allowHalfRating}
        color={color}
        direction={direction}
        disabled={disabled}
        iconType={iconType}
        onRatingUpdate={action(`score`)}
        size={size}
      />
    </StoryWrapper>
  );
}
