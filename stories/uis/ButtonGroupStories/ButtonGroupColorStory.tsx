import type {ReactElement} from 'react';
// Caveat: Expo web needs React to be imported
import React from 'react';
import {ScrollView} from 'react-native';

import {StoryContainer, StorySection, StoryTitle} from '../../GlobalStyles';

import BasicButton from './common/BasicButton';
import {useButtonGroupKnobs} from './useButtonGroupKnobs';

function ButtonGroupColorStory(): ReactElement {
  const {styles, borderStyle} = useButtonGroupKnobs();

  return (
    <StoryContainer>
      <StoryTitle>Colors</StoryTitle>
      <StorySection>
        <ScrollView horizontal>
          <BasicButton styles={styles} borderStyle={borderStyle} />
        </ScrollView>
      </StorySection>
    </StoryContainer>
  );
}

export default ButtonGroupColorStory;
