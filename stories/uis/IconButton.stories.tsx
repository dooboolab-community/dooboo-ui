import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {IconButton} from '../../main';
import {StoryWrapper} from '../Common';

const meta = {
  title: 'Components/IconButton',
  component: (props) => <IconButton {...props} />,
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'solid', 'outlined'],
    },
    size: {
      control: 'number',
    },
    loading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
} satisfies Meta<ComponentProps<typeof IconButton>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
