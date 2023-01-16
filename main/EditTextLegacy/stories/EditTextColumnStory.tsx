import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import {EditTextLegacy} from '../..';
import {useTheme} from '@dooboo-ui/theme';

const EditTextLegacyColumn = (): React.ReactElement => {
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
          backgroundColor: theme.bg.basic,
        }}
      >
        <EditTextLegacy
          type="column"
          placeholder="Default EditTextLegacy"
          value={email}
          onChangeText={(text) => onTextChanged('EMAIL', text)}
          style={{marginTop: 20, marginBottom: 24, paddingHorizontal: 36}}
        />
        <EditTextLegacy
          type="column"
          labelText="label"
          placeholder="EditTextLegacy with label"
          value={password}
          onChangeText={(text) => onTextChanged('PASSWORD', text)}
          style={{marginTop: 20, marginBottom: 24, paddingHorizontal: 36}}
        />
        <EditTextLegacy
          type="column"
          labelText="label"
          placeholder="EditTextLegacy with label and maxLength"
          value={password}
          onChangeText={(text) => onTextChanged('PASSWORD', text)}
          style={{marginTop: 20, marginBottom: 24, paddingHorizontal: 36}}
          textInputProps={{
            multiline: true,
            maxLength: 10,
          }}
        />
        <EditTextLegacy
          type="column"
          labelText="disabled"
          value="Disabled EditTextLegacy"
          editable={false}
          style={{marginTop: 20, marginBottom: 24, paddingHorizontal: 36}}
        />
        <EditTextLegacy
          type="column"
          labelText="label"
          value="EditTextLegacy with error"
          style={{marginTop: 20, marginBottom: 24, paddingHorizontal: 36}}
          errorText="Error occurred!"
        />
        <View style={{height: 300}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditTextLegacyColumn;
