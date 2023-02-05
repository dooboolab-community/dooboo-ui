import {Button, DoobooProvider} from 'dooboo-ui';

import React from 'react';
import type {ReactElement} from 'react';
import {View} from 'react-native';

export function Sizes({themeType}): ReactElement {
  return (
    <DoobooProvider themeConfig={{initialThemeType: themeType}}>
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
        />
        <Button
          color="primary"
          size="medium"
          text="Primary"
          style={{margin: 8}}
        />
        <Button
          color="primary"
          size="small"
          text="Primary"
          style={{margin: 8}}
        />
      </View>
    </DoobooProvider>
  );
}
