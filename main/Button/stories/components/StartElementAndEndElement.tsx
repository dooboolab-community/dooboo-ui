import React from 'react';
import type {FC} from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
import {ThemeProvider} from '@dooboo-ui/theme';
import {Section} from '../../../GlobalStyles';
import {Button} from '../../index';
import {Icon} from '../../../Icon';

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
          style={{padding: 4}}
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
          style={{padding: 4}}
          styles={{text: {color: 'white'}}}
        />
      </Section>
    </ThemeProvider>
  );
};

export default StartElementAndEndElement;
