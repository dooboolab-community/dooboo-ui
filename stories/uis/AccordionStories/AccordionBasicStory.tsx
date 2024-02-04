import type {ComponentProps} from 'react';

import {Accordion} from '../../../main/uis/Accordion';
import {StoryWrapper} from '../../Common';

export default function AccordionBasic(
  props: ComponentProps<typeof Accordion>,
): JSX.Element {
  return (
    <StoryWrapper>
      <Accordion {...props} />
    </StoryWrapper>
  );
}
