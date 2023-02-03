import {FABStory} from './DefaultStory';
import React from 'react';
import type {ReactElement} from 'react';
import {ThemeProvider} from '@dooboo-ui/theme';
import {storiesOf} from '@storybook/react-native';

/**
 * Below are stories for web
 */
export default {
  title: 'FAB',
};

export const toStorybook = (): ReactElement => <FABStory />;

toStorybook.story = {
  name: 'FAB',
};

/**
 * Below are stories for app
 */
storiesOf('FAB', module)
  .add('Basic - light', () => (
    <ThemeProvider initialThemeType="light">
      <FABStory />
    </ThemeProvider>
  ))
  .add('Basic - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <FABStory />
    </ThemeProvider>
  ));
