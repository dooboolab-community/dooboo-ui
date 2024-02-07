import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {LoadingIndicator} from '../../main';
import {StoryWrapper} from '../Common';

const meta = {
  title: 'LoadingIndicator',
  component: (props) => <LoadingIndicator {...props} />,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'large'],
    },
  },
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
} satisfies Meta<ComponentProps<typeof LoadingIndicator>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    size: 'small',
  },
};
