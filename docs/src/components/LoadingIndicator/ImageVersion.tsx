import type {ThemeType} from '@dooboo-ui/theme';
import {ThemeProvider, useTheme} from '@dooboo-ui/theme';

import type {FC} from 'react';
import {IC_GIF} from '../../icon';
import {LoadingIndicator} from 'dooboo-ui';
import {View} from 'react-native';

const ImageComponent: FC = () => {
  const {theme} = useTheme();

  return (
    <View
      style={{
        backgroundColor: theme.background,
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        padding: 50,
      }}
    >
      <LoadingIndicator imgSource={IC_GIF} />
    </View>
  );
};

export const ImageVersion: FC<{themeType: ThemeType}> = ({themeType}) => {
  return (
    <ThemeProvider initialThemeType={themeType}>
      <ImageComponent />
    </ThemeProvider>
  );
};
