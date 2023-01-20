import React from 'react';
import type {FC} from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
import {ThemeProvider} from '@dooboo-ui/theme';
import {IconButton} from '../../index';
import {Section} from '../../../GlobalStyles';
import {ButtonSizeType} from '../../../Button';

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
