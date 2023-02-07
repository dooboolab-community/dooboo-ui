import React from 'react';
import type {ReactElement} from 'react';
import type {RenderAPI} from '@testing-library/react-native';
import StatusBarBrightness from '..';
import {ThemeProvider} from '@dooboo-ui/theme';
import {View} from 'react-native';
import {createComponent} from '../../../../test/testUtils';
import {render} from '@testing-library/react-native';

let testingLib: RenderAPI;

const Component = (): ReactElement =>
  createComponent(
    <View>
      <StatusBarBrightness />
    </View>,
  );

describe('[StatusBarBrightness]', () => {
  it('should render without crashing', () => {
    testingLib = render(Component());

    const json = testingLib.toJSON();

    expect(json).toBeTruthy();
  });

  it('should render [dark] mode', () => {
    testingLib = render(
      <ThemeProvider initialThemeType="dark">
        <View>
          <StatusBarBrightness />
        </View>
      </ThemeProvider>,
    );

    const json = testingLib.toJSON();

    expect(json).toBeTruthy();
  });
});
