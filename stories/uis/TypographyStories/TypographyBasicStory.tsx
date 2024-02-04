// Caveat: Expo web needs React to be imported
import React from 'react';
import {View} from 'react-native';

import {Typography} from '../../../main';
import {ScrollContainer, StoryContainer} from '../../GlobalStyles';

function TypographyBasicStory(): JSX.Element {
  return (
    <StoryContainer>
      <Typography.Title>Title</Typography.Title>
      <ScrollContainer>
        <View style={{height: 8}} />
        <Typography.Heading1>Heading1</Typography.Heading1>
        <View style={{height: 8}} />
        <Typography.Heading2>Heading2</Typography.Heading2>
        <View style={{height: 8}} />
        <Typography.Heading3>Heading3</Typography.Heading3>
        <View style={{height: 8}} />
        <Typography.Heading4>Heading4</Typography.Heading4>
        <View style={{height: 8}} />
        <Typography.Heading5>Heading5</Typography.Heading5>
        <View style={{height: 8}} />
        <Typography.Body1>Body1</Typography.Body1>
        <View style={{height: 8}} />
        <Typography.Body2>Body2</Typography.Body2>
        <View style={{height: 8}} />
        <Typography.Body3>Body3</Typography.Body3>
        <View style={{height: 8}} />
        <Typography.Body4>Body4</Typography.Body4>
      </ScrollContainer>
    </StoryContainer>
  );
}

export default TypographyBasicStory;
