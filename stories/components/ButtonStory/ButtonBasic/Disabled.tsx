import {Button} from '../../../../main';
import type {ButtonType} from '../../../../main';
// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';
import {Section} from '../../../GlobalStyles';

function Disabled(): ReactElement {
  const types: ButtonType[] = ['text', 'solid', 'outlined'];

  return (
    <Section>
      {types.map((type) => (
        <Button
          key={type}
          type={type}
          disabled={true}
          text="TEXT"
          style={{margin: 2}}
        />
      ))}
    </Section>
  );
}

export default Disabled;
