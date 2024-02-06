import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {DoobooProvider, ProgressBar} from '../../main';
import {StoryContainer} from '../GlobalStyles';

const meta = {
  title: 'ProgressBar',
  component: (props) => <ProgressBar {...props} />,
  argTypes: {},
  decorators: [
    (Story) => (
      <DoobooProvider>
        <StoryContainer>
          <Story />
        </StoryContainer>
      </DoobooProvider>
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
