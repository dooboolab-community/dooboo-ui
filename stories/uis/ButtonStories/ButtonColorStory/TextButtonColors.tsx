import type {ReactElement} from 'react';
// Caveat: Expo web needs React to be imported
import React from 'react';
import {boolean, number, select} from '@storybook/addon-knobs';

import type {ButtonSizeType} from '../../../../main';
import {Button} from '../../../../main';
import {StorySection} from '../../../GlobalStyles';
import {buttonColors, buttonSizes} from '../../const';

function TextButtonColors(): ReactElement {
  const size = select<ButtonSizeType>('size', buttonSizes, 'medium');
  const disabled = boolean('disabled', false);
  const activeOpacity = number('activeOpacity', 0.8);

  return (
    <StorySection>
      {buttonColors.map((color) => (
        <Button
          key={color}
          type="text"
          disabled={disabled}
          activeOpacity={activeOpacity}
          color={color}
          size={size}
          text={color.toUpperCase()}
          style={{margin: 4}}
          // eslint-disable-next-line no-console
          onPress={() => console.log(`press ${color} text button`)}
        />
      ))}
    </StorySection>
  );
}

export default TextButtonColors;
