import {Button} from '../../../../main';
import type {ButtonType} from '../../../../main';
// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';
import {Section} from '../../../GlobalStyles';

function Basic(): ReactElement {
  const types: ButtonType[] = ['text', 'solid', 'outlined'];

  return (
    <Section>
      {types.map((type) => (
        <Button
          key={type}
          type={type}
          text="TEXT"
          style={{margin: 4}} // eslint-disable-next-line no-console
          onPress={() => console.log(`press ${type} basic button`)}
        />
      ))}
    </Section>
  );
}

export default Basic;
