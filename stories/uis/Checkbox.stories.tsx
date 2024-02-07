import {type ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import type {CheckboxColor} from '../../main';
import {Checkbox, Typography} from '../../main';
import {StoryWrapper} from '../Common';

const colors: CheckboxColor[] = [
  'primary',
  'success',
  'info',
  'warning',
  'danger',
  'secondary',
];

const meta = {
  title: 'Components/Checkbox',
  component: (props) => <Checkbox {...props} />,
  argTypes: {
    color: {
      control: 'select',
      options: colors,
    },
    checked: {
      defaultValue: false,
      type: 'boolean',
    },
  },
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
} satisfies Meta<ComponentProps<typeof Checkbox>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    color: 'primary',
    endElement: <Typography.Body1>Click Checkbox!</Typography.Body1>,
    checked: false,
    onPress: () => {},
  },
};
