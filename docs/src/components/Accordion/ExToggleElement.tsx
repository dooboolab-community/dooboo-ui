import {Icon} from 'dooboo-ui';

import type {AccordionStoryProps} from '.';
import AccordionStory from '.';

function ExToggleElement(baseProps: AccordionStoryProps): React.ReactElement {
  return (
    <AccordionStory
      {...baseProps}
      toggleElement={<Icon name="chevron-right" color="white" />}
    />
  );
}

export default ExToggleElement;
