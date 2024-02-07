import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {DoobooProvider} from '../../../main';
import type Snackbar from '../../../main/modals/Snackbar';
import {StoryContainer} from '../../GlobalStyles';

import Component from './SnackbarBasicStory';

const meta = {
  title: 'Components/Snackbar',
  component: Component,
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
} satisfies Meta<ComponentProps<typeof Snackbar>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
