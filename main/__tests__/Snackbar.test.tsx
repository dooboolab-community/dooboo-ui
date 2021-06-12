import React, {useCallback, useRef} from 'react';
import {RenderAPI, fireEvent, render} from '@testing-library/react-native';

import {Button} from '../Button';
import {Snackbar} from '../../main';
import {SnackbarRef} from '../Snackbar';
import {SnackbarType} from '../Styled/StyledComponents';
import {View} from 'react-native';
import {createComponent} from '../../test/testUtils';

let component: React.ReactElement;
let testingLib: RenderAPI;

function SnackbarDefault(): React.ReactElement {
  const snackbar = useRef<SnackbarRef>(null);

  const onPress = useCallback(
    (type?: SnackbarType): void => {
      if (snackbar)
        if (type === 'danger')
          return snackbar.current?.show({
            text: 'Lorem ipsum dolor sit amet',
            type,
            actionText: 'Action',
          });

      if (type === 'info')
        return snackbar.current?.show({
          text: 'Lorem ipsum dolor sit amet',
          type,
          actionText: 'Action',
        });

      snackbar.current?.show({
        text: 'Lorem ipsum dolor sit amet',
        type,
      });
    },
    [snackbar],
  );

  return (
    <View
      style={{
        flexDirection: 'column',

        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Snackbar testID="snackbar" ref={snackbar} />
      <Snackbar testID="snackbar-action" ref={snackbar} />
      <Button
        testID="button"
        type={'primary'}
        onPress={() => onPress('default')}
        text={'Open Snackbar - default'}
        style={{margin: 20}}
      />
      <Button
        testID="button-danger"
        type={'primary'}
        onPress={() => onPress('danger')}
        text={'Open Snackbar - default'}
        style={{margin: 20}}
      />
      <Button
        testID="button-info"
        type={'primary'}
        onPress={() => onPress('info')}
        text={'Open Snackbar - default'}
        style={{margin: 20}}
      />
    </View>
  );
}

describe('Snackbar', () => {
  it('should render test component', () => {
    component = createComponent(<SnackbarDefault />);

    testingLib = render(component);

    const json = testingLib.toJSON();

    expect(json).toMatchSnapshot();
  });

  it('should open snackbar', async () => {
    // const timingSpy = jest.spyOn(Animated, 'timing');

    component = createComponent(<SnackbarDefault />);

    testingLib = render(component);

    const btn = testingLib.getByTestId('button');

    fireEvent.press(btn);
    testingLib.rerender(component);

    // const snackbar = await waitFor(() => testingLib.getByTestId('snackbar'));

    // expect(snackbar).toBeTruthy();

    // expect(
    //   timingSpy.mock.calls.find(
    //     (predicate) =>
    //       predicate[1].toValue === 0 && predicate[1].duration === 50,
    //   ),
    // ).toBeTruthy();
  });

  it('should open snackbar `danger` with action', async () => {
    component = createComponent(<SnackbarDefault />);

    testingLib = render(component);

    const btn = testingLib.getByTestId('button-danger');

    fireEvent.press(btn);
  });

  it('should open snackbar `info` with action', async () => {
    component = createComponent(<SnackbarDefault />);

    testingLib = render(component);

    const btn = testingLib.getByTestId('button-info');

    fireEvent.press(btn);
  });
});
