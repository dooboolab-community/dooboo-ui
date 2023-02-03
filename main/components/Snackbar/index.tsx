import React, {useRef} from 'react';
import type {SnackbarContent, SnackbarRef} from './Snackbar';

import type {MutableRefObject} from 'react';
import {Snackbar} from './Snackbar';
import {View} from 'react-native';
import createCtx from '../../utils/createCtx';

interface SnackbarContext {
  show(content: SnackbarContent): void;
}

export interface SnackbarProviderProps {
  children?: React.ReactElement;
  defaultContent?: Partial<SnackbarContent>;
}

const [useCtx, Provider] = createCtx<SnackbarContext>(
  'Snackbar should be used within SnackbarProvider if not accessing with ref.',
);

function SnackbarProvider(props: SnackbarProviderProps): React.ReactElement {
  const {children, defaultContent = {}} = props;
  const snackbar = useRef<SnackbarRef>() as MutableRefObject<SnackbarRef>;

  const show = (content: SnackbarContent): void => {
    snackbar.current && snackbar.current.show({...defaultContent, ...content});
  };

  return (
    <View style={{flex: 1, width: '100%'}}>
      <Provider value={{show}}>{children}</Provider>
      <Snackbar ref={snackbar} />
    </View>
  );
}

export {useCtx as useSnackbar, SnackbarProvider};
export * from './Snackbar';
export default Snackbar;
