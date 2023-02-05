import type {MutableRefObject, ReactElement} from 'react';
import React, {useRef} from 'react';
import type {SnackbarContext, SnackbarOptions} from '../modals/Snackbar';
import type {ThemeContext, ThemeProps} from '@dooboo-ui/theme/ThemeProvider';
import {ThemeProvider, useTheme} from '@dooboo-ui/theme';

import AlertDialog from '../modals/AlertDialog';
import type {AlertDialogContext} from '../modals/AlertDialog';
import Snackbar from '../modals/Snackbar';
import {View} from 'react-native';
import createCtx from '../utils/createCtx';

export type {ThemeContext} from '@dooboo-ui/theme/ThemeProvider';
export type ThemeType = ThemeContext['themeType'];
export type DoobooTheme = ThemeContext['theme'];

export type DoobooContext = {
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
