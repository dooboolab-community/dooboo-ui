import {
  addDays,
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  getDay,
  isSaturday,
  isSunday,
  startOfMonth,
  subDays,
  subMonths,
} from 'date-fns';

import type {DateObject} from './CalendarItem';

// Get dates in single month
function getDatesWithDate(date: Date = new Date()): DateObject[] {
  const startOfMonthDate = startOfMonth(date);
  const endOfMonthDate = endOfMonth(date);

  const firstWeekday = getDay(startOfMonthDate);
  const lastWeekday = getDay(endOfMonthDate);

  let prevDates: DateObject[] = [];
  if (!isSunday(startOfMonthDate)) {
    for (let idx = 0; idx < firstWeekday; idx++) {
      prevDates.unshift({
        date: subDays(startOfMonthDate, idx + 1),
        isPrevMonth: true,
      });
    }
  }

  let nextDates: DateObject[] = [];
  if (!isSaturday(endOfMonthDate)) {
    for (let idx = 1; idx <= 6 - lastWeekday; idx++) {
      nextDates.push({
        date: addDays(endOfMonthDate, idx),
        isNextMonth: true,
      });
    }
  }

  const dates = eachDayOfInterval({
    start: startOfMonthDate,
    end: endOfMonthDate,
  }).map((el) => ({date: el}));

  return [...prevDates, ...dates, ...nextDates];
}

// Get dates in 3 months (prev, current, next)
export function getDatesInMonths({
  year = new Date().getFullYear(),
  month = new Date().getMonth(),
}: {
  year?: number;
  month?: number;
}): [DateObject[], DateObject[], DateObject[]] {
  const currentDate = new Date(year, month, 1);

  const prevMonthDates = getDatesWithDate(subMonths(currentDate, 1));
  const currentMonthDates = getDatesWithDate(currentDate);
  const nextMonthDates = getDatesWithDate(addMonths(currentDate, 1));

  return [prevMonthDates, currentMonthDates, nextMonthDates];
}

export function getPreviousMonth(date: Date): Date {
  const month = date.getMonth();
  const year = date.getFullYear();

  if (month === 1) {
    return new Date(year - 1, 12, 10);
  } else {
    return new Date(year, month - 1, 10);
  }
}

export function getNextMonth(date: Date): Date {
  const month = date.getMonth();
  const year = date.getFullYear();

  if (month === 12) {
    return new Date(year + 1, 1, 10);
  } else {
    return new Date(year, month + 1, 10);
  }
}
