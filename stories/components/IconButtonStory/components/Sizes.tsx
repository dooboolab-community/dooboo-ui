import type {ButtonSizeType} from '../../../../main';
import {IconButton} from '../../../../main';
// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';
import {StorySection} from '../../../GlobalStyles';

function Sizes(): ReactElement {
  const sizes: ButtonSizeType[] = ['small', 'medium', 'large'];

  return (
    <StorySection>
      {sizes.map((size) => (
        <IconButton
          key={size}
          size={size}
          icon="search-solid"
          style={{padding: 4}}
        />
      ))}
    </StorySection>
  );
}

export default Sizes;
