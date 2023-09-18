// Caveat: Expo web needs React to be imported
import React from 'react';

import type {ButtonType} from '../../../../main';
import {IconButton} from '../../../../main';
import {StoryContainer, StorySection, StoryTitle} from '../../../GlobalStyles';

function IconButtonLoadingStory(): JSX.Element {
  const types: ButtonType[] = ['text', 'solid', 'outlined'];

  return (
    <StoryContainer>
      <StoryTitle>Loading</StoryTitle>
      <StorySection>
        {types.map((type) => (
          <IconButton key={type} loading style={{margin: 4}} type={type} />
        ))}
      </StorySection>
    </StoryContainer>
  );
}

export default IconButtonLoadingStory;
