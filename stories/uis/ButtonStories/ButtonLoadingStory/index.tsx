// Caveat: Expo web needs React to be imported
import React from 'react';
import {select} from '@storybook/addon-knobs';

import type {
  ButtonColorType,
  ButtonSizeType,
  ButtonType,
} from '../../../../main';
import {Button} from '../../../../main';
import {StoryContainer, StorySection, StoryTitle} from '../../../GlobalStyles';
import {buttonColors, buttonSizes} from '../../const';

function ButtonLoadingStory(): JSX.Element {
  const types: ButtonType[] = ['text', 'solid', 'outlined'];

  const color = select<ButtonColorType>('color', buttonColors, 'primary');

  const size = select<ButtonSizeType>('size', buttonSizes, 'medium');

  return (
    <StoryContainer>
      <StoryTitle>Loading</StoryTitle>
      <StorySection>
        {types.map((type) => (
          <Button
            key={type}
            size={size}
            color={color}
            type={type}
            loading
            style={{margin: 4}}
            // eslint-disable-next-line no-console
            onPress={() => console.log(`press ${type} button`)}
          />
        ))}
      </StorySection>
    </StoryContainer>
  );
}

export default ButtonLoadingStory;
