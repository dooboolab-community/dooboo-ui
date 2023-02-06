import type {ButtonColorType} from '../../../../main';
import {IconButton} from '../../../../main';
import type {ReactElement} from 'react';
import {Section} from '../../../GlobalStyles';

function Colors(): ReactElement {
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
        <IconButton
          key={color}
          color={color}
          size="small"
          icon="cross-light"
          style={{padding: 4}}
        />
      ))}
    </Section>
  );
}

export default Colors;
