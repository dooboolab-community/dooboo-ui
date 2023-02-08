import {Button} from '../../../../main';
import type {ButtonColorType} from '../../../../main';
// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';
import {StorySection} from '../../../GlobalStyles';
import {useButtonKnobs} from '../useButtonKnobs';

function OutlinedButtonColors(): ReactElement {
  const colors: ButtonColorType[] = [
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'info',
    'light',
  ];

  const {size, disabled, activeOpacity} = useButtonKnobs();

  return (
    <StorySection>
      {colors.map((color) => (
        <Button
          key={color}
          type="outlined"
          size={size}
          disabled={disabled}
          activeOpacity={activeOpacity}
          text={color.toUpperCase()}
          style={{margin: 4}}
          // eslint-disable-next-line no-console
          onPress={() => console.log(`press ${color} outlined button`)}
        />
      ))}
    </StorySection>
  );
}

export default OutlinedButtonColors;
