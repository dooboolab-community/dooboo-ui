import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {DoobooProvider, IconButton} from '../../main';
import {StoryContainer} from '../GlobalStyles';

const meta = {
  title: 'IconButton',
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
      <DoobooProvider>
        <StoryContainer>
          <Story />
        </StoryContainer>
      </DoobooProvider>
    ),
  ],
} satisfies Meta<ComponentProps<typeof IconButton>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
