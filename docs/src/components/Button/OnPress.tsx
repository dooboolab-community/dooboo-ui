import {Button} from 'dooboo-ui';
import type {ReactElement} from 'react';
import {View} from 'react-native';
import styled from '@emotion/native';
import {useState} from 'react';
import {StoryProvider} from './index';

const StyledText = styled.Text`
  color: ${({theme}) => theme.text.basic};
  font-size: 16px;
  margin: 20px;
`;

export default function OnPress(): ReactElement {
  const [value, setValue] = useState(1);

  const onIncrease = (): void => {
    setValue(value + 1);
  };

  const onDecrease = (): void => {
    setValue(value - 1);
  };

  return (
    <StoryProvider>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <Button text="Increase" style={{margin: 8}} onPress={onIncrease} />
        <Button text="Decrease" style={{margin: 8}} onPress={onDecrease} />
        <StyledText> value={value} </StyledText>
      </View>
    </StoryProvider>
  );
}
