import type {ComponentProps} from 'react';
import {css} from '@emotion/native';
import {action} from '@storybook/addon-actions';
import type {Meta, StoryObj} from '@storybook/react';

import {DoobooProvider, Fab} from '../../main';
import {StoryContainer} from '../GlobalStyles';

const meta = {
  title: 'Fab',
  component: (props) => <Fab {...props} />,
  argTypes: {
    icons: {
      control: 'select',
      options: ['MagnifyingGlass', 'Heart'],
    },
    isActive: {
      type: 'boolean',
      defaultValue: true,
    },
    style: css`
      bottom: 30px;
    `,
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
} satisfies Meta<ComponentProps<typeof Fab>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    icons: ['MagnifyingGlass', 'Heart'],
    isActive: true,
    animationDuration: 300,
    buttonSize: 60,
    fabIcon: 'Plus',
    onPressFab: action('onPressFab'),
    onPressItem: action('onPressItem'),
  },
};
