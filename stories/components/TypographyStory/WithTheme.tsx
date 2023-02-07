// Caveat: Expo web needs React to be imported
import React from 'react';
import {Typography} from '../../../main';
import {View} from 'react-native';
import styled from '@emotion/native';

const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({theme}) => theme.bg.basic};

  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function TypographyWithTheme(): React.ReactElement {
  return (
    <Container>
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
    </Container>
  );
}

export default TypographyWithTheme;
