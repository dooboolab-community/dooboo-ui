import type {ProgressbarProps} from '../../main';
import {Progressbar} from '../../main';

import React from 'react';
import type {ReactElement} from 'react';
import type {RenderAPI} from '@testing-library/react-native';
import {createComponent} from '../../test/testUtils';
import {light} from '@dooboo-ui/theme';
import {render} from '@testing-library/react-native';

let testingLib: RenderAPI;

const Component = (props?: ProgressbarProps): ReactElement =>
  createComponent(<Progressbar {...props} />);

describe('[Progressbar]', () => {
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

    const progressbar = testingLib.getByTestId('progressbar-background');
    expect(progressbar.props.style[0].backgroundColor).toEqual(light.light);
  });

  it('should render text', () => {
    testingLib = render(
      Component({
        value: 50,
      }),
    );

    const progressbar = testingLib.getByTestId('progressbar-text');
    expect(progressbar.props.style[0].color).toEqual(light.text);
  });

  describe('type', () => {
    it('should render type==="info"', () => {
      testingLib = render(
        Component({
          type: 'info',
          value: 25,
        }),
      );

      const progressbar = testingLib.getByTestId('progressbar-main');
      expect(progressbar.props.style[0].backgroundColor).toEqual(light.info);
    });

    it('should render type==="success"', () => {
      testingLib = render(
        Component({
          type: 'success',
          value: 50,
        }),
      );

      const progressbar = testingLib.getByTestId('progressbar-main');
      expect(progressbar.props.style[0].backgroundColor).toEqual(light.success);
    });

    it('should render type==="danger"', () => {
      testingLib = render(
        Component({
          type: 'danger',
          value: 75,
        }),
      );

      const progressbar = testingLib.getByTestId('progressbar-main');
      expect(progressbar.props.style[0].backgroundColor).toEqual(light.danger);
    });

    it('should render type==="warning"', () => {
      testingLib = render(
        Component({
          type: 'warning',
          value: 100,
        }),
      );

      const progressbar = testingLib.getByTestId('progressbar-main');
      expect(progressbar.props.style[0].backgroundColor).toEqual(light.warning);
    });
  });
});
