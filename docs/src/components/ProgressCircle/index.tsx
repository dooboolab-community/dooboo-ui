import {DoobooProvider, ProgressCircle, useDooboo} from 'dooboo-ui';
import React, {useEffect, useState} from 'react';

import type {ReactElement} from 'react';
import styled from '@emotion/native';
import {useDarkMode} from 'storybook-dark-mode';

const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 300px;
  align-self: stretch;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.bg.basic};
`;

export function StoryWrapper(): ReactElement {
  const {themeType, changeThemeType} = useDooboo();
  const isDark = useDarkMode();
  const storybookTheme = isDark ? 'dark' : 'light';

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timeout;

    const timeoutCallback = (): void => {
      setProgress((prevProgress: number): number => {
        const nextProgress = prevProgress + Math.random() * 0.2;

        timeout = setTimeout(
          timeoutCallback,
          nextProgress >= 1 ? 1000 : Math.floor(Math.random() * 300 + 100),
        );

        if (prevProgress >= 1) {
          return 0;
        }

        return nextProgress;
      });
    };

    timeout = setTimeout(
      timeoutCallback,
      Math.floor(Math.random() * 300 + 100),
    );

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (storybookTheme !== themeType) {
      changeThemeType();
    }
  }, [changeThemeType, storybookTheme, themeType]);

  return (
    <Container>
      <ProgressCircle progress={progress} />
    </Container>
  );
}

export default function StoryProvider(): ReactElement {
  const isDark = useDarkMode();

  return (
    <DoobooProvider themeConfig={{initialThemeType: isDark ? 'dark' : 'light'}}>
      <StoryWrapper />
    </DoobooProvider>
  );
}
