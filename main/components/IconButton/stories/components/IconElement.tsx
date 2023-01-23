import type {FC} from 'react';
import {Icon} from '../../../Icon';
import {IconButton} from '../../index';
import React from 'react';
import {Section} from '../../../../GlobalStyles';
import {ThemeProvider} from '@dooboo-ui/theme';
import type {ThemeType} from '@dooboo-ui/theme';

const IconButtonBasic: FC<{themeType: ThemeType}> = ({themeType}) => {
  return (
    <ThemeProvider initialThemeType={themeType}>
      <Section>
        <IconButton
          iconElement={<Icon size={24} color="pink" name="add-light" />}
        />
      </Section>
    </ThemeProvider>
  );
};

export default IconButtonBasic;
