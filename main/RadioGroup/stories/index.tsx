import React, {ReactElement} from 'react';

import RadioGroupDefaultStory from './DefaultStory';
import {ThemeProvider} from '../../theme';
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
  .add('radio group - light', () => (
    <ThemeProvider initialThemeType="light">
      <RadioGroupDefaultStory />
    </ThemeProvider>
  ))
  .add('radio group - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <RadioGroupDefaultStory />
    </ThemeProvider>
  ));
