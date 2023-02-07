import {Button} from '../../../../main';
import type {ButtonType} from '../../../../main';
// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';
import {StorySection} from '../../../GlobalStyles';

function Disabled(): ReactElement {
  const types: ButtonType[] = ['text', 'solid', 'outlined'];

  return (
    <StorySection>
      {types.map((type) => (
        <Button
          key={type}
          type={type}
          disabled={true}
          text="TEXT"
          style={{margin: 2}}
        />
      ))}
    </StorySection>
  );
}

export default Disabled;
