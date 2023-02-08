import {Button, LoadingIndicator} from '../../../../main';

// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';
import {StorySection} from '../../../GlobalStyles';
import {useButtonKnobs} from '../useButtonKnobs';

function Loading(): ReactElement {
  const {color, size, activeOpacity, disabled, type} = useButtonKnobs();

  return (
    <StorySection>
      <Button
        loading
        color={color}
        size={size}
        activeOpacity={activeOpacity}
        disabled={disabled}
        type={type}
        loadingElement={<LoadingIndicator size="small" color="yellow" />}
        style={{margin: 4}}
        // eslint-disable-next-line no-console
        onPress={() => console.log(`press loading button`)}
      />
    </StorySection>
  );
}

export default Loading;
