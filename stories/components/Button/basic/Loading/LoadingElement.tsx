import {Button, LoadingIndicator} from '../../../../../main';

import React from 'react';
import type {ReactElement} from 'react';
import {Section} from '../../../../GlobalStyles';
import {ThemeProvider} from '@dooboo-ui/theme';
import type {ThemeType} from '@dooboo-ui/theme';

type Props = {themeType: ThemeType};

function Loading({themeType}: Props): ReactElement {
  return (
    <ThemeProvider initialThemeType={themeType}>
      <Section>
        <Button
          loading
          loadingElement={<LoadingIndicator size="small" color="yellow" />}
          style={{margin: 4}}
          // eslint-disable-next-line no-console
          onPress={() => console.log(`press loading button`)}
        />
      </Section>
    </ThemeProvider>
  );
}

export default Loading;
