import {ThemeProvider, dark, light} from '@dooboo-ui/theme';
import {act, fireEvent, render} from '@testing-library/react-native';

import {Button} from '../../main';
import type {Props as ButtonProps} from '../Button';
import {LoadingIndicator} from '../LoadingIndicator';
import React from 'react';
import type {ReactElement} from 'react';
import type {RenderAPI} from '@testing-library/react-native';
import {Text} from 'react-native';
import {createComponent} from '../../test/testUtils';
import {css} from '@emotion/native';

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

      expect(loadingView.props.style[0].borderTopColor).toEqual(
        light.text.contrastBasic,
      );
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

      expect(loadingView.props.style[0].borderTopColor).toEqual(
        light.text.contrastBasic,
      );
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
            disabledButton: css`
              background-color: yellow;
            `,
          },
        }),
      );

      const button = testingLib.getByTestId('button-container');
      const disabledButtonStyle = button.props.style[1][1][2];

      expect(disabledButtonStyle).toEqual({
        backgroundColor: 'yellow',
      });
    });

    it('should render container', () => {
      testingLib = render(
        Component({
          styles: {
            container: css`
              background-color: blue;
            `,
          },
        }),
      );

      const button = testingLib.getByTestId('button-container');
      const buttonContainerStyle = button.props.style[1][1][0];

      expect(buttonContainerStyle).toEqual({
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

      const buttonLayoutStyle = loadingView.props.style[1][1][1];

      expect(buttonLayoutStyle.width).toEqual(375);
      expect(buttonLayoutStyle.height).toEqual(667);
    });
  });

  it('should render start and end elements', () => {
    testingLib = render(
      Component({startElement: <Text />, endElement: <Text />}),
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

  describe('[Button] color', () => {
    it('should render [color=info] button', () => {
      testingLib = render(Component({color: 'info'}));

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[0];

      expect(buttonStyle.backgroundColor).toEqual(light.button.info.bg);
    });

    it('should render [color=secondary] button', () => {
      testingLib = render(Component({color: 'secondary'}));

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[0];

      expect(buttonStyle.backgroundColor).toEqual(light.button.secondary.bg);
    });

    it('should render [color=success] button', () => {
      testingLib = render(Component({color: 'success'}));

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[0];

      expect(buttonStyle.backgroundColor).toEqual(light.button.success.bg);
    });

    it('should render [color=danger] button', () => {
      testingLib = render(Component({color: 'danger'}));

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[0];

      expect(buttonStyle.backgroundColor).toEqual(light.button.danger.bg);
    });

    it('should render [color=warning] button', () => {
      testingLib = render(Component({color: 'warning'}));

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[0];

      expect(buttonStyle.backgroundColor).toEqual(light.button.warning.bg);
    });

    it('should render [color=light] button', () => {
      testingLib = render(Component({color: 'light'}));

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[0];

      expect(buttonStyle.backgroundColor).toEqual(light.button.light.bg);
    });
  });

  describe('[Button] - dark mode', () => {
    it('should render button', () => {
      testingLib = render(
        <ThemeProvider initialThemeType="dark">
          <Button text="my-button" />
        </ThemeProvider>,
      );

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[0];

      const text = testingLib.getByText('my-button');
      const textStyle = text.props.style[1][0];

      expect(buttonStyle.backgroundColor).toEqual(dark.button.primary.bg);
      expect(textStyle.color).toEqual(dark.button.primary.text);
    });

    it('should render [color=danger] button', () => {
      testingLib = render(
        <ThemeProvider initialThemeType="dark">
          <Button text="my-button" color="danger" />
        </ThemeProvider>,
      );

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[0];

      const text = testingLib.getByText('my-button');
      const textStyle = text.props.style[1][0];

      expect(buttonStyle.backgroundColor).toEqual(dark.button.danger.bg);
      expect(textStyle.color).toEqual(dark.button.danger.text);
    });
  });

  describe('[Button] outlined', () => {
    it('should render [type=outlined] button', () => {
      testingLib = render(Component({type: 'outlined'}));

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[0];

      expect(button.props.type).toEqual('outlined');
      expect(buttonStyle.backgroundColor).toEqual(light.bg.default);
    });

    it('should render [type=outlined] button with [color=secondary]', () => {
      testingLib = render(Component({type: 'outlined', color: 'secondary'}));

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[0];

      expect(button.props.type).toEqual('outlined');
      expect(buttonStyle.backgroundColor).toEqual(light.bg.default);
      expect(buttonStyle.borderBottomColor).toEqual(light.button.secondary.bg);
    });

    it('should render [type=outlined] button with [color=danger]', () => {
      testingLib = render(Component({type: 'outlined', color: 'danger'}));

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[0];

      expect(button.props.type).toEqual('outlined');
      expect(buttonStyle.backgroundColor).toEqual(light.bg.default);
      expect(buttonStyle.borderBottomColor).toEqual(light.button.danger.bg);
    });

    it('should render [type=outlined] button with [color=info]', () => {
      testingLib = render(Component({type: 'outlined', color: 'info'}));

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[0];

      expect(button.props.type).toEqual('outlined');
      expect(buttonStyle.backgroundColor).toEqual(light.bg.default);
      expect(buttonStyle.borderBottomColor).toEqual(light.button.info.bg);
    });

    it('should render [type=outlined] button with [color=warning]', () => {
      testingLib = render(Component({type: 'outlined', color: 'warning'}));

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[0];

      expect(button.props.type).toEqual('outlined');
      expect(buttonStyle.backgroundColor).toEqual(light.bg.default);
      expect(buttonStyle.borderBottomColor).toEqual(light.button.warning.bg);
    });

    it('should render [type=outlined] `disabled` button', () => {
      testingLib = render(
        <ThemeProvider>
          <Button type="outlined" disabled text="my-button" />
        </ThemeProvider>,
      );

      const button = testingLib.getByTestId('button-container');

      const text = testingLib.getByText('my-button');
      const textStyle = text.props.style[1][0];

      expect(button.props.type).toEqual('outlined');
      expect(textStyle.color).toEqual(light.button.disabled.text);
    });

    describe('Outlined - dark mode', () => {
      it('should render [type=outlined] [color=primary] button', () => {
        testingLib = render(
          <ThemeProvider initialThemeType="dark">
            <Button type="outlined" color="primary" />
          </ThemeProvider>,
        );

        const button = testingLib.getByTestId('button-container');
        const buttonStyle = button.props.style[0];

        expect(buttonStyle.borderBottomColor).toEqual(dark.button.primary.bg);
      });

      it('should render [type=outlined] [color=secondary] button', () => {
        testingLib = render(
          <ThemeProvider initialThemeType="dark">
            <Button type="outlined" color="secondary" />
          </ThemeProvider>,
        );

        const button = testingLib.getByTestId('button-container');
        const buttonStyle = button.props.style[0];

        expect(buttonStyle.borderBottomColor).toEqual(dark.button.secondary.bg);
      });

      it('should render [type=outlined] [color=success] button', () => {
        testingLib = render(
          <ThemeProvider initialThemeType="dark">
            <Button type="outlined" color="success" />
          </ThemeProvider>,
        );

        const button = testingLib.getByTestId('button-container');
        const buttonStyle = button.props.style[0];

        expect(buttonStyle.borderBottomColor).toEqual(dark.button.success.bg);
      });

      it('should render [type=outlined] [color=info] button', () => {
        testingLib = render(
          <ThemeProvider initialThemeType="dark">
            <Button type="outlined" color="info" />
          </ThemeProvider>,
        );

        const button = testingLib.getByTestId('button-container');
        const buttonStyle = button.props.style[0];

        expect(buttonStyle.borderBottomColor).toEqual(dark.button.info.bg);
      });

      it('should render [type=outlined] [color=warning] button', () => {
        testingLib = render(
          <ThemeProvider initialThemeType="dark">
            <Button type="outlined" color="warning" />
          </ThemeProvider>,
        );

        const button = testingLib.getByTestId('button-container');
        const buttonStyle = button.props.style[0];

        expect(buttonStyle.borderBottomColor).toEqual(dark.button.warning.bg);
      });

      it('should render [type=outlined] [color=danger] button', () => {
        testingLib = render(
          <ThemeProvider initialThemeType="dark">
            <Button type="outlined" color="danger" />
          </ThemeProvider>,
        );

        const button = testingLib.getByTestId('button-container');
        const buttonStyle = button.props.style[0];

        expect(buttonStyle.borderBottomColor).toEqual(dark.button.danger.bg);
      });

      it('should [type=outlined] [color=light] button', () => {
        testingLib = render(
          <ThemeProvider initialThemeType="dark">
            <Button type="outlined" color="light" />
          </ThemeProvider>,
        );

        const button = testingLib.getByTestId('button-container');
        const buttonStyle = button.props.style[0];

        expect(buttonStyle.borderBottomColor).toEqual(dark.button.light.bg);
      });
    });

    it('should render button with [disabled]', () => {
      testingLib = render(
        <ThemeProvider>
          <Button disabled text="my-button" />
        </ThemeProvider>,
      );

      const text = testingLib.getByText('my-button');
      const textStyle = text.props.style[1][0];

      expect(textStyle.color).toEqual(light.button.disabled.text);
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
