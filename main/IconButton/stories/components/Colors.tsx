import {View} from 'react-native';
import React from 'react';
import type {FC} from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
import {ThemeProvider} from '@dooboo-ui/theme';
import {IconButton} from '../../index';
import {Section} from '../../../GlobalStyles';
import {ButtonColorType} from '../../../Button';

const IconButtonColors: FC<{themeType: ThemeType}> = ({themeType}) => {
  const colors: ButtonColorType[] = [
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'info',
    'light',
  ];

  return (
    <ThemeProvider initialThemeType={themeType}>
      <Section>
        {colors.map((color) => (
          <IconButton
            key={color}
            color={color}
            size="small"
            icon="cross-light"
            style={{padding: 4}}
          />
        ))}
      </Section>
    </ThemeProvider>
  );
};

export default IconButtonColors;
