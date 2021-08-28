import {FAB, FABItem, FABProps} from '../../main';
import {fireEvent, render} from '@testing-library/react-native';

import {ReactElement} from 'react';
import {createComponent} from '../../test/testUtils';

const Component = (props: FABProps<FABItem>): ReactElement =>
  createComponent(<FAB {...props} />);

describe('[FAB]', () => {
  it('test mainFAB onPress callback', async () => {
    let count = 0;
    let item1: FABItem = {icon: 'bell-solid', id: 'item1'};
    let resItem: FABItem;

    const {getByTestId} = render(
      Component({
        ButtonList: [item1],
        size: 'large',
        onPressListItem: (item1) => {
          count += 1;
          resItem = item1;
        },
      }),
    );

    expect(count).toBe(0);
    fireEvent.press(getByTestId('item1'));
    expect(count).toBe(1);
    expect(resItem.id).toBe(item1.id);
  });
});
