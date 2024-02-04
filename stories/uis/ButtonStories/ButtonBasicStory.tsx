import type {ComponentProps} from 'react';

import {Button} from '../../../main';
import {StoryWrapper} from '../../Common';

export default function ButtonBasicStory(
  props: ComponentProps<typeof Button>,
): JSX.Element {
  return (
    <StoryWrapper>
      <Button {...props} />
    </StoryWrapper>
  );
}
