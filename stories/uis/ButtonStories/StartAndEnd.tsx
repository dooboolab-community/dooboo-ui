import {Button, Icon} from '../../../main';
import {StoryContainer, StorySection, StoryTitle} from '../../GlobalStyles';

// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';
import {boolean} from '@storybook/addon-knobs';
import {useButtonKnobs} from './useButtonKnobs';

function StartAndEnd(): ReactElement {
  const {color, type, disabled, activeOpacity, loading, size} =
    useButtonKnobs();

  return (
    <StoryContainer>
      <StoryTitle>Start and end element</StoryTitle>
      <StorySection>
        <Button
          color={color}
          type={type}
          disabled={disabled}
          activeOpacity={activeOpacity}
          loading={loading}
          size={size}
          startElement={
            boolean('showElement', true) ? (
              <Icon name="home-light" style={{marginRight: 8}} />
            ) : undefined
          }
          // eslint-disable-next-line no-console
          onPress={() => console.log(`press button with startElement`)}
          text="HOME"
          style={{margin: 4}}
        />
        <Button
          color={color}
          type={type}
          disabled={disabled}
          activeOpacity={activeOpacity}
          loading={loading}
          size={size}
          endElement={
            boolean('showElement', true) ? (
              <Icon name="home-light" style={{marginLeft: 8}} />
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
