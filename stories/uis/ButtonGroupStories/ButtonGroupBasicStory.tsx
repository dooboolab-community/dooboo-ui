import type {ComponentProps} from 'react';
import {ScrollView} from 'react-native';

import {ButtonGroup} from '../../../main/uis/ButtonGroup';
import {StoryContainer, StoryTitle} from '../../GlobalStyles';

function ButtonGroupBasic(
  props: ComponentProps<typeof ButtonGroup>,
): JSX.Element {
  return (
    <StoryContainer>
      <StoryTitle>Basic</StoryTitle>
      <ScrollView contentContainerStyle={{flexDirection: 'column'}}>
        <ButtonGroup {...props} />
      </ScrollView>
    </StoryContainer>
  );
}

export default ButtonGroupBasic;
