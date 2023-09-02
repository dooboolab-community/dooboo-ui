import * as React from 'react';
import renderer from 'react-test-renderer';

import {createComponent, createTestProps} from '../../../../test/testUtils';
import {NetworkImage} from '..';

// import useColorScheme from '@dooboo-ui/theme/useColorScheme';

let props: any;
let component: JSX.Element;

describe('[NetworkImage] render', () => {
  beforeEach(() => {
    props = createTestProps();

    component = createComponent(<NetworkImage {...props} />);
  });

  it('should render without crashing', () => {
    const rendered = renderer.create(component).toJSON();
    // jest
    //   .spyOn(Appearance, 'addChangeListener')
    //   .mockImplementation(() => jest.fn());

    // jest
    //   .spyOn(Appearance, 'removeChangeListener')
    //   .mockImplementation(() => jest.fn());

    expect(rendered).toBeTruthy();
  });
});
