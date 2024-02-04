import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import type {Fab} from '../../../main';
import {DoobooProvider} from '../../../main';

import Component from './FabBasicStory';

const meta = {
  title: 'Fab',
  component: Component,
  argTypes: {},
  decorators: [
    (Story) => (
      <DoobooProvider>
        <Story />
      </DoobooProvider>
    ),
  ],
} satisfies Meta<ComponentProps<typeof Fab>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    icons: ['MagnifyingGlass', 'Heart'],
    isActive: true,
  },
};
