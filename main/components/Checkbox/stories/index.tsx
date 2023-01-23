import CheckboxStory from './DefaultStory';
import React from 'react';
import type {ReactElement} from 'react';
import {ThemeProvider} from '@dooboo-ui/theme';
import {storiesOf} from '@storybook/react-native';

/**
 * Below are stories for web
 */
export default {
  title: 'Icon',
};

export const toStorybook = (): ReactElement => <CheckboxStory />;

toStorybook.story = {
  name: 'Checkbox',
};

/**
 * Below are stories for app
 */
storiesOf('Checkbox', module)
  .add('Checkbox - light', () => (
    <ThemeProvider initialThemeType="light">
      <CheckboxStory />
    </ThemeProvider>
  ))
  .add('Checkbox - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <CheckboxStory />
    </ThemeProvider>
  ));
