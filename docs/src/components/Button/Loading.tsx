import type {ReactElement} from 'react';
import {View} from 'react-native';
import {Button} from 'dooboo-ui';

import {StoryProvider} from './index';

export default function Loading(): ReactElement {
  return (
    <StoryProvider>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <Button loading={true} style={{margin: 8}} onPress={() => {}} />
      </View>
    </StoryProvider>
  );
}
