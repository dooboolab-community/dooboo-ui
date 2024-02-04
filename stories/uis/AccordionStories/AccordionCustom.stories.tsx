import type {Meta, StoryObj} from '@storybook/react';

import {DoobooProvider} from '../../../main';

import AccordionCustomStory from './AccordionCustomStory';

const meta = {
  title: 'Accordion',
  component: AccordionCustomStory,
  args: {
    activityOpacity: 0.8,
    animDuration: 200,
    collapseOnStart: true,
    data: [
      {
        title: {
          key: 'HEADING_1',
          text: 'accordion heading 1',
        },
        items: [{text: 'User'}, {text: 'Mail'}, {text: 'Text'}],
      },
      {
        title: {
          key: 'HEADING_2',
          text: 'accordion heading 2',
        },
        items: [{text: 'Movie'}, {text: 'Image'}, {text: 'File'}],
      },
      {
        title: {
          key: 'HEADING_3',
          text: 'accordion heading 3',
        },
        items: [{text: 'TicTok'}, {text: 'Youtube'}, {text: 'Puzz'}],
      },
    ],
    shouldAnimate: true,
  },
  decorators: [
    (Story) => (
      <DoobooProvider>
        <Story />
      </DoobooProvider>
    ),
  ],
} satisfies Meta<typeof AccordionCustomStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Custom: Story = {};
