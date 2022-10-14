import NetworkImageStory from './DefaultStory';
import React from 'react';
import type {ReactElement} from 'react';
import {ThemeProvider} from '@dooboo-ui/theme';
import {storiesOf} from '@storybook/react-native';

/**
 * Below are stories for web
 */
export default {
  title: 'NetworkImage',
};

export const toStorybook = (): ReactElement => <NetworkImageStory />;

toStorybook.story = {
  name: 'NetworkImage',
};

/**
 * Below are stories for app
 */
storiesOf('NetworkImage', module)
  .add('NetworkImage - light', () => (
    <ThemeProvider initialThemeType="light">
      <NetworkImageStory />
    </ThemeProvider>
  ))
  .add('NetworkImage - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <NetworkImageStory />
    </ThemeProvider>
  ));
