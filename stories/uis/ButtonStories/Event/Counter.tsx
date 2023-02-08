// Caveat: Expo web needs React to be imported
import React, {useState} from 'react';
import {StoryDescription, StorySection} from '../../../GlobalStyles';

import {Button} from '../../../../main';
import type {ReactElement} from 'react';
import {action} from '@storybook/addon-actions';
import {useButtonKnobs} from '../useButtonKnobs';

function Counter(): ReactElement {
  const [count, setCount] = useState(0);
  const {color, size, activeOpacity, disabled, loading, type} =
    useButtonKnobs();

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
