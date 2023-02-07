import {StoryContainer, StoryTitle} from '../../GlobalStyles';
import {boolean, number} from '@storybook/addon-knobs';

import {Accordion} from '../../../main/components/Accordion';
import type {AccordionListType} from '../../../main/components/Accordion';
// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';
import styled from '@emotion/native';

const ScrollContainer = styled.ScrollView`
  width: 100%;
`;

const data: AccordionListType = [
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

const AccordionBasic = (): ReactElement => {
  return (
    <ScrollContainer>
      <StoryContainer style={{justifyContent: 'flex-start'}}>
        <StoryTitle style={{fontSize: 18, marginBottom: 8}}>Basic</StoryTitle>
        <Accordion
          data={data}
          shouldAnimate={boolean('shouldAnimate', true)}
          animDuration={number('animDuration', 200)}
        />
      </StoryContainer>
    </ScrollContainer>
  );
};

export default AccordionBasic;
