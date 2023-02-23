import {Button} from 'dooboo-ui';
import type {ReactElement} from 'react';
import {View} from 'react-native';
import {StoryProvider} from './index';

export default function Disabled(): ReactElement {
  return (
    <StoryProvider>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <Button disabled={true} text="Disabled" style={{margin: 8}} />
        <Button
          disabled={true}
          type="outlined"
          text="Disabled"
          style={{margin: 8}}
        />
      </View>
    </StoryProvider>
  );
}
