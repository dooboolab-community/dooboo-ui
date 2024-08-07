// Caveat: Expo web needs React to be imported
import type {ReactNode} from 'react';
import React, {useState} from 'react';
import type {ViewStyle} from 'react-native';
import {StatusBar, View} from 'react-native';
import {css} from '@emotion/native';

// import {useDarkMode} from 'storybook-dark-mode';
import {
  DoobooProvider,
  LoadingIndicator,
  SwitchToggle,
  Typography,
  useDooboo,
} from '../main';

import {ScrollContainer, StoryContainer} from './GlobalStyles';

type ContainerProps = {
  children: ReactNode;
  style?: ViewStyle;
};

function Wrapper({children, style}: ContainerProps): JSX.Element {
  const {themeType, changeThemeType, assetLoaded} = useDooboo();
  const [isDark, setIsDark] = useState(themeType === 'dark');

  if (!assetLoaded) {
    return <LoadingIndicator />;
  }

  return (
    <StoryContainer>
      <StatusBar barStyle="dark-content" />
      <View
        style={css`
          margin-bottom: 12px;

          flex-direction: row;
          align-items: center;
          justify-content: flex-end;
        `}
      >
        <Typography.Heading3>{themeType}</Typography.Heading3>
        <SwitchToggle
          isOn={isDark}
          onPress={() => {
            setIsDark(!isDark);
            changeThemeType();
          }}
          size="small"
          style={css`
            padding: 8px;
          `}
        />
      </View>
      <ScrollContainer
        contentContainerStyle={css`
          flex: 1;
        `}
      >
        <View style={style}>{children}</View>
      </ScrollContainer>
    </StoryContainer>
  );
}

export function StoryWrapper({
  children,
  style,
}: {
  children: ReactNode;
  style?: ViewStyle;
}): JSX.Element {
  return (
    <DoobooProvider>
      <Wrapper style={style}>{children}</Wrapper>
    </DoobooProvider>
  );
}
