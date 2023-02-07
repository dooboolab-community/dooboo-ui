import {Button, Icon, useDooboo} from '../../../../main';

// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';
import {StorySection} from '../../../GlobalStyles';

function StartAndEnd(): ReactElement {
  const {theme} = useDooboo();

  return (
    <StorySection>
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
    </StorySection>
  );
}

export default StartAndEnd;
