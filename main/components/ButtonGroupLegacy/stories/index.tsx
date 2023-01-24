import DefaultStory from './DefaultStory';
import React from 'react';
import type {ReactElement} from 'react';
import {ThemeProvider} from '@dooboo-ui/theme';
import {storiesOf} from '@storybook/react-native';

/**
 * Below are stories for web
 */
export default {
  title: 'ButtonGroupLegacy',
};

export const toStorybook = (): ReactElement => (
  <ThemeProvider initialThemeType="light">
    <DefaultStory />
  </ThemeProvider>
);

toStorybook.story = {
  name: 'ButtonGroupLegacy - 4 buttons',
};

/**
 * Below are stories for app
 */
storiesOf('ButtonGroupLegacy', module)
  .add('ButtonGroupLegacy - light', () => (
    <ThemeProvider initialThemeType="light">
      <DefaultStory />
    </ThemeProvider>
  ))
  .add('ButtonGroupLegacy - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <DefaultStory />
    </ThemeProvider>
  ));
