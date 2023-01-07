import {act, fireEvent, render} from '@testing-library/react-native';

import {EditText} from '..';
import type {EditTextProps} from '..';
import RNWebHooks from 'react-native-web-hooks';
import React from 'react';
import type {ReactElement} from 'react';
import type {RenderAPI} from '@testing-library/react-native';
import {createComponent} from '../../../test/testUtils';

jest.mock('react-native-web-hooks', () => ({
  useHover: () => false,
}));

let testingLib: RenderAPI;

const component = (editProps?: EditTextProps): ReactElement =>
  createComponent(<EditText {...editProps} />);

describe('[EditText]', () => {
  jest.spyOn(console, 'error').mockImplementation(() => {});

  beforeAll(() => {
    testingLib = render(
      component({
        autoCapitalize: 'words',
      }),
    );
  });

  describe('hovered', () => {
    beforeAll(() => {
      jest.spyOn(RNWebHooks, 'useHover').mockImplementation(() => true);
    });

    describe('labeText', () => {
      it('should render label text', async () => {
        testingLib = render(
          component({
            label: 'label text',
          }),
        );

        const label = testingLib.getByText('label text');

        expect(label).toBeTruthy();
      });

      it('should render label style', async () => {
        testingLib = render(
          component({
            label: 'label text',
            styles: {
              label: {
                color: 'green',
              },
            },
          }),
        );

        const label = testingLib.getByText('label text');
        const labelTextStyle = label.props.style;

        expect(labelTextStyle).toBeTruthy();
      });

      describe('unhovered', () => {
        beforeAll(() => {
          jest.spyOn(RNWebHooks, 'useHover').mockImplementation(() => false);
        });

        it('should contain `focusColor` when focused', async () => {
          testingLib = render(
            component({
              testID: 'INPUT_TEST',
              label: 'label text',
              styles: {
                label: {
                  color: 'green',
                },
              },
            }),
          );

          const input = testingLib.getByTestId('INPUT_TEST');

          act(() => {
            input.props.onFocus();
          });

          const label = testingLib.getByText('label text');

          const unhoveredTextStyle = label.props.style[2];

          expect(unhoveredTextStyle).toEqual({color: 'green'});
        });

        it('should render error element when provided', async () => {
          testingLib = render(
            component({
              testID: 'INPUT_TEST',
              label: 'label text',
              error: 'error text',
              styles: {
                label: {
                  color: 'green',
                },
              },
            }),
          );

          const input = testingLib.getByTestId('INPUT_TEST');

          act(() => {
            input.props.onFocus();
          });

          const error = testingLib.getByText('error text');
          expect(error).toBeTruthy();
        });
      });
    });

    it('should trigger `onFocus`', async () => {
      testingLib = render(
        component({
          testID: 'INPUT_TEST',
          onFocus: jest.fn(),
        }),
      );

      const input = testingLib.getByTestId('INPUT_TEST');

      expect(input).toBeTruthy();

      fireEvent(input, 'focus');
    });

    describe('onBlur (focused === false)', () => {
      it('should trigger blur without errorText', async () => {
        testingLib = render(
          component({
            onBlur: () => {},
            testID: 'INPUT_TEST',
          }),
        );

        const input = testingLib.getByTestId('INPUT_TEST');

        expect(input).toBeTruthy();

        fireEvent(input, 'blur');
      });

      it('should trigger blur with errorText', async () => {
        testingLib = render(
          component({
            testID: 'INPUT_TEST',
            error: 'error text',
          }),
        );

        const input = testingLib.getByTestId('INPUT_TEST');

        expect(input).toBeTruthy();

        fireEvent(input, 'blur');
      });
    });
  });
});
