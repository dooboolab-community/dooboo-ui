import DefaultStory from './DefaultStory';
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
  title: 'Button',
};

export const toStorybook = (): ReactElement => (
  <DefaultStory themeType="light" />
);

toStorybook.story = {
  name: 'default',
};

/**
 * Below are stories for app
 */
storiesOf('Button & Icon Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withActions)
  .add('LIGHT', () => (
    <ThemeProvider initialThemeType="light">
      <DefaultStory themeType="light" />
    </ThemeProvider>
  ))
  .add('DARK', () => (
    <ThemeProvider initialThemeType="dark">
      <DefaultStory themeType="dark" />
    </ThemeProvider>
  ));
