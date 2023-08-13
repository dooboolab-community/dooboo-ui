// Caveat: Expo web needs React to be imported
import React from 'react';
import styled from '@emotion/native';
import {action} from '@storybook/addon-actions';
import {boolean, number} from '@storybook/addon-knobs';

import {Accordion} from '../../../main/uis/Accordion';
import {StoryContainer, StoryTitle} from '../../GlobalStyles';

const ScrollContainer = styled.ScrollView`
  width: 100%;
`;

const data = [
  {
    title: 'Lists',
    items: ['User', 'Mail', 'Text'],
  },
  {
    title: 'Lists',
    items: ['User', 'Mail', 'Text'],
  },
  {
    title: 'Lists',
    items: ['User', 'Mail', 'Text'],
  },
];

const AccordionBasic = (): JSX.Element => {
  return (
    <ScrollContainer>
      <StoryContainer>
        <StoryTitle style={{fontSize: 18, marginBottom: 8}}>Basic</StoryTitle>
        <Accordion<string, string>
          shouldAnimate={boolean('shouldAnimate', true)}
          animDuration={number('animDuration', 200)}
          activeOpacity={number('activeOpacity', 0.8)}
          collapseOnStart={boolean('collapseOnStart', true)}
          data={data}
          onPressItem={action('onPressItem')}
        />
      </StoryContainer>
    </ScrollContainer>
  );
};

export default AccordionBasic;
