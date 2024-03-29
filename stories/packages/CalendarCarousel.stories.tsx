import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import CalendarCarousel from '../../packages/CalendarCarousel';
import {StoryWrapper} from '../Common';

const meta = {
  title: 'Packages/CalendarCarousel',
  component: (props) => (
    <CalendarCarousel
      initialSelectedDate={new Date(2024, 11, 4)}
      showNextDates={true}
      showPrevDates={true}
      width={350}
      {...props}
      // headerIconLeft={
      //   <Icon color={theme.text.basic} name="ArrowCircleLeft" size={18} />
      // }
      // headerIconRight={
      //   <Icon color={theme.text.basic} name="ArrowCircleRight" size={18} />
      // }
      // locale={ko}
      // style={css`
      //   margin-top: 80px;
      // `}
    />
  ),
  argTypes: {
    initialSelectedDate: {
      control: 'date',
    },
    showNextDates: {
      control: 'boolean',
    },
    showPrevDates: {
      control: 'boolean',
    },
    width: {
      control: 'number',
    },
  },
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
} satisfies Meta<ComponentProps<typeof CalendarCarousel>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
