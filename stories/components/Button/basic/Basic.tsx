import {Button} from '../../../../main';
import type {ButtonType} from '../../../../main';
import type {FC} from 'react';
import {Section} from '../../../GlobalStyles';
import {ThemeProvider} from '@dooboo-ui/theme';
import type {ThemeType} from '@dooboo-ui/theme';

const Basic: FC<{themeType: ThemeType}> = ({themeType}) => {
  const types: ButtonType[] = ['text', 'solid', 'outlined'];

  return (
    <ThemeProvider initialThemeType={themeType}>
      <Section>
        {types.map((type) => (
          <Button
            key={type}
            type={type}
            text="TEXT"
            style={{margin: 4}} // eslint-disable-next-line no-console
            onPress={() => console.log(`press ${type} basic button`)}
          />
        ))}
      </Section>
    </ThemeProvider>
  );
};

export default Basic;
