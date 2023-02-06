import React, {useEffect, useState} from 'react';
import {
  boolean as booleanInput,
  number as numberInput,
  select as selectInput,
} from '@storybook/addon-knobs';

import type {DoobooTheme} from '@dooboo-ui/theme';
import {ProgressCircle} from '../../../main';
import styled from '@emotion/native';
import {useTheme} from '@dooboo-ui/theme';

type DoobooThemeContext = {theme?: DoobooTheme};

const Container = styled.View<DoobooThemeContext>`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: ${({theme}) => theme.bg.basic};
`;

const DefaultStory: React.FC = () => {
  const {changeThemeType} = useTheme();
  const progressInput = numberInput('progress', 0);
  const autoPlay = booleanInput('auto play', true);

  const type = selectInput(
    'type',
    ['success', 'info', 'warning', 'danger'],
    'info',
  );
  const themeType = selectInput('themeType', ['light', 'dark'], 'light');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(progressInput ?? 0);

    if (!autoPlay) {
      return;
    }

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
      Math.floor(Math.random() * 500 + 100),
    );

    return () => clearTimeout(timeout);
  }, [progressInput, autoPlay]);

  useEffect(() => {
    changeThemeType(themeType);
  }, [changeThemeType, themeType]);

  return (
    <Container>
      <ProgressCircle type={type} progress={progress} />
    </Container>
  );
};

export default DefaultStory;
