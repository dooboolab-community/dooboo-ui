// Caveat: Expo web needs React to be imported
import React from 'react';
import {boolean, number, select} from '@storybook/addon-knobs';

import type {ButtonColorType, ButtonSizeType} from '../../../main';
import {Button} from '../../../main';
import {StoryContainer, StorySection, StoryTitle} from '../../GlobalStyles';
import {buttonColors} from '../const';

function ButtonSizeStory(): JSX.Element {
  const sizes: ButtonSizeType[] = ['small', 'medium', 'large'];
  const color = select<ButtonColorType>('color', buttonColors, 'primary');

  return (
    <StoryContainer>
      <StoryTitle>Sizes</StoryTitle>
      <StorySection>
        {sizes.map((size) => (
          <Button
            activeOpacity={number('activeOpacity', 0.8)}
            color={color}
            disabled={boolean('disabled', false)}
            key={size}
            // eslint-disable-next-line no-console
            onPress={() => console.log(`press ${size} button`)}
            size={size}
            style={{margin: 4}}
            text={size.toUpperCase()}
          />
        ))}

        {sizes.map((size) => (
          <Button
            activeOpacity={number('activeOpacity', 0.8)}
            color={color}
            disabled={boolean('disabled', false)}
            key={size}
            // eslint-disable-next-line no-console
            onPress={() => console.log(`press ${size} button`)}
            size={size}
            style={{margin: 4}}
            text={size.toUpperCase()}
            type="outlined"
          />
        ))}
      </StorySection>
    </StoryContainer>
  );
}

export default ButtonSizeStory;
