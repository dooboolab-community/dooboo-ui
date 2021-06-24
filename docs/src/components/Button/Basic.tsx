import {Button, ThemeProvider, ThemeType} from 'dooboo-ui';

import type {FC} from 'react';
import React from 'react';
import {View} from 'react-native';
import styled from '@emotion/native';

const StoryContainer = styled.View`
  flex: 1;
  align-self: stretch;
  background-color: ${({theme}) => theme.background};

  justify-content: center;
  align-items: center;
`;

export const Basic: FC<{themeType: ThemeType}> = ({themeType}) => {
  return (
    <ThemeProvider initialThemeType={themeType}>
      <StoryContainer>
        <View
          style={{
            paddingVertical: 8,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          <Button type="primary" text="Primary" style={{padding: 8}} />
          <Button type="secondary" text="Secondary" style={{padding: 8}} />
          <Button type="success" text="Success" style={{padding: 8}} />
          <Button type="danger" text="Danger" style={{padding: 8}} />
          <Button type="warning" text="Warning" style={{padding: 8}} />
          <Button type="info" text="Info" style={{padding: 8}} />
          <Button disabled={true} text="Disabled" style={{padding: 8}} />
        </View>
      </StoryContainer>
    </ThemeProvider>
  );
};
