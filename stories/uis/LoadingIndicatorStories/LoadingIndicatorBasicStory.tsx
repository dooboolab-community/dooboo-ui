// Caveat: Expo web needs React to be imported
import React from 'react';

import {LoadingIndicator} from '../../../main';
import {StoryContainer} from '../../GlobalStyles';

function LoadingIndicatorBasicStory(): JSX.Element {
  return (
    <StoryContainer>
      <LoadingIndicator />
    </StoryContainer>
  );
}

export default LoadingIndicatorBasicStory;
