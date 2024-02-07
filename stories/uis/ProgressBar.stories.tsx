import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {ProgressBar} from '../../main';
import {StoryWrapper} from '../Common';

const meta = {
  title: 'ProgressBar',
  component: (props) => <ProgressBar {...props} />,
  argTypes: {},
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
} satisfies Meta<ComponentProps<typeof ProgressBar>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    value: 50,
  },
};
