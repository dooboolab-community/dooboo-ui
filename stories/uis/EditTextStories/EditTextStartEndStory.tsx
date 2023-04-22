import type {ReactElement} from 'react';
// Caveat: Expo web needs React to be imported
import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {boolean} from '@storybook/addon-knobs';

import {Button, Icon} from '../../../main';
import {EditText} from '../../../main/uis/EditText';
import {Typography} from '../../../main/uis/Typography';
import {ScrollContainer, StoryContainer} from '../../GlobalStyles';

const EditTextStartEndStory = (): ReactElement => {
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
          secureTextEntry={boolean('secureTextEntry', false)}
          editable={boolean('editable', true)}
          placeholder="Basic text input"
          value={text}
          onChangeText={(str) => onTextChanged(str)}
          startElement={<Icon name="Add" />}
        />
        <Typography.Heading3 style={{marginTop: 20}}>
          EndElement
        </Typography.Heading3>
        <EditText
          secureTextEntry={boolean('secureTextEntry', false)}
          editable={boolean('editable', true)}
          placeholder="Basic text input"
          value={text}
          onChangeText={(str) => onTextChanged(str)}
          // eslint-disable-next-line react/no-unstable-nested-components
          endElement={({color}) => (
            <Button
              onPress={action('EndElement button pressed')}
              text={<Icon name="Visibility" color={color} />}
              type="text"
              style={{marginRight: 0, zIndex: 99}}
            />
          )}
        />
        <Typography.Heading3 style={{marginTop: 20}}>
          Both Start and End
        </Typography.Heading3>
        <EditText
          secureTextEntry={boolean('secureTextEntry', false)}
          editable={boolean('editable', true)}
          placeholder="Basic text input"
          value={text}
          onChangeText={(str) => onTextChanged(str)}
          startElement={
            <Button
              text={<Icon name="Add" />}
              type="text"
              style={{marginRight: 0}}
            />
          }
          endElement={
            <Button
              text={<Icon name="Visibility" />}
              type="text"
              style={{marginRight: 0}}
            />
          }
        />
      </StoryContainer>
    </ScrollContainer>
  );
};

export default EditTextStartEndStory;
