// Caveat: Expo web needs React to be imported
import React, {useState} from 'react';
import {ScrollContainer, StoryContainer} from '../../GlobalStyles';

import {EditText} from '../../../main/uis/EditText';
import type {EditTextStatus} from '../../../main/uis/EditText';
import type {ReactElement} from 'react';
import {Typography} from '../../../main/uis/Typography';
import {boolean} from '@storybook/addon-knobs';
import {useTheme} from '@dooboo-ui/theme';

const EditTextBasicStory = (): ReactElement => {
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
    <ScrollContainer
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <StoryContainer>
        <Typography.Heading1>EditText</Typography.Heading1>
        <EditText
          secureTextEntry={boolean('secureTextEntry', false)}
          editable={boolean('editable', true)}
          placeholder="Basic text input"
          value={text}
          onChangeText={(str) => onTextChanged(str)}
          style={{marginTop: 20}}
        />

        <EditText
          secureTextEntry={true}
          editable={boolean('editable', true)}
          placeholder="Secure text input"
          value={text}
          onChangeText={(str) => onTextChanged(str)}
          style={{marginTop: 20}}
        />

        <EditText
          secureTextEntry={boolean('secureTextEntry', false)}
          editable={boolean('editable', true)}
          direction="column"
          label="Column"
          placeholder="direction: column"
          value={text}
          onChangeText={(str) => onTextChanged(str)}
          style={{marginTop: 20}}
        />

        <EditText
          secureTextEntry={boolean('secureTextEntry', false)}
          editable={boolean('editable', true)}
          direction="row"
          placeholder="direction: row"
          label="Row"
          value={text}
          onChangeText={(str) => onTextChanged(str)}
          style={{marginTop: 20}}
        />

        <EditText
          secureTextEntry={boolean('secureTextEntry', false)}
          editable={boolean('editable', true)}
          direction="column"
          decoration="boxed"
          placeholder="decoration: boxed"
          label="Boxed"
          value={text}
          onChangeText={(str) => onTextChanged(str)}
          style={{marginTop: 20}}
        />

        <EditText
          secureTextEntry={boolean('secureTextEntry', false)}
          editable={boolean('editable', true)}
          direction="column"
          placeholder="multiline example"
          label="multiline"
          multiline={true}
          value={text}
          onChangeText={(str) => onTextChanged(str)}
          style={{marginTop: 20}}
        />

        <EditText
          secureTextEntry={boolean('secureTextEntry', false)}
          editable={boolean('editable', true)}
          direction="row"
          placeholder="Error example"
          label="Email"
          value={text}
          onChangeText={(str) => onTextChanged(str)}
          style={{marginTop: 20}}
          error="This is error message"
        />

        <EditText
          secureTextEntry={boolean('secureTextEntry', false)}
          editable={false}
          direction="row"
          placeholder="Disabled example"
          label="Email"
          value={text}
          onChangeText={(str) => onTextChanged(str)}
          style={{marginTop: 20}}
        />

        <EditText
          secureTextEntry={boolean('secureTextEntry', false)}
          editable={boolean('editable', true)}
          placeholder="Custom label example"
          label={renderCustomLabel}
          value={text}
          onChangeText={(str) => onTextChanged(str)}
          style={{marginTop: 20}}
        />

        <EditText
          secureTextEntry={boolean('secureTextEntry', false)}
          editable={boolean('editable', true)}
          placeholder="Please write text"
          value={text}
          error="error text"
          onChangeText={(str) => onTextChanged(str)}
          style={{marginTop: 20, marginBottom: 80}}
          maxLength={10}
        />
      </StoryContainer>
    </ScrollContainer>
  );
};

export default EditTextBasicStory;
