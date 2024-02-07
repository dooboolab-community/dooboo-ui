import type {ComponentProps} from 'react';
import {css} from '@emotion/native';
import type {Meta, StoryObj} from '@storybook/react';

import type Snackbar from '../../../main/modals/Snackbar';
import {StoryWrapper} from '../../Common';

import Component from './SnackbarBasicStory';

const meta = {
  title: 'Components/Snackbar',
  component: Component,
  argTypes: {},
  decorators: [
    (Story) => (
      <StoryWrapper
        style={css`
          height: 600px;
        `}
      >
        <Story />
      </StoryWrapper>
    ),
  ],
} satisfies Meta<ComponentProps<typeof Snackbar>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
