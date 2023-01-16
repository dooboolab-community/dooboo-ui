import React from 'react';
import type {FC} from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
import {ThemeProvider} from '@dooboo-ui/theme';
import {Section} from '../../../GlobalStyles';
import {Button} from '../../index';

const solidColor: FC<{themeType: ThemeType}> = ({themeType}) => {
  return (
    <ThemeProvider initialThemeType={themeType}>
      <Section>
        <Button type="text" disabled={true} text="TEXT" style={{padding: 2}} />
        <Button disabled={true} text="SOLID" style={{padding: 2}} />
        <Button
          type="outlined"
          disabled={true}
          text="OUTLINED"
          style={{padding: 2}}
        />
      </Section>
    </ThemeProvider>
  );
};

export default solidColor;
