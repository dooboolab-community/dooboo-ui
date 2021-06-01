import React, {ReactElement} from 'react';
import {ThemeProvider, ThemeType} from '../../../main/theme';

import {ContainerDeco} from '../../../storybook/decorators';
import {Typography} from '../../../main';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import styled from '@emotion/native';

const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: transparent;

  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function TypographyDefault(): React.ReactElement {
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

/**
 * Below are stories for web
 */
export default {
  title: 'LoadingIndicator',
};

export const toStorybook = (): ReactElement => <TypographyDefault />;

toStorybook.story = {
  name: 'default',
};

/**
 * Below are stories for app
 */
storiesOf('Typography', module)
  .addDecorator(ContainerDeco)
  .add('text - light', () => (
    <ThemeProvider>
      <TypographyDefault />
    </ThemeProvider>
  ))
  .add('text - dark', () => (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        alignSelf: 'stretch',
      }}>
      <ThemeProvider initialThemeType={ThemeType.DARK}>
        <TypographyWithTheme />
      </ThemeProvider>
    </View>
  ));
