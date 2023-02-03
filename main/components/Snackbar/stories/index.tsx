import React from 'react';
import type {ReactElement} from 'react';
import SnackbarContent from './ProviderStory';
import SnackbarDefaultStory from './DefaultStory';
import SnackbarWithActionStory from './ActionStory';
import {ThemeProvider} from '@dooboo-ui/theme';
import {storiesOf} from '@storybook/react-native';

/**
 * Below are stories for web
 */
export default {
  title: 'Snackbar',
};

export const toStorybook = (): ReactElement => <SnackbarDefaultStory />;

toStorybook.story = {
  name: 'radio button',
};

/**
 * Below are stories for app
 */
storiesOf('Snackbar', module)
  .add('Basic - light', () => (
    <ThemeProvider initialThemeType="light">
      <SnackbarDefaultStory />
    </ThemeProvider>
  ))
  .add('Basic - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <SnackbarDefaultStory />
    </ThemeProvider>
  ))
  .add('Provider', () => (
    <ThemeProvider initialThemeType="light">
      <SnackbarContent />
    </ThemeProvider>
  ))
  .add('Action', () => (
    <ThemeProvider initialThemeType="light">
      <SnackbarWithActionStory />
    </ThemeProvider>
  ));
