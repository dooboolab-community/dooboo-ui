import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {DoobooProvider} from '../../main';
import type {PinchZoom} from '../../packages/PinchZoom/lib';
import {StoryContainer} from '../GlobalStyles';

import Component from './PinchZoomStories/PinchZoomImageListStory';

const meta = {
  title: 'Packages/PinchZoom',
  // @ts-ignore
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
} satisfies Meta<ComponentProps<typeof PinchZoom>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
