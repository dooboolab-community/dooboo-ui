import type {ReactElement} from 'react';
import React from 'react';

import CustomLoadingIndicator from './CustomStory';
import {LoadingIndicator} from '../..';
import {ThemeProvider} from '@dooboo-ui/theme';
import {storiesOf} from '@storybook/react-native';
import styled from '@emotion/native';

const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({theme}) => theme.background};
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const StyledText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 120px;
`;

function Spinner(): React.ReactElement {
  return (
    <Container>
      <LoadingIndicator />
    </Container>
  );
}

function ImgVersion(): React.ReactElement {
  return (
    <Container>
      <LoadingIndicator
        imgSource="https://user-images.githubusercontent.com/31176502/71331734-ca61d800-2576-11ea-8934-6a260a1d714e.gif"
        containerStyle={{backgroundColor: 'white'}}
      />
      <StyledText>Loading ... </StyledText>
    </Container>
  );
}

/**
 * Below are stories for web
 */
export default {
  title: 'LoadingIndicator',
};

export const toStorybook = (): ReactElement => <Spinner />;

toStorybook.story = {
  name: 'spinner',
};

/**
 * Below are stories for app
 */
storiesOf('LoadingIndicator', module)
  .add('spinner - light', () => (
    <ThemeProvider initialThemeType="light">
      <Spinner />
    </ThemeProvider>
  ))
  .add('spinner - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <Spinner />
    </ThemeProvider>
  ))
  .add('imgVersion', () => (
    <ThemeProvider initialThemeType="light">
      <ImgVersion />
    </ThemeProvider>
  ))
  .add('customIndicator', () => (
    <ThemeProvider initialThemeType="light">
      <CustomLoadingIndicator />
    </ThemeProvider>
  ));
