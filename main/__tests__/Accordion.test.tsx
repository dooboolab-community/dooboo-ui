import type {ReactElement} from 'react';
import React from 'react';
import type {RenderAPI} from '@testing-library/react-native';
import {act, fireEvent, render} from '@testing-library/react-native';
import {createComponent, createTestProps} from '../../test/testUtils';

import {Accordion} from '../../main';

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

    expect(json).toMatchSnapshot();
  });

  it('should render collapsed when collapseOnStart props is true', () => {
    props = createTestProps({
      collapseOnStart: true,
      data: data,
    });

    component = createComponent(<Accordion {...props} />);
    testingLib = render(component);

    const json = testingLib.toJSON();

    expect(json).toMatchSnapshot();
  });

  it('should operate animation when shouldAnimate props is true', () => {
    props = createTestProps({
      shouldAnimate: true,
      data: data,
    });

    component = createComponent(<Accordion {...props} />);

    testingLib = render(component);

    const json = testingLib.toJSON();

    expect(json).toMatchSnapshot();
  });

  it('should adjust duration of animation depends on animDuration props value', () => {
    props = createTestProps({
      animDuration: 500,
      data: data,
    });

    component = createComponent(<Accordion {...props} />);
    testingLib = render(component);

    const json = testingLib.toJSON();

    expect(json).toMatchSnapshot();
  });

  describe('[Accordion] - Change default value', () => {
    it('should expand the accordion by default when collapseOnStart props is false', () => {
      props = createTestProps({
        collapseOnStart: false,
        data: data,
      });

      const comp = createComponent(<Accordion {...props} />);

      testingLib = render(comp);

      const body0 = testingLib.queryByTestId('body_0');

      act(() => {
        fireEvent(body0, 'layout', {
          nativeEvent: {
            layout: {
              height: 170,
            },
          },
        });
      });

      expect(body0.props.style.height).toBeDefined();
      expect(body0.props.accessibilityState.expanded).toBeTruthy();
    });
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
  });

  it('should trigger press event when clicking title', () => {
    fireEvent.press(testingLib.getByTestId('title_0'));
  });
});
