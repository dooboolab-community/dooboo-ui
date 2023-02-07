import {
  ScrollContainer,
  StoryContainer,
  StoryDescription,
  StoryTitle,
} from '../../../GlobalStyles';

import Basic from './Basic';
import Color from './Color';
import Custom from './Custom';
import Disabled from './Disabled';
import Event from './Event';
import Loading from './Loading';
// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';
import Sizes from './Sizes';
import StartAndEnd from './StartAndEnd';

function ButtonBasic(): ReactElement {
  return (
    <StoryContainer>
      <ScrollContainer
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
      >
        <StoryTitle>Basic</StoryTitle>
        <Basic />

        <StoryTitle>Color</StoryTitle>
        <Color />

        <StoryTitle>Disabled</StoryTitle>
        <Disabled />

        <StoryTitle>Sizes</StoryTitle>
        <Sizes />

        <StoryTitle>Loading</StoryTitle>
        <Loading />
        <StoryDescription>
          If you want to change the loading indicator you can use the
          loadingElement property
        </StoryDescription>
        <Loading />

        <StoryTitle>Custom Styles</StoryTitle>
        <StoryDescription>
          Within the styles attribute there are 5 options : container, text,
          disabled, disabledText,hovered.
        </StoryDescription>
        <Custom />

        <StoryTitle>Start and End element</StoryTitle>
        <StartAndEnd />

        <StoryTitle>Event</StoryTitle>
        <Event />
      </ScrollContainer>
    </StoryContainer>
  );
}

export default ButtonBasic;
