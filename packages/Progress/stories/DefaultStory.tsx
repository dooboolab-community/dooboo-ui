import Progress from '../lib';
import React, {useEffect, useState} from 'react';

import styled from '@emotion/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #fff;
`;

const DefaultStory: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress + Math.random() * 0.2;
        if (nextProgress >= 1) {
          clearInterval(interval);
        }

        return nextProgress;
      });
    }, 200);
  }, []);

  return (
    <Container>
      <Progress.Circle progress={progress} />
    </Container>
  );
};

export default DefaultStory;
