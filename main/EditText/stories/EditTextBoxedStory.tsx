import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import {EditText} from '../../';
import {useTheme} from '@dooboo-ui/theme';

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
        }}
      >
        <EditText
          type="boxed"
          placeholder="your@email.com"
          value={email}
          onChangeText={(text) => onTextChanged('EMAIL', text)}
          style={{marginTop: 20, paddingHorizontal: 36}}
        />
        <EditText
          type="boxed"
          labelText="Any label"
          placeholder="Write anything"
          value={password}
          onChangeText={(text) => onTextChanged('PASSWORD', text)}
          style={{marginTop: 20, paddingHorizontal: 36}}
        />
        <EditText
          type="boxed"
          secureTextEntry={true}
          labelText="disabled"
          value="This is disabled"
          editable={false}
          style={{marginTop: 20, paddingHorizontal: 36}}
        />
        <EditText
          type="boxed"
          labelText="Error example"
          value="any value"
          style={{marginTop: 20, paddingHorizontal: 36}}
          errorText="Error occurred!"
        />
        <View style={{height: 300}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditTextRow;
