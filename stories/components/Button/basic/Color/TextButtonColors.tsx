import {Button} from '../../../../../main';
import type {ButtonColorType} from '../../../../../main';
import type {ReactElement} from 'react';
import {Section} from '../../../../GlobalStyles';
import {ThemeProvider} from '@dooboo-ui/theme';
import type {ThemeType} from '@dooboo-ui/theme';

type Props = {themeType: ThemeType};

function TextButtonColors({themeType}: Props): ReactElement {
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
}

export default TextButtonColors;
