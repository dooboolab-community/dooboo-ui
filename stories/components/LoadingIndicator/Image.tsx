import {LoadingIndicator} from '../../../main';
// Caveat: Expo web needs React to be imported
import React from 'react';
import {StoryContainer} from '../../GlobalStyles';

function LoadingIndicatorImage(): React.ReactElement {
  return (
    <StoryContainer>
      <LoadingIndicator imgSource="https://user-images.githubusercontent.com/31176502/71331734-ca61d800-2576-11ea-8934-6a260a1d714e.gif" />
    </StoryContainer>
  );
}

export default LoadingIndicatorImage;
