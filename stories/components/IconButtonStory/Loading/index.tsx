import {StoryContainer, StorySection, StoryTitle} from '../../../GlobalStyles';

import type {ButtonType} from '../../../../main';
import {IconButton} from '../../../../main';
// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';

function IconButtonLoading(): ReactElement {
  const types: ButtonType[] = ['text', 'solid', 'outlined'];

  return (
    <StoryContainer>
      <StoryTitle>Sizes</StoryTitle>
      <StorySection>
        {types.map((type) => (
          <IconButton key={type} type={type} loading style={{padding: 4}} />
        ))}
      </StorySection>
    </StoryContainer>
  );
}

export default IconButtonLoading;
