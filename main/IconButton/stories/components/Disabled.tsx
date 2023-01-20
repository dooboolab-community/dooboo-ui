import React from 'react';
import type {FC} from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
import {ThemeProvider} from '@dooboo-ui/theme';
import {IconButton} from '../../index';
import {Section} from '../../../GlobalStyles';
import {ButtonType} from '../../../Button';

const IconButtonBasic: FC<{themeType: ThemeType}> = ({themeType}) => {
  const types: ButtonType[] = ['text', 'solid', 'outlined'];

  return (
    <ThemeProvider initialThemeType={themeType}>
      <Section>
        {types.map((type) => (
          <IconButton
            key={type}
            type={type}
            disabled
            icon="tile-light"
            style={{padding: 4}}
          />
        ))}
      </Section>
    </ThemeProvider>
  );
};

export default IconButtonBasic;
