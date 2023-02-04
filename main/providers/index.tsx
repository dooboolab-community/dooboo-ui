import type {MutableRefObject, ReactElement} from 'react';
import React, {useRef} from 'react';
import type {
  SnackbarContent as SnackbarOption,
  SnackbarRef,
} from '../components/Snackbar';

import {Snackbar} from '../components/Snackbar';
import type {ThemeProps} from '@dooboo-ui/theme/ThemeProvider';
import {ThemeProvider} from '@dooboo-ui/theme';
import {View} from 'react-native';
import createCtx from '../utils/createCtx';

interface DoobooContext {
  snackbar: {
    show(option: SnackbarOption): void;
  };
}

export interface DoobooProviderProps {
  children?: ReactElement;
  themeConfig?: Omit<ThemeProps, 'children'>;
  snackbarConfig?: SnackbarOption;
}

const [useCtx, Provider] = createCtx<DoobooContext>(
  'dooboo-ui Snackbar should be used within DoobooProvider if not accessing with ref.',
);

function DoobooProvider(props: DoobooProviderProps): React.ReactElement {
  const {children, snackbarConfig = {}} = props;
  const snackbar = useRef<SnackbarRef>() as MutableRefObject<SnackbarRef>;

  /**
   ** Snackbar
   */
  const show = (content: SnackbarOption): void => {
    snackbar.current && snackbar.current.show({...snackbarConfig, ...content});
  };

  const snackbarOption: DoobooContext['snackbar'] = {
    show,
  };

  /**
   ** AlertDialog
   */

  return (
    <ThemeProvider {...props.themeConfig}>
      <View style={{flex: 1, alignSelf: 'stretch'}}>
        <Provider value={{snackbar: snackbarOption}}>{children}</Provider>
        <Snackbar ref={snackbar} />
      </View>
    </ThemeProvider>
  );
}

export {useCtx as useDooboo, DoobooProvider};
