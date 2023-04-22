import type {ReactElement} from 'react';
// Caveat: Expo web needs React to be imported
import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {boolean, number, select} from '@storybook/addon-knobs';

import type {
  ButtonColorType,
  ButtonSizeType,
  ButtonType,
} from '../../../../main';
import {Button} from '../../../../main';
import {StoryDescription, StorySection} from '../../../GlobalStyles';
import {buttonColors, buttonSizes, buttonTypes} from '../../const';

function Counter(): ReactElement {
  const [count, setCount] = useState(0);

  const type = select<ButtonType>('type', buttonTypes, 'solid');
  const color = select<ButtonColorType>('color', buttonColors, 'primary');
  const size = select<ButtonSizeType>('size', buttonSizes, 'medium');
  const disabled = boolean('disabled', false);
  const loading = boolean('loading', false);
  const activeOpacity = number('activeOpacity', 0.8);

  return (
    <StorySection>
      <Button
        activeOpacity={activeOpacity}
        disabled={disabled}
        loading={loading}
        type={type}
        size={size}
        color={color}
        style={{margin: 4}}
        onPress={(e): void => {
          setCount(count + 1);
          action('PLUS COUNT 1')(e);
        }}
        text="+"
      />
      <Button
        activeOpacity={activeOpacity}
        disabled={disabled}
        loading={loading}
        type={type}
        size={size}
        style={{margin: 4}}
        onPress={(e): void => {
          setCount(count - 1);
          action('MINUS COUNT 1')(e);
        }}
        text="-"
      />
      <StoryDescription>Count : {count}</StoryDescription>
    </StorySection>
  );
}

export default Counter;
