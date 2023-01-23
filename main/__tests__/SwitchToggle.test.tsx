import {fireEvent, render} from '@testing-library/react-native';

import React from 'react';
import type {ReactElement} from 'react';
import {SwitchToggle} from '../components/SwitchToggle';
import {Text} from 'react-native';
import {createComponent} from '../../test/testUtils';
import renderer from 'react-test-renderer';

describe('[SwitchToggle]', () => {
  const handlePress = jest.fn();

  beforeEach(() => {
    handlePress.mockClear();
  });

  it('handles press event', () => {
    const {getByRole} = render(
      createComponent(<SwitchToggle isOn={false} onPress={handlePress} />),
    );

    fireEvent.press(getByRole('switch'));
    expect(handlePress).toBeCalled();
  });

  const getSwitchToggle = ({isOn}: {isOn: boolean}): ReactElement =>
    createComponent(
      <SwitchToggle
        isOn={isOn}
        onPress={handlePress}
        onElement={<Text>on</Text>}
        offElement={<Text>off</Text>}
        style={{padding: 6}}
        styles={{
          container: {paddingLeft: 6, paddingRight: 5},
          onElementContainer: {padding: 4},
          offElementContainer: {padding: 3},
          circle: {padding: 2},
          button: {padding: 1},
          circleColorOff: 'red',
          circleColorOn: 'blue',
          backgroundColorOn: 'green',
          backgroundColorOff: 'grey',
        }}
      />,
    );

  context('when switch toggle is on', () => {
    it('renders as on state', () => {
      const component = renderer.create(getSwitchToggle({isOn: true})).toJSON();

      expect(component).toBeTruthy();
    });
  });

  context('when switch toggle is off', () => {
    it('renders as off state', () => {
      const component = renderer
        .create(getSwitchToggle({isOn: false}))
        .toJSON();

      expect(component).toBeTruthy();
    });
  });
});
