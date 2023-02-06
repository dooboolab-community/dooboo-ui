import type {ButtonType} from '../../../../main';
import {IconButton} from '../../../../main';
import type {ReactElement} from 'react';
import {Section} from '../../../GlobalStyles';

function Basic(): ReactElement {
  const types: ButtonType[] = ['text', 'solid', 'outlined'];

  return (
    <Section>
      {types.map((type) => (
        <IconButton
          key={type}
          type={type}
          icon="tile-light"
          style={{padding: 4}}
        />
      ))}
    </Section>
  );
}

export default Basic;
