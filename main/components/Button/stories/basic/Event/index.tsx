import Counter from './Counter';
import {Description} from '../../../../../GlobalStyles';
import GoogleSignIn from './GoogleSignIn';
import type {ReactElement} from 'react';
import type {ThemeType} from '@dooboo-ui/theme';

function Event({themeType}: {themeType: ThemeType}): ReactElement {
  return (
    <>
      <Description>Counter</Description>
      <Counter themeType={themeType} />

      <Description>Google Sign In</Description>
      <GoogleSignIn themeType={themeType} />
    </>
  );
}

export default Event;
