import 'react-native';

import * as React from 'react';

import {RenderAPI, fireEvent, render} from '@testing-library/react-native';
import {createComponent, createTestProps} from '../../test/testUtils';

import {ButtonGroup} from '../../main';

let props: any;
let component: React.ReactElement;
let testingLib: RenderAPI;

describe('[ButtonGroup] render', () => {
  beforeEach(() => {
    props = createTestProps({});
    component = createComponent(<ButtonGroup {...props} />);
  });

  it('renders without crashing', () => {
    testingLib = render(component);

    const json = testingLib.toJSON();

    expect(json).toMatchSnapshot();
  });

  describe('interactions', () => {
    beforeEach(() => {
      testingLib = render(component);
    });

    it('should simulate onPress', () => {
      const btn1 = testingLib.queryByTestId('CHILD_1');

      if (btn1) fireEvent.press(btn1);
    });
  });
});
