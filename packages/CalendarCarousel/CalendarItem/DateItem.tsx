import type {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from '@dooboo-ui/theme';
import {css} from '@emotion/native';

import type {DateObject} from '.';

export type DateItemStyles = {
  container?: StyleProp<ViewStyle>;
  text?: TextStyle;
  selectedContainer?: ViewStyle;
  selectedText?: TextStyle;
  event?: ViewStyle;
  prevContainer?: ViewStyle;
  prevText?: TextStyle;
  nextContainer?: ViewStyle;
  nextText?: TextStyle;
  weekendContainer?: ViewStyle;
  weekendText?: TextStyle;
};

export type DateItemProp = {
  isEvent?: boolean;
  dateObject: DateObject;
  calendarWidth: number;
  showPrevDates: boolean;
  showNextDates: boolean;
  onPress?: (date: DateObject) => void;
  selected?: boolean;
  styles?: DateItemStyles;
};

export default function DateItem({
  isEvent,
  dateObject,
  calendarWidth,
  onPress,
  selected = false,
  styles,
  showNextDates = true,
  showPrevDates = true,
}: DateItemProp): JSX.Element {
  const {theme} = useTheme();

  const {isNextMonth, isPrevMonth} = dateObject;
  const dateWidth = calendarWidth - 24;
  const dayHeight = dateWidth / 7;
  const dayWidth = Math.floor(dateWidth / 7);

  if ((!!isNextMonth && !showNextDates) || (!!isPrevMonth && !showPrevDates)) {
    return (
      <View
        style={css`
          width: ${dayWidth + 'px'};
          height: ${dayHeight + 'px'};
        `}
      />
    );
  }

  return (
    <TouchableOpacity
      disabled={!onPress}
      onPress={() => {
        onPress?.(dateObject);
      }}
      style={[
        css`
          width: ${dayWidth + 'px'};
          height: ${dayHeight + 'px'};

          justify-content: center;
          align-items: center;
        `,
        styles?.container,
        !!isNextMonth && {
          ...styles?.nextContainer,
        },
        !!isPrevMonth && {
          ...styles?.prevContainer,
        },
        selected && {
          ...css`
            background-color: ${theme.role.accent};
            border-radius: 99px;
          `,
          ...styles?.selectedContainer,
        },
        isEvent && styles?.event,
      ]}
      testID={
        isPrevMonth
          ? 'prev-dateItem'
          : isNextMonth
          ? 'next-dateItem'
          : 'dateItem'
      }
    >
      <Text
        numberOfLines={1}
        style={[
          styles?.text,
          css`
            font-size: 18px;
            color: ${theme.text.basic};
          `,
          !!isNextMonth && {
            ...css`
              color: ${theme.text.disabled};
            `,
            ...styles?.nextText,
          },
          !!isPrevMonth && {
            ...css`
              color: ${theme.text.disabled};
            `,
            ...styles?.prevText,
          },
          selected && {
            ...css`
              color: #1b1b1b;
            `,
            ...styles?.selectedText,
          },
        ]}
      >
        {dateObject.date.getDate()}
      </Text>
    </TouchableOpacity>
  );
}
