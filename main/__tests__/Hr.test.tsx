import {Hr, ThemeProvider} from '../../main';

import React from 'react';
import type {ReactElement} from 'react';
import type {RenderAPI} from '@testing-library/react-native';
import {View} from 'react-native';
import {createComponent} from '../../test/testUtils';
import {render} from '@testing-library/react-native';

let testingLib: RenderAPI;

const Component = (): ReactElement =>
  createComponent(
    <View>
      <Hr />
    </View>,
  );

describe('[Hr]', () => {
  it('should render without crashing', () => {
    testingLib = render(Component());

    const json = testingLib.toJSON();

    expect(json).toBeTruthy();
  });
});
