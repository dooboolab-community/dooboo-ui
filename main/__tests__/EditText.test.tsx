import React, {ReactElement} from 'react';
import {RenderAPI, act, fireEvent, render} from '@testing-library/react-native';

import {EditText} from '../../main';
import type {EditTextProps} from '../../main/EditText';
import RNWebHooks from 'react-native-web-hooks';
import {View} from 'react-native';
import {createComponent} from '../../test/testUtils';

jest.mock('react-native-web-hooks', () => ({
  useHover: () => false,
}));

let testingLib: RenderAPI;

const component = (editProps?: EditTextProps): ReactElement =>
  createComponent(<EditText {...editProps} />);

describe('[EditText]', () => {
  jest.spyOn(console, 'error').mockImplementation(() => {});

  describe('interactions', () => {
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

      it('should render styles', async () => {
        testingLib = render(
          component({
            styles: {
              hovered: {
                backgroundColor: 'green',
              },
            },
          }),
        );

        const container = testingLib.getByTestId('container-id');

        const containerChildViewCustomStyle =
          // @ts-ignore
          container.findAllByType(View)[0].instance.props.style[1][1];

        expect(containerChildViewCustomStyle).toEqual({
          backgroundColor: 'green',
        });
      });

      describe('labeText', () => {
        it('should render text', async () => {
          testingLib = render(
            component({
              labelText: 'label text',
            }),
          );

          const label = testingLib.getByText('label text');

          expect(label).toBeTruthy();
        });

        it('should render style', async () => {
          testingLib = render(
            component({
              labelText: 'label text',
              styles: {
                labelText: {
                  color: 'green',
                },
              },
            }),
          );

          const label = testingLib.getByText('label text');
          const labelTextStyle = label.props.style[0][1];

          expect(labelTextStyle).toEqual({color: 'green'});
        });

        describe('unhovered', () => {
          beforeAll(() => {
            jest.spyOn(RNWebHooks, 'useHover').mockImplementation(() => false);
          });

          it('should contain `focusColor` when focused', async () => {
            testingLib = render(
              component({
                testID: 'INPUT_TEST',
                labelText: 'label text',
                styles: {
                  labelText: {
                    color: 'green',
                  },
                },
                disableColor: '#666',
                focusColor: 'pink',
              }),
            );

            const input = testingLib.getByTestId('INPUT_TEST');

            act(() => {
              input.props.onFocus();
            });

            const label = testingLib.getByText('label text');

            const unhoveredTextStyle = label.props.style[2];

            expect(unhoveredTextStyle).toEqual({color: 'pink'});
          });

          it('should contain `errorColor` when `errorText is provided', async () => {
            testingLib = render(
              component({
                testID: 'INPUT_TEST',
                labelText: 'label text',
                errorText: 'error text',
                styles: {
                  labelText: {
                    color: 'green',
                  },
                },
                errorColor: 'orange',
              }),
            );

            const input = testingLib.getByTestId('INPUT_TEST');

            act(() => {
              input.props.onFocus();
            });

            const label = testingLib.getByText('label text');
            const error = testingLib.getByText('error text');

            const unhoveredTextStyle = label.props.style[2];

            expect(error).toBeTruthy();
            expect(unhoveredTextStyle).toEqual({color: 'orange'});
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
              errorText: 'error text',
            }),
          );

          const input = testingLib.getByTestId('INPUT_TEST');

          expect(input).toBeTruthy();

          fireEvent(input, 'blur');
        });
      });
    });

    describe('Type: [column] - default', () => {
      it('renders without crashing', () => {
        testingLib = render(
          component({
            type: 'column',
          }),
        );

        const json = testingLib.toJSON();

        expect(json).toMatchSnapshot();
        expect(json).toBeTruthy();
      });

      it('renders custom styles without crashing', () => {
        testingLib = render(
          component({
            type: 'column',
            styles: {
              container: {},
              errorText: {},
              hovered: {},
              input: {},
              labelText: {},
              labelTextHovered: {},
              counter: {},
            },
          }),
        );

        const json = testingLib.toJSON();

        expect(json).toMatchSnapshot();
        expect(json).toBeTruthy();
      });

      it('should render `maxLength` counter', () => {
        testingLib = render(component());

        const json = testingLib.toJSON();

        expect(json).toBeTruthy();

        testingLib = render(
          component({
            type: 'column',
            textInputProps: {
              maxLength: 10,
            },
          }),
        );

        expect(json).toMatchSnapshot();
        expect(json).toBeTruthy();
      });

      it('should render `maxLength` counter with error style', () => {
        testingLib = render(component());

        const json = testingLib.toJSON();

        expect(json).toBeTruthy();

        testingLib = render(
          component({
            type: 'column',
            textInputProps: {
              maxLength: 10,
            },
            value: '0123456789',
          }),
        );

        expect(json).toMatchSnapshot();
        expect(json).toBeTruthy();
      });
    });

    describe('Type: [boxed]', () => {
      it('should render without crashing', () => {
        testingLib = render(component());

        const json = testingLib.toJSON();

        expect(json).toBeTruthy();

        testingLib = render(
          component({
            type: 'boxed',
          }),
        );

        expect(json).toMatchSnapshot();
        expect(json).toBeTruthy();
      });

      it('should render `errorText`', () => {
        testingLib = render(component());

        const json = testingLib.toJSON();

        expect(json).toBeTruthy();

        testingLib = render(
          component({
            type: 'boxed',
            errorText: 'error',
          }),
        );

        expect(json).toMatchSnapshot();
        expect(json).toBeTruthy();
      });

      it('should render `!editable` status', () => {
        testingLib = render(component());

        const json = testingLib.toJSON();

        expect(json).toBeTruthy();

        testingLib = render(
          component({
            type: 'boxed',
            editable: false,
          }),
        );

        expect(json).toMatchSnapshot();
        expect(json).toBeTruthy();
      });

      it('should render `maxLength` counter', () => {
        testingLib = render(component());

        const json = testingLib.toJSON();

        expect(json).toBeTruthy();

        testingLib = render(
          component({
            type: 'boxed',
            textInputProps: {
              maxLength: 10,
            },
          }),
        );

        expect(json).toMatchSnapshot();
        expect(json).toBeTruthy();
      });
    });

    describe('Type: [row]', () => {
      it('should render without crashing', () => {
        testingLib = render(component());

        const json = testingLib.toJSON();

        expect(json).toBeTruthy();

        testingLib = render(
          component({
            type: 'row',
          }),
        );

        expect(json).toMatchSnapshot();
        expect(json).toBeTruthy();
      });

      it('should render `errorText`', () => {
        testingLib = render(component());

        const json = testingLib.toJSON();

        expect(json).toBeTruthy();

        testingLib = render(
          component({
            type: 'row',
            errorText: 'error',
          }),
        );

        expect(json).toMatchSnapshot();
        expect(json).toBeTruthy();
      });

      it('should render `!editable` status', () => {
        testingLib = render(component());

        const json = testingLib.toJSON();

        expect(json).toBeTruthy();

        testingLib = render(
          component({
            type: 'row',
            editable: false,
          }),
        );

        expect(json).toMatchSnapshot();
        expect(json).toBeTruthy();
      });

      it('should render `maxLength` counter', () => {
        testingLib = render(component());

        const json = testingLib.toJSON();

        expect(json).toBeTruthy();

        testingLib = render(
          component({
            type: 'row',
            textInputProps: {
              maxLength: 10,
            },
          }),
        );

        expect(json).toMatchSnapshot();
        expect(json).toBeTruthy();
      });
    });

    describe('!editable', () => {
      it('renders without crashing', () => {
        testingLib = render(
          component({
            type: 'column',
            editable: false,
          }),
        );

        const json = testingLib.toJSON();

        expect(json).toMatchSnapshot();
        expect(json).toBeTruthy();
      });

      it('renders `labelText`', () => {
        testingLib = render(
          component({
            type: 'column',
            editable: false,
            labelText: 'label',
          }),
        );

        const json = testingLib.toJSON();

        expect(json).toMatchSnapshot();
        expect(json).toBeTruthy();
      });

      it('renders `errorText`', () => {
        testingLib = render(
          component({
            type: 'column',
            editable: false,
            labelText: 'label',
            errorText: 'error',
          }),
        );

        const json = testingLib.toJSON();

        expect(json).toMatchSnapshot();
        expect(json).toBeTruthy();
      });
    });

    //? Below tests is emitting console error but this is expeted
    describe('web', () => {
      beforeAll(() => {
        jest.mock('react-native/Libraries/Utilities/Platform', () => ({
          OS: 'web',
          select: () => ({
            web: true,
            default: undefined,
          }),
        }));
      });

      it('renders without crashing', () => {
        testingLib = render(
          component({
            type: 'column',
          }),
        );

        const json = testingLib.toJSON();

        expect(json).toMatchSnapshot();
        expect(json).toBeTruthy();
      });
    });
  });
});
