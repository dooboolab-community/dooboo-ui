import {Button} from '../../../../main';
import type {ButtonType} from '../../../../main';
import type {FC} from 'react';
import React from 'react';
import {Section} from '../../../GlobalStyles';
import {ThemeProvider} from '@dooboo-ui/theme';
import type {ThemeType} from '@dooboo-ui/theme';

const solidColor: FC<{themeType: ThemeType}> = ({themeType}) => {
  const types: ButtonType[] = ['text', 'solid', 'outlined'];

  return (
    <ThemeProvider initialThemeType={themeType}>
      <Section>
        {types.map((type) => (
          <Button
            key={type}
            type={type}
            disabled={true}
            text="TEXT"
            style={{margin: 2}}
          />
        ))}
      </Section>
    </ThemeProvider>
  );
};

export default solidColor;
