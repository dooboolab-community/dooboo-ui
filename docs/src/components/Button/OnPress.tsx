import {Button, DoobooProvider} from 'dooboo-ui';
import React, {useState} from 'react';

import type {ReactElement} from 'react';
import {View} from 'react-native';
import styled from '@emotion/native';

const StoryContainer = styled.View`
  flex: 1;
  align-self: stretch;
  background-color: ${({theme}) => theme.bg.basic};

  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  color: ${({theme}) => theme.text.basic};
  font-size: 16px;
  margin: 20px;
`;

export function OnPress({themeType}): ReactElement {
  const [value, setValue] = useState(1);

  const onIncrease = (): void => {
    setValue(value + 1);
  };

  const onDecrease = (): void => {
    setValue(value - 1);
  };

  return (
    <DoobooProvider themeConfig={{initialThemeType: themeType}}>
      <StoryContainer>
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
      </StoryContainer>
    </DoobooProvider>
  );
}
