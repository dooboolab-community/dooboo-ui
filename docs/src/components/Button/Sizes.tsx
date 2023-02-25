import type {ButtonSizeType} from 'dooboo-ui';
import {Button} from 'dooboo-ui';
import type {ReactElement} from 'react';
import {View} from 'react-native';
import {StoryProvider} from './index';

export default function Sizes(): ReactElement {
  const sizes: ButtonSizeType[] = ['large', 'medium', 'small'];

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
        {sizes.map((size) => (
          <Button
            color="primary"
            size={size}
            text={size}
            style={{margin: 8}}
            onPress={() => {}}
          />
        ))}
      </View>
    </StoryProvider>
  );
}
