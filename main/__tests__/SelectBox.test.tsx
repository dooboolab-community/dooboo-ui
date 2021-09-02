import React, {ReactElement} from 'react';
import {RenderAPI, fireEvent, render} from '@testing-library/react-native';
import {createComponent, createTestProps} from '../../test/testUtils';

import {SelectBox} from '../../main';
import type {Props as SelectBoxProps} from '../SelectBox';

jest.mock('react-native-gesture-handler', () => {
  const View = require('react-native/Libraries/Components/View/View');

  return {
    TouchableOpacity: View,
  };
});

let testingLib: RenderAPI;

const mockData = ['item1', 'item2', 'item3', 'item4'];

const Component = (props?: Omit<SelectBoxProps, 'data'>): ReactElement => {
  const selectBoxProps = createTestProps({data: mockData, ...props});

  return createComponent(<SelectBox {...selectBoxProps} />);
};

describe('[SelectBox]', () => {
  it('should render without crashing', () => {
    testingLib = render(Component());

    const json = testingLib.toJSON();

    expect(json).toMatchSnapshot();
  });

  it('should not operate rotate animation when shouldRotate props is false', () => {
    testingLib = render(Component({shouldRotate: false}));

    const json = testingLib.toJSON();

    expect(json).toMatchSnapshot();
  });

  describe('[SelectBox event test]', () => {
    const handlePress = jest.fn();

    beforeEach(() => {
      testingLib = render(Component({onPress: handlePress}));
    });

    it('should trigger item collapsing', () => {
      const title = testingLib.getByText('item1');

      fireEvent.press(title);
    });

    it('should change test value when clicking the collapsed item', () => {
      const title = testingLib.getByText('item1');

      fireEvent.press(title);

      const item = testingLib.getByText('item2');

      fireEvent.press(item);

      expect(handlePress).toBeCalled();
    });
  });
});
