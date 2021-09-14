import {LoadingIndicator, ThemeProvider, ThemeType, useTheme} from 'dooboo-ui';

import type {FC} from 'react';
import {View} from 'react-native';

export const ImageComponent: FC = () => {
  const {theme} = useTheme();

  return (
    <View
      style={{
        backgroundColor: theme.background,
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        padding: 50,
      }}>
      <LoadingIndicator imgSource="https://user-images.githubusercontent.com/31176502/71331734-ca61d800-2576-11ea-8934-6a260a1d714e.gif" />
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
