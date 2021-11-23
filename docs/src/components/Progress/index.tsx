import React, {useEffect, useState} from 'react';

import Progress from '@dooboo-ui/progress';
import {ThemeProvider, useTheme} from '@dooboo-ui/theme';
import styled from '@emotion/native';

const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 300px;
  align-self: stretch;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.background};
`;

const ProgressView: React.FC = () => {
  const {theme} = useTheme();
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
      <Progress.Circle
        progress={progress}
        color={theme.primary}
        styles={{text: {color: theme.text}}}
      />
    </Container>
  );
};

const Basic: React.FC = () => {
  return (
    <ThemeProvider>
      <ProgressView />
    </ThemeProvider>
  );
};

export default Basic;
