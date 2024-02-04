import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import type {RadioButtonType, RadioGroup} from '../../../main';
import {DoobooProvider} from '../../../main';

import Component from './RadioGroupBasicStory';

const meta = {
  title: 'RadioGroup',
  component: Component,
  argTypes: {
    type: {
      control: 'select',
      options: [
        'danger',
        'info',
        'primary',
        'light',
        'secondary',
        'success',
        'warning',
      ] as RadioButtonType[],
    },
  },
  decorators: [
    (Story) => (
      <DoobooProvider>
        <Story />
      </DoobooProvider>
    ),
  ],
} satisfies Meta<ComponentProps<typeof RadioGroup>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: ['Person', 'Animal', 'Bird', 'Other'],
    selectedValue: 'Person',
    title: 'RadioGroup',
    labelPosition: 'left',
    type: 'primary',
  },
};
