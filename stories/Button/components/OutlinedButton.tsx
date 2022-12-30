import React from 'react';
import type {FC} from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
import {ThemeProvider} from '@dooboo-ui/theme';
import {Button} from '../../../main/Button';
import {Section} from '../../Styles';

const OutlinedButton: FC<{themeType: ThemeType}> = ({themeType}) => {
  return (
    <ThemeProvider initialThemeType={themeType}>
      <Section>
        <Button type="outlined" text="DEFAULT" style={{padding: 4}} />

        <Button
          type="outlined"
          disabled={true}
          text="DISABLED"
          style={{padding: 4}}
        />
        <Button
          type="outlined"
          text="LINK"
          href="#link-buttons"
          style={{padding: 4}}
        />
      </Section>
    </ThemeProvider>
  );
};

export default OutlinedButton;
