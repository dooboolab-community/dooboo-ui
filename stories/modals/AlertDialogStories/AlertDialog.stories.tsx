import type {ComponentProps} from 'react';
import {css} from '@emotion/native';
import type {Meta, StoryObj} from '@storybook/react';

import type AlertDialog from '../../../main/modals/AlertDialog';
import {StoryWrapper} from '../../Common';

import Component from './AlertDialogBasicStory';

const meta = {
  title: 'Modals/AlertDialog',
  component: Component,
  argTypes: {},
  decorators: [
    (Story) => (
      <StoryWrapper
        style={css`
          height: 400px;
        `}
      >
        <Story />
      </StoryWrapper>
    ),
  ],
} satisfies Meta<ComponentProps<typeof AlertDialog>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
