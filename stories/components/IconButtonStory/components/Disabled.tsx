import type {ButtonType} from '../../../../main';
import {IconButton} from '../../../../main';
// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';
import {Section} from '../../../GlobalStyles';

function Disabled(): ReactElement {
  const types: ButtonType[] = ['text', 'solid', 'outlined'];

  return (
    <Section>
      {types.map((type) => (
        <IconButton
          key={type}
          type={type}
          disabled
          icon="tile-light"
          style={{padding: 4}}
        />
      ))}
    </Section>
  );
}

export default Disabled;
