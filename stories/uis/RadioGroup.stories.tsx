import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import type {RadioButtonType} from '../../main';
import {DoobooProvider, RadioGroup} from '../../main';
import {StoryContainer} from '../GlobalStyles';

const meta = {
  title: 'RadioGroup',
  component: (props) => <RadioGroup {...props} />,
  argTypes: {
    type: {
      control: 'select',
      options: [
        'danger',
        'info',
        'primary',
        'light',
        'secondary',
        'success',
        'warning',
      ] as RadioButtonType[],
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
} satisfies Meta<ComponentProps<typeof RadioGroup>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: ['Person', 'Animal', 'Bird', 'Other'],
    labels: ['Person', 'Animal', 'Bird', 'Other'],
    selectedValue: 'Person',
    title: 'RadioGroup',
    labelPosition: 'left',
    type: 'primary',
  },
};
