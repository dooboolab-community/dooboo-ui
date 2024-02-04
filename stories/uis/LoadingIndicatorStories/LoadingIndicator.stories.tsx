import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import type {LoadingIndicator} from '../../../main';
import {DoobooProvider} from '../../../main';

import Component from './LoadingIndicatorBasicStory';

const meta = {
  title: 'LoadingIndicator',
  component: Component,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
  decorators: [
    (Story) => (
      <DoobooProvider>
        <Story />
      </DoobooProvider>
    ),
  ],
} satisfies Meta<ComponentProps<typeof LoadingIndicator>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    size: 'small',
  },
};
