import {Icon, IconButton} from '../../../../main';

// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';
import {Section} from '../../../GlobalStyles';

function IconElement(): ReactElement {
  return (
    <Section>
      <IconButton
        iconElement={<Icon size={24} color="pink" name="add-light" />}
      />
    </Section>
  );
}

export default IconElement;
