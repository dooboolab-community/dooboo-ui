// Caveat: Expo web needs React to be imported
import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {boolean} from '@storybook/addon-knobs';

import {Button, Icon} from '../../../main';
import {EditText} from '../../../main/uis/EditText';
import {Typography} from '../../../main/uis/Typography';
import {ScrollContainer, StoryContainer} from '../../GlobalStyles';

function EditTextStartEndStory(): JSX.Element {
  const [text, setText] = useState<string>('');
  const onTextChanged = (str: string): void => setText(str);

  return (
    <ScrollContainer
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <StoryContainer>
        <Typography.Heading1>EditText</Typography.Heading1>
        <Typography.Heading3 style={{marginTop: 20}}>
          StartElement
        </Typography.Heading3>
        <EditText
          editable={boolean('editable', true)}
          onChangeText={(str) => onTextChanged(str)}
          placeholder="Basic text input"
          secureTextEntry={boolean('secureTextEntry', false)}
          startElement={<Icon name="Plus" />}
          value={text}
        />
        <Typography.Heading3 style={{marginTop: 20}}>
          EndElement
        </Typography.Heading3>
        <EditText
          editable={boolean('editable', true)}
          endElement={({color}) => (
            <Button
              onPress={action('EndElement button pressed')}
              style={{marginRight: 0, zIndex: 99}}
              text={<Icon color={color} name="Eye" />}
              type="text"
            />
          )}
          onChangeText={(str) => onTextChanged(str)}
          placeholder="Basic text input"
          secureTextEntry={boolean('secureTextEntry', false)}
          value={text}
        />
        <Typography.Heading3 style={{marginTop: 20}}>
          Both Start and End
        </Typography.Heading3>
        <EditText
          editable={boolean('editable', true)}
          endElement={
            <Button
              style={{marginRight: 0}}
              text={<Icon name="Eye" />}
              type="text"
            />
          }
          onChangeText={(str) => onTextChanged(str)}
          placeholder="Basic text input"
          secureTextEntry={boolean('secureTextEntry', false)}
          startElement={
            <Button
              style={{marginRight: 0}}
              text={<Icon name="Plus" />}
              type="text"
            />
          }
          value={text}
        />
      </StoryContainer>
    </ScrollContainer>
  );
}

export default EditTextStartEndStory;
