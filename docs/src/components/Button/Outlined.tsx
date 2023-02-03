import {Button} from 'dooboo-ui';
import type {FC} from 'react';
import React from 'react';
import {ThemeProvider} from '@dooboo-ui/theme';
import type {ThemeType} from '@dooboo-ui/theme';
import {View} from 'react-native';
import styled from '@emotion/native';

const StoryContainer = styled.View`
  background-color: ${({theme}) => theme.bg.basic};
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
          <Button
            type="outlined"
            color="primary"
            text="Primary"
            style={{padding: 8}}
          />
          <Button
            type="outlined"
            color="secondary"
            text="Secondary"
            style={{padding: 8}}
          />
          <Button
            color="success"
            text="Success"
            type="outlined"
            style={{padding: 8}}
          />
          <Button
            color="danger"
            text="Danger"
            type="outlined"
            style={{padding: 8}}
          />
          <Button
            color="warning"
            text="Warning"
            type="outlined"
            style={{padding: 8}}
          />
          <Button
            color="info"
            text="Info"
            type="outlined"
            style={{padding: 8}}
          />
          <Button
            color="light"
            text="Light"
            type="outlined"
            style={{padding: 8}}
          />
        </View>
      </StoryContainer>
    </ThemeProvider>
  );
};
