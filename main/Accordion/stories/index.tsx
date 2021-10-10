import {AccordionCustomStyle, AccordionDefault} from './DefaultStory';
import React, {ReactElement} from 'react';

import {ThemeProvider} from '@dooboo-ui/theme';
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
  .add('default', () => <AccordionDefault />)
  .add('default-dark', () => (
    <ThemeProvider initialThemeType="dark">
      <AccordionDefault />
    </ThemeProvider>
  ))
  .add('CustomStyle', () => <AccordionCustomStyle />)
  .add('CustomStyle-dark', () => (
    <ThemeProvider initialThemeType="dark">
      <AccordionCustomStyle />
    </ThemeProvider>
  ));
