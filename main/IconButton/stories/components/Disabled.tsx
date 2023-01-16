import React from 'react';
import type {FC} from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
import {ThemeProvider} from '@dooboo-ui/theme';
import {IconButton} from '../../index';
import {Section} from '../../../GlobalStyles';

const IconButtonBasic: FC<{themeType: ThemeType}> = ({themeType}) => {
  return (
    <ThemeProvider initialThemeType={themeType}>
      <Section>
        <IconButton
          type="text"
          disabled
          icon="tile-light"
          style={{padding: 4}}
        />
        <IconButton
          type="solid"
          disabled
          icon="tile-light"
          style={{padding: 4}}
        />
        <IconButton
          type="outlined"
          disabled
          icon="tile-light"
          style={{padding: 4}}
        />
      </Section>
    </ThemeProvider>
  );
};

export default IconButtonBasic;
