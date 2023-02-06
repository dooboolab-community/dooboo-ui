import {IconButton, LoadingIndicator} from '../../../../../main';

import type {ReactElement} from 'react';
import {Section} from '../../../../GlobalStyles';
import {ThemeProvider} from '@dooboo-ui/theme';
import type {ThemeType} from '@dooboo-ui/theme';

type Props = {themeType: ThemeType};

function LoadingElement({themeType}: Props): ReactElement {
  return (
    <ThemeProvider initialThemeType={themeType}>
      <Section>
        <IconButton
          loading
          loadingElement={<LoadingIndicator size="small" color="yellow" />}
          style={{padding: 4}}
        />
      </Section>
    </ThemeProvider>
  );
}

export default LoadingElement;
