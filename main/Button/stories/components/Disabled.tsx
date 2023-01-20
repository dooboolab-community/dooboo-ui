import React from 'react';
import type {FC} from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
import {ThemeProvider} from '@dooboo-ui/theme';
import {Section} from '../../../GlobalStyles';
import {Button} from '../../index';
import {ButtonType} from '../../../Button';

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
            style={{padding: 2}}
          />
        ))}
      </Section>
    </ThemeProvider>
  );
};

export default solidColor;
