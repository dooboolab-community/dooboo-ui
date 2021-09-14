import {LoadingIndicator, ThemeProvider, ThemeType, useTheme} from 'dooboo-ui';

import type {FC} from 'react';
import {View} from 'react-native';

export const Component: FC = () => {
  const {theme} = useTheme();

  return (
    <View>
      <View
        style={{
          backgroundColor: theme.background,
          alignSelf: 'stretch',
          justifyContent: 'center',
          padding: 30,
        }}>
        <LoadingIndicator />
      </View>
      <View
        style={{
          backgroundColor: theme.background,
          alignSelf: 'stretch',
          justifyContent: 'center',
          padding: 30,
        }}>
        <LoadingIndicator size="small" color="#008299" />
      </View>
    </View>
  );
};

export const Basic: FC<{themeType: ThemeType}> = ({themeType}) => {
  return (
    <ThemeProvider initialThemeType={themeType}>
      <Component />
    </ThemeProvider>
  );
};
