import {Icon} from '../../..';
import React from 'react';
import type {ReactElement} from 'react';
import type {RenderAPI} from '@testing-library/react-native';
import {createComponent} from '../../../../test/testUtils';
import {render} from '@testing-library/react-native';

let testingLib: RenderAPI;

const Component = (): ReactElement =>
  createComponent(<Icon name="account-light" />);

describe('[Icon]', () => {
  it('should render without crashing', () => {
    testingLib = render(Component());

    const json = testingLib.toJSON();

    expect(json).toBeTruthy();
  });
});
