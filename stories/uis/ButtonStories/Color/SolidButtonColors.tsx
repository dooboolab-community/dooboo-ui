import {boolean, number} from '@storybook/addon-knobs';

import {Button} from '../../../../main';
import type {ButtonColorType} from '../../../../main';
// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';
import {StorySection} from '../../../GlobalStyles';

function SolidButtonColors(): ReactElement {
  const colors: ButtonColorType[] = [
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'info',
    'light',
  ];

  return (
    <StorySection>
      {colors.map((color) => (
        <Button
          key={color}
          color={color}
          disabled={boolean('disabled', false)}
          activeOpacity={number('activeOpacity', 0.8)}
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
