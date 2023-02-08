import {StoryContainer, StorySection, StoryTitle} from '../../../GlobalStyles';

import type {ButtonType} from '../../../../main';
import {IconButton} from '../../../../main';
// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';

function IconButtonLoadingStory(): ReactElement {
  const types: ButtonType[] = ['text', 'solid', 'outlined'];

  return (
    <StoryContainer>
      <StoryTitle>Loading</StoryTitle>
      <StorySection>
        {types.map((type) => (
          <IconButton key={type} type={type} loading style={{margin: 4}} />
        ))}
      </StorySection>
    </StoryContainer>
  );
}

export default IconButtonLoadingStory;
