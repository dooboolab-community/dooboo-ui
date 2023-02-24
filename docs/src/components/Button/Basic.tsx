import {Button} from 'dooboo-ui';
import type {ReactElement} from 'react';
import {View} from 'react-native';
import {StoryProvider} from './index';

export default function Basic(): ReactElement {
  return (
    <StoryProvider>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <Button text="Button" style={{margin: 8}} onPress={() => {}} />
        <Button
          text="Button"
          type="outlined"
          style={{margin: 8}}
          onPress={() => {}}
        />
      </View>
    </StoryProvider>
  );
}
