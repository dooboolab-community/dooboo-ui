import {Text} from 'react-native';
import {toHaveTextContent} from '@testing-library/jest-native';
import {fireEvent, render, RenderAPI} from '@testing-library/react-native';
import getGiven from 'givens';

import Selectable from '../Selectable/index';
import {ReactElement} from 'react';

type Mode = 'checkbox' | 'singleChoice';

interface Variables {
  mode: Mode;
  onPress: any;
}

const given = getGiven<Variables>();

interface Props {
  testID?: string;
  selected?: boolean;
  onPress?: any;
}

const TestElement = ({testID, selected, onPress}: Props): ReactElement => (
  <Text testID={testID} onPress={onPress}>
    {selected ? 'This is selected' : 'This is not selected'}
  </Text>
);

const renderSelectable = (): RenderAPI =>
  render(
    <Selectable mode={given.mode} onPress={given.onPress}>
      <TestElement testID="1" selected={false} />
      <TestElement testID="2" selected={true} />
    </Selectable>,
  );

describe('Selectable', () => {
  const onPress = jest.fn();

  beforeEach(() => {
    onPress.mockClear();
  });

  context('when "checkbox" is provided for mode', () => {
    given('mode', () => 'checkbox' as Mode);

    it('makes each child selectable', () => {
      const {getByTestId} = renderSelectable();

      expect(getByTestId('1')).toHaveTextContent('This is not selected');
      expect(getByTestId('2')).toHaveTextContent('This is selected');

      fireEvent.press(getByTestId('2'));

      expect(getByTestId('1')).toHaveTextContent('This is not selected');
      expect(getByTestId('2')).toHaveTextContent('This is not selected');

      fireEvent.press(getByTestId('1'));

      expect(getByTestId('1')).toHaveTextContent('This is selected');
      expect(getByTestId('2')).toHaveTextContent('This is not selected');
    });

    context('when onPress is provided', () => {
      given('onPress', () => onPress);

      it('calls press handler with selected array', () => {
        const {getByTestId} = renderSelectable();

        fireEvent.press(getByTestId('1'));

        expect(onPress).toBeCalledWith([true, true]);
      });
    });
  });

  context('when "singleChoice" is provided for mode', () => {
    given('mode', () => 'singleChoice' as Mode);

    it('allows one child to be selected', () => {
      const {getByTestId} = renderSelectable();

      expect(getByTestId('1')).toHaveTextContent('This is not selected');
      expect(getByTestId('2')).toHaveTextContent('This is selected');

      fireEvent.press(getByTestId('1'));

      expect(getByTestId('1')).toHaveTextContent('This is selected');
      expect(getByTestId('2')).toHaveTextContent('This is not selected');
    });

    context('when onPress is provided', () => {
      given('onPress', () => onPress);

      it('calls press handler with selected index', () => {
        const {getByTestId} = renderSelectable();

        fireEvent.press(getByTestId('1'));

        expect(onPress).toBeCalledWith(0);
      });
    });
  });
});
