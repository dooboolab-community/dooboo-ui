import type {ComponentProps} from 'react';
import styled from '@emotion/native';

import {Accordion} from '../../../main/uis/Accordion';
import {StoryContainer, StoryTitle} from '../../GlobalStyles';

const ScrollContainer = styled.ScrollView`
  width: 100%;
`;

function AccordionBasic(props: ComponentProps<typeof Accordion>): JSX.Element {
  return (
    <ScrollContainer>
      <StoryContainer>
        <StoryTitle style={{fontSize: 18, marginBottom: 8}}>Basic</StoryTitle>
        <Accordion {...props} />
      </StoryContainer>
    </ScrollContainer>
  );
}

export default AccordionBasic;
