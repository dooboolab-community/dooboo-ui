import React, {ReactElement} from 'react';
import {storiesOf} from '@storybook/react-native';
import {ThemeProvider} from '@dooboo-ui/theme';

import Dialog from './DefaultStory';

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
  .add('light', () => (
    <ThemeProvider initialThemeType="light">
      <Dialog />
    </ThemeProvider>
  ))
  .add('dark', () => (
    <ThemeProvider initialThemeType="dark">
      <Dialog />
    </ThemeProvider>
  ));
