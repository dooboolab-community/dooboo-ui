import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import type {PinchZoom} from '../../packages/PinchZoom/lib';
import {StoryWrapper} from '../Common';

import Component from './PinchZoomStories/PinchZoomImageListStory';

const meta = {
  title: 'Packages/PinchZoom',
  // @ts-ignore
  component: Component,
  argTypes: {},
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
} satisfies Meta<ComponentProps<typeof PinchZoom>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
