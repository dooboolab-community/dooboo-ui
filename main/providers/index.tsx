import type {MutableRefObject, ReactElement} from 'react';
import React, {useRef} from 'react';
import {View} from 'react-native';
import type {ThemeContext, ThemeProps} from '@dooboo-ui/theme';
import {ThemeProvider, useTheme} from '@dooboo-ui/theme';
import {useFonts} from 'expo-font';

import type {AlertDialogContext} from '../modals/AlertDialog';
import AlertDialog from '../modals/AlertDialog';
import type {SnackbarContext, SnackbarOptions} from '../modals/Snackbar';
import Snackbar from '../modals/Snackbar';
import createCtx from '../utils/createCtx';

export type {ThemeContext} from '@dooboo-ui/theme';
export type ThemeType = ThemeContext['themeType'];
export type DoobooTheme = ThemeContext['theme'];

export type DoobooContext = {
  assetLoaded: boolean;
  snackbar: SnackbarContext;
  alertDialog: AlertDialogContext;
} & ThemeContext;

export type DoobooProviderProps = {
  children?: ReactElement;
  themeConfig?: Omit<ThemeProps, 'children'>;
  snackbarConfig?: SnackbarOptions;
};

const [useCtx, Provider] = createCtx<DoobooContext>(
  'dooboo-ui modals should be used within DoobooProvider.',
);

function DoobooProvider(props: DoobooProviderProps): React.ReactElement {
  const [assetLoaded] = useFonts({
    doobooui: require('../uis/Icon/doobooui.ttf'),
    'Pretendard-Bold': require('../uis/Icon/Pretendard-Bold.otf'),
    Pretendard: require('../uis/Icon/Pretendard-Regular.otf'),
    'Pretendard-Thin': require('../uis/Icon/Pretendard-Thin.otf'),
  });
  const themeContext = useTheme();
  const {children} = props;
  const snackbar =
    useRef<SnackbarContext>() as MutableRefObject<SnackbarContext>;

  const alertDialog =
    useRef<AlertDialogContext>() as MutableRefObject<AlertDialogContext>;

  /**
   ** Snackbar
   */
  const snackbarContext: SnackbarContext = {
    open: (snackbarOption): void => {
      snackbar.current && snackbar.current.open(snackbarOption);
    },
    close: (): void => {
      snackbar.current && snackbar.current.close();
    },
  };

  /**
   ** AlertDialog
   */
  const alertDialogContext: AlertDialogContext = {
    open: (alertDialogOptions): void => {
      alertDialog.current && alertDialog.current.open(alertDialogOptions);
    },
    close: (): void => {
      alertDialog.current && alertDialog.current.close();
    },
  };

  return (
    <View style={{flex: 1, alignSelf: 'stretch'}}>
      <Provider
        value={{
          ...themeContext,
          assetLoaded,
          snackbar: snackbarContext,
          alertDialog: alertDialogContext,
        }}
      >
        {children}
      </Provider>
      <Snackbar ref={snackbar} />
      <AlertDialog ref={alertDialog} />
    </View>
  );
}

function DoobooWithThemeProvider(props: DoobooProviderProps): ReactElement {
  return (
    <ThemeProvider {...props.themeConfig}>
      <DoobooProvider {...props} />
    </ThemeProvider>
  );
}

export {useCtx as useDooboo, DoobooWithThemeProvider as DoobooProvider};
