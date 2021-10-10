import {AccordionCustomStyle, AccordionDefault} from './stories';
import React, {ReactElement} from 'react';

import {storiesOf} from '@storybook/react-native';

/**
 * Below are stories for web
 */
export default {
  title: 'Accordion',
};

export const toStorybook1 = (): ReactElement => <AccordionDefault />;
export const toStorybook2 = (): ReactElement => <AccordionCustomStyle />;

toStorybook1.story = {
  name: 'default',
};

toStorybook2.story = {
  name: 'CustomStyle',
};

/**
 * Below are stories for app
 */
storiesOf('Accordion', module)
  .add('default', () => <AccordionDefault />, {
    notes: 'Simple explanation',
  })
  .add('CustomStyle', () => <AccordionCustomStyle />, {
    notes: 'Can custom component',
  });
