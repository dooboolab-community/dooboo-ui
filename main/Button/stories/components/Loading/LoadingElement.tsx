import React from 'react';
import type {FC} from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
import {ThemeProvider} from '@dooboo-ui/theme';
import {Button} from '../../../index';
import {Section} from '../../../../GlobalStyles';
import {LoadingIndicator} from '../../../../LoadingIndicator';

const Loading: FC<{themeType: ThemeType}> = ({themeType}) => {
  return (
    <ThemeProvider initialThemeType={themeType}>
      <Section>
        <Button
          loading
          loadingElement={<LoadingIndicator size="small" color="yellow" />}
          style={{padding: 4}}
        />
      </Section>
    </ThemeProvider>
  );
};

export default Loading;
