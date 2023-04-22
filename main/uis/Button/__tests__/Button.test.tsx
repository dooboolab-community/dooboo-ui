import type {ReactElement} from 'react';
import React from 'react';
import {Text} from 'react-native';
import type {ThemeType} from '@dooboo-ui/theme';
import {dark, light} from '@dooboo-ui/theme';
import {css} from '@emotion/native';
import type {RenderAPI} from '@testing-library/react-native';
import {fireEvent, render} from '@testing-library/react-native';

import {createComponent} from '../../../../test/testUtils';
import {Button} from '../../..';
import {LoadingIndicator} from '../../LoadingIndicator';
import type {Props as ButtonProps} from '..';

let testingLib: RenderAPI;

jest.mock('react-native-web-hooks', () => ({
  useHover: () => true,
}));

const Component = ({
  props,
  themeType,
}: {
  props?: ButtonProps;
  themeType?: ThemeType;
}): ReactElement =>
  createComponent(<Button onPress={jest.fn} {...props} />, themeType);

describe('[Button]', () => {
  it('should render without crashing', () => {
    testingLib = render(Component({}));

    const json = testingLib.toJSON();
    expect(json).toBeTruthy();
  });

  describe('Index', () => {
    it('should render loading status', () => {
      testingLib = render(Component({props: {loading: true}}));

      expect(LoadingIndicator).toBeDefined();
      expect(testingLib.getByTestId('loading-view')).toBeTruthy();
    });

    it('should render default disabled style when disabled', () => {
      testingLib = render(Component({props: {disabled: true}}));

      const loadingView = testingLib.getByTestId('button-container');
      expect(loadingView).toHaveStyle({borderTopColor: light.text.disabled});
    });
  });

  describe('Disabled', () => {
    it('should render disabled status', () => {
      testingLib = render(Component({props: {disabled: true}}));

      const json = testingLib.toJSON();
      expect(json).toBeTruthy();
    });

    it('should render disabled status with disabled style', () => {
      testingLib = render(
        Component({
          props: {
            disabled: true,
            styles: {
              disabled: css`
                background-color: yellow;
              `,
            },
          },
        }),
      );

      const button = testingLib.getByTestId('button-container');
      expect(button).toHaveStyle({backgroundColor: 'yellow'});
    });

    it('should render container', () => {
      testingLib = render(
        Component({
          props: {
            styles: {
              container: css`
                background-color: blue;
              `,
            },
          },
        }),
      );

      const button = testingLib.getByTestId('button-container');
      expect(button).toHaveStyle({backgroundColor: 'blue'});
    });
  });

  describe('TextButton', () => {
    it('renders text button', () => {
      testingLib = render(
        Component({
          props: {
            testID: 'text-button',
            type: 'text',
          },
        }),
      );

      const json = testingLib.toJSON();
      expect(json).toBeTruthy();
    });
  });

  it('should render start and end elements', () => {
    testingLib = render(
      Component({props: {startElement: <Text />, endElement: <Text />}}),
    );

    const button = testingLib.getByTestId('button-container');

    expect(button.findAllByType(Text)).toHaveLength(3);
  });

  describe('[Button] Interaction', () => {
    let cnt = 1;

    it('should simulate onPress', () => {
      testingLib = render(
        Component({
          props: {
            onPress: () => cnt++,
          },
        }),
      );

      const button = testingLib.getByTestId('button-container');

      fireEvent.press(button);

      expect(cnt).toBe(2);
    });
  });

  describe('[Button] color', () => {
    it('should renders primary color', () => {
      testingLib = render(Component({props: {color: 'primary'}}));

      const button = testingLib.getByTestId('button-container');
      expect(button).toHaveStyle({backgroundColor: light.button.primary.bg});
    });

    it('should renders secondary color', () => {
      testingLib = render(Component({props: {color: 'secondary'}}));

      const button = testingLib.getByTestId('button-container');
      expect(button).toHaveStyle({backgroundColor: light.button.secondary.bg});
    });

    it('should renders success color', () => {
      testingLib = render(Component({props: {color: 'success'}}));

      const button = testingLib.getByTestId('button-container');
      expect(button).toHaveStyle({backgroundColor: light.button.success.bg});
    });

    it('should renders warning color', () => {
      testingLib = render(Component({props: {color: 'warning'}}));

      const button = testingLib.getByTestId('button-container');
      expect(button).toHaveStyle({backgroundColor: light.button.warning.bg});
    });

    it('renders danger color', () => {
      testingLib = render(Component({props: {color: 'danger'}}));

      const button = testingLib.getByTestId('button-container');
      expect(button).toHaveStyle({backgroundColor: light.button.danger.bg});
    });

    it('should renders info color', () => {
      testingLib = render(Component({props: {color: 'info'}}));

      const button = testingLib.getByTestId('button-container');
      expect(button).toHaveStyle({backgroundColor: light.button.info.bg});
    });

    it('should renders light color', () => {
      testingLib = render(Component({props: {color: 'light'}}));

      const button = testingLib.getByTestId('button-container');
      expect(button).toHaveStyle({backgroundColor: light.button.light.bg});
    });
  });

  describe('[Button] - dark mode', () => {
    it('should render button', () => {
      testingLib = render(Component({themeType: 'dark'}));

      const button = testingLib.getByTestId('button-container');
      expect(button).toHaveStyle({backgroundColor: dark.button.primary.bg});
    });

    it('should renders danger color', () => {
      testingLib = render(
        Component({
          props: {
            text: 'my-button',
            color: 'danger',
          },
          themeType: 'dark',
        }),
      );

      const button = testingLib.getByTestId('button-container');
      expect(button).toHaveStyle({backgroundColor: dark.button.danger.bg});
    });
  });

  describe('[Button] outlined', () => {
    it('should render [type=outlined] button', () => {
      testingLib = render(
        Component({
          props: {type: 'outlined'},
        }),
      );

      const button = testingLib.getByTestId('button-container');
      expect(button).toHaveStyle({backgroundColor: light.bg.basic});
    });

    it('should render [type=outlined] button with [color=primary]', () => {
      testingLib = render(
        Component({
          props: {
            type: 'outlined',
            color: 'primary',
          },
        }),
      );

      const button = testingLib.getByTestId('button-container');
      expect(button).toHaveStyle({
        backgroundColor: light.bg.basic,
        borderBottomColor: light.button.primary.bg,
      });
    });

    it('should render [type=outlined] button with [color=secondary]', () => {
      testingLib = render(
        Component({
          props: {
            type: 'outlined',
            color: 'secondary',
          },
        }),
      );

      const button = testingLib.getByTestId('button-container');
      expect(button).toHaveStyle({
        backgroundColor: light.bg.basic,
        borderBottomColor: light.button.secondary.bg,
      });
    });

    it('should render [type=outlined] button with [color=success]', () => {
      testingLib = render(
        Component({
          props: {
            type: 'outlined',
            color: 'success',
          },
        }),
      );

      const button = testingLib.getByTestId('button-container');
      expect(button.props.type).toEqual('outlined');

      expect(button).toHaveStyle({
        backgroundColor: light.bg.basic,
        borderBottomColor: light.button.success.bg,
      });
    });

    it('should render [type=outlined] button with [color=warning]', () => {
      testingLib = render(
        Component({
          props: {
            type: 'outlined',
            color: 'warning',
          },
        }),
      );

      const button = testingLib.getByTestId('button-container');

      expect(button.props.type).toEqual('outlined');

      expect(button).toHaveStyle({
        backgroundColor: light.bg.basic,
        borderBottomColor: light.button.warning.bg,
      });
    });

    it('should render [type=outlined] button with [color=danger]', () => {
      testingLib = render(
        Component({
          props: {
            type: 'outlined',
            color: 'danger',
          },
        }),
      );

      const button = testingLib.getByTestId('button-container');
      expect(button.props.type).toEqual('outlined');

      expect(button).toHaveStyle({
        backgroundColor: light.bg.basic,
        borderBottomColor: light.button.danger.bg,
      });
    });

    it('should render [type=outlined] button with [color=info]', () => {
      testingLib = render(
        Component({
          props: {
            type: 'outlined',
            color: 'info',
          },
        }),
      );

      const button = testingLib.getByTestId('button-container');
      expect(button.props.type).toEqual('outlined');

      expect(button).toHaveStyle({
        backgroundColor: light.bg.basic,
        borderBottomColor: light.button.info.bg,
      });
    });

    it('should render [type=outlined] button with [color=light]', () => {
      testingLib = render(
        Component({
          props: {
            type: 'outlined',
            color: 'light',
          },
        }),
      );

      const button = testingLib.getByTestId('button-container');
      expect(button.props.type).toEqual('outlined');

      expect(button).toHaveStyle({
        backgroundColor: light.bg.basic,
        borderBottomColor: light.button.light.bg,
      });
    });

    it('should render [type=outlined] `disabled` button', () => {
      testingLib = render(
        Component({
          props: {
            type: 'outlined',
            disabled: true,
            text: 'my-button',
          },
        }),
      );

      const button = testingLib.getByTestId('button-container');
      expect(button.props.type).toEqual('outlined');

      const text = testingLib.getByText('my-button');
      expect(text).toHaveStyle({color: light.button.disabled.text});
    });
  });

  describe('Outlined - dark mode', () => {
    it('should render [type=outlined] [color=primary] button', () => {
      testingLib = render(
        Component({
          props: {
            type: 'outlined',
            color: 'primary',
          },
          themeType: 'dark',
        }),
      );

      const button = testingLib.getByTestId('button-container');
      expect(button).toHaveStyle({borderBottomColor: dark.button.primary.bg});
    });

    it('should render [type=outlined] [color=secondary] button', () => {
      testingLib = render(
        Component({
          props: {
            type: 'outlined',
            color: 'secondary',
          },
          themeType: 'dark',
        }),
      );

      const button = testingLib.getByTestId('button-container');
      expect(button).toHaveStyle({borderBottomColor: dark.button.secondary.bg});
    });

    it('should render [type=outlined] [color=success] button', () => {
      testingLib = render(
        Component({
          props: {
            type: 'outlined',
            color: 'success',
          },
          themeType: 'dark',
        }),
      );

      const button = testingLib.getByTestId('button-container');
      expect(button).toHaveStyle({borderBottomColor: dark.button.success.bg});
    });

    it('should render [type=outlined] [color=warning] button', () => {
      testingLib = render(
        Component({
          props: {
            type: 'outlined',
            color: 'warning',
          },
          themeType: 'dark',
        }),
      );

      const button = testingLib.getByTestId('button-container');
      expect(button).toHaveStyle({borderBottomColor: dark.button.warning.bg});
    });

    it('should render [type=outlined] [color=danger] button', () => {
      testingLib = render(
        Component({
          props: {
            type: 'outlined',
            color: 'danger',
          },
          themeType: 'dark',
        }),
      );

      const button = testingLib.getByTestId('button-container');
      expect(button).toHaveStyle({borderBottomColor: dark.button.danger.bg});
    });

    it('should [type=outlined] [color=light] button', () => {
      testingLib = render(
        Component({
          props: {
            type: 'outlined',
            color: 'light',
          },
          themeType: 'dark',
        }),
      );

      const button = testingLib.getByTestId('button-container');
      expect(button).toHaveStyle({borderBottomColor: dark.button.light.bg});
    });

    it('should render [type=outlined] [color=info] button', () => {
      testingLib = render(
        Component({
          props: {
            type: 'outlined',
            color: 'info',
          },
          themeType: 'dark',
        }),
      );

      const button = testingLib.getByTestId('button-container');
      expect(button).toHaveStyle({borderBottomColor: dark.button.info.bg});
    });

    it('should render [type=outlined] `disabled` button', () => {
      testingLib = render(
        Component({
          props: {
            type: 'outlined',
            disabled: true,
            text: 'my-button',
          },
          themeType: 'dark',
        }),
      );

      const button = testingLib.getByTestId('button-container');
      expect(button.props.type).toEqual('outlined');

      const text = testingLib.getByText('my-button');
      expect(text).toHaveStyle({color: dark.button.disabled.text});
    });
  });

  describe('[Button] sizes', () => {
    it('should render [large] button', () => {
      testingLib = render(
        Component({
          props: {size: 'large'},
        }),
      );

      const button = testingLib.getByTestId('button-container');
      expect(button.props.size).toEqual('large');
    });

    it('should render [small] button', () => {
      testingLib = render(
        Component({
          props: {
            size: 'small',
            color: 'danger',
          },
          themeType: 'dark',
        }),
      );

      const button = testingLib.getByTestId('button-container');
      expect(button.props.size).toEqual('small');
    });
  });

  describe('[Button] borderRadius', () => {
    it('should render with given borderRadius', () => {
      const borderRadius = 10;

      testingLib = render(
        Component({
          props: {
            styles: {
              container: {
                borderTopRightRadius: borderRadius,
              },
            },
          },
        }),
      );

      const button = testingLib.getByTestId('button-container');
      expect(button).toHaveStyle({borderTopRightRadius: borderRadius});
    });
  });
});
