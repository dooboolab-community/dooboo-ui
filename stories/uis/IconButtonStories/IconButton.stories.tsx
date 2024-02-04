import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import type {IconButton} from '../../../main';
import {DoobooProvider} from '../../../main';

import Component from './IconButtonBasicStory';

const meta = {
  title: 'IconButton',
  component: Component,
  argTypes: {},
  decorators: [
    (Story) => (
      <DoobooProvider>
        <Story />
      </DoobooProvider>
    ),
  ],
} satisfies Meta<ComponentProps<typeof IconButton>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
