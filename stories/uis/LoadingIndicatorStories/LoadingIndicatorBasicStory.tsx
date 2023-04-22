// Caveat: Expo web needs React to be imported
import type {ReactElement} from 'react';
import React from 'react';

import {LoadingIndicator} from '../../../main';
import {StoryContainer} from '../../GlobalStyles';

function LoadingIndicatorBasicStory(): ReactElement {
  return (
    <StoryContainer>
      <LoadingIndicator />
    </StoryContainer>
  );
}

export default LoadingIndicatorBasicStory;
