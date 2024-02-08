// Caveat: Expo web needs React to be imported
import type {ReactNode} from 'react';
import React, {useEffect} from 'react';
import type {ViewStyle} from 'react-native';
import {View} from 'react-native';
import {css} from '@emotion/native';
import {useDarkMode} from 'storybook-dark-mode';

import {DoobooProvider, LoadingIndicator, useDooboo} from '../main';

type ContainerProps = {
  children: ReactNode;
  style?: ViewStyle;
};

function WrapperWeb({children, style}: ContainerProps): JSX.Element {
  const {themeType, changeThemeType, assetLoaded} = useDooboo();
  const isDark = useDarkMode();
  const storybookTheme = isDark ? 'dark' : 'light';

  useEffect(() => {
    if (storybookTheme !== themeType) {
      changeThemeType();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storybookTheme, themeType]);

  if (!assetLoaded) {
    return <LoadingIndicator />;
  }

  return (
    <View
      style={[
        css`
          background-color: ${isDark ? '#1E1D1D' : '#EDEDED'};
          padding: 24px;
        `,
        style,
      ]}
    >
      {children}
    </View>
  );
}

export function StoryWrapper({
  children,
  style,
}: {
  children: ReactNode;
  style: ViewStyle;
}): JSX.Element {
  const isDark = useDarkMode();

  return (
    <DoobooProvider
      themeConfig={{
        initialThemeType: isDark ? 'dark' : 'light',
      }}
    >
      <WrapperWeb style={style}>{children}</WrapperWeb>
    </DoobooProvider>
  );
}
