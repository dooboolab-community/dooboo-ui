import '@testing-library/jest-native/extend-expect';

import type {ComponentProps} from 'react';
import React, {Component} from 'react';
import type {TextStyle} from 'react-native';
import {Text} from 'react-native';
import {css} from '@emotion/react';
import type {RenderAPI} from '@testing-library/react-native';
import {fireEvent, render, screen, within} from '@testing-library/react-native';
import {ko} from 'date-fns/locale';

import {createComponent, createTestProps} from '../../test/testUtils';
import CalendarCarousel from '../CalendarCarousel';

let props: ComponentProps<typeof CalendarCarousel>;
let component: JSX.Element;
let testingLib: RenderAPI;

describe('[Calendar] render test', () => {
  it('renders without crashing', () => {
    props = createTestProps({});
    component = createComponent(<CalendarCarousel {...props} />);
    testingLib = render(component);

    const json = testingLib.toJSON();
    expect(json).toBeTruthy();
  });
});

describe('[Calendar-WeekdayItem] render', () => {
  it('change with ko locale', () => {
    props = createTestProps({
      locale: ko,
    });
    component = createComponent(<CalendarCarousel {...props} />);

    testingLib = render(component);

    const json = testingLib.toJSON();
    expect(json).toBeTruthy();
  });
});

describe('[Calendar-MonthHeader] render', () => {
  it('renders without crashing', () => {
    const today = new Date();

    props = createTestProps({});
    component = createComponent(<CalendarCarousel {...props} />);
    testingLib = render(component);

    const monthHeader = testingLib.getByTestId('month-header-title');
    const renderedText = within(monthHeader).getByText(
      `${today.getFullYear()}년 ${today.getMonth() + 1}월`,
    );

    expect(renderedText).toBeTruthy();
  });

  it('should render the correct previous month when the previous button is clicked', () => {
    const today = new Date();

    props = createTestProps({});
    component = createComponent(<CalendarCarousel {...props} />);
    testingLib = render(component);

    const monthHeaderPrevBtn = testingLib.getByTestId('month-header-prev-btn');
    fireEvent.press(monthHeaderPrevBtn);

    const monthHeaderLabel = testingLib.getByTestId('month-header-title');
    const renderedText = within(monthHeaderLabel).getByText(
      `${today.getFullYear()}년 ${
        today.getMonth() === 0 ? 12 : today.getMonth()
      }월`,
    );

    expect(renderedText).toBeTruthy();
  });

  it('should render the correct next month when the next button is clicked', () => {
    const today = new Date();

    props = createTestProps({});
    component = createComponent(<CalendarCarousel {...props} />);
    testingLib = render(component);

    const monthHeaderPrevBtn = testingLib.getByTestId('month-header-next-btn');
    fireEvent.press(monthHeaderPrevBtn);

    const monthHeaderLabel = testingLib.getByTestId('month-header-title');
    const renderedText = within(monthHeaderLabel).getByText(
      `${today.getFullYear()}년 ${
        today.getMonth() + 2 === 0 ? 12 : today.getMonth() + 2
      }월`,
    );

    expect(renderedText).toBeTruthy();
  });

  it('render MonthHeader with another component', () => {
    props = createTestProps({
      renderHeader: (value: Date) => (
        <Text testID="test-render-header">{value.toString()}</Text>
      ),
    });

    component = createComponent(<CalendarCarousel {...props} />);

    testingLib = render(component);

    const changeHeader = testingLib.getByTestId('test-render-header');
    expect(changeHeader).toBeTruthy();
  });

  it('should verify that the callback function is correctly invoked when transitioning between months', () => {
    const clickMock = jest.fn();

    props = createTestProps({
      headerIconLeft: <Text>left</Text>,
      onChangeMonth: clickMock,
    });

    component = createComponent(<CalendarCarousel {...props} />);
    testingLib = render(component);

    const {getByText} = testingLib;
    const headerLeft = getByText('left');

    expect(headerLeft).toBeTruthy();

    fireEvent.press(headerLeft);
    expect(clickMock).toBeCalledTimes(1);
  });
});

describe('[Calendar-CalendarItem] render', () => {
  it('should hide prev date item', () => {
    props = createTestProps({
      showPrevDates: false,
    });

    component = createComponent(<CalendarCarousel {...props} />);
    testingLib = render(component);

    const prevDates = testingLib.queryAllByTestId('prev-dateItem');

    expect(prevDates.length).toBe(0);
  });

  it('should hide next date item', () => {
    props = createTestProps({
      showNextPrevDates: false,
    });

    component = createComponent(<CalendarCarousel {...props} />);
    testingLib = render(component);

    const nextDates = testingLib.queryAllByTestId('next-dateItem');

    expect(nextDates.length).toBe(0);
  });
});

describe('[Calendar-DateItem] render', () => {
  it('should verify that the callback function is correctly invoked when a date is selected', () => {
    const clickMock = jest.fn();

    props = createTestProps({
      onDatePress: clickMock,
    });

    component = createComponent(<CalendarCarousel {...props} />);

    testingLib = render(component);

    const {queryAllByTestId} = testingLib;
    const dateItem = queryAllByTestId('dateItem');

    fireEvent.press(dateItem[0]);
    expect(clickMock).toBeCalledTimes(1);
  });

  it('check selecting a DateItem from the previous month updates', () => {
    const today = new Date();
    props = createTestProps({
      showPrevDates: true,
    });
    component = createComponent(<CalendarCarousel {...props} />);

    testingLib = render(component);

    const {queryAllByTestId, getByTestId} = testingLib;
    const prevDateItems = queryAllByTestId('prev-dateItem');
    const monthHeaderLabel = getByTestId('month-header-title');

    fireEvent.press(prevDateItems[0]);

    const renderedText = within(monthHeaderLabel).getByText(
      `${today.getFullYear()}년 ${
        today.getMonth() === 0 ? 12 : today.getMonth()
      }월`,
    );

    expect(renderedText).toBeTruthy();
  });
});

describe('[Calendar-style] render', () => {
  it('check if the styles of the MonthHeader component have been updated', () => {
    props = createTestProps({
      styles: {
        header: {
          text: {fontSize: 27},
        },
      },
    });
    component = createComponent(<CalendarCarousel {...props} />);
    testingLib = render(component);

    const {getByTestId} = testingLib;
    const monthHeaderLabel = getByTestId('month-header-title');
    const expectedStyle: TextStyle = {
      fontSize: 27,
    };

    expect(monthHeaderLabel).toHaveStyle(expectedStyle);
  });

  it('check if the styles of the WeekDayItem component have been updated', () => {
    props = createTestProps({
      styles: {
        weekday: {
          container: {backgroundColor: 'red'},
        },
      },
    });

    component = createComponent(<CalendarCarousel {...props} />);
    testingLib = render(component);

    const {queryAllByTestId} = testingLib;
    const weekdayItem = queryAllByTestId('weekday')[0];
    const expectedStyles = {
      backgroundColor: 'red',
    };

    expect(weekdayItem).toHaveStyle(expectedStyles);
  });

  it('check if the styles of the DateItem component have been updated', () => {
    props = createTestProps({
      styles: {
        date: {
          container: {backgroundColor: 'red'},
        },
      },
    });

    component = createComponent(<CalendarCarousel {...props} />);
    testingLib = render(component);

    const {queryAllByTestId} = testingLib;
    const dateItem = queryAllByTestId('dateItem')[0];
    const expectedStyles = {
      backgroundColor: 'red',
    };

    expect(dateItem).toHaveStyle(expectedStyles);
  });
});
