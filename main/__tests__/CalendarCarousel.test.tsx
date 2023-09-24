import type {ComponentProps} from 'react';
import React from 'react';
import {Text} from 'react-native';
import type {RenderAPI} from '@testing-library/react-native';
import {fireEvent, render} from '@testing-library/react-native';

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
