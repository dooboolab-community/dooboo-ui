import {View} from 'react-native';
import styled, {css} from '@emotion/native';
import {isSameDay, isWeekend} from 'date-fns';

import type {DateItemStyles} from './DateItem';
import DateItem from './DateItem';

const Container = styled.View<{width: number}>`
  width: ${(props) => props.width + 'px'};
`;

export type DateObject = {
  date: Date;
  isPrevMonth?: boolean;
  isNextMonth?: boolean;
};

interface CalendarItemProp {
  dateObjects: DateObject[];
  events?: Date[];
  width: number;
  showPrevDates?: boolean;
  showNextDates?: boolean;
  selectedDateObject?: DateObject;
  styles?: DateItemStyles;
  onDatePress?: (date: DateObject) => void;
  renderDate?: (props: {
    date: Date;
    selected?: boolean;
    isPrev?: boolean;
    isNext?: boolean;
    isWeekend?: boolean;
  }) => JSX.Element;
}

export default function CalendarItem({
  dateObjects,
  selectedDateObject,
  width,
  events,
  showPrevDates = false,
  showNextDates = false,
  styles,
  onDatePress,
  renderDate,
}: CalendarItemProp): JSX.Element {
  const onPressDateItem = (date: DateObject): void => {
    onDatePress?.(date);
  };

  return (
    <Container width={width}>
      <View
        style={css`
          flex-direction: row;
          align-items: center;
          flex-wrap: wrap;
          gap: 4px;
        `}
      >
        {dateObjects.map((dateObj, i) => {
          const selected =
            selectedDateObject &&
            isSameDay(selectedDateObject.date, dateObj.date);

          if (renderDate) {
            return renderDate({
              date: dateObj.date,
              selected,
              isNext: dateObj.isNextMonth,
              isPrev: dateObj.isPrevMonth,
              isWeekend: isWeekend(dateObj.date),
            });
          }

          return (
            <DateItem
              calendarWidth={width}
              dateObject={dateObj}
              isEvent={events?.includes(dateObj.date)}
              key={`${dateObj}-${i}`}
              onPress={onPressDateItem}
              selected={selected}
              showNextDates={showNextDates}
              showPrevDates={showPrevDates}
              styles={styles}
            />
          );
        })}
      </View>
    </Container>
  );
}
