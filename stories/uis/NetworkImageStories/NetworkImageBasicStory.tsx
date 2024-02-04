// Caveat: Expo web needs React to be imported
import type {ComponentProps} from 'react';
import React from 'react';
import {View} from 'react-native';
import {useTheme} from '@dooboo-ui/theme';
import styled from '@emotion/native';

import {NetworkImage, Typography} from '../../../main';

const ScrollContainer = styled.ScrollView`
  width: 100%;
  background-color: ${({theme}) => theme.bg.basic};
`;

function NetworkImageBasicStory({
  url,
}: ComponentProps<typeof NetworkImage>): JSX.Element {
  const {theme} = useTheme();

  return (
    <ScrollContainer
      contentContainerStyle={{
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
        url={url}
      />

      <View style={{width: 300, height: 300, margin: 20}}>
        <NetworkImage
          style={{flex: 1, margin: 20, borderRadius: 45}}
          url="https://reactnative.dev/img/tiny_logo.png"
        />
      </View>

      <NetworkImage
        loadingSource={<Typography.Title>Loading</Typography.Title>}
        style={{
          width: 300,
          height: 300,
          margin: 20,
          alignSelf: 'center',
          borderRadius: 45,
        }}
        url="https://reactnative.dev/img/tiny_logo.png"
      />

      <View style={{marginBottom: 80}}>
        <NetworkImage
          style={{
            backgroundColor: theme.bg.paper,
            width: 300,
            height: 300,
          }}
          url="wrong link"
        />
      </View>
    </ScrollContainer>
  );
}

export default NetworkImageBasicStory;
