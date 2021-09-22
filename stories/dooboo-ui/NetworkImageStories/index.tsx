import {NetworkImage, ThemeProvider, Typography, useTheme} from '../../../main';
import React, {ReactElement} from 'react';
import {View, Text} from 'react-native';

import {ContainerDeco} from '../../../storybook/decorators';
import {storiesOf} from '@storybook/react-native';
import styled from '@emotion/native';

import ArtifactsLogoDark from '../../../main/__assets__/artifacts_logo_d.png';
import ArtifactsLogoLight from '../../../main/__assets__/artifacts_logo_l.png';

const ScrollContainer = styled.ScrollView`
  width: 100%;
  background-color: ${({theme}) => theme.background};
`;

function NetworkImageStory(): React.ReactElement {
  const {themeType} = useTheme();

  return (
    <ScrollContainer
      contentContainerStyle={{
        paddingVertical: 80,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <NetworkImage
        style={{width: 300, height: 300, margin: 20, alignSelf: 'center'}}
        styles={{image: {borderRadius: 100, backgroundColor: 'red'}}}
        url="https://upload.wikimedia.org/wikipedia/commons/6/69/Very_Large_Telescope_Ready_for_Action_%28ESO%29.jpg"
      />

      <View style={{width: 300, height: 300, margin: 20}}>
        <NetworkImage
          styles={{
            loading: {backgroundColor: 'red', width: 300, height: 300},
            image: {borderRadius: 45},
          }}
          loadingSource={
            themeType === 'light' ? ArtifactsLogoDark : ArtifactsLogoLight
          }
          url="https://reactnative.dev/img/tiny_logo.png"
        />
      </View>

      <NetworkImage
        style={{width: 300, height: 300, margin: 20, alignSelf: 'center'}}
        styles={{image: {borderRadius: 45}}}
        loadingSource={<Typography.Title>Loading</Typography.Title>}
        url="https://reactnative.dev/img/tiny_logo.png"
      />

      <View style={{width: 300, height: 300, margin: 20}}>
        <NetworkImage style={{alignSelf: 'center'}} url="wrong link" />
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
