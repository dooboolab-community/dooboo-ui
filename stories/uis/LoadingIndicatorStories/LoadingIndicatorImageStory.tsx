// Caveat: Expo web needs React to be imported
import React from 'react';

import {LoadingIndicator} from '../../../main';
import {StoryContainer} from '../../GlobalStyles';

function LoadingIndicatorImageStory(): React.ReactElement {
  return (
    <StoryContainer>
      <LoadingIndicator imgSource="https://user-images.githubusercontent.com/27461460/217134243-2db5ffcf-3711-4a69-8a35-6c2ebb500b17.gif" />
    </StoryContainer>
  );
}

export default LoadingIndicatorImageStory;
