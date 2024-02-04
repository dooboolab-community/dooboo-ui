import type {ComponentProps} from 'react';
import {ScrollView} from 'react-native';

import {ButtonGroup} from '../../../main/uis/ButtonGroup';
import {StoryContainer, StoryTitle} from '../../GlobalStyles';

function ButtonGroupBasic(
  props: ComponentProps<typeof ButtonGroup>,
): JSX.Element {
  return (
    <ScrollView contentContainerStyle={{flexDirection: 'column'}}>
      <StoryContainer>
        <StoryTitle style={{fontSize: 18, marginBottom: 8}}>Basic</StoryTitle>
        <ButtonGroup {...props} />
      </StoryContainer>
    </ScrollView>
  );
}

export default ButtonGroupBasic;
