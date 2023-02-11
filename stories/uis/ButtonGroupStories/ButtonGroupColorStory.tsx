import {StoryContainer, StorySection, StoryTitle} from '../../GlobalStyles';
// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';
import {useButtonGroupKnobs} from './useButtonGroupKnobs';
import BasicButton from './common/BasicButton';
import {ScrollView} from 'react-native';

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
