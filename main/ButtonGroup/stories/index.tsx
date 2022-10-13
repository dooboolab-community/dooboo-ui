import type {ReactElement} from 'react';
import React from 'react';

import DefaultStory from './DefaultStory';
import {ThemeProvider} from '@dooboo-ui/theme';
import {storiesOf} from '@storybook/react-native';

/**
 * Below are stories for web
 */
export default {
  title: 'ButtonGroup',
};

export const toStorybook = (): ReactElement => <DefaultStory />;

toStorybook.story = {
  name: 'ButtonGroup - 4 buttons',
};

/**
 * Below are stories for app
 */
storiesOf('ButtonGroup', module)
  .add('ButtonGroup - light', () => (
    <ThemeProvider initialThemeType="light">
      <DefaultStory />
    </ThemeProvider>
  ))
  .add('ButtonGroup - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <DefaultStory />
    </ThemeProvider>
  ));
