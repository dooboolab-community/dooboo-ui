import {EditText, Icon, useTheme} from '../../../main';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import {useFonts} from 'expo-font';

const EditTextRow = (): React.ReactElement => {
  const {theme} = useTheme();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../../main/Icon/doobooui.ttf'),
  });

  const onTextChanged = (type: string, text: string): void => {
    type === 'EMAIL' ? setEmail(text) : setPassword(text);
  };

  if (!fontsLoaded) return <View />;

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
        <EditText
          type="row"
          placeholder="Default EditText"
          value={email}
          onChangeText={(text) => onTextChanged('EMAIL', text)}
          style={{marginTop: 20, marginBottom: 24, paddingHorizontal: 36}}
        />
        <EditText
          type="row"
          labelText="label"
          placeholder="EditText with label"
          value={password}
          onChangeText={(text) => onTextChanged('PASSWORD', text)}
          style={{marginTop: 20, marginBottom: 24, paddingHorizontal: 36}}
        />
        <EditText
          type="row"
          labelText="disabled"
          value="Disabled EditText"
          editable={false}
          style={{marginTop: 20, marginBottom: 24, paddingHorizontal: 36}}
        />
        <EditText
          type="row"
          labelText="label"
          value="EditText with error"
          style={{marginTop: 20, marginBottom: 24, paddingHorizontal: 36}}
          errorText="Error occurred!"
        />
        <Icon name="like-solid" color="black" size={32} />
        <View style={{height: 300}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditTextRow;
