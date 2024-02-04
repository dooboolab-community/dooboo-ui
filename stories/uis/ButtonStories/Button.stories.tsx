import type {ComponentProps} from 'react';
import {action} from '@storybook/addon-actions';
import type {Meta, StoryObj} from '@storybook/react';

import type {
  Button,
  ButtonColorType,
  ButtonSizeType,
  ButtonType,
} from '../../../main';
import {DoobooProvider} from '../../../main';

import Component from './ButtonBasicStory';

const buttonTypes: ButtonType[] = ['outlined', 'solid', 'text'];
const buttonSizes: ButtonSizeType[] = ['large', 'medium', 'small'];

const buttonColors: ButtonColorType[] = [
  'primary',
  'success',
  'info',
  'warning',
  'danger',
  'light',
  'secondary',
];

const meta = {
  title: 'Button',
  component: Component,
  argTypes: {
    type: {
      control: 'select',
      options: buttonTypes,
    },
    color: {
      control: 'select',
      options: buttonColors,
    },
    size: {
      control: 'select',
      options: buttonSizes,
    },
  },
  decorators: [
    (Story) => (
      <DoobooProvider>
        <Story />
      </DoobooProvider>
    ),
  ],
} satisfies Meta<ComponentProps<typeof Button>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    type: 'solid',
    color: 'primary',
    text: 'Button',
    size: 'medium',
    onPress: action('onPressItem'),
  },
};
