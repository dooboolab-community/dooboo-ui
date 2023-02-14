import type {ButtonColorType, ButtonSizeType, ButtonType} from '../../../main';
import {StoryContainer, StorySection, StoryTitle} from '../../GlobalStyles';
import {buttonColors, buttonSizes} from '../const';

import {Button} from '../../../main';
// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';
import {select} from '@storybook/addon-knobs';

function ButtonDisabledStory(): ReactElement {
  const types: ButtonType[] = ['text', 'solid', 'outlined'];
  const color = select<ButtonColorType>('color', buttonColors, 'primary');
  const size = select<ButtonSizeType>('size', buttonSizes, 'medium');

  return (
    <StoryContainer>
      <StoryTitle>Disabled</StoryTitle>
      <StorySection>
        {types.map((type) => (
          <Button
            key={type}
            size={size}
            color={color}
            type={type}
            disabled={true}
            text="TEXT"
            style={{margin: 2}}
          />
        ))}
      </StorySection>
    </StoryContainer>
  );
}

export default ButtonDisabledStory;
