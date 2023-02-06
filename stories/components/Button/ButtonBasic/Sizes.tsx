import {Button} from '../../../../main';
import type {ButtonSizeType} from '../../../../main';
import type {ReactElement} from 'react';
import {Section} from '../../../GlobalStyles';

function Sizes(): ReactElement {
  const sizes: ButtonSizeType[] = ['small', 'medium', 'large'];

  return (
    <Section>
      {sizes.map((size) => (
        <Button
          key={size}
          size={size}
          text={size.toUpperCase()}
          style={{margin: 4}}
          // eslint-disable-next-line no-console
          onPress={() => console.log(`press ${size} button`)}
        />
      ))}

      {sizes.map((size) => (
        <Button
          key={size}
          type="outlined"
          size={size}
          text={size.toUpperCase()}
          style={{margin: 4}}
          // eslint-disable-next-line no-console
          onPress={() => console.log(`press ${size} button`)}
        />
      ))}
    </Section>
  );
}

export default Sizes;
