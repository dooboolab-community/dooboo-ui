import {LoadingIndicator} from 'dooboo-ui';

import {IC_GIF} from '../../icon';
import type {ReactElement} from 'react';
import {View} from 'react-native';
import {StoryProvider} from './index';

export default function ImageVersion(): ReactElement {
  return (
    <StoryProvider>
      <View
        style={{
          flex: 1,
          alignSelf: 'stretch',
          justifyContent: 'center',
          padding: 50,
        }}
      >
        <LoadingIndicator imgSource={IC_GIF} />
      </View>
    </StoryProvider>
  );
}
