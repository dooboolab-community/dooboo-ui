import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import type {Typography} from '../../../main';
import {DoobooProvider} from '../../../main';

import Component from './TypographyBasicStory';

const meta = {
  title: 'Typography',
  component: Component,
  argTypes: {},
  decorators: [
    (Story) => (
      <DoobooProvider>
        <Story />
      </DoobooProvider>
    ),
  ],
} satisfies Meta<ComponentProps<typeof Typography.Body1>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
