import {Button, DoobooProvider} from 'dooboo-ui';

import type {ReactElement} from 'react';
import {View} from 'react-native';
import styled from '@emotion/native';

const StoryContainer = styled.View`
  background-color: ${({theme}) => theme.bg.basic};

  justify-content: center;
  align-items: center;
`;

export function Sizes({themeType}): ReactElement {
  return (
    <DoobooProvider themeConfig={{initialThemeType: themeType}}>
      <StoryContainer>
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
      </StoryContainer>
    </DoobooProvider>
  );
}
