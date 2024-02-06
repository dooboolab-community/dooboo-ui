import type {ComponentProps} from 'react';
import {action} from '@storybook/addon-actions';
import type {Meta, StoryObj} from '@storybook/react';

import {DoobooProvider, EditText} from '../../main';
import {StoryWrapper} from '../Common';

const meta = {
  title: 'EditText',
  component: (props) => <EditText {...props} />,
  argTypes: {
    required: {type: 'boolean'},
    label: {type: 'string'},
    error: {type: 'string'},
    value: {type: 'string'},
    multiline: {type: 'boolean'},
    placeholder: {type: 'string'},
    placeholderColor: {type: 'string'},
    editable: {type: 'boolean'},
    secureTextEntry: {type: 'boolean'},
    numberOfLines: {type: 'number'},
    maxLength: {type: 'number'},
    hideCounter: {type: 'boolean'},
    direction: {
      control: 'select',
      options: ['row', 'column'],
    },
    decoration: {
      control: 'select',
      options: ['underline', 'boxed'],
    },
  },
  decorators: [
    (Story) => (
      <DoobooProvider>
        <StoryWrapper>
          <Story />
        </StoryWrapper>
      </DoobooProvider>
    ),
  ],
} satisfies Meta<ComponentProps<typeof EditText>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    onChangeText: (text: string) => action(text),
    direction: 'column',
    decoration: 'boxed',
    editable: true,
  },
};
