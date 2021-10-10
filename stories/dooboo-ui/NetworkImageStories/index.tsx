import {NetworkImage, ThemeProvider, Typography} from '../../../main';
import React, {ReactElement} from 'react';

import {View} from 'react-native';
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
        style={{
          width: 110,
          height: 110,
          margin: 20,
          alignSelf: 'center',
        }}
        styles={{image: {borderRadius: 50}}}
        url="https://upload.wikimedia.org/wikipedia/commons/6/69/Very_Large_Telescope_Ready_for_Action_%28ESO%29.jpg"
      />

      <View style={{width: 300, height: 300, margin: 20}}>
        <NetworkImage
          style={{flex: 1, margin: 20}}
          styles={{image: {borderRadius: 45}}}
          url="https://reactnative.dev/img/tiny_logo.png"
        />
      </View>

      <NetworkImage
        style={{width: 300, height: 300, margin: 20, alignSelf: 'center'}}
        styles={{image: {borderRadius: 45}}}
        loadingSource={<Typography.Title>Loading</Typography.Title>}
        url="https://reactnative.dev/img/tiny_logo.png"
      />

      <View>
        <NetworkImage
          style={{
            backgroundColor: 'red',
            width: 300,
            height: 300,
          }}
          url="wrong link"
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
