import {EditText, EditTextProps, ThemeProvider} from 'dooboo-ui';
import React, {FC, useState} from 'react';

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
