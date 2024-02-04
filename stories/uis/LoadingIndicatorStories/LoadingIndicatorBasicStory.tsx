// Caveat: Expo web needs React to be imported
import type {ComponentProps} from 'react';
import React from 'react';

import {LoadingIndicator} from '../../../main';
import {StoryContainer} from '../../GlobalStyles';

function LoadingIndicatorBasicStory(
  props: ComponentProps<typeof LoadingIndicator>,
): JSX.Element {
  return (
    <StoryContainer>
      <LoadingIndicator {...props} />
    </StoryContainer>
  );
}

export default LoadingIndicatorBasicStory;
