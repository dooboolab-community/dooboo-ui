import type {ComponentProps} from 'react';
import {css} from '@emotion/native';
import type {Meta, StoryObj} from '@storybook/react';

import {DoobooProvider, NetworkImage} from '../../main';
import {StoryContainer} from '../GlobalStyles';

const meta = {
  title: 'NetworkImage',
  component: (props) => (
    <NetworkImage
      style={css`
        width: 200px;
        height: 200px;
        margin: 20px;
        align-self: center;
      `}
      url={props.url}
    />
  ),
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
} satisfies Meta<ComponentProps<typeof NetworkImage>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Very_Large_Telescope_Ready_for_Action_%28ESO%29.jpg',
  },
};
