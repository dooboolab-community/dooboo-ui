import React from 'react';
import type {FC} from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
import {ThemeProvider} from '@dooboo-ui/theme';
import {Button} from '../../../main/Button';
import {Section} from '../../Styles';

const Loading: FC<{themeType: ThemeType}> = ({themeType}) => {
  return (
    <ThemeProvider initialThemeType={themeType}>
      <Section>
        <Button type="text" loading={true} style={{padding: 4}} />
        <Button loading={true} style={{padding: 4}} />
        <Button type="outlined" loading={true} style={{padding: 4}} />
        <Button
          type="outlined"
          loading={true}
          indicatorColor="orange"
          style={{padding: 4}}
        />
      </Section>
    </ThemeProvider>
  );
};

export default Loading;
