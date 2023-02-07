import {StoryContainer, StorySection, StoryTitle} from '../../GlobalStyles';

import {Button} from '../../../main';
import type {ButtonType} from '../../../main';
// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';

function Disabled(): ReactElement {
  const types: ButtonType[] = ['text', 'solid', 'outlined'];

  return (
    <StoryContainer>
      <StoryTitle>Disabled</StoryTitle>
      <StorySection>
        {types.map((type) => (
          <Button
            key={type}
            type={type}
            disabled={true}
            text="TEXT"
            style={{margin: 2}}
          />
        ))}
      </StorySection>
    </StoryContainer>
  );
}

export default Disabled;
