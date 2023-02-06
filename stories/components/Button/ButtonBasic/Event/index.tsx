import Counter from './Counter';
import {Description} from '../../../../GlobalStyles';
import GoogleSignIn from './GoogleSignIn';
// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';

function Event(): ReactElement {
  return (
    <>
      <Description>Counter</Description>
      <Counter />

      <Description>Google Sign In</Description>
      <GoogleSignIn />
    </>
  );
}

export default Event;
