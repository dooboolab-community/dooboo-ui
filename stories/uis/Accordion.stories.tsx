import type {ComponentProps} from 'react';
import {action} from '@storybook/addon-actions';
import type {Meta, StoryObj} from '@storybook/react';

import {Accordion, DoobooProvider} from '../../main';
import {StoryWrapper} from '../Common';

// @ts-ignore
const meta = {
  title: 'Accordion',
  component: (props) => <Accordion {...props} />,
  decorators: [
    (Story) => (
      <DoobooProvider>
        <StoryWrapper>
          <Story />
        </StoryWrapper>
      </DoobooProvider>
    ),
  ],
} satisfies Meta<ComponentProps<typeof Accordion>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    animDuration: 200,
    collapseOnStart: true,
    onPressItem: action('onPressItem'),
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
