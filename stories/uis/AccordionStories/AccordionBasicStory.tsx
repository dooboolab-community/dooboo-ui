import type {ComponentProps} from 'react';
import styled from '@emotion/native';

import {Accordion} from '../../../main/uis/Accordion';
import {StoryContainer, StoryTitle} from '../../GlobalStyles';

const ScrollContainer = styled.ScrollView`
  width: 100%;
`;

function AccordionBasic(props: ComponentProps<typeof Accordion>): JSX.Element {
  return (
    <StoryContainer>
      <StoryTitle>Basic</StoryTitle>
      <ScrollContainer>
        <Accordion {...props} />
      </ScrollContainer>
    </StoryContainer>
  );
}

export default AccordionBasic;
