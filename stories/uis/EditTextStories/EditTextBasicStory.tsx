// Caveat: Expo web needs React to be imported
import type {ReactElement} from 'react';
import React, {useState} from 'react';
import {useTheme} from '@dooboo-ui/theme';
import {css} from '@emotion/native';
import {boolean} from '@storybook/addon-knobs';

import {Button, Icon} from '../../../main';
import type {EditTextStatus} from '../../../main/uis/EditText';
import {EditText} from '../../../main/uis/EditText';
import {Typography} from '../../../main/uis/Typography';
import {ScrollContainer, StoryContainer} from '../../GlobalStyles';

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
      scrollIndicatorInsets={{right: 0}}
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
          style={css`
            margin-top: 20px;
          `}
          maxLength={240}
          startElement={
            <Button
              onPress={() => onTextChanged('')}
              text={
                <Icon name="AddLocation" size={18} color={theme.role.primary} />
              }
              type="text"
            />
          }
          endElement={
            text ? (
              <Button
                onPress={() => onTextChanged('')}
                text={
                  <Icon
                    name="CancelCircle"
                    size={18}
                    color={theme.role.primary}
                  />
                }
                type="text"
              />
            ) : null
          }
        />

        <EditText
          secureTextEntry={boolean('secureTextEntry', false)}
          editable={boolean('editable', true)}
          direction="row"
          placeholder="direction: row"
          label="Row"
          value={text}
          onChangeText={(str) => onTextChanged(str)}
          style={css`
            margin-top: 20px;
          `}
          maxLength={240}
          endElement={
            text ? (
              <Button
                onPress={() => onTextChanged('')}
                text={
                  <Icon
                    name="CancelCircle"
                    size={18}
                    color={theme.role.primary}
                  />
                }
                type="text"
              />
            ) : null
          }
        />

        <EditText
          secureTextEntry={boolean('secureTextEntry', false)}
          editable={boolean('editable', true)}
          direction="column"
          decoration="boxed"
          placeholder="decoration: boxed with max length"
          value={text}
          onChangeText={(str) => onTextChanged(str)}
          style={css`
            margin-top: 20px;
          `}
          maxLength={200}
          startElement={
            <Button
              onPress={() => onTextChanged('')}
              text={
                <Icon name="AddLocation" size={18} color={theme.role.primary} />
              }
              type="text"
            />
          }
          endElement={
            text ? (
              <Button
                onPress={() => onTextChanged('')}
                text={
                  <Icon
                    name="CancelCircle"
                    size={18}
                    color={theme.role.primary}
                  />
                }
                type="text"
              />
            ) : null
          }
        />

        <EditText
          secureTextEntry={boolean('secureTextEntry', false)}
          editable={boolean('editable', true)}
          direction="column"
          decoration="boxed"
          endElement={
            text ? (
              <Button
                onPress={() => onTextChanged('')}
                text={
                  <Icon
                    name="CancelCircle"
                    size={18}
                    color={theme.role.primary}
                  />
                }
                type="text"
              />
            ) : null
          }
          placeholder="decoration: boxed"
          multiline
          required
          label="Boxed"
          value={text}
          onChangeText={(str) => onTextChanged(str)}
          style={css`
            margin-top: 20px;
          `}
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
