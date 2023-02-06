import Counter from './Counter';
import {Description} from '../../../../GlobalStyles';
import GoogleSignIn from './GoogleSignIn';
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
