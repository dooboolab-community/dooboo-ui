import type {ButtonType} from '../../../../../main';
import {IconButton} from '../../../../../main';
import React from 'react';
import type {ReactElement} from 'react';
import {Section} from '../../../../GlobalStyles';
import {ThemeProvider} from '@dooboo-ui/theme';
import type {ThemeType} from '@dooboo-ui/theme';

type Props = {themeType: ThemeType};

function Loading({themeType}: Props): ReactElement {
  const types: ButtonType[] = ['text', 'solid', 'outlined'];

  return (
    <ThemeProvider initialThemeType={themeType}>
      <Section>
        {types.map((type) => (
          <IconButton key={type} type={type} loading style={{padding: 4}} />
        ))}
      </Section>
    </ThemeProvider>
  );
}

export default Loading;
