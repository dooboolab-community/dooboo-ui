import React, {ReactElement} from 'react';

import {ContainerDeco} from '../../../storybook/decorators';
import SnackbarDefaultStory from './SnackbarDefaultStory';
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
  .addDecorator(ContainerDeco)
  .add('Snackbar - light', () => (
    <ThemeProvider initialThemeType="light">
      <SnackbarDefaultStory />
    </ThemeProvider>
  ))
  .add('Snackbar - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <SnackbarDefaultStory />
    </ThemeProvider>
  ));
