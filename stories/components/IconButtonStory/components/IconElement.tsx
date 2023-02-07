import {Icon, IconButton} from '../../../../main';

// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';
import {StorySection} from '../../../GlobalStyles';

function IconElement(): ReactElement {
  return (
    <StorySection>
      <IconButton
        iconElement={<Icon size={24} color="pink" name="add-light" />}
      />
    </StorySection>
  );
}

export default IconElement;
