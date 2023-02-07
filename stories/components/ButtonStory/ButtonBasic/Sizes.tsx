import {Button} from '../../../../main';
import type {ButtonSizeType} from '../../../../main';
// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';
import {StorySection} from '../../../GlobalStyles';

function Sizes(): ReactElement {
  const sizes: ButtonSizeType[] = ['small', 'medium', 'large'];

  return (
    <StorySection>
      {sizes.map((size) => (
        <Button
          key={size}
          size={size}
          text={size.toUpperCase()}
          style={{margin: 4}}
          // eslint-disable-next-line no-console
          onPress={() => console.log(`press ${size} button`)}
        />
      ))}

      {sizes.map((size) => (
        <Button
          key={size}
          type="outlined"
          size={size}
          text={size.toUpperCase()}
          style={{margin: 4}}
          // eslint-disable-next-line no-console
          onPress={() => console.log(`press ${size} button`)}
        />
      ))}
    </StorySection>
  );
}

export default Sizes;
