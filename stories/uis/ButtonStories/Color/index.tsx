import {
  ScrollContainer,
  StoryContainer,
  StoryTitle,
} from '../../../GlobalStyles';

import OutlinedButtonColors from './OutlinedButtonColors';
// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';
import SolidButtonColors from './SolidButtonColors';
import TextButtonColors from './TextButtonColors';
import {Typography} from '../../../../main';

function ColorButtons(): ReactElement {
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

export default ColorButtons;
