import React from 'react';
import type {FC} from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
import {ThemeProvider} from '@dooboo-ui/theme';
import {Button} from '../../../main/Button';
import {Section} from '../../Styles';

const Sizes: FC<{themeType: ThemeType}> = ({themeType}) => {
  return (
    <ThemeProvider initialThemeType={themeType}>
      <Section>
        <Button size="small" text="SMALL" style={{padding: 4}} />
        <Button size="medium" text="MEDIUM" style={{padding: 4}} />
        <Button size="large" text="LARGE" style={{padding: 4}} />

        <Button
          type="outlined"
          size="small"
          text="SMALL"
          style={{padding: 4}}
        />
        <Button
          type="outlined"
          size="medium"
          text="MEDIUM"
          style={{padding: 4}}
        />
        <Button
          type="outlined"
          size="large"
          text="LARGE"
          style={{padding: 4}}
        />
      </Section>
    </ThemeProvider>
  );
};

export default Sizes;
