import OutlinedButtonColors from './OutlinedButtonColors';
// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';
import SolidButtonColors from './SolidButtonColors';
import TextButtonColors from './TextButtonColors';

function ColorButtons(): ReactElement {
  return (
    <>
      <TextButtonColors />
      <SolidButtonColors />
      <OutlinedButtonColors />
    </>
  );
}

export default ColorButtons;
