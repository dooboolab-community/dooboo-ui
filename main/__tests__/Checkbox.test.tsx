import {Checkbox} from '../../main';
import type {CheckboxProps} from '../../main';
import React from 'react';
import type {ReactElement} from 'react';
import type {RenderAPI} from '@testing-library/react-native';
import {View} from 'react-native';
import {createComponent} from '../../test/testUtils';
import {light} from '@dooboo-ui/theme';
import {render} from '@testing-library/react-native';

let testingLib: RenderAPI;

const Component = (props?: CheckboxProps): ReactElement =>
  createComponent(<Checkbox {...props} />);

describe('[Checkbox]', () => {
  it('should render without crashing', () => {
    testingLib = render(Component());

    const json = testingLib.toJSON();

    expect(json).toBeTruthy();
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

  it('should render `startElement`', () => {
    testingLib = render(
      Component({
        startElement: <View />,
      }),
    );

    const json = testingLib.toJSON();

    expect(json).toBeTruthy();
  });

  it('should render `endElement`', () => {
    testingLib = render(
      Component({
        endElement: <View />,
      }),
    );

    const json = testingLib.toJSON();

    expect(json).toBeTruthy();
  });

  describe('type', () => {
    it('should render type==="info"', () => {
      testingLib = render(
        Component({
          type: 'info',
          checked: true,
        }),
      );

      const checkbox = testingLib.getByTestId('doobooui-checkbox');

      expect(checkbox.props.style.borderTopColor).toEqual(light.role.info);
    });

    it('should render type==="primary"', () => {
      testingLib = render(
        Component({
          type: 'primary',
          checked: true,
        }),
      );

      const checkbox = testingLib.getByTestId('doobooui-checkbox');

      expect(checkbox.props.style.borderTopColor).toEqual(light.role.primary);
    });

    it('should render type==="secondary"', () => {
      testingLib = render(
        Component({
          type: 'secondary',
          checked: true,
        }),
      );

      const checkbox = testingLib.getByTestId('doobooui-checkbox');

      expect(checkbox.props.style.borderTopColor).toEqual(light.role.secondary);
    });

    it('should render type==="success"', () => {
      testingLib = render(
        Component({
          type: 'success',
          checked: true,
        }),
      );

      const checkbox = testingLib.getByTestId('doobooui-checkbox');

      expect(checkbox.props.style.borderTopColor).toEqual(light.role.success);
    });

    it('should render type==="danger"', () => {
      testingLib = render(
        Component({
          type: 'danger',
          checked: true,
        }),
      );

      const checkbox = testingLib.getByTestId('doobooui-checkbox');

      expect(checkbox.props.style.borderTopColor).toEqual(light.role.danger);
    });

    it('should render type==="warning"', () => {
      testingLib = render(
        Component({
          type: 'warning',
          checked: true,
        }),
      );

      const checkbox = testingLib.getByTestId('doobooui-checkbox');

      expect(checkbox.props.style.borderTopColor).toEqual(light.role.warning);
    });
  });
});
