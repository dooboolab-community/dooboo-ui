import type {ButtonColorType, ButtonSizeType} from '../../../main';
import {StoryContainer, StorySection, StoryTitle} from '../../GlobalStyles';
import {boolean, number, select} from '@storybook/addon-knobs';

import {Button} from '../../../main';
// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';
import {buttonColors} from '../const';

function ButtonSizeStory(): ReactElement {
  const sizes: ButtonSizeType[] = ['small', 'medium', 'large'];
  const color = select<ButtonColorType>('color', buttonColors, 'primary');

  return (
    <StoryContainer>
      <StoryTitle>Sizes</StoryTitle>
      <StorySection>
        {sizes.map((size) => (
          <Button
            key={size}
            size={size}
            color={color}
            disabled={boolean('disabled', false)}
            activeOpacity={number('activeOpacity', 0.8)}
            text={size.toUpperCase()}
            style={{margin: 4}}
            // eslint-disable-next-line no-console
            onPress={() => console.log(`press ${size} button`)}
          />
        ))}

        {sizes.map((size) => (
          <Button
            key={size}
            size={size}
            color={color}
            type="outlined"
            disabled={boolean('disabled', false)}
            activeOpacity={number('activeOpacity', 0.8)}
            text={size.toUpperCase()}
            style={{margin: 4}}
            // eslint-disable-next-line no-console
            onPress={() => console.log(`press ${size} button`)}
          />
        ))}
      </StorySection>
    </StoryContainer>
  );
}

export default ButtonSizeStory;
