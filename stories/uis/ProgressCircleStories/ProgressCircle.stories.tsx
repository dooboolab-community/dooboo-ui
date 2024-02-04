import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import type {ProgressCircle} from '../../../main';
import {DoobooProvider} from '../../../main';

import Component from './ProgressCircleBasicStory';

const meta = {
  title: 'ProgressCircle',
  component: Component,
  decorators: [
    (Story) => (
      <DoobooProvider>
        <Story />
      </DoobooProvider>
    ),
  ],
} satisfies Meta<ComponentProps<typeof ProgressCircle>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    progress: 50,
  },
};
