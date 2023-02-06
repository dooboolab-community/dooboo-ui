import OutlinedButtonColors from './OutlinedButtonColors';
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
