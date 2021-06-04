import 'react-native';

import * as React from 'react';

import {RenderAPI, fireEvent, render} from '@testing-library/react-native';
import {createComponent, createTestProps} from '../../test/testUtils';

import {ButtonGroup} from '../../main';

let props: any;
let component: React.ReactElement;
let testingLib: RenderAPI;

describe('[ButtonGroup] render', () => {
  const pressFn = jest.fn();

  it('renders without crashing', () => {
    props = createTestProps();

    component = createComponent(<ButtonGroup {...props} />);
    testingLib = render(component);

    const json = testingLib.toJSON();

    expect(json).toMatchSnapshot();
  });

  it('should simulate onPress', () => {
    props = createTestProps({
      data: [1, 2, 3],
    });

    component = createComponent(<ButtonGroup {...props} />);

    testingLib = render(component);

    const btn1 = testingLib.getByTestId('CHILD_1');

    fireEvent.press(btn1);

    expect(pressFn).toHaveBeenCalledTimes(0);
  });

  describe('interactions', () => {
    it('should simulate onPress', () => {
      props = createTestProps({
        data: [1, 2, 3],
        onPress: pressFn,
      });

      component = createComponent(<ButtonGroup {...props} />);

      testingLib = render(component);

      const btn1 = testingLib.getByTestId('CHILD_1');

      fireEvent.press(btn1);

      expect(pressFn).toHaveBeenCalled();
    });
  });
});
