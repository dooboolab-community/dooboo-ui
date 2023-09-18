import type {ComponentProps} from 'react';
import React from 'react';
import {light} from '@dooboo-ui/theme';
import type {RenderAPI} from '@testing-library/react-native';
import {fireEvent, render} from '@testing-library/react-native';

import {createComponent} from '../../../../test/testUtils';
import {ButtonGroup} from '../../..';

let testingLib: RenderAPI;

const Component = (props?: ComponentProps<typeof ButtonGroup>): JSX.Element =>
  createComponent(
    <ButtonGroup
      initialValue="Option1"
      options={['Option1', 'Option2', 'Option3']}
      {...props}
    />,
  );

describe('[ButtonGroup]', () => {
  it('should render without crashing', () => {
    testingLib = render(Component());

    const json = testingLib.toJSON();
    expect(json).toBeTruthy();
  });

  describe('[ButtonGroup] Interaction', () => {
    it('should simulate onPress', () => {
      const mockPress = jest.fn();

      testingLib = render(
        Component({
          options: ['Button 1', 'Button 2'],
          initialValue: 'Button 1',
          onValueChange: mockPress,
        }),
      );

      const button1 = testingLib.getByText('Button 1');
      const button2 = testingLib.getByText('Button 2');

      fireEvent.press(button1);
      fireEvent.press(button2);

      expect(mockPress).toHaveBeenCalledTimes(2);
      expect(mockPress.mock.calls[0][0]).toBe('Button 1');
      expect(mockPress.mock.calls[1][0]).toBe('Button 2');
    });
  });

  describe('[ButtonGroup] colors', () => {
    it('should apply correct colors', () => {
      const {getByTestId} = render(
        Component({
          testID: 'button-group-test',
          options: ['Button 1', 'Button 2'],
          initialValue: 'Button 1',
          color: 'secondary',
        }),
      );

      const button1 = getByTestId('button-group-test');

      expect(button1).toHaveStyle({
        borderTopColor: light.button.secondary.bg,
        borderRightColor: light.button.secondary.bg,
        borderBottomColor: light.button.secondary.bg,
        borderLeftColor: light.button.secondary.bg,
      });
    });
  });

  describe('[ButtonGroup] text color', () => {
    it('should apply correct sizes', () => {
      const {getByText} = render(
        Component({
          options: ['Button 1', 'Button 2'],
          color: 'secondary',
          initialValue: 'Button 1',
        }),
      );

      const text = getByText('Button 1');

      expect(text).toHaveStyle({
        color: light.button.secondary.text,
      });
    });
  });
});
