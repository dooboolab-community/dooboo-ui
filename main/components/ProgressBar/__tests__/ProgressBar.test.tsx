import {ProgressBar} from '../../..';
import type {ProgressBarProps} from '../../..';
import React from 'react';
import type {ReactElement} from 'react';
import type {RenderAPI} from '@testing-library/react-native';
import {createComponent} from '../../../../test/testUtils';
import {light} from '@dooboo-ui/theme';
import {render} from '@testing-library/react-native';

let testingLib: RenderAPI;

const Component = (props?: ProgressBarProps): ReactElement =>
  createComponent(<ProgressBar value={0} {...props} />);

describe('[ProgressBar]', () => {
  it('should render without crashing', () => {
    testingLib = render(Component());

    const json = testingLib.toJSON();

    expect(json).toBeTruthy();
  });

  it('should render background-color', () => {
    testingLib = render(
      Component({
        value: 50,
      }),
    );

    const ProgressLine = testingLib.getByTestId('progress-line-background');
    expect(ProgressLine.props.style[0].backgroundColor).toEqual(light.bg.paper);
  });

  it('should render text', () => {
    testingLib = render(
      Component({
        value: 50,
      }),
    );

    const ProgressLine = testingLib.getByTestId('progress-line-text');
    expect(ProgressLine.props.style[0].color).toEqual(light.text.basic);
  });

  describe('type', () => {
    it('should render type==="info"', () => {
      testingLib = render(
        Component({
          type: 'info',
          value: 25,
        }),
      );

      const ProgressLine = testingLib.getByTestId('progress-line-main');
      expect(ProgressLine.props.style[0].backgroundColor).toEqual(
        light.role.info,
      );
    });

    it('should render type==="success"', () => {
      testingLib = render(
        Component({
          type: 'success',
          value: 50,
        }),
      );

      const ProgressLine = testingLib.getByTestId('progress-line-main');
      expect(ProgressLine.props.style[0].backgroundColor).toEqual(
        light.role.success,
      );
    });

    it('should render type==="danger"', () => {
      testingLib = render(
        Component({
          type: 'danger',
          value: 75,
        }),
      );

      const ProgressLine = testingLib.getByTestId('progress-line-main');
      expect(ProgressLine.props.style[0].backgroundColor).toEqual(
        light.role.danger,
      );
    });

    it('should render type==="warning"', () => {
      testingLib = render(
        Component({
          type: 'warning',
          value: 100,
        }),
      );

      const ProgressLine = testingLib.getByTestId('progress-line-main');
      expect(ProgressLine.props.style[0].backgroundColor).toEqual(
        light.role.warning,
      );
    });
  });
});
