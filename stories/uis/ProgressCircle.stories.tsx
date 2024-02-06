import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {DoobooProvider, ProgressCircle} from '../../main';
import {StoryContainer} from '../GlobalStyles';

const meta = {
  title: 'ProgressCircle',
  component: (props) => <ProgressCircle {...props} />,
  decorators: [
    (Story) => (
      <DoobooProvider>
        <StoryContainer>
          <Story />
        </StoryContainer>
      </DoobooProvider>
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
