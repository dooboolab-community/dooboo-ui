import Counter from './Counter';
import GoogleSignIn from './GoogleSignIn';
// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';
import {StoryDescription} from '../../../GlobalStyles';

function ButtonEventStory(): ReactElement {
  return (
    <>
      <StoryDescription>Counter</StoryDescription>
      <Counter />

      <StoryDescription>Google Sign In</StoryDescription>
      <GoogleSignIn />
    </>
  );
}

export default ButtonEventStory;
