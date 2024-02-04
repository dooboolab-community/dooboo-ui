import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import type {SwitchToggle} from '../../../main';
import {DoobooProvider} from '../../../main';

import Component from './SwitchToggleBasicStory';

const meta = {
  title: 'SwitchToggle',
  component: Component,
  argTypes: {},
  decorators: [
    (Story) => (
      <DoobooProvider>
        <Story />
      </DoobooProvider>
    ),
  ],
} satisfies Meta<ComponentProps<typeof SwitchToggle>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    isOn: false,
  },
};
