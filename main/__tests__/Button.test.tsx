import {ThemeProvider, dark, light} from '@dooboo-ui/theme';
import {fireEvent, render} from '@testing-library/react-native';

import {Button} from '../../main';
import type {Props as ButtonProps} from '../components/Button';
import {LoadingIndicator} from '../components/LoadingIndicator';
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

  describe('Index', () => {
    it('should render loading status', () => {
      testingLib = render(Component({loading: true}));

      expect(LoadingIndicator).toBeDefined();
      expect(testingLib.getByTestId('loading-view')).toBeTruthy();
    });

    it('should render default disabled style when disabled', () => {
      testingLib = render(
        Component({
          disabled: true,
        }),
      );

      const loadingView = testingLib.getByTestId('button-container');

      expect(loadingView.props.style[1][0].borderTopColor).toEqual(
        light.text.disabled,
      );
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
            disabled: css`
              background-color: yellow;
            `,
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
            container: css`
              background-color: blue;
            `,
          },
        }),
      );

      const button = testingLib.getByTestId('button-container');
      const buttonContainerStyle = button.props.style[1][0];

      expect(buttonContainerStyle).toEqual({
        backgroundColor: 'blue',
      });
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
    it('should renders primary color', () => {
      testingLib = render(Component({color: 'primary'}));

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[1][0];

      expect(buttonStyle.backgroundColor).toEqual(light.button.primary.bg);
    });

    it('should renders secondary color', () => {
      testingLib = render(Component({color: 'secondary'}));

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[1][0];

      expect(buttonStyle.backgroundColor).toEqual(light.button.secondary.bg);
    });

    it('should renders success color', () => {
      testingLib = render(Component({color: 'success'}));

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[1][0];

      expect(buttonStyle.backgroundColor).toEqual(light.button.success.bg);
    });

    it('should renders warning color', () => {
      testingLib = render(Component({color: 'warning'}));

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[1][0];

      expect(buttonStyle.backgroundColor).toEqual(light.button.warning.bg);
    });

    it('renders danger color', () => {
      testingLib = render(Component({color: 'danger'}));

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[1][0];

      expect(buttonStyle.backgroundColor).toEqual(light.button.danger.bg);
    });

    it('should renders info color', () => {
      testingLib = render(Component({color: 'info'}));

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[1][0];

      expect(buttonStyle.backgroundColor).toEqual(light.button.info.bg);
    });

    it('should renders light color', () => {
      testingLib = render(Component({color: 'light'}));

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[1][0];

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
      const buttonStyle = button.props.style[1][0];

      expect(buttonStyle.backgroundColor).toEqual(dark.button.primary.bg);
    });

    it('should renders danger color', () => {
      testingLib = render(
        <ThemeProvider initialThemeType="dark">
          <Button text="my-button" color="danger" />
        </ThemeProvider>,
      );

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[1][0];

      expect(buttonStyle.backgroundColor).toEqual(dark.button.danger.bg);
    });
  });

  describe('[Button] outlined', () => {
    it('should render [type=outlined] button', () => {
      testingLib = render(Component({type: 'outlined'}));

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[1][0];

      expect(button.props.type).toEqual('outlined');
      expect(buttonStyle.backgroundColor).toEqual(light.bg.basic);
    });

    it('should render [type=outlined] button with [color=primary]', () => {
      testingLib = render(Component({type: 'outlined', color: 'primary'}));

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[1][0];

      expect(button.props.type).toEqual('outlined');
      expect(buttonStyle.backgroundColor).toEqual(light.bg.basic);
      expect(buttonStyle.borderBottomColor).toEqual(light.button.primary.bg);
    });

    it('should render [type=outlined] button with [color=secondary]', () => {
      testingLib = render(Component({type: 'outlined', color: 'secondary'}));

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[1][0];

      expect(button.props.type).toEqual('outlined');
      expect(buttonStyle.backgroundColor).toEqual(light.bg.basic);
      expect(buttonStyle.borderBottomColor).toEqual(light.button.secondary.bg);
    });

    it('should render [type=outlined] button with [color=success]', () => {
      testingLib = render(Component({type: 'outlined', color: 'success'}));

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[1][0];

      expect(button.props.type).toEqual('outlined');
      expect(buttonStyle.backgroundColor).toEqual(light.bg.basic);
      expect(buttonStyle.borderBottomColor).toEqual(light.button.success.bg);
    });

    it('should render [type=outlined] button with [color=warning]', () => {
      testingLib = render(Component({type: 'outlined', color: 'warning'}));

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[1][0];

      expect(button.props.type).toEqual('outlined');
      expect(buttonStyle.backgroundColor).toEqual(light.bg.basic);
      expect(buttonStyle.borderBottomColor).toEqual(light.button.warning.bg);
    });

    it('should render [type=outlined] button with [color=danger]', () => {
      testingLib = render(Component({type: 'outlined', color: 'danger'}));

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[1][0];

      expect(button.props.type).toEqual('outlined');
      expect(buttonStyle.backgroundColor).toEqual(light.bg.basic);
      expect(buttonStyle.borderBottomColor).toEqual(light.button.danger.bg);
    });

    it('should render [type=outlined] button with [color=info]', () => {
      testingLib = render(Component({type: 'outlined', color: 'info'}));

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[1][0];

      expect(button.props.type).toEqual('outlined');
      expect(buttonStyle.backgroundColor).toEqual(light.bg.basic);
      expect(buttonStyle.borderBottomColor).toEqual(light.button.info.bg);
    });

    it('should render [type=outlined] button with [color=light]', () => {
      testingLib = render(Component({type: 'outlined', color: 'light'}));

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[1][0];

      expect(button.props.type).toEqual('outlined');
      expect(buttonStyle.backgroundColor).toEqual(light.bg.basic);
      expect(buttonStyle.borderBottomColor).toEqual(light.button.light.bg);
    });

    it('should render [type=outlined] `disabled` button', () => {
      testingLib = render(
        <ThemeProvider>
          <Button type="outlined" disabled text="my-button" />
        </ThemeProvider>,
      );

      const button = testingLib.getByTestId('button-container');

      const text = testingLib.getByText('my-button');
      const textStyle = text.props.style[1];

      expect(button.props.type).toEqual('outlined');
      expect(textStyle.color).toEqual(light.button.disabled.text);
    });
  });

  describe('Outlined - dark mode', () => {
    it('should render [type=outlined] [color=primary] button', () => {
      testingLib = render(
        <ThemeProvider initialThemeType="dark">
          <Button type="outlined" color="primary" />
        </ThemeProvider>,
      );

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[1][0];

      expect(buttonStyle.borderBottomColor).toEqual(dark.button.primary.bg);
    });

    it('should render [type=outlined] [color=secondary] button', () => {
      testingLib = render(
        <ThemeProvider initialThemeType="dark">
          <Button type="outlined" color="secondary" />
        </ThemeProvider>,
      );

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[1][0];

      expect(buttonStyle.borderBottomColor).toEqual(dark.button.secondary.bg);
    });

    it('should render [type=outlined] [color=success] button', () => {
      testingLib = render(
        <ThemeProvider initialThemeType="dark">
          <Button type="outlined" color="success" />
        </ThemeProvider>,
      );

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[1][0];

      expect(buttonStyle.borderBottomColor).toEqual(dark.button.success.bg);
    });

    it('should render [type=outlined] [color=warning] button', () => {
      testingLib = render(
        <ThemeProvider initialThemeType="dark">
          <Button type="outlined" color="warning" />
        </ThemeProvider>,
      );

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[1][0];

      expect(buttonStyle.borderBottomColor).toEqual(dark.button.warning.bg);
    });

    it('should render [type=outlined] [color=danger] button', () => {
      testingLib = render(
        <ThemeProvider initialThemeType="dark">
          <Button type="outlined" color="danger" />
        </ThemeProvider>,
      );

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[1][0];

      expect(buttonStyle.borderBottomColor).toEqual(dark.button.danger.bg);
    });

    it('should [type=outlined] [color=light] button', () => {
      testingLib = render(
        <ThemeProvider initialThemeType="dark">
          <Button type="outlined" color="light" />
        </ThemeProvider>,
      );

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[1][0];

      expect(buttonStyle.borderBottomColor).toEqual(dark.button.light.bg);
    });

    it('should render [type=outlined] [color=info] button', () => {
      testingLib = render(
        <ThemeProvider initialThemeType="dark">
          <Button type="outlined" color="info" />
        </ThemeProvider>,
      );

      const button = testingLib.getByTestId('button-container');
      const buttonStyle = button.props.style[1][0];

      expect(buttonStyle.borderBottomColor).toEqual(dark.button.info.bg);
    });

    it('should render [type=outlined] `disabled` button', () => {
      testingLib = render(
        <ThemeProvider initialThemeType="dark">
          <Button type="outlined" disabled text="my-button" />
        </ThemeProvider>,
      );

      const button = testingLib.getByTestId('button-container');

      const text = testingLib.getByText('my-button');
      const textStyle = text.props.style[1];

      expect(button.props.type).toEqual('outlined');
      expect(textStyle.color).toEqual(dark.button.disabled.text);
    });
  });

  describe('[Button] sizes', () => {
    it('should render [large] button', () => {
      testingLib = render(Component({size: 'large'}));

      const button = testingLib.getByTestId('button-container');

      expect(button.props.size).toEqual('large');
    });

    it('should render [small] button', () => {
      testingLib = render(
        <ThemeProvider initialThemeType="dark">
          <Button size="small" color="danger" />
        </ThemeProvider>,
      );

      const button = testingLib.getByTestId('button-container');

      expect(button.props.size).toEqual('small');
    });
  });
});
