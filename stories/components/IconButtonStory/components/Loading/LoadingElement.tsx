import {IconButton, LoadingIndicator} from '../../../../../main';

// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';
import {StorySection} from '../../../../GlobalStyles';

function LoadingElement(): ReactElement {
  return (
    <StorySection>
      <IconButton
        loading
        loadingElement={<LoadingIndicator size="small" color="yellow" />}
        style={{padding: 4}}
      />
    </StorySection>
  );
}

export default LoadingElement;
