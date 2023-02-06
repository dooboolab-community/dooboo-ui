import OutlinedButtonColors from './OutlinedButtonColors';
import type {ReactElement} from 'react';
import SolidButtonColors from './SolidButtonColors';
import TextButtonColors from './TextButtonColors';
import type {ThemeType} from '@dooboo-ui/theme';

function ColorButtons({themeType}: {themeType: ThemeType}): ReactElement {
  return (
    <>
      <TextButtonColors themeType={themeType} />
      <SolidButtonColors themeType={themeType} />
      <OutlinedButtonColors themeType={themeType} />
    </>
  );
}

export default ColorButtons;
