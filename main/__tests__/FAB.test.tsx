import {FAB, FABItem, FABProps} from '../../main';
import {fireEvent, render, waitFor} from '@testing-library/react-native';

import {ReactElement} from 'react';
import {createComponent} from '../../test/testUtils';

const Component = (props: FABProps<FABItem>): ReactElement =>
  createComponent(<FAB {...props} />);

describe('[FAB]', () => {
  it('should render without crashing', () => {
    const testingLib = render(
      Component({
        FABList: [{icon: 'bell-solid', id: 'item1'}],
        size: 'large',
        onPressFABItem: () => {},
      }),
    );

    const json = testingLib.toJSON();

    expect(json).toBeTruthy();
  });

  it('test mainFAB onPress callback', async () => {
    let count = 0;
    let item1: FABItem = {icon: 'bell-solid', id: 'item1'};
    let resItem: FABItem;

    const testingLib = render(
      Component({
        FABList: [item1],
        size: 'large',
        onPressFABItem: (item1) => {
          count += 1;
          resItem = item1;
        },
      }),
    );

    expect(count).toEqual(0);
    fireEvent.press(testingLib.getByTestId('item1'));
    expect(count).toEqual(1);
    expect(resItem.id).toEqual(item1.id);
  });
});
