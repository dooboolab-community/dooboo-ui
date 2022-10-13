import type {EditTextProps} from 'dooboo-ui';
import {EditText, ThemeProvider} from 'dooboo-ui';
import type {FC} from 'react';
import React, {useState} from 'react';

type Props = {} & EditTextProps;

const Default: FC<Props> = (props) => {
  const [value, setValue] = useState('');

  return (
    <ThemeProvider>
      <EditText {...props} onChangeText={setValue} value={value} />
    </ThemeProvider>
  );
};

export default Default;
