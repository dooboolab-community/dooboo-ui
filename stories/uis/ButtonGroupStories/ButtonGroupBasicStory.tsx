import type {ComponentProps} from 'react';

import {ButtonGroup} from '../../../main/uis/ButtonGroup';
import {StoryWrapper} from '../../Common';

export default function ButtonGroupBasic(
  props: ComponentProps<typeof ButtonGroup>,
): JSX.Element {
  return (
    <StoryWrapper>
      <ButtonGroup {...props} />
    </StoryWrapper>
  );
}
