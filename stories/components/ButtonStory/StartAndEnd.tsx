import {Button, Icon, useDooboo} from '../../../main';
import {StoryContainer, StorySection, StoryTitle} from '../../GlobalStyles';

// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';
import {boolean} from '@storybook/addon-knobs';

function StartAndEnd(): ReactElement {
  const {theme} = useDooboo();

  return (
    <StoryContainer>
      <StoryTitle>Start and end element</StoryTitle>
      <StorySection>
        <Button
          startElement={
            boolean('startElement', true) ? (
              <Icon
                name="home-light"
                color={theme.text.contrast}
                style={{marginRight: 8}}
              />
            ) : undefined
          }
          // eslint-disable-next-line no-console
          onPress={() => console.log(`press button with startElement`)}
          text="HOME"
          style={{margin: 4}}
        />
        <Button
          endElement={
            boolean('startElement', true) ? (
              <Icon
                name="home-light"
                color={theme.text.contrast}
                style={{marginLeft: 8}}
              />
            ) : undefined
          }
          // eslint-disable-next-line no-console
          onPress={() => console.log(`press button with endElement`)}
          text="HOME"
          style={{margin: 4}}
        />
      </StorySection>
    </StoryContainer>
  );
}

export default StartAndEnd;
