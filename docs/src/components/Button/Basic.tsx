import {Button, DoobooProvider} from 'dooboo-ui';

import React from 'react';
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

export function Basic({themeType}): ReactElement {
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
          <Button text="Button" style={{margin: 8}} />
          <Button text="Button" type="outlined" style={{margin: 8}} />
        </View>
      </StoryContainer>
    </DoobooProvider>
  );
}
