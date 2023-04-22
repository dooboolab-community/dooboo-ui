import type {ReactElement} from 'react';
import React from 'react';
import {Text} from 'react-native';
import type {RenderAPI} from '@testing-library/react-native';
import {fireEvent, render} from '@testing-library/react-native';

import {createComponent, createTestProps} from '../../../../test/testUtils';
import type {AccordionItemDataType} from '../../..';
import {Accordion} from '../../..';

let props: any;
let component: ReactElement;
let testingLib: RenderAPI;

const data: AccordionItemDataType<string, string>[] = [
  {
    title: 'title1',
    items: ['body1', 'body2', 'body3'],
  },
  {
    title: 'title2',
    items: ['body1', 'body2', 'body3'],
  },
  {
    title: 'title3',
    items: ['body1', 'body2', 'body3'],
  },
];

describe('[Accordion] render test', () => {
  it('should render without crashing', () => {
    props = createTestProps({
      data: data,
      renderTitle: (title) => <Text>{title}</Text>,
      renderItem: (item) => <Text>{item}</Text>,
    });

    component = createComponent(<Accordion {...props} />);

    testingLib = render(component);

    const json = testingLib.toJSON();
    expect(json).toBeTruthy();
  });

  it('should render collapsed when collapseOnStart props is true', () => {
    props = createTestProps({
      collapseOnStart: true,
      data: data,
      renderTitle: (title) => <Text>{title}</Text>,
      renderItem: (item) => <Text>{item}</Text>,
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
      renderTitle: (title) => <Text>{title}</Text>,
      renderItem: (item) => <Text>{item}</Text>,
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
      renderTitle: (title) => <Text>{title}</Text>,
      renderItem: (item) => <Text>{item}</Text>,
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
      renderTitle: (title) => <Text>{title}</Text>,
      renderItem: (item) => <Text>{item}</Text>,
    });

    component = createComponent(<Accordion {...props} />);
    testingLib = render(component);
  });

  it('should trigger onLayout event when itemBody rendered', () => {
    const {getByTestId} = testingLib;
    const itemTitle = getByTestId('body-0');

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
    fireEvent.press(testingLib.getByTestId('title-0'));

    expect(
      testingLib.getByTestId('body-0').props.accessibilityState.expanded,
    ).toBeTruthy();
  });
});
