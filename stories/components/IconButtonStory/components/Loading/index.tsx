import type {ButtonType} from '../../../../../main';
import {IconButton} from '../../../../../main';
// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';
import {StorySection} from '../../../../GlobalStyles';

function Loading(): ReactElement {
  const types: ButtonType[] = ['text', 'solid', 'outlined'];

  return (
    <StorySection>
      {types.map((type) => (
        <IconButton key={type} type={type} loading style={{padding: 4}} />
      ))}
    </StorySection>
  );
}

export default Loading;
