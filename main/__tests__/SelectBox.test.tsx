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

interface ObectType {
  value: string;
  [key: string]: any;
}

type MockDateType = string[] | ObectType[];

let testingLib: RenderAPI;

const stringData: MockDateType = ['item1', 'item2', 'item3', 'item4'];

const objectData: MockDateType = [
  {index: 1, value: 'item1'},
  {index: 2, value: 'item2'},
  {index: 3, value: 'item3'},
  {index: 4, value: 'item4'},
];

const Component = (
  data: MockDateType,
  props?: Partial<SelectBoxProps<MockDateType>>,
): ReactElement => {
  const selectBoxProps = createTestProps({data, ...props});

  return createComponent(<SelectBox {...selectBoxProps} />);
};

describe('[SelectBox]', () => {
  it('should render with string data', () => {
    testingLib = render(Component(stringData));

    const json = testingLib.toJSON();

    expect(json).toMatchSnapshot();
  });

  it('should render with obeject data', () => {
    testingLib = render(Component(objectData));

    const json = testingLib.toJSON();

    expect(json).toMatchSnapshot();
  });

  it('should not operate rotate animation when isRightElemAnimated props is false', () => {
    testingLib = render(Component(stringData, {isRightElemAnimated: false}));

    const json = testingLib.toJSON();

    expect(json).toMatchSnapshot();
  });

  it('should not render rightElement when rightElement props is null', () => {
    testingLib = render(Component(stringData, {rightElement: null}));

    const json = testingLib.toJSON();

    expect(json).toMatchSnapshot();
  });

  it('should change title style with styles props', () => {
    testingLib = render(
      Component(stringData, {
        styles: {titleContainer: {backgroundColor: 'red'}},
      }),
    );

    const json = testingLib.toJSON();

    expect(json).toMatchSnapshot();
  });

  describe('[SelectBox event test]', () => {
    const handlePress = jest.fn();

    afterEach(() => handlePress.mockClear());

    it('should trigger item open', () => {
      testingLib = render(Component(stringData));

      const title = testingLib.getByText('item1');

      fireEvent.press(title);
    });

    it('should trigger onPressed when clicking a title', () => {
      testingLib = render(Component(stringData, {onPress: handlePress}));

      const title = testingLib.getByText('item1');

      fireEvent.press(title);

      expect(handlePress).toBeCalled();
    });

    it('should not trigger any interacts when disalbed props is true', () => {
      testingLib = render(Component(stringData, {disabled: true}));

      const title = testingLib.getByText('item1');

      fireEvent.press(title);

      expect(handlePress).not.toBeCalled();
    });

    it('should change a value when clicking the opened item with string data', () => {
      testingLib = render(Component(stringData, {onSelect: handlePress}));

      const title = testingLib.getByText('item1');

      fireEvent.press(title);

      const item = testingLib.getByText('item2');

      fireEvent.press(item);

      expect(handlePress).toBeCalled();
    });

    it('should change a value when clicking the opened item with object data', () => {
      testingLib = render(Component(objectData, {onSelect: handlePress}));

      const title = testingLib.getByText('item1');

      fireEvent.press(title);

      const item = testingLib.getByText('item2');

      fireEvent.press(item);

      expect(handlePress).toBeCalled();
    });
  });
});
