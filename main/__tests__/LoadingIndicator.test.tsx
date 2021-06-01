import * as React from 'react';

import {createComponent, createTestProps} from '../../test/testUtils';

import {LoadingIndicator} from '../../main';
import {View} from 'react-native';
import renderer from 'react-test-renderer';

let props: any;
let component: React.ReactElement;

describe('[LoadingIndicator] render', () => {
  beforeEach(() => {
    props = createTestProps();

    component = createComponent(<LoadingIndicator {...props} />);
  });

  it('should render without crashing', () => {
    const rendered = renderer.create(component).toJSON();

    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  it('should render [customElement]', () => {
    props = createTestProps({
      customElement: (): React.ReactElement => <View />,
    });

    component = <LoadingIndicator {...props} />;

    const rendered = renderer.create(component).toJSON();

    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  it('should render with [imgSource]', () => {
    props = createTestProps({
      imgSource: 'http',
    });

    component = <LoadingIndicator {...props} />;

    const rendered = renderer.create(component).toJSON();

    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  it('should render with size=small', () => {
    props = createTestProps({
      imgSource: 'http',
      size: 'small',
    });

    component = <LoadingIndicator {...props} />;

    const rendered = renderer.create(component).toJSON();

    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  it('should render with size=undefined', () => {
    props = createTestProps({
      imgSource: 'http',
      size: undefined,
    });

    component = <LoadingIndicator {...props} />;

    const rendered = renderer.create(component).toJSON();

    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  it('should render with !size with none string imgSource', () => {
    props = createTestProps({
      imgSource: 10,
      size: null,
    });

    component = <LoadingIndicator {...props} />;

    const rendered = renderer.create(component).toJSON();

    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  it('renders with !size with string imgSource', () => {
    props = createTestProps({
      imgSource: 'test',
      size: null,
    });

    component = <LoadingIndicator {...props} />;

    const rendered = renderer.create(component).toJSON();

    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  it('should render with size=test', () => {
    props = createTestProps({
      imgSource: 10,
      size: 'test',
    });

    component = <LoadingIndicator {...props} />;

    const rendered = renderer.create(component).toJSON();

    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  it('renders with [imgSource]', () => {
    props = createTestProps({
      imgSource: 'http',
    });

    component = <LoadingIndicator {...props} />;

    const rendered = renderer.create(component).toJSON();

    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  it('renders with size=small', () => {
    props = createTestProps({
      imgSource: 'http',
      size: 'small',
    });

    component = <LoadingIndicator {...props} />;

    const rendered = renderer.create(component).toJSON();

    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  it('renders with size=undefined', () => {
    props = createTestProps({
      imgSource: 'http',
      size: undefined,
    });

    component = <LoadingIndicator {...props} />;

    const rendered = renderer.create(component).toJSON();

    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  it('renders with !size with none string imgSource', () => {
    props = createTestProps({
      imgSource: 10,
      size: null,
    });

    component = <LoadingIndicator {...props} />;

    const rendered = renderer.create(component).toJSON();

    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  it('renders with size=test', () => {
    props = createTestProps({
      imgSource: 10,
      size: 'test',
    });

    component = <LoadingIndicator {...props} />;

    const rendered = renderer.create(component).toJSON();

    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });
});
