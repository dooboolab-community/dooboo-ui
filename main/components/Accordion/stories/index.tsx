import {AccordionDefault} from './DefaultStory';
import React from 'react';
import {ThemeProvider} from '@dooboo-ui/theme';
import {storiesOf} from '@storybook/react-native';
import {withKnobs} from '@storybook/addon-knobs';

storiesOf('Accordion', module)
  .addDecorator(withKnobs)
  .add('Basic - light', () => (
    <ThemeProvider initialThemeType="light">
      <AccordionDefault />
    </ThemeProvider>
  ))
  .add('Basic - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <AccordionDefault />
    </ThemeProvider>
  ));
