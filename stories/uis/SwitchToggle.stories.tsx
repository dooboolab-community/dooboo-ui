import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {SwitchToggle} from '../../main';
import {StoryWrapper} from '../Common';

const meta = {
  title: 'Components/SwitchToggle',
  component: (props) => <SwitchToggle {...props} />,
  argTypes: {},
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
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
