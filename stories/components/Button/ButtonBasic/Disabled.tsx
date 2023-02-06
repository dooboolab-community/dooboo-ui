import {Button} from '../../../../main';
import type {ButtonType} from '../../../../main';
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
