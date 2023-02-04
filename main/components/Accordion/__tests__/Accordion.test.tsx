import {createComponent, createTestProps} from '../../../../test/testUtils';
import {fireEvent, render} from '@testing-library/react-native';

import {Accordion} from '../../..';
import React from 'react';
import type {ReactElement} from 'react';
import type {RenderAPI} from '@testing-library/react-native';

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
  it('should render without crashing', () => {
    props = createTestProps({data: data});

    component = createComponent(<Accordion {...props} />);

    testingLib = render(component);

    const json = testingLib.toJSON();
    expect(json).toBeTruthy();
  });

  it('should render collapsed when collapseOnStart props is true', () => {
    props = createTestProps({
      collapseOnStart: true,
      data: data,
    });

    component = createComponent(<Accordion {...props} />);
    testingLib = render(component);

    const json = testingLib.toJSON();

    expect(json).toBeTruthy();
  });

  it('should operate animation when shouldAnimate props is true', () => {
    props = createTestProps({
      shouldAnimate: true,
      data: data,
    });

    component = createComponent(<Accordion {...props} />);

    testingLib = render(component);

    const json = testingLib.toJSON();

    expect(json).toBeTruthy();
  });

  it('should adjust duration of animation depends on animDuration props value', () => {
    props = createTestProps({
      animDuration: 500,
      data: data,
    });

    component = createComponent(<Accordion {...props} />);
    testingLib = render(component);

    const json = testingLib.toJSON();

    expect(json).toBeTruthy();
  });
});

describe('[Accordion] event test', () => {
  beforeEach(() => {
    props = createTestProps({
      data: data,
    });

    component = createComponent(<Accordion {...props} />);
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

    expect(itemTitle.props.style.height).toBeDefined();
  });

  it('should trigger press event when clicking title', () => {
    fireEvent.press(testingLib.getByTestId('title_0'));

    expect(
      testingLib.getByTestId('body_0').props.accessibilityState.expanded,
    ).toBeTruthy();
  });
});
