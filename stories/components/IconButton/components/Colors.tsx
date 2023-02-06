import type {ButtonColorType} from '../../../../main';
import {IconButton} from '../../../../main';

import type {ReactElement} from 'react';
import {Section} from '../../../GlobalStyles';
import {ThemeProvider} from '@dooboo-ui/theme';

function Colors({themeType}): ReactElement {
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
    <ThemeProvider initialThemeType={themeType}>
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
    </ThemeProvider>
  );
}

export default Colors;
