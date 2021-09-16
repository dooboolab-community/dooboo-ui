import {FAB, FABItem, FABProps} from '../../main';
import React, {ReactElement} from 'react';
import {RenderAPI, fireEvent, render} from '@testing-library/react-native';

import {IconButton} from '../IconButton';
import {View} from 'react-native';
import {createComponent} from '../../test/testUtils';

const Component = (props: FABProps<FABItem>): ReactElement =>
  createComponent(<FAB {...props} />);

describe('[FAB]', () => {
  it('should render', async () => {
    let count = 0;
    let item: FABItem = {icon: 'bell-solid', id: 'item1'};
    let resItem: FABItem;

    const {getByTestId} = render(
      Component({
        fabItems: [item],
        isActive: true,
        size: 'large',
        onPressFabItem: (item) => {
          count += 1;
          resItem = item;
        },
        onPressFAB: () => {},
      }),
    );

    expect(count).toBe(0);
    fireEvent.press(getByTestId('item1'));
    expect(count).toBe(1);
    expect(resItem.id).toBe(item.id);
  });

  it('should render customFAB', async () => {
    const testingLib = render(
      Component({
        fabItems: [{icon: 'bell-solid', id: 'item1'}],
        isActive: true,
        size: 'large',
        onPressFabItem: (item1) => {},
        onPressFAB: () => {},
        renderFAB: () => <View />,
        renderFabItem: (item, idx) => <View />,
      }),
    );

    const json = testingLib.toJSON();

    expect(json).toBeTruthy();
  });
});
