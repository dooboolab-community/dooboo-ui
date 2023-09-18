// Caveat: Expo web needs React to be imported
import React from 'react';
import {select} from '@storybook/addon-knobs';

import type {ButtonColorType, ButtonSizeType, ButtonType} from '../../../main';
import {Button} from '../../../main';
import {StoryContainer, StorySection, StoryTitle} from '../../GlobalStyles';
import {buttonColors, buttonSizes} from '../const';

function ButtonDisabledStory(): JSX.Element {
  const types: ButtonType[] = ['text', 'solid', 'outlined'];
  const color = select<ButtonColorType>('color', buttonColors, 'primary');
  const size = select<ButtonSizeType>('size', buttonSizes, 'medium');

  return (
    <StoryContainer>
      <StoryTitle>Disabled</StoryTitle>
      <StorySection>
        {types.map((type) => (
          <Button
            color={color}
            disabled={true}
            key={type}
            size={size}
            style={{margin: 2}}
            text="TEXT"
            type={type}
          />
        ))}
      </StorySection>
    </StoryContainer>
  );
}

export default ButtonDisabledStory;
