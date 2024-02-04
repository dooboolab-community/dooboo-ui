import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import type {Rating} from '../../../main';
import {DoobooProvider} from '../../../main';

import Component from './RatingBasicStory';

const meta = {
  title: 'Rating',
  component: Component,
  argTypes: {},
  decorators: [
    (Story) => (
      <DoobooProvider>
        <Story />
      </DoobooProvider>
    ),
  ],
} satisfies Meta<ComponentProps<typeof Rating>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
