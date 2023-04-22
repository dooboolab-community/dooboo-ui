import * as React from 'react';
import {View} from 'react-native';
import renderer from 'react-test-renderer';

import {createComponent, createTestProps} from '../../../../test/testUtils';
import {LoadingIndicator} from '../../..';

let props: any;
let component: React.ReactElement;

describe('[LoadingIndicator] render', () => {
  beforeEach(() => {
    props = createTestProps();

    component = createComponent(<LoadingIndicator {...props} />);
  });

  it('should render without crashing', () => {
    const rendered = renderer.create(component).toJSON();

    expect(rendered).toBeTruthy();
  });

  it('should render [customElement]', () => {
    props = createTestProps({
      renderCustomElement: (): React.ReactElement => <View />,
    });

    component = createComponent(<LoadingIndicator {...props} />);

    const rendered = renderer.create(component).toJSON();

    expect(rendered).toBeTruthy();
  });

  it('should render with [imgSource]', () => {
    props = createTestProps({
      imgSource: 'http',
    });

    component = createComponent(<LoadingIndicator {...props} />);

    const rendered = renderer.create(component).toJSON();

    expect(rendered).toBeTruthy();
  });

  it('should render with size=small', () => {
    props = createTestProps({
      imgSource: 'http',
      size: 'small',
    });

    component = createComponent(<LoadingIndicator {...props} />);

    const rendered = renderer.create(component).toJSON();

    expect(rendered).toBeTruthy();
  });

  it('should render with size=undefined', () => {
    props = createTestProps({
      imgSource: 'http',
      size: undefined,
    });

    component = createComponent(<LoadingIndicator {...props} />);

    const rendered = renderer.create(component).toJSON();

    expect(rendered).toBeTruthy();
  });

  it('should render with !size with none string imgSource', () => {
    props = createTestProps({
      imgSource: 10,
      size: null,
    });

    component = createComponent(<LoadingIndicator {...props} />);

    const rendered = renderer.create(component).toJSON();

    expect(rendered).toBeTruthy();
  });

  it('renders with !size with string imgSource', () => {
    props = createTestProps({
      imgSource: 'test',
      size: null,
    });

    component = createComponent(<LoadingIndicator {...props} />);

    const rendered = renderer.create(component).toJSON();

    expect(rendered).toBeTruthy();
  });

  it('should render with size=test', () => {
    props = createTestProps({
      imgSource: 10,
      size: 'test',
    });

    component = createComponent(<LoadingIndicator {...props} />);

    const rendered = renderer.create(component).toJSON();

    expect(rendered).toBeTruthy();
  });

  it('renders with [imgSource]', () => {
    props = createTestProps({
      imgSource: 'http',
    });

    component = createComponent(<LoadingIndicator {...props} />);

    const rendered = renderer.create(component).toJSON();

    expect(rendered).toBeTruthy();
  });

  it('renders with size=small', () => {
    props = createTestProps({
      imgSource: 'http',
      size: 'small',
    });

    component = createComponent(<LoadingIndicator {...props} />);

    const rendered = renderer.create(component).toJSON();

    expect(rendered).toBeTruthy();
  });

  it('renders with size=undefined', () => {
    props = createTestProps({
      imgSource: 'http',
      size: undefined,
    });

    component = createComponent(<LoadingIndicator {...props} />);

    const rendered = renderer.create(component).toJSON();

    expect(rendered).toBeTruthy();
  });

  it('renders with !size with none string imgSource', () => {
    props = createTestProps({
      imgSource: 10,
      size: null,
    });

    component = createComponent(<LoadingIndicator {...props} />);

    const rendered = renderer.create(component).toJSON();

    expect(rendered).toBeTruthy();
  });

  it('renders with size=test', () => {
    props = createTestProps({
      imgSource: 10,
      size: 'test',
    });

    component = createComponent(<LoadingIndicator {...props} />);

    const rendered = renderer.create(component).toJSON();

    expect(rendered).toBeTruthy();
  });
});
