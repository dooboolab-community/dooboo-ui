import {useEffect, useRef, useState} from 'react';
import type {
  FlatListProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {FlatList, View} from 'react-native';
import {css} from '@emotion/native';
import type {Locale} from 'date-fns';
import {addMonths, subMonths} from 'date-fns';

import type {DateItemStyles} from './CalendarItem/DateItem';
import type {DateObject} from './CalendarItem';
import CalendarItem from './CalendarItem';
import MonthHeader from './MonthHeader';
import {getDatesInMonths as getDatesInMonths} from './utils';
import WeekdayItem from './WeekdayItem';

type CalendarCarouselProps = {
  initialSelectedDate?: Date;
  locale?: Locale;
  headerIconLeft?: JSX.Element;
  headerIconRIght?: JSX.Element;
  width?: number;
  date?: Date;
  showPrevDates?: boolean;
  showNextDates?: boolean;
  events?: Date[];
  onSelectDate?: (date: Date) => void;
  style?: Omit<ViewStyle, 'width'>;
  styles?: {
    container?: ViewStyle;
    date?: DateItemStyles;
    header?: {
      container?: StyleProp<ViewStyle>;
      text?: StyleProp<TextStyle>;
      startIcon?: ViewStyle;
      endIcon?: ViewStyle;
    };
    weekday?: {
      container?: StyleProp<ViewStyle>;
      text?: StyleProp<TextStyle>;
      weekendContainer?: StyleProp<ViewStyle>;
      weekendText?: StyleProp<TextStyle>;
    };
  };
  renderHeader?: (date: Date) => JSX.Element;
  renderWeekday?: (date: Date) => JSX.Element;
  renderDate?: (props: {
    date: Date;
    selected?: boolean;
    isPrev?: boolean;
    isNext?: boolean;
    isWeekend?: boolean;
  }) => JSX.Element;
};

function CalendarCarousel({
  locale,
  style,
  width = 300,
  date,
  events,
  showNextDates,
  showPrevDates,
  styles,
  initialSelectedDate,
  headerIconLeft,
  headerIconRIght,
  onSelectDate,
  renderHeader,
  renderWeekday,
  renderDate,
}: CalendarCarouselProps): JSX.Element {
  const [index, setIndex] = useState(1);
  const [selectedDateObject, setSelectedDateObject] = useState<
    DateObject | undefined
  >(undefined);

  const [currentDate, setCurrentDate] = useState(date ? date : new Date());
  const flatListRef = useRef<FlatList<any>>(null);
  const dates = getDatesInMonths({
    year: currentDate.getFullYear(),
    month: currentDate.getMonth(),
  });

  useEffect(() => {
    flatListRef.current?.scrollToIndex({index: 1, animated: false});

    if (initialSelectedDate) {
      setSelectedDateObject({date: initialSelectedDate});
    }
  }, [initialSelectedDate]);

  const onViewableItemsChanged: FlatListProps<any>['onViewableItemsChanged'] =
    ({viewableItems}) => {
      switch (viewableItems[0].index) {
        case 0:
          setIndex(0);
          break;
        case 2:
          setIndex(2);
          break;
      }
    };

  // https://github.com/facebook/react-native/issues/30171#issuecomment-820833606
  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        itemVisiblePercentThreshold: 50,
      },
      onViewableItemsChanged,
    },
  ]);

  return (
    <View
      style={[
        css`
          width: ${width + 'px'};
        `,
        style,
      ]}
    >
      {renderHeader ? renderHeader(currentDate) : null}
      {!renderHeader ? (
        <MonthHeader
          date={currentDate}
          iconLeft={headerIconLeft}
          iconRight={headerIconRIght}
          onChange={(monthDate: Date) => {
            setCurrentDate(monthDate);
            flatListRef.current?.scrollToIndex({index: 1, animated: false});
          }}
          styles={styles?.header}
        />
      ) : null}

      {renderWeekday ? renderWeekday(currentDate) : null}
      {!renderWeekday ? (
        <WeekdayItem locale={locale} styles={styles?.weekday} width={width} />
      ) : null}
      <FlatList
        data={dates}
        horizontal
        keyExtractor={(_, i) => `calendar-${i}`}
        onScrollToIndexFailed={() => {
          const wait = new Promise((resolve) => setTimeout(resolve, 500));
          wait.then(() => {
            flatListRef.current?.scrollToIndex({index: 1, animated: false});
          });
        }}
        pagingEnabled
        ref={flatListRef}
        renderItem={({item}) => (
          <CalendarItem
            events={events}
            onDatePress={(selectedDateObj) => {
              onSelectDate?.(selectedDateObj.date);
              setSelectedDateObject(selectedDateObj);

              if (selectedDateObj.isNextMonth || selectedDateObj.isPrevMonth) {
                setCurrentDate(selectedDateObj.date);
                flatListRef.current?.scrollToIndex({index: 1, animated: false});
              }
            }}
            dateObjects={item}
            width={width}
            selectedDateObject={selectedDateObject}
            showNextDates={showNextDates}
            showPrevDates={showPrevDates}
            renderDate={renderDate}
            styles={styles?.date}
          />
        )}
        scrollEventThrottle={16}
        onScrollEndDrag={() => {
          if (index !== 1) {
            setCurrentDate(
              index === 0
                ? subMonths(currentDate, 1)
                : addMonths(currentDate, 1),
            );
            flatListRef.current?.scrollToIndex({index: 1, animated: false});
          }
        }}
        // https://stackoverflow.com/a/60320726/8841562
        showsHorizontalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
    </View>
  );
}

export default CalendarCarousel;
