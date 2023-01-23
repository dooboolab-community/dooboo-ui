import {Button} from '../../../index';
import type {FC} from 'react';
import {LoadingIndicator} from '../../../../LoadingIndicator';
import React from 'react';
import {Section} from '../../../../../GlobalStyles';
import {ThemeProvider} from '@dooboo-ui/theme';
import type {ThemeType} from '@dooboo-ui/theme';

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
