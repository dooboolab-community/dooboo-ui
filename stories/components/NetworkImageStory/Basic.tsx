import {NetworkImage, Typography} from '../../../main';

// Caveat: Expo web needs React to be imported
import React from 'react';
import {View} from 'react-native';
import styled from '@emotion/native';
import {useTheme} from '@dooboo-ui/theme';

const ScrollContainer = styled.ScrollView`
  width: 100%;
  background-color: ${({theme}) => theme.bg.basic};
`;

function NetworkImageBasic(): React.ReactElement {
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
        url="https://upload.wikimedia.org/wikipedia/commons/6/69/Very_Large_Telescope_Ready_for_Action_%28ESO%29.jpg"
      />

      <View style={{width: 300, height: 300, margin: 20}}>
        <NetworkImage
          style={{flex: 1, margin: 20, borderRadius: 45}}
          url="https://reactnative.dev/img/tiny_logo.png"
        />
      </View>

      <NetworkImage
        style={{
          width: 300,
          height: 300,
          margin: 20,
          alignSelf: 'center',
          borderRadius: 45,
        }}
        loadingSource={<Typography.Title>Loading</Typography.Title>}
        url="https://reactnative.dev/img/tiny_logo.png"
      />

      <View>
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

export default NetworkImageBasic;
