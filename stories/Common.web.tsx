// Caveat: Expo web needs React to be imported
import type {ReactNode} from 'react';
import React, {useEffect} from 'react';
import type {ViewStyle} from 'react-native';
import {StatusBar, View} from 'react-native';
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
  }, [changeThemeType, storybookTheme, themeType]);

  if (!assetLoaded) {
    return <LoadingIndicator />;
  }

  return (
    <View
      style={[
        css`
          background-color: ${isDark ? '#1E1D1D' : '#EDEDED'};
          height: 200px;
          padding: 24px;
        `,
        style,
      ]}
    >
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <View
        style={css`
          flex: 1;
        `}
      >
        {children}
      </View>
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
  return (
    <DoobooProvider>
      <WrapperWeb style={style}>{children}</WrapperWeb>
    </DoobooProvider>
  );
}
