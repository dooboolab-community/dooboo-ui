import type {ReactElement} from 'react';
import React, {useState} from 'react';
import type {EditTextProps} from 'dooboo-ui';
import {DoobooProvider, EditText} from 'dooboo-ui';

type Props = {} & EditTextProps;

function Default(props: Props): ReactElement {
  const [value, setValue] = useState('');

  return (
    <DoobooProvider>
      <EditText {...props} onChangeText={setValue} value={value} />
    </DoobooProvider>
  );
}

export default Default;
