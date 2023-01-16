import React from 'react';
import type {FC} from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
import {ThemeProvider} from '@dooboo-ui/theme';
import {Button} from '../../index';
import {Section} from '../../../GlobalStyles';

const Basic: FC<{themeType: ThemeType}> = ({themeType}) => {
  return (
    <ThemeProvider initialThemeType={themeType}>
      <Section>
        <Button type="text" text="TEXT" style={{padding: 4}} />
        <Button type="solid" text="SOLID" style={{padding: 4}} />
        <Button type="outlined" text="OUTLINED" style={{padding: 4}} />
      </Section>
    </ThemeProvider>
  );
};

export default Basic;
