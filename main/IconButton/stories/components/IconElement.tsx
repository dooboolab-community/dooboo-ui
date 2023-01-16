import React from 'react';
import type {FC} from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
import {ThemeProvider} from '@dooboo-ui/theme';
import {IconButton} from '../../index';
import {Section} from '../../../GlobalStyles';
import {Icon} from '../../../Icon';

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
