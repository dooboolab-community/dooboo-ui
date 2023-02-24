import {Button, useDooboo} from 'dooboo-ui';
import type {ReactElement} from 'react';
import {View} from 'react-native';
import {StoryProvider} from './index';

export default function Sizes(): ReactElement {
  return (
    <StoryProvider>
      <View
        style={{
          marginVertical: 8,

          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          color="primary"
          size="large"
          text="Primary"
          style={{margin: 8}}
          onPress={() => {}}
        />
        <Button
          color="primary"
          size="medium"
          text="Primary"
          style={{margin: 8}}
          onPress={() => {}}
        />
        <Button
          color="primary"
          size="small"
          text="Primary"
          style={{margin: 8}}
          onPress={() => {}}
        />
      </View>
    </StoryProvider>
  );
}
