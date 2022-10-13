import type {ReactElement} from 'react';
import React from 'react';

import SwitchToggleDefaultStory from './DefaultStory';
import {ThemeProvider} from '@dooboo-ui/theme';
import {storiesOf} from '@storybook/react-native';

/**
 * Below are stories for web
 */
export default {
  title: 'SwitchToggle',
};

export const toStorybook = (): ReactElement => <SwitchToggleDefaultStory />;

toStorybook.story = {
  name: 'switch toggle',
};

/**
 * Below are stories for app
 */
storiesOf('SwitchToggle', module)
  .add('switch toggle - light', () => (
    <ThemeProvider initialThemeType="light">
      <SwitchToggleDefaultStory />
    </ThemeProvider>
  ))
  .add('switch toggle - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <SwitchToggleDefaultStory />
    </ThemeProvider>
  ));
