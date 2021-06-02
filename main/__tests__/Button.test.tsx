import {act, fireEvent, render} from '@testing-library/react-native';

import {Button} from '../../main';
import type {ButtonProps} from '../Button';
import {LoadingIndicator} from '../LoadingIndicator';
import React from 'react';
import type {ReactElement} from 'react';
import type {RenderAPI} from '@testing-library/react-native';
import {Text} from 'react-native';
import {createComponent} from '../../test/testUtils';
import {light} from '../theme/colors';

let testingLib: RenderAPI;

jest.mock('react-native-web-hooks', () => ({
  useHover: () => true,
}));

const Component = (props?: ButtonProps): ReactElement =>
  createComponent(<Button {...props} />);

describe('[Button]', () => {
  it('should render without crashing', () => {
    testingLib = render(Component());

    const json = testingLib.toJSON();

    expect(json).toBeTruthy();
  });

  describe('Loading', () => {
    it('should render loading status', () => {
      testingLib = render(Component({loading: true}));

      expect(LoadingIndicator).toBeDefined();
      expect(testingLib.getByTestId('loading-view')).toBeTruthy();
    });

    it('should render default disabled style when disabled', () => {
      testingLib = render(
        Component({
          loading: true,
          disabled: true,
        }),
      );

      const loadingView = testingLib.getByTestId('loading-view');

      expect(loadingView.props.style[1][3]).toEqual({
        backgroundColor: '#C4C4C4',
        borderColor: '#C4C4C4',
      });
    });

    it('should render disabled button style when disabled', () => {
      testingLib = render(
        Component({
          loading: true,
          disabled: true,
          styles: {
            disabledButton: {
              borderColor: 'red',
            },
          },
        }),
      );

      const loadingView = testingLib.getByTestId('loading-view');

      expect(loadingView.props.style[1][3]).toEqual({
        borderColor: 'red',
      });
    });

    it('should render custom container', () => {
      testingLib = render(
        Component({
          loading: true,
          disabled: false,
          styles: {
            container: {
              borderRadius: 0,
            },
          },
        }),
      );

      expect(testingLib.getByTestId('loading-view')).toBeTruthy();
    });
  });

  describe('Button', () => {
    it('should render disabled status', () => {
      testingLib = render(
        Component({
          disabled: true,
        }),
      );

      const json = testingLib.toJSON();

      expect(json).toBeTruthy();
    });

    it('should render disabled status with disabled style', () => {
      testingLib = render(
        Component({
          disabled: true,
          styles: {
            disabledButton: {
              backgroundColor: 'yellow',
            },
          },
        }),
      );

      const button = testingLib.getByTestId('button-container');
      const disabledButtonStyle = button.props.style[1][2];

      expect(disabledButtonStyle).toEqual({
        backgroundColor: 'yellow',
      });
    });

    it('should render container', () => {
      testingLib = render(
        Component({
          styles: {
            container: {
              backgroundColor: 'blue',
            },
          },
        }),
      );

      const button = testingLib.getByTestId('button-container');
      const buttonContainerStyle = button.props.style[1];

      expect(buttonContainerStyle[0]).toEqual({
        backgroundColor: 'blue',
      });
    });
  });

  describe('After onLayout', () => {
    it('should trigger onLayout then set loading-view layout', async () => {
      testingLib = render(Component());

      const button = testingLib.getByTestId('button-container');

      act(() => {
        button.props.onLayout({
          nativeEvent: {
            layout: {
              width: 375,
              height: 667,
            },
          },
        });
      });

      testingLib.rerender(
        Component({
          loading: true,
        }),
      );

      const loadingView = testingLib.getByTestId('loading-view');

      const buttonLayoutStyle = loadingView.props.style[1][1];

      expect(buttonLayoutStyle.width).toEqual(375);
      expect(buttonLayoutStyle.height).toEqual(667);
    });
  });

  it('should render left and right elements', () => {
    testingLib = render(
      Component({leftElement: <Text />, rightElement: <Text />}),
    );

    const button = testingLib.getByTestId('button-container');

    expect(button.findAllByType(Text)).toHaveLength(3);
  });

  describe('[Button] Interaction', () => {
    let cnt = 1;

    it('should simulate onPress', () => {
      testingLib = render(
        Component({
          onPress: () => cnt++,
        }),
      );

      const button = testingLib.getByTestId('button-container');

      fireEvent.press(button);

      expect(cnt).toBe(2);
    });
  });

  describe('[Button] type', () => {
    it('should render [type = info] button', () => {
      testingLib = render(Component({type: 'info'}));

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[0];

      expect(buttonStyle.backgroundColor).toEqual(light.info);
    });

    it('should render [type = secondary] button', () => {
      testingLib = render(Component({type: 'secondary'}));

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[0];

      expect(buttonStyle.backgroundColor).toEqual(light.secondary);
    });

    it('should render [type = danger] button', () => {
      testingLib = render(Component({type: 'danger'}));

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[0];

      expect(buttonStyle.backgroundColor).toEqual(light.danger);
    });

    it('should render [type = warning] button', () => {
      testingLib = render(Component({type: 'warning'}));

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[0];

      expect(buttonStyle.backgroundColor).toEqual(light.warning);
    });
  });

  describe('[Button] outlined', () => {
    it('should render outlined button', () => {
      testingLib = render(Component({outlined: true}));

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[0];

      expect(button.props.outlined).toBeTruthy();
      expect(buttonStyle.backgroundColor).toEqual(light.background);
    });

    it('should render outlined button with [type = warning]', () => {
      testingLib = render(Component({outlined: true, type: 'warning'}));

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[0];

      expect(button.props.outlined).toBeTruthy();
      expect(buttonStyle.backgroundColor).toEqual(light.background);
      expect(buttonStyle.borderBottomColor).toEqual(light.warning);
    });
  });

  describe('[Button] sizes', () => {
    it('should render [large] button', () => {
      testingLib = render(Component({size: 'large'}));

      const button = testingLib.getByTestId('button-container');

      expect(button.props.size).toEqual('large');
    });

    it('should render [small] button', () => {
      testingLib = render(Component({size: 'small'}));

      const button = testingLib.getByTestId('button-container');

      expect(button.props.size).toEqual('small');
    });
  });
});
