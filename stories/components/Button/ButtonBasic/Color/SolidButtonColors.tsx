import {Button} from '../../../../../main';
import type {ButtonColorType} from '../../../../../main';
import type {ReactElement} from 'react';
import {Section} from '../../../../GlobalStyles';

function SolidButtonColors(): ReactElement {
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
          color={color}
          text={color.toUpperCase()}
          style={{margin: 4}}
          // eslint-disable-next-line no-console
          onPress={() => console.log(`press ${color} solid button`)}
        />
      ))}
    </Section>
  );
}

export default SolidButtonColors;
