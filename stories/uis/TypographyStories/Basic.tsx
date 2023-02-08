import {ScrollContainer, StoryContainer} from '../../GlobalStyles';

// Caveat: Expo web needs React to be imported
import React from 'react';
import {Typography} from '../../../main';
import {View} from 'react-native';

function TypographyBasic(): React.ReactElement {
  return (
    <ScrollContainer>
      <StoryContainer>
        <Typography.Title>Title</Typography.Title>
        <View style={{height: 8}} />
        <Typography.Heading1>Heading1</Typography.Heading1>
        <View style={{height: 8}} />
        <Typography.Heading2>Heading2</Typography.Heading2>
        <View style={{height: 8}} />
        <Typography.Heading3>Heading3</Typography.Heading3>
        <View style={{height: 8}} />
        <Typography.Body1>Body1</Typography.Body1>
        <View style={{height: 8}} />
        <Typography.Body2>Body2</Typography.Body2>
      </StoryContainer>
    </ScrollContainer>
  );
}

export default TypographyBasic;
