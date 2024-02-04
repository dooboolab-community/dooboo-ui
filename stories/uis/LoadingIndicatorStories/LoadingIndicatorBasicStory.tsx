import type {ComponentProps} from 'react';

import {LoadingIndicator} from '../../../main';
import {StoryWrapper} from '../../Common';

export default function LoadingIndicatorBasicStory(
  props: ComponentProps<typeof LoadingIndicator>,
): JSX.Element {
  return (
    <StoryWrapper>
      <LoadingIndicator {...props} />
    </StoryWrapper>
  );
}
