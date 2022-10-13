import type {ReactElement} from 'react';
import React from 'react';

import IconButtonStory from './DefaultStory';
import {ThemeProvider} from '@dooboo-ui/theme';
import {storiesOf} from '@storybook/react-native';

/**
 * Below are stories for web
 */
export default {
  title: 'Icon',
};

export const toStorybook = (): ReactElement => <IconButtonStory />;

toStorybook.story = {
  name: 'font icons',
};

/**
 * Below are stories for app
 */
storiesOf('IconButton', module)
  .add('IconButton - light', () => (
    <ThemeProvider initialThemeType="light">
      <IconButtonStory />
    </ThemeProvider>
  ))
  .add('IconButton - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <IconButtonStory />
    </ThemeProvider>
  ));
