import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {ProgressCircle} from '../../main';
import {StoryWrapper} from '../Common';

const meta = {
  title: 'Components/ProgressCircle',
  component: (props) => <ProgressCircle {...props} />,
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
} satisfies Meta<ComponentProps<typeof ProgressCircle>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    progress: 0.5,
  },
};
