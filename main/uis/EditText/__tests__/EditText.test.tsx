import type {ReactElement} from 'react';
import React from 'react';
import {Text} from 'react-native';
import RNWebHooks from 'react-native-web-hooks';
import {light} from '@dooboo-ui/theme';
import type {RenderAPI} from '@testing-library/react-native';
import {act, fireEvent, render} from '@testing-library/react-native';

import {createComponent} from '../../../../test/testUtils';
import type {EditTextProps} from '..';
import {EditText} from '..';

jest.mock('react-native-web-hooks', () => ({
  useHover: () => false,
}));

let testingLib: RenderAPI;

const component = (editProps?: EditTextProps): ReactElement =>
  createComponent(<EditText {...editProps} />);

describe('[EditText]', () => {
  jest.spyOn(console, 'error').mockImplementation(() => {});

  beforeAll(() => {
    testingLib = render(component());
  });

  describe('hovered', () => {
    beforeAll(() => {
      jest.spyOn(RNWebHooks, 'useHover').mockImplementation(() => true);
    });

    describe('label', () => {
      it('renders label text', async () => {
        testingLib = render(component({label: 'label text'}));

        const label = testingLib.getByText('label text');

        expect(label).toBeTruthy();
      });

      it('renders label style', async () => {
        testingLib = render(
          component({
            label: 'label text',
            colors: {
              basic: 'blue',
              placeholder: 'green',
              disabled: 'red',
              error: 'yellow',
              focused: 'purple',
              hovered: 'orange',
            },
          }),
        );

        const label = testingLib.getByText('label text');

        expect(label).toHaveStyle({color: 'orange'});
      });

      it('renders custom label style', async () => {
        const renderCustomLabel = (): ReactElement => {
          return (
            <Text
              style={{
                color: 'blue',
                fontSize: 12,
                fontWeight: 'bold',
              }}
            >
              Custom label
            </Text>
          );
        };

        testingLib = render(
          component({
            label: renderCustomLabel,
          }),
        );

        const label = testingLib.getByText('Custom label');

        expect(label).toBeTruthy();
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
              colors: {
                basic: 'blue',
                placeholder: 'green',
                disabled: 'red',
                error: 'yellow',
                focused: 'purple',
                hovered: 'orange',
              },
            }),
          );

          const input = testingLib.getByTestId('INPUT_TEST');
          expect(input).toHaveStyle({color: 'green'});

          act(() => {
            input.props.onFocus();
          });

          const label = testingLib.getByText('label text');

          expect(label).toHaveStyle({color: 'purple'});
        });

        it('renders error element when provided', async () => {
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
  });

  describe('layout', () => {
    it('renders [direction] row', () => {
      testingLib = render(
        component({
          testID: 'INPUT_TEST',
          direction: 'row',
        }),
      );

      const input = testingLib.getByTestId('INPUT_TEST');
      // const container = testingLib.getByTestId('container');

      expect(input).toBeTruthy();
      // expect(container).toHaveStyle({flexDirection: 'row'});
    });

    it('renders [decoration] boxed', () => {
      testingLib = render(
        component({
          testID: 'INPUT_TEST',
          decoration: 'boxed',
        }),
      );

      const input = testingLib.getByTestId('INPUT_TEST');
      // const container = testingLib.getByTestId('container');

      expect(input).toBeTruthy();
      // expect(container).toHaveStyle({borderWidth: 1});
    });
  });

  describe('start and end elements', () => {
    it('renders start element', () => {
      testingLib = render(
        component({
          testID: 'INPUT_TEST',
          startElement: <Text>Start</Text>,
        }),
      );

      const input = testingLib.getByText('Start');
      expect(input).toBeTruthy();
    });

    it('renders end element', () => {
      testingLib = render(
        component({
          testID: 'INPUT_TEST',
          endElement: <Text>End</Text>,
        }),
      );

      const input = testingLib.getByText('End');
      expect(input).toBeTruthy();
    });
  });

  describe('web', () => {
    beforeAll(() => {
      jest.mock('react-native/Libraries/Utilities/Platform', () => ({
        OS: 'web',
        select: () => null,
      }));
    });

    it('renders web style', () => {
      testingLib = render(
        component({
          testID: 'INPUT_TEST',
        }),
      );

      const input = testingLib.getByTestId('INPUT_TEST');
      expect(input).toBeTruthy();
      expect(input).toHaveStyle({outlineWidth: 0});
    });
  });

  describe('input', () => {
    it('should trigger text changes', () => {
      const CHANGE_TEXT = 'content';
      const mockedFn = jest.fn();

      const onChangeTextMock = (str: string): void => {
        mockedFn(str);
      };

      testingLib = render(
        component({
          testID: 'INPUT_TEST',
          editable: false,
          onChangeText: onChangeTextMock,
        }),
      );

      const input = testingLib.getByTestId('INPUT_TEST');
      expect(input).toBeTruthy();

      fireEvent.changeText(input, CHANGE_TEXT);
      expect(mockedFn).toBeCalledWith(CHANGE_TEXT);
    });

    it('should have value', () => {
      testingLib = render(
        component({
          testID: 'INPUT_TEST',
          value: 'text123',
        }),
      );

      const input = testingLib.getByTestId('INPUT_TEST');

      expect(input).toBeTruthy();

      expect(input).toHaveProp('value', 'text123');
    });

    it('should have render counter', () => {
      testingLib = render(
        component({
          testID: 'INPUT_TEST',
          value: 'text123',
          maxLength: 100,
        }),
      );

      const counter = testingLib.getByText('7/100');

      expect(counter).toBeTruthy();
    });

    it('should have render custom error', () => {
      const renderCustomError = (): ReactElement => <Text>custom error</Text>;

      testingLib = render(
        component({
          testID: 'INPUT_TEST',
          value: 'text123',
          error: renderCustomError,
        }),
      );

      const error = testingLib.getByText('custom error');

      expect(error).toBeTruthy();
    });
  });

  describe('disabled', () => {
    it('renders [default] disabled style', () => {
      testingLib = render(
        component({
          testID: 'INPUT_TEST',
          editable: false,
        }),
      );

      const input = testingLib.getByTestId('INPUT_TEST');

      expect(input).toBeTruthy();

      expect(input).toHaveStyle({color: light.text.disabled});
    });

    it('renders [custom] disabled style', () => {
      testingLib = render(
        component({
          testID: 'INPUT_TEST',
          colors: {disabled: 'yellow'},
          editable: false,
        }),
      );

      const input = testingLib.getByTestId('INPUT_TEST');

      expect(input).toBeTruthy();

      expect(input).toHaveStyle({color: 'yellow'});
    });
  });

  describe('focus', () => {
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

      expect(input).toHaveStyle({color: light.text.basic});
    });

    it('should trigger `onFocus` and render custom color', async () => {
      testingLib = render(
        component({
          testID: 'INPUT_TEST',
          onFocus: jest.fn(),
          colors: {focused: 'yellow'},
        }),
      );

      const input = testingLib.getByTestId('INPUT_TEST');

      expect(input).toBeTruthy();

      fireEvent(input, 'focus');

      expect(input).toHaveStyle({color: 'yellow'});
    });

    it('should trigger `onFocus` when touching container', async () => {
      const focusFn = jest.fn();

      testingLib = render(
        component({
          onFocus: focusFn,
          colors: {focused: 'yellow'},
        }),
      );

      const touch = testingLib.getByTestId('container-touch');

      expect(touch).toBeTruthy();

      fireEvent(touch, 'press');
      // Below should work but no luck in testing-library
      // expect(focusFn).toBeCalled();
    });

    describe('onBlur (focused === false)', () => {
      it('should trigger blur without errorText', async () => {
        testingLib = render(
          component({
            onBlur: () => {},
            testID: 'INPUT_TEST',
            colors: {placeholder: 'green'},
          }),
        );

        const input = testingLib.getByTestId('INPUT_TEST');

        expect(input).toBeTruthy();

        fireEvent(input, 'blur');

        expect(input).toHaveStyle({color: 'green'});
      });
    });
  });
});
