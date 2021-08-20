import React, {ReactElement} from 'react';
import {RenderAPI, fireEvent, render} from '@testing-library/react-native';
import {createComponent, createTestProps} from '../../test/testUtils';

import {SelectBox} from '../SelectBox';

let props: any;
let component: ReactElement;
let testingLib: RenderAPI;

const data = ['item1', 'item2', 'item3', 'item4'];

describe('[SelectBox] render test', () => {
  it('should render without crashing', () => {
    props = createTestProps({data});
    component = createComponent(<SelectBox {...props} />);
    testingLib = render(component);

    const json = testingLib.toJSON();

    expect(json).toMatchSnapshot();
  });

  it('should rightElement rotate when isRotate is true', () => {
    props = createTestProps({
      isRotate: true,
      data,
    });

    component = createComponent(<SelectBox {...props} />);

    testingLib = render(component);

    const json = testingLib.toJSON();

    expect(json).toMatchSnapshot();
  });

  it('should render first value of data at first', () => {
    props = createTestProps({data});

    component = createComponent(<SelectBox {...props} />);

    testingLib = render(component);

    const selectedValue = testingLib.getByTestId('selected-value');

    expect(selectedValue.props.children).toEqual('item1');
  });

  it('should adjust duration of animation depends on rotateDuration props value', () => {
    props = createTestProps({
      rotateDuration: 500,
      data,
    });

    component = createComponent(<SelectBox {...props} />);
    testingLib = render(component);

    const json = testingLib.toJSON();

    expect(json).toMatchSnapshot();
  });
});
