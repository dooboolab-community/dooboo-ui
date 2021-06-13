import {NetworkImage, ThemeProvider} from '../../../main';
import React, {ReactElement} from 'react';

import {ContainerDeco} from '../../../storybook/decorators';
import {storiesOf} from '@storybook/react-native';
import styled from '@emotion/native';

const ScrollContainer = styled.ScrollView`
  width: 100%;
  background-color: ${({theme}) => theme.background};
`;

function NetworkImageStory(): React.ReactElement {
  return (
    <ScrollContainer
      contentContainerStyle={{
        paddingVertical: 80,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <NetworkImage
        style={{margin: 20}}
        url="https://reactnative.dev/img/tiny_logo.png"
      />
      <NetworkImage
        style={{margin: 20}}
        styles={{
          image: {
            width: 180,
            height: 180,
          },
        }}
        url="https://media.vlpt.us/images/mayinjanuary/post/2bb98ed1-d514-400d-956f-883b6309fc2f/react%20native.png"
      />
      <NetworkImage
        style={{margin: 20}}
        styles={{
          image: {
            width: 180,
            height: 180,
          },
        }}
        url="https://media.vlpt.us/images/luck2901/post/5745952f-eb96-4784-b01c-2eb90158ace7/React_Native_Tutorial.jpg"
      />
      <NetworkImage
        style={{margin: 20}}
        styles={{
          image: {
            width: 180,
            height: 180,
          },
        }}
        url="https://upload.wikimedia.org/wikipedia/commons/6/69/Very_Large_Telescope_Ready_for_Action_%28ESO%29.jpg"
      />
    </ScrollContainer>
  );
}

/**
 * Below are stories for web
 */
export default {
  title: 'NetowkrImage',
};

export const toStorybook = (): ReactElement => <NetworkImageStory />;

toStorybook.story = {
  name: 'NetworkImage',
};

/**
 * Below are stories for app
 */
storiesOf('NetworkImage', module)
  .addDecorator(ContainerDeco)
  .add('NetworkImage - light', () => (
    <ThemeProvider initialThemeType="light">
      <NetworkImageStory />
    </ThemeProvider>
  ))
  .add('NetworkImage - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <NetworkImageStory />
    </ThemeProvider>
  ));
