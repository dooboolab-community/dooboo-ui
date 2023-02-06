import {Button} from '../../../../../main';
import type {ButtonType} from '../../../../../main';
import type {ReactElement} from 'react';
import {Section} from '../../../../GlobalStyles';

function Loading(): ReactElement {
  const types: ButtonType[] = ['text', 'solid', 'outlined'];

  return (
    <Section>
      {types.map((type) => (
        <Button
          key={type}
          type={type}
          loading
          style={{margin: 4}}
          // eslint-disable-next-line no-console
          onPress={() => console.log(`press ${type} button`)}
        />
      ))}
    </Section>
  );
}

export default Loading;