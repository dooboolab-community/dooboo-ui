import type {ReactElement} from 'react';
// Caveat: Expo web needs React to be imported
import React from 'react';

import {IconButton, LoadingIndicator} from '../../../../main';
import {StorySection} from '../../../GlobalStyles';

function IconButtonLoadingElement(): ReactElement {
  return (
    <StorySection>
      <IconButton
        loading
        loadingElement={<LoadingIndicator size="small" color="yellow" />}
        style={{margin: 4}}
      />
    </StorySection>
  );
}

export default IconButtonLoadingElement;
