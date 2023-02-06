import {Button} from '../../../../../main';
import type {ButtonColorType} from '../../../../../main';
import type {ReactElement} from 'react';
import {Section} from '../../../../GlobalStyles';

function TextButtonColors(): ReactElement {
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
    <Section>
      {colors.map((color) => (
        <Button
          key={color}
          type="text"
          color={color}
          text={color.toUpperCase()}
          style={{margin: 4}}
          // eslint-disable-next-line no-console
          onPress={() => console.log(`press ${color} text button`)}
        />
      ))}
    </Section>
  );
}

export default TextButtonColors;
