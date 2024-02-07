import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {ButtonGroup} from '../../main';
import {StoryWrapper} from '../Common';

const meta = {
  title: 'Components/ButtonGroup',
  component: (props) => <ButtonGroup {...props} />,
  argTypes: {
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'success',
        'warning',
        'danger',
        'light',
        'info',
      ],
    },
  },
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
} satisfies Meta<ComponentProps<typeof ButtonGroup>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    color: 'primary', // 기본값으로 'primary' 설정
    initialValue: 'Option1',
    options: ['Option1', 'Option2', 'Option3'],
  },
};
