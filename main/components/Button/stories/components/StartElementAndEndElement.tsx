import {Button} from '../../index';
import type {FC} from 'react';
import {Icon} from '../../../Icon';
import React from 'react';
import {Section} from '../../../../GlobalStyles';
import {ThemeProvider} from '@dooboo-ui/theme';
import type {ThemeType} from '@dooboo-ui/theme';

const StartElementAndEndElement: FC<{themeType: ThemeType}> = ({themeType}) => {
  return (
    <ThemeProvider initialThemeType={themeType}>
      <Section>
        <Button
          startElement={
            <Icon
              name="home-light"
              size={18}
              color="white"
              style={{marginRight: 8}}
            />
          }
          text="HOME"
          style={{margin: 4}}
          styles={{text: {color: 'white'}}}
        />
        <Button
          endElement={
            <Icon
              name="home-light"
              size={18}
              color="white"
              style={{marginLeft: 8}}
            />
          }
          text="HOME"
          style={{margin: 4}}
          styles={{text: {color: 'white'}}}
        />
      </Section>
    </ThemeProvider>
  );
};

export default StartElementAndEndElement;
