// Caveat: Expo web needs React to be imported
import React, {useState} from 'react';
import {useTheme} from '@dooboo-ui/theme';
import {css} from '@emotion/native';
import {boolean} from '@storybook/addon-knobs';

import {Button, Icon} from '../../../main';
import type {EditTextStatus} from '../../../main/uis/EditText';
import {EditText} from '../../../main/uis/EditText';
import {Typography} from '../../../main/uis/Typography';
import {ScrollContainer, StoryContainer} from '../../GlobalStyles';

function EditTextBasicStory(): JSX.Element {
  const {theme} = useTheme();
  const [text, setText] = useState<string>('');

  const onTextChanged = (str: string): void => setText(str);

  const renderCustomLabel = (status: EditTextStatus): JSX.Element => {
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
    <StoryContainer>
      <Typography.Heading1>EditText</Typography.Heading1>
      <ScrollContainer
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        scrollIndicatorInsets={{right: 0}}
      >
        <EditText
          editable={boolean('editable', true)}
          onChangeText={(str) => onTextChanged(str)}
          placeholder="Basic text input"
          secureTextEntry={boolean('secureTextEntry', false)}
          style={{marginTop: 20}}
          value={text}
        />

        <EditText
          editable={boolean('editable', true)}
          onChangeText={(str) => onTextChanged(str)}
          placeholder="Secure text input"
          secureTextEntry={true}
          style={{marginTop: 20}}
          value={text}
        />

        <EditText
          direction="column"
          editable={boolean('editable', true)}
          endElement={
            text ? (
              <Button
                onPress={() => onTextChanged('')}
                text={
                  <Icon color={theme.role.primary} name="XCircle" size={18} />
                }
                type="text"
              />
            ) : null
          }
          label="Column"
          maxLength={240}
          onChangeText={(str) => onTextChanged(str)}
          placeholder="direction: column"
          secureTextEntry={boolean('secureTextEntry', false)}
          startElement={
            <Button
              onPress={() => onTextChanged('')}
              text={<Icon color={theme.role.primary} name="MapPin" size={18} />}
              type="text"
            />
          }
          style={css`
            margin-top: 20px;
          `}
          value={text}
        />

        <EditText
          direction="row"
          editable={boolean('editable', true)}
          endElement={
            text ? (
              <Button
                onPress={() => onTextChanged('')}
                text={
                  <Icon color={theme.role.primary} name="XCircle" size={18} />
                }
                type="text"
              />
            ) : null
          }
          label="Row"
          maxLength={240}
          onChangeText={(str) => onTextChanged(str)}
          placeholder="direction: row"
          secureTextEntry={boolean('secureTextEntry', false)}
          style={css`
            margin-top: 20px;
          `}
          value={text}
        />

        <EditText
          decoration="boxed"
          direction="column"
          editable={boolean('editable', true)}
          endElement={
            text ? (
              <Button
                onPress={() => onTextChanged('')}
                text={
                  <Icon color={theme.role.primary} name="XCircle" size={18} />
                }
                type="text"
              />
            ) : null
          }
          maxLength={200}
          onChangeText={(str) => onTextChanged(str)}
          placeholder="decoration: boxed with max length"
          secureTextEntry={boolean('secureTextEntry', false)}
          startElement={
            <Button
              onPress={() => onTextChanged('')}
              text={<Icon color={theme.role.primary} name="MapPin" size={18} />}
              type="text"
            />
          }
          style={css`
            margin-top: 20px;
          `}
          value={text}
        />

        <EditText
          decoration="boxed"
          direction="column"
          editable={boolean('editable', true)}
          endElement={
            text ? (
              <Button
                onPress={() => onTextChanged('')}
                text={
                  <Icon color={theme.role.primary} name="XCircle" size={18} />
                }
                type="text"
              />
            ) : null
          }
          label="Boxed"
          multiline
          onChangeText={(str) => onTextChanged(str)}
          placeholder="decoration: boxed"
          required
          secureTextEntry={boolean('secureTextEntry', false)}
          style={css`
            margin-top: 20px;
          `}
          value={text}
        />

        <EditText
          direction="column"
          editable={boolean('editable', true)}
          label="multiline"
          multiline={true}
          onChangeText={(str) => onTextChanged(str)}
          placeholder="multiline example"
          secureTextEntry={boolean('secureTextEntry', false)}
          style={{marginTop: 20}}
          value={text}
        />

        <EditText
          direction="row"
          editable={boolean('editable', true)}
          error="This is error message"
          label="Email"
          onChangeText={(str) => onTextChanged(str)}
          placeholder="Error example"
          secureTextEntry={boolean('secureTextEntry', false)}
          style={{marginTop: 20}}
          value={text}
        />

        <EditText
          direction="row"
          editable={false}
          label="Email"
          onChangeText={(str) => onTextChanged(str)}
          placeholder="Disabled example"
          secureTextEntry={boolean('secureTextEntry', false)}
          style={{marginTop: 20}}
          value={text}
        />

        <EditText
          editable={boolean('editable', true)}
          label={renderCustomLabel}
          onChangeText={(str) => onTextChanged(str)}
          placeholder="Custom label example"
          secureTextEntry={boolean('secureTextEntry', false)}
          style={{marginTop: 20}}
          value={text}
        />

        <EditText
          editable={boolean('editable', true)}
          error="error text"
          maxLength={10}
          onChangeText={(str) => onTextChanged(str)}
          placeholder="Please write text"
          secureTextEntry={boolean('secureTextEntry', false)}
          style={{marginTop: 20, marginBottom: 80}}
          value={text}
        />
      </ScrollContainer>
    </StoryContainer>
  );
}

export default EditTextBasicStory;
