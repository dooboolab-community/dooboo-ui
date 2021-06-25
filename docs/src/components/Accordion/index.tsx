import {Accordion, ThemeProvider} from 'dooboo-ui';
import React, {ReactElement} from 'react';

import {IC_ARR_DOWN} from '../../icon';
import styled from '@emotion/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 600px;
`;

const Arrow = styled.Image`
  width: 20px;
  height: 20px;
`;

const data = [
  {
    title: 'Lists',
    bodies: ['user', 'mail', 'plan'],
  },
  {
    title: 'mail',
    bodies: ['mail list', 'category', 'bin'],
  },
  {
    title: 'Reports',
    bodies: ['report list', 'statistics'],
  },
];

export const AccordionStory = (): ReactElement => {
  return (
    <Container>
      <Accordion
        data={data}
        shouldAnimate={true}
        collapseOnStart={true}
        animDuration={400}
        activeOpacity={1}
        toggleElement={
          <Arrow style={{tintColor: 'white'}} source={IC_ARR_DOWN} />
        }
      />
    </Container>
  );
};

const Default = (): ReactElement => (
  <ThemeProvider initialThemeType="light">
    <AccordionStory />
  </ThemeProvider>
);

export default Default;
