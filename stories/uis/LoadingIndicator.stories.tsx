import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {DoobooProvider, LoadingIndicator} from '../../main';
import {StoryContainer} from '../GlobalStyles';

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
      <DoobooProvider>
        <StoryContainer>
          <Story />
        </StoryContainer>
      </DoobooProvider>
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
