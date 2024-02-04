import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import type {Icon} from '../../../main';
import {doobooIconList, DoobooProvider} from '../../../main';

import Component from './IconBasicStory';

const meta = {
  title: 'Icon',
  component: Component,
  argTypes: {
    name: {
      control: 'select',
      options: doobooIconList,
    },
  },
  decorators: [
    (Story) => (
      <DoobooProvider>
        <Story />
      </DoobooProvider>
    ),
  ],
} satisfies Meta<ComponentProps<typeof Icon>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: 'MagnifyingGlass',
  },
};
