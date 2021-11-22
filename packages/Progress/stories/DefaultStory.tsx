import Progress from '../lib';
import React, {useEffect, useState} from 'react';

import styled from '@emotion/native';
import {
  number as numberInput,
  boolean as booleanInput,
  color as colorInput,
} from '@storybook/addon-knobs';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #fff;
`;

const DefaultStory: React.FC = () => {
  const progressInput = numberInput('progress', 0);
  const autoPlay = booleanInput('auto play', true);
  const color = colorInput('color', '#00f');
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
    <Container>
      <Progress.Circle
        progress={progress}
        strokeWidth={numberInput('strokeWidth', 5)}
        size={numberInput('size', 70)}
        radius={numberInput('radius', 30)}
        color={color}
        style={{
          text: {
            color: colorInput('text color', '#000'),
          },
        }}
      />
    </Container>
  );
};

export default DefaultStory;
