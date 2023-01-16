import React, {useState} from 'react';

import {Button} from 'dooboo-ui';
import type {FC} from 'react';
import {ThemeProvider} from '@dooboo-ui/theme';
import type {ThemeType} from '@dooboo-ui/theme';
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

export const OnPress: FC<{themeType: ThemeType}> = ({themeType}) => {
  const [value, setValue] = useState(1);

  const onIncrease = (): void => {
    setValue(value + 1);
  };

  const onDecrease = (): void => {
    setValue(value - 1);
  };

  return (
    <ThemeProvider initialThemeType={themeType}>
      <StoryContainer>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Button text="Increase" style={{padding: 8}} onPress={onIncrease} />
          <Button text="Decrease" style={{padding: 8}} onPress={onDecrease} />
          <StyledText> value={value} </StyledText>
        </View>
      </StoryContainer>
    </ThemeProvider>
  );
};
