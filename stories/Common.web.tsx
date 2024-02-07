// Caveat: Expo web needs React to be imported
import type {ReactNode} from 'react';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {useDarkMode} from 'storybook-dark-mode';

import {DoobooProvider, LoadingIndicator, useDooboo} from '../main';

type ContainerProps = {
  children: ReactNode;
};

function WrapperWeb({children}: ContainerProps): JSX.Element {
  const {themeType, changeThemeType, assetLoaded} = useDooboo();
  const isDark = useDarkMode();
  const storybookTheme = isDark ? 'dark' : 'light';

  useEffect(() => {
    if (storybookTheme !== themeType) {
      changeThemeType();
    }
  }, [changeThemeType, storybookTheme, themeType]);

  if (!assetLoaded) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      {children}
    </>
  );
}

export function StoryWrapper({children}: {children: ReactNode}): JSX.Element {
  return (
    <DoobooProvider>
      <WrapperWeb>{children}</WrapperWeb>
    </DoobooProvider>
  );
}
