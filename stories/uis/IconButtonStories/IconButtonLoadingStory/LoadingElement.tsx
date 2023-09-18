// Caveat: Expo web needs React to be imported
import React from 'react';

import {IconButton, LoadingIndicator} from '../../../../main';
import {StorySection} from '../../../GlobalStyles';

function IconButtonLoadingElement(): JSX.Element {
  return (
    <StorySection>
      <IconButton
        loading
        loadingElement={<LoadingIndicator color="yellow" size="small" />}
        style={{margin: 4}}
      />
    </StorySection>
  );
}

export default IconButtonLoadingElement;
