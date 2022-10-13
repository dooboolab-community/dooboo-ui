import type {ReactElement} from 'react';
import React from 'react';

import DefaultStory from './DefaultStory';
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

export const toStorybook = (): ReactElement => <DefaultStory />;

toStorybook.story = {
  name: 'default',
};

/**
 * Below are stories for app
 */
storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withActions)
  .add('button - light', () => (
    <ThemeProvider initialThemeType="light">
      <DefaultStory />
    </ThemeProvider>
  ))
  .add('button - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <DefaultStory />
    </ThemeProvider>
  ));
