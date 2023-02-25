import {Button} from 'dooboo-ui';
import type {ButtonColorType} from 'dooboo-ui';
import type {ReactElement} from 'react';
import {View} from 'react-native';
import {StoryProvider} from './index';

export default function Outlined(): ReactElement {
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
          marginVertical: 8,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {colors.map((color) => (
          <Button
            type="outlined"
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
