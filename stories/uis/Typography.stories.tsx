import type {ComponentProps} from 'react';
import {View} from 'react-native';
import {css} from '@emotion/native';
import type {Meta, StoryObj} from '@storybook/react';

import {Typography} from '../../main';
import {StoryWrapper} from '../Common';

const meta = {
  title: 'Components/Typography',
  component: (props) => (
    <View
      style={css`
        padding: 24px;

        gap: 8px;
      `}
    >
      <Typography.Title {...props}>Title</Typography.Title>
      <Typography.Heading1 {...props}>Heading1</Typography.Heading1>
      <Typography.Heading2 {...props}>Heading2</Typography.Heading2>
      <Typography.Heading3 {...props}>Heading3</Typography.Heading3>
      <Typography.Heading4 {...props}>Heading4</Typography.Heading4>
      <Typography.Heading5 {...props}>Heading5</Typography.Heading5>
      <Typography.Body1 {...props}>Body1</Typography.Body1>
      <Typography.Body2 {...props}>Body2</Typography.Body2>
      <Typography.Body3 {...props}>Body3</Typography.Body3>
      <Typography.Body4 {...props}>Body4</Typography.Body4>
    </View>
  ),
  argTypes: {},
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
} satisfies Meta<ComponentProps<typeof Typography.Body1>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
