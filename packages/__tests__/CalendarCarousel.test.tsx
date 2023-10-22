import type {ComponentProps} from 'react';
import React, {Component} from 'react';
import {Text} from 'react-native';
import type {RenderAPI} from '@testing-library/react-native';
import {fireEvent, render, screen} from '@testing-library/react-native';
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

  it('presses left-side of header', () => {
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
});

describe('[Calender-CalendarItem] render', () => {
  it('should hide prev date item', () => {
    props = createTestProps({
      showPrevDates: false,
    });

    component = createComponent(<CalendarCarousel {...props} />);
    testingLib = render(component);

    const prevDates = testingLib.getAllByTestId('prev-dateItem');

    expect(prevDates.length).toBe(0);
  });

  it('should hide next date item', () => {
    props = createTestProps({
      showNextPrevDates: false,
    });

    component = createComponent(<CalendarCarousel {...props} />);
    testingLib = render(component);

    const nextDates = testingLib.getAllByTestId('next-dateItem');

    expect(nextDates.length).toBe(0);
  });
});
