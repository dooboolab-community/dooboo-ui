// Caveat: Expo web needs React to be imported
import React from 'react';

import {Typography} from '../../../../main';
import {
  ScrollContainer,
  StoryContainer,
  StoryTitle,
} from '../../../GlobalStyles';

import OutlinedButtonColors from './OutlinedButtonColors';
import SolidButtonColors from './SolidButtonColors';
import TextButtonColors from './TextButtonColors';

function ButtonColorStory(): JSX.Element {
  return (
    <ScrollContainer>
      <StoryContainer>
        <StoryTitle>Color</StoryTitle>
        <Typography.Heading3 style={{marginBottom: 8}}>
          Text Button
        </Typography.Heading3>
        <TextButtonColors />
        <Typography.Heading3 style={{marginBottom: 8}}>
          Solid Button
        </Typography.Heading3>
        <SolidButtonColors />
        <Typography.Heading3 style={{marginBottom: 8}}>
          Outlined Button
        </Typography.Heading3>
        <OutlinedButtonColors />
      </StoryContainer>
    </ScrollContainer>
  );
}

export default ButtonColorStory;
