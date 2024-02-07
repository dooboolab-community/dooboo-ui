// Caveat: Expo web needs React to be imported
import type {ReactNode} from 'react';
import React, {useState} from 'react';
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
};

function Wrapper({children}: ContainerProps): JSX.Element {
  const {themeType, changeThemeType, assetLoaded} = useDooboo();
  const [on, off] = useState(themeType === 'dark');

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
          isOn={on}
          onPress={() => {
            off(!on);
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
        {children}
      </ScrollContainer>
    </StoryContainer>
  );
}

export function StoryWrapper({children}: {children: ReactNode}): JSX.Element {
  return (
    <DoobooProvider>
      <Wrapper>{children}</Wrapper>
    </DoobooProvider>
  );
}
