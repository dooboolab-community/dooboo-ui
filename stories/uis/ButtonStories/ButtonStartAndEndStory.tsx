// Caveat: Expo web needs React to be imported
import React from 'react';
import {boolean, number, select} from '@storybook/addon-knobs';

import type {ButtonColorType, ButtonSizeType, ButtonType} from '../../../main';
import {Button, Icon} from '../../../main';
import {StoryContainer, StorySection, StoryTitle} from '../../GlobalStyles';
import {buttonColors, buttonSizes, buttonTypes} from '../const';

function ButtonStartAndEndStory(): JSX.Element {
  const type = select<ButtonType>('type', buttonTypes, 'solid');
  const color = select<ButtonColorType>('color', buttonColors, 'primary');
  const size = select<ButtonSizeType>('size', buttonSizes, 'medium');
  const disabled = boolean('disabled', false);
  const loading = boolean('loading', false);
  const activeOpacity = number('activeOpacity', 0.8);

  return (
    <StoryContainer>
      <StoryTitle>Start and end element</StoryTitle>
      <StorySection>
        <Button
          activeOpacity={activeOpacity}
          color={color}
          disabled={disabled}
          loading={loading}
          // eslint-disable-next-line no-console
          onPress={() => console.log(`press button with startElement`)}
          size={size}
          startElement={
            boolean('showElement', true) ? (
              <Icon name="House" style={{marginRight: 8}} />
            ) : undefined
          }
          // eslint-disable-next-line no-console
          style={{margin: 4}}
          text="HOME"
          type={type}
        />
        <Button
          activeOpacity={activeOpacity}
          color={color}
          disabled={disabled}
          endElement={
            boolean('showElement', true) ? (
              <Icon name="House" style={{marginLeft: 8}} />
            ) : undefined
          }
          loading={loading}
          // eslint-disable-next-line no-console
          onPress={() => console.log(`press button with endElement`)}
          size={size}
          // eslint-disable-next-line no-console
          style={{margin: 4}}
          text="HOME"
          type={type}
        />
      </StorySection>
    </StoryContainer>
  );
}

export default ButtonStartAndEndStory;
