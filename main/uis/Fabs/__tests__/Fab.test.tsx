import type {ReactElement} from 'react';
import React from 'react';
import {View} from 'react-native';
import {fireEvent, render} from '@testing-library/react-native';

import {createComponent} from '../../../../test/testUtils';
import type {IconName} from '../../..';
import {Fab} from '../../..';

const Component = (props): ReactElement => createComponent(<Fab {...props} />);

describe('[Fab]', () => {
  it('should render', async () => {
    let count = 0;
    let item: IconName[] = ['AndroidLogo', 'AppleLogo'];
    // let resItem: FabItem;

    const {getByTestId} = render(
      Component({
        items: [item],
        isActive: true,
        onPressItem: () => {
          count += 1;
          // resItem = fab;
        },
        onPressFab: () => {},
      }),
    );

    expect(count).toBe(0);
    fireEvent.press(getByTestId('item1'));
    expect(count).toBe(1);
    // expect(resItem.id).toBe(item.id);
  });

  it('should render custom Fab', async () => {
    const testingLib = render(
      Component({
        items: [{icon: 'Apple', id: 'item1'}],
        isActive: true,
        onPressItem: () => {},
        onPressFab: () => {},
        renderFab: () => <View />,
        renderFabItem: () => <View />,
      }),
    );

    const json = testingLib.toJSON();

    expect(json).toBeTruthy();
  });
});
