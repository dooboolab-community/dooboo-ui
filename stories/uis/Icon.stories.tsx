import type {ComponentProps} from 'react';
import {View} from 'react-native';
import {css} from '@emotion/native';
import type {Meta, StoryObj} from '@storybook/react';

import {doobooIconList, Icon, Typography} from '../../main';
import {StoryWrapper} from '../Common';

const meta = {
  title: 'Icon',
  component: (props) => (
    <View
      style={css`
        align-items: center;
      `}
    >
      <Icon {...props} />
      <Typography.Body2
        style={css`
          font-size: 12px;
          text-align: center;
        `}
      >
        {props?.name}
      </Typography.Body2>
    </View>
  ),
  argTypes: {
    name: {
      control: 'select',
      options: doobooIconList,
    },
  },
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
} satisfies Meta<ComponentProps<typeof Icon>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: 'MagnifyingGlass',
  },
};
