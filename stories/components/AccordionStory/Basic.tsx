import {StoryContainer, StoryTitle} from '../../GlobalStyles';
import {boolean, number, object} from '@storybook/addon-knobs';

import {Accordion} from '../../../main/components/Accordion';
import type {AccordionListType} from '../../../main/components/Accordion';
// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';
import styled from '@emotion/native';

const ScrollContainer = styled.ScrollView`
  width: 100%;
`;

const AccordionBasic = ({data}: {data: AccordionListType}): ReactElement => {
  return (
    <ScrollContainer>
      <StoryContainer>
        <StoryTitle style={{fontSize: 18, marginBottom: 8}}>Basic</StoryTitle>
        <Accordion
          shouldAnimate={boolean('shouldAnimate', true)}
          animDuration={number('animDuration', 200)}
          activeOpacity={number('activeOpacity', 1)}
          collapseOnStart={boolean('collapseOnStart', true)}
          data={object('data', data)}
        />
      </StoryContainer>
    </ScrollContainer>
  );
};

export default AccordionBasic;
