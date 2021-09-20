import {NetworkImage, ThemeProvider} from '../../../main';
import React, {ReactElement} from 'react';
import {View, Text} from 'react-native';

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
      }}
    >
      <NetworkImage
        style={{margin: 40}}
        styles={{image: {width: 300, height: 300}}}
        url="wrong-link"
      />

      <View style={{width: 400, height: 300, margin: 20}}>
        <NetworkImage
          styles={{image: {flex: 1, alignSelf: 'stretch'}}}
          url="https://reactnative.dev/img/tiny_logo.png"
        />
      </View>

      <View style={{width: 400, height: 300, margin: 20}}>
        <NetworkImage
          style={{margin: 40}}
          styles={{image: {width: 300, height: 300}}}
          url="https://upload.wikimedia.org/wikipedia/commons/6/69/Very_Large_Telescope_Ready_for_Action_%28ESO%29.jpg"
        />
      </View>

      <View style={{width: 400, height: 300, margin: 20}}>
        <NetworkImage
          style={{margin: 40}}
          styles={{image: {width: 300, height: 300}}}
          loadingSource={<Text style={{fontSize: 30}}>Loading</Text>}
          url="https://upload.wikimedia.org/wikipedia/commons/6/69/Very_Large_Telescope_Ready_for_Action_%28ESO%29.jpg"
        />
      </View>
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
