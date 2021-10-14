import {EditText, useTheme} from '../../';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

const EditTextColumn = (): React.ReactElement => {
  const {theme} = useTheme();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onTextChanged = (type: string, text: string): void => {
    type === 'EMAIL' ? setEmail(text) : setPassword(text);
  };

  return (
    <SafeAreaView style={{flex: 1, alignSelf: 'stretch'}}>
      <ScrollView
        contentContainerStyle={{
          alignSelf: 'stretch',
          paddingVertical: 60,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.background,
        }}
      >
        <EditText
          type="column"
          placeholder="Default EditText"
          value={email}
          onChangeText={(text) => onTextChanged('EMAIL', text)}
          style={{marginTop: 20, marginBottom: 24, paddingHorizontal: 36}}
        />
        <EditText
          type="column"
          labelText="label"
          placeholder="EditText with label"
          value={password}
          onChangeText={(text) => onTextChanged('PASSWORD', text)}
          style={{marginTop: 20, marginBottom: 24, paddingHorizontal: 36}}
        />
        <EditText
          type="column"
          labelText="label"
          placeholder="EditText with label and maxLength"
          value={password}
          onChangeText={(text) => onTextChanged('PASSWORD', text)}
          style={{marginTop: 20, marginBottom: 24, paddingHorizontal: 36}}
          textInputProps={{
            multiline: true,
            maxLength: 10,
          }}
        />
        <EditText
          type="column"
          labelText="disabled"
          value="Disabled EditText"
          editable={false}
          style={{marginTop: 20, marginBottom: 24, paddingHorizontal: 36}}
        />
        <EditText
          type="column"
          labelText="label"
          value="EditText with error"
          style={{marginTop: 20, marginBottom: 24, paddingHorizontal: 36}}
          errorText="Error occurred!"
        />
        <View style={{height: 300}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditTextColumn;
