import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import {EditText} from '..';
import {Typography} from '../../Typography';
import {useTheme} from '@dooboo-ui/theme';

const EditTextBasic = (): React.ReactElement => {
  const {theme} = useTheme();
  const [text, setText] = useState<string>('');

  const onTextChanged = (str): void => setText(str);

  return (
    <SafeAreaView style={{flex: 1, alignSelf: 'stretch'}}>
      <ScrollView
        contentContainerStyle={{
          alignSelf: 'stretch',
          paddingVertical: 40,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.bg.default,
        }}
      >
        <Typography.Heading1>EditText</Typography.Heading1>
        <EditText
          placeholder="Basic text input"
          value={text}
          onChangeText={(str) => onTextChanged(str)}
          style={{marginTop: 20, paddingHorizontal: 36}}
        />

        <EditText
          placeholder="Secure text input"
          value={text}
          secureTextEntry={true}
          onChangeText={(str) => onTextChanged(str)}
          style={{marginTop: 20, paddingHorizontal: 36}}
        />

        <EditText
          direction="column"
          label="Column"
          placeholder="direction: column"
          value={text}
          onChangeText={(str) => onTextChanged(str)}
          style={{marginTop: 20, paddingHorizontal: 36}}
        />

        <EditText
          direction="row"
          placeholder="direction: row"
          label="Row"
          value={text}
          onChangeText={(str) => onTextChanged(str)}
          style={{marginTop: 20, paddingHorizontal: 36}}
        />

        <EditText
          direction="column"
          decoration="boxed"
          placeholder="decoration: boxed"
          label="Boxed"
          value={text}
          onChangeText={(str) => onTextChanged(str)}
          style={{marginTop: 20, paddingHorizontal: 36}}
        />

        <EditText
          direction="row"
          placeholder="Error example"
          label="Email"
          value={text}
          onChangeText={(str) => onTextChanged(str)}
          style={{marginTop: 20, paddingHorizontal: 36}}
          error="This is error message"
        />

        <EditText
          direction="row"
          placeholder="Disabled example"
          label="Email"
          editable={false}
          value={text}
          onChangeText={(str) => onTextChanged(str)}
          style={{marginTop: 20, paddingHorizontal: 36, marginBottom: 40}}
          // error="This is error message"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditTextBasic;
