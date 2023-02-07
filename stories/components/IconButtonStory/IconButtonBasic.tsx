import {
  Basic,
  Colors,
  Disabled,
  IconElement,
  Loading,
  LoadingElement,
  Sizes,
} from './components';
import {
  ScrollContainer,
  StoryContainer,
  StoryDescription,
  StoryTitle,
} from '../../GlobalStyles';

// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';

function IconButtonBasic(): ReactElement {
  return (
    <StoryContainer>
      <ScrollContainer
        style={{flex: 1}}
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
      >
        <StoryTitle>Basic</StoryTitle>
        <Basic />

        <StoryTitle>Colors</StoryTitle>
        <Colors />

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
        <LoadingElement />

        <StoryTitle>IconElement</StoryTitle>
        <IconElement />
      </ScrollContainer>
    </StoryContainer>
  );
}

export default IconButtonBasic;
