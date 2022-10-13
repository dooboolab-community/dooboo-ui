import type {IconButtonProps} from '../../main';
import {IconButton} from '../../main';

import React from 'react';
import type {ReactElement} from 'react';
import type {RenderAPI} from '@testing-library/react-native';
import {View} from 'react-native';
import {createComponent} from '../../test/testUtils';
import {render} from '@testing-library/react-native';

let testingLib: RenderAPI;

jest.mock('react-native-web-hooks', () => ({
  useHover: () => true,
}));

const Component = (props?: IconButtonProps): ReactElement =>
  createComponent(<IconButton {...props} />);

describe('[IconButton]', () => {
  it('should render without crashing', () => {
    testingLib = render(Component());

    const json = testingLib.toJSON();

    expect(json).toBeTruthy();
  });

  it('should render `outlined` button', () => {
    testingLib = render(
      Component({
        icon: <View />,
        outlined: true,
      }),
    );

    const json = testingLib.toJSON();

    expect(json).toBeTruthy();
  });

  describe('loading', () => {
    it('should render `loading` button', () => {
      testingLib = render(
        Component({
          icon: <View />,
          loading: true,
        }),
      );

      const json = testingLib.toJSON();

      expect(json).toBeTruthy();
    });

    it('should render `disabled` button', () => {
      testingLib = render(
        Component({
          icon: <View />,
          loading: true,
          disabled: true,
        }),
      );

      const json = testingLib.toJSON();

      expect(json).toBeTruthy();
    });
  });

  describe('size', () => {
    it('should render size==="large"', () => {
      testingLib = render(
        Component({
          icon: <View />,
          size: 'large',
        }),
      );

      const json = testingLib.toJSON();

      expect(json).toBeTruthy();
    });

    it('should render size==="small"', () => {
      testingLib = render(
        Component({
          icon: <View />,
          size: 'small',
        }),
      );

      const json = testingLib.toJSON();

      expect(json).toBeTruthy();
    });
  });

  describe('type', () => {
    it('should render type==="info"', () => {
      testingLib = render(
        Component({
          icon: <View />,
          type: 'info',
        }),
      );

      const json = testingLib.toJSON();

      expect(json).toBeTruthy();
    });

    it('should render type==="primary"', () => {
      testingLib = render(
        Component({
          icon: <View />,
          type: 'primary',
        }),
      );

      const json = testingLib.toJSON();

      expect(json).toBeTruthy();
    });

    it('should render type==="secondary"', () => {
      testingLib = render(
        Component({
          icon: <View />,
          type: 'secondary',
        }),
      );

      const json = testingLib.toJSON();

      expect(json).toBeTruthy();
    });

    it('should render type==="danger"', () => {
      testingLib = render(
        Component({
          icon: <View />,
          type: 'danger',
        }),
      );

      const json = testingLib.toJSON();

      expect(json).toBeTruthy();
    });

    it('should render type==="warning"', () => {
      testingLib = render(
        Component({
          icon: <View />,
          type: 'warning',
        }),
      );

      const json = testingLib.toJSON();

      expect(json).toBeTruthy();
    });
  });

  it('should render `disabled` button', () => {
    testingLib = render(
      Component({
        icon: <View />,
        disabled: true,
      }),
    );

    const json = testingLib.toJSON();

    expect(json).toBeTruthy();
  });
});
