import React from 'react';
import {View} from 'react-native';
import {ThemeProvider} from '@dooboo-ui/theme';
import type {RenderAPI} from '@testing-library/react-native';
import {render} from '@testing-library/react-native';

import {createComponent} from '../../../../test/testUtils';
import {Typography, TypographyInverted} from '..';

let testingLib: RenderAPI;

const Component = (): JSX.Element =>
  createComponent(
    <View>
      <Typography.Title />,
      <Typography.Heading1 />,
      <Typography.Heading2 />,
      <Typography.Heading3 />,
      <Typography.Body1 />,
      <Typography.Body2 />,
      <TypographyInverted.Title />
      <TypographyInverted.Heading1 />
      <TypographyInverted.Heading2 />
      <TypographyInverted.Heading3 />
      <TypographyInverted.Body1 />
      <TypographyInverted.Body2 />
    </View>,
  );

describe('[Typography]', () => {
  it('should render without crashing', () => {
    testingLib = render(<Component />);

    const json = testingLib.toJSON();

    expect(json).toBeTruthy();
  });

  it('should render default theme', () => {
    testingLib = render(Component());

    const json = testingLib.toJSON();

    expect(json).toBeTruthy();
  });

  it('should render [dark] mode', () => {
    testingLib = render(
      <ThemeProvider initialThemeType="dark">
        <Component />
      </ThemeProvider>,
    );

    const json = testingLib.toJSON();

    expect(json).toBeTruthy();
  });
});
