import AccordionStory, {AccordionStoryBaseProps} from '.';

import {Icon} from 'dooboo-ui';

function ToggleElement(baseProps: AccordionStoryBaseProps): React.ReactElement {
  return (
    <AccordionStory
      {...baseProps}
      toggleElement={<Icon name="chevron-right" color="white" />}
    />
  );
}

export default ToggleElement;
