import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {Rating} from '../../main';
import {StoryWrapper} from '../Common';

const meta = {
  title: 'Rating',
  component: (props) => <Rating {...props} />,
  argTypes: {
    iconType: {
      control: 'select',
      options: ['star', 'dooboo'],
    },
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    allowHalfRating: {
      type: 'boolean',
      defaultValue: true,
    },
    disabled: {
      type: 'boolean',
      defaultValue: false,
    },
  },
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
} satisfies Meta<ComponentProps<typeof Rating>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    allowHalfRating: true,
    color: '#000000',
    direction: 'horizontal',
    disabled: false,
    iconType: 'star',
    size: 24,
  },
};
