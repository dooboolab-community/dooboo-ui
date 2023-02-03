import {Button} from 'dooboo-ui';
import type {FC} from 'react';
import React from 'react';
import {ThemeProvider} from '@dooboo-ui/theme';
import type {ThemeType} from '@dooboo-ui/theme';
import {View} from 'react-native';

export const Sizes: FC<{themeType: ThemeType}> = ({themeType}) => {
  return (
    <ThemeProvider initialThemeType={themeType}>
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
          style={{padding: 8}}
        />
        <Button
          color="primary"
          size="medium"
          text="Primary"
          style={{padding: 8}}
        />
        <Button
          color="primary"
          size="small"
          text="Primary"
          style={{padding: 8}}
        />
      </View>
    </ThemeProvider>
  );
};
