import type {ThemeType} from '@dooboo-ui/theme';
import {ThemeProvider} from '@dooboo-ui/theme';

import {Button} from 'dooboo-ui';
import type {FC} from 'react';
import React from 'react';
import {View} from 'react-native';
import styled from '@emotion/native';

const StoryContainer = styled.View`
  background-color: ${({theme}) => theme.background};
  flex: 1;
  align-self: stretch;
`;

export const Outlined: FC<{themeType: ThemeType}> = ({themeType}) => {
  return (
    <ThemeProvider initialThemeType={themeType}>
      <StoryContainer>
        <View
          style={{
            marginVertical: 8,

            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Button type="primary" text="Primary" outlined style={{padding: 8}} />
          <Button
            type="secondary"
            text="Secondary"
            outlined
            style={{padding: 8}}
          />
          <Button type="success" text="Success" outlined style={{padding: 8}} />
          <Button type="danger" text="Danger" outlined style={{padding: 8}} />
          <Button type="warning" text="Warning" outlined style={{padding: 8}} />
          <Button type="info" text="Info" outlined style={{padding: 8}} />
          <Button type="light" text="Light" outlined style={{padding: 8}} />
        </View>
      </StoryContainer>
    </ThemeProvider>
  );
};
