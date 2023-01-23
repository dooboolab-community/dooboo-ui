import type {ButtonType} from '../../../Button';
import type {FC} from 'react';
import {IconButton} from '../../index';
import React from 'react';
import {Section} from '../../../../GlobalStyles';
import {ThemeProvider} from '@dooboo-ui/theme';
import type {ThemeType} from '@dooboo-ui/theme';

const IconButtonBasic: FC<{themeType: ThemeType}> = ({themeType}) => {
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
};

export default IconButtonBasic;
