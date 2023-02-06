import type {ButtonSizeType} from '../../../../main';
import {IconButton} from '../../../../main';
// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';
import {Section} from '../../../GlobalStyles';

function Sizes(): ReactElement {
  const sizes: ButtonSizeType[] = ['small', 'medium', 'large'];

  return (
    <Section>
      {sizes.map((size) => (
        <IconButton
          key={size}
          size={size}
          icon="search-solid"
          style={{padding: 4}}
        />
      ))}
    </Section>
  );
}

export default Sizes;
