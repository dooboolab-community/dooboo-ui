import {Button} from '../../index';
import {Icon} from '../../../Icon';
import React from 'react';
import type {ReactElement} from 'react';
import {Section} from '../../../../GlobalStyles';
import {ThemeProvider} from '@dooboo-ui/theme';

function StartElementAndEnd({themeType}): ReactElement {
  return (
    <ThemeProvider initialThemeType={themeType}>
      <Section>
        <Button
          startElement={
            <Icon name="home-light" color="white" style={{marginRight: 8}} />
          }
          // eslint-disable-next-line no-console
          onPress={() => console.log(`press button with startElement`)}
          text="HOME"
          style={{margin: 4}}
        />
        <Button
          endElement={
            <Icon name="home-light" color="white" style={{marginLeft: 8}} />
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
