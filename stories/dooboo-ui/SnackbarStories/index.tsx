import React, {ReactElement} from 'react';

import SnackbarDefaultStory from './SnackbarDefaultStory';
import SnackbarWithActionStory from './SnackbarWithActionStory';
import {ThemeProvider} from '../../../main/theme';
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
  .add('Snackbar - light', () => (
    <ThemeProvider initialThemeType="light">
      <SnackbarDefaultStory />
    </ThemeProvider>
  ))
  .add('Snackbar - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <SnackbarDefaultStory />
    </ThemeProvider>
  ))
  .add('Snackbar with action - light', () => (
    <ThemeProvider initialThemeType="light">
      <SnackbarWithActionStory />
    </ThemeProvider>
  ));
