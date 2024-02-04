import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import type {NetworkImage} from '../../../main';
import {DoobooProvider} from '../../../main';

import Component from './NetworkImageBasicStory';

const meta = {
  title: 'NetworkImage',
  component: Component,
  argTypes: {},
  decorators: [
    (Story) => (
      <DoobooProvider>
        <Story />
      </DoobooProvider>
    ),
  ],
} satisfies Meta<ComponentProps<typeof NetworkImage>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Very_Large_Telescope_Ready_for_Action_%28ESO%29.jpg',
  },
};
