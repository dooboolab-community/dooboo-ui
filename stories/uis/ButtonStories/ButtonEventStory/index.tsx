// Caveat: Expo web needs React to be imported
import React from 'react';

import {StoryDescription} from '../../../GlobalStyles';

import Counter from './Counter';
import GoogleSignIn from './GoogleSignIn';

function ButtonEventStory(): JSX.Element {
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
