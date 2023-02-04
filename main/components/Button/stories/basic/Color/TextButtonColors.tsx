import {Button} from '../../..';
import type {ButtonColorType} from '../../..';
import type {FC} from 'react';
import React from 'react';
import {Section} from '../../../../../GlobalStyles';
import {ThemeProvider} from '@dooboo-ui/theme';
import type {ThemeType} from '@dooboo-ui/theme';

const TextButtonColors: FC<{themeType: ThemeType}> = ({themeType}) => {
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
            type="text"
            color={color}
            text={color.toUpperCase()}
            style={{margin: 4}}
            // eslint-disable-next-line no-console
            onPress={() => console.log(`press ${color} text button`)}
          />
        ))}
      </Section>
    </ThemeProvider>
  );
};

export default TextButtonColors;
