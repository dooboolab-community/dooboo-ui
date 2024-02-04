import type {ComponentProps} from 'react';

import {Button} from '../../../main';
import {StoryContainer, StoryTitle} from '../../GlobalStyles';

function ButtonBasicStory(props: ComponentProps<typeof Button>): JSX.Element {
  return (
    <StoryContainer>
      <StoryTitle>Basic</StoryTitle>
      <Button {...props} />
    </StoryContainer>
  );
}

export default ButtonBasicStory;
