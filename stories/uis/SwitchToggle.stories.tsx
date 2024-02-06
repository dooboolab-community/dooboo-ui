import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {DoobooProvider, SwitchToggle} from '../../main';
import {StoryContainer} from '../GlobalStyles';

const meta = {
  title: 'SwitchToggle',
  component: (props) => <SwitchToggle {...props} />,
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
} satisfies Meta<ComponentProps<typeof SwitchToggle>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    isOn: false,
  },
};
