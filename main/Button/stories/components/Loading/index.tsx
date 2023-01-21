import React from 'react';
import type {FC} from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
import {ThemeProvider} from '@dooboo-ui/theme';
import {Button} from '../../../index';
import {Section} from '../../../../GlobalStyles';
import {ButtonType} from '../../../../Button';

const Index: FC<{themeType: ThemeType}> = ({themeType}) => {
  const types: ButtonType[] = ['text', 'solid', 'outlined'];

  return (
    <ThemeProvider initialThemeType={themeType}>
      <Section>
        {types.map((type) => (
          <Button key={type} type={type} loading style={{padding: 4}} />
        ))}
      </Section>
    </ThemeProvider>
  );
};

export default Index;
