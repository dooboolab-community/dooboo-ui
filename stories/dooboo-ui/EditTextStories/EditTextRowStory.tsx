import {EditText, useTheme} from '../../../main';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

const EditTextRow = (): React.ReactElement => {
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
        }}>
        <Text
          style={{
            fontSize: 18,
            marginTop: 24,
            marginBottom: 8,
            color: theme.text,
          }}>
          Default
        </Text>
        <EditText
          type="row"
          placeholder="your@email.com"
          value={email}
          onChangeText={(text) => onTextChanged('EMAIL', text)}
          style={{marginTop: 20, marginBottom: 52, paddingHorizontal: 36}}
        />
        <Text
          style={{
            fontSize: 18,
            marginTop: 48,
            marginBottom: 8,
            color: 'white',
          }}>
          With label
        </Text>
        <EditText
          type="row"
          secureTextEntry={true}
          labelText="password"
          placeholder="Write your password"
          value={password}
          onChangeText={(text) => onTextChanged('PASSWORD', text)}
          style={{marginTop: 20, marginBottom: 40, paddingHorizontal: 36}}
        />
        <Text
          style={{
            fontSize: 18,
            marginTop: 48,
            marginBottom: 8,
            color: theme.text,
          }}>
          Disabled
        </Text>
        <EditText
          type="row"
          secureTextEntry={true}
          labelText="disabled"
          value="This is disabled"
          editable={false}
          style={{marginTop: 20, marginBottom: 40, paddingHorizontal: 36}}
        />
        <Text
          style={{
            fontSize: 18,
            marginTop: 48,
            marginBottom: 8,
            color: theme.text,
          }}>
          With error
        </Text>
        <EditText
          type="row"
          labelText="Error example"
          value="any value"
          style={{marginTop: 20, marginBottom: 40, paddingHorizontal: 36}}
          errorText="Error occurred!"
        />
        <View style={{height: 300}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditTextRow;
