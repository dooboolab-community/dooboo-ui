import React, {ReactElement} from 'react';

import {AccordionDefault} from './DefaultStory';
import {ThemeProvider} from '@dooboo-ui/theme';
import {storiesOf} from '@storybook/react-native';
import {withKnobs} from '@storybook/addon-knobs';

/**
 * Below are stories for web
 */
export default {
  title: 'Accordion',
};

export const toStorybook = (): ReactElement => <AccordionDefault />;

toStorybook.story = {
  name: 'default',
};

/**
 * Below are stories for app
 */
storiesOf('Accordion', module)
  .addDecorator(withKnobs)
  .add('Accordion - light', () => (
    <ThemeProvider initialThemeType="light">
      <AccordionDefault />
    </ThemeProvider>
  ))
  .add('Accordion - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <AccordionDefault />
    </ThemeProvider>
  ));
