import type {ButtonColorType} from '../../../../main';
import {IconButton} from '../../../../main';
// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';
import {StorySection} from '../../../GlobalStyles';

function Colors(): ReactElement {
  const colors: ButtonColorType[] = [
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'info',
    'light',
  ];

  return (
    <StorySection>
      {colors.map((color) => (
        <IconButton
          key={color}
          color={color}
          size="small"
          icon="cross-light"
          style={{padding: 4}}
        />
      ))}
    </StorySection>
  );
}

export default Colors;
