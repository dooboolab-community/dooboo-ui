import {SafeAreaView, ScrollView} from 'react-native';

import {EditText} from '../../../main/components/EditText';
import type {EditTextStatus} from '../../../main/components/EditText';
import type {ReactElement} from 'react';
import {Typography} from '../../../main/components/Typography';
import {useState} from 'react';
import {useTheme} from '@dooboo-ui/theme';

const EditTextBasic = (): ReactElement => {
  const {theme} = useTheme();
  const [text, setText] = useState<string>('');

  const onTextChanged = (str: string): void => setText(str);

  const renderCustomLabel = (status: EditTextStatus): ReactElement => {
    return (
      <Typography.Body1
        style={{
          color: status === 'focused' ? theme.role.primary : theme.text.basic,
          fontSize: 12,
          fontWeight: 'bold',
        }}
      >
        Custom label [{status}]
      </Typography.Body1>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, alignSelf: 'stretch'}}>
      <ScrollView
        contentContainerStyle={{
          alignSelf: 'stretch',
          paddingVertical: 20,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.bg.basic,
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
          direction="column"
          placeholder="multiline example"
          label="multiline"
          multiline={true}
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
          style={{marginTop: 20, paddingHorizontal: 36}}
        />

        <EditText
          placeholder="Custom label example"
          label={renderCustomLabel}
          value={text}
          onChangeText={(str) => onTextChanged(str)}
          style={{marginTop: 20, paddingHorizontal: 36}}
        />

        <EditText
          placeholder="Please write text"
          value={text}
          error="error text"
          onChangeText={(str) => onTextChanged(str)}
          style={{marginTop: 20, paddingHorizontal: 36, marginBottom: 40}}
          maxLength={10}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditTextBasic;
