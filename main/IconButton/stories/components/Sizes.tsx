import React from 'react';
import type {FC} from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
import {ThemeProvider} from '@dooboo-ui/theme';
import {IconButton} from '../../index';
import {Section} from '../../../GlobalStyles';

const IconButtonSizes: FC<{themeType: ThemeType}> = ({themeType}) => {
  return (
    <ThemeProvider initialThemeType={themeType}>
      <Section>
        <IconButton size="small" icon="search-solid" style={{padding: 4}} />
        <IconButton size="medium" icon="search-solid" style={{padding: 4}} />
        <IconButton size="large" icon="search-solid" style={{padding: 4}} />
      </Section>
    </ThemeProvider>
  );
};

export default IconButtonSizes;
