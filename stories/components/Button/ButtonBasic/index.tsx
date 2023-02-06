import {
  Description,
  ScrollContainer,
  StoryContainer,
  Title,
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
        <Title>Basic</Title>
        <Basic />

        <Title>Color</Title>
        <Color />

        <Title>Disabled</Title>
        <Disabled />

        <Title>Sizes</Title>
        <Sizes />

        <Title>Loading</Title>
        <Loading />
        <Description>
          If you want to change the loading indicator you can use the
          loadingElement property
        </Description>
        <Loading />

        <Title>Custom Styles</Title>
        <Description>
          Within the styles attribute there are 5 options : container, text,
          disabled, disabledText,hovered.
        </Description>
        <Custom />

        <Title>Start and End element</Title>
        <StartAndEnd />

        <Title>Event</Title>
        <Event />
      </ScrollContainer>
    </StoryContainer>
  );
}

export default ButtonBasic;
