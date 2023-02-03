import {Button} from 'dooboo-ui';
import type {FC} from 'react';
import React from 'react';
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

export const Solid: FC<{themeType: ThemeType}> = ({themeType}) => {
  return (
    <ThemeProvider initialThemeType={themeType}>
      <StoryContainer>
        <View
          style={{
            paddingVertical: 8,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Button color="primary" text="Primary" style={{padding: 8}} />
          <Button color="secondary" text="Secondary" style={{padding: 8}} />
          <Button color="success" text="Success" style={{padding: 8}} />
          <Button color="danger" text="Danger" style={{padding: 8}} />
          <Button color="warning" text="Warning" style={{padding: 8}} />
          <Button color="info" text="Info" style={{padding: 8}} />
          <Button color="light" text="Light" style={{padding: 8}} />
        </View>
      </StoryContainer>
    </ThemeProvider>
  );
};
