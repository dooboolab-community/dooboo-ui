import type {ButtonType} from '../../../../main';
import {IconButton} from '../../../../main';

import type {ReactElement} from 'react';
import {Section} from '../../../GlobalStyles';
import {ThemeProvider} from '@dooboo-ui/theme';

function Basic({themeType}): ReactElement {
  const types: ButtonType[] = ['text', 'solid', 'outlined'];

  return (
    <ThemeProvider initialThemeType={themeType}>
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
    </ThemeProvider>
  );
}

export default Basic;
