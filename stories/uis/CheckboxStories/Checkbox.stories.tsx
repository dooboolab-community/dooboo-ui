import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import type {Checkbox} from '../../../main';
import {DoobooProvider} from '../../../main';

import Component from './CheckboxBasicStory';

const meta = {
  title: 'Checkbox',
  component: Component,
  argTypes: {},
  decorators: [
    (Story) => (
      <DoobooProvider>
        <Story />
      </DoobooProvider>
    ),
  ],
} satisfies Meta<ComponentProps<typeof Checkbox>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
