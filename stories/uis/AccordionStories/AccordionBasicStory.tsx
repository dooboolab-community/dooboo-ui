import type {ReactElement} from 'react';
// Caveat: Expo web needs React to be imported
import React from 'react';
import styled from '@emotion/native';
import {action} from '@storybook/addon-actions';
import {boolean, number} from '@storybook/addon-knobs';

import {useDooboo} from '../../../main';
import type {AccordionItemDataType} from '../../../main/uis/Accordion';
import {Accordion} from '../../../main/uis/Accordion';
import {StoryContainer, StoryTitle} from '../../GlobalStyles';

const ScrollContainer = styled.ScrollView`
  width: 100%;
`;

const StyledTitle = styled.Text`
  font-weight: bold;
  color: ${({theme}) => theme.text.contrast};
  position: absolute;
  padding: 0px 20px;
`;

const StyledItem = styled.Text`
  color: ${({theme}) => theme.text.basic};
  padding: 0px 20px;
`;

const data: AccordionItemDataType<string, string>[] = [
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

const AccordionBasic = (): ReactElement => {
  const {theme} = useDooboo();

  return (
    <ScrollContainer>
      <StoryContainer>
        <StoryTitle style={{fontSize: 18, marginBottom: 8}}>Basic</StoryTitle>
        <Accordion<string, string>
          styles={{bodyContainer: {backgroundColor: theme.bg.paper}}}
          shouldAnimate={boolean('shouldAnimate', true)}
          animDuration={number('animDuration', 200)}
          activeOpacity={number('activeOpacity', 0.8)}
          collapseOnStart={boolean('collapseOnStart', true)}
          data={data}
          onPressItem={action('onPressItem')}
          renderTitle={(title) => <StyledTitle>{title}</StyledTitle>}
          renderItem={(item) => <StyledItem>{item}</StyledItem>}
        />
      </StoryContainer>
    </ScrollContainer>
  );
};

export default AccordionBasic;
