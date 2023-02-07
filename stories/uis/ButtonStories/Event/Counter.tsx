// Caveat: Expo web needs React to be imported
import React, {useState} from 'react';
import {StoryDescription, StorySection} from '../../../GlobalStyles';

import {Button} from '../../../../main';
import type {ReactElement} from 'react';
import {action} from '@storybook/addon-actions';

function Counter(): ReactElement {
  const [count, setCount] = useState(0);

  return (
    <StorySection>
      <Button
        style={{margin: 4}}
        onPress={(e): void => {
          setCount(count + 1);
          action('PLUS COUNT 1')(e);
        }}
        text="+"
      />
      <Button
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
