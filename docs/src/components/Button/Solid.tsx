import type {ReactElement} from 'react';
import {View} from 'react-native';
import type {ButtonColorType} from 'dooboo-ui';
import {Button} from 'dooboo-ui';

import {StoryProvider} from './index';

export default function Solid(): ReactElement {
  const colors: ButtonColorType[] = [
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'info',
    'light',
  ];

  return (
    <StoryProvider>
      <View
        style={{
          paddingVertical: 8,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {colors.map((color) => (
          <Button
            color={color}
            text={color}
            style={{margin: 8}}
            onPress={() => {}}
          />
        ))}
      </View>
    </StoryProvider>
  );
}
