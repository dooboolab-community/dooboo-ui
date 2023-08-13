// Caveat: Expo web needs React to be imported
import React from 'react';
import {boolean, number, select} from '@storybook/addon-knobs';

import type {ButtonSizeType} from '../../../../main';
import {Button} from '../../../../main';
import {StorySection} from '../../../GlobalStyles';
import {buttonColors, buttonSizes} from '../../const';

function SolidButtonColors(): JSX.Element {
  const size = select<ButtonSizeType>('size', buttonSizes, 'medium');
  const disabled = boolean('disabled', false);
  const activeOpacity = number('activeOpacity', 0.8);

  return (
    <StorySection>
      {buttonColors.map((color) => (
        <Button
          key={color}
          color={color}
          size={size}
          disabled={disabled}
          activeOpacity={activeOpacity}
          text={color.toUpperCase()}
          style={{margin: 4}}
          // eslint-disable-next-line no-console
          onPress={() => console.log(`press ${color} solid button`)}
        />
      ))}
    </StorySection>
  );
}

export default SolidButtonColors;
