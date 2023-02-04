import {ThemeProvider, useTheme} from '@dooboo-ui/theme';

import {Button} from '../../index';
import {Icon} from '../../../Icon';
import React from 'react';
import type {ReactElement} from 'react';
import {Section} from '../../../../GlobalStyles';

function StartElementAndEnd({themeType}): ReactElement {
  const {theme} = useTheme();

  return (
    <ThemeProvider initialThemeType={themeType}>
      <Section>
        <Button
          startElement={
            <Icon
              name="home-light"
              color={theme.text.contrast}
              style={{marginRight: 8}}
            />
          }
          // eslint-disable-next-line no-console
          onPress={() => console.log(`press button with startElement`)}
          text="HOME"
          style={{margin: 4}}
        />
        <Button
          endElement={
            <Icon
              name="home-light"
              color={theme.text.contrast}
              style={{marginLeft: 8}}
            />
          }
          // eslint-disable-next-line no-console
          onPress={() => console.log(`press button with endElement`)}
          text="HOME"
          style={{margin: 4}}
        />
      </Section>
    </ThemeProvider>
  );
}

export default StartElementAndEnd;
