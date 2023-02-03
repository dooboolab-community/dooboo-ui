import RadioGroupDefaultStory from './DefaultStory';
import React from 'react';
import type {ReactElement} from 'react';
import {ThemeProvider} from '@dooboo-ui/theme';
import {storiesOf} from '@storybook/react-native';

/**
 * Below are stories for web
 */
export default {
  title: 'RadioGroup',
};

export const toStorybook = (): ReactElement => <RadioGroupDefaultStory />;

toStorybook.story = {
  name: 'radio button',
};

/**
 * Below are stories for app
 */
storiesOf('RadioGroup', module)
  .add('Basic - light', () => (
    <ThemeProvider initialThemeType="light">
      <RadioGroupDefaultStory />
    </ThemeProvider>
  ))
  .add('Basic - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <RadioGroupDefaultStory />
    </ThemeProvider>
  ));
