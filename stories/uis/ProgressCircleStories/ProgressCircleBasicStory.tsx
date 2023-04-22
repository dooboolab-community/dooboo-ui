// Caveat: Expo web needs React to be imported
import type {ReactElement} from 'react';
import React, {useEffect, useState} from 'react';
import {
  boolean as booleanInput,
  number,
  number as numberInput,
  select as selectInput,
} from '@storybook/addon-knobs';

import type {ButtonColorType} from '../../../main';
import {ProgressCircle} from '../../../main';
import {StoryContainer, StoryTitle} from '../../GlobalStyles';

function ProgressCircleBasicStory(): ReactElement {
  const progressInput = numberInput('progress', 0);
  const autoPlay = booleanInput('auto play', true);

  const color = selectInput<ButtonColorType>(
    'type',
    ['success', 'info', 'warning', 'danger', 'light', 'secondary'],
    'info',
  );

  const baseStrokeWidth = number('baseStrokeWidth', 0.3);

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

  return (
    <StoryContainer>
      <StoryTitle>Basic</StoryTitle>
      <ProgressCircle
        color={color}
        progress={progress}
        baseStrokeWidth={baseStrokeWidth}
      />
    </StoryContainer>
  );
}

export default ProgressCircleBasicStory;
