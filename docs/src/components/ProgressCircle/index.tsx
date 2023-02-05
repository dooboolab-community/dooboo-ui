import {DoobooProvider, ProgressCircle} from 'dooboo-ui';
import React, {useEffect, useState} from 'react';

import type {ReactElement} from 'react';
import styled from '@emotion/native';

const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 300px;
  align-self: stretch;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.bg.basic};
`;

function ProgressView(): ReactElement {
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

  return (
    <Container>
      <ProgressCircle progress={progress} />
    </Container>
  );
}

function Basic(): ReactElement {
  return (
    <DoobooProvider>
      <ProgressView />
    </DoobooProvider>
  );
}

export default Basic;
