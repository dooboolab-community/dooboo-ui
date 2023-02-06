import type {ButtonSizeType} from '../../../../main';
import {IconButton} from '../../../../main';
import type {ReactElement} from 'react';
import {Section} from '../../../GlobalStyles';
import {ThemeProvider} from '@dooboo-ui/theme';

function Sizes({themeType}): ReactElement {
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
}

export default Sizes;
