import ProgressLineDefaultStory from './DefaultStory';
import React from 'react';
import type {ReactElement} from 'react';
import {ThemeProvider} from '@dooboo-ui/theme';
import {storiesOf} from '@storybook/react-native';
import {withActions} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';

/**
 * Below are stories for web
 */
export default {
  title: 'ProgressLine',
};

export const toStorybook = (): ReactElement => <ProgressLineDefaultStory />;

toStorybook.story = {
  name: 'ProgressLine',
};

/**
 * Below are stories for app
 */
storiesOf('ProgressLine', module)
  .addDecorator(withKnobs)
  .addDecorator(withActions)
  .add('Basic - light', () => (
    <ThemeProvider initialThemeType="light">
      <ProgressLineDefaultStory />
    </ThemeProvider>
  ))
  .add('Basic - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <ProgressLineDefaultStory />
    </ThemeProvider>
  ));
