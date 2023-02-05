import {DoobooProvider, LoadingIndicator, useDooboo} from 'dooboo-ui';

import {IC_GIF} from '../../icon';
import type {ReactElement} from 'react';
import type {ThemeType} from '@dooboo-ui/theme';
import {View} from 'react-native';

function ImageComponent(): ReactElement {
  const {theme} = useDooboo();

  return (
    <View
      style={{
        backgroundColor: theme.bg.basic,
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        padding: 50,
      }}
    >
      <LoadingIndicator imgSource={IC_GIF} />
    </View>
  );
}

export function ImageVersion({
  themeType,
}: {
  themeType: ThemeType;
}): ReactElement {
  return (
    <DoobooProvider themeConfig={{initialThemeType: themeType}}>
      <ImageComponent />
    </DoobooProvider>
  );
}
