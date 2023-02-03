import Dialog from './DefaultStory';
import React from 'react';
import type {ReactElement} from 'react';
import {ThemeProvider} from '@dooboo-ui/theme';
import {storiesOf} from '@storybook/react-native';

/**
 * Below are stories for web
 */
export default {
  title: 'AlertDialog',
};

export const toStorybook = (): ReactElement => <Dialog />;

toStorybook.story = {
  name: 'dialog',
};

/**
 * Below are stories for app
 */

storiesOf('AlertDialog', module)
  .add('Basic - light', () => (
    <ThemeProvider initialThemeType="light">
      <Dialog />
    </ThemeProvider>
  ))
  .add('Basic - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <Dialog />
    </ThemeProvider>
  ));
