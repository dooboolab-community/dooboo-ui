import {Button} from '../../../../../main';
import type {ButtonType} from '../../../../../main';
import type {ReactElement} from 'react';
import {Section} from '../../../../GlobalStyles';
import {ThemeProvider} from '@dooboo-ui/theme';

function Loading({themeType}): ReactElement {
  const types: ButtonType[] = ['text', 'solid', 'outlined'];

  return (
    <ThemeProvider initialThemeType={themeType}>
      <Section>
        {types.map((type) => (
          <Button
            key={type}
            type={type}
            loading
            style={{margin: 4}}
            // eslint-disable-next-line no-console
            onPress={() => console.log(`press ${type} button`)}
          />
        ))}
      </Section>
    </ThemeProvider>
  );
}

export default Loading;
