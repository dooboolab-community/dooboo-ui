// Caveat: Expo web needs React to be imported
import React from 'react';
import styled from '@emotion/native';
import {action} from '@storybook/addon-actions';

import {Accordion} from '../../../main/uis/Accordion';
import {StoryContainer, StoryTitle} from '../../GlobalStyles';

const ScrollContainer = styled.ScrollView`
  width: 100%;
`;

type AccordionBasicProps = {
  activityOpacity?: number;
  animDuration?: number;
  collapseOnStart?: boolean;
  data?: Array<{title: string; items: string[]}>;
  shouldAnimate?: boolean;
};

function AccordionBasic({
  activityOpacity,
  animDuration,
  collapseOnStart,
  data,
  shouldAnimate,
}: AccordionBasicProps): JSX.Element {
  return (
    <ScrollContainer>
      <StoryContainer>
        <StoryTitle style={{fontSize: 18, marginBottom: 8}}>Basic</StoryTitle>
        <Accordion<string, string>
          activeOpacity={activityOpacity}
          animDuration={animDuration}
          collapseOnStart={collapseOnStart}
          data={data || []}
          onPressItem={action('onPressItem')}
          shouldAnimate={shouldAnimate}
        />
      </StoryContainer>
    </ScrollContainer>
  );
}

export default AccordionBasic;
