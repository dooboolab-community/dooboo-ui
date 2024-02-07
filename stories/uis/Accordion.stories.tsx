import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {Accordion} from '../../main';
import {StoryWrapper} from '../Common';

// @ts-ignore
const meta = {
  title: 'Components/Accordion',
  component: (props) => <Accordion {...props} />,
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
} satisfies Meta<ComponentProps<typeof Accordion>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    animDuration: 200,
    collapseOnStart: true,
    onPressItem: () => {},
    data: [
      {
        title: 'Item 1',
        items: ['User', 'Mail', 'Text'],
      },
      {
        title: 'Item 2',
        items: ['User', 'Mail', 'Text'],
      },
      {
        title: 'Item 3',
        items: ['User', 'Mail', 'Text'],
      },
    ],
    shouldAnimate: true,
  },
};
