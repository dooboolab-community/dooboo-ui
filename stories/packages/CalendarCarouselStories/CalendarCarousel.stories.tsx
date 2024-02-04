import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {DoobooProvider} from '../../../main';
import type CalendarCarousel from '../../../packages/CalendarCarousel';

import Component from './CalendarCarouselBasicStory';

const meta = {
  title: 'CalendarCarousel',
  component: Component,
  argTypes: {},
  decorators: [
    (Story) => (
      <DoobooProvider>
        <Story />
      </DoobooProvider>
    ),
  ],
} satisfies Meta<ComponentProps<typeof CalendarCarousel>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
