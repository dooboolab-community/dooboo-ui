import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import type {ProgressBar} from '../../../main';
import {DoobooProvider} from '../../../main';

import Component from './ProgressBarBasicStory';

const meta = {
  title: 'ProgressBar',
  component: Component,
  argTypes: {},
  decorators: [
    (Story) => (
      <DoobooProvider>
        <Story />
      </DoobooProvider>
    ),
  ],
} satisfies Meta<ComponentProps<typeof ProgressBar>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    value: 50,
  },
};
