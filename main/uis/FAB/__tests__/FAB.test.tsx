import type {ReactElement} from 'react';
import React from 'react';
import {View} from 'react-native';
import {fireEvent, render} from '@testing-library/react-native';

import {createComponent} from '../../../../test/testUtils';
import type {FABItem, FABProps} from '../../..';
import {FAB} from '../../..';

const Component = (props: FABProps<FABItem>): ReactElement =>
  createComponent(<FAB {...props} />);

describe('[FAB]', () => {
  it('should render', async () => {
    let count = 0;
    let item: FABItem = {icon: 'Android', id: 'item1'};
    // let resItem: FABItem;

    const {getByTestId} = render(
      Component({
        items: [item],
        isActive: true,
        onPressItem: () => {
          count += 1;
          // resItem = fab;
        },
        onPressFAB: () => {},
      }),
    );

    expect(count).toBe(0);
    fireEvent.press(getByTestId('item1'));
    expect(count).toBe(1);
    // expect(resItem.id).toBe(item.id);
  });

  it('should render custom FAB', async () => {
    const testingLib = render(
      Component({
        items: [{icon: 'Apple', id: 'item1'}],
        isActive: true,
        onPressItem: () => {},
        onPressFAB: () => {},
        renderFAB: () => <View />,
        renderFABItem: () => <View />,
      }),
    );

    const json = testingLib.toJSON();

    expect(json).toBeTruthy();
  });
});
