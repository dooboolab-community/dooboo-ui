import type {Props} from '../../main';
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

const Component = (props?: Props): ReactElement =>
  createComponent(<IconButton {...props} />);

describe('[AddIcon]', () => {
  it('should render without crashing', () => {
    testingLib = render(Component());

    const json = testingLib.toJSON();

    expect(json).toBeTruthy();
  });

  it('should render `outlined` button', () => {
    testingLib = render(
      Component({
        type: 'outlined',
      }),
    );

    const json = testingLib.toJSON();

    expect(json).toBeTruthy();
  });

  describe('loading', () => {
    it('should render `loading` button', () => {
      testingLib = render(
        Component({
          loading: true,
        }),
      );

      const json = testingLib.toJSON();

      expect(json).toBeTruthy();
    });

    it('should render `disabled` button', () => {
      testingLib = render(
        Component({
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
          size: 'large',
        }),
      );

      const json = testingLib.toJSON();

      expect(json).toBeTruthy();
    });

    it('should render size==="small"', () => {
      testingLib = render(
        Component({
          size: 'small',
        }),
      );

      const json = testingLib.toJSON();

      expect(json).toBeTruthy();
    });
  });

  describe('type', () => {
    it('should render color==="info"', () => {
      testingLib = render(
        Component({
          color: 'info',
        }),
      );

      const json = testingLib.toJSON();

      expect(json).toBeTruthy();
    });

    it('should render color==="primary"', () => {
      testingLib = render(
        Component({
          color: 'primary',
        }),
      );

      const json = testingLib.toJSON();

      expect(json).toBeTruthy();
    });

    it('should render color==="secondary"', () => {
      testingLib = render(
        Component({
          color: 'secondary',
        }),
      );

      const json = testingLib.toJSON();

      expect(json).toBeTruthy();
    });

    it('should render color==="danger"', () => {
      testingLib = render(
        Component({
          color: 'danger',
        }),
      );

      const json = testingLib.toJSON();

      expect(json).toBeTruthy();
    });

    it('should render color==="warning"', () => {
      testingLib = render(
        Component({
          color: 'warning',
        }),
      );

      const json = testingLib.toJSON();

      expect(json).toBeTruthy();
    });
  });

  it('should render `disabled` button', () => {
    testingLib = render(
      Component({
        disabled: true,
      }),
    );

    const json = testingLib.toJSON();

    expect(json).toBeTruthy();
  });
});
