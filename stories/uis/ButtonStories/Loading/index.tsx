import {StoryContainer, StorySection, StoryTitle} from '../../../GlobalStyles';

import {Button} from '../../../../main';
import type {ButtonType} from '../../../../main';
// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';
import {useButtonKnobs} from '../useButtonKnobs';

function Loading(): ReactElement {
  const types: ButtonType[] = ['text', 'solid', 'outlined'];
  const {color, size} = useButtonKnobs();

  return (
    <StoryContainer>
      <StoryTitle>Loading</StoryTitle>
      <StorySection>
        {types.map((type) => (
          <Button
            key={type}
            size={size}
            color={color}
            type={type}
            loading
            style={{margin: 4}}
            // eslint-disable-next-line no-console
            onPress={() => console.log(`press ${type} button`)}
          />
        ))}
      </StorySection>
    </StoryContainer>
  );
}

export default Loading;
