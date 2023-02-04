import {Button} from '../../index';
import type {ButtonColorType} from '../../../Button';
import type {FC} from 'react';
import React from 'react';
import {Section} from '../../../../GlobalStyles';
import {ThemeProvider} from '@dooboo-ui/theme';
import type {ThemeType} from '@dooboo-ui/theme';

const SolidButtonColors: FC<{themeType: ThemeType}> = ({themeType}) => {
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
          <Button
            key={color}
            color={color}
            text={color.toUpperCase()}
            style={{margin: 4}}
            // eslint-disable-next-line no-console
            onPress={() => console.log(`press ${color} solid button`)}
          />
        ))}
      </Section>
    </ThemeProvider>
  );
};

export default SolidButtonColors;
