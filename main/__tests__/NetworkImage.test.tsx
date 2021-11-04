import * as React from 'react';

import {createComponent, createTestProps} from '../../test/testUtils';

import {NetworkImage} from '../../main';
import {View} from 'react-native';
import renderer from 'react-test-renderer';

let props: any;
let component: React.ReactElement;

describe('[NetworkImage] render', () => {
  beforeEach(() => {
    props = createTestProps();

    component = createComponent(<NetworkImage {...props} />);
  });

  it('should render without crashing', () => {
    const rendered = renderer.create(component).toJSON();

    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });
});
