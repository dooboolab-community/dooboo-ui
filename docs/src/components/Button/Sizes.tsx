import {Button, ThemeProvider, ThemeType} from 'dooboo-ui';

import type {FC} from 'react';
import React from 'react';
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
          type="primary"
          size="large"
          text="Primary"
          style={{padding: 8}}
        />
        <Button
          type="primary"
          size="medium"
          text="Primary"
          style={{padding: 8}}
        />
        <Button
          type="primary"
          size="small"
          text="Primary"
          style={{padding: 8}}
        />
      </View>
    </ThemeProvider>
  );
};
