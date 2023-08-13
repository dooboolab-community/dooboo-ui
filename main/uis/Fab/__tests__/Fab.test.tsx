import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import {createComponent} from '../../../../test/testUtils';
import type {IconName} from '../../..';
import {Fab} from '../../..';

const Component = (props): JSX.Element => createComponent(<Fab {...props} />);

describe('[Fab]', () => {
  it('should render', async () => {
    let count = 0;
    let items: IconName[] = ['AndroidLogo', 'AppleLogo'];
    // let resItem: FabItem;

    const {getByTestId} = render(
      Component({
        icons: items,
        isActive: true,
        onPressItem: () => {
          count += 1;
          // resItem = fab;
        },
        onPressFab: () => {},
      }),
    );

    expect(count).toBe(0);
    fireEvent.press(getByTestId('AndroidLogo'));
    expect(count).toBe(1);
    // expect(resItem.id).toBe(item.id);
  });

  it('should render custom Fab', async () => {
    const testingLib = render(
      Component({
        icons: ['AppleLogo', 'AndroidLogo'],
        isActive: true,
        onPressItem: () => {},
        onPressFab: () => {},
      }),
    );

    const json = testingLib.toJSON();

    expect(json).toBeTruthy();
  });
});
