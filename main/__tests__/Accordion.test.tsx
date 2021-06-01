import React, {ReactElement} from 'react';
import {RenderAPI, fireEvent, render} from '@testing-library/react-native';
import {createComponent, createTestProps} from '../../test/testUtils';

import {Accordion} from '../../main';
import {ThemeProvider} from '../theme';

let props: any;
let component: ReactElement;
let testingLib: RenderAPI;

const data = [
  {
    title: 'title1',
    bodies: ['body1', 'body2', 'body3'],
  },
  {
    title: 'title2',
    bodies: ['body1', 'body2', 'body3'],
  },
  {
    title: 'title3',
    bodies: ['body1', 'body2', 'body3'],
  },
];

describe('[Accordion] render test', () => {
  it('should render without crasing', () => {
    props = createTestProps({data: data});

    component = createComponent(<Accordion {...props} />);

    testingLib = render(component);

    const json = testingLib.toJSON();

    expect(json).toMatchSnapshot();
  });

  it('should render collapsed when collapseOnStart props is true', () => {
    props = createTestProps({
      collapseOnStart: true,
      data: data,
    });

    component = <Accordion {...props} />;
    testingLib = render(component);

    const json = testingLib.toJSON();

    expect(json).toMatchSnapshot();
  });

  it('should operate animation when isAnimated props is true', () => {
    jest.useFakeTimers();

    props = createTestProps({
      isAnimated: true,
      data: data,
    });

    component = <Accordion {...props} />;
    jest.runAllTimers();

    testingLib = render(component);

    const json = testingLib.toJSON();

    expect(json).toMatchSnapshot();
  });

  it('should adjust duration of animation depends on animDuration props value', () => {
    props = createTestProps({
      animDuration: 500,
      data: data,
    });

    component = <Accordion {...props} />;
    testingLib = render(component);

    const json = testingLib.toJSON();

    expect(json).toMatchSnapshot();
  });
});

describe('[Accordion] event test', () => {
  beforeEach(() => {
    props = createTestProps({
      data: data,
    });

    component = <Accordion {...props} />;
    testingLib = render(component);
  });

  it('should trigger onLayout event when itemBody rendered', () => {
    const {getByTestId} = testingLib;
    const itemTitle = getByTestId('body_0');

    fireEvent(itemTitle, 'layout', {
      nativeEvent: {
        layout: {
          height: 300,
        },
      },
    });
  });

  it('should trigger press event when clicking title', () => {
    fireEvent.press(testingLib.getByTestId('title_0'));
  });
});
