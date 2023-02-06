import {Icon, IconButton} from '../../../../main';

import type {ReactElement} from 'react';
import {Section} from '../../../GlobalStyles';
import {ThemeProvider} from '@dooboo-ui/theme';

function IconElement({themeType}): ReactElement {
  return (
    <ThemeProvider initialThemeType={themeType}>
      <Section>
        <IconButton
          iconElement={<Icon size={24} color="pink" name="add-light" />}
        />
      </Section>
    </ThemeProvider>
  );
}

export default IconElement;
