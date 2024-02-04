import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {DoobooProvider} from '../../../main';
import type AlertDialog from '../../../main/modals/AlertDialog';

import Component from './AlertDialogBasicStory';

const meta = {
  title: 'AlertDialog',
  component: Component,
  argTypes: {},
  decorators: [
    (Story) => (
      <DoobooProvider>
        <Story />
      </DoobooProvider>
    ),
  ],
} satisfies Meta<ComponentProps<typeof AlertDialog>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
