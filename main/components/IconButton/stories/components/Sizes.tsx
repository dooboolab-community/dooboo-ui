import type {ButtonSizeType} from '../../../Button';
import type {FC} from 'react';
import {IconButton} from '../../index';
import React from 'react';
import {Section} from '../../../../GlobalStyles';
import {ThemeProvider} from '@dooboo-ui/theme';
import type {ThemeType} from '@dooboo-ui/theme';

const IconButtonSizes: FC<{themeType: ThemeType}> = ({themeType}) => {
  const sizes: ButtonSizeType[] = ['small', 'medium', 'large'];

  return (
    <ThemeProvider initialThemeType={themeType}>
      <Section>
        {sizes.map((size) => (
          <IconButton
            key={size}
            size={size}
            icon="search-solid"
            style={{padding: 4}}
          />
        ))}
      </Section>
    </ThemeProvider>
  );
};

export default IconButtonSizes;
