import {LoadingIndicator} from '../../../main';
// Caveat: Expo web needs React to be imported
import React from 'react';
import {StoryContainer} from '../../GlobalStyles';

function LoadingIndicatorSpinner(): React.ReactElement {
  return (
    <StoryContainer>
      <LoadingIndicator />
    </StoryContainer>
  );
}

export default LoadingIndicatorSpinner;
