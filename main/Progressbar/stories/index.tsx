import ProgressbarDefaultStory from './DefaultStory';
import React from 'react';
import type {ReactElement} from 'react';
import {ThemeProvider} from '../../../packages/theme';
import {storiesOf} from '@storybook/react-native';
import {withActions} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';

/**
 * Below are stories for web
 */
export default {
  title: 'Progressbar',
};

export const toStorybook = (): ReactElement => <ProgressbarDefaultStory />;

toStorybook.story = {
  name: 'progressbar',
};

/**
 * Below are stories for app
 */
storiesOf('Progressbar', module)
  .addDecorator(withKnobs)
  .addDecorator(withActions)
  .add('Progressbar - light', () => (
    <ThemeProvider initialThemeType="light">
      <ProgressbarDefaultStory />
    </ThemeProvider>
  ))
  .add('Progressbar - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <ProgressbarDefaultStory />
    </ThemeProvider>
  ));
