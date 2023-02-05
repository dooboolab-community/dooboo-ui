import {Button, DoobooProvider} from 'dooboo-ui';

import type {ReactElement} from 'react';
import {View} from 'react-native';
import styled from '@emotion/native';

const StoryContainer = styled.View`
  background-color: ${({theme}) => theme.bg.basic};

  justify-content: center;
  align-items: center;
`;

export function Solid({themeType}): ReactElement {
  return (
    <DoobooProvider themeConfig={{initialThemeType: themeType}}>
      <StoryContainer>
        <View
          style={{
            paddingVertical: 8,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Button
            color="primary"
            text="Primary"
            style={{margin: 8}}
            onPress={() => {}}
          />
          <Button
            color="secondary"
            text="Secondary"
            style={{margin: 8}}
            onPress={() => {}}
          />
          <Button
            color="success"
            text="Success"
            style={{margin: 8}}
            onPress={() => {}}
          />
          <Button
            color="danger"
            text="Danger"
            style={{margin: 8}}
            onPress={() => {}}
          />
          <Button
            color="warning"
            text="Warning"
            style={{margin: 8}}
            onPress={() => {}}
          />
          <Button
            color="info"
            text="Info"
            style={{margin: 8}}
            onPress={() => {}}
          />
          <Button
            color="light"
            text="Light"
            style={{margin: 8}}
            onPress={() => {}}
          />
        </View>
      </StoryContainer>
    </DoobooProvider>
  );
}
