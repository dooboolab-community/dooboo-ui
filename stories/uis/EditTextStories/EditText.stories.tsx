import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import type {EditText} from '../../../main';
import {DoobooProvider} from '../../../main';

import Component from './EditTextBasicStory';

const meta = {
  title: 'EditText',
  component: Component,
  argTypes: {},
  decorators: [
    (Story) => (
      <DoobooProvider>
        <Story />
      </DoobooProvider>
    ),
  ],
} satisfies Meta<ComponentProps<typeof EditText>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
