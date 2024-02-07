import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import type {ButtonColorType, ButtonSizeType, ButtonType} from '../../main';
import {Button, DoobooProvider} from '../../main';
import {StoryWrapper} from '../Common';

const buttonTypes: ButtonType[] = ['outlined', 'solid', 'text'];
const buttonSizes: ButtonSizeType[] = ['large', 'medium', 'small'];

const buttonColors: ButtonColorType[] = [
  'primary',
  'success',
  'info',
  'warning',
  'danger',
  'light',
  'secondary',
];

const meta = {
  title: 'Button',
  component: (props) => <Button {...props} />,
  argTypes: {
    type: {
      control: 'select',
      options: buttonTypes,
    },
    color: {
      control: 'select',
      options: buttonColors,
    },
    size: {
      control: 'select',
      options: buttonSizes,
    },
  },
  decorators: [
    (Story) => (
      <DoobooProvider>
        <StoryWrapper>
          <Story />
        </StoryWrapper>
      </DoobooProvider>
    ),
  ],
} satisfies Meta<ComponentProps<typeof Button>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    type: 'solid',
    color: 'primary',
    text: 'Button',
    size: 'medium',
    onPress: () => {},
  },
};
