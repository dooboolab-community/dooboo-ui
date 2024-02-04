import type {Meta, StoryObj} from '@storybook/react';

import {DoobooProvider} from '../../../main';

import AccordionBasicStory from './AccordionBasicStory';

const meta = {
  title: 'Accordion',
  component: AccordionBasicStory,
  decorators: [
    (Story) => (
      <DoobooProvider>
        <Story />
      </DoobooProvider>
    ),
  ],
} satisfies Meta<typeof AccordionBasicStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    activityOpacity: 0.8,
    animDuration: 200,
    collapseOnStart: true,
    data: [
      {
        title: 'Lists',
        items: ['User', 'Mail', 'Text'],
      },
      {
        title: 'Lists',
        items: ['User', 'Mail', 'Text'],
      },
      {
        title: 'Lists',
        items: ['User', 'Mail', 'Text'],
      },
    ],
    shouldAnimate: true,
  },
};
